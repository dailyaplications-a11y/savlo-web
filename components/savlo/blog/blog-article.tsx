import Link from "next/link"
import { Fragment, type ReactNode } from "react"
import {
  formatBlogDate,
  getRecommendedPosts,
  getRelatedPosts,
  type BlogPost,
} from "@/lib/blog/posts"
import { RichArticleContent, type RichBody } from "@/lib/blog/rich-article"
import { getGermanPostBySlug } from "@/lib/blog/german-posts"
import { getFrenchPostBySlug } from "@/lib/blog/french-posts"
import { getPortuguesePostBySlug } from "@/lib/blog/portuguese-posts"
import { getSpanishPostBySlug } from "@/lib/blog/spanish-posts"
import { blogCategoryLabel } from "@/lib/blog/category-labels"
import type { Locale } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { KeepReading } from "./keep-reading"

type ArticlePost = Omit<BlogPost, "content" | "stats"> & {
  stats?: BlogPost["stats"]
  content?: () => ReactNode
  summary?: string[]
  sections?: {
    heading: string
    body: string[]
  }[]
  rich?: RichBody
}

const labels = {
  en: {
    home: "Home",
    blog: "Blog",
    updated: "Updated",
    minRead: "min read",
    authorHref: siteConfig.author.url,
    authorTagline: "Budgeting and personal finance guides",
    authorName: "The Savlo Team",
    share: "Share",
    shareX: "Share on X",
    shareLinkedIn: "Share on LinkedIn",
    stats: ["Words", "Characters", "Sentences", "Paragraphs"],
    keepReading: "Keep reading",
    allGuides: "All guides",
    homeHref: "/",
    blogHref: "/blog",
    blogPath: "/blog",
    dateLocale: "en-US",
  },
  es: {
    home: "Inicio",
    blog: "Blog",
    updated: "Actualizado",
    minRead: "min de lectura",
    authorHref: "/es/author/savlo-team",
    authorTagline: "Guías de presupuesto y finanzas personales",
    authorName: "El equipo de Savlo",
    share: "Compartir",
    shareX: "Compartir en X",
    shareLinkedIn: "Compartir en LinkedIn",
    stats: ["Palabras", "Caracteres", "Frases", "Párrafos"],
    keepReading: "Sigue leyendo",
    allGuides: "Todas las guías",
    homeHref: "/es",
    blogHref: "/es/blog",
    blogPath: "/es/blog",
    dateLocale: "es-ES",
  },
  pt: {
    home: "Início",
    blog: "Blog",
    updated: "Atualizado",
    minRead: "min de leitura",
    authorHref: "/pt/author/savlo-team",
    authorTagline: "Guias de orçamento e finanças pessoais",
    authorName: "Equipe Savlo",
    share: "Compartilhar",
    shareX: "Compartilhar no X",
    shareLinkedIn: "Compartilhar no LinkedIn",
    stats: ["Palavras", "Caracteres", "Frases", "Parágrafos"],
    keepReading: "Continue lendo",
    allGuides: "Todos os guias",
    homeHref: "/pt",
    blogHref: "/pt/blog",
    blogPath: "/pt/blog",
    dateLocale: "pt-BR",
  },
  de: {
    home: "Startseite",
    blog: "Blog",
    updated: "Aktualisiert",
    minRead: "min. Lesezeit",
    authorHref: "/de/author/savlo-team",
    authorTagline: "Leitfäden zu Budget und persönlichen Finanzen",
    authorName: "Das Savlo-Team",
    share: "Teilen",
    shareX: "Auf X teilen",
    shareLinkedIn: "Auf LinkedIn teilen",
    stats: ["Wörter", "Zeichen", "Sätze", "Absätze"],
    keepReading: "Weiterlesen",
    allGuides: "Alle Leitfäden",
    homeHref: "/de",
    blogHref: "/de/blog",
    blogPath: "/de/blog",
    dateLocale: "de-DE",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    updated: "Mis à jour",
    minRead: "min de lecture",
    authorHref: "/fr/author/savlo-team",
    authorTagline: "Guides de budget et de finances personnelles",
    authorName: "L’équipe Savlo",
    share: "Partager",
    shareX: "Partager sur X",
    shareLinkedIn: "Partager sur LinkedIn",
    stats: ["Mots", "Caractères", "Phrases", "Paragraphes"],
    keepReading: "Continuer la lecture",
    allGuides: "Tous les guides",
    homeHref: "/fr",
    blogHref: "/fr/blog",
    blogPath: "/fr/blog",
    dateLocale: "fr-FR",
  },
} as const

