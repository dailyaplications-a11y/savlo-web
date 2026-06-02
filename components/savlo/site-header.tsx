"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"

type Locale = "en" | "es"

const nav: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Home", href: "#hero" },
    { label: "Product", href: "#product" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Security", href: "#trust" },
    { label: "Blog", href: "/blog" },
  ],
  es: [
    { label: "Inicio", href: "#hero" },
    { label: "Producto", href: "#product" },
    { label: "Filosofía", href: "#philosophy" },
    { label: "Confianza", href: "#trust" },
    { label: "Blog", href: "/es/blog" },
  ],
}

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const homePath = locale === "es" ? "/es" : "/"
  const isHome = pathname === homePath
  const alternateLocale = locale === "es" ? "en" : "es"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Resolve the correct href: hash-only links get "/" prepended when not on homepage
  function resolveHref(href: string) {
    if (href.startsWith("#") && !isHome) return `${homePath}${href}`
    return href
  }

  function languageHref() {
    if (alternateLocale === "en") {
      if (pathname === "/es") return "/"
      if (pathname.startsWith("/es/")) return pathname.replace(/^\/es/, "") || "/"
      return "/"
    }

    if (pathname === "/") return "/es"
    if (
      pathname.startsWith("/blog") ||
      pathname.startsWith("/author/savlo-team")
    ) {
      return `/es${pathname}`
    }

    return "/es"
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href={homePath} className="flex items-center gap-2">
          <Logo />
          <span className="font-serif text-lg tracking-tight">Savlo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav[locale].map((item) => (
            <Link
              key={item.href}
              href={resolveHref(item.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={languageHref()}
            hrefLang={alternateLocale}
            className="hidden rounded-full border border-border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:inline-flex"
            aria-label={locale === "es" ? "Cambiar idioma" : "Change language"}
          >
            {alternateLocale}
          </Link>
          <AppStoreBadge size="sm" className="hidden sm:inline-flex" />
          <GooglePlayBadge size="sm" />
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/savlo-logo.svg"
      alt="Savlo"
      aria-hidden
      className="h-8 w-8"
    />
  )
}
