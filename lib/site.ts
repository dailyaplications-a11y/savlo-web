import type { Locale } from "@/lib/i18n"

export const siteConfig = {
  name: "Savlo",
  shortName: "Savlo",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.savloapp.com",
  description:
    "Savlo is a personal finance app for active daily control and management in minutes. Track spending by voice or text, organize money into independent accounts, and optimize your budget effortlessly.",
  longDescription:
    "Savlo is a personal finance app designed for daily control in minutes. The app features multi-modal AI logging, independent accounts, sinking funds, category budgeting, and quick-access widgets for instant overview without complex spreadsheets.",
  locale: "en_US",
  category: "personal finance",
  // Composed from the storyboard's own phones (2026-11-09): the share card
  // and the image Google may show beside the result. The old one was a raw,
  // tall 2023 capture of the app, cropped to a slice by every preview.
  // 2026-11-18: the card of shareImages("en"), see below.
  ogImage: "/og/og-en-v3.jpg",
  supportEmail: "support@savloapp.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.savlo.app",
  lastUpdated: "2026-06-02",
  author: {
    name: "The Savlo Team",
    url: "/author/savlo-team",
    description:
      "Budgeting, saving and personal finance guides from the team building Savlo.",
  },
  keywords: [
    "budgeting app",
    "personal finance app",
    "voice expense tracking",
    "voice expense tracker",
    "behavioral finance app",
    "sinking funds app",
    "expense tracker",
    "mint alternative",
    "YNAB alternative",
  ],
} as const

/**
 * The share images of each language, from Figma page 03 ("v2 / Social" and
 * "v2 / Square"): logo and headline on the left, the real Today screen on the
 * right, the voice transcript and the saved toast over it. The phone speaks
 * the page's language and shows the site's own amounts ($6,829), not a
 * fortune (owner, 2026-11-18).
 *
 * - og:image names ONLY the card: Discord drew the two side by side, each one
 *   cropped. The square lives in the schema, where Google picks a result's
 *   thumbnail from.
 * - Exported at 2x (2400 px) as JPEG q92 without chroma subsampling, so lines
 *   and small type stay sharp on dense screens; the card stays under the
 *   ~300 KB WhatsApp handles.
 * - A new design gets a NEW file name (-v3): WhatsApp, Facebook and LinkedIn
 *   cache a preview by its URL.
 */
const SHARE_VERSION = "-v3"

export function shareImages(locale: Locale) {
  return {
    card: {
      url: absoluteUrl(`/og/og-${locale}${SHARE_VERSION}.jpg`),
      width: 2400,
      height: 1260,
    },
    square: {
      url: absoluteUrl(`/og/og-${locale}-square${SHARE_VERSION}.jpg`),
      width: 2400,
      height: 2400,
    },
  }
}

/**
 * Pages that must be reachable but are not what anyone searches for: the
 * open-source attributions, the account deletion page Google Play asks for
 * and the Argentine withdrawal button. Search showed them for "savloapp"
 * next to the home (2026-11-09). `noindex` in the HTML, never a robots.txt
 * Disallow: a blocked URL can't show its `noindex` and may stay indexed.
 * `follow` stays on, so the links in their footers still count.
 */
export const notInSearch = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
} as const

/** The blog's byline in each language (the author page, the posts, their schema). */
const AUTHOR_NAME: Record<Locale, string> = {
  en: siteConfig.author.name,
  es: "El equipo de Savlo",
  pt: "Equipe Savlo",
  de: "Das Savlo-Team",
  fr: "L’équipe Savlo",
}

export function authorName(locale: Locale) {
  return AUTHOR_NAME[locale]
}

export function absoluteUrl(path: string = "/") {
  return new URL(path, siteConfig.url).toString()
}

type MailtoOptions = {
  subject: string
  bodyLines?: string[]
}

export function buildMailto({ subject, bodyLines = [] }: MailtoOptions) {
  const params = new URLSearchParams({ subject })

  if (bodyLines.length > 0) {
    params.set("body", bodyLines.join("\n"))
  }

  return `mailto:${siteConfig.supportEmail}?${params.toString()}`
}

type WaitlistOptions = {
  email?: string
  platform?: "iOS" | "Android" | "Both"
  source?: string
  locale?: Locale
}

export function buildWaitlistMailto({
  email,
  platform = "Both",
  source,
  locale = "en",
}: WaitlistOptions = {}) {
  const copy =
    locale === "es"
      ? {
          greeting: "Hola equipo de Savlo,",
          platformLine:
            platform === "Both"
              ? "Me gustaría tener acceso anticipado a Savlo."
              : `Me gustaría tener acceso anticipado a Savlo para ${platform}.`,
          subject:
            platform === "Both"
              ? "Acceso anticipado a Savlo"
              : `Acceso anticipado a Savlo - ${platform}`,
          emailLabel: "Mi correo:",
          sourceLabel: "Fuente:",
          thanks: "Gracias!",
        }
      : locale === "pt"
        ? {
            greeting: "Olá equipe Savlo,",
            platformLine:
              platform === "Both"
                ? "Gostaria de ter acesso antecipado ao Savlo."
                : `Gostaria de ter acesso antecipado ao Savlo para ${platform}.`,
            subject:
              platform === "Both"
                ? "Acesso antecipado ao Savlo"
                : `Acesso antecipado ao Savlo - ${platform}`,
            emailLabel: "Meu e-mail:",
            sourceLabel: "Origem:",
            thanks: "Obrigado!",
          }
      : locale === "de"
          ? {
              greeting: "Hallo Savlo-Team,",
              platformLine:
                platform === "Both"
                  ? "Ich möchte frühzeitigen Zugang zu Savlo."
                  : `Ich möchte frühzeitigen Zugang zu Savlo für ${platform}.`,
              subject:
                platform === "Both"
                  ? "Frühzugang zu Savlo"
                  : `Frühzugang zu Savlo - ${platform}`,
              emailLabel: "Meine E-Mail:",
              sourceLabel: "Quelle:",
              thanks: "Danke!",
            }
      : locale === "fr"
          ? {
              greeting: "Bonjour l'équipe Savlo,",
              platformLine:
                platform === "Both"
                  ? "J'aimerais avoir un accès anticipé à Savlo."
                  : `J'aimerais avoir un accès anticipé à Savlo pour ${platform}.`,
              subject:
                platform === "Both"
                  ? "Accès anticipé à Savlo"
                  : `Accès anticipé à Savlo - ${platform}`,
              emailLabel: "Mon e-mail :",
              sourceLabel: "Source :",
              thanks: "Merci !",
            }
        : {
            greeting: "Hi Savlo team,",
            platformLine:
              platform === "Both"
                ? "I'd like early access to Savlo."
                : `I'd like early access to Savlo on ${platform}.`,
            subject:
              platform === "Both"
                ? "Savlo early access"
                : `Savlo early access - ${platform}`,
            emailLabel: "My email:",
            sourceLabel: "Source:",
            thanks: "Thanks!",
          }

  return buildMailto({
    subject: copy.subject,
    bodyLines: [
      copy.greeting,
      "",
      copy.platformLine,
      email ? `${copy.emailLabel} ${email}` : "",
      source ? `${copy.sourceLabel} ${source}` : "",
      "",
      copy.thanks,
    ].filter(Boolean),
  })
}
