import { getCheatsheetsByCategory } from './getCheatsheetsByCategory';
import { CHEATSHEETS_PER_PAGE } from '../config/cheatsheet';

/**
 * Get static paths for cheatsheet category pagination
 */
export async function getCheatsheetCategoryPaginationStaticPaths() {
  const grouped = await getCheatsheetsByCategory();
  const paths: Array<{ params: { category: string; page: string } }> = [];

  for (const [category, cheatsheets] of Object.entries(grouped)) {
    const totalPages = Math.ceil(cheatsheets.length / CHEATSHEETS_PER_PAGE);

    // Generate paths for pages 2 and onwards (page 1 is handled by category/index.astro)
    // Note: Astro automatically URL-encodes params, so we pass the raw category name
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        params: {
          category,
          page: i.toString(),
        },
      });
    }
  }

  return paths;
}
