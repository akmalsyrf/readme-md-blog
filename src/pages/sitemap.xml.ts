import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async ({ site }) => {
  const siteOrigin = new URL(site?.href ?? 'https://akmal-mind.vercel.app').origin;
  const absoluteUrl = (path: string) => new URL(path, siteOrigin).href;
  const allPosts = await getCollection('notes');

  // Get posts for both locales (only published posts)
  const idPosts = allPosts.filter((post) => post.data.isPublished && post.slug.endsWith('/id'));
  const enPosts = allPosts.filter((post) => post.data.isPublished && post.slug.endsWith('/en'));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>${absoluteUrl('/')}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en')}" />
  </url>
  <url>
    <loc>${absoluteUrl('/en')}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en')}" />
  </url>

  <!-- About -->
  <url>
    <loc>${absoluteUrl('/about')}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/about')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en/about')}" />
  </url>
  <url>
    <loc>${absoluteUrl('/en/about')}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/about')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en/about')}" />
  </url>
  
  <!-- Blog Index -->
  <url>
    <loc>${absoluteUrl('/notes')}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/notes')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en/notes')}" />
  </url>
  <url>
    <loc>${absoluteUrl('/en/notes')}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${absoluteUrl('/notes')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl('/en/notes')}" />
  </url>

  <!-- Blog Posts - Indonesian -->
  ${idPosts
    .map((post) => {
      const slug = post.slug.replace(/\/id$/, '');
      const postURL = absoluteUrl(getLocalizedPath(`/notes/${slug}`, 'id'));
      const enPostURL = absoluteUrl(getLocalizedPath(`/notes/${slug}`, 'en'));
      return `  <url>
    <loc>${postURL}</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${postURL}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enPostURL}" />
  </url>`;
    })
    .join('\n')}

  <!-- Blog Posts - English -->
  ${enPosts
    .map((post) => {
      const slug = post.slug.replace(/\/en$/, '');
      const postURL = absoluteUrl(getLocalizedPath(`/notes/${slug}`, 'en'));
      const idPostURL = absoluteUrl(getLocalizedPath(`/notes/${slug}`, 'id'));
      return `  <url>
    <loc>${postURL}</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${idPostURL}" />
    <xhtml:link rel="alternate" hreflang="en" href="${postURL}" />
  </url>`;
    })
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
