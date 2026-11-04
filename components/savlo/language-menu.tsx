"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react"
import { localeLabels, supportedLocales, switchLocalizedPath, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import styles from "./language-menu.module.css"

const ariaLabel: Record<Locale, string> = {
  en: "Change language",
  es: "Cambiar idioma",
  pt: "Mudar idioma",
  de: "Sprache ändern",
  fr: "Changer de langue",
}

const heading: Record<Locale, string> = {
  en: "Language",
  es: "Idioma",
  pt: "Idioma",
  de: "Sprache",
  fr: "Langue",
}

/**
 * The language picker in the header, minimal: a quiet control (globe, the
 * code, a small mint caret) whose card unrolls out of it, exactly as wide.
 * The options are the OTHER languages, flag and code; the chosen one is the
 * control. Nothing in it is ever painted gray, not under the pointer and not
 * under a press: an option lights from soft gray to cream.
 */
export function LanguageMenu({ locale, className }: { locale: Locale; className?: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? "/"
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener("pointerdown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const options = () => Array.from(rootRef.current?.querySelectorAll<HTMLAnchorElement>("[data-option]") ?? [])

  const onButtonKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
      setOpen(true)
      requestAnimationFrame(() => options()[0]?.focus())
    }
  }

  const onListKey = (e: KeyboardEvent<HTMLElement>) => {
    const list = options()
    const i = list.indexOf(document.activeElement as HTMLAnchorElement)
    if (e.key === "ArrowDown") {
      e.preventDefault()
      list[(i + 1) % list.length]?.focus()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      list[(i - 1 + list.length) % list.length]?.focus()
    } else if (e.key === "Tab") {
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} className={cn(styles.root, className)} data-open={open}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.button}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${ariaLabel[locale]} · ${localeLabels[locale]}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onButtonKey}
      >
        <LanguageFlag locale={locale} />
        <span className={styles.code}>{locale.toUpperCase()}</span>
        <svg className={styles.caret} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div id={listId} className={styles.card} onKeyDown={onListKey} inert={!open}>
        <ul className={styles.list} aria-label={heading[locale]}>
          {/* the language already chosen is the control itself, not an option again */}
          {supportedLocales
            .filter((candidate) => candidate !== locale)
            .map((candidate, i) => (
              <li key={candidate} style={{ "--i": i } as CSSProperties}>
                <Link
                  data-option
                  href={switchLocalizedPath(pathname, candidate)}
                  hrefLang={candidate}
                  lang={candidate}
                  className={styles.option}
                  aria-label={localeLabels[candidate]}
                  title={localeLabels[candidate]}
                  onClick={() => setOpen(false)}
                >
                  <LanguageFlag locale={candidate} />
                  <span className={styles.code}>{candidate.toUpperCase()}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

/*
 * The language's flag, round, drawn here (emoji flags show as two letters on
 * Windows). One flag per language: English the US (Savlo speaks in dollars),
 * Spanish Spain, Portuguese Brazil, German Germany, French France.
 */
export function LanguageFlag({ locale, size = 16 }: { locale: Locale; size?: number }) {
  return (
    <span className={styles.flag} style={{ width: size, height: size }} aria-hidden>
      <svg width={size} height={size} viewBox="0 0 24 24">
        {locale === "en" ? (
          <>
            <rect width="24" height="24" fill="#fff" />
            {[0, 2, 4, 6, 8, 10, 12].map((k) => (
              <rect key={k} y={k * (24 / 13)} width="24" height={24 / 13} fill="#B22234" />
            ))}
            <rect width="11" height={(24 / 13) * 7} fill="#3C3B6E" />
            {[
              [2.5, 2.5],
              [6, 2.5],
              [8.6, 4.6],
              [4.2, 4.6],
              [2.5, 6.7],
              [6, 6.7],
              [8.6, 8.8],
              [4.2, 8.8],
              [2.5, 10.9],
              [6, 10.9],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.7" fill="#fff" />
            ))}
          </>
        ) : locale === "es" ? (
          <>
            <rect width="24" height="24" fill="#AA151B" />
            <rect y="6" width="24" height="12" fill="#F1BF00" />
          </>
        ) : locale === "pt" ? (
          <>
            <rect width="24" height="24" fill="#009C3B" />
            <path d="M12 3.5 22 12 12 20.5 2 12Z" fill="#FFDF00" />
            <circle cx="12" cy="12" r="4.6" fill="#002776" />
            <path d="M7.6 11.2c2.9-.7 5.9-.3 8.7 1" stroke="#fff" strokeWidth="0.9" fill="none" />
          </>
        ) : locale === "de" ? (
          <>
            <rect width="24" height="8" fill="#000" />
            <rect y="8" width="24" height="8" fill="#DD0000" />
            <rect y="16" width="24" height="8" fill="#FFCE00" />
          </>
        ) : (
          <>
            <rect width="8" height="24" fill="#0055A4" />
            <rect x="8" width="8" height="24" fill="#fff" />
            <rect x="16" width="8" height="24" fill="#EF4135" />
          </>
        )}
      </svg>
    </span>
  )
}
