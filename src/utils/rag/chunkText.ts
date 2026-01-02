/**
 * Utility untuk chunking text menjadi potongan-potongan yang lebih kecil
 * untuk embedding dan retrieval
 */

export interface TextChunk {
  text: string;
  metadata: {
    noteId: string;
    title: string;
    locale: string;
    chunkIndex: number;
    startChar?: number;
    endChar?: number;
  };
}

/**
 * Chunk text menjadi potongan-potongan dengan ukuran maksimal
 * @param text - Text yang akan di-chunk
 * @param maxChunkSize - Ukuran maksimal chunk dalam karakter
 * @param overlap - Jumlah karakter overlap antar chunk
 */
export function chunkText(
  text: string,
  maxChunkSize: number = 1000,
  overlap: number = 200
): string[] {
  if (text.length <= maxChunkSize) {
    return [text];
  }

  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    let end = start + maxChunkSize;

    // Jika bukan chunk terakhir, coba split di akhir paragraf atau kalimat
    if (end < text.length) {
      // Cari akhir paragraf terdekat
      const paragraphEnd = text.lastIndexOf('\n\n', end);
      if (paragraphEnd > start + maxChunkSize * 0.5) {
        end = paragraphEnd + 2;
      } else {
        // Cari akhir kalimat terdekat
        const sentenceEnd = text.lastIndexOf('. ', end);
        if (sentenceEnd > start + maxChunkSize * 0.5) {
          end = sentenceEnd + 2;
        }
      }
    }

    chunks.push(text.slice(start, end).trim());
    start = end - overlap;
  }

  return chunks;
}
