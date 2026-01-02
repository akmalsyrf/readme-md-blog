// CORS configuration
const ALLOWED_ORIGINS = (import.meta.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .filter(Boolean);

// CORS helper
export function getCORSHeaders(origin: string | null): Record<string, string> {
  const baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // If no allowed origins configured, allow all (for development)
  // In production, you should set ALLOWED_ORIGINS
  if (ALLOWED_ORIGINS.length === 0) {
    baseHeaders['Access-Control-Allow-Origin'] = '*';
  } else if (origin && ALLOWED_ORIGINS.includes(origin)) {
    baseHeaders['Access-Control-Allow-Origin'] = origin;
    baseHeaders['Access-Control-Allow-Credentials'] = 'true';
  }

  baseHeaders['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
  baseHeaders['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

  return baseHeaders;
}
