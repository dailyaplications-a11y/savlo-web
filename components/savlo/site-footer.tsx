import Link from "next/link"
import { buildMailto, siteConfig } from "@/lib/site"
import type { Locale } from "@/lib/i18n"
import { SavloMark } from "./savlo-mark"
import { ScreenWallCta } from "./screen-wall"
import { storyCopy } from "./story/story-copy"
import styles from "./site-footer.module.css"

type Column = {
  heading: string
  links: { label: string; href: string }[]
}

const COLUMNS: Record<Locale, Column[]> = {
  en: [
    {
      heading: "Product",
      links: [
        { label: "Easy logging", href: "/#features" },
        { label: "Voice logging", href: "/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/blog/sinking-funds" },
        { label: "Accounts and funds", href: "/#product" },
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
        { label: "Delete account", href: "/delete-account" },
        // Obligatorio por la Disposición 954/2025 (Argentina): el enlace tiene
        // que estar a simple vista y en el primer acceso, y con ese nombre.
        // Va en los cinco idiomas porque la obligación no depende del idioma
        // en que navegue el visitante.
        { label: "Botón de arrepentimiento", href: "/arrepentimiento" },
        { label: "Open source", href: "/attributions" },
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
        { label: "Registro fácil", href: "/es#features" },
        { label: "Registro por voz", href: "/es/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/es/blog/sinking-funds" },
        { label: "Cuentas y fondos", href: "/es#product" },
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
        { label: "Dismorfia monetaria", href: "/es/blog/money-dysmorphia" },
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
        { label: "Privacidad", href: "/es/privacy" },
        { label: "Términos", href: "/es/terms" },
        { label: "Eliminar cuenta", href: "/es/delete-account" },
        { label: "Botón de arrepentimiento", href: "/es/arrepentimiento" },
        { label: "Código abierto", href: "/es/attributions" },
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
        { label: "Registro fácil", href: "/pt#features" },
        { label: "Registro por voz", href: "/pt/blog/voice-expense-tracking" },
        { label: "Sinking funds", href: "/pt/blog/sinking-funds" },
        { label: "Contas e fundos", href: "/pt#product" },
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
        { label: "Dismorfia monetária", href: "/pt/blog/money-dysmorphia" },
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
        { label: "Privacidade", href: "/pt/privacy" },
        { label: "Termos", href: "/pt/terms" },
        { label: "Excluir conta", href: "/pt/delete-account" },
        { label: "Botón de arrepentimiento", href: "/pt/arrepentimiento" },
        { label: "Código aberto", href: "/pt/attributions" },
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
        { label: "Einfache Erfassung", href: "/de#features" },
        { label: "Sprachprotokoll", href: "/de/blog/voice-expense-tracking" },
        { label: "Sinking Funds", href: "/de/blog/sinking-funds" },
        { label: "Konten und Funds", href: "/de#product" },
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
        { label: "Datenschutz", href: "/de/privacy" },
        { label: "Nutzungsbedingungen", href: "/de/terms" },
        { label: "Konto löschen", href: "/de/delete-account" },
        { label: "Botón de arrepentimiento", href: "/de/arrepentimiento" },
        { label: "Open Source", href: "/de/attributions" },
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
        { label: "Enregistrement facile", href: "/fr#features" },
        { label: "Journal vocal", href: "/fr/blog/voice-expense-tracking" },
        { label: "Fonds dédiés", href: "/fr/blog/sinking-funds" },
        { label: "Comptes et fonds", href: "/fr#product" },
        { label: "Exporter tes données", href: "/fr#features" },
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
        { label: "Dysmorphie financière", href: "/fr/blog/money-dysmorphia" },
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
        { label: "Confidentialité", href: "/fr/privacy" },
        { label: "Conditions", href: "/fr/terms" },
        { label: "Supprimer le compte", href: "/fr/delete-account" },
        { label: "Botón de arrepentimiento", href: "/fr/arrepentimiento" },
        { label: "Open source", href: "/fr/attributions" },
        {
          label: "Signalement responsable",
          href: buildMailto({ subject: "Signalement de sécurité Savlo" }),
        },
      ],
    },
  ],
}

/**
 * Footer, on a darker ground than the page. With `cta` (home pages) it opens
 * with the final call to action over the wall of app screens, on that same ground.
 */
export function SiteFooter({ locale = "en", cta = false }: { locale?: Locale; cta?: boolean }) {
  const homePath = locale === "en" ? "/" : `/${locale}`
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
  const rights =
    locale === "en"
      ? "All rights reserved."
      : locale === "es"
        ? "Todos los derechos reservados."
        : locale === "pt"
          ? "Todos os direitos reservados."
          : locale === "fr"
            ? "Tous droits réservés."
            : "Alle Rechte vorbehalten."
  const tagline = `${storyCopy[locale].intro.t1} ${storyCopy[locale].intro.t2}`

  return (
    <div className={styles.ground} data-cta={cta}>
      {cta ? <ScreenWallCta locale={locale} /> : null}
      <footer className={styles.footer}>
        <div className={styles.cols}>
          <div className={styles.brandCol}>
            <Link href={homePath} aria-label="Savlo" className={styles.brand}>
              <SavloMark size={30} />
              <span className={styles.wordmark} translate="no">savlo</span>
            </Link>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          {COLUMNS[locale].map((column) => (
            <nav key={column.heading} aria-label={column.heading} className={styles.col}>
              <p className={styles.label}>{column.heading}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} Savlo. {rights}
            </span>
            <span aria-hidden>·</span>
            <Link href={locale === "en" ? "/blog" : `/${locale}/blog`} className={styles.bottomLink}>
              {directBlogLabel}
            </Link>
            <span aria-hidden>·</span>
            <Link href={locale === "en" ? "/privacy" : `/${locale}/privacy`} className={styles.bottomLink}>
              {privacyLabel}
            </Link>
          </div>
          <a href={`mailto:${siteConfig.supportEmail}`} className={styles.bottomLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {siteConfig.supportEmail}
          </a>
        </div>
      </footer>
    </div>
  )
}
