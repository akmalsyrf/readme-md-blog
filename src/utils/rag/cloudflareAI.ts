/**
 * Cloudflare Workers AI utility - fallback untuk text generation
 */

import type { Locale } from '../i18n';
import type { ConversationMessage } from './ragQuery';

const accountId = (
  import.meta.env.CLOUDFLARE_ACCOUNT_ID ||
  process.env.CLOUDFLARE_ACCOUNT_ID ||
  ''
).trim();
const apiToken = (
  import.meta.env.CLOUDFLARE_API_TOKEN ||
  process.env.CLOUDFLARE_API_TOKEN ||
  ''
).trim();
const modelName = import.meta.env.CLOUDFLARE_MODEL_NAME || '@cf/meta/llama-3.1-8b-instruct';

if (!accountId || !apiToken) {
  // eslint-disable-next-line no-console
  console.warn(
    '⚠️  CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN is not set. Cloudflare fallback will not work.'
  );
}

/**
 * Generate text using Cloudflare Workers AI
 */
export async function generateWithCloudflare(
  prompt: string,
  systemInstruction: string,
  _locale: Locale = 'id',
  conversationHistory?: ConversationMessage[]
): Promise<string> {
  if (!accountId || !apiToken) {
    throw new Error(
      'Cloudflare Workers AI is not configured. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.'
    );
  }

  try {
    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${modelName}`;

    // Build messages array with conversation history
    const messages: Array<{ role: string; content: string }> = [
      {
        role: 'system',
        content: systemInstruction,
      },
    ];

    // Add conversation history if available (limit to last 10 messages to avoid token limits)
    if (conversationHistory && conversationHistory.length > 0) {
      const recentHistory = conversationHistory.slice(-10); // Keep last 10 messages
      for (const msg of recentHistory) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
          });
        }
      }
    }

    // Add current prompt
    messages.push({
      role: 'user',
      content: prompt,
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
        max_tokens: 1000,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Cloudflare API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Extract response text from Cloudflare API response
    // Cloudflare Workers AI can return responses in different formats
    let responseText = '';

    if (data.result) {
      if (typeof data.result === 'string') {
        responseText = data.result;
      } else if (data.result.response && typeof data.result.response === 'string') {
        responseText = data.result.response;
      } else if (data.result.text && typeof data.result.text === 'string') {
        responseText = data.result.text;
      } else if (Array.isArray(data.result) && data.result.length > 0) {
        // Handle array response format
        const firstResult = data.result[0];
        if (firstResult.response) responseText = firstResult.response;
        else if (firstResult.text) responseText = firstResult.text;
        else if (typeof firstResult === 'string') responseText = firstResult;
      }
    }

    // Fallback: try direct response fields
    if (!responseText) {
      if (data.response && typeof data.response === 'string') {
        responseText = data.response;
      } else if (data.text && typeof data.text === 'string') {
        responseText = data.text;
      }
    }

    if (!responseText) {
      // If we can't find the response, log the data structure for debugging
      // eslint-disable-next-line no-console
      console.error('Unexpected Cloudflare API response format:', JSON.stringify(data, null, 2));
      throw new Error('Invalid response format from Cloudflare Workers AI');
    }

    // Clean up response: remove reference numbers like [1], [2], etc.
    // Sources are displayed separately, so we don't need them in the answer
    // Note: Using replace() with global regex is correct here, replaceAll() doesn't work with regex
    // eslint-disable-next-line
    responseText = responseText.replace(/\[\d+\]/g, '').trim();

    // Remove any trailing reference patterns (case-insensitive)
    // Indonesian: (sumber: ...), (referensi: ...)
    // English: (source: ...), (reference: ...)
    // eslint-disable-next-line
    responseText = responseText.replace(/\s*\(sumber:\s*[^)]+\)/gi, '').trim();
    // eslint-disable-next-line
    responseText = responseText.replace(/\s*\(referensi:\s*[^)]+\)/gi, '').trim();
    // eslint-disable-next-line
    responseText = responseText.replace(/\s*\(source:\s*[^)]+\)/gi, '').trim();
    // eslint-disable-next-line
    responseText = responseText.replace(/\s*\(reference:\s*[^)]+\)/gi, '').trim();

    return responseText;
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw with more context
      if (error.message.includes('fetch failed') || error.message.includes('network')) {
        throw new Error(
          'Network error: Unable to connect to Cloudflare Workers AI. Please check your internet connection.'
        );
      }
      if (error.message.includes('401') || error.message.includes('403')) {
        throw new Error(
          'Invalid Cloudflare API credentials. Please check CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.'
        );
      }
      if (error.message.includes('429')) {
        throw new Error(
          'Cloudflare Workers AI rate limit exceeded. Please wait a moment and try again.'
        );
      }
      throw error;
    }
    throw new Error('Unknown error occurred while calling Cloudflare Workers AI');
  }
}

/**
 * Check if Cloudflare Workers AI is configured
 */
export function isCloudflareConfigured(): boolean {
  return !!(accountId && apiToken);
}
