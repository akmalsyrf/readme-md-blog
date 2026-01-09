import type { APIRoute } from 'astro';
import { addNotesForLocale } from '../../utils/rag/embedNotes';
import { getVectorStore } from '../../utils/rag/vectorStore';
import { getCORSHeaders } from '../../utils/api/cors';
import type { Locale } from '../../utils/i18n';

// Disable prerendering for this API route (required for hybrid mode)
export const prerender = false;

/**
 * Initialize vector store for a locale if it doesn't exist
 * This endpoint is called on page load to pre-initialize the vector store
 * so that chat initialization doesn't have to wait for chunking
 */
export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);

  try {
    // Parse request body to get locale
    const body = await request.json().catch(() => ({}));
    const locale: Locale = (body.locale === 'en' ? 'en' : 'id') as Locale;

    const vectorStore = getVectorStore();
    const documentCount = vectorStore.getDocumentCount();
    const docsForLocale = vectorStore.getAllDocuments(locale);

    // Only initialize if vector store is empty or doesn't have documents for this locale
    if (documentCount === 0 || docsForLocale.length === 0) {
      // eslint-disable-next-line no-console
      console.log(
        `Initializing vector store for locale '${locale}' (current: ${documentCount} total, ${docsForLocale.length} for locale)...`
      );

      try {
        await addNotesForLocale(locale);
        const finalCount = vectorStore.getDocumentCount();
        const finalDocsForLocale = vectorStore.getAllDocuments(locale);

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Vector store initialized',
            locale,
            totalDocuments: finalCount,
            documentsForLocale: finalDocsForLocale.length,
          }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error initializing vector store for locale '${locale}':`, error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Failed to initialize vector store',
            message: error instanceof Error ? error.message : 'Unknown error',
          }),
          {
            status: 500,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      }
    } else {
      // Vector store already has data for this locale
      // eslint-disable-next-line no-console
      console.log(
        `Vector store already initialized for locale '${locale}' (${documentCount} total documents, ${docsForLocale.length} for locale). Skipping.`
      );

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Vector store already initialized',
          locale,
          totalDocuments: documentCount,
          documentsForLocale: docsForLocale.length,
          skipped: true,
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Init vectors API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

// Handle OPTIONS for CORS preflight
export const OPTIONS: APIRoute = ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};
