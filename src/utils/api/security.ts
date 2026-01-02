// Security configuration
export const MAX_QUESTION_LENGTH = 2000; // Maximum characters for question
export const MAX_REQUEST_SIZE = 100 * 1024; // 100KB max request body size

// Get API key from environment
export function getApiKey(): string {
  return import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
}

// Validate API key
export function validateApiKey(): { valid: boolean; error?: string } {
  const apiKey = getApiKey();
  if (!apiKey || apiKey.trim() === '') {
    return {
      valid: false,
      error: 'API key not configured',
    };
  }
  return { valid: true };
}

// Get admin API key from environment
export function getAdminApiKey(): string {
  return import.meta.env.ADMIN_API_KEY || process.env.ADMIN_API_KEY || '';
}

// Extract admin key from request
export function extractAdminKey(
  request: Request,
  body: Record<string, unknown> | null | undefined
): string | null {
  // Extract Bearer token from Authorization header (case-insensitive)
  const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
  let providedKey: string | null = null;

  if (authHeader) {
    // Handle "Bearer <token>" format (case-insensitive, with optional whitespace)
    const bearerRegex = /^Bearer\s+(.+)$/i;
    const bearerMatch = bearerRegex.exec(authHeader);
    if (bearerMatch) {
      providedKey = bearerMatch[1].trim();
    } else {
      // If no "Bearer" prefix, use the whole header value
      providedKey = authHeader.trim();
    }
  }

  // Fallback to adminKey in body (for convenience, but less secure)
  if (!providedKey && body?.adminKey) {
    providedKey = typeof body.adminKey === 'string' ? body.adminKey.trim() : null;
  }

  return providedKey;
}

// Validate admin key
export function validateAdminKey(providedKey: string | null): { valid: boolean; error?: string } {
  const adminKey = getAdminApiKey();

  if (!adminKey) {
    return {
      valid: false,
      error: 'Configuration error',
    };
  }

  if (!providedKey || providedKey !== adminKey) {
    return {
      valid: false,
      error: 'Unauthorized',
    };
  }

  return { valid: true };
}

// Validate request size
export function validateRequestSize(
  contentLength: string | null,
  bodyText?: string
): { valid: boolean; error?: string } {
  if (contentLength && Number.parseInt(contentLength, 10) > MAX_REQUEST_SIZE) {
    return {
      valid: false,
      error: 'Request too large',
    };
  }

  if (bodyText && bodyText.length > MAX_REQUEST_SIZE) {
    return {
      valid: false,
      error: 'Request too large',
    };
  }

  return { valid: true };
}

// Validate question
export function validateQuestion(question: unknown): { valid: boolean; error?: string } {
  if (!question || typeof question !== 'string' || question.trim() === '') {
    return {
      valid: false,
      error: 'Question is required and must be a non-empty string',
    };
  }

  if (question.length > MAX_QUESTION_LENGTH) {
    return {
      valid: false,
      error: 'Question too long',
    };
  }

  return { valid: true };
}
