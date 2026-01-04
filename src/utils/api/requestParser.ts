import { MAX_REQUEST_SIZE } from './security';

/**
 * Extract and validate request body fields
 */
export function extractRequestBodyFields(body: unknown): {
  question?: string;
  locale?: string;
  action?: string;
  stream: boolean;
  currentPage?: { title?: string; noteId?: string; url?: string };
  conversationHistory?: unknown;
} {
  if (typeof body !== 'object' || body === null) {
    return { stream: false };
  }

  const b = body as Record<string, unknown>;
  return {
    question: typeof b.question === 'string' ? b.question : undefined,
    locale: typeof b.locale === 'string' ? b.locale : undefined,
    action: typeof b.action === 'string' ? b.action : undefined,
    stream: typeof b.stream === 'boolean' ? b.stream : false,
    currentPage:
      b.currentPage && typeof b.currentPage === 'object' && !Array.isArray(b.currentPage)
        ? (b.currentPage as { title?: string; noteId?: string; url?: string })
        : undefined,
    conversationHistory: b.conversationHistory,
  };
}

// Parse and validate request body
export async function parseRequestBody(request: Request): Promise<
  | {
      success: true;
      body: Record<string, unknown>;
    }
  | {
      success: false;
      error: string;
      message: string;
      status: number;
    }
> {
  try {
    // Read body as text first to check size
    const bodyText = await request.text();

    // Check body size
    if (bodyText.length > MAX_REQUEST_SIZE) {
      return {
        success: false,
        error: 'Request too large',
        message: `Request body must be smaller than ${MAX_REQUEST_SIZE / 1024}KB`,
        status: 413,
      };
    }

    // Parse JSON
    const body = JSON.parse(bodyText);

    // Validate body is an object
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return {
        success: false,
        error: 'Invalid request body',
        message: 'Request body must be a JSON object with question and locale fields',
        status: 400,
      };
    }

    return { success: true, body };
  } catch (error) {
    // Handle specific error types
    if (error instanceof SyntaxError) {
      // Empty body or invalid JSON
      return {
        success: false,
        error: 'Invalid or empty request body',
        message:
          'Request body is required and must be valid JSON. Please send a JSON object with question and locale fields.',
        status: 400,
      };
    }

    if (error instanceof TypeError) {
      // Body already consumed or other type error
      return {
        success: false,
        error: 'Request body error',
        message:
          'Unable to read request body. Please ensure the request includes a valid JSON body.',
        status: 400,
      };
    }

    return {
      success: false,
      error: 'Failed to parse request',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      status: 400,
    };
  }
}
