"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import { supportedLocales, type Locale } from "@/lib/i18n"
import { GetAppDialog, GetAppLink, getAppCopy } from "./get-app"
import { LanguageMenu } from "./language-menu"
import { MenuGlyph, menuGlyphOrder } from "./menu-glyphs"
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

/** The menu's line under each link, in the order of `nav` (one to one, never "we"). */
const navSub: Record<Locale, [string, string, string, string]> = {
  en: ["The app, screen by screen", "How your data is kept safe", "Ideas for your money", "Answers to your questions"],
  es: ["La app, pantalla por pantalla", "Cómo se cuidan tus datos", "Ideas para tu dinero", "Respuestas a tus dudas"],
  pt: ["O app, tela por tela", "Como seus dados são protegidos", "Ideias para o seu dinheiro", "Respostas para suas dúvidas"],
  de: ["Die App, Bildschirm für Bildschirm", "Wie deine Daten geschützt sind", "Ideen für dein Geld", "Antworten auf deine Fragen"],
  fr: ["L’app, écran par écran", "Comment tes données sont protégées", "Des idées pour ton argent", "Les réponses à tes questions"],
}

const menuLabel: Record<Locale, { title: string; open: string; close: string }> = {
  en: { title: "Menu", open: "Open menu", close: "Close menu" },
  es: { title: "Menú", open: "Abrir menú", close: "Cerrar menú" },
  pt: { title: "Menu", open: "Abrir menu", close: "Fechar menu" },
  de: { title: "Menü", open: "Menü öffnen", close: "Menü schließen" },
  fr: { title: "Menu", open: "Ouvrir le menu", close: "Fermer le menu" },
}

/** <html lang> per language, as app/layout.tsx sets it at the first load. */
const HTML_LANG: Record<Locale, string> = { en: "en", es: "es", pt: "pt-BR", de: "de-DE", fr: "fr-FR" }

/** How long a page change holds the bar before reading where the visitor is (see SiteHeader). */
const SETTLE_MS = 160

/** The page's language, from its path: /es/…, /pt/…, /de/…, /fr/…; anything else is English. */
function localeOfPath(pathname: string): Locale {
  const first = pathname.split("/")[1]
  return supportedLocales.includes(first as Locale) && first !== "en" ? (first as Locale) : "en"
}

/**
 * The header (owner, 2026-11-05, after Polarsteps). At the top it is bare and
 * as wide as the content: the mark, the language, the menu. Once the visitor
 * moves on it closes, in one movement, into a 600 px pill of dark glass and
 * makes room for "Get the app". The links live in the menu, a narrow card of
 * the same glass hanging from the pill's right edge, on every width.
 * On the home page the pill forms when the storyboard leaves its hero.
 *
 * ONE header for the whole site, in the root layout (app/layout.tsx), never
 * in a page: it outlives every navigation, so going from a page where it
 * floated to one where it is bare is the same movement as scrolling back up,
 * picked up from wherever it is (owner, 2026-11-05: "debe funcionar en
 * todas"). Mounted per page, a new page's header was born in its own state
 * and the pill vanished in one frame. The language comes from the path.
 */
