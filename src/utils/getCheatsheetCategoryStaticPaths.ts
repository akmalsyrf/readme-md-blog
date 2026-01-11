import { getCategories } from './getCheatsheetsByCategory';

/**
 * Get static paths for cheatsheet categories
 * Note: Astro automatically URL-encodes params, so we pass the raw category name
 */
export async function getCheatsheetCategoryStaticPaths() {
  const categories = await getCategories();
  return categories.map((category) => ({
    params: { category },
  }));
}
