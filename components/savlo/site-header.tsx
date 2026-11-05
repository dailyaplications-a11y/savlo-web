"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { GetAppDialog, GetAppLink, getAppCopy } from "./get-app"
import { LanguageMenu } from "./language-menu"
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

/** The narrow menu's line under each link, in the order of `nav`. */
const navSub: Record<Locale, [string, string, string, string]> = {
  en: ["The app, screen by screen", "How we look after your data", "Ideas for your money", "Answers to your questions"],
  es: ["La app, pantalla por pantalla", "Cómo cuidamos tus datos", "Ideas para tu dinero", "Respuestas a tus dudas"],
  pt: ["O app, tela por tela", "Como cuidamos dos seus dados", "Ideias para o seu dinheiro", "Respostas para suas dúvidas"],
  de: ["Die App, Bildschirm für Bildschirm", "Wie wir deine Daten schützen", "Ideen für dein Geld", "Antworten auf deine Fragen"],
  fr: ["L'app, écran par écran", "Comment on protège tes données", "Des idées pour ton argent", "Les réponses à tes questions"],
}

const menuLabel: Record<Locale, { title: string; open: string; close: string; language: string }> = {
  en: { title: "Menu", open: "Open menu", close: "Close menu", language: "Language" },
  es: { title: "Menú", open: "Abrir menú", close: "Cerrar menú", language: "Idioma" },
  pt: { title: "Menu", open: "Abrir menu", close: "Fechar menu", language: "Idioma" },
  de: { title: "Menü", open: "Menü öffnen", close: "Menü schließen", language: "Sprache" },
  fr: { title: "Menu", open: "Ouvrir le menu", close: "Fermer le menu", language: "Langue" },
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
    // On the home page the bar floats exactly when the story leaves its hero:
    // it follows the story's own flag (data-intro), so the pill never sits
    // over the hero's headline. Anywhere else, at the first pixel of scroll.
    // The story is the storyboard or, under 960 px, the still emulators; the
    // server sends both and hydration keeps one, so the flag is followed on
    // whichever is mounted, and again when that changes.
    const root = isHome ? document.getElementById("story-root") : null
    if (root) {
      const flag = new MutationObserver(() => read())
      const read = () => {
        const heroes = Array.from(root.querySelectorAll<HTMLElement>("[data-hero]"))
        const wide = window.matchMedia("(min-width: 960px)").matches
        const hero = heroes.find((el) => (el.dataset.hero === "board") === wide) ?? heroes[0]
        flag.disconnect()
        if (hero) flag.observe(hero, { attributes: true, attributeFilter: ["data-intro"] })
        setCondensed(hero?.dataset.intro === "false")
      }
      read()
      const mounts = new MutationObserver(read)
      mounts.observe(root, { childList: true })
      return () => {
        flag.disconnect()
        mounts.disconnect()
      }
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
  // Focus goes into the card as it opens (to its cross) and back to the
  // burger as it closes, if it was inside.
  const sheetRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)
  useEffect(() => {
    if (menuOpen) {
      closeRef.current?.focus({ preventScroll: true })
    } else if (wasOpen.current && sheetRef.current?.contains(document.activeElement)) {
      burgerRef.current?.focus({ preventScroll: true })
    }
    wasOpen.current = menuOpen
  }, [menuOpen])

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
              ref={burgerRef}
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

      {/*
        The menu of a narrow window: the condensed pill unfolds into a card
        (its first row is the pill's), the way in and the language share a
        line, then the links, each with a line of why.
      */}
      <button
        type="button"
        className={styles.scrim}
        data-open={menuOpen}
        tabIndex={-1}
        aria-hidden
        onClick={() => setMenuOpen(false)}
      />
      <div
        id="site-menu"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={m.title}
        className={styles.sheet}
        data-open={menuOpen}
        inert={!menuOpen}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setMenuOpen(false)
        }}
      >
        <div className={styles.sheetTop}>
          <Link href={homePath} aria-label={homeLabel[locale]} className={styles.brand}>
            <SavloMark size={24} />
            <span className={styles.wordmark}>savlo</span>
          </Link>
          <button
            ref={closeRef}
            type="button"
            className={styles.sheetClose}
            aria-label={m.close}
            onClick={() => setMenuOpen(false)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
            </svg>
          </button>
        </div>

        <div className={cn(styles.sheetActions, styles.sheetItem)} style={{ "--i": 0 } as CSSProperties}>
          <GetAppLink className={styles.cta}>{getAppCopy[locale].cta}</GetAppLink>
          <LanguageMenu locale={locale} />
        </div>

        <nav aria-label="Main">
          <ul className={styles.sheetLinks}>
            {nav[locale].map((item, i) => (
              <li key={item.href} className={styles.sheetItem} style={{ "--i": i + 1 } as CSSProperties}>
                <Link href={resolveHref(item.href)} className={styles.sheetLink}>
                  <span className={styles.tile}>
                    <NavGlyph index={i} />
                  </span>
                  <span className={styles.sheetText}>
                    <span className={styles.sheetLabel}>{item.label}</span>
                    <span className={styles.sheetSub}>{navSub[locale][i]}</span>
                  </span>
                  <svg className={styles.chevron} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m9.5 6 6 6-6 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <GetAppDialog locale={locale} />
    </>
  )
}

/** The narrow menu's glyphs, in the order of `nav`: product, privacy, blog, help. */
function NavGlyph({ index }: { index: number }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {index === 0 ? (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </>
      ) : index === 1 ? (
        <>
          <path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ) : index === 2 ? (
        <>
          <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z" />
          <path d="M12 6.5v13" />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.6-2.4 2.2-2.4 3.6M12 17h.01" />
        </>
      )}
    </svg>
  )
}
