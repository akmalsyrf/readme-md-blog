import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

/**
 * Get static paths for blog posts by locale
 */
export async function getBlogPostStaticPaths(locale: Locale) {
  const allPosts = await getCollection('notes');
  const localeSuffix = locale === 'id' ? '/id' : '/en';
  const posts = allPosts.filter(
    (post: CollectionEntry<'notes'>) => post.data.isPublished && post.slug.endsWith(localeSuffix)
  );

  return posts.map((post: CollectionEntry<'notes'>) => {
    // Remove the locale suffix to get the base slug
    const slug = post.slug.replace(localeSuffix, '');
    return {
      params: { slug },
      props: { post },
    };
  });
}
