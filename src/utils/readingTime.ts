/**
 * Calculate reading time in minutes based on content
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  // Remove markdown syntax and HTML tags
  const text = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links, keep text
    .replace(/[#*_~`]/g, '') // Remove markdown formatting
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .trim();

  // Count words (split by whitespace)
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Calculate reading time (200 words per minute)
  const wordsPerMinute = 200;
  const readingTime = wordCount / wordsPerMinute;

  // Return actual reading time (can be less than 1 minute)
  return readingTime;
}

/**
 * Format reading time for display
 * Returns formatted string with "dibawah satu menit" / "under one minute" if < 1
 */
export function formatReadingTime(readingTime: number, locale: 'id' | 'en'): string {
  if (readingTime < 1) {
    return locale === 'id' ? 'dibawah satu menit' : 'under one minute';
  }
  const minutes = Math.ceil(readingTime);
  return `${minutes}`;
}
