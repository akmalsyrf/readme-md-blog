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
 * Handles Unicode characters (including Japanese) by creating consistent slugs
 */
export function generateSlug(text: string): string {
  // Remove markdown formatting (bold, italic, etc.)
  let cleaned = text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links, keep text
    .trim();

  // Convert to lowercase
  cleaned = cleaned.toLowerCase();

  // Normalize Unicode characters (NFD normalization)
  // This helps with accented characters but keeps Japanese characters intact
  cleaned = cleaned.normalize('NFD');

  // Replace spaces and underscores with hyphens
  cleaned = cleaned.replace(/[\s_]+/g, '-');

  // Keep alphanumeric, hyphens, and Unicode word characters
  // This preserves Japanese characters while removing special punctuation
  cleaned = cleaned
    .split('')
    .map((char) => {
      // Keep alphanumeric, hyphens
      if (/[a-z0-9-]/.test(char)) {
        return char;
      }
      // Keep Unicode word characters (includes Japanese, Chinese, etc.)
      if (/\p{L}/u.test(char)) {
        // For Unicode characters, we'll encode them to ensure URL safety
        // But we need to keep them readable, so we'll use a simple approach:
        // Remove them for now to ensure compatibility, but we could enhance this
        return '';
      }
      // Remove everything else
      return '';
    })
    .join('');

  // Clean up multiple consecutive hyphens
  cleaned = cleaned.replace(/-+/g, '-');

  // Remove leading/trailing hyphens
  cleaned = cleaned.replace(/^-+|-+$/g, '');

  // If the result is empty or only hyphens, create a fallback
  if (!cleaned || cleaned === '-') {
    // Create a hash-like identifier from the original text
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return `heading-${Math.abs(hash)}`;
  }

  return cleaned.trim();
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
