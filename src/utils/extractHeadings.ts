/**
 * Extract headings from markdown content and generate TOC structure
 */
export interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

/**
 * Generate slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Extract headings from markdown content
 */
export function extractHeadingsFromMarkdown(content: string): TOCItem[] {
  const lines = content.split('\n');
  const headings: TOCItem[] = [];
  const stack: TOCItem[] = [];

  for (const line of lines) {
    // Match markdown headings (##, ###, ####)
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = generateSlug(text);

      const item: TOCItem = {
        id,
        text,
        level,
      };

      // Build hierarchical structure
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        headings.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
      }

      stack.push(item);
    }
  }

  return headings;
}
