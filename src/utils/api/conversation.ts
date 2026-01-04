/**
 * Conversation history utilities
 */

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Validate a single conversation message
 */
function isValidMessage(msg: unknown): msg is ConversationMessage {
  if (typeof msg !== 'object' || msg === null || !('role' in msg) || !('content' in msg)) {
    return false;
  }

  const m = msg as { role: unknown; content: unknown };
  return (
    (m.role === 'user' || m.role === 'assistant') &&
    typeof m.content === 'string' &&
    m.content.trim().length > 0
  );
}

/**
 * Validate and prepare conversation history
 */
export function prepareConversationHistory(
  conversationHistory: unknown
): ConversationMessage[] | undefined {
  if (!Array.isArray(conversationHistory)) {
    return undefined;
  }

  const history = conversationHistory
    .slice(-10)
    .filter(isValidMessage)
    .map((msg) => ({
      role: msg.role,
      content: msg.content.trim(),
    }));

  return history.length > 0 ? history : undefined;
}
