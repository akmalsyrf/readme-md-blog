import type { APIRoute } from 'astro';
import { queryRAGStream, generateRecommendations } from '../../utils/rag/ragQuery';
import { addNotesForLocale, reEmbedNotes } from '../../utils/rag/embedNotes';
import { getVectorStore } from '../../utils/rag/vectorStore';
import type { Locale } from '../../utils/i18n';
import { getClientIP, checkRateLimit, validateRateLimit } from '../../utils/api/rateLimit';
import { getCORSHeaders } from '../../utils/api/cors';
import {
  getApiKey,
  extractAdminKey,
  validateAdminKey,
  validateQuestion,
  validateApiKeyConfig,
  checkRequestSize,
  MAX_QUESTION_LENGTH,
} from '../../utils/api/security';
import { parseRequestBody, extractRequestBodyFields } from '../../utils/api/requestParser';
import { createErrorResponse, createSuccessResponse } from '../../utils/api/response';
import { prepareConversationHistory, type ConversationMessage } from '../../utils/api/conversation';

// Disable prerendering for this API route (required for hybrid mode)
export const prerender = false;

// Validate API key on module load
const apiKey = getApiKey();
if (!apiKey || apiKey.trim() === '') {
  // eslint-disable-next-line no-console
  console.warn('⚠️  GEMINI_API_KEY is not set. Chat functionality will not work.');
}

/**
 * Ensure vector store has documents for locale
 */
async function ensureVectorStoreForLocale(
  locale: 'id' | 'en',
  vectorStore: ReturnType<typeof getVectorStore>
): Promise<void> {
  const documentCount = vectorStore.getDocumentCount();
  const docsForLocale = vectorStore.getAllDocuments(locale);
  const hasDocsForLocale = docsForLocale.length > 0;

  if (documentCount === 0 || !hasDocsForLocale) {
    try {
      if (documentCount > 0) {
        // eslint-disable-next-line no-console
        console.log(
          `Vector store has ${documentCount} documents but none for locale '${locale}'. Adding notes for this locale...`
        );
      }
      await addNotesForLocale(locale);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error initializing vector store for recommendations:', error);
    }
  }
}

/**
 * Handle getRecommendations action
 */
