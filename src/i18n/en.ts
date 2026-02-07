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
      portfolioBalancer: {
        title: 'Portfolio Balancer',
        description: 'Balance your investment portfolio according to target allocation',
      },
      hppCalculator: {
        title: 'HPP Calculator',
        description: 'Calculate Cost of Goods Sold accurately and get selling price suggestions',
      },
    },
  },
  hppCalculator: {
    title: 'HPP Calculator',
    description:
      'Calculate Cost of Goods Sold (COGS) accurately and get profitable selling price suggestions',
    productNameLabel: 'Product Name',
    productNamePlaceholder: 'Example: Iced Sweet Tea',
    materialsTitle: 'Materials Purchased',
    materialNameLabel: 'Material Name',
    materialNamePlaceholder: 'Example: Sugar',
    materialUnitLabel: 'Unit',
    materialUnitPlaceholder: 'Example: kg',
    materialPriceLabel: 'Purchase Price at Store',
    addMaterialButton: 'Add Material',
    totalMaterialsLabel: 'Total Materials Purchased',
    operationalCostsTitle: 'Operational Costs',
    laborCostLabel: 'Labor Cost per Unit (Rp)',
    laborCostHint:
      'How to calculate: Daily wage ÷ products per day. Example: Rp 100,000 ÷ 500 = Rp 200',
    overheadCostLabel: 'Overhead Cost per Unit (Rp)',
    overheadCostHint:
      'How to calculate: Total monthly costs (electricity, rent, etc.) ÷ production quantity. Example: Rp 2,000,000 ÷ 10,000 = Rp 200',
    productQuantityLabel: 'Number of Products Produced',
    productQuantityPlaceholder: 'Example: 100',
    productQuantityHint: 'Example: From purchased materials can produce 100 glasses of iced tea',
    calculateButton: 'Calculate HPP',
    resetButton: 'Reset',
    exampleButton: 'Example',
    resultsTitle: 'Calculation Results',
    hppPerUnit: 'HPP per Unit',
    totalCost: 'Total Cost',
    totalMaterials: 'Total Materials',
    totalOperational: 'Total Operational',
    suggestedPricesTitle: 'Choose Profit Margin',
    margin25: '25%',
    margin35: '35%',
    margin50: '50%',
    sellingPrice: 'Selling price',
    profit: 'Profit',
    invalidInput: 'Invalid input. Make sure all numbers ≥ 0 and product quantity > 0.',
    emptyFormMessage: 'Complete the form to see HPP calculation results',
    removeMaterial: 'Remove',
    exportToExcelButton: 'Export to Excel',
    exportSuccess: 'Excel file downloaded successfully',
    exportError: 'Failed to export to Excel',
    creditText: 'Inspired by',
    creditLink: 'https://hitunghpp.com/kalkulator-hpp',
    creditLinkText: 'hitunghpp.com',
    tooltips: {
      margin25: {
        title: 'Margin 25%',
        description: 'Ideal profit margin for maintaining business',
        formula: 'Selling Price = COGS × 1.25',
        explanation:
          'Margin 25-30% is suitable for maintaining business. This margin depends on product type, market competition, and brand positioning.',
      },
      margin35: {
        title: 'Margin 35%',
        description: 'Ideal profit margin for business development',
        formula: 'Selling Price = COGS × 1.35',
        explanation:
          'Margin 35-45% is suitable for business development. This margin depends on product type, market competition, and brand positioning.',
      },
      margin50: {
        title: 'Margin 50%',
        description: 'Ideal profit margin for premium/unique products',
        formula: 'Selling Price = COGS × 1.50',
        explanation:
          'Margin 50%+ is suitable for premium/unique products. This margin depends on product type, market competition, and brand positioning.',
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
    exportButton: 'Export to Excel',
    exportSuccess: 'Excel file downloaded successfully',
    exportError: 'Failed to export to Excel',
    tooltips: {
      finalAmount: {
        title: 'Final Amount (Estimate)',
        description:
          'Total investment value at the end of the period, including initial principal, all contributions, and earned interest.',
        formula: 'FV = PV × (1 + r/n)^(n×t) + Σ[PMT × ((1 + r/n)^n - 1) / (r/n)]',
        explanation:
          'FV is calculated with monthly compounding (n=12) and monthly contributions that increase each year.',
      },
      presentValue: {
        title: "Real Value in Today's Money",
        description:
          "Final amount adjusted for inflation to show actual purchasing power in today's terms.",
        formula: 'PV = FV / (1 + inflation)^years',
        explanation:
          "Calculates how much the final amount is worth in today's purchasing power, accounting for inflation.",
      },
      totalContributions: {
        title: 'Total Contributions',
        description:
          'Total amount of money deposited during the investment period, including initial principal and all monthly contributions.',
        formula: 'Total = Initial Principal + Σ(Monthly Contribution × 12 × (1 + increase)^year)',
        explanation:
          'Sums the initial principal with all monthly contributions that increase each year by the specified percentage.',
      },
      totalInterest: {
        title: 'Total Interest',
        description:
          'Difference between final amount and total contributions, showing the gain from compound interest.',
        formula: 'Total Interest = Final Amount - Total Contributions',
        explanation:
          'Interest earned from the investment, calculated by subtracting total contributions from the final amount.',
      },
    },
    exportLabels: {
      year: 'Year',
      startingBalance: 'Starting Balance',
      monthlyContribution: 'Monthly Contribution',
      yearlyContributions: 'Yearly Contributions',
      interestEarned: 'Interest Earned',
      endingBalance: 'Ending Balance',
      presentValue: "Present Value (Today's Money)",
      finalAmount: 'Final Amount',
      total: 'Total',
    },
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
  portfolioBalancer: {
    title: 'Portfolio Balancer',
    description:
      'Tool to help balance your investment portfolio according to your target allocation rules.',
    targetAllocationTitle: 'Target Allocation',
    targetAllocationDescription:
      'Enter the target percentage for each asset category. Total must equal 100%.',
    currentAllocationTitle: 'Current Allocation',
    currentAllocationDescription:
      'Enter the currency amount for each asset category you currently own.',
    currencyLabel: 'Currency',
    total: 'Total',
    totalPortfolioValue: 'Total Portfolio Value',
    calculateButton: 'Calculate',
    resetButton: 'Reset',
    addAsset: '+ Add Asset',
    removeAsset: 'Remove',
    invalidInput: 'Invalid input. Make sure all numbers are valid and total portfolio > 0.',
    totalMustBe100: 'Total allocation for {type} must equal 100%.',
    targetChartTitle: 'Target Allocation',
    currentChartTitle: 'Current Allocation',
    differencesTitle: 'Allocation Differences',
    recommendationsTitle: 'Recommendations',
    overAllocated: '(Over-allocated)',
    underAllocated: '(Under-allocated)',
    correctlyAllocated: '(Correct)',
    recommendationBuy: 'Buy {amount} to reach target allocation.',
    recommendationSell: 'Sell {amount} to reach target allocation.',
    recommendationMaintain: 'Maintain current allocation.',
    assetNamePlaceholder: 'Asset name (e.g., S&P 500)',
    targetPercentPlaceholder: '35',
    currentAmountPlaceholder: '10000000',
    assetLabels: {
      sp500: 'S&P 500 / Global Equity',
      growth: 'Growth Equity (Nasdaq / Factor / Emerging)',
      bonds: 'Bonds (Shariah / Short Duration)',
      gold: 'Gold',
      cash: 'USD Cash',
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
