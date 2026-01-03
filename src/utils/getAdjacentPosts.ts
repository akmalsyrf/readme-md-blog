import { getPostsByLocale } from './getPostsByLocale';
import type { Locale } from './i18n';
import type { CollectionEntry } from 'astro:content';

/**
 * Get previous and next posts for a given post
 */
export async function getAdjacentPosts(
  currentPost: CollectionEntry<'notes'>,
  locale: Locale
): Promise<{
  previous: CollectionEntry<'notes'> | null;
  next: CollectionEntry<'notes'> | null;
}> {
  const posts = await getPostsByLocale(locale);

  const currentIndex = posts.findIndex((post) => post.slug === currentPost.slug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return { previous, next };
}