async function handleGetRecommendations(
  locale: string | undefined,
  currentPage: { title?: string; noteId?: string; url?: string } | undefined,
  corsHeaders: Record<string, string>,
  rateLimitRemaining: number
): Promise<Response> {
  const detectedLocale: 'id' | 'en' = locale === 'en' ? 'en' : 'id';
  const vectorStore = getVectorStore();

  await ensureVectorStoreForLocale(detectedLocale, vectorStore);

  try {
    const currentPageContext = currentPage
      ? {
          title: currentPage.title,
          noteId: currentPage.noteId,
          url: currentPage.url,
        }
      : undefined;

    const recommendations = await generateRecommendations(detectedLocale, 5, currentPageContext);
    return createSuccessResponse(
      { success: true, recommendations },
      corsHeaders,
      rateLimitRemaining
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating recommendations:', error);
    return createSuccessResponse(
      { success: true, recommendations: [] },
      corsHeaders,
      rateLimitRemaining
    );
  }
}

/**
 * Handle initialize action
 */
async function handleInitialize(
  request: Request,
  body: unknown,
  locale: string | undefined,
  corsHeaders: Record<string, string>,
  rateLimitRemaining: number
): Promise<Response> {
  const providedKey = extractAdminKey(
    request,
    body && typeof body === 'object' ? (body as Record<string, unknown>) : null
  );
  const adminValidation = validateAdminKey(providedKey);

  if (!adminValidation.valid) {
    const message =
      adminValidation.error === 'Configuration error'
        ? 'Admin API key is not configured. Please set ADMIN_API_KEY in environment variables.'
        : 'Admin API key required for initialize action. Provide it via Authorization: Bearer <key> header or adminKey in request body.';

    return createErrorResponse(
      adminValidation.error || 'Admin key validation failed',
      message,
      adminValidation.error === 'Configuration error' ? 500 : 401,
      corsHeaders
    );
  }

  const detectedLocaleForInit: Locale = (locale === 'en' ? 'en' : 'id') as Locale;
  try {
    await reEmbedNotes(detectedLocaleForInit);
    return createSuccessResponse(
      {
        success: true,
        message: 'Vector store initialized',
        count: getVectorStore().getDocumentCount(),
      },
      corsHeaders,
      rateLimitRemaining
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error initializing vector store:', error);
    return createErrorResponse(
      'Failed to initialize vector store',
      error instanceof Error ? error.message : 'Unknown error',
      500,
      corsHeaders
    );
  }
}

/**
 * Initialize vector store for query if needed
 */
async function initializeVectorStoreForQuery(
  locale: string | undefined,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  const vectorStore = getVectorStore();
  const documentCount = vectorStore.getDocumentCount();
  const detectedLocaleForQuery: 'id' | 'en' = locale === 'en' ? 'en' : 'id';

  if (documentCount === 0) {
    // eslint-disable-next-line no-console
    console.log('Vector store is empty, initializing with embeddings...');
    try {
      await addNotesForLocale(detectedLocaleForQuery);
      // eslint-disable-next-line no-console
      console.log(
        `Vector store initialized with ${vectorStore.getDocumentCount()} documents for locale '${detectedLocaleForQuery}'`
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error embedding notes:', error);
      return createErrorResponse(
        'Failed to initialize vector store',
        error instanceof Error ? error.message : 'Unknown error',
        500,
        corsHeaders
      );
    }
  } else {
    const docsForLocale = vectorStore.getAllDocuments(detectedLocaleForQuery);
    if (docsForLocale.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`No documents found for locale '${detectedLocaleForQuery}', adding now...`);
      try {
        await addNotesForLocale(detectedLocaleForQuery);
        // eslint-disable-next-line no-console
        console.log(
          `Added notes for locale '${detectedLocaleForQuery}'. Total documents: ${vectorStore.getDocumentCount()}`
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error embedding notes for locale '${detectedLocaleForQuery}':`, error);
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(
        `Using existing vector store with ${documentCount} documents (${docsForLocale.length} for locale '${detectedLocaleForQuery}')`
      );
    }
  }

  return null;
}

/**
 * Handle chat query (non-action requests)
 */
async function handleChatQuery(
  question: string,
  locale: string | undefined,
  currentPage: { title?: string; noteId?: string; url?: string } | undefined,
  conversationHistory: unknown,
  corsHeaders: Record<string, string>,
  rateLimit: { remaining: number; resetTime: number }
): Promise<Response> {
  const detectedLocaleForQuery: 'id' | 'en' = locale === 'en' ? 'en' : 'id';

  // Initialize vector store for query if needed
  const initResponse = await initializeVectorStoreForQuery(locale, corsHeaders);
  if (initResponse) {
    return initResponse;
  }

  // Validate question
  if (!question) {
    return createErrorResponse(
      'Question is required',
      'Question parameter is required for chat queries.',
      400,
      corsHeaders,
      rateLimit.remaining
    );
  }

  const questionValidation = validateQuestion(question);
  if (!questionValidation.valid) {
    const errorMsg = questionValidation.error || 'Invalid question';
    const message =
      questionValidation.error === 'Question too long'
        ? `Question must be shorter than ${MAX_QUESTION_LENGTH} characters`
        : errorMsg;

    return createErrorResponse(errorMsg, message, 400, corsHeaders, rateLimit.remaining);
  }

  const currentPageContext = currentPage
    ? {
        title: currentPage.title,
        noteId: currentPage.noteId,
        url: currentPage.url,
      }
    : undefined;

  const history = prepareConversationHistory(conversationHistory);

  return createStreamingResponse(
    question,
    detectedLocaleForQuery,
    currentPageContext,
    history,
    corsHeaders,
    rateLimit.remaining,
    rateLimit.resetTime
  );
}

/**
 * Create streaming response
 */
function createStreamingResponse(
  question: string,
  locale: 'id' | 'en',
  currentPageContext: { title?: string; noteId?: string; url?: string } | undefined,
  history: ConversationMessage[] | undefined,
  corsHeaders: Record<string, string>,
  rateLimitRemaining: number,
  rateLimitResetTime: number
): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of queryRAGStream(
          question.trim(),
          locale,
          5,
          currentPageContext,
          history
        )) {
          const jsonData = JSON.stringify(chunk);
          controller.enqueue(encoder.encode(`data: ${jsonData}\n\n`));
        }
        controller.close();
      } catch (error) {
        const errorChunk = {
          type: 'error',
          content: error instanceof Error ? error.message : 'Unknown error',
        };
        const jsonData = JSON.stringify(errorChunk);
        controller.enqueue(encoder.encode(`data: ${jsonData}\n\n`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'X-RateLimit-Remaining': String(rateLimitRemaining),
      'X-RateLimit-Reset': String(Math.ceil(rateLimitResetTime / 1000)),
    },
  });
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
    const rateLimitResponse = await validateRateLimit(clientIP, corsHeaders);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }
    const rateLimit = checkRateLimit(clientIP);

    // Check request size
    const contentLength = request.headers.get('content-length');
    const sizeResponse = await checkRequestSize(contentLength, corsHeaders);
    if (sizeResponse) {
      return sizeResponse;
    }

    // Check API key
    const apiKeyResponse = await validateApiKeyConfig(corsHeaders);
    if (apiKeyResponse) {
      return apiKeyResponse;
    }

    // Parse request body
    const parseResult = await parseRequestBody(request);
    if (!parseResult.success) {
      return createErrorResponse(
        parseResult.error,
        parseResult.message,
        parseResult.status,
        corsHeaders
      );
    }

    const body = parseResult.body;
    const { question, locale, action, stream, currentPage, conversationHistory } =
      extractRequestBodyFields(body);

    // Handle actions
    if (action === 'getRecommendations') {
      return await handleGetRecommendations(locale, currentPage, corsHeaders, rateLimit.remaining);
    }

    if (action === 'initialize') {
      return await handleInitialize(request, body, locale, corsHeaders, rateLimit.remaining);
    }

    // Handle streaming request
    if (!stream) {
      return createErrorResponse(
        'Streaming is required',
        'Please set stream: true in your request. Non-streaming queries are no longer supported.',
        400,
        corsHeaders,
        rateLimit.remaining
      );
    }

    try {
      return await handleChatQuery(
        question || '',
        locale,
        currentPage,
        conversationHistory,
        corsHeaders,
        rateLimit
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error querying RAG:', error);
      return createErrorResponse(
        'Failed to process query',
        error instanceof Error ? error.message : 'Unknown error',
        500,
        corsHeaders,
        rateLimit.remaining
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Chat API error:', error);
    return createErrorResponse(
      'Internal server error',
      error instanceof Error ? error.message : 'Unknown error',
      500,
      corsHeaders
    );
  }
};
