import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site"

export const defaultLocale = "en"
export const supportedLocales = ["en", "es", "pt", "de"] as const

export type Locale = (typeof supportedLocales)[number]

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
}

export function localizedPath(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`

  if (locale === defaultLocale) {
    return normalized
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`
}

export function englishPathFromLocalized(path: string) {
  if (path === "/es" || path === "/pt" || path === "/de") return "/"
  if (path.startsWith("/es/")) return path.replace(/^\/es/, "") || "/"
  if (path.startsWith("/pt/")) return path.replace(/^\/pt/, "") || "/"
  if (path.startsWith("/de/")) return path.replace(/^\/de/, "") || "/"
  return path
}

export function switchLocalizedPath(path: string, locale: Locale) {
  return localizedPath(englishPathFromLocalized(path), locale)
}

export function nextLocale(locale: Locale): Locale {
  if (locale === "en") return "es"
  if (locale === "es") return "pt"
  if (locale === "pt") return "en"
  return "en"
}

export function blogDateLocale(locale: Locale) {
  return locale === "en"
    ? "en-US"
    : locale === "es"
      ? "es-ES"
      : locale === "pt"
        ? "pt-BR"
        : "de-DE"
}

export function languageAlternates(englishPath: string) {
  const normalizedEnglishPath = englishPathFromLocalized(englishPath)

  return {
    en: absoluteUrl(localizedPath(normalizedEnglishPath, "en")),
    es: absoluteUrl(localizedPath(normalizedEnglishPath, "es")),
    "pt-BR": absoluteUrl(localizedPath(normalizedEnglishPath, "pt")),
    "de-DE": absoluteUrl(localizedPath(normalizedEnglishPath, "de")),
    "x-default": absoluteUrl(localizedPath(normalizedEnglishPath, "en")),
  }
}

export function metadataAlternates(
  canonicalPath: string,
): NonNullable<Metadata["alternates"]> {
  const englishPath = englishPathFromLocalized(canonicalPath)

  return {
    canonical: canonicalPath,
    languages: languageAlternates(englishPath),
  }
}
