"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, type ReactNode } from "react"
import styles from "./page-fade.module.css"

/*
 * The page under the header, changing softly (owner, 2026-11-05). With the
 * header in the root layout, a page change where the bar stays a pill (going
 * back to a page scrolled down, say) moved nothing but the content, and the
 * content swapped in one frame. Now the new page fades in under the still
 * bar. Opacity only: a transform here would break the storyboard's sticky
 * stage and every fixed layer inside the page. Not on the first load (the
 * pages have their own entrance), not with reduced motion.
 */
/** The page a path shows, whatever its language: /es/blog and /de/blog are one page. */
const pageOf = (pathname: string) => pathname.replace(/^\/(es|pt|de|fr)(?=\/|$)/, "") || "/"

export function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/"
  // keyed by the page, not the language: a language change is a cross-fade of
  // its own (language-menu.tsx), and fading in on top of it would blink
  const page = pageOf(pathname)
  const navigated = useRef(false)
  const first = useRef(page)
  useEffect(() => {
    if (page !== first.current) navigated.current = true
  }, [page])

  return (
    <div key={page} className={navigated.current || page !== first.current ? styles.fade : undefined}>
      {children}
    </div>
  )
}
