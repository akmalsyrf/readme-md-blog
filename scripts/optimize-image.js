#!/usr/bin/env node

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync, mkdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Optimize image to WebP format
 * Usage: node scripts/optimize-image.js <source> <target>
 * Example: node scripts/optimize-image.js image.png image.webp
 */
async function optimizeImage(source, target) {
  try {
    // Resolve paths relative to project root
    const projectRoot = resolve(__dirname, '..');
    const sourcePath = resolve(projectRoot, source);
    const targetPath = resolve(projectRoot, target);

    // Check if source file exists
    if (!existsSync(sourcePath)) {
      console.error(`❌ Error: Source file not found: ${source}`);
      process.exit(1);
    }

    // Create target directory if it doesn't exist
    const targetDir = dirname(targetPath);
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    // Get source file info
    const sourceInfo = await sharp(sourcePath).metadata();
    const sourceSize = statSync(sourcePath).size;

    console.log(`📸 Converting: ${source}`);
    console.log(`   Dimensions: ${sourceInfo.width}x${sourceInfo.height}`);
    console.log(`   Original size: ${(sourceSize / 1024).toFixed(2)} KB`);

    // Convert to WebP with optimization
    await sharp(sourcePath)
      .webp({
        quality: 85, // Good balance between quality and file size
        effort: 6, // Higher effort = better compression (0-6)
        smartSubsample: true, // Better quality for photos
      })
      .toFile(targetPath);

    // Get target file info
    const targetSize = statSync(targetPath).size;
    const savings = ((1 - targetSize / sourceSize) * 100).toFixed(1);

    console.log(`✅ Created: ${target}`);
    console.log(`   New size: ${(targetSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${savings}%`);
    console.log(`   Reduction: ${((sourceSize - targetSize) / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error(`❌ Error optimizing image:`, error.message);
    process.exit(1);
  }
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('❌ Error: Missing required arguments');
  console.error('Usage: npm run optimize-image <source> [target]');
  console.error('Example: npm run optimize-image src/image.png public/image.webp');
  console.error('Example: npm run optimize-image src/image.png (auto: src/image.webp)');
  process.exit(1);
}

const source = args[0];
let target = args[1];

// If target not provided, auto-generate from source with .webp extension
if (!target) {
  const lastDotIndex = source.lastIndexOf('.');
  if (lastDotIndex !== -1) {
    target = source.substring(0, lastDotIndex) + '.webp';
  } else {
    target = source + '.webp';
  }
  console.log(`ℹ️  Target not specified, using: ${target}`);
}

// Validate file extensions
const validExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.tiff', '.bmp', '.svg'];
const sourceExt = source.toLowerCase().substring(source.lastIndexOf('.'));
const targetExt = target.toLowerCase().substring(target.lastIndexOf('.'));

if (!validExtensions.includes(sourceExt)) {
  console.error(`❌ Error: Unsupported source format: ${sourceExt}`);
  console.error(`   Supported formats: ${validExtensions.join(', ')}`);
  process.exit(1);
}

if (targetExt !== '.webp') {
  console.warn(`⚠️  Warning: Target should be .webp format, got: ${targetExt}`);
}

// Run optimization
optimizeImage(source, target);
