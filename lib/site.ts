import type { Locale } from "@/lib/i18n"

export const siteConfig = {
  name: "Savlo",
  shortName: "Savlo",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.savloapp.com",
  description:
    "Savlo is a calm personal budgeting app for anxious minds. Track spending by voice, organize money into Spaces and Sinking Funds, and build steady habits without guilt.",
  longDescription:
    "Savlo is a behavioral-finance-informed budgeting app designed for peace of mind. The public site presents voice check-ins, spreadsheet imports, separate money Spaces, Sinking Funds, and exportable data in a quieter, lower-pressure interface.",
  locale: "en_US",
  category: "personal finance",
  ogImage: "/app_screen_today.png",
  supportEmail: "support@savloapp.com",
  lastUpdated: "2026-06-02",
  author: {
    name: "The Savlo Team",
    url: "/author/savlo-team",
    description:
      "Behavioral-finance notes and calm budgeting guidance from the team building Savlo.",
  },
  keywords: [
    "budgeting app",
    "personal finance app",
    "voice expense tracking",
    "voice expense tracker",
    "behavioral finance app",
    "sinking funds app",
    "budgeting for anxious minds",
    "financial anxiety app",
    "calm budgeting",
    "expense tracker",
    "mint alternative",
    "YNAB alternative",
  ],
} as const

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
                  ? "Ich moechte fruehzeitigen Zugang zu Savlo."
                  : `Ich moechte fruehzeitigen Zugang zu Savlo fuer ${platform}.`,
              subject:
                platform === "Both"
                  ? "Fruehzugang zu Savlo"
                  : `Fruehzugang zu Savlo - ${platform}`,
              emailLabel: "Meine E-Mail:",
              sourceLabel: "Quelle:",
              thanks: "Danke!",
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
