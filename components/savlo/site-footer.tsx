import Link from "next/link"
import { buildMailto, buildWaitlistMailto, siteConfig } from "@/lib/site"
import type { Locale } from "@/lib/i18n"

type Column = {
  heading: string
  links: { label: string; href: string }[]
}

const COLUMNS: Record<Locale, Column[]> = {
  en: [
    {
      heading: "Product",
      links: [
        { label: "Daily check-in", href: "/#features" },
        { label: "Voice logging", href: "/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/blog/sinking-funds" },
        { label: "Spaces and funds", href: "/#product" },
        { label: "Export your data", href: "/#features" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "How to make a budget", href: "/blog/how-to-make-a-budget" },
        { label: "50/30/20 rule", href: "/blog/50-30-20-rule" },
        { label: "Zero-based budgeting", href: "/blog/zero-based-budgeting" },
        {
          label: "Mint alternatives",
          href: "/blog/best-mint-alternatives-2025",
        },
      ],
    },
    {
      heading: "Mindset",
      links: [
        {
          label: "Behavioral finance",
          href: "/blog/why-traditional-budgets-fail",
        },
        { label: "Financial anxiety", href: "/blog/financial-anxiety" },
        { label: "Money dysmorphia", href: "/blog/money-dysmorphia" },
        { label: "Philosophy", href: "/#philosophy" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Guides", href: "/#guides" },
        { label: "Early access", href: "/#cta" },
        {
          label: "Contact",
          href: buildMailto({ subject: "Savlo contact" }),
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/#trust" },
        {
          label: "Responsible disclosure",
          href: buildMailto({ subject: "Savlo security disclosure" }),
        },
      ],
    },
  ],
  es: [
    {
      heading: "Producto",
      links: [
        { label: "Chequeo diario", href: "/es#features" },
        { label: "Registro por voz", href: "/es/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/es/blog/sinking-funds" },
        { label: "Espacios y fondos", href: "/es#product" },
        { label: "Exportar tus datos", href: "/es#features" },
      ],
    },
    {
      heading: "Aprender",
      links: [
        { label: "Blog", href: "/es/blog" },
        { label: "Cómo hacer un presupuesto", href: "/es/blog/how-to-make-a-budget" },
        { label: "Regla 50/30/20", href: "/es/blog/50-30-20-rule" },
        { label: "Presupuesto base cero", href: "/es/blog/zero-based-budgeting" },
        {
          label: "Alternativas a Mint",
          href: "/es/blog/best-mint-alternatives-2025",
        },
      ],
    },
    {
      heading: "Mentalidad",
      links: [
        {
          label: "Finanzas conductuales",
          href: "/es/blog/why-traditional-budgets-fail",
        },
        { label: "Ansiedad financiera", href: "/es/blog/financial-anxiety" },
        { label: "Money dysmorphia", href: "/es/blog/money-dysmorphia" },
        { label: "Filosofía", href: "/es#philosophy" },
      ],
    },
    {
      heading: "Compañía",
      links: [
        { label: "Inicio", href: "/es" },
        { label: "Guías", href: "/es#guides" },
        { label: "Acceso anticipado", href: "/es#cta" },
        {
          label: "Contacto",
          href: buildMailto({ subject: "Savlo contact" }),
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacidad", href: "/privacy" },
        { label: "Términos", href: "/terms" },
        { label: "Confianza", href: "/es#trust" },
        {
          label: "Reporte responsable",
          href: buildMailto({ subject: "Savlo security disclosure" }),
        },
      ],
    },
  ],
  pt: [
    {
      heading: "Produto",
      links: [
        { label: "Check-in diário", href: "/pt#features" },
        { label: "Registro por voz", href: "/pt/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/pt/blog/sinking-funds" },
        { label: "Espaços e fundos", href: "/pt#product" },
        { label: "Exportar seus dados", href: "/pt#features" },
      ],
    },
    {
      heading: "Aprender",
      links: [
        { label: "Blog", href: "/pt/blog" },
        { label: "Como fazer um orçamento", href: "/pt/blog/how-to-make-a-budget" },
        { label: "Regra 50/30/20", href: "/pt/blog/50-30-20-rule" },
        { label: "Orçamento base zero", href: "/pt/blog/zero-based-budgeting" },
        {
          label: "Alternativas ao Mint",
          href: "/pt/blog/best-mint-alternatives-2025",
        },
      ],
    },
    {
      heading: "Mentalidade",
      links: [
        {
          label: "Finanças comportamentais",
          href: "/pt/blog/why-traditional-budgets-fail",
        },
        { label: "Ansiedade financeira", href: "/pt/blog/financial-anxiety" },
        { label: "Money dysmorphia", href: "/pt/blog/money-dysmorphia" },
        { label: "Filosofia", href: "/pt#philosophy" },
      ],
    },
    {
      heading: "Empresa",
      links: [
        { label: "Início", href: "/pt" },
        { label: "Guias", href: "/pt#guides" },
        { label: "Acesso antecipado", href: "/pt#cta" },
        {
          label: "Contato",
          href: buildMailto({ subject: "Savlo contact" }),
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacidade", href: "/privacy" },
        { label: "Termos", href: "/terms" },
        { label: "Confiança", href: "/pt#trust" },
        {
          label: "Divulgação responsável",
          href: buildMailto({ subject: "Savlo security disclosure" }),
        },
      ],
    },
  ],
  de: [
    {
      heading: "Produkt",
      links: [
        { label: "Täglicher Check-in", href: "/de#features" },
        { label: "Sprachprotokoll", href: "/de/blog/voice-expense-tracking" },
        { label: "Sinking Funds", href: "/de/blog/sinking-funds" },
        { label: "Spaces und Funds", href: "/de#product" },
        { label: "Daten exportieren", href: "/de#features" },
      ],
    },
    {
      heading: "Lernen",
      links: [
        { label: "Blog", href: "/de/blog" },
        { label: "Wie man ein Budget erstellt", href: "/de/blog/how-to-make-a-budget" },
        { label: "50/30/20-Regel", href: "/de/blog/50-30-20-rule" },
        { label: "Nullbasiertes Budgetieren", href: "/de/blog/zero-based-budgeting" },
        {
          label: "Mint-Alternativen",
          href: "/de/blog/best-mint-alternatives-2025",
        },
      ],
    },
    {
      heading: "Denkweise",
      links: [
        {
          label: "Verhaltensfinanzen",
          href: "/de/blog/why-traditional-budgets-fail",
        },
        { label: "Finanzielle Angst", href: "/de/blog/financial-anxiety" },
        { label: "Money Dysmorphia", href: "/de/blog/money-dysmorphia" },
        { label: "Philosophie", href: "/de#philosophy" },
      ],
    },
    {
      heading: "Unternehmen",
      links: [
        { label: "Start", href: "/de" },
        { label: "Leitfäden", href: "/de#guides" },
        { label: "Frühzugang", href: "/de#cta" },
        {
          label: "Kontakt",
          href: buildMailto({ subject: "Savlo Kontakt" }),
        },
      ],
    },
    {
      heading: "Rechtliches",
      links: [
        { label: "Datenschutz", href: "/privacy" },
        { label: "Nutzungsbedingungen", href: "/terms" },
        { label: "Vertrauen", href: "/de#trust" },
        {
          label: "Verantwortungsvolle Offenlegung",
          href: buildMailto({ subject: "Savlo Sicherheitsmeldung" }),
        },
      ],
    },
  ],
  fr: [
    {
      heading: "Produit",
      links: [
        { label: "Check-in quotidien", href: "/fr#features" },
        { label: "Journal vocal", href: "/fr/blog/voice-expense-tracking" },
        { label: "Fonds dédiés", href: "/fr/blog/sinking-funds" },
        { label: "Espaces et fonds", href: "/fr#product" },
        { label: "Exporter vos données", href: "/fr#features" },
      ],
    },
    {
      heading: "Apprendre",
      links: [
        { label: "Blog", href: "/fr/blog" },
        { label: "Comment faire un budget", href: "/fr/blog/how-to-make-a-budget" },
        { label: "Règle 50/30/20", href: "/fr/blog/50-30-20-rule" },
        { label: "Budget base zéro", href: "/fr/blog/zero-based-budgeting" },
        {
          label: "Alternatives à Mint",
          href: "/fr/blog/best-mint-alternatives-2025",
        },
      ],
    },
    {
      heading: "Mentalité",
      links: [
        {
          label: "Finance comportementale",
          href: "/fr/blog/why-traditional-budgets-fail",
        },
        { label: "Anxiété financière", href: "/fr/blog/financial-anxiety" },
        { label: "Money dysmorphia", href: "/fr/blog/money-dysmorphia" },
        { label: "Philosophie", href: "/fr#philosophy" },
      ],
    },
    {
      heading: "Entreprise",
      links: [
        { label: "Accueil", href: "/fr" },
        { label: "Guides", href: "/fr#guides" },
        { label: "Accès anticipé", href: "/fr#cta" },
        {
          label: "Contact",
          href: buildMailto({ subject: "Contact Savlo" }),
        },
      ],
    },
    {
      heading: "Légal",
      links: [
        { label: "Confidentialité", href: "/privacy" },
        { label: "Conditions", href: "/terms" },
        { label: "Confiance", href: "/fr#trust" },
        {
          label: "Signalement responsable",
          href: buildMailto({ subject: "Signalement de sécurité Savlo" }),
        },
      ],
    },
  ],
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const homePath = locale === "en" ? "/" : `/${locale}`
  const copy =
    locale === "es"
      ? "Finanzas conductuales para personas que quieren una práctica de presupuesto más tranquila."
      : locale === "pt"
        ? "Finanças comportamentais para pessoas que querem uma prática de orçamento mais tranquila."
        : locale === "de"
          ? "Verhaltensfinanzen für Menschen, die sich eine ruhigere Budgetpraxis wünschen."
          : locale === "fr"
            ? "Des finances comportementales pour les personnes qui veulent une pratique du budget plus calme."
            : "Behavioral finance wellness for people who want a calmer budgeting practice."
  const quote =
    locale === "es"
      ? "Lo que se siente, no se ve."
      : locale === "pt"
        ? "O que se sente, não se vê."
        : locale === "de"
          ? "Was du fühlst, ist nicht immer sichtbar."
          : locale === "fr"
            ? "Ce que l'on ressent n'est pas toujours visible."
            : "What you feel is not always visible."
  const directBlogLabel =
    locale === "es"
      ? "Leer el blog"
      : locale === "pt"
        ? "Ler o blog"
        : locale === "de"
          ? "Blog lesen"
          : locale === "fr"
            ? "Lire le blog"
            : "Read the blog"
  const privacyLabel =
    locale === "es"
      ? "Privacidad"
      : locale === "pt"
        ? "Privacidade"
        : locale === "de"
          ? "Datenschutz"
          : locale === "fr"
            ? "Confidentialité"
            : "Privacy"
  const noAdsLabel =
    locale === "es"
      ? "Sin anuncios. Sin venta de datos."
      : locale === "pt"
        ? "Sem anúncios. Sem venda de dados."
        : locale === "de"
          ? "Keine Anzeigen. Kein Datenverkauf."
          : locale === "fr"
            ? "Sans publicité. Sans vente de données."
            : "No ads. No data selling."

  return (
    <footer className="relative border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:pt-24">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href={homePath} className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/savlo-logo.svg" alt="Savlo" className="h-8 w-8" />
              <span className="font-serif text-lg tracking-tight">Savlo</span>
            </Link>
            <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-muted-foreground">
              {copy}
            </p>
            <p className="mt-3 max-w-[220px] font-serif text-[13px] italic leading-relaxed text-muted-foreground/80">
              "{quote}"
            </p>
          </div>

          {COLUMNS[locale].map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-medium text-foreground">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-end">
          <a
            href={buildWaitlistMailto({
              platform: "iOS",
              source: "footer-ios",
              locale,
            })}
            className="btn-calm inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 text-left"
          >
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {locale === "es"
                  ? "Pedir acceso anticipado"
                  : locale === "pt"
                    ? "Pedir acesso antecipado"
                    : locale === "de"
                      ? "Frühzugang anfragen"
                      : locale === "fr"
                        ? "Demander un accès anticipé"
                        : "Request early access"}
              </span>
              <span className="text-sm text-foreground">
                {locale === "es"
                  ? "Lista de iOS"
                  : locale === "pt"
                    ? "Lista de iOS"
                    : locale === "de"
                      ? "iOS-Warteliste"
                      : locale === "fr"
                        ? "Liste d'attente iOS"
                        : "iOS waitlist"}
              </span>
            </span>
          </a>
          <a
            href={buildWaitlistMailto({
              platform: "Android",
              source: "footer-android",
              locale,
            })}
            className="btn-calm inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 text-left"
          >
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {locale === "es"
                  ? "Pedir acceso anticipado"
                  : locale === "pt"
                    ? "Pedir acesso antecipado"
                    : locale === "de"
                      ? "Frühzugang anfragen"
                      : locale === "fr"
                        ? "Demander un accès anticipé"
                        : "Request early access"}
              </span>
              <span className="text-sm text-foreground">
                {locale === "es"
                  ? "Lista de Android"
                  : locale === "pt"
                    ? "Lista de Android"
                    : locale === "de"
                      ? "Android-Warteliste"
                      : locale === "fr"
                        ? "Liste d'attente Android"
                        : "Android waitlist"}
              </span>
            </span>
          </a>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-muted-foreground">
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.supportEmail}
            </a>
            <Link
              href={locale === "en" ? "/blog" : `/${locale}/blog`}
              className="transition-colors hover:text-foreground"
            >
              {directBlogLabel}
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              {privacyLabel}
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {noAdsLabel}
            </p>
            <p>
              Copyright {new Date().getFullYear()} Savlo.{" "}
              {locale === "en"
                ? "All rights reserved."
                : locale === "es"
                  ? "Todos los derechos reservados."
                  : locale === "pt"
                    ? "Todos os direitos reservados."
                    : locale === "fr"
                      ? "Tous droits réservés."
                      : "Alle Rechte vorbehalten."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
