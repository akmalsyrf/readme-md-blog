import type { APIRoute } from 'astro';
import { spawn } from 'node:child_process';
import path from 'node:path';

export const prerender = false;

const MAX_MARKDOWN_LENGTH = 500_000;

/** Path to Pandoc binary from @daucus/pandoc (downloaded at install). */
function getPandocBin(): string {
  const root = path.join(process.cwd(), 'node_modules', '@daucus', 'pandoc', '_pandoc_', 'bin');
  return path.join(root, process.platform === 'win32' ? 'pandoc.exe' : 'pandoc');
}

function looksLikeLatex(s: string): boolean {
  const t = s.trim();
  if (t.length === 0) return false;
  if (/\\/.test(t)) return true;
  if (/[=^_]/.test(t) && /[a-zA-Z]/.test(t)) return true;
  return false;
}

/** Convert [ ... ] bracket-display math to $$...$$ for Pandoc. */
function normalizeBracketMath(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed === '[') {
      const mathLines: string[] = [];
      let j = i + 1;
      while (j < lines.length && lines[j].trim() !== ']') {
        mathLines.push(lines[j]);
        j++;
      }
      const content = mathLines.join('\n').trim();
      const hasClose = j < lines.length;
      if (hasClose && content.length > 0 && looksLikeLatex(content)) {
        out.push('');
        out.push('$$' + content + '$$');
        out.push('');
        i = j + 1;
        continue;
      }
    }
    if (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 2) {
      const inner = trimmed.slice(1, -1).trim();
      if (looksLikeLatex(inner)) {
        out.push('$$' + inner + '$$');
        i++;
        continue;
      }
    }
    out.push(line);
    i++;
  }
  return out.join('\n');
}

/** Run Pandoc: markdown stdin → docx stdout (binary). */
function runPandocToDocx(markdown: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const bin = getPandocBin();
    const proc = spawn(
      bin,
      ['--from=markdown+tex_math_dollars+tex_math_single_backslash', '--to=docx', '-o', '-'],
      {
        stdio: ['pipe', 'pipe', 'pipe'],
      }
    );

    const chunks: Buffer[] = [];
    proc.stdout.on('data', (chunk: Buffer) => chunks.push(chunk));
    proc.stdout.on('end', () => resolve(Buffer.concat(chunks)));

    let stderr = '';
    proc.stderr.setEncoding('utf8');
    proc.stderr.on('data', (d: string) => (stderr += d));

    proc.on('error', (err) => reject(err));
    proc.on('close', (code) => {
      if (code !== 0) reject(new Error(`Pandoc exited ${code}: ${stderr}`));
    });

    proc.stdin.write(markdown, 'utf8');
    proc.stdin.end();
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const markdown = typeof body.markdown === 'string' ? body.markdown : '';

    if (!markdown.trim()) {
      return new Response(
        JSON.stringify({ error: 'markdown is required and must be a non-empty string' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (markdown.length > MAX_MARKDOWN_LENGTH) {
      return new Response(
        JSON.stringify({ error: `markdown must be at most ${MAX_MARKDOWN_LENGTH} characters` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const normalizedMd = normalizeBracketMath(markdown);
    const buffer = await runPandocToDocx(normalizedMd);

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="document.docx"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('md-to-docx error:', err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : 'Conversion failed',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
