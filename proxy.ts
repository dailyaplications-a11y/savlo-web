import { NextResponse, type NextRequest } from "next/server"

/*
 * The site speaks five languages; a visitor whose browser speaks one of them
 * reads that one, never the English page run through a machine translator
 * (owner, 2026-11-05: Chrome turned "USD" into "Dólar estadounidense", "Save"
 * into "Ahorrar" and "Due" into a due date for a baby inside the phones).
 *
 * The English pages that have a twin in every language send a visitor to
 * theirs: first the language they picked on the site (the `savlo-locale`
 * cookie, written by the language menu), else the first of their browser's
 * languages that the site speaks. Catalan, Galician and Basque read Spanish,
 * as in the app. Nothing else is redirected; a crawler (no Accept-Language)
 * keeps the English page.
 */

const SPOKEN = ["en", "es", "pt", "de", "fr"] as const
type Spoken = (typeof SPOKEN)[number]
const ALSO_SPANISH = new Set(["ca", "gl", "eu"])
export const LOCALE_COOKIE = "savlo-locale"

function spoken(tag: string): Spoken | null {
  const primary = tag.trim().toLowerCase().split("-")[0]
  if ((SPOKEN as readonly string[]).includes(primary)) return primary as Spoken
  return ALSO_SPANISH.has(primary) ? "es" : null
}

/** The first language of an Accept-Language header the site speaks, by weight. */
function fromAcceptLanguage(header: string | null): Spoken | null {
  if (!header) return null
  const ranked = header
    .split(",")
    .map((part, i) => {
      const [tag, ...params] = part.split(";")
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="))
      return { tag, q: q ? Number(q.slice(2)) || 0 : 1, i }
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
  for (const { tag } of ranked) {
    const hit = spoken(tag)
    if (hit) return hit
  }
  return null
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const chosen = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = chosen ? spoken(chosen) : fromAcceptLanguage(request.headers.get("accept-language"))
  if (!locale || locale === "en") return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
  const response = NextResponse.redirect(url, 307)
  // the answer depends on these, so no cache may hand one visitor's to another
  response.headers.set("Vary", "Accept-Language, Cookie")
  return response
}

// English paths with a twin under /es, /pt, /de and /fr (a literal: Next
// reads it at build time)
export const config = {
  matcher: [
    "/",
    "/privacy",
    "/terms",
    "/help",
    "/delete-account",
    "/licenses",
    "/attributions",
    "/arrepentimiento",
    "/blog",
    "/blog/:slug",
    "/author/savlo-team",
  ],
}
