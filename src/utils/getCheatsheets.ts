import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get all published cheatsheets sorted by date
 */
export async function getCheatsheets(): Promise<CollectionEntry<'cheatsheet'>[]> {
  const allCheatsheets = await getCollection('cheatsheet');
  return allCheatsheets
    .filter((cheatsheet: CollectionEntry<'cheatsheet'>) => {
      return cheatsheet.data.isPublished;
    })
    .sort(
      (a: CollectionEntry<'cheatsheet'>, b: CollectionEntry<'cheatsheet'>) =>
        b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
}
