import { getCollection, type CollectionEntry } from 'astro:content';
import { POSTS_PER_PAGE } from '../config/notes';
import type { Locale } from './i18n';

/**
 * Get static paths for blog pagination by locale
 */
export async function getBlogPaginationStaticPaths(locale: Locale) {
  const allPosts = await getCollection('notes');
  const localeSuffix = locale === 'id' ? '/id' : '/en';
  const posts = allPosts
    .filter(
      (post: CollectionEntry<'notes'>) => post.data.isPublished && post.slug.endsWith(localeSuffix)
    )
    .sort(
      (a: CollectionEntry<'notes'>, b: CollectionEntry<'notes'>) =>
        b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Generate paths for pages 2 and onwards (page 1 is handled by index.astro)
  const paths = [];
  for (let i = 2; i <= totalPages; i++) {
    paths.push({
      params: { page: i.toString() },
    });
  }

  return paths;
}
