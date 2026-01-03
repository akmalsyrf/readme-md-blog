/**
 * RAG query utility - combines retrieval dengan LLM generation
 */

import { getVectorStore } from './vectorStore';
import { getQueryEmbedding } from './embedNotes';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateWithCloudflare, isCloudflareConfigured } from './cloudflareAI';
import { getTranslations, type Locale } from '../i18n';

const apiKey = (import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '').trim();
const modelName = import.meta.env.GEMINI_MODEL_NAME || 'gemini-2.5-flash';

if (!apiKey) {
  // eslint-disable-next-line no-console
  console.warn('⚠️  GEMINI_API_KEY is not set in ragQuery.ts');
}

const genAI = new GoogleGenerativeAI(apiKey);

export interface RAGResponse {
  answer: string;
  sources: Array<{
    title: string;
    noteId: string;
    chunk: string;
    score: number;
  }>;
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Query RAG system dengan user question
 */
export async function queryRAG(
  question: string,
  locale: Locale = 'id',
  topK: number = 5,
  currentPageContext?: {
    title?: string;
    noteId?: string;
    url?: string;
  },
  conversationHistory?: ConversationMessage[]
): Promise<RAGResponse> {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  if (!question || question.trim() === '') {
    throw new Error('Question cannot be empty');
  }

  // Get translations early for use in both try and catch blocks
  const t = getTranslations(locale);

  try {
    // Get query embedding with retry logic
    let queryEmbedding: number[];
    try {
      queryEmbedding = await getQueryEmbedding(question);
    } catch (error) {
      // If embedding fails, provide a more helpful error message
      if (error instanceof Error && error.message.includes('fetch failed')) {
        throw new Error(t.rag.errorNetwork);
      }
      throw error;
    }

    // Search vector store
    const vectorStore = getVectorStore();
    const results = vectorStore.search(queryEmbedding, topK, locale);

    // Build context from retrieved documents
    const context =
      results.length > 0
        ? results
            .map((result, idx) => {
              return `[${idx + 1}] ${result.document.metadata.title}\n${result.document.text}`;
            })
            .join('\n\n---\n\n')
        : t.rag.noContextFound;

    // Build prompt for Gemini and Cloudflare
    const systemInstruction = t.rag.systemInstruction;

    // Add current page context if available
    let pageContextInfo = '';
    if (currentPageContext?.title) {
      pageContextInfo = `\n\n${t.rag.pageContextNote.replace('{title}', currentPageContext.title)}`;
    }

    // Build conversation history for Gemini (chat format)
    const history: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Add conversation history if available (limit to last 10 messages to avoid token limits)
    if (conversationHistory && conversationHistory.length > 0) {
      const recentHistory = conversationHistory.slice(-10); // Keep last 10 messages
      for (const msg of recentHistory) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          history.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
          });
        }
      }
    }

    // Add current question with context
    const userPrompt = t.rag.userPromptTemplate
      .replace('{context}', context)
      .replace('{pageContext}', pageContextInfo)
      .replace('{question}', question);

    // Generate response using Gemini with retry logic, fallback to Cloudflare if fails
    let answer: string;

    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction,
      });

      // Use chat format if we have history, otherwise use single prompt
      let result;
      if (history.length > 0) {
        // Start chat with history
        const chat = model.startChat({
          history: history,
        });
        result = await chat.sendMessage(userPrompt);
      } else {
        // Single prompt (no history)
        result = await model.generateContent(userPrompt);
      }

      const response = result.response;
      answer = response.text() || t.rag.errorNoAnswer;
    } catch (error) {
      // Try Cloudflare Workers AI as fallback
      if (isCloudflareConfigured()) {
        try {
          // eslint-disable-next-line no-console
          console.log('Gemini failed, trying Cloudflare Workers AI as fallback...');
          answer = await generateWithCloudflare(
            userPrompt,
            systemInstruction,
            locale,
            conversationHistory
          );
          // eslint-disable-next-line no-console
          console.log('Successfully used Cloudflare Workers AI fallback');
        } catch (fallbackError) {
          // Both providers failed
          // eslint-disable-next-line no-console
          console.error('Both Gemini and Cloudflare Workers AI failed:', fallbackError);

          // Handle original Gemini errors
          if (error instanceof Error) {
            if (error.message.includes('fetch failed') || error.message.includes('network')) {
              throw new Error(t.rag.errorNetwork);
            }
            if (error.message.includes('429') || error.message.includes('quota')) {
              throw new Error(t.rag.errorQuota);
            }
          }
          throw error;
        }
      } else {
        // No fallback available, throw original error
        if (error instanceof Error) {
          if (error.message.includes('fetch failed') || error.message.includes('network')) {
            throw new Error(t.rag.errorNetworkGemini);
          }
          if (error.message.includes('429') || error.message.includes('quota')) {
            throw new Error(t.rag.errorQuota);
          }
        }
        throw error;
      }
    }

    // Format sources and deduplicate by noteId
    // Keep only the highest scoring chunk for each unique noteId
    const sourcesMap = new Map<
      string,
      {
        title: string;
        noteId: string;
        chunk: string;
        score: number;
      }
    >();

    for (const result of results) {
      const noteId = result.document.metadata.noteId;
      const existing = sourcesMap.get(noteId);

      // If this noteId doesn't exist yet, or this result has a higher score, use it
      if (!existing || result.score > existing.score) {
        sourcesMap.set(noteId, {
          title: result.document.metadata.title,
          noteId: noteId,
          chunk: result.document.text.substring(0, 200) + '...',
          score: result.score,
        });
      }
    }

    // Convert map to array and sort by score (highest first)
    const sources = Array.from(sourcesMap.values()).sort((a, b) => b.score - a.score);

    return {
      answer,
      sources,
    };
  } catch (error) {
    if (error instanceof Error) {
      // Check for API key related errors
      if (
        error.message.includes('API_KEY') ||
        error.message.includes('api key') ||
        error.message.includes('authentication')
      ) {
        throw new Error(t.rag.errorApiKey);
      }
      // Re-throw with better error message if it's already been improved
      if (error.message.includes('Network error') || error.message.includes('API quota')) {
        throw error;
      }
      throw error;
    }
    throw new Error(t.rag.errorUnknown);
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
