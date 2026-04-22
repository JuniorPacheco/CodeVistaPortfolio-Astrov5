import { ui, defaultLang, languages, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang | string | undefined) {
  const safeLang: Lang = lang && lang in ui ? (lang as Lang) : defaultLang;
  return ui[safeLang];
}

export function getLocalizedPath(lang: Lang, hash = ""): string {
  const base = lang === defaultLang ? "/" : `/${lang}/`;
  return hash ? `${base}#${hash}` : base;
}
