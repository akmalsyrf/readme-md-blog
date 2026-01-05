#!/usr/bin/env node

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve, join, extname, basename } from 'path';
import { existsSync, mkdirSync, statSync, readdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Optimize image to WebP format
 */
async function optimizeImage(sourcePath, targetPath) {
  try {
    // Get source file info
    const sourceInfo = await sharp(sourcePath).metadata();
    const sourceSize = statSync(sourcePath).size;

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

    return {
      success: true,
      sourceSize,
      targetSize,
      savings,
      dimensions: `${sourceInfo.width}x${sourceInfo.height}`,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Optimize all images in a folder
 * Usage: node scripts/optimize-images-folder.js <folder> [targetFolder]
 * Example: node scripts/optimize-images-folder.js public/images
 * Example: node scripts/optimize-images-folder.js public/images public/images-optimized
 */
async function optimizeImagesInFolder(sourceFolder, targetFolder = null) {
  try {
    // Resolve paths relative to project root
    const projectRoot = resolve(__dirname, '..');
    const sourcePath = resolve(projectRoot, sourceFolder);
    const targetPath = targetFolder ? resolve(projectRoot, targetFolder) : sourcePath;

    // Check if source folder exists
    if (!existsSync(sourcePath)) {
      console.error(`❌ Error: Source folder not found: ${sourceFolder}`);
      process.exit(1);
    }

    // Check if it's a directory
    const sourceStat = statSync(sourcePath);
    if (!sourceStat.isDirectory()) {
      console.error(`❌ Error: Source path is not a directory: ${sourceFolder}`);
      process.exit(1);
    }

    // Create target directory if it doesn't exist
    if (!existsSync(targetPath)) {
      mkdirSync(targetPath, { recursive: true });
      console.log(`📁 Created target directory: ${targetFolder || sourceFolder}`);
    }

    // Supported image extensions
    const validExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.tiff', '.bmp'];
    const imageExtensions = new Set(validExtensions.map((ext) => ext.toLowerCase()));

    // Read all files in the folder
    const files = readdirSync(sourcePath);
    const imageFiles = files.filter((file) => {
      const ext = extname(file).toLowerCase();
      return imageExtensions.has(ext);
    });

    if (imageFiles.length === 0) {
      console.log(`ℹ️  No image files found in: ${sourceFolder}`);
      console.log(`   Supported formats: ${validExtensions.join(', ')}`);
      process.exit(0);
    }

    console.log(`\n📸 Found ${imageFiles.length} image(s) to optimize in: ${sourceFolder}\n`);

    let totalSourceSize = 0;
    let totalTargetSize = 0;
    let successCount = 0;
    let failCount = 0;

    // Process each image
    for (const file of imageFiles) {
      const sourceFilePath = join(sourcePath, file);
      const fileBaseName = basename(file, extname(file));
      const targetFilePath = join(targetPath, `${fileBaseName}.webp`);

      // Skip if already WebP and target is same as source
      if (extname(file).toLowerCase() === '.webp' && targetPath === sourcePath) {
        console.log(`⏭️  Skipping (already WebP): ${file}`);
        continue;
      }

      console.log(`📸 Processing: ${file}`);

      const result = await optimizeImage(sourceFilePath, targetFilePath);

      if (result.success) {
        successCount++;
        totalSourceSize += result.sourceSize;
        totalTargetSize += result.targetSize;
        console.log(`   ✅ Created: ${basename(targetFilePath)}`);
        console.log(`   📐 Dimensions: ${result.dimensions}`);
        console.log(
          `   💾 Size: ${(result.sourceSize / 1024).toFixed(2)} KB → ${(result.targetSize / 1024).toFixed(2)} KB`
        );
        console.log(`   💰 Savings: ${result.savings}%`);
        console.log('');
      } else {
        failCount++;
        console.error(`   ❌ Error: ${result.error}`);
        console.log('');
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary:');
    console.log(`   ✅ Successfully optimized: ${successCount} image(s)`);
    if (failCount > 0) {
      console.log(`   ❌ Failed: ${failCount} image(s)`);
    }
    if (successCount > 0) {
      const totalSavings = ((1 - totalTargetSize / totalSourceSize) * 100).toFixed(1);
      const totalReduction = (totalSourceSize - totalTargetSize) / 1024;
      console.log(
        `   💾 Total size: ${(totalSourceSize / 1024).toFixed(2)} KB → ${(totalTargetSize / 1024).toFixed(2)} KB`
      );
      console.log(`   💰 Total savings: ${totalSavings}% (${totalReduction.toFixed(2)} KB)`);
    }
    console.log('='.repeat(60) + '\n');
  } catch (error) {
    console.error(`❌ Error optimizing images:`, error.message);
    process.exit(1);
  }
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('❌ Error: Missing required arguments');
  console.error('Usage: npm run optimize-images-folder <folder> [targetFolder]');
  console.error('Example: npm run optimize-images-folder public/images');
  console.error('Example: npm run optimize-images-folder public/images public/images-optimized');
  process.exit(1);
}

const sourceFolder = args[0];
const targetFolder = args[1] || null;

// Run optimization
optimizeImagesInFolder(sourceFolder, targetFolder);
