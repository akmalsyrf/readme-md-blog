/**
 * Response helper utilities for API routes
 */

/**
 * Create error response
 */
export function createErrorResponse(
  error: string,
  message: string,
  status: number,
  corsHeaders: Record<string, string>,
  rateLimitRemaining?: number
): Response {
  const headers: Record<string, string> = { ...corsHeaders };
  if (rateLimitRemaining !== undefined) {
    headers['X-RateLimit-Remaining'] = String(rateLimitRemaining);
  }

  return new Response(JSON.stringify({ error, message }), {
    status,
    headers,
  });
}

/**
 * Create success response
 */
export function createSuccessResponse(
  data: unknown,
  corsHeaders: Record<string, string>,
  rateLimitRemaining?: number
): Response {
  const headers: Record<string, string> = { ...corsHeaders };
  if (rateLimitRemaining !== undefined) {
    headers['X-RateLimit-Remaining'] = String(rateLimitRemaining);
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers,
  });
}
