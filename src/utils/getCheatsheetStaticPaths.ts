import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get static paths for cheatsheets
 */
export async function getCheatsheetStaticPaths() {
  const allCheatsheets = await getCollection('cheatsheet');
  const cheatsheets = allCheatsheets.filter(
    (cheatsheet: CollectionEntry<'cheatsheet'>) => cheatsheet.data.isPublished
  );

  return cheatsheets.map((cheatsheet: CollectionEntry<'cheatsheet'>) => {
    return {
      params: { slug: cheatsheet.slug },
      props: { cheatsheet },
    };
  });
}
