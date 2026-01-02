/**
 * Utility untuk load, chunk, dan embed notes ke vector store
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { chunkText } from './chunkText';
import { getVectorStore, type VectorDocument } from './vectorStore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Locale } from '../i18n';

const apiKey = (import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '').trim();

if (!apiKey) {
  console.warn('⚠️  GEMINI_API_KEY is not set in embedNotes.ts');
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Load dan embed semua notes ke vector store
 */
export async function embedNotes(locale?: Locale): Promise<void> {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured. Please set it in your .env file.');
  }

  const vectorStore = getVectorStore();

  // Only clear if explicitly requested (for re-embedding)
  // Otherwise, check if store already has data
  const existingCount = vectorStore.getDocumentCount();
  if (existingCount > 0) {
    // eslint-disable-next-line no-console
    console.log(
      `Vector store already has ${existingCount} documents. Clearing for re-embedding...`
    );
    vectorStore.clear();
  }

  const allNotes = await getCollection('notes');
  const notes = allNotes.filter((note: CollectionEntry<'notes'>) => {
    if (!note.data.isPublished) return false;
    const slug = note.slug;
    if (locale) {
      return slug.endsWith(`/${locale}`);
    }
    return true; // Include all locales if no locale specified
  });

  // eslint-disable-next-line no-console
  console.log(`Loading ${notes.length} notes for embedding...`);
  let totalChunks = 0;

  for (const note of notes) {
    try {
      const noteLocale = note.slug.endsWith('/en') ? 'en' : 'id';
      const noteId = note.slug.replace(/\/\w+$/, ''); // Remove /id or /en suffix

      // Get raw markdown body (remove frontmatter)
      const textContent = note.body.trim();

      // Combine title, description, and content
      const fullText = `${note.data.title}\n\n${note.data.description}\n\n${textContent}`;

      // Chunk the text
      const chunks = chunkText(fullText, 1000, 200);
      totalChunks += chunks.length;

      // eslint-disable-next-line no-console
      console.log(`Processing note "${note.data.title}" with ${chunks.length} chunks...`);

      // Create embeddings for each chunk
      // Add rate limiting to avoid hitting API quota limits
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        try {
          // Use Gemini embedding model
          const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });
          const result = await model.embedContent(chunk);
          // Extract embedding values - handle different response formats
          let embedding: number[];
          if (result.embedding && Array.isArray(result.embedding.values)) {
            embedding = result.embedding.values;
          } else if (result.embedding && Array.isArray(result.embedding)) {
            embedding = result.embedding;
          } else if (Array.isArray(result)) {
            embedding = result;
          } else {
            throw new TypeError('Invalid embedding response format');
          }

          const document: VectorDocument = {
            id: `${noteId}-${i}`,
            embedding,
            text: chunk,
            metadata: {
              noteId,
              title: note.data.title,
              locale: noteLocale,
              chunkIndex: i,
            },
          };

          vectorStore.addDocument(document);

          // Rate limiting: add small delay between API calls to avoid quota limits
          // Free tier has rate limits, so we add 100ms delay between calls
          if (i < chunks.length - 1) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(`Error embedding chunk ${i} of note ${noteId}:`, error);

          // If rate limit error, wait longer before retrying
          if (error instanceof Error && error.message.includes('429')) {
            // eslint-disable-next-line no-console
            console.log('Rate limit hit, waiting 2 seconds before continuing...');
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error processing note ${note.slug}:`, error);
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    `✅ Completed: Embedded ${vectorStore.getDocumentCount()} chunks from ${notes.length} notes (${totalChunks} total chunks processed)`
  );
}

/**
 * Get embedding for a query text with retry logic
 */
export async function getQueryEmbedding(query: string, maxRetries: number = 3): Promise<number[]> {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured. Please set it in your .env file.');
  }

  if (!query || query.trim() === '') {
    throw new Error('Query cannot be empty');
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });
      const result = await model.embedContent(query);

      // Extract embedding values - handle different response formats
      if (result.embedding && Array.isArray(result.embedding.values)) {
        return result.embedding.values;
      } else if (result.embedding && Array.isArray(result.embedding)) {
        return result.embedding;
      } else if (Array.isArray(result)) {
        return result;
      } else {
        throw new TypeError('Invalid embedding response format');
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Log error with attempt number
      console.error(
        `Error getting query embedding (attempt ${attempt}/${maxRetries}):`,
        lastError.message
      );

      // Check for specific error types
      if (error instanceof Error) {
        // Network/fetch errors - retry with exponential backoff
        if (
          error.message.includes('fetch failed') ||
          error.message.includes('network') ||
          error instanceof TypeError
        ) {
          if (attempt < maxRetries) {
            const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Max 5 seconds
            console.log(`Retrying in ${delay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
        }

        // API key errors - don't retry
        if (
          error.message.includes('API_KEY') ||
          error.message.includes('api key') ||
          error.message.includes('authentication')
        ) {
          throw new Error('Invalid or missing GEMINI_API_KEY. Please check your .env file.');
        }

        // Rate limit errors - wait longer
        if (
          error.message.includes('429') ||
          error.message.includes('quota') ||
          error.message.includes('rate limit')
        ) {
          if (attempt < maxRetries) {
            const delay = 2000 * attempt; // 2s, 4s, 6s
            console.log(`Rate limit hit, waiting ${delay}ms before retry...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
        }
      }

      // If last attempt, throw the error
      if (attempt === maxRetries) {
        throw lastError;
      }
    }
  }

  // Should never reach here, but just in case
  throw lastError || new Error('Failed to get query embedding after all retries');
}
