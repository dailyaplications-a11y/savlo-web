"use client"

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { buildWaitlistMailto, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import { SavloMark } from "./savlo-mark"
import { PhoneFrame } from "./story/phone-frame"
import { AppScreen } from "./story/screens/app-screens"
import styles from "./get-app.module.css"

/*
 * "Get the app", everywhere on the site. On Android the link simply goes to
 * Google Play. Anywhere else it opens one dialog: a QR to scan on a computer,
 * the iOS waitlist on an iPhone (the App Store version isn't out yet).
 */

export const getAppCopy: Record<
  Locale,
  {
    cta: string
    play: string
    iosSoon: string
    eyebrow: string
    t1: string
    t2: string
    scan: string
    available: string
    iosLater: string
    waitlist: string
    notify: string
    close: string
  }
> = {
  en: {
    cta: "Get the app",
    play: "Google Play",
    iosSoon: "App Store · soon",
    eyebrow: "Get Savlo",
    t1: "Take it",
    t2: "with you.",
    scan: "Scan with your phone's camera",
    available: "Available on Google Play",
    iosLater: "App Store coming soon",
    waitlist: "Join the iOS waitlist",
    notify: "Notify me",
    close: "Close",
  },
  es: {
    cta: "Descarga la app",
    play: "Google Play",
    iosSoon: "App Store · pronto",
    eyebrow: "Descarga Savlo",
    t1: "Llévala",
    t2: "contigo.",
    scan: "Escanéalo con la cámara de tu teléfono",
    available: "Disponible en Google Play",
    iosLater: "App Store muy pronto",
    waitlist: "Unirme a la lista de espera de iOS",
    notify: "Avísame",
    close: "Cerrar",
  },
  pt: {
    cta: "Baixe o app",
    play: "Google Play",
    iosSoon: "App Store · em breve",
    eyebrow: "Baixe o Savlo",
    t1: "Leve com",
    t2: "você.",
    scan: "Escaneie com a câmera do seu celular",
    available: "Disponível no Google Play",
    iosLater: "App Store em breve",
    waitlist: "Entrar na lista de espera do iOS",
    notify: "Me avise",
    close: "Fechar",
  },
  de: {
    cta: "App laden",
    play: "Google Play",
    iosSoon: "App Store · bald",
    eyebrow: "Hol dir Savlo",
    t1: "Nimm es",
    t2: "mit.",
    scan: "Scanne mit der Kamera deines Handys",
    available: "Bei Google Play erhältlich",
    iosLater: "App Store kommt bald",
    waitlist: "Auf die iOS-Warteliste",
    notify: "Benachrichtige mich",
    close: "Schließen",
  },
  fr: {
    cta: "Obtenir l'app",
    play: "Google Play",
    iosSoon: "App Store · bientôt",
    eyebrow: "Obtenir Savlo",
    t1: "Emporte-la",
    t2: "avec toi.",
    scan: "Scanne avec l'appareil photo de ton téléphone",
    available: "Disponible sur Google Play",
    iosLater: "App Store bientôt",
    waitlist: "Rejoindre la liste d'attente iOS",
    notify: "Préviens-moi",
    close: "Fermer",
  },
}

const OPEN_EVENT = "savlo:get-app"

const isAndroid = () => typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent)
const isIOS = () =>
  typeof navigator !== "undefined" &&
  (/iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1))

/** Any "Get the app" link. Renders a real link to Google Play, so it works without JS. */
export function GetAppLink({
  className,
  children,
  tabIndex,
  ariaHidden,
}: {
  className?: string
  children: ReactNode
  tabIndex?: number
  ariaHidden?: boolean
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isAndroid() || e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: e.currentTarget }))
  }
  return (
    <a
      href={siteConfig.playStoreUrl}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
    >
      {children}
    </a>
  )
}

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.2 2.6c-.2.2-.3.6-.3 1v16.8c0 .4.1.8.3 1l9.4-9.4L4.2 2.6Z" />
      <path d="m16.7 15.1-3.1-3.1 3.1-3.1 3.6 2c1 .6 1 1.6 0 2.2l-3.6 2Z" opacity=".6" />
      <path d="M16.7 15.1 13.6 12l-9.4 9.4c.4.4 1 .4 1.6.1l10.9-6.4Z" opacity=".8" />
      <path d="M16.7 8.9 5.8 2.5c-.6-.3-1.2-.3-1.6.1l9.4 9.4 3.1-3.1Z" opacity=".9" />
    </svg>
  )
}

