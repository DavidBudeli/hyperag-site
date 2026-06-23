export const locales = ["pt-BR", "en-US"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeLabels: Record<Locale, string> = {
  "pt-BR": "PT",
  "en-US": "EN",
};

export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português",
  "en-US": "English",
};

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : defaultLocale;
}

export function localizePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");

  if (isLocale(segments[1])) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}
