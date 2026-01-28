export default {
  site: {
    title: 'Readme.md',
    description: 'Welcome to my notes',
    intro: 'Welcome',
    subtitle: 'I write about technology, software development, and other interesting things.',
    latestPosts: 'Latest Posts',
    viewAll: 'View All',
    welcome: {
      greeting: 'Welcome to Readme.md',
      description: 'Notes by',
      name: 'Akmal',
      intro:
        "Welcome to my little corner of the internet. Here, I share my thoughts on whatever comes to mind. Sometimes it's about software development, and sometimes it's not. Sometimes it's about unpopular knowledge, and sometimes it's about popular things.",
      message:
        'I believe that sharing thoughts is the best way to grow together. Every article I write is the result of experience, daydreaming, experiments, reading, and personal reflection.',
      closing: 'Thanks for stopping by. I hope you find something useful here.',
    },
  },
  nav: {
    home: 'Home',
    notes: 'Notes',
    archive: 'Archive',
    search: 'Search',
    tags: 'Tags',
    others: 'Others',
  },
  notes: {
    title: 'Notes',
    readMore: 'Read more',
    backToNotes: 'Back to Notes',
    publishedOn: 'Published on',
    readingTime: 'min read',
    minRead: 'min',
    underOneMinute: 'under one minute',
  },
  cheatsheet: {
    title: 'Cheatsheet',
    readMore: 'Read more',
    backToCheatsheet: 'Back to Cheatsheet',
    publishedOn: 'Published on',
    noCheatsheets: 'No cheatsheets yet.',
  },
  pagination: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
  },
  navigation: {
    previousPost: 'Previous Note',
    nextPost: 'Next Note',
    noPrevious: 'No previous note',
    noNext: 'No next note',
  },
  archive: {
    title: 'Archive',
    description: 'All notes sorted by date',
    noPosts: 'No posts',
  },
  search: {
    title: 'Search',
    placeholder: 'Search notes...',
    noResults: 'No results found',
    results: 'results found',
  },
  tags: {
    title: 'Tags',
    description: 'All tags',
    postsCount: 'posts',
    noTags: 'No tags',
    backToTags: 'Back to Tags',
    noPosts: 'No posts with this tag',
  },
  others: {
    title: 'Others',
    description: 'Other pages',
    experimental: 'Experimental',
    tryNow: 'Try now',
    menuItems: {
      deepResearchChatbot: {
        title: 'Deep Research Chatbot',
        description: 'Chatbot for conducting deep research with AI',
      },
      bahlilfication: {
        title: 'Bahlilfication',
        description: 'Transform any image or hand drawing into "Bahlil"',
      },
      spineldb: {
        title: 'SpinelDB',
        description: 'A Modern, Redis-Compatible In-Memory Database in Rust',
      },
      cheatSheet: {
        title: 'Cheat Sheet',
        description: 'My cheat sheet for various topics (only available in Indonesian)',
      },
      tensesDetector: {
        title: 'Tenses Detector',
        description: 'Detect and highlight 16 English tenses in text',
      },
      compoundInterestCalculator: {
        title: 'Compound Interest Calculator',
        description: 'Estimate compound growth with monthly contributions',
      },
    },
  },
  compoundInterestCalculator: {
    title: 'Compound Interest Calculator',
    description:
      'A simple calculator to estimate future value with compound interest and monthly contributions.',
    currencyLabel: 'Currency',
    principalLabel: 'Initial amount',
    monthlyContributionLabel: 'Monthly contribution',
    depositIncreaseLabel: 'Annual deposit increase',
    depositIncreaseHint: 'Yearly increase in monthly contribution (from initial monthly amount)',
    annualRateLabel: 'Annual interest rate',
    annualRateHint: 'Example: 10 means 10% per year',
    yearsLabel: 'Time (years)',
    yearsHint: 'Example: 10 years',
    inflationLabel: 'Annual inflation rate',
    inflationHint: 'Example: 3 means 3% per year (to calculate real purchasing power)',
    calculateButton: 'Calculate',
    resetButton: 'Reset',
    resultsTitle: 'Results',
    finalAmount: 'Final amount (estimate)',
    presentValue: "Real value in today's money",
    totalContributions: 'Total contributions',
    totalInterest: 'Total interest',
    interestShare: 'Interest share of final amount',
    breakdownTitle: 'Input breakdown',
    invalidInput: 'Invalid input. Make sure all numbers are \u2265 0.',
    breakdownLabels: {
      principal: 'Initial amount',
      monthlyContribution: 'Monthly contribution',
      depositIncreaseRate: 'Deposit increase p.a.',
      years: 'Time (years)',
      periods: 'Total months',
      annualRate: 'Annual rate',
      inflationRate: 'Inflation rate',
    },
  },
  tensesDetector: {
    title: 'Tenses Detector',
    description: 'Detect and highlight 16 English tenses in your text',
    inputPlaceholder: 'Enter or paste English text here...',
    analyzeButton: 'Analyze Tenses',
    analyzing: 'Analyzing...',
    clearButton: 'Clear',
    noTextError: 'Please enter text first',
    error: 'Error',
    errorMessage: 'Failed to analyze tenses. Please try again.',
    legend: 'Tenses Legend',
    statistics: 'Statistics',
    totalTenses: 'Total tenses found',
    tensesFound: 'tenses found',
    noTensesFound: 'No tenses found in this text',
    tenses: {
      'Simple Present': 'Simple Present',
      'Present Continuous': 'Present Continuous',
      'Present Perfect': 'Present Perfect',
      'Present Perfect Continuous': 'Present Perfect Continuous',
      'Simple Past': 'Simple Past',
      'Past Continuous': 'Past Continuous',
      'Past Perfect': 'Past Perfect',
      'Past Perfect Continuous': 'Past Perfect Continuous',
      'Simple Future': 'Simple Future',
      'Future Continuous': 'Future Continuous',
      'Future Perfect': 'Future Perfect',
      'Future Perfect Continuous': 'Future Perfect Continuous',
      'Past Future': 'Past Future',
      'Past Future Continuous': 'Past Future Continuous',
      'Past Future Perfect': 'Past Future Perfect',
      'Past Future Perfect Continuous': 'Past Future Perfect Continuous',
    },
  },
  aiPractice: {
    title: 'AI Practice',
    subtitle: 'Practice and exercises with AI',
    description: 'Page for practicing and experimenting with AI',
    buttonText: 'Practice with AI',
  },
  deepResearchChat: {
    title: 'Deep Research Chatbot',
    subtitle: 'Deep research with AI',
    welcome:
      'Hello! I am the Deep Research Chatbot. I can help you conduct deep research on any topic. Please ask your question!',
    placeholder: 'Type your research question...',
    send: 'Send',
    processing: 'Processing research...',
    error: 'An error occurred',
    errorMessage: 'An error occurred while sending the message. Please try again.',
    reportTitle: 'Research Report',
    underConstruction: 'Under Construction',
    reportSubtitle: 'Deep research results',
    downloadReport: 'Download Report',
    download: 'Download',
    closeReport: 'Close Report',
    focus: {
      selectPlaceholder: 'Select research focus',
      loading: 'Loading focuses...',
      selectFocus: 'Select Focus',
      selectFirst: 'Please select a research focus first',
    },
    status: {
      starting: 'Starting research on',
      complete: 'Research complete!',
      restoring: 'Restoring previous research progress...',
      noData: 'No data received from server. Please try again or check your internet connection.',
      noFinalReport: 'Data received but final report not found. Please try again.',
      incomplete: 'Report may be incomplete - check for missing sections',
    },
    report: {
      open: 'Open Report',
      sources: 'sources',
      characters: 'characters',
    },
    reportCanvas: {
      tableOfContents: 'Table of Contents',
      toc: 'TOC',
      shareExport: 'Share & Export',
      share: 'Share',
    },
  },
  theme: {
    toggle: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
  },
  fontSize: {
    toggle: 'Font size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
  },
  toc: {
    title: 'Table of Contents',
    show: 'Show',
    hide: 'Hide',
  },
  breadcrumb: {
    home: 'Home',
    notes: 'Notes',
    cheatsheet: 'Cheatsheet',
    tags: 'Tags',
  },
  notFound: {
    title: '404 - Page Not Found',
    heading: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist or has been moved.',
    backHome: 'Back to Home',
    backNotes: 'Back to Notes',
  },
  share: {
    title: 'Share',
    facebook: 'Facebook',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    instagram: 'Instagram',
    copyLink: 'Copy Link',
  },
  comments: {
    title: 'Comments & Discussion',
    loading: 'Loading comments...',
    powered: 'Powered by GitHub Discussions',
  },
  chatbot: {
    title: 'AI Chat Assistant',
    welcome:
      'Hello! I can help answer questions about the notes in Readme.md. Please ask me something!',
    placeholder: 'Type your question...',
    send: 'Send',
    processing: 'Processing...',
    sources: 'Sources',
    error: 'An error occurred',
    errorMessage: 'An error occurred while sending the message. Please try again.',
    toggleLabel: 'Toggle chatbot',
    generatingRecommendations: 'Generating question recommendations...',
    recommendations: 'Questions you might ask:',
  },
  rag: {
    systemInstruction: `You are "Persona Blog Akmal". Your task is to ONLY answer questions based on the contents of Akmal's thoughts available in the blog database.

MAIN RULES:
1. If the user's question is NOT discussed in Akmal's blog, you MUST REFUSE to give suggestions. DO NOT give general tips, DO NOT give motivation, and DO NOT connect unrelated topics (such as linking AI/Duolingo to dating).

2. If the topic is not found, use this template:
   "Oops, when it comes to [Topic], Akmal hasn't written about that yet on this blog. So I don't have a record of his thoughts on that. Try asking about something else that is in the blog, for example about [Mention 1 topic from the context]!"

3. Style Guidelines:
   - Relaxed and friendly (use "I/you").
   - Avoid phrases: "Based on the context", "In this document", "According to the data".
   - Use: "As far as I know from Akmal's writings...", "Akmal once mentioned in the blog that...", "In his notes, Akmal said...".

4. Strict Prohibitions:
   - Do not give suggestions outside the blog content (No General Advice).
   - Do not mention reference numbers [1], [2].

IMPORTANT: You are an archive of Akmal's thoughts, not the user's personal assistant. If Akmal hasn't written about that, you DO NOT KNOW anything about it.`,
    pageContextNote:
      'Note: User is currently viewing the page "{title}". If the question is related to this page, prioritize information from this page.',
    userPromptTemplate:
      "Here is relevant context from the blog notes:\n\n{context}{pageContext}\n\nVisitor's question: {question}\n\nAnswer this question in a relaxed yet informative way based on the context above. Do not include reference numbers in your answer.",
    noContextFound: 'No relevant context found.',
    errorNoAnswer: 'Sorry, I could not generate an answer.',
    errorNetwork:
      'Network error: Unable to connect to API. Please check your internet connection and try again.',
    errorNetworkGemini:
      'Network error: Unable to connect to Gemini API. Please check your internet connection and try again.',
    errorQuota: 'API quota exceeded. Please wait a moment and try again',
    errorApiKey: 'Invalid or missing GEMINI_API_KEY. Please check your .env file.',
    errorUnknown: 'Unknown error occurred while querying RAG',
    recommendations: {
      systemInstructionTemplate: `You are a data driven question generator for the "readme.md" blog.
  
FORMATTING RULES (MANDATORY):
- ONLY output the list of questions.
- DO NOT provide introductory remarks like "Here are...", "Based on...", or any preamble.
- DO NOT provide any concluding remarks or explanations.
- Each question on a separate line, no numbers, no bullet points.
- DO NOT ask general questions. Questions must be specific about what Akmal writes in the blog.
- Before writing a question, make sure the answer to the question is available in the blog text.
- One question only focuses on one topic. Do not mix and match. Make sure the question is logical.

CONTENT:
- Maximum {count} questions.
- Must be strictly relevant to these titles: {titles} and notes that are available in the blog.
- Casual tone, maximum 10 words per question.`,
      pageContextNote:
        'Important note: User is currently viewing the page "{title}". Prioritize generating questions relevant to this page, but also include some general questions about the blog.',
      userPromptTemplate: `Here are Akmal's blog article titles:\n\n{titles}{pageContext}\n\nCreate {count} short, intriguing questions that are strictly relevant to these titles. Don't go off-topic!`,
      fallback: [
        'What topics are covered in this blog?',
        'How do I use the available features?',
        'What is interesting about this blog content?',
        'Can you explain the technologies used?',
        'What tips and tricks can I learn?',
        'How do I get started with this content?',
        'What best practices are recommended?',
        'Can you provide implementation examples?',
      ],
    },
  },
} as const;
