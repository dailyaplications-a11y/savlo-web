"use client"

import Link from "next/link"
import { useMemo, useState, type FormEvent } from "react"
import {
  formatBlogDateShort,
  posts as englishPosts,
  type BlogCategory,
} from "@/lib/blog/posts"
import { blogCategoryLabels } from "@/lib/blog/category-labels"
import type { Locale } from "@/lib/i18n"
import { blogDateLocale } from "@/lib/i18n"
import { buildMailto, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

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

const categoryValues: (BlogCategory | "All")[] = [
  "All",
  "Budgeting",
  "Saving",
  "Debt",
  "Money Psychology",
  "Comparisons",
  "Goals",
]

const copy = {
  en: {
    title: "The Blog",
    subtitle: "stay updated on calm personal finance",
    description:
      "Guides, methods, and reflections on budgeting, saving, and the emotional relationship with money. No flashing red numbers and no guilt-based productivity framing.",
    updated: "Updated",
    empty: "No articles in this category yet. Check back soon.",
    noteTitle: "One note per month, zero noise",
    noteBody:
      "If you want future Savlo Journal updates, this form opens your mail app with a prefilled note to the team. No invisible newsletter backend, no silent subscriptions.",
    emailLabel: "Email",
    placeholder: "you@quietmail.com",
    button: "Email us",
    footerText: "If you prefer reading now, start with",
    footerLink: "How to Make a Budget",
    footerHref: "/blog/how-to-make-a-budget",
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
    subtitle: "finanzas personales en calma",
    description:
      "Guías, métodos y reflexiones sobre presupuesto, ahorro y la relación emocional con el dinero. Sin números rojos que gritan y sin productividad basada en culpa.",
    updated: "Actualizado",
    empty: "Todavía no hay artículos en esta categoría. Vuelve pronto.",
    noteTitle: "Una nota por mes, cero ruido",
    noteBody:
      "Si quieres recibir futuras novedades de Savlo Journal, este formulario abre tu app de mail con una nota prellenada para el equipo. Sin backend invisible de newsletter, sin suscripciones silenciosas.",
    emailLabel: "Email",
    placeholder: "tu@email.com",
    button: "Escribir",
    footerText: "Si prefieres leer ahora, empieza con",
    footerLink: "Cómo hacer un presupuesto",
    footerHref: "/es/blog/how-to-make-a-budget",
    subject: "Actualizaciones de Savlo Journal",
    bodyLines: (email: string) => [
      "Hola equipo de Savlo,",
      "",
      "Quiero recibir futuras actualizaciones de Savlo Journal.",
      `Mi email: ${email}`,
      "Source: blog-journal-es",
    ],
  },
  pt: {
    title: "Blog",
    subtitle: "finanças pessoais em calma",
    description:
      "Guias, métodos e reflexões sobre orçamento, poupança e a relação emocional com o dinheiro. Sem números vermelhos gritando e sem produtividade baseada em culpa.",
    updated: "Atualizado",
    empty: "Ainda não há artigos nesta categoria. Volte em breve.",
    noteTitle: "Uma nota por mês, zero ruído",
    noteBody:
      "Se você quiser receber futuras novidades do Savlo Journal, este formulário abre seu app de e-mail com uma nota pré-preenchida para a equipe. Sem backend invisível de newsletter, sem inscrições silenciosas.",
    emailLabel: "E-mail",
    placeholder: "voce@calmo.com",
    button: "Enviar",
    footerText: "Se preferir ler agora, comece com",
    footerLink: "Como fazer um orçamento",
    footerHref: "/pt/blog/how-to-make-a-budget",
    subject: "Atualizações do Savlo Journal",
    bodyLines: (email: string) => [
      "Olá equipe Savlo,",
      "",
      "Quero receber futuras atualizações do Savlo Journal.",
      `Meu e-mail: ${email}`,
      "Source: blog-journal-pt",
    ],
  },
} as const

function buildCategories(blogPosts: BlogIndexPost[]) {
  return categoryValues.map((value) => ({
    value,
    count:
      value === "All"
        ? blogPosts.length
        : blogPosts.filter((post) => post.category === value).length,
  }))
}

export function BlogIndex({
  locale = "en",
  posts: blogPosts = englishPosts,
}: BlogIndexProps) {
  const text = copy[locale]
  const categories = useMemo(() => buildCategories(blogPosts), [blogPosts])
  const [active, setActive] = useState<BlogCategory | "All">("All")
  const [email, setEmail] = useState("")

  const visible = useMemo(() => {
    const list =
      active === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === active)
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [active, blogPosts])

  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    window.location.href = buildMailto({
      subject: text.subject,
      bodyLines: text.bodyLines(email),
    })
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-32 pt-32 sm:pt-36">
      <header className="flex flex-col items-center text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
          />
          Savlo Journal
        </p>
        <h1 className="font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          {text.title}
        </h1>
        <p className="mt-3 text-[15px] text-primary">{text.subtitle}</p>
        <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {text.description}
        </p>
      </header>

      <nav
        aria-label="Categories"
        className="mt-14 flex flex-wrap items-center justify-center gap-2"
      >
        {categories.map((category) => {
          const isActive = category.value === active
          return (
            <button
              key={category.value}
              type="button"
              onClick={() => setActive(category.value)}
              className={cn(
                "btn-calm inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] transition-colors",
                isActive
                  ? "border-primary/50 bg-primary/10 text-foreground"
                  : "border-border bg-surface/50 text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
              aria-pressed={isActive}
            >
              <span>{blogCategoryLabels[locale][category.value]}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                  isActive
                    ? "bg-primary/20 text-foreground"
                    : "bg-muted/40 text-muted-foreground",
                )}
              >
                {category.count}
              </span>
            </button>
          )
        })}
      </nav>

      <ol className="mt-16 flex flex-col gap-10">
        {visible.map((post) => (
          <li key={post.slug} className="group">
            <Link
              href={`${locale === "en" ? "" : `/${locale}`}/blog/${post.slug}`}
              className="flex flex-col items-center text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                {blogCategoryLabels[locale][post.category]}
              </p>
              <h2 className="max-w-2xl text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {post.title}
              </h2>
              <p className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 text-[12px] font-medium text-primary/80">
                <span>{siteConfig.author.name}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.dateModified}>
                  {text.updated}{" "}
                  {formatBlogDateShort(post.dateModified, blogDateLocale(locale))}
                </time>
              </p>
              <p className="mt-2 max-w-xl text-pretty text-[14px] leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ol>

      {visible.length === 0 && (
        <p className="mt-20 text-center text-sm text-muted-foreground">
          {text.empty}
        </p>
      )}

      <div className="mt-24 flex flex-col items-center gap-4 border-t border-border/60 pt-12 text-center">
        <h3 className="font-serif text-xl font-medium text-foreground">
          {text.noteTitle}
        </h3>
        <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground">
          {text.noteBody}
        </p>
        <form
          className="mt-2 flex w-full max-w-md items-center gap-2"
          onSubmit={onSubscribe}
        >
          <label htmlFor="newsletter" className="sr-only">
            {text.emailLabel}
          </label>
          <input
            id="newsletter"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={text.placeholder}
            className="min-w-0 flex-1 rounded-full border border-border bg-surface/60 px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="btn-calm rounded-full bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground hover:bg-primary-hover"
          >
            {text.button}
          </button>
        </form>
        <p className="text-[11px] text-muted-foreground">
          {text.footerText}{" "}
          <Link
            href={text.footerHref}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {text.footerLink}
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
