/**
 * RAG query utility - combines retrieval dengan LLM generation
 */

import { getVectorStore } from './vectorStore';
import { getQueryEmbedding } from './embedNotes';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateWithCloudflare, isCloudflareConfigured } from './cloudflareAI';
import type { Locale } from '../i18n';

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
  }
): Promise<RAGResponse> {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  if (!question || question.trim() === '') {
    throw new Error('Question cannot be empty');
  }

  try {
    // Get query embedding with retry logic
    let queryEmbedding: number[];
    try {
      queryEmbedding = await getQueryEmbedding(question);
    } catch (error) {
      // If embedding fails, provide a more helpful error message
      if (error instanceof Error && error.message.includes('fetch failed')) {
        throw new Error(
          'Network error: Unable to connect to API. Please check your internet connection and try again.'
        );
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
        : 'No relevant context found.';

    // Build prompt for Gemini and Cloudflare
    const systemInstruction =
      locale === 'id'
        ? `Anda adalah asisten AI chatbot untuk blog app bernama "readme.md" yang ditulis oleh Akmal (https://github.com/akmalsyrf). Tugas Anda adalah membantu menjawab pertanyaan pengunjung tentang konten blog. Gunakan informasi dari konteks yang diberikan untuk menjawab pertanyaan. Jika informasi tidak tersedia di konteks, katakan bahwa Anda tidak memiliki informasi tersebut.

Jawab dalam bahasa Indonesia dengan jelas dan informatif. Jangan menyebutkan nomor referensi [1], [2], dll dalam jawaban Anda karena sistem akan menampilkan link sumber secara terpisah.`
        : `You are an AI chatbot assistant for a blog app named "readme.md" written by Akmal (https://github.com/akmalsyrf). Your task is to help answer visitors' questions about the blog content. Use the information from the provided context to answer the question. If the information is not available in the context, say that you don't have that information.

Answer in English clearly and informatively. Do not mention reference numbers [1], [2], etc. in your answer as the system will display source links separately.`;

    // Add current page context if available
    let pageContextInfo = '';
    if (currentPageContext) {
      if (currentPageContext.title) {
        pageContextInfo =
          locale === 'id'
            ? `\n\nCatatan: User sedang melihat halaman "${currentPageContext.title}". Jika pertanyaan terkait dengan halaman ini, prioritaskan informasi dari halaman tersebut.`
            : `\n\nNote: User is currently viewing the page "${currentPageContext.title}". If the question is related to this page, prioritize information from this page.`;
      }
    }

    const userPrompt =
      locale === 'id'
        ? `Konteks dari blog notes:\n\n${context}${pageContextInfo}\n\nPertanyaan: ${question}\n\nJawablah pertanyaan berdasarkan konteks di atas. Jangan sertakan nomor referensi dalam jawaban Anda.`
        : `Context from blog notes:\n\n${context}${pageContextInfo}\n\nQuestion: ${question}\n\nAnswer the question based on the context above. Do not include reference numbers in your answer.`;

    // Generate response using Gemini with retry logic, fallback to Cloudflare if fails
    let answer: string;

    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction,
      });

      const result = await model.generateContent(userPrompt);
      const response = result.response;
      answer =
        response.text() ||
        (locale === 'id'
          ? 'Maaf, saya tidak bisa menghasilkan jawaban.'
          : 'Sorry, I could not generate an answer.');
    } catch (error) {
      // Try Cloudflare Workers AI as fallback
      if (isCloudflareConfigured()) {
        try {
          // eslint-disable-next-line no-console
          console.log('Gemini failed, trying Cloudflare Workers AI as fallback...');
          answer = await generateWithCloudflare(userPrompt, systemInstruction, locale);
          // eslint-disable-next-line no-console
          console.log('Successfully used Cloudflare Workers AI fallback');
        } catch (fallbackError) {
          // Both providers failed
          // eslint-disable-next-line no-console
          console.error('Both Gemini and Cloudflare Workers AI failed:', fallbackError);

          // Handle original Gemini errors
          if (error instanceof Error) {
            if (error.message.includes('fetch failed') || error.message.includes('network')) {
              throw new Error(
                'Network error: Unable to connect to AI services. Please check your internet connection and try again.'
              );
            }
            if (error.message.includes('429') || error.message.includes('quota')) {
              throw new Error('API quota exceeded. Please wait a moment and try again');
            }
          }
          throw error;
        }
      } else {
        // No fallback available, throw original error
        if (error instanceof Error) {
          if (error.message.includes('fetch failed') || error.message.includes('network')) {
            throw new Error(
              'Network error: Unable to connect to Gemini API. Please check your internet connection and try again.'
            );
          }
          if (error.message.includes('429') || error.message.includes('quota')) {
            throw new Error('API quota exceeded. Please wait a moment and try again');
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
        throw new Error('Invalid or missing GEMINI_API_KEY. Please check your .env file.');
      }
      // Re-throw with better error message if it's already been improved
      if (error.message.includes('Network error') || error.message.includes('API quota')) {
        throw error;
      }
      throw error;
    }
    throw new Error('Unknown error occurred while querying RAG');
  }
}

/**
 * Get fallback question recommendations
 */
function getFallbackRecommendations(locale: Locale, count: number): string[] {
  const fallbackQuestions: Record<Locale, string[]> = {
    id: [
      'Apa saja topik yang dibahas di blog ini?',
      'Bagaimana cara menggunakan fitur-fitur yang tersedia?',
      'Apa yang menarik dari konten blog ini?',
      'Bisa jelaskan tentang teknologi yang digunakan?',
      'Apa tips dan trik yang bisa dipelajari?',
      'Bagaimana cara memulai dengan konten ini?',
      'Apa saja best practices yang direkomendasikan?',
      'Bisa berikan contoh implementasi?',
    ],
    en: [
      'What topics are covered in this blog?',
      'How do I use the available features?',
      'What is interesting about this blog content?',
      'Can you explain the technologies used?',
      'What tips and tricks can I learn?',
      'How do I get started with this content?',
      'What best practices are recommended?',
      'Can you provide implementation examples?',
    ],
  };

  const questions = fallbackQuestions[locale] || fallbackQuestions.id;
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
    const uniqueTitles = new Set<string>();
    for (const doc of allDocs) {
      if (doc.metadata.chunkIndex === 0) {
        uniqueTitles.add(doc.metadata.title);
      }
      if (uniqueTitles.size >= 10) break;
    }
    const sampleTitles = Array.from(uniqueTitles);

    // Add current page context to prompt if available
    let pageContextInfo = '';
    if (currentPageContext?.title) {
      pageContextInfo =
        locale === 'id'
          ? `\n\nCatatan penting: User sedang melihat halaman "${currentPageContext.title}". Prioritaskan untuk menghasilkan pertanyaan yang relevan dengan halaman ini, tetapi juga sertakan beberapa pertanyaan umum tentang blog.`
          : `\n\nImportant note: User is currently viewing the page "${currentPageContext.title}". Prioritize generating questions relevant to this page, but also include some general questions about the blog.`;
    }

    const systemInstruction =
      locale === 'id'
        ? `Anda adalah asisten AI untuk blog "readme.md". Tugas Anda adalah menghasilkan ${count} pertanyaan singkat dan menarik yang mungkin ditanyakan pengunjung tentang konten blog. Setiap pertanyaan harus singkat (maksimal 10 kata), relevan dengan konten blog, dan dalam bahasa Indonesia.`
        : `You are an AI assistant for the blog "readme.md". Your task is to generate ${count} short and interesting questions that visitors might ask about the blog content. Each question should be short (maximum 10 words), relevant to the blog content, and in English.`;

    const userPrompt =
      locale === 'id'
        ? `Berdasarkan judul-judul artikel berikut dari blog:\n\n${sampleTitles.join('\n')}${pageContextInfo}\n\nBuatkan ${count} pertanyaan singkat yang mungkin ditanyakan pengunjung. Format output: setiap pertanyaan dalam baris terpisah, tanpa nomor, tanpa bullet point.`
        : `Based on the following article titles from the blog:\n\n${sampleTitles.join('\n')}${pageContextInfo}\n\nCreate ${count} short questions that visitors might ask. Output format: each question on a separate line, without numbers, without bullet points.`;

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
