import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const siteURL = site || new URL('https://akmal-mind.vercel.app');
  const allPosts = await getCollection('notes');

  // Get posts for both locales, sorted by date (only published posts)
  const posts = allPosts
    .filter((post) => post.data.isPublished)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, 20); // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Readme.md</title>
    <description>Catatan tentang teknologi dan pengembangan web</description>
    <link>${siteURL}</link>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map((post) => {
        const slug = post.slug.replace(/\/id$|\/en$/, '');
        const locale = post.slug.endsWith('/id') ? 'id' : 'en';
        const postURL = new URL(locale === 'id' ? `/notes/${slug}` : `/en/notes/${slug}`, siteURL)
          .href;

        // Extract text content from markdown (simple version)
        const content = post.body
          .replace(/```[\s\S]*?```/g, '') // Remove code blocks
          .replace(/`[^`]+`/g, '') // Remove inline code
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
          .replace(/[#*_~`]/g, '') // Remove markdown formatting
          .substring(0, 500); // Limit to 500 chars

        return `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${postURL}</link>
      <guid isPermaLink="true">${postURL}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <author>${post.data.author}</author>
      <content:encoded><![CDATA[${content}...]]></content:encoded>
    </item>`;
      })
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
