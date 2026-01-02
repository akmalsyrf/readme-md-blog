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
        'Welcome to my little corner of the internet. Here, I share thoughts about technology, software development, and my learning journey.',
      message:
        'I believe that sharing knowledge is the best way to grow together. Every article I write is a result of experience, experimentation, and personal reflection.',
      closing: 'Thanks for stopping by. I hope you find something useful here.',
    },
  },
  nav: {
    home: 'Home',
    notes: 'Notes',
    archive: 'Archive',
    search: 'Search',
    tags: 'Tags',
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
  pagination: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
  },
  archive: {
    title: 'Archive',
    description: 'All notes sorted by date',
    noPosts: 'No posts',
  },
  search: {
    title: 'Search',
    placeholder: 'Search posts...',
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
  theme: {
    toggle: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
  },
  toc: {
    title: 'Table of Contents',
    show: 'Show',
    hide: 'Hide',
  },
  breadcrumb: {
    home: 'Home',
    notes: 'Notes',
    tags: 'Tags',
  },
  notFound: {
    title: '404 - Page Not Found',
    heading: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist or has been moved.',
    backHome: 'Back to Home',
    backNotes: 'Back to Notes',
  },
} as const;
