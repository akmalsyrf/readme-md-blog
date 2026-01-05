/**
 * RAG query utility - combines retrieval dengan LLM generation
 */

import { getVectorStore } from './vectorStore';
import { getQueryEmbedding } from './embedNotes';
import {
  generateWithCloudflare,
  generateWithCloudflareStream,
  isCloudflareConfigured,
} from './cloudflareAI';
import { generateWithGeminiStream, isGeminiConfigured } from './geminiAI';
import { getTranslations, type Locale } from '../i18n';
import type { ConversationMessage } from '../api/conversation';

// Re-export for backward compatibility
export type { ConversationMessage };

export interface StreamingChunk {
  type: 'thinking' | 'answer' | 'done' | 'error';
  content: string;
  sources?: Array<{
    title: string;
    noteId: string;
    chunk: string;
    score: number;
  }>;
}

export interface Source {
  title: string;
  noteId: string;
  chunk: string;
  score: number;
}

/**
 * Format sources from search results
 */
function formatSources(
  results: Array<{
    document: { metadata: { title: string; noteId: string }; text: string };
    score: number;
  }>
): Source[] {
  const sourcesMap = new Map<string, Source>();

  for (const result of results) {
    const noteId = result.document.metadata.noteId;
    const existing = sourcesMap.get(noteId);

    if (!existing || result.score > existing.score) {
      sourcesMap.set(noteId, {
        title: result.document.metadata.title,
        noteId: noteId,
        chunk: result.document.text.substring(0, 200) + '...',
        score: result.score,
      });
    }
  }

  return Array.from(sourcesMap.values()).sort((a, b) => b.score - a.score);
}

/**
 * Build context from retrieved documents
 */
function buildContext(
  results: Array<{ document: { metadata: { title: string }; text: string } }>,
  noContextMessage: string
): string {
  if (results.length === 0) {
    return noContextMessage;
  }

  return results
    .map((result, idx) => {
      return `[${idx + 1}] ${result.document.metadata.title}\n${result.document.text}`;
    })
    .join('\n\n---\n\n');
}

/**
 * Build user prompt with context
 */
function buildUserPrompt(
  context: string,
  pageContextInfo: string,
  question: string,
  promptTemplate: string
): string {
  return promptTemplate
    .replace('{context}', context)
    .replace('{pageContext}', pageContextInfo)
    .replace('{question}', question);
}

/**
 * Try Gemini streaming
 */
async function* tryGeminiStreaming(
  userPrompt: string,
  systemInstruction: string,
  conversationHistory: ConversationMessage[] | undefined
): AsyncGenerator<{ type: 'thinking' | 'answer'; content: string }, void, unknown> {
  if (!isGeminiConfigured()) {
    return;
  }

  try {
    for await (const chunk of generateWithGeminiStream(
      userPrompt,
      systemInstruction,
      conversationHistory
    )) {
      yield chunk;
    }
  } catch (error) {
    // Log the error for debugging
    // eslint-disable-next-line no-console
    console.error('Gemini streaming failed:', error);
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Error message:', error.message);
      // eslint-disable-next-line no-console
      console.error('Error name:', error.name);
    }
    throw error; // Re-throw to trigger fallback
  }
}

/**
 * Try Cloudflare streaming with non-streaming fallback
 */
async function* tryCloudflareStreaming(
  userPrompt: string,
  systemInstruction: string,
  locale: Locale,
  conversationHistory: ConversationMessage[] | undefined,
  results: Array<{
    document: { metadata: { title: string; noteId: string }; text: string };
    score: number;
  }>
): AsyncGenerator<StreamingChunk, void, unknown> {
  // eslint-disable-next-line no-console
  console.log('Trying Cloudflare Workers AI as fallback...');

  try {
    let finalAnswer = '';
    for await (const chunk of generateWithCloudflareStream(
      userPrompt,
      systemInstruction,
      locale,
      conversationHistory
    )) {
      finalAnswer = chunk.content;
      yield chunk;
    }

    yield {
      type: 'done',
      content: finalAnswer,
      sources: formatSources(results),
    };
  } catch (streamError) {
    // If streaming fails, fallback to non-streaming
    // eslint-disable-next-line no-console
    console.log('Cloudflare streaming failed, using non-streaming fallback...', streamError);
    const answer = await generateWithCloudflare(
      userPrompt,
      systemInstruction,
      locale,
      conversationHistory
    );

    yield {
      type: 'done',
      content: answer,
      sources: formatSources(results),
    };
  }
}

