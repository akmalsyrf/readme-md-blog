/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GEMINI_API_KEY: string;
  // Giscus configuration (public - exposed to client)
  readonly PUBLIC_GISCUS_REPO: string;
  readonly PUBLIC_GISCUS_REPO_ID: string;
  readonly PUBLIC_GISCUS_CATEGORY: string;
  readonly PUBLIC_GISCUS_CATEGORY_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}