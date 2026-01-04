// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20; // Max 20 requests per minute per IP

// Rate limiting (simple in-memory store - for production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Helper function to get client IP
export function getClientIP(request: Request): string {
  // Try to get IP from various headers (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  // Fallback (will be undefined in serverless, but that's okay)
  return 'unknown';
}

// Rate limiting check
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // New window or expired
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - record.count,
    resetTime: record.resetTime,
  };
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

// Export constants for use in other modules
export const RATE_LIMIT_CONFIG = {
  WINDOW: RATE_LIMIT_WINDOW,
  MAX_REQUESTS: RATE_LIMIT_MAX_REQUESTS,
};

/**
 * Validate rate limit and return error response if exceeded
 */
export async function validateRateLimit(
  clientIP: string,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  const rateLimit = checkRateLimit(clientIP);
  if (!rateLimit.allowed) {
    // Dynamic import to avoid circular dependency
    const { createErrorResponse } = await import('./response');
    return createErrorResponse(
      'Rate limit exceeded',
      'Too many requests. Please try again later.',
      429,
      {
        ...corsHeaders,
        'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
        'X-RateLimit-Limit': String(RATE_LIMIT_CONFIG.MAX_REQUESTS),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetTime / 1000)),
      }
    );
  }
  return null;
}