export function SiteHeader() {
  const pathname = usePathname() ?? "/"
  const locale = localeOfPath(pathname)
  const homePath = locale === "en" ? "/" : `/${locale}`
  const isHome = pathname === homePath
  const [condensed, setCondensed] = useState(false)
  const lastPath = useRef<string | null>(null)

  // The page's language for readers and translators, kept right through
  // client-side navigation (app/layout.tsx sets it once, at the first load:
  // switching to German left it "es").
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale]
  }, [locale])
  const menuOpenRef = useRef(false)

  useEffect(() => {
    // A page change holds the bar as it stands until the navigation settles:
    // the jump to an anchor (Help → Product is /es#product), a restored
    // scroll, the storyboard's first sync of its flag. Read at once, the bar
    // saw the new page still at its top for a frame and began to open, then
    // closed again (owner, 2026-11-05: "hace como un amague"). After the hold
    // it reads once and, if it must change, changes once.
    const arrived = lastPath.current !== null && lastPath.current !== pathname
    lastPath.current = pathname
    const holdUntil = arrived ? performance.now() + SETTLE_MS : 0
    // left through the menu, the bar was a pill because the menu was open:
    // it stays one through the hold, not opening as the menu closes
    if (arrived && menuOpenRef.current) setCondensed(true)
    let waiting = 0
    const gate = (read: () => void) => () => {
      const left = holdUntil - performance.now()
      if (left <= 0) return read()
      if (!waiting) {
        waiting = window.setTimeout(() => {
          waiting = 0
          read()
        }, left)
      }
    }

    // On the home page the bar floats exactly when the story leaves its hero:
    // it follows the story's own flag (data-intro), so the pill never sits
    // over the hero's headline. Anywhere else, at the first pixel of scroll.
    // The story is the storyboard or, under 960 px, the still emulators; the
    // server sends both and hydration keeps one, so the flag is followed on
    // whichever is mounted, and again when that changes.
    const root = isHome ? document.getElementById("story-root") : null
    if (root) {
      const flag = new MutationObserver(() => read())
      const read = gate(() => {
        const heroes = Array.from(root.querySelectorAll<HTMLElement>("[data-hero]"))
        const wide = window.matchMedia("(min-width: 960px)").matches
        const hero = heroes.find((el) => (el.dataset.hero === "board") === wide) ?? heroes[0]
        flag.disconnect()
        if (hero) flag.observe(hero, { attributes: true, attributeFilter: ["data-intro"] })
        setCondensed(hero?.dataset.intro === "false")
      })
      read()
      const mounts = new MutationObserver(read)
      mounts.observe(root, { childList: true })
      return () => {
        clearTimeout(waiting)
        flag.disconnect()
        mounts.disconnect()
      }
    }

    const threshold = isHome ? 380 : 12
    let frame = 0
    const read = gate(() => {
      frame = 0
      setCondensed(window.scrollY > threshold)
    })
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(waiting)
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    // read again on every page: the header stays, the page under it changes
  }, [isHome, pathname])

  // The open bar's width, measured: the bar closes from this real width to
  // 600 px, so the movement starts at once on any window (a max-width cap
  // above the window's width sat still until it came down to it).
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const measure = () => {
      const style = getComputedStyle(bar)
      const inner = bar.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      bar.style.setProperty("--bar-open", `${Math.min(1180, Math.round(inner))}px`)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(bar)
    return () => ro.disconnect()
  }, [])

  // The menu: closes on a new page, on Escape, on a pick and on a press
  // anywhere outside the bar and its card.
  const [menuOpen, setMenuOpen] = useState(false)
  // (read by the page-change hold above, which runs before the menu closes)
  useEffect(() => {
    menuOpenRef.current = menuOpen
  }, [menuOpen])
  const frameRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false)
        burgerRef.current?.focus({ preventScroll: true })
      }
    }
    const onDown = (e: PointerEvent) => {
      if (!frameRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onDown)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onDown)
    }
  }, [menuOpen])

  const resolveHref = (href: string) => (href.startsWith("#") && !isHome ? `${homePath}${href}` : href)
  const pill = condensed || menuOpen
  const showCta = condensed || !isHome || menuOpen
  const m = menuLabel[locale]

  // the sign-in callback is a bare redirect page: it never had a header
  if (pathname.startsWith("/auth")) return null

  return (
    <>
      <div ref={barRef} className={styles.bar} data-condensed={pill} data-menu={menuOpen}>
        <div ref={frameRef} className={styles.frame}>
          <header className={styles.shell}>
            <Link href={homePath} aria-label={homeLabel[locale]} className={styles.brand}>
              <SavloMark tight size={28} />
              <span className={styles.wordmark} translate="no">
                Savlo
              </span>
            </Link>

            <div className={styles.actions}>
              <LanguageMenu locale={locale} className={styles.lang} />
              <div className={styles.ctaWrap} data-show={showCta} aria-hidden={!showCta}>
                <GetAppLink className={styles.cta} tabIndex={showCta ? 0 : -1}>
                  {getAppCopy[locale].cta}
                </GetAppLink>
              </div>
              <button
                ref={burgerRef}
                type="button"
                className={styles.burger}
                aria-label={menuOpen ? m.close : m.open}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                onClick={() => setMenuOpen((o) => !o)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden>
                  <path className={styles.lineTop} d="M4 6.5h16" />
                  <path className={styles.lineMid} d="M4 12h16" />
                  <path className={styles.lineBottom} d="M4 17.5h16" />
                </svg>
              </button>
            </div>
          </header>

          {/*
            The menu: a narrow card of the bar's glass hanging from its right
            edge, the way in to each part, each with its icon, which makes its
            own small gesture as it arrives. The language stays in the bar;
            only a phone, whose bar has no room for it, shows it here on top.
          */}
          <div
            id="site-menu"
            role="dialog"
            aria-label={m.title}
            className={styles.menu}
            data-open={menuOpen}
            inert={!menuOpen}
            onClick={(e) => {
              // a link to another page leaves the menu (and so the pill) as it
              // is until that page is here, then the page change closes it:
              // closed at the click, the bar began to open while the page
              // loaded and had to close again on arrival. A link within this
              // page (an anchor) closes it at once.
              const link = (e.target as HTMLElement).closest("a")
              if (link && new URL(link.href).pathname === window.location.pathname) setMenuOpen(false)
            }}
          >
            <div className={styles.menuLang} style={{ "--i": 0 } as CSSProperties}>
              <LanguageMenu locale={locale} />
            </div>
            <nav aria-label="Main">
              <ul className={styles.menuList}>
                {nav[locale].map((item, i) => (
                  <li key={item.href} className={styles.menuItem} style={{ "--i": i + 1 } as CSSProperties}>
                    <Link href={resolveHref(item.href)} className={styles.menuLink}>
                      <span className={styles.glyph} data-glyph={menuGlyphOrder[i]}>
                        <MenuGlyph name={menuGlyphOrder[i]} size={26} />
                      </span>
                      <span className={styles.menuText}>
                        <span className={styles.menuLabel}>{item.label}</span>
                        <span className={styles.menuSub}>{navSub[locale][i]}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <GetAppDialog locale={locale} />
    </>
  )
}
