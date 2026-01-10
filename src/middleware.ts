import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = context.url;
  const pathname = url.pathname;

  // Redirect /id/* to /* (removing /id prefix)
  // But don't redirect /en/* as it's already correct
  if (pathname.startsWith('/id/')) {
    const newPath = pathname.replace(/^\/id/, '');
    const newUrl = new URL(newPath + (url.search || ''), url.origin);
    return Response.redirect(newUrl.toString(), 301);
  }

  // If path is exactly /id, redirect to /
  if (pathname === '/id') {
    const newUrl = new URL('/', url.origin);
    return Response.redirect(newUrl.toString(), 301);
  }

  // Continue with the request for all other paths
  return next();
};
