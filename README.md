# Notes with Astro

A modern notes/blog application built with Astro, featuring internationalization (i18n), AI-powered chatbot with RAG (Retrieval Augmented Generation), and comprehensive blog features.

## Features

### Core Features

- ✅ **Internationalization (i18n)**: Support for Indonesian (default) and English languages
- ✅ **Light & Dark Theme**: Theme toggle with saved preferences in localStorage
- ✅ **Content Collections**: Notes content management using Astro Content Collections
- ✅ **Responsive Design**: Fully responsive design using Tailwind CSS
- ✅ **SEO Optimized**: SEO-friendly structure with structured data, sitemap, and RSS feed
- ✅ **Social Links**: Links to GitHub, X (Twitter), and LinkedIn in the footer

### Blog Features

- ✅ **RSS Feed**: Automatic RSS feed generation at `/rss.xml`
- ✅ **Sitemap**: Dynamic sitemap generation at `/sitemap.xml` with multilingual support
- ✅ **Search**: Full-text search functionality across all notes
- ✅ **Archive**: Archive page showing all published notes chronologically
- ✅ **Tags System**: Tag-based categorization and filtering of notes
- ✅ **Pagination**: Paginated blog listing for better performance
- ✅ **Table of Contents**: Automatic TOC generation from headings
- ✅ **Post Navigation**: Previous/Next post navigation
- ✅ **Share Buttons**: Social media sharing buttons for posts
- ✅ **Reading Time**: Automatic reading time calculation
- ✅ **Image Modal**: Click-to-expand image viewing with modal
- ✅ **Breadcrumb Navigation**: Breadcrumb navigation for better UX
- ✅ **404 Page**: Custom 404 error page

### AI Features

- ✅ **AI Chatbot**: Interactive chatbot powered by Google Gemini AI with Cloudflare Workers AI fallback
- ✅ **RAG (Retrieval Augmented Generation)**: Context-aware responses using vector embeddings
- ✅ **Streaming Responses**: Real-time streaming with "thinking" and "answer" phases
- ✅ **Smart Recommendations**: AI-generated question recommendations
- ✅ **Conversation History**: Multi-turn conversation support (last 10 messages)
- ✅ **Context Awareness**: Chatbot understands current page context
- ✅ **Automatic Fallback**: Falls back to Cloudflare Workers AI if Gemini fails
- ✅ **Rate Limiting**: Built-in rate limiting per IP for API protection
- ✅ **Security**: Request validation, CORS support, API key protection, and request size limits

### Developer Features

- ✅ **Image Optimization**: Script to optimize images to WebP format
- ✅ **TypeScript**: Full TypeScript support
- ✅ **ESLint & Prettier**: Code quality and formatting tools
- ✅ **Husky & lint-staged**: Pre-commit hooks for code quality
- ✅ **Vercel Deployment**: Optimized for Vercel serverless deployment (hybrid mode)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory for AI chatbot features:

```env
# Required for AI Chatbot (at least one AI provider)
GEMINI_API_KEY=your_google_gemini_api_key_here

# Optional: Customize Gemini model (default: gemini-2.5-flash)
GEMINI_MODEL_NAME=gemini-2.5-flash

# Optional: Admin API key for vector store initialization
ADMIN_API_KEY=your_admin_key_here

# Optional: Cloudflare Workers AI (fallback if Gemini fails)
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
CLOUDFLARE_MODEL_NAME=@cf/meta/llama-3.1-8b-instruct
```

**Note**:

- At least one AI provider (Gemini or Cloudflare) is required for the chatbot to work
- Gemini is the primary provider; Cloudflare is used as automatic fallback
- You can get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- For Cloudflare, you need a Workers AI enabled account

### Development

```bash
npm run dev
```

The application will run at `http://localhost:4321`

### Build

```bash
npm run build
```

This will:

