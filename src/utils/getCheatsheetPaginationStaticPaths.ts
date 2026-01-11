import { getCheatsheetsByCategory } from './getCheatsheetsByCategory';
import { CHEATSHEETS_PER_PAGE } from '../config/cheatsheet';

/**
 * Get static paths for cheatsheet pagination by category
 */
export async function getCheatsheetPaginationStaticPaths() {
  const grouped = await getCheatsheetsByCategory();
  const paths: Array<{ params: { category: string; page: string } }> = [];

  for (const [category, cheatsheets] of Object.entries(grouped)) {
    const totalPages = Math.ceil(cheatsheets.length / CHEATSHEETS_PER_PAGE);

    // Generate paths for pages 2 and onwards (page 1 is handled by index.astro)
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        params: {
          category: encodeURIComponent(category),
          page: i.toString(),
        },
      });
    }
  }

  return paths;
}
