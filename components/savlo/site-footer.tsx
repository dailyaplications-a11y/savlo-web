import Link from "next/link"
import { buildMailto, buildWaitlistMailto, siteConfig } from "@/lib/site"

type Locale = "en" | "es"

const COLUMNS: Record<
  Locale,
  { heading: string; links: { label: string; href: string }[] }[]
> = {
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
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const homePath = locale === "es" ? "/es" : "/"
  const copy =
    locale === "es"
      ? "Finanzas conductuales para personas que quieren una práctica de presupuesto más tranquila."
      : "Behavioral finance wellness for people who want a calmer budgeting practice."
  const directBlogLabel = locale === "es" ? "Leer el blog" : "Read the blog"
  const privacyLabel = locale === "es" ? "Privacidad" : "Privacy"
  const noAdsLabel =
    locale === "es" ? "Sin anuncios. Sin venta de datos." : "No ads. No data selling."

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
              "Lo que se siente, no se ve."
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
            })}
            className="btn-calm inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 text-left"
          >
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {locale === "es" ? "Pedir acceso anticipado" : "Request early access"}
              </span>
              <span className="text-sm text-foreground">iOS waitlist</span>
            </span>
          </a>
          <a
            href={buildWaitlistMailto({
              platform: "Android",
              source: "footer-android",
            })}
            className="btn-calm inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 text-left"
          >
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {locale === "es" ? "Pedir acceso anticipado" : "Request early access"}
              </span>
              <span className="text-sm text-foreground">
                Android waitlist
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
              href={locale === "es" ? "/es/blog" : "/blog"}
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
            <p>Copyright {new Date().getFullYear()} Savlo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
