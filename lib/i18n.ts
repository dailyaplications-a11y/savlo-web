import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site"

export const defaultLocale = "en"
export const supportedLocales = ["en", "es"] as const

export type Locale = (typeof supportedLocales)[number]

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
}

export function localizedPath(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`

  if (locale === defaultLocale) {
    return normalized
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`
}

export function englishPathFromLocalized(path: string) {
  if (path === "/es") return "/"
  if (path.startsWith("/es/")) return path.replace(/^\/es/, "") || "/"
  return path
}

export function languageAlternates(englishPath: string) {
  const normalizedEnglishPath = englishPathFromLocalized(englishPath)

  return {
    en: absoluteUrl(localizedPath(normalizedEnglishPath, "en")),
    es: absoluteUrl(localizedPath(normalizedEnglishPath, "es")),
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
