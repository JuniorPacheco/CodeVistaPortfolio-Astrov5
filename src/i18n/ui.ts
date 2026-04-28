import es from '../locales/es.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es,
  en,
  fr,
} as const;

export type UIStrings = (typeof ui)[Lang];