/**
 * Handle LLM streaming with fallback to Cloudflare
 */
async function* handleLLMStreaming(
  userPrompt: string,
  systemInstruction: string,
  locale: Locale,
  conversationHistory: ConversationMessage[] | undefined,
  results: Array<{
    document: { metadata: { title: string; noteId: string }; text: string };
    score: number;
  }>
): AsyncGenerator<StreamingChunk, void, unknown> {
  // Try Gemini first
  try {
    for await (const chunk of tryGeminiStreaming(
      userPrompt,
      systemInstruction,
      conversationHistory
    )) {
      yield chunk;
    }
    return; // Success, exit
  } catch {
    // Fall through to Cloudflare fallback
  }

  // Fallback to Cloudflare Workers AI
  if (isCloudflareConfigured()) {
    try {
      for await (const chunk of tryCloudflareStreaming(
        userPrompt,
        systemInstruction,
        locale,
        conversationHistory,
        results
      )) {
        yield chunk;
      }
      return; // Success, exit
    } catch (fallbackError) {
      // eslint-disable-next-line no-console
      console.error('Both Gemini and Cloudflare Workers AI failed:', fallbackError);
      yield {
        type: 'error',
        content: fallbackError instanceof Error ? fallbackError.message : 'Unknown error',
      };
      return;
    }
  }

  // No providers available
  yield {
    type: 'error',
    content: 'No AI provider configured. Please set GEMINI_API_KEY or Cloudflare credentials.',
  };
}

/**
 * Handle errors and return appropriate error chunks
 */
function* handleError(
  error: unknown,
  t: ReturnType<typeof getTranslations>
): Generator<StreamingChunk, void, unknown> {
  if (error instanceof Error) {
    if (
      error.message.includes('API_KEY') ||
      error.message.includes('api key') ||
      error.message.includes('authentication')
    ) {
      yield { type: 'error', content: t.rag.errorApiKey };
      return;
    }
    if (error.message.includes('fetch failed') || error.message.includes('network')) {
      yield { type: 'error', content: t.rag.errorNetwork };
      return;
    }
    if (error.message.includes('429') || error.message.includes('quota')) {
      yield { type: 'error', content: t.rag.errorQuota };
      return;
    }
    yield { type: 'error', content: error.message };
    return;
  }
  yield { type: 'error', content: t.rag.errorUnknown };
}

/**
 * Query RAG system dengan streaming support untuk thinking process
 */
export async function* queryRAGStream(
  question: string,
  locale: Locale = 'id',
  topK: number = 5,
  currentPageContext?: {
    title?: string;
    noteId?: string;
    url?: string;
  },
  conversationHistory?: ConversationMessage[]
): AsyncGenerator<StreamingChunk, void, unknown> {
  if (!question || question.trim() === '') {
    yield { type: 'error', content: 'Question cannot be empty' };
    return;
  }

  const t = getTranslations(locale);

  try {
    // Get query embedding
    let queryEmbedding: number[];
    try {
      queryEmbedding = await getQueryEmbedding(question);
    } catch (error) {
      yield* handleError(error, t);
      return;
    }

    // Search vector store
    const vectorStore = getVectorStore();
    const results = vectorStore.search(queryEmbedding, topK, locale);

    // Build context and prompt
    const context = buildContext(results, t.rag.noContextFound);
    const systemInstruction = t.rag.systemInstruction;

    // Add current page context if available
    let pageContextInfo = '';
    if (currentPageContext?.title) {
      pageContextInfo = `\n\n${t.rag.pageContextNote.replace('{title}', currentPageContext.title)}`;
    }

    const userPrompt = buildUserPrompt(
      context,
      pageContextInfo,
      question,
      t.rag.userPromptTemplate
    );

    // Handle LLM streaming with fallback
    let finalAnswer = '';
    for await (const chunk of handleLLMStreaming(
      userPrompt,
      systemInstruction,
      locale,
      conversationHistory,
      results
    )) {
      if (chunk.type === 'done') {
        // Final chunk with sources
        yield chunk;
        return;
      }
      if (chunk.type === 'error') {
        yield chunk;
        return;
      }
      // Track final answer for sources - update for both thinking and answer chunks
      // since thinking chunks also contain the accumulated content
      if (chunk.type === 'answer' || chunk.type === 'thinking') {
        finalAnswer = chunk.content;
      }
      yield chunk;
    }

    // If we get here without 'done', send done with sources
    yield {
      type: 'done',
      content: finalAnswer,
      sources: formatSources(results),
    };
  } catch (error) {
    yield* handleError(error, t);
  }
}

