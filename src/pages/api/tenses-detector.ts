import type { APIRoute } from 'astro';
import { generateWithCloudflare } from '../../utils/rag/cloudflareAI';
import { getCORSHeaders } from '../../utils/api/cors';
import { getClientIP, checkRateLimit, validateRateLimit } from '../../utils/api/rateLimit';
import { createErrorResponse, createSuccessResponse } from '../../utils/api/response';
import type { Locale } from '../../utils/i18n';

// Disable prerendering for this API route
export const prerender = false;

/**
 * Validate that the input is English text using AI
 * This is more accurate than regex-based validation
 */
async function validateEnglishText(text: string, locale: Locale): Promise<string | null> {
  const trimmed = text.trim();

  // Quick check: Reject if it's valid JSON (don't need AI for this)
  try {
    JSON.parse(trimmed);
    return 'Input appears to be JSON. Please provide English text sentences instead.';
  } catch {
    // Not JSON, continue
  }

  // Quick check: Reject if it starts with JSON-like patterns
  if (
    trimmed.startsWith('{') ||
    trimmed.startsWith('[') ||
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length < 100)
  ) {
    return 'Input appears to be structured data (JSON/XML). Please provide English text sentences instead.';
  }

  // Quick check: Reject if contains obvious non-English scripts
  if (
    /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/.test(trimmed) ||
    /[\u0600-\u06FF\u0590-\u05FF\u0400-\u04FF]/.test(trimmed)
  ) {
    return 'Input contains non-English script characters. Please provide English text only.';
  }

  // Use AI to check if the text is English
  try {
    const systemInstruction = `You are a language detector. Your task is to determine if the given text is written in English.

Rules:
- Return ONLY "yes" if the text is English (even if it has some grammar errors or typos)
- Return ONLY "no" if the text is NOT English (other languages, code, JSON, unclear characters, etc.)
- Do NOT provide any explanation, just "yes" or "no"
- Consider contractions, slang, and informal English as valid English
- Consider code, JSON, XML, or structured data as NOT English`;

    const userPrompt = `Is the following text written in English? Answer only "yes" or "no":

"${trimmed.substring(0, 1000)}"`;

    const aiResponse = await generateWithCloudflare(userPrompt, systemInstruction, locale);

    const normalizedResponse = aiResponse.trim().toLowerCase();

    // Check if AI says it's NOT English
    if (
      normalizedResponse.includes('no') &&
      !normalizedResponse.includes('yes') &&
      !normalizedResponse.includes('not')
    ) {
      return 'Input does not appear to be English text. Please provide English sentences.';
    }

    // If AI says yes or is unclear, allow it (better to have false positives than false negatives)
    return null;
  } catch (error) {
    // If AI validation fails, allow the text through (fail open)
    // Better to process potentially invalid text than to block valid English
    // eslint-disable-next-line no-console
    console.warn('AI language validation failed, allowing text through:', error);
    return null;
  }
}

