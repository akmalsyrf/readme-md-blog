declare module 'latex-to-omml' {
  export function latexToOMML(latex: string, options?: { displayMode?: boolean }): Promise<string>;
}
