# Notes with Astro

A modern notes/blog application built with Astro, featuring internationalization (i18n) and light/dark theme support.

## Features

- ✅ **Internationalization (i18n)**: Support for Indonesian (default) and English languages
- ✅ **Light & Dark Theme**: Theme toggle with saved preferences
- ✅ **Content Collections**: Notes content management using Astro Content Collections
- ✅ **Responsive Design**: Responsive design using Tailwind CSS
- ✅ **SEO Friendly**: SEO-friendly structure
- ✅ **Social Links**: Links to GitHub, X (Twitter), and LinkedIn in the footer

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will run at `http://localhost:4321`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
blog/
├── src/
│   ├── components/      # Reusable components
│   │   ├── LanguageSwitcher.astro
│   │   ├── SocialLinks.astro
│   │   └── ThemeToggle.astro
│   ├── config/          # Configuration
│   │   └── social.ts
│   ├── content/        # Notes content
│   │   └── notes/
│   ├── i18n/          # Translation files
│   │   ├── id.ts
│   │   └── en.ts
│   ├── layouts/       # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/         # Pages
│   │   ├── index.astro
│   │   ├── notes/
│   │   └── en/
│   └── utils/         # Utility functions
│       └── i18n.ts
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

## i18n Routing

- Indonesian (default): `/` and `/notes`
- English: `/en` and `/en/notes`

## Theme

The light/dark theme can be toggled using the button in the header. User preferences are saved in localStorage.

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
