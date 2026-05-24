"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"


const nav = [
  { label: "Home", href: "#hero" },
  { label: "Product", href: "#product" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Security", href: "#trust" },
  { label: "Blog", href: "/blog" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Resolve the correct href: hash-only links get "/" prepended when not on homepage
  function resolveHref(href: string) {
    if (href.startsWith("#") && !isHome) return `/${href}`
    return href
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
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-serif text-lg tracking-tight">Savlo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
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