- Build the static site
- Generate RSS feed and sitemap
- Optimize assets for production
- Fix Vercel runtime compatibility

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
readme-md/
├── src/
│   ├── components/          # Reusable components
│   │   ├── 404/            # 404 page component
│   │   ├── archive/        # Archive page components
│   │   ├── blog/           # Blog-specific components
│   │   │   ├── BlogListing.astro
│   │   │   ├── BlogPostContent.astro
│   │   │   ├── BlogPostDetail.astro
│   │   │   ├── BlogPostHeader.astro
│   │   │   ├── PostNavigation.astro
│   │   │   ├── ShareButtons.astro
│   │   │   └── TableOfContents.astro
│   │   ├── chat/           # Chatbot components
│   │   │   ├── ChatBot.astro
│   │   │   ├── ChatButton.astro
│   │   │   ├── ChatHeader.astro
│   │   │   ├── ChatInput.astro
│   │   │   ├── ChatMessages.astro
│   │   │   └── ChatWindow.astro
│   │   ├── common/         # Common components
│   │   │   ├── BlogPostCard.astro
│   │   │   ├── Breadcrumb.astro
│   │   │   ├── ImageModal.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   ├── Pagination.astro
│   │   │   ├── SEO.astro
│   │   │   ├── SocialLinks.astro
│   │   │   ├── StructuredData.astro
│   │   │   └── ThemeToggle.astro
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout components
│   │   ├── search/         # Search components
│   │   └── tags/           # Tags components
│   ├── config/             # Configuration files
│   │   ├── notes.ts
│   │   └── social.ts
│   ├── content/            # Content collections
│   │   ├── config.ts
│   │   └── notes/          # Notes content (id.md & en.md per note)
│   ├── i18n/              # Translation files
│   │   ├── id.ts
│   │   └── en.ts
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Pages and routes
│   │   ├── api/           # API routes
│   │   │   └── chat.ts    # Chatbot API endpoint
│   │   ├── en/            # English routes
│   │   ├── notes/         # Notes routes
│   │   ├── 404.astro      # 404 error page
│   │   ├── archive.astro
│   │   ├── index.astro
│   │   ├── rss.xml.ts     # RSS feed
│   │   ├── sitemap.xml.ts # Sitemap
│   │   ├── search.astro
│   │   └── tags.astro
│   └── utils/             # Utility functions
│       ├── api/           # API utilities
│       │   ├── conversation.ts
│       │   ├── cors.ts
│       │   ├── rateLimit.ts
│       │   ├── requestParser.ts
│       │   ├── response.ts
│       │   └── security.ts
│       ├── rag/           # RAG system utilities
│       │   ├── chunkText.ts
│       │   ├── cloudflareAI.ts
│       │   ├── embedNotes.ts
│       │   ├── geminiAI.ts
│       │   ├── ragQuery.ts
│       │   └── vectorStore.ts
│       ├── extractHeadings.ts
│       ├── getAdjacentPosts.ts
│       ├── getBlogPaginationStaticPaths.ts
│       ├── getBlogPostStaticPaths.ts
│       ├── getPostsByLocale.ts
│       ├── i18n.ts
│       └── readingTime.ts
├── public/                # Static assets
│   └── notes/            # Optimized note images
├── scripts/              # Utility scripts
│   ├── fix-vercel-runtime.js
│   ├── new-note.js
│   └── optimize-image.js
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

## Adding New Notes

### Using Command (Recommended)

The easiest way to create a new note is using the command:

```bash
npm run new-note "note-title"
```

Examples:

```bash
npm run new-note "getting-started-with-astro"
npm run new-note "typescript-guide"
```

This command will:

- ✅ Create a new folder with timestamp format: `YYYYMMDDHHMMSS_note-title`
- ✅ Automatically generate `id.md` and `en.md` files with frontmatter template
- ✅ Set `pubDate` to today's date
- ✅ Provide content template for both languages

Generated folder structure:

```
src/content/notes/
└── 20240115143025_getting-started-with-astro/
    ├── id.md
    └── en.md
```

### Manual

If you want to create notes manually:

1. Create a new folder in `src/content/notes/` with format: `YYYYMMDDHHMMSS_note-title`
2. Inside that folder, create two files:
   - `id.md` for Indonesian version
   - `en.md` for English version
3. Add frontmatter with metadata in each file:

```markdown
---
title: 'Note Title'
description: 'Short description'
pubDate: 2024-01-15
author: 'Author Name'
tags: ['tag1', 'tag2']
---
```

## Image Optimization

Optimize images to WebP format for better performance:

```bash
npm run optimize-image <source> [target]
```

Examples:

```bash
# Auto-generate WebP from PNG
npm run optimize-image src/image.png

# Specify target path
npm run optimize-image src/image.png public/notes/image.webp
```

The script will:

- Convert images to WebP format
- Optimize quality (85% by default)
- Show size reduction statistics
- Support PNG, JPG, JPEG, GIF, TIFF, BMP formats

## AI Chatbot

The application includes an AI-powered chatbot that uses RAG (Retrieval Augmented Generation) to answer questions based on your notes content.

### Features

- **Context-Aware**: Understands the current page you're viewing
- **Smart Recommendations**: Suggests relevant questions based on content
- **Conversation History**: Maintains context across multiple messages (last 10 messages)
- **Streaming Responses**: Real-time streaming with visual "thinking" phase
- **Automatic Fallback**: Falls back to Cloudflare Workers AI if Gemini fails
- **Multilingual**: Supports both Indonesian and English
- **Rate Limited**: Built-in per-IP rate limiting protection
- **Source References**: Shows source notes for each answer

### Usage

1. Click the chatbot button (bottom-right corner)
2. Ask questions about your notes
3. The chatbot will search through your content and provide relevant answers
4. View source references for each answer

