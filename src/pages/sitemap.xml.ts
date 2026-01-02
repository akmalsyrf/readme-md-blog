import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async ({ site }) => {
  const siteURL = site || new URL('https://readme-md-blog.vercel.app');
  const allPosts = await getCollection('notes');

  // Get posts for both locales
  const idPosts = allPosts.filter((post) => post.slug.endsWith('/id'));
  const enPosts = allPosts.filter((post) => post.slug.endsWith('/en'));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>${siteURL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteURL}" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}/en" />
  </url>
  <url>
    <loc>${siteURL}/en</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteURL}" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}/en" />
  </url>
  
  <!-- Blog Index -->
  <url>
    <loc>${siteURL}/notes</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteURL}/notes" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}/en/notes" />
  </url>
  <url>
    <loc>${siteURL}/en/notes</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteURL}/notes" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteURL}/en/notes" />
  </url>

  <!-- Blog Posts - Indonesian -->
  ${idPosts
    .map((post) => {
      const slug = post.slug.replace(/\/id$/, '');
      const postURL = new URL(getLocalizedPath(`/notes/${slug}`, 'id'), siteURL).href;
      const enPostURL = new URL(getLocalizedPath(`/notes/${slug}`, 'en'), siteURL).href;
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
      const postURL = new URL(getLocalizedPath(`/notes/${slug}`, 'en'), siteURL).href;
      const idPostURL = new URL(getLocalizedPath(`/notes/${slug}`, 'id'), siteURL).href;
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
