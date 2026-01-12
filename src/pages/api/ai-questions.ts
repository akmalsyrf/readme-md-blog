import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { generateWithGeminiStream } from '../../utils/rag/geminiAI';
import { generateWithCloudflare, isCloudflareConfigured } from '../../utils/rag/cloudflareAI';
import { getCORSHeaders } from '../../utils/api/cors';
import { createErrorResponse, createSuccessResponse } from '../../utils/api/response';
import { chunkText } from '../../utils/rag/chunkText';

// Disable prerendering for this API route
export const prerender = false;

interface Question {
  type: 'yesno' | 'fillblank' | 'multiplechoice' | 'selectmultiple';
  question: string;
  answer?: boolean | string | number | number[];
  options?: string[];
  correctAnswer?: number;
  correctAnswers?: number[];
  explanation?: string;
}

/**
 * Add chunk if it fits within limits
 */
function tryAddChunk(
  chunk: string,
  idx: number,
  selectedIndices: Set<number>,
  selectedChunks: string[],
  totalChars: number,
  maxTotalChars: number
): { added: boolean; newTotalChars: number } {
  if (selectedIndices.has(idx) || totalChars + chunk.length > maxTotalChars) {
    return { added: false, newTotalChars: totalChars };
  }
  selectedIndices.add(idx);
  selectedChunks.push(chunk);
  return { added: true, newTotalChars: totalChars + chunk.length };
}

/**
 * Select random chunks from different parts of the document
 * Ensures coverage across the entire cheatsheet
 */
function selectRandomChunks(
  chunks: string[],
  maxChunks: number = 4,
  maxTotalChars: number = 12000
): string[] {
  if (chunks.length === 0) return [];
  if (chunks.length <= maxChunks) return chunks;

  const selectedIndices = new Set<number>();
  const selectedChunks: string[] = [];
  let totalChars = 0;

  // Predefined positions for good coverage
  const keyPositions = [
    0,
    Math.floor(chunks.length / 4),
    Math.floor(chunks.length / 2),
    Math.floor((chunks.length * 3) / 4),
    chunks.length - 1,
  ].filter((pos, idx, arr) => arr.indexOf(pos) === idx); // Remove duplicates

  // Add chunks from key positions
  for (const pos of keyPositions) {
    if (selectedChunks.length >= maxChunks || totalChars >= maxTotalChars) break;
    const result = tryAddChunk(
      chunks[pos],
      pos,
      selectedIndices,
      selectedChunks,
      totalChars,
      maxTotalChars
    );
    totalChars = result.newTotalChars;
  }

  // Fill remaining with random chunks
  const maxAttempts = chunks.length * 2;
  for (let attempts = 0; attempts < maxAttempts; attempts++) {
    if (selectedChunks.length >= maxChunks || totalChars >= maxTotalChars) break;
    const randomIdx = Math.floor(Math.random() * chunks.length);
    const result = tryAddChunk(
      chunks[randomIdx],
      randomIdx,
      selectedIndices,
      selectedChunks,
      totalChars,
      maxTotalChars
    );
    totalChars = result.newTotalChars;
  }

  // Shuffle for randomness
  for (let i = selectedChunks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedChunks[i], selectedChunks[j]] = [selectedChunks[j], selectedChunks[i]];
  }

  return selectedChunks;
}

/**
 * Generate questions using AI with random chunking (Gemini with Cloudflare fallback)
 * This ensures questions cover different parts of the cheatsheet randomly
 */