/**
 * Get fallback question recommendations
 */
function getFallbackRecommendations(locale: Locale, count: number): string[] {
  const t = getTranslations(locale);
  const questions = t.rag.recommendations.fallback;
  return questions.slice(0, count);
}

/**
 * Generate question recommendations based on blog content
 */
export async function generateRecommendations(
  locale: Locale = 'id',
  count: number = 5,
  currentPageContext?: {
    title?: string;
    noteId?: string;
    url?: string;
  }
): Promise<string[]> {
  // Get fallback questions first
  const fallbackQuestions = getFallbackRecommendations(locale, count);

  // Only use Cloudflare Workers AI for recommendations
  if (!isCloudflareConfigured()) {
    // Return fallback if Cloudflare is not configured
    return fallbackQuestions;
  }

  try {
    // Get sample documents from vector store
    const vectorStore = getVectorStore();
    const documentCount = vectorStore.getDocumentCount();

    if (documentCount === 0) {
      return fallbackQuestions;
    }

    // Get unique titles from documents (first chunk of each note)
    const allDocs = vectorStore.getAllDocuments(locale);

    // If no documents found for this locale, return fallback questions
    if (allDocs.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`No documents found for locale '${locale}', using fallback questions`);
      return fallbackQuestions;
    }

    const uniqueTitles = new Set<string>();
    for (const doc of allDocs) {
      if (doc.metadata.chunkIndex === 0) {
        uniqueTitles.add(doc.metadata.title);
      }
      if (uniqueTitles.size >= 10) break;
    }
    const sampleTitles = Array.from(uniqueTitles);

    // If no titles found, return fallback questions
    if (sampleTitles.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`No titles found for locale '${locale}', using fallback questions`);
      return fallbackQuestions;
    }

    // Get translations
    const t = getTranslations(locale);

    // Add current page context to prompt if available
    let pageContextInfo = '';
    if (currentPageContext?.title) {
      pageContextInfo = `\n\n${t.rag.recommendations.pageContextNote.replace('{title}', currentPageContext.title)}`;
    }

    const systemInstruction = t.rag.recommendations.systemInstructionTemplate
      .replace('{count}', count.toString())
      .replace('{titles}', sampleTitles.join(', '));

    const userPrompt = t.rag.recommendations.userPromptTemplate
      .replace('{titles}', sampleTitles.join('\n'))
      .replace('{pageContext}', pageContextInfo)
      .replace('{count}', count.toString());

    try {
      const text = await generateWithCloudflare(userPrompt, systemInstruction, locale);

      // Parse recommendations from response
      const recommendations = text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !/^\d+[.)]/.test(line)) // Remove numbered items
        .slice(0, count);

      // Return generated recommendations if available, otherwise fallback
      return recommendations.length > 0 ? recommendations : fallbackQuestions;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error generating recommendations with Cloudflare Workers AI:', error);
      // Return fallback questions on error
      return fallbackQuestions;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating recommendations:', error);
    // Return fallback questions on error instead of empty array
    return fallbackQuestions;
  }
}
