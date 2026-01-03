import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const configPath = join(
  process.cwd(),
  '.vercel',
  'output',
  'functions',
  '_render.func',
  '.vc-config.json'
);

try {
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));

  // Set runtime to nodejs20.x to match package.json engines.node = "20.x"
  // Vercel requires the runtime field to be present and match the format
  config.runtime = 'nodejs20.x';
  writeFileSync(configPath, JSON.stringify(config, null, '\t'));
  console.log('✓ Set Vercel runtime to nodejs20.x');
} catch (error) {
  // Silently fail if file doesn't exist (e.g., during dev)
  if (error.code !== 'ENOENT') {
    console.error('Error fixing Vercel runtime:', error);
  }
}
