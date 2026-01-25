import type { APIRoute } from 'astro';
import { getCORSHeaders } from '../../utils/api/cors';
import { createErrorResponse, createSuccessResponse } from '../../utils/api/response';

// Disable prerendering for this API route
export const prerender = false;

export const OPTIONS: APIRoute = ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin, 'GET, OPTIONS');
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

export const GET: APIRoute = async ({ request, url }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin, 'GET, OPTIONS');

  try {
    // Get pathname from query parameter
    const pathname = url.searchParams.get('pathname');

    if (!pathname) {
      return createErrorResponse(
        'Missing pathname parameter',
        'Please provide a pathname query parameter',
        400,
        corsHeaders
      );
    }

    // Get Giscus config from environment variables
    const giscusRepo = import.meta.env.PUBLIC_GISCUS_REPO;
    const giscusCategory = import.meta.env.PUBLIC_GISCUS_CATEGORY;
    const giscusCategoryId = import.meta.env.PUBLIC_GISCUS_CATEGORY_ID;

    if (!giscusRepo || !giscusCategory || !giscusCategoryId) {
      return createErrorResponse(
        'Giscus not configured',
        'Giscus configuration is missing',
        500,
        corsHeaders
      );
    }

    // Fetch from Giscus API (server-side)
    const giscusUrl = `https://giscus.app/api/discussions?repo=${encodeURIComponent(giscusRepo)}&category=${encodeURIComponent(giscusCategory)}&categoryId=${giscusCategoryId}&mapping=pathname&term=${encodeURIComponent(pathname)}`;

    const response = await fetch(giscusUrl, {
      headers: {
        'User-Agent': 'readme-md-blog/1.0',
      },
    });

    if (!response.ok) {
      return createErrorResponse(
        'Failed to fetch from Giscus',
        `Giscus API returned status ${response.status}`,
        response.status,
        corsHeaders
      );
    }

    const data = await response.json();

    // Handle different response formats from Giscus API
    // Response can be: { discussion: { reactionCount: ..., totalCommentCount: ... } } or array of such objects
    let reactionCount = 0;
    let commentCount = 0;

    if (Array.isArray(data) && data.length > 0) {
      // Giscus API returns array of discussion objects
      const item = data[0];
      const discussion = item.discussion || item;
      reactionCount = discussion.reactionCount || 0;
      commentCount = discussion.totalCommentCount || 0;
    } else if (data && typeof data === 'object') {
      // Single discussion object - check for nested discussion property
      const discussion = data.discussion || data;
      reactionCount = discussion.reactionCount || 0;
      commentCount = discussion.totalCommentCount || 0;
    }

    return createSuccessResponse(
      {
        reactionCount,
        commentCount,
      },
      corsHeaders
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Giscus stats:', error);
    return createErrorResponse(
      'Internal server error',
      error instanceof Error ? error.message : 'Unknown error',
      500,
      corsHeaders
    );
  }
};
