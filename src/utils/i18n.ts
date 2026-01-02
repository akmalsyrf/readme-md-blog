import id from '../i18n/id';
import en from '../i18n/en';

export type Locale = 'id' | 'en';

export const locales: Locale[] = ['id', 'en'];
export const defaultLocale: Locale = 'id';

export const translations = {
  id,
  en,
} as const;

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'id';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix from the path
  let cleanPath = path;
  for (const loc of locales) {
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(`/${loc}`.length);
      break;
    } else if (cleanPath === `/${loc}`) {
      cleanPath = '/';
      break;
    }
  }

  // Add the new locale prefix if needed
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return `/${locale}${cleanPath}`;
}