// Handle OPTIONS for CORS preflight
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
  const clientIP = getClientIP(request);

  try {
    // Rate limiting check
    const rateLimitResponse = await validateRateLimit(clientIP, corsHeaders);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }
    const rateLimit = checkRateLimit(clientIP);

    // Parse request body
    const body = await request.json();
    const { text, locale } = body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return createErrorResponse(
        'Text is required',
        'Please provide a text to analyze.',
        400,
        corsHeaders,
        rateLimit.remaining
      );
    }

    if (text.length > 5000) {
      return createErrorResponse(
        'Text too long',
        'Text must be shorter than 5000 characters.',
        400,
        corsHeaders,
        rateLimit.remaining
      );
    }

    const detectedLocale: Locale = (locale === 'en' ? 'en' : 'id') as Locale;

    // Validate that input is English text, not JSON or other formats
    const validationError = await validateEnglishText(text, detectedLocale);
    if (validationError) {
      return createErrorResponse(
        'Invalid input',
        validationError,
        400,
        corsHeaders,
        rateLimit.remaining
      );
    }

    // System instruction for tenses detection
    const systemInstruction = `You are an expert English grammar analyzer specializing in identifying verb tenses in English sentences.

Your task is to analyze English text and identify which of the 16 English tenses each verb phrase uses. 

IMPORTANT: You MUST return ONLY a valid JSON array. Do not include any text before or after the array. Do not use markdown code blocks. Just the raw JSON array.

The JSON array structure:
[
  {
    "text": "exact verb phrase from the text",
    "tense": "tense name"
  }
]

The 16 English tenses are:
1. Simple Present (e.g., "go", "goes", "am", "is", "are")
2. Present Continuous (e.g., "am going", "is doing", "are working")
3. Present Perfect (e.g., "have gone", "has done")
4. Present Perfect Continuous (e.g., "have been going", "has been doing")
5. Simple Past (e.g., "went", "did", "was", "were")
6. Past Continuous (e.g., "was going", "were doing")
7. Past Perfect (e.g., "had gone", "had done")
8. Past Perfect Continuous (e.g., "had been going", "had been doing")
9. Simple Future (e.g., "will go", "shall do")
10. Future Continuous (e.g., "will be going", "will be doing")
11. Future Perfect (e.g., "will have gone", "will have done")
12. Future Perfect Continuous (e.g., "will have been going", "will have been doing")
13. Past Future (e.g., "would go", "should do")
14. Past Future Continuous (e.g., "would be going", "would be doing")
15. Past Future Perfect (e.g., "would have gone", "would have done")
16. Past Future Perfect Continuous (e.g., "would have been going", "would have been doing")

CRITICAL RULES:
- Analyze ONLY verb phrases (main verbs + auxiliary verbs if any)
- Do NOT analyze nouns, adjectives, or other parts of speech
- Include the EXACT text from the input (preserve capitalization, spacing, and punctuation exactly as it appears)
- If a verb phrase spans multiple words, include ALL words with exact spacing
- Do NOT create duplicate entries for the same verb phrase
- Return empty array [] if no verbs found
- Do NOT include any explanation, comments, markdown formatting, or text outside the JSON array
- Return ONLY the raw JSON array starting with [ and ending with ]
- Ensure the JSON is valid and parseable
- The "text" field must contain the EXACT verb phrase as it appears in the original text

Example: For text "I am going to the store"
- Return: [{"text": "am going", "tense": "Present Continuous"}]

Remember: Your response must be ONLY the JSON array, nothing else. Do NOT include startIndex or endIndex - just the text and tense.`;

    const userPrompt = `Analyze the following English text and identify all verb tenses. Return only a JSON array with verb phrases and their tenses:

"${text}"

Return ONLY the JSON array with "text" and "tense" fields. Do NOT include startIndex or endIndex.`;

    try {
      const aiResponse = await generateWithCloudflare(
        userPrompt,
        systemInstruction,
        detectedLocale
      );

      let tenses = null;
      let jsonString = '';

      // Strategy 1: Try to parse the entire response as JSON array
      try {
        const trimmed = aiResponse.trim();
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
          tenses = JSON.parse(trimmed);
        }
      } catch {
        // Continue to next strategy
      }

      // Strategy 2: Extract JSON array using regex
      if (!tenses) {
        const arrayRegex = /\[[\s\S]*?\]/;
        const match = arrayRegex.exec(aiResponse);
        if (match) {
          jsonString = match[0];
          try {
            tenses = JSON.parse(jsonString);
          } catch {
            // Continue to next strategy
          }
        }
      }

      // Strategy 3: Try to find JSON in code blocks
      if (!tenses) {
        const codeBlockRegex = /```(?:json)?\s*(\[[\s\S]*?\])\s*```/;
        const match = codeBlockRegex.exec(aiResponse);
        if (match?.[1]) {
          jsonString = match[1];
          try {
            tenses = JSON.parse(jsonString);
          } catch {
            // Continue to next strategy
          }
        }
      }

      // Strategy 4: Try to find JSON array after common prefixes
      if (!tenses) {
        const prefixes = ['Here is', 'Here are', 'The result', 'Result:', 'JSON:', 'Output:'];
        for (const prefix of prefixes) {
          const index = aiResponse.indexOf(prefix);
          if (index !== -1) {
            const afterPrefix = aiResponse.substring(index + prefix.length);
            const arrayMatch = /\[[\s\S]*?\]/.exec(afterPrefix);
            if (arrayMatch) {
              try {
                tenses = JSON.parse(arrayMatch[0]);
                break;
              } catch {
                // Continue
              }
            }
          }
        }
      }

      // Strategy 5: Try to extract and fix common JSON issues
      if (!tenses) {
        // Remove markdown code blocks if present
        const cleaned = aiResponse
          .replace(/```(?:json)?/g, '')
          .replace(/```/g, '')
          .trim();
        // Try to find array boundaries
        const startIndex = cleaned.indexOf('[');
        const lastIndex = cleaned.lastIndexOf(']');
        if (startIndex !== -1 && lastIndex !== -1 && lastIndex > startIndex) {
          jsonString = cleaned.substring(startIndex, lastIndex + 1);
          try {
            tenses = JSON.parse(jsonString);
          } catch (parseError) {
            // Log the parse error for debugging
            // eslint-disable-next-line no-console
            console.error('JSON parse error:', parseError);
            // eslint-disable-next-line no-console
            console.error('Attempted to parse:', jsonString.substring(0, 200));
          }
        }
      }

      // If still no success, throw error with response preview
      if (!tenses) {
        const preview = aiResponse.substring(0, 500);
        // eslint-disable-next-line no-console
        console.error('Failed to parse AI response. Preview:', preview);
        throw new Error(
          `Invalid response format from AI. Could not extract JSON array. Response preview: ${preview}`
        );
      }

      // Validate the response structure
      if (!Array.isArray(tenses)) {
        throw new TypeError('AI response is not an array');
      }

      // Find indices for each tense by searching in the original text
      const validTenses = [];
      const seenIndices = new Set<string>();

      for (const item of tenses) {
        // Validate structure (now we only need text and tense)
        if (!item.text || !item.tense) {
          continue; // Skip invalid items
        }

        // Normalize text for searching (preserve original for exact match)
        const searchText = item.text.trim();
        if (!searchText) {
          continue; // Skip empty text
        }

        // Find the text in the original text (case-insensitive, but preserve original case)
        const normalizedText = text.toLowerCase();
        const normalizedSearch = searchText.toLowerCase();

        // Try exact match first
        let foundIndex = normalizedText.indexOf(normalizedSearch);
        let actualFound: string;

        // If not found, try with flexible whitespace matching
        if (foundIndex === -1) {
          // Escape special regex characters but allow flexible whitespace
          const escaped = normalizedSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const flexiblePattern = escaped.split(/\s+/).join('\\s+');
          const regex = new RegExp(flexiblePattern);
          const match = regex.exec(normalizedText);
          if (match) {
            foundIndex = match.index;
            // Get the actual text from input (preserve original case and spacing)
            actualFound = text.substring(match.index, match.index + match[0].length);
          } else {
            // Not found, skip
            continue;
          }
        } else {
          // Found exact match, get the actual text from input
          actualFound = text.substring(foundIndex, foundIndex + searchText.length);
        }

        // Calculate endIndex based on the actual text found
        const startIndex = foundIndex;
        const endIndex = foundIndex + actualFound.length;

        // Validate indices
        if (startIndex < 0 || endIndex <= startIndex || endIndex > text.length) {
          continue; // Skip invalid indices
        }

        // Verify the text at the index matches (case-insensitive)
        const textAtIndex = text.substring(startIndex, endIndex);
        if (textAtIndex.toLowerCase() !== actualFound.toLowerCase()) {
          // Text doesn't match, skip
          continue;
        }

        // Use the exact text from input to preserve formatting
        item.text = textAtIndex;
        item.startIndex = startIndex;
        item.endIndex = endIndex;

        // Deduplicate: check if we've seen this exact range before
        const indexKey = `${startIndex}-${endIndex}`;
        if (seenIndices.has(indexKey)) {
          continue; // Skip duplicates
        }
        seenIndices.add(indexKey);

        validTenses.push(item);
      }

      // Sort by startIndex for easier processing
      validTenses.sort((a, b) => a.startIndex - b.startIndex);

      return createSuccessResponse(
        {
          success: true,
          tenses: validTenses,
        },
        corsHeaders,
        rateLimit.remaining
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error analyzing tenses:', error);

      // Provide more helpful error messages
      let errorMessage = 'Unknown error';
      if (error instanceof Error) {
        errorMessage = error.message;
        // If it's a JSON parsing error, provide more context
        if (error.message.includes('JSON') || error.message.includes('parse')) {
          errorMessage = 'AI returned invalid JSON format. Please try again with a different text.';
        } else if (error.message.includes('Invalid response format')) {
          errorMessage = 'AI response format is invalid. Please try again.';
        }
      }

      return createErrorResponse(
        'Failed to analyze tenses',
        errorMessage,
        500,
        corsHeaders,
        rateLimit.remaining
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Tenses detector API error:', error);
    return createErrorResponse(
      'Internal server error',
      error instanceof Error ? error.message : 'Unknown error',
      500,
      corsHeaders
    );
  }
};