export function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.57 12.88c-.03-2.86 2.34-4.24 2.45-4.3-1.34-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.35 1.04-.91 0-2.28-1.02-3.76-.99-1.94.03-3.73 1.13-4.73 2.86-2.02 3.5-.51 8.68 1.44 11.52.96 1.39 2.1 2.94 3.58 2.88 1.44-.06 1.99-.93 3.73-.93s2.23.93 3.76.9c1.55-.03 2.54-1.41 3.49-2.8 1.1-1.6 1.55-3.15 1.57-3.23-.03-.01-3.02-1.16-3.05-4.61zM14.69 4.54c.79-.97 1.33-2.31 1.18-3.65-1.14.05-2.54.76-3.36 1.71-.73.84-1.38 2.21-1.21 3.52 1.28.1 2.58-.65 3.39-1.58z" />
    </svg>
  )
}

/** "Google Play · App Store soon", under every big "Get the app". */
export function StoreLine({ locale, className }: { locale: Locale; className?: string }) {
  const c = getAppCopy[locale]
  return (
    <p className={cn(styles.storeLine, className)}>
      <span className={styles.storeLive}>
        <PlayGlyph />
        {c.play}
      </span>
      <span aria-hidden className={styles.storeDot} />
      <span>
        <AppleGlyph />
        {c.iosSoon}
      </span>
    </p>
  )
}

/** Mounted once, by the header. */
export function GetAppDialog({ locale }: { locale: Locale }) {
  const c = getAppCopy[locale]
  const [open, setOpen] = useState(false)
  const [ios, setIos] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    opener.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    const onOpen = (e: Event) => {
      opener.current = ((e as CustomEvent).detail as HTMLElement) ?? null
      setIos(isIOS())
      setOpen(true)
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const root = rootRef.current
    const focusTimer = window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60)

    // Keep the page still behind the dialog without touching its layout
    // (hiding the scrollbar would shift the whole site sideways).
    const stop = (e: Event) => e.preventDefault()
    root?.addEventListener("wheel", stop, { passive: false })
    root?.addEventListener("touchmove", stop, { passive: false })

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key === "Tab" && root) {
        const items = Array.from(root.querySelectorAll<HTMLElement>("a[href], button:not([tabindex='-1'])"))
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(e.key)) {
        const t = e.target as HTMLElement
        if (t.tagName !== "BUTTON" && t.tagName !== "A") e.preventDefault()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      window.clearTimeout(focusTimer)
      root?.removeEventListener("wheel", stop)
      root?.removeEventListener("touchmove", stop)
      document.removeEventListener("keydown", onKey)
    }
  }, [open, close])

  return (
    <div
      ref={rootRef}
      className={styles.root}
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-app-title"
      aria-hidden={!open}
      inert={!open}
    >
      <button type="button" className={styles.backdrop} aria-label={c.close} tabIndex={-1} onClick={close} />
      <div className={styles.card}>
        <div aria-hidden className={styles.glow} />
        <div aria-hidden className={cn(styles.arc, styles.arcNear)} />
        <div aria-hidden className={cn(styles.arc, styles.arcFar)} />

        <div aria-hidden className={styles.device}>
          <div className={styles.deviceScale}>
            <PhoneFrame>
              <AppScreen id="today" state="on" locale={locale} label="" />
            </PhoneFrame>
          </div>
        </div>

        <button ref={closeRef} type="button" className={styles.close} aria-label={c.close} onClick={close}>
          <span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </span>
        </button>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h2 id="get-app-title" className={styles.title}>
            {c.t1} <em>{c.t2}</em>
          </h2>

          {ios ? (
            <a
              className={styles.waitlist}
              href={buildWaitlistMailto({ platform: "iOS", source: "get-app-dialog", locale })}
            >
              <AppleGlyph />
              {c.waitlist}
              <ArrowRight size={15} />
            </a>
          ) : (
            <div className={styles.scanRow}>
              <div className={styles.qr}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/story/qr-google-play.svg" alt={`QR · ${c.available}`} width={148} height={148} />
                <span className={styles.qrMark}>
                  <SavloMark size={24} />
                </span>
              </div>
              <div className={styles.scanHint}>
                <svg className={styles.scanArrow} width="44" height="30" viewBox="0 0 44 30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M40 4C30 4 18 8 8 22" pathLength={1} />
                  <path d="M6 13l2 9 9-2" pathLength={1} />
                </svg>
                <span className={styles.scanText}>{c.scan}</span>
              </div>
            </div>
          )}

          <div className={styles.stores}>
            <a href={siteConfig.playStoreUrl} target="_blank" rel="noopener" className={styles.storeLink}>
              <PlayGlyph className={styles.playIcon} />
              {c.available}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
            <span className={styles.storeSoon}>
              <AppleGlyph />
              {c.iosLater}
              {ios ? null : (
                <>
                  <span aria-hidden>·</span>
                  <a
                    className={styles.notify}
                    href={buildWaitlistMailto({ platform: "iOS", source: "get-app-dialog", locale })}
                  >
                    {c.notify}
                  </a>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
