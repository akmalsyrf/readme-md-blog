import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get all published cheatsheets grouped by category
 */
export async function getCheatsheetsByCategory(): Promise<
  Record<string, CollectionEntry<'cheatsheet'>[]>
> {
  const allCheatsheets = await getCollection('cheatsheet');
  const published = allCheatsheets
    .filter((cheatsheet: CollectionEntry<'cheatsheet'>) => {
      return cheatsheet.data.isPublished;
    })
    .sort(
      (a: CollectionEntry<'cheatsheet'>, b: CollectionEntry<'cheatsheet'>) =>
        b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );

  // Group by category
  const grouped: Record<string, CollectionEntry<'cheatsheet'>[]> = {};
  for (const cheatsheet of published) {
    const category = cheatsheet.data.category || 'Umum';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(cheatsheet);
  }

  return grouped;
}

/**
 * Get cheatsheets for a specific category
 */
export async function getCheatsheetsForCategory(
  category: string
): Promise<CollectionEntry<'cheatsheet'>[]> {
  const grouped = await getCheatsheetsByCategory();
  return grouped[category] || [];
}

/**
 * Get all unique categories
 */
export async function getCategories(): Promise<string[]> {
  const grouped = await getCheatsheetsByCategory();
  return Object.keys(grouped).sort((a, b) => a.localeCompare(b));
}
