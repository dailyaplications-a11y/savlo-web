"use client"

import Link from "next/link"
import { useMemo, useState, type FormEvent } from "react"
import { posts as englishPosts, type BlogCategory } from "@/lib/blog/posts"
import type { Locale } from "@/lib/i18n"
import { blogDateLocale } from "@/lib/i18n"
import { buildMailto } from "@/lib/site"

/*
 * Blog index: one quiet column, the way the best product blogs do it.
 * A title, a line under it, and the list — each post is its title in
 * semibold and the date in gray. No chips, no filters, no cards: the
 * titles carry the page. The note at the end is the only other thing.
 */

type BlogIndexPost = {
  slug: string
  title: string
  description: string
  category: BlogCategory
  date: string
  dateModified: string
}

type BlogIndexProps = {
  locale?: Locale
  posts?: BlogIndexPost[]
}

const copy = {
  en: {
    title: "Blog",
    subtitle: "Budgeting, saving, and personal finance.",
    postsLabel: "Articles",
    noteTitle: "One note a month, zero noise.",
    noteBody: "New guides from the blog in your inbox. Nothing else.",
    emailLabel: "Email",
    placeholder: "you@email.com",
    button: "Subscribe",
    subject: "Savlo Journal updates",
    bodyLines: (email: string) => [
      "Hi Savlo team,",
      "",
      "Please send me future Savlo Journal updates.",
      `My email: ${email}`,
      "Source: blog-journal",
    ],
  },
  es: {
    title: "Blog",
    subtitle: "Presupuesto, ahorro y finanzas personales.",
    postsLabel: "Artículos",
    noteTitle: "Una nota por mes, cero ruido.",
    noteBody: "Lo nuevo del blog en tu correo. Nada más.",
    emailLabel: "Correo electrónico",
    placeholder: "tu@correo.com",
    button: "Suscribirme",
    subject: "Actualizaciones de Savlo Journal",
    bodyLines: (email: string) => [
      "Hola equipo de Savlo,",
      "",
      "Quiero recibir futuras actualizaciones de Savlo Journal.",
      `Mi correo: ${email}`,
      "Source: blog-journal-es",
    ],
  },
  pt: {
    title: "Blog",
    subtitle: "Orçamento, poupança e finanças pessoais.",
    postsLabel: "Artigos",
    noteTitle: "Uma nota por mês, zero ruído.",
    noteBody: "As novidades do blog no seu e-mail. Nada mais.",
    emailLabel: "E-mail",
    placeholder: "voce@email.com",
    button: "Inscrever-me",
    subject: "Atualizações do Savlo Journal",
    bodyLines: (email: string) => [
      "Olá equipe Savlo,",
      "",
      "Quero receber futuras atualizações do Savlo Journal.",
      `Meu e-mail: ${email}`,
      "Source: blog-journal-pt",
    ],
  },
  de: {
    title: "Blog",
    subtitle: "Budget, Sparen und persönliche Finanzen.",
    postsLabel: "Artikel",
    noteTitle: "Eine Notiz pro Monat, kein Lärm.",
    noteBody: "Neues aus dem Blog in deinem Postfach. Sonst nichts.",
    emailLabel: "E-Mail",
    placeholder: "du@beispiel.de",
    button: "Abonnieren",
    subject: "Savlo Journal-Updates",
    bodyLines: (email: string) => [
      "Hallo Savlo-Team,",
      "",
      "Ich möchte künftige Savlo Journal-Updates erhalten.",
      `Meine E-Mail: ${email}`,
      "Quelle: blog-journal-de",
    ],
  },
  fr: {
    title: "Blog",
    subtitle: "Budget, épargne et finances personnelles.",
    postsLabel: "Articles",
    noteTitle: "Une note par mois, zéro bruit.",
    noteBody: "Les nouveautés du blog dans ta boîte mail. Rien d'autre.",
    emailLabel: "E-mail",
    placeholder: "toi@exemple.fr",
    button: "M'abonner",
    subject: "Mises à jour de Savlo Journal",
    bodyLines: (email: string) => [
      "Bonjour l'équipe Savlo,",
      "",
      "Je veux recevoir les futures mises à jour de Savlo Journal.",
      `Mon e-mail : ${email}`,
      "Source: blog-journal-fr",
    ],
  },
} as const

/** "7 jun 2026", "Jun 7, 2026", "7. Juni 2026": the month in words reads faster than 7/6/2026. */
function formatListDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(blogDateLocale(locale), {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`))
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function BlogIndex({
  locale = "en",
  posts: blogPosts = englishPosts,
}: BlogIndexProps) {
  const text = copy[locale]
  const [email, setEmail] = useState("")
  const prefix = locale === "en" ? "" : `/${locale}`

  const sorted = useMemo(
    () =>
      [...blogPosts].sort((a, b) =>
        a.date === b.date
          ? a.dateModified < b.dateModified
            ? 1
            : -1
          : a.date < b.date
            ? 1
            : -1,
      ),
    [blogPosts],
  )

  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    window.location.href = buildMailto({
      subject: text.subject,
      bodyLines: text.bodyLines(email),
    })
  }

  return (
    <section className="mx-auto w-full max-w-[680px] px-5 pb-28 pt-36 sm:pb-32 sm:pt-44">
      <header className="flex flex-col items-center gap-3 text-center sm:gap-3.5">
        <h1 className="font-serif text-[48px] font-medium leading-none tracking-[-0.03em] text-foreground sm:text-[64px]">
          {text.title}
        </h1>
        <p className="text-[15px] leading-normal text-muted-foreground sm:text-base">
          {text.subtitle}
        </p>
      </header>

      <ol aria-label={text.postsLabel} className="mt-10 flex flex-col sm:mt-16">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${prefix}/blog/${post.slug}`}
              className="group flex items-start justify-between gap-6 rounded-lg py-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-pretty text-[19px] font-semibold leading-[1.35] tracking-[-0.012em] text-foreground">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="text-sm leading-[1.4] text-muted-foreground"
                >
                  {formatListDate(post.date, locale)}
                </time>
              </span>
              <ArrowRight className="mt-[5px] hidden shrink-0 -translate-x-1.5 text-muted-foreground opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none sm:block" />
            </Link>
          </li>
        ))}
      </ol>

      <section
        aria-labelledby="blog-note"
        className="mt-16 flex flex-col gap-5 border-t border-border pt-10 sm:mt-24 sm:pt-12"
      >
        <div className="flex flex-col gap-2">
          <h2
            id="blog-note"
            className="font-serif text-[22px] font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-2xl"
          >
            {text.noteTitle}
          </h2>
          <p className="text-[15px] leading-[1.55] text-muted-foreground">
            {text.noteBody}
          </p>
        </div>
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={onSubscribe}
        >
          <label htmlFor="blog-note-email" className="sr-only">
            {text.emailLabel}
          </label>
          <input
            id="blog-note-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={text.placeholder}
            className="h-12 min-w-0 flex-1 rounded-full border border-border bg-transparent px-5 text-[15px] text-foreground transition-colors placeholder:text-muted-foreground/80 focus:border-white/20 focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-primary px-[22px] text-[15px] font-semibold text-primary-foreground transition-[background-color,scale] duration-200 hover:bg-[#5cc29b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover active:scale-[0.98]"
          >
            {text.button}
          </button>
        </form>
      </section>
    </section>
  )
}
