/**
 * Deep Research API utilities
 */

export interface DeepResearchRequest {
  topic: string;
  focus: string;
  language: string;
}

export interface DeepResearchChunk {
  type: 'status' | 'thought' | 'final';
  message?: string;
  content?: string;
  report?: string;
  report_length?: number;
  complete?: boolean;
  sources?: Array<{
    url?: string;
    title?: string;
    domain?: string;
  }>;
  node?: string | null;
}

export interface DeepResearchError {
  message: string;
  error?: string;
}

/**
 * Parse SSE line to extract JSON data
 */
export function parseSSELine(line: string): string | null {
  const trimmedLine = line.trim();
  if (!trimmedLine) return null;

  let jsonLine = trimmedLine;

  // Remove SSE prefix if present
  if (jsonLine.startsWith('data: ')) {
    jsonLine = jsonLine.substring(6); // Remove "data: " prefix
  }

  // Skip empty lines, comment lines, or event type lines
  if (!jsonLine || jsonLine.startsWith(':') || jsonLine === '' || jsonLine.startsWith('event:')) {
    return null;
  }

  return jsonLine;
}

/**
 * Parse stream chunk from JSON line
 */
export function parseStreamChunk(jsonLine: string): DeepResearchChunk | null {
  try {
    const data = JSON.parse(jsonLine);
    return data as DeepResearchChunk;
  } catch {
    return null;
  }
}

/**
 * Validate response and throw error if invalid
 */
export async function validateResponse(response: Response): Promise<void> {
  if (!response.ok) {
    const errorText = await response.text();
    let errorData: DeepResearchError;
    try {
      errorData = JSON.parse(errorText);
    } catch {
      errorData = { message: errorText || 'Unknown error occurred' };
    }
    throw new Error(errorData.message || errorData.error || 'Unknown error occurred');
  }

  if (!response.body) {
    throw new Error('Response body is empty');
  }
}

/**
 * Create deep research API request
 */
export async function createDeepResearchRequest(
  apiEndpoint: string,
  request: DeepResearchRequest
): Promise<Response> {
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  await validateResponse(response);
  return response;
}

/**
 * Process streaming response and call callback for each chunk
 */
export async function processStreamingResponse(
  response: Response,
  onChunk: (chunk: DeepResearchChunk) => void
): Promise<void> {
  if (!response.body) {
    throw new Error('Response body is empty');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let hasReceivedData = false;

  try {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      hasReceivedData = true;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // Keep incomplete line in buffer

      for (const line of lines) {
        const jsonLine = parseSSELine(line);
        if (!jsonLine) continue;

        const chunk = parseStreamChunk(jsonLine);
        if (chunk) {
          onChunk(chunk);
        }
      }
    }

    if (!hasReceivedData) {
      throw new Error('No data received from server');
    }
  } finally {
    reader.releaseLock();
  }
}
