/**
 * Storage keys configuration for client-side localStorage
 * Centralized location for all storage key constants
 */

export const STORAGE_KEYS = {
  // Chatbot storage keys
  CHATBOT_HISTORY: 'chatbot_history',
  CHATBOT_STATE: 'chatbot_state',

  // Deep Research storage keys
  DEEP_RESEARCH_CHAT_HISTORY: 'deep_research_chat_history',
  DEEP_RESEARCH_REPORTS: 'deep_research_reports',
  DEEP_RESEARCH_STREAM_DATA: 'deep_research_stream_data',
  DEEP_RESEARCH_REQUEST_STATE: 'deep_research_request_state',
} as const;