### Initializing Vector Store

The vector store is automatically initialized on first use when a user asks a question. The system will:

1. Check if vector store has documents for the requested locale
2. Automatically embed notes if missing
3. Use Gemini API for generating embeddings

For manual initialization or re-embedding (admin only):

```bash
# Initialize for Indonesian locale
curl -X POST https://your-domain.com/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_API_KEY" \
  -d '{"action": "initialize", "locale": "id"}'

# Initialize for English locale
curl -X POST https://your-domain.com/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_API_KEY" \
  -d '{"action": "initialize", "locale": "en"}'

# Re-embed all notes (clears existing and re-embeds)
curl -X POST https://your-domain.com/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_API_KEY" \
  -d '{"action": "re-embed", "locale": "id"}'
```

**Note**: Vector embeddings are generated using Gemini's text embedding model. The vector store is stored in memory and persists across requests in the same serverless function instance.

## i18n Routing

- Indonesian (default): `/` and `/notes`
- English: `/en` and `/en/notes`

All routes support both languages with automatic locale detection.

## Theme

The light/dark theme can be toggled using the button in the header. User preferences are saved in localStorage and persist across sessions.

## Social Links

Links to social media (GitHub, X/Twitter, LinkedIn) are displayed in the footer. To change social media URLs, edit the file `src/config/social.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername', // Replace with your GitHub username
    icon: 'github',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/yourusername', // Replace with your X username
    icon: 'x',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn username
    icon: 'linkedin',
  },
];
```

You can also add or remove social links as needed.

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment with hybrid mode (static pages + API routes).

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `GEMINI_API_KEY` (required for primary AI)
   - `GEMINI_MODEL_NAME` (optional, default: gemini-2.5-flash)
   - `ADMIN_API_KEY` (optional, for vector store management)
   - `CLOUDFLARE_ACCOUNT_ID` (optional, for fallback AI)
   - `CLOUDFLARE_API_TOKEN` (optional, for fallback AI)
   - `CLOUDFLARE_MODEL_NAME` (optional, default: @cf/meta/llama-3.1-8b-instruct)
4. Deploy!

The site URL is configured in `astro.config.mjs`. Update it to match your domain:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Other Platforms

The project can be deployed to any platform that supports:

- Node.js 20.x
- Serverless functions (for API routes)
- Static site hosting

For static-only deployment, remove API routes or use a separate service for the chatbot API.

## Available Scripts

### Development

- `npm run dev` - Start development server at `http://localhost:4321`
- `npm run start` - Alias for `dev`
- `npm run preview` - Preview production build locally

### Building

- `npm run build` - Build for production (includes Vercel runtime fix)
- `npm run preview` - Preview production build locally

### Content Management

- `npm run new-note "note-title"` - Create a new note with templates (generates both id.md and en.md)
- `npm run optimize-image <source> [target]` - Optimize images to WebP format

### Code Quality

- `npm run lint` - Check for linting errors (ESLint)
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are formatted
- `npm run type-check` - Run TypeScript type checking (via Astro)
- `npm run all-checks` - Run lint, format check, and type check

### Setup

- `npm run prepare` - Set up Husky pre-commit hooks (runs automatically after `npm install`)

## Linting & Formatting

This project uses ESLint and Prettier to maintain code quality.

### Running Linter

```bash
# Check for errors
npm run lint

# Auto-fix fixable errors
npm run lint:fix
```

### Running Formatter

```bash
# Format all files
npm run format

# Check if files are formatted
npm run format:check
```

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically run linting and formatting before commits. After installing dependencies, run:

```bash
npm run prepare
```

This will set up Husky to run lint-staged on every commit. Staged files will be automatically linted and formatted before commit.

### Type Checking

```bash
npm run type-check
```

Or run all checks at once:

```bash
npm run all-checks
```

## Development Tools

### VS Code

If using VS Code, this project is configured for:

- Auto-format on save
- ESLint auto-fix on save
- Prettier as default formatter for all file types

Make sure the following extensions are installed:

- ESLint
- Prettier - Code formatter
- Astro

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically:

- Run ESLint on staged files
- Format staged files with Prettier
- Prevent commits if linting fails

Hooks are automatically set up when you run `npm install` (via `prepare` script).

## Technology Stack

- **Framework**: Astro 4.0+ (Hybrid mode for static + API routes)
- **Styling**: Tailwind CSS 3.4+ with Typography plugin
- **AI/LLM**:
  - Primary: Google Gemini AI (gemini-2.5-flash)
  - Fallback: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **Embeddings**: Google Gemini text embedding model
- **Vector Store**: In-memory vector store with similarity search
- **Deployment**: Vercel (Serverless functions for API routes)
- **Language**: TypeScript
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
