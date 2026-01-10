#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get arguments from command line
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ Error: Please provide a cheatsheet title/slug');
  console.log('\nUsage: npm run new-cheatsheet "my-cheatsheet-title"');
  console.log('Example: npm run new-cheatsheet "git-commands"');
  process.exit(1);
}

const slug = args[0]
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

if (!slug) {
  console.error('❌ Error: Invalid cheatsheet title/slug');
  process.exit(1);
}

// Generate timestamp in format: YYYYMMDDHHMMSS (like SQL migrations)
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;
const fileName = `${timestamp}_${slug}.md`;

// Create folder paths
const cheatsheetDir = join(__dirname, '..', 'src', 'content', 'cheatsheet');
const filePath = join(cheatsheetDir, fileName);

// Ensure cheatsheet directory exists
try {
  mkdirSync(cheatsheetDir, { recursive: true });
} catch (error) {
  console.error('❌ Error creating cheatsheet directory:', error.message);
  process.exit(1);
}

// Get current date for pubDate
const pubDate = `${year}-${month}-${day}`;

// Template for cheatsheet
const template = `---
title: 'Cheatsheet Title'
description: 'Brief description about this cheatsheet'
pubDate: ${pubDate}
author: 'Admin'
tags: ['tag1', 'tag2']
---

# Cheatsheet Title

Start writing your cheatsheet here...

## Section 1

Cheatsheet content...

## Section 2

More content...
`;

// Write file
try {
  writeFileSync(filePath, template, 'utf8');
  console.log(`✅ Created: ${fileName}`);

  console.log(`\n🎉 Successfully created new cheatsheet: ${fileName}`);
  console.log(`\n📝 Edit the file:`);
  console.log(`   - src/content/cheatsheet/${fileName}`);
} catch (error) {
  console.error('❌ Error creating file:', error.message);
  process.exit(1);
}
