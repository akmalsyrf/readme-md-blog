import type { APIRoute } from 'astro';
import { queryRAG, generateRecommendations } from '../../utils/rag/ragQuery';
import { embedNotes } from '../../utils/rag/embedNotes';
import { getVectorStore } from '../../utils/rag/vectorStore';
import { getClientIP, checkRateLimit, RATE_LIMIT_CONFIG } from '../../utils/api/rateLimit';
import { getCORSHeaders } from '../../utils/api/cors';
import {
  getApiKey,
  validateApiKey,
  extractAdminKey,
  validateAdminKey,
  validateRequestSize,
  validateQuestion,
  MAX_QUESTION_LENGTH,
  MAX_REQUEST_SIZE,
} from '../../utils/api/security';
import { parseRequestBody } from '../../utils/api/requestParser';

// Disable prerendering for this API route (required for hybrid mode)
export const prerender = false;

// Validate API key on module load
const apiKey = getApiKey();
if (!apiKey || apiKey.trim() === '') {
  console.warn('⚠️  GEMINI_API_KEY is not set. Chat functionality will not work.');
}

// Handle OPTIONS for CORS preflight
export const OPTIONS: APIRoute = ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);
  const clientIP = getClientIP(request);

  try {
    // Rate limiting check
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: 'Too many requests. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(RATE_LIMIT_CONFIG.MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetTime / 1000)),
          },
        }
      );
    }

    // Check request size
    const contentLength = request.headers.get('content-length');
    const sizeValidation = validateRequestSize(contentLength);
    if (!sizeValidation.valid) {
      return new Response(
        JSON.stringify({
          error: sizeValidation.error,
          message: `Request body must be smaller than ${MAX_REQUEST_SIZE / 1024}KB`,
        }),
        { status: 413, headers: corsHeaders }
      );
    }

    // Check API key first
    const apiKeyValidation = validateApiKey();
    if (!apiKeyValidation.valid) {
      return new Response(
        JSON.stringify({
          error: apiKeyValidation.error,
          message: 'GEMINI_API_KEY is not set. Please configure it in your .env file.',
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Parse request body
    const parseResult = await parseRequestBody(request);
    if (!parseResult.success) {
      return new Response(
        JSON.stringify({
          error: parseResult.error,
          message: parseResult.message,
        }),
        { status: parseResult.status, headers: corsHeaders }
      );
    }
    const body = parseResult.body;

    const { question, locale, action, currentPage } = body;

    // Handle 'getRecommendations' action
    if (action === 'getRecommendations') {
      const detectedLocale: 'id' | 'en' = locale === 'en' ? 'en' : 'id';

      // Initialize vector store if empty
      const vectorStore = getVectorStore();
      const documentCount = vectorStore.getDocumentCount();

      if (documentCount === 0) {
        try {
          await embedNotes(detectedLocale);
        } catch (error) {
          console.error('Error initializing vector store for recommendations:', error);
          // Continue anyway, will return empty recommendations
        }
      }

      try {
        // Prepare current page context if provided
        const currentPageContext = currentPage
          ? {
              title: currentPage.title,
              noteId: currentPage.noteId,
              url: currentPage.url,
            }
          : undefined;

        const recommendations = await generateRecommendations(
          detectedLocale,
          5,
          currentPageContext
        );
        return new Response(
          JSON.stringify({
            success: true,
            recommendations,
          }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              'X-RateLimit-Remaining': String(rateLimit.remaining),
            },
          }
        );
      } catch (error) {
        console.error('Error generating recommendations:', error);
        return new Response(
          JSON.stringify({
            success: true,
            recommendations: [],
          }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              'X-RateLimit-Remaining': String(rateLimit.remaining),
            },
          }
        );
      }
    }

    // Protect 'initialize' action - require admin API key
    if (action === 'initialize') {
      const providedKey = extractAdminKey(request, body);
      const adminValidation = validateAdminKey(providedKey);

      if (!adminValidation.valid) {
        const message =
          adminValidation.error === 'Configuration error'
            ? 'Admin API key is not configured. Please set ADMIN_API_KEY in environment variables.'
            : 'Admin API key required for initialize action. Provide it via Authorization: Bearer <key> header or adminKey in request body.';

        return new Response(
          JSON.stringify({
            error: adminValidation.error,
            message,
          }),
          {
            status: adminValidation.error === 'Configuration error' ? 500 : 401,
            headers: corsHeaders,
          }
        );
      }

      // Re-embed notes (admin only)
      const detectedLocale = locale || 'id';
      try {
        await embedNotes(detectedLocale);
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Vector store initialized',
            count: getVectorStore().getDocumentCount(),
          }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              'X-RateLimit-Remaining': String(rateLimit.remaining),
            },
          }
        );
      } catch (error) {
        console.error('Error initializing vector store:', error);
        return new Response(
          JSON.stringify({
            error: 'Failed to initialize vector store',
            message: error instanceof Error ? error.message : 'Unknown error',
          }),
          { status: 500, headers: corsHeaders }
        );
      }
    }

    // Initialize vector store if empty (automatic, but rate-limited)
    const vectorStore = getVectorStore();
    const documentCount = vectorStore.getDocumentCount();

    if (documentCount === 0) {
      // Embed notes on first request
      // This will make multiple API calls (one per chunk), so it may take time
      // eslint-disable-next-line no-console
      console.log('Vector store is empty, initializing with embeddings...');
      const detectedLocale = locale || 'id';
      try {
        await embedNotes(detectedLocale);
        // eslint-disable-next-line no-console
        console.log(`Vector store initialized with ${vectorStore.getDocumentCount()} documents`);
      } catch (error) {
        console.error('Error embedding notes:', error);
        return new Response(
          JSON.stringify({
            error: 'Failed to initialize vector store',
            message: error instanceof Error ? error.message : 'Unknown error',
            note: 'This may be due to API rate limits. Please wait a moment and try again.',
          }),
          { status: 500, headers: corsHeaders }
        );
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(`Using existing vector store with ${documentCount} documents`);
    }

    // Validate question (skip if action is getRecommendations)
    if (!question) {
      return new Response(
        JSON.stringify({
          error: 'Question is required',
          message: 'Question parameter is required for chat queries.',
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': String(rateLimit.remaining),
          },
        }
      );
    }

    const questionValidation = validateQuestion(question);
    if (!questionValidation.valid) {
      const message =
        questionValidation.error === 'Question too long'
          ? `Question must be shorter than ${MAX_QUESTION_LENGTH} characters`
          : questionValidation.error;

      return new Response(
        JSON.stringify({
          error: questionValidation.error,
          message,
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': String(rateLimit.remaining),
          },
        }
      );
    }

    const detectedLocale: 'id' | 'en' = locale === 'en' ? 'en' : 'id';

    try {
      // Prepare current page context if provided
      const currentPageContext = currentPage
        ? {
            title: currentPage.title,
            noteId: currentPage.noteId,
            url: currentPage.url,
          }
        : undefined;

      const response = await queryRAG(question.trim(), detectedLocale, 5, currentPageContext);
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          ...corsHeaders,
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetTime / 1000)),
        },
      });
    } catch (error) {
      console.error('Error querying RAG:', error);
      return new Response(
        JSON.stringify({
          error: 'Failed to process query',
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': String(rateLimit.remaining),
          },
        }
      );
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
};
