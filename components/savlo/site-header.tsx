"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, type CSSProperties } from "react"
import { localeLabels, supportedLocales, switchLocalizedPath, type Locale } from "@/lib/i18n"
import { GetAppDialog, GetAppLink, StoreLine, getAppCopy } from "./get-app"
import { LanguageFlag, LanguageMenu } from "./language-menu"
import { SavloMark } from "./savlo-mark"
import styles from "./site-header.module.css"

const nav: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Product", href: "#product" },
    { label: "Privacy", href: "/privacy" },
    { label: "Blog", href: "/blog" },
    { label: "Help", href: "/help" },
  ],
  es: [
    { label: "Producto", href: "#product" },
    { label: "Privacidad", href: "/es/privacy" },
    { label: "Blog", href: "/es/blog" },
    { label: "Ayuda", href: "/es/help" },
  ],
  pt: [
    { label: "Produto", href: "#product" },
    { label: "Privacidade", href: "/pt/privacy" },
    { label: "Blog", href: "/pt/blog" },
    { label: "Ajuda", href: "/pt/help" },
  ],
  de: [
    { label: "Produkt", href: "#product" },
    { label: "Datenschutz", href: "/de/privacy" },
    { label: "Blog", href: "/de/blog" },
    { label: "Hilfe", href: "/de/help" },
  ],
  fr: [
    { label: "Produit", href: "#product" },
    { label: "Confidentialité", href: "/fr/privacy" },
    { label: "Blog", href: "/fr/blog" },
    { label: "Aide", href: "/fr/help" },
  ],
}

const homeLabel: Record<Locale, string> = {
  en: "Savlo home",
  es: "Inicio de Savlo",
  pt: "Início do Savlo",
  de: "Savlo Startseite",
  fr: "Accueil Savlo",
}

const menuLabel: Record<Locale, { open: string; close: string; language: string }> = {
  en: { open: "Open menu", close: "Close menu", language: "Language" },
  es: { open: "Abrir menú", close: "Cerrar menú", language: "Idioma" },
  pt: { open: "Abrir menu", close: "Fechar menu", language: "Idioma" },
  de: { open: "Menü öffnen", close: "Menü schließen", language: "Sprache" },
  fr: { open: "Ouvrir le menu", close: "Fermer le menu", language: "Langue" },
}

/**
 * Open and wide at the top; once the visitor moves on it condenses into a
 * glass pill and makes room for "Get the app". On the home page that happens
 * when the storyboard leaves its hero (and the hero's own button goes).
 */
export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const pathname = usePathname()
  const homePath = locale === "en" ? "/" : `/${locale}`
  const isHome = pathname === homePath
  const [condensed, setCondensed] = useState(false)

  useEffect(() => {
    // On the home page the bar floats exactly when the storyboard leaves its
    // hero: it follows the story's own flag, so the pill never sits over the
    // hero's headline. Anywhere else, at the first pixel of scroll.
    const story = isHome ? document.getElementById("hero") : null
    if (story) {
      const read = () => setCondensed(story.dataset.intro === "false")
      read()
      const observer = new MutationObserver(read)
      observer.observe(story, { attributes: true, attributeFilter: ["data-intro"] })
      return () => observer.disconnect()
    }

    const threshold = isHome ? 380 : 12
    let frame = 0
    const read = () => {
      frame = 0
      setCondensed(window.scrollY > threshold)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [isHome])

  // The menu of a narrow window: closes on a new page, on Escape, on a pick,
  // and holds the page still behind it while open.
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false)
    }
    const html = document.documentElement
    const was = html.style.overflow
    html.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      html.style.overflow = was
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [menuOpen])

  const resolveHref = (href: string) => (href.startsWith("#") && !isHome ? `${homePath}${href}` : href)
  const showCta = condensed || !isHome || menuOpen
  const m = menuLabel[locale]

  return (
    <>
      <div className={styles.bar} data-condensed={condensed || menuOpen} data-menu={menuOpen}>
        <header className={styles.shell}>
          <Link href={homePath} aria-label={homeLabel[locale]} className={styles.brand}>
            <SavloMark size={24} />
            <span className={styles.wordmark}>savlo</span>
          </Link>

          <nav aria-label="Main" className={styles.links}>
            {nav[locale].map((item) => (
              <Link key={item.href} href={resolveHref(item.href)} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <LanguageMenu locale={locale} className={styles.lang} />
            <div className={styles.ctaWrap} data-show={showCta && !menuOpen} aria-hidden={!showCta || menuOpen}>
              <span aria-hidden className={styles.divider} />
              <GetAppLink className={styles.cta} tabIndex={showCta && !menuOpen ? 0 : -1}>
                {getAppCopy[locale].cta}
              </GetAppLink>
            </div>
            <button
              type="button"
              className={styles.menuButton}
              aria-label={menuOpen ? m.close : m.open}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <path className={styles.menuTop} d="M4 9h16" />
                <path className={styles.menuBottom} d="M4 15h16" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* the menu of a narrow window: the links, the language, the way in */}
      <div
        id="site-menu"
        className={styles.sheet}
        data-open={menuOpen}
        inert={!menuOpen}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setMenuOpen(false)
        }}
      >
        <nav aria-label="Main" className={styles.sheetLinks}>
          {nav[locale].map((item, i) => (
            <Link key={item.href} href={resolveHref(item.href)} className={styles.sheetLink} style={{ "--i": i } as CSSProperties}>
              {item.label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m9 6 6 6-6 6" />
              </svg>
            </Link>
          ))}
        </nav>
        <div className={styles.sheetLang}>
          <p className={styles.sheetHeading}>{m.language}</p>
          <div className={styles.chips}>
            {supportedLocales.map((candidate) => (
              <Link
                key={candidate}
                href={switchLocalizedPath(pathname ?? "/", candidate)}
                hrefLang={candidate}
                lang={candidate}
                aria-label={localeLabels[candidate]}
                aria-current={candidate === locale ? "true" : undefined}
                className={styles.chip}
              >
                <LanguageFlag locale={candidate} />
                {candidate.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.sheetFoot}>
          <GetAppLink className={styles.sheetCta} tabIndex={menuOpen ? 0 : -1}>
            {getAppCopy[locale].cta}
          </GetAppLink>
          <StoreLine locale={locale} className={styles.sheetStores} />
        </div>
      </div>
      <GetAppDialog locale={locale} />
    </>
  )
}