export function BlogArticle({
  post,
  locale = "en",
}: {
  post: ArticlePost
  locale?: Locale
}) {
  const text = labels[locale]
  // What to read next: the hand-picked guides first, then the same category
  // fills the list up to three, never a post twice
  const readNext = localizePosts(
    [...getRecommendedPosts(post.slug, 3), ...getRelatedPosts(post.slug, 3)]
      .filter((p, i, all) => all.findIndex((q) => q.slug === p.slug) === i)
      .slice(0, 3),
    locale,
  )
  const Content = post.content
  const stats = getArticleStats(post)
  const shareUrl = absoluteUrl(`${text.blogPath}/${post.slug}`)
  const shareText = `${post.title} | Savlo`

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:pt-36">
      <nav
        aria-label="Breadcrumb"
        className="mb-10 text-[12px] text-muted-foreground"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              href={text.homeHref}
              className="transition-colors hover:text-foreground"
            >
              {text.home}
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li>
            <Link
              href={text.blogHref}
              className="transition-colors hover:text-foreground"
            >
              {text.blog}
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li className="truncate text-foreground/80">{post.title}</li>
        </ol>
      </nav>

      <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.08] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-primary">
          {blogCategoryLabel(locale, post.category)}
        </span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>
          {formatBlogDate(post.date, text.dateLocale)}
        </time>
        <span aria-hidden>·</span>
        <time dateTime={post.dateModified}>
          {text.updated} {formatBlogDate(post.dateModified, text.dateLocale)}
        </time>
        <span aria-hidden>·</span>
        <span>
          {post.readingTime} {text.minRead}
        </span>
      </div>

      <h1 className="mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-[56px]">
        {post.title}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {post.description}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-border/60 py-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/savlo_app_icon.png"
            alt="Savlo"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <Link
              href={text.authorHref}
              className="text-[13px] font-medium text-foreground transition-colors hover:text-primary"
            >
              {text.authorName}
            </Link>
            <span className="text-[12px] text-muted-foreground">
              {text.authorTagline}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <span>{text.share}</span>
          <ShareIconLink
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            label={text.shareX}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </ShareIconLink>
          <ShareIconLink
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            label={text.shareLinkedIn}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.04c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </ShareIconLink>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        <Stat label={text.stats[0]} value={stats.words.toLocaleString()} />
        <Stat label={text.stats[1]} value={stats.characters.toLocaleString()} />
        <Stat label={text.stats[2]} value={stats.sentences.toLocaleString()} />
        <Stat label={text.stats[3]} value={stats.paragraphs.toLocaleString()} />
      </div>

      <div className="mt-10">
        {Content ? (
          <Content />
        ) : post.rich ? (
          <RichArticleContent article={post.rich} locale={locale} />
        ) : (
          <GeneratedArticleContent post={post} />
        )}
      </div>

      <KeepReading
        locale={locale}
        heading={text.keepReading}
        allGuidesLabel={text.allGuides}
        allGuidesHref={text.blogHref}
        posts={readNext.map((nextPost) => ({
          href: `${text.blogPath}/${nextPost.slug}`,
          title: nextPost.title,
          date: nextPost.date,
        }))}
        updatedLabel={text.updated}
        updatedDate={post.dateModified}
      />
    </article>
  )
}

function localizePosts(posts: BlogPost[], locale: Locale): ArticlePost[] {
  if (locale === "en") return posts
  if (locale === "es") {
    return posts.map<ArticlePost>((post) => {
      const localized = getSpanishPostBySlug(post.slug)
      if (!localized) return post
      if (!localized.rich && post.rich) {
        return { ...post, ...localized, rich: post.rich }
      }
      return localized
    })
  }
  if (locale === "pt") {
    return posts.map<ArticlePost>((post) => {
      const localized = getPortuguesePostBySlug(post.slug)
      if (!localized) return post
      if (!localized.rich && post.rich) {
        return { ...post, ...localized, rich: post.rich }
      }
      return localized
    })
  }
  if (locale === "de") {
    return posts.map<ArticlePost>((post) => {
      const localized = getGermanPostBySlug(post.slug)
      if (!localized) return post
      if (!localized.rich && post.rich) {
        return { ...post, ...localized, rich: post.rich }
      }
      return localized
    })
  }
  return posts.map<ArticlePost>((post) => {
    const localized = getFrenchPostBySlug(post.slug)
    if (!localized) return post
    if (!localized.rich && post.rich) {
      return { ...post, ...localized, rich: post.rich }
    }
    return localized
  })
}

function getArticleStats(post: ArticlePost): BlogPost["stats"] {
  if (post.stats) return post.stats

  let text = ""
  let paragraphs = 0

  if (post.rich) {
    for (const block of post.rich.blocks) {
      if (block.kind === "p" || block.kind === "callout") {
        text += " " + block.text
        paragraphs += 1
      } else if (block.kind === "ul" || block.kind === "ol") {
        for (const item of block.items) {
          text += " " + item
          paragraphs += 1
        }
      } else if (block.kind === "faq") {
        for (const item of block.items) {
          text += " " + item.q + " " + item.a
          paragraphs += 1
        }
      }
    }
  }

  const simple = [
    ...(post.summary ?? []),
    ...(post.sections ?? []).flatMap((section) => section.body),
  ]
  for (const p of simple) {
    text += " " + p
    paragraphs += 1
  }

  const words = text.match(/\S+/g)?.length ?? 0
  const sentences =
    text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0)
      .length || paragraphs

  return {
    words,
    characters: text.length,
    sentences,
    paragraphs,
  }
}

function GeneratedArticleContent({ post }: { post: ArticlePost }) {
  return (
    <>
      {post.summary?.map((paragraph) => (
        <ArticleParagraph key={paragraph}>{paragraph}</ArticleParagraph>
      ))}

      {post.sections?.map((section) => (
        <Fragment key={section.heading}>
          <h2 className="mt-14 scroll-mt-28 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-[34px]">
            {section.heading}
          </h2>
          {section.body.map((paragraph) => (
            <ArticleParagraph key={paragraph}>{paragraph}</ArticleParagraph>
          ))}
        </Fragment>
      ))}
    </>
  )
}

function ArticleParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-[17px] leading-[1.75] text-foreground/90">
      {children}
    </p>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-surface px-4 py-5">
      <span className="font-serif text-2xl font-medium tabular-nums text-foreground sm:text-3xl">
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

function ShareIconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
    >
      {children}
    </Link>
  )
}
