"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import { buildWaitlistMailto, siteConfig } from "@/lib/site"
import { Reveal } from "./reveal"

export function CtaSection() {
  const [email, setEmail] = useState("")

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    window.location.href = buildWaitlistMailto({
      email,
      platform: "Both",
      source: "landing-cta",
    })
  }

  return (
    <section id="cta" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[420px] max-w-3xl -translate-y-1/2 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(520px 260px at 50% 50%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 60%), radial-gradient(400px 220px at 70% 50%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
            Begin, gently
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Start understanding your money.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
            Request early access by email. The current site does not submit your address to a hidden backend; it opens your mail app with a prefilled message to the Savlo team.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-2 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@quietmail.com"
              className="flex-1 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              className="btn-calm inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Email the team
            </button>
          </form>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-col items-center gap-3 text-xs text-muted-foreground">
            <p>
              Prefer a direct link?{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
            <p>
              Prefer to explore first?{" "}
              <Link
                href="/blog/how-to-make-a-budget"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Start with the budget guide
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
