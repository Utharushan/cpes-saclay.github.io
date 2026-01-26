import { translations, defaultLang } from './translations';

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.fr;

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key];
}


export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}