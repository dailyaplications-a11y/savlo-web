"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import type { Locale } from "@/lib/i18n"
import { buildWaitlistMailto, siteConfig } from "@/lib/site"
import { Reveal } from "./reveal"

const copy = {
  en: {
    eyebrow: "Begin, gently",
    heading: "Start understanding your money.",
    description:
      "Request early access by email. The current site does not submit your address to a hidden backend; it opens your mail app with a prefilled message to the Savlo team.",
    emailLabel: "Email",
    placeholder: "you@quietmail.com",
    button: "Email the team",
    direct: "Prefer a direct link?",
    explore: "Prefer to explore first?",
    guide: "Start with the budget guide",
    guideHref: "/blog/how-to-make-a-budget",
    source: "landing-cta",
  },
  es: {
    eyebrow: "Empieza, con calma",
    heading: "Empieza a entender tu dinero.",
    description:
      "Pide acceso anticipado por email. El sitio actual no envía tu dirección a un backend oculto; abre tu app de mail con un mensaje prellenado para el equipo de Savlo.",
    emailLabel: "Email",
    placeholder: "tu@email.com",
    button: "Escribir al equipo",
    direct: "¿Prefieres un enlace directo?",
    explore: "¿Prefieres explorar primero?",
    guide: "Empieza con la guía de presupuesto",
    guideHref: "/es/blog/how-to-make-a-budget",
    source: "landing-cta-es",
  },
} as const

export function CtaSection({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale]
  const [email, setEmail] = useState("")

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    window.location.href = buildWaitlistMailto({
      email,
      platform: "Both",
      source: text.source,
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
            {text.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {text.heading}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
            {text.description}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-2 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              {text.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={text.placeholder}
              className="flex-1 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              className="btn-calm inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {text.button}
            </button>
          </form>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-col items-center gap-3 text-xs text-muted-foreground">
            <p>
              {text.direct}{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
            <p>
              {text.explore}{" "}
              <Link
                href={text.guideHref}
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {text.guide}
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
