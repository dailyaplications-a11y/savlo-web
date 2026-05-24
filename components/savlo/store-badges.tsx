"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Cal AI-style store badges — dark pills with monochrome product marks.
 * Kept calm, no color glitter: they match Savlo's restrained palette.
 */

type Size = "sm" | "md"

export function AppStoreBadge({
  className,
  size = "md",
}: {
  className?: string
  size?: Size
}) {
  const pad = size === "sm" ? "px-3 py-1.5" : "px-4 py-2.5"
  const iconSize = size === "sm" ? 18 : 22
  const topText = size === "sm" ? "text-[8px]" : "text-[9px]"
  const bigText = size === "sm" ? "text-[13px]" : "text-[15px]"
  return (
    <Link
      href="#"
      aria-label="Download on the App Store"
      className={cn(
        "btn-calm inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black text-white",
        pad,
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width={iconSize}
        height={iconSize}
        fill="currentColor"
        aria-hidden
      >
        <path d="M17.57 12.88c-.03-2.86 2.34-4.24 2.45-4.3-1.34-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.35 1.04-.91 0-2.28-1.02-3.76-.99-1.94.03-3.73 1.13-4.73 2.86-2.02 3.5-.51 8.68 1.44 11.52.96 1.39 2.1 2.94 3.58 2.88 1.44-.06 1.99-.93 3.73-.93s2.23.93 3.76.9c1.55-.03 2.54-1.41 3.49-2.8 1.1-1.6 1.55-3.15 1.57-3.23-.03-.01-3.02-1.16-3.05-4.61zM14.69 4.54c.79-.97 1.33-2.31 1.18-3.65-1.14.05-2.54.76-3.36 1.71-.73.84-1.38 2.21-1.21 3.52 1.28.1 2.58-.65 3.39-1.58z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-sans tracking-wide text-white/75", topText)}>
          Download on the
        </span>
        <span className={cn("font-sans font-semibold tracking-tight", bigText)}>
          App Store
        </span>
      </span>
    </Link>
  )
}

export function GooglePlayBadge({
  className,
  size = "md",
}: {
  className?: string
  size?: Size
}) {
  const pad = size === "sm" ? "px-3 py-1.5" : "px-4 py-2.5"
  const iconSize = size === "sm" ? 18 : 22
  const topText = size === "sm" ? "text-[8px]" : "text-[9px]"
  const bigText = size === "sm" ? "text-[13px]" : "text-[15px]"
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className={cn(
        "btn-calm inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black text-white",
        pad,
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width={iconSize}
        height={iconSize}
        fill="currentColor"
        aria-hidden
      >
        {/* Official Google Play triangle (monochrome) */}
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-sans tracking-wide text-white/75", topText)}>
          Get it on
        </span>
        <span className={cn("font-sans font-semibold tracking-tight", bigText)}>
          Google Play
        </span>
      </span>
    </Link>
  )
}