async function generateQuestionsWithAI(
  cheatsheetContent: string,
  cheatsheetTitle: string
): Promise<Question[]> {
  // Chunk the content into smaller pieces (~2000 chars each)
  // Smaller chunks ensure we stay well within token limits
  const chunks = chunkText(cheatsheetContent, 2000, 150);

  // Select random chunks from different parts of the document
  // Reduced to 3 chunks max, ~5000 chars total to leave room for system instruction and prompt
  // This ensures we stay well within token limits even for very large documents
  const selectedChunks = selectRandomChunks(chunks, 3, 5000);

  if (selectedChunks.length === 0) {
    throw new Error('No chunks available for question generation');
  }

  // Combine selected chunks with markers
  const context = selectedChunks
    .map((chunk, idx) => `[Bagian ${idx + 1} dari cheatsheet]\n${chunk}`)
    .join('\n\n---\n\n');
  const systemInstruction = `Buat soal latihan dari cheatsheet. Format JSON:
{
  "questions": [
    {"type": "yesno", "question": "...", "answer": true/false, "explanation": "..."},
    {"type": "fillblank", "question": "...", "answer": "...", "explanation": "..."},
    {"type": "multiplechoice", "question": "...", "options": ["A", "B", "C", "D"], "correctAnswer": 0, "explanation": "..."},
    {"type": "selectmultiple", "question": "...", "options": ["A", "B", "C", "D"], "correctAnswers": [0,2], "explanation": "..."}
  ]
}
Buat 8-10 soal: 2-3 yesno, 2-3 fillblank, 2-3 multiplechoice, 1-2 selectmultiple. Hanya JSON.`;

  const userPrompt = `Judul: ${cheatsheetTitle}

Konten:
${context}

Buat soal latihan dari konten di atas.`;

  // Try Gemini first
  try {
    let fullResponse = '';
    for await (const chunk of generateWithGeminiStream(userPrompt, systemInstruction)) {
      fullResponse = chunk.content;
    }

    // Parse JSON response
    const jsonRegex = /\{[\s\S]*\}/;
    const jsonMatch = jsonRegex.exec(fullResponse);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed.questions || [];
    }

    throw new Error('Invalid response format from Gemini');
  } catch (geminiError) {
    // Fallback to Cloudflare
    if (isCloudflareConfigured()) {
      try {
        const response = await generateWithCloudflare(userPrompt, systemInstruction, 'id');

        // Parse JSON response
        const jsonRegex = /\{[\s\S]*\}/;
        const jsonMatch = jsonRegex.exec(response);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return parsed.questions || [];
        }

        throw new Error('Invalid response format from Cloudflare');
      } catch (cloudflareError) {
        // eslint-disable-next-line no-console
        console.error('Both Gemini and Cloudflare failed:', {
          gemini: geminiError,
          cloudflare: cloudflareError,
        });
        throw new Error('Failed to generate questions with AI');
      }
    }

    throw geminiError;
  }
}

export const OPTIONS: APIRoute = ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);

  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug || typeof slug !== 'string') {
      return createErrorResponse(
        'Slug is required',
        'Please provide a valid cheatsheet slug',
        400,
        corsHeaders
      );
    }

    // Get cheatsheet content
    const allCheatsheets = await getCollection('cheatsheet');
    const cheatsheet = allCheatsheets.find((c) => c.slug === slug);

    if (!cheatsheet) {
      return createErrorResponse(
        'Cheatsheet not found',
        `Cheatsheet with slug "${slug}" not found`,
        404,
        corsHeaders
      );
    }

    if (!cheatsheet.data.isPublished) {
      return createErrorResponse(
        'Cheatsheet not published',
        'This cheatsheet is not published yet',
        403,
        corsHeaders
      );
    }

    // Extract text content from cheatsheet
    // We'll use the raw body for better context
    const textContent = cheatsheet.body.trim();
    const fullContent = `${cheatsheet.data.title}\n\n${cheatsheet.data.description}\n\n${textContent}`;

    // Generate questions using AI
    const questions = await generateQuestionsWithAI(fullContent, cheatsheet.data.title);

    return createSuccessResponse(
      {
        success: true,
        questions,
        cheatsheetTitle: cheatsheet.data.title,
      },
      corsHeaders
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating AI questions:', error);
    return createErrorResponse(
      'Failed to generate questions',
      error instanceof Error ? error.message : 'Unknown error',
      500,
      corsHeaders
    );
  }
};
