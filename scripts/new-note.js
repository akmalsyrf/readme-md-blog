#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get arguments from command line
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ Error: Please provide a note title/slug');
  console.log('\nUsage: npm run new-note "my-note-title"');
  console.log('Example: npm run new-note "getting-started-with-astro"');
  process.exit(1);
}

const slug = args[0]
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

if (!slug) {
  console.error('❌ Error: Invalid note title/slug');
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
const folderName = `${timestamp}_${slug}`;

// Create folder path
const notesDir = join(__dirname, '..', 'src', 'content', 'notes');
const noteFolder = join(notesDir, folderName);

// Create folder
try {
  mkdirSync(noteFolder, { recursive: true });
  console.log(`✅ Created folder: ${folderName}`);
} catch (error) {
  console.error('❌ Error creating folder:', error.message);
  process.exit(1);
}

// Get current date for pubDate
const pubDate = `${year}-${month}-${day}`;

// Template for Indonesian note
const idTemplate = `---
title: 'Judul Catatan'
description: 'Deskripsi singkat tentang catatan ini'
pubDate: ${pubDate}
author: 'Admin'
tags: ['tag1', 'tag2']
---

# Judul Catatan

Mulai menulis catatan Anda di sini...

## Bagian 1

Konten catatan...

## Kesimpulan

Ringkasan atau kesimpulan dari catatan ini.
`;

// Template for English note
const enTemplate = `---
title: 'Note Title'
description: 'Brief description about this note'
pubDate: ${pubDate}
author: 'Admin'
tags: ['tag1', 'tag2']
---

# Note Title

Start writing your note here...

## Section 1

Note content...

## Conclusion

Summary or conclusion of this note.
`;

// Write files
try {
  const idPath = join(noteFolder, 'id.md');
  const enPath = join(noteFolder, 'en.md');

  writeFileSync(idPath, idTemplate, 'utf8');
  console.log(`✅ Created: ${folderName}/id.md`);

  writeFileSync(enPath, enTemplate, 'utf8');
  console.log(`✅ Created: ${folderName}/en.md`);

  console.log(`\n🎉 Successfully created new note: ${folderName}`);
  console.log(`\n📝 Edit the files:`);
  console.log(`   - src/content/notes/${folderName}/id.md`);
  console.log(`   - src/content/notes/${folderName}/en.md`);
} catch (error) {
  console.error('❌ Error creating files:', error.message);
  process.exit(1);
}
