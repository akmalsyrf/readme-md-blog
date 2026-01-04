/**
 * Gemini AI utility - handles text generation with streaming support
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import type { ConversationMessage } from './ragQuery';

const apiKey = (import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '').trim();
const modelName = import.meta.env.GEMINI_MODEL_NAME || 'gemini-2.5-flash';

if (!apiKey) {
  // eslint-disable-next-line no-console
  console.warn('⚠️  GEMINI_API_KEY is not set in geminiAI.ts');
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Check if Gemini AI is configured
 */
export function isGeminiConfigured(): boolean {
  return !!apiKey;
}

/**
 * Build conversation history for Gemini chat format
 */
function buildGeminiHistory(
  conversationHistory?: ConversationMessage[]
): Array<{ role: string; parts: Array<{ text: string }> }> {
  const history: Array<{ role: string; parts: Array<{ text: string }> }> = [];

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

  return history;
}

/**
 * Get Gemini stream (chat or single prompt)
 */
async function getGeminiStream(
  model: ReturnType<typeof genAI.getGenerativeModel>,
  prompt: string,
  history: Array<{ role: string; parts: Array<{ text: string }> }>
): Promise<AsyncIterable<{ text: () => string }>> {
  if (history.length > 0) {
    const chat = model.startChat({ history: history });
    const result = await chat.sendMessageStream(prompt);
    return result.stream;
  }

  const result = await model.generateContentStream(prompt);
  return result.stream;
}

/**
 * Process stream chunks and determine thinking vs answer
 */
async function* processStreamChunks(
  stream: AsyncIterable<{ text: () => string }>
): AsyncGenerator<{ type: 'thinking' | 'answer'; content: string }, void, unknown> {
  let fullAnswer = '';
  let chunkCount = 0;
  let hasTransitionedToAnswer = false;
  const THINKING_CHUNKS = 4; // Show first 4 chunks as thinking
  const THINKING_THRESHOLD = 180; // Characters threshold for thinking

  for await (const chunk of stream) {
    const chunkText = chunk.text();
    if (!chunkText) continue;

    chunkCount++;
    fullAnswer += chunkText;

    // Show first chunks as thinking to simulate reasoning process
    const shouldShowAsThinking =
      chunkCount <= THINKING_CHUNKS || fullAnswer.length < THINKING_THRESHOLD;

    if (shouldShowAsThinking && !hasTransitionedToAnswer) {
      yield { type: 'thinking', content: fullAnswer };
    } else {
      if (!hasTransitionedToAnswer) {
        hasTransitionedToAnswer = true;
      }
      yield { type: 'answer', content: fullAnswer };
    }
  }
}

/**
 * Generate text using Gemini AI with streaming support
 */
export async function* generateWithGeminiStream(
  prompt: string,
  systemInstruction: string,
  conversationHistory?: ConversationMessage[]
): AsyncGenerator<{ type: 'thinking' | 'answer'; content: string }, void, unknown> {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: systemInstruction,
  });

  const history = buildGeminiHistory(conversationHistory);

  // Use streaming API
  let stream;
  try {
    stream = await getGeminiStream(model, prompt, history);
  } catch (streamError) {
    // Log the actual error for debugging
    // eslint-disable-next-line no-console
    console.error('Gemini streaming error:', streamError);
    if (streamError instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Error message:', streamError.message);
      // eslint-disable-next-line no-console
      console.error('Error stack:', streamError.stack);
    }
    throw streamError;
  }

  // Process stream chunks
  yield* processStreamChunks(stream);
}
