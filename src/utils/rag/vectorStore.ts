/**
 * Simple in-memory vector store untuk menyimpan embeddings
 */

export interface VectorDocument {
  id: string;
  embedding: number[];
  text: string;
  metadata: {
    noteId: string;
    title: string;
    locale: string;
    chunkIndex: number;
  };
}

export class VectorStore {
  private documents: VectorDocument[] = [];

  /**
   * Menambahkan document ke vector store
   */
  addDocument(document: VectorDocument): void {
    this.documents.push(document);
  }

  /**
   * Menambahkan multiple documents
   */
  addDocuments(documents: VectorDocument[]): void {
    this.documents.push(...documents);
  }

  /**
   * Menghitung cosine similarity antara dua vectors
   */
  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same length');
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    if (denominator === 0) return 0;

    return dotProduct / denominator;
  }

  /**
   * Mencari top-k documents yang paling similar dengan query embedding
   */
  search(
    queryEmbedding: number[],
    topK: number = 5,
    locale?: string
  ): Array<{ document: VectorDocument; score: number }> {
    const results = this.documents
      .filter((doc) => !locale || doc.metadata.locale === locale)
      .map((doc) => ({
        document: doc,
        score: this.cosineSimilarity(queryEmbedding, doc.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return results;
  }

  /**
   * Clear all documents
   */
  clear(): void {
    this.documents = [];
  }

  /**
   * Get total document count
   */
  getDocumentCount(): number {
    return this.documents.length;
  }

  /**
   * Get all documents, optionally filtered by locale
   */
  getAllDocuments(locale?: string): VectorDocument[] {
    if (locale) {
      return this.documents.filter((doc) => doc.metadata.locale === locale);
    }
    return [...this.documents];
  }
}

// Singleton instance
let vectorStoreInstance: VectorStore | null = null;

export function getVectorStore(): VectorStore {
  if (!vectorStoreInstance) {
    vectorStoreInstance = new VectorStore();
  }
  return vectorStoreInstance;
}
