import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

/**
 * Get all blog posts filtered by locale
 */
export async function getPostsByLocale(locale: Locale): Promise<CollectionEntry<'notes'>[]> {
  const allPosts = await getCollection('notes');
  return allPosts
    .filter((post: CollectionEntry<'notes'>) => {
      const slug = post.slug;
      if (locale === 'id') {
        return slug.endsWith('/id');
      } else {
        return slug.endsWith('/en');
      }
    })
    .sort(
      (a: CollectionEntry<'notes'>, b: CollectionEntry<'notes'>) =>
        b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
}
