import {
  formatBlogDate,
  getPostBySlug,
  getRecommendedPosts,
  getRelatedPosts,
  posts,
  type BlogPost,
} from "@/lib/blog/posts"
import { absoluteUrl, siteConfig } from "@/lib/site"

const markdownMirrorBasePath = "/markdown"

const entityMap: Record<string, string> = {
  "&amp;": "&",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&ldquo;": '"',
  "&rdquo;": '"',
  "&lsquo;": "'",
  "&rsquo;": "'",
  "&ndash;": "-",
  "&mdash;": "-",
  "&hellip;": "...",
  "&nbsp;": " ",
  "&gt;": ">",
  "&lt;": "<",
}

function decodeEntities(value: string) {
  return value.replace(
    /&(amp|apos|quot|ldquo|rdquo|lsquo|rsquo|ndash|mdash|hellip|nbsp|gt|lt|#39);/g,
    (entity) => entityMap[entity] ?? entity,
  )
}

function absolutizeHref(href: string) {
  if (href.startsWith("/")) {
    return absoluteUrl(href)
  }

  return decodeEntities(href)
}

function normalizeInline(html: string): string {
  let value = html
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const label = normalizeInline(text)
      return `[${label}](${absolutizeHref(href)})`
    })
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => {
      return `**${normalizeInline(text)}**`
    })
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => {
      return `*${normalizeInline(text)}*`
    })
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, text) => {
      return `\`${decodeEntities(String(text)).trim()}\``
    })
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")

  value = decodeEntities(value)
  value = value.replace(/\s+\n/g, "\n").replace(/\n\s+/g, "\n")
  value = value.replace(/[ \t]+/g, " ")

  return value.trim()
}

function renderListBlock(innerHtml: string, ordered: boolean) {
  const items = Array.from(innerHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi))
    .map((match, index) => {
      const prefix = ordered ? `${index + 1}.` : "-"
      return `${prefix} ${normalizeInline(match[1])}`
    })
    .join("\n")

  return items.trim()
}

function htmlToMarkdown(html: string) {
  let value = html
    .replace(/<aside[^>]*>([\s\S]*?)<\/aside>/gi, (_, inner) => {
      return `\n${normalizeInline(inner)
        .split("\n")
        .map((line) => `> ${line.trim()}`)
        .join("\n")}\n`
    })
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
      return `\n${renderListBlock(inner, true)}\n`
    })
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
      return `\n${renderListBlock(inner, false)}\n`
    })
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, inner) => {
      return `\n## ${normalizeInline(inner)}\n`
    })
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, inner) => {
      return `\n### ${normalizeInline(inner)}\n`
    })
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => {
      return `\n${normalizeInline(inner)}\n`
    })
    .replace(/<div[^>]*>\s*<\/div>/gi, "\n")
    .replace(/<[^>]+>/g, "")

  value = decodeEntities(value)

  return value
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function postMirrorUrl(slug: string) {
  return absoluteUrl(`${markdownMirrorBasePath}/blog/${slug}.md`)
}

async function renderPostMarkdown(post: BlogPost) {
  const { renderToStaticMarkup } = await import("react-dom/server")
  const articleBody = htmlToMarkdown(renderToStaticMarkup(post.content()))
  const recommended = getRecommendedPosts(post.slug)
  const related =
    recommended.length > 0 ? recommended : getRelatedPosts(post.slug)

  return `# ${post.title}

- Canonical URL: ${absoluteUrl(`/blog/${post.slug}`)}
- Mirror URL: ${postMirrorUrl(post.slug)}
- Published: ${formatBlogDate(post.date)}
- Updated: ${formatBlogDate(post.dateModified)}
- Author: ${siteConfig.author.name}
- Category: ${post.category}
- Reading time: ${post.readingTime} minutes
- Keywords: ${post.keywords.join(", ")}

## Summary

${post.description}

## Full article mirror

${articleBody}
${
  related.length > 0
    ? `

## Related reading

${related
  .map(
    (relatedPost) =>
      `- ${relatedPost.title}: ${absoluteUrl(`/blog/${relatedPost.slug}`)}`,
  )
  .join("\n")}`
    : ""
}
`
}

export function buildMarkdownMirrorIndex() {
  const corePages = [
    `- Home mirror: ${absoluteUrl("/markdown/home.md")}`,
    `- Blog mirror: ${absoluteUrl("/markdown/blog.md")}`,
    `- Author profile: ${absoluteUrl(siteConfig.author.url)}`,
    `- Privacy summary mirror: ${absoluteUrl("/markdown/privacy.md")}`,
    `- Terms summary mirror: ${absoluteUrl("/markdown/terms.md")}`,
  ].join("\n")

  const articles = posts
    .map(
      (post) =>
        `- ${post.title}: ${postMirrorUrl(post.slug)} (canonical: ${absoluteUrl(`/blog/${post.slug}`)})`,
    )
    .join("\n")

  return `# Savlo Markdown Mirrors

Canonical site: ${siteConfig.url}

These Markdown mirrors are secondary, AI-readable versions of the public Savlo website. They exist to make the site's meaning easier to parse for assistants, research tools, and crawlers that prefer clean Markdown over interactive HTML.

## Canonical rule

- Treat the HTML pages on ${siteConfig.url} as the canonical public source.
- Treat these mirrors as readable duplicates for machine consumption.
- The mirrors intentionally avoid adding claims that are not already present or reasonably supported by the public site.

## Core mirrors

${corePages}

## Blog article mirrors

${articles}
`
}

export function buildHomeMarkdownMirror() {
  return `# Savlo Home Page Mirror

- Canonical URL: ${absoluteUrl("/")}
- Mirror URL: ${absoluteUrl("/markdown/home.md")}
- Product stage: prelaunch marketing site
- Primary audience: people who want a calmer relationship with money

## Primary promise

Understand your money in about one minute a day.

## What the landing page says Savlo does

- Lets people log spending with quick voice check-ins.
- Imports transaction history from CSV and XLSX files.
- Organizes money into separate Spaces.
- Helps people plan with Sinking Funds.
- Shows margin and cash-flow context in a calmer interface.
- Lets people export their records.

## Positioning

Savlo is positioned as a calm budgeting app for anxious minds. The copy emphasizes lower friction, less guilt, fewer harsh alerts, and a behavioral-finance-informed tone.

## Public-site trust promises

- No ads.
- No data-selling messaging.
- Exportability and user control are emphasized.
- The current public site presents Savlo as coming soon to iOS and Android, not as already live in the stores.

## Main conversion paths

- Join the iOS waitlist.
- Join the Android waitlist.
- Read educational blog content.
- Contact support at ${siteConfig.supportEmail}.

## SEO focus

- calm budgeting app
- budgeting for anxious minds
- voice expense tracking
- sinking funds app
- behavioral finance budgeting
`
}

export function buildBlogMarkdownMirror() {
  const catalog = posts
    .map(
      (post) => `## ${post.title}

- Canonical URL: ${absoluteUrl(`/blog/${post.slug}`)}
- Mirror URL: ${postMirrorUrl(post.slug)}
- Published: ${formatBlogDate(post.date)}
- Updated: ${formatBlogDate(post.dateModified)}
- Author: ${siteConfig.author.name}
- Category: ${post.category}
- Keywords: ${post.keywords.join(", ")}
- Summary: ${post.description}
`,
    )
    .join("\n")

  return `# Savlo Blog Mirror

- Canonical URL: ${absoluteUrl("/blog")}
- Mirror URL: ${absoluteUrl("/markdown/blog.md")}

## Purpose

The Savlo blog supports the main landing page with practical personal-finance guides, anxiety-aware budgeting content, and comparison pages for commercial intent.

## Main keyword clusters

- how to make a budget
- voice expense tracking
- sinking funds
- financial anxiety
- money dysmorphia
- Mint alternatives
- YNAB vs Monarch vs Savlo

## Article catalog

${catalog}`
}

export function buildPrivacyMarkdownMirror() {
  return `# Savlo Privacy Page Mirror

- Canonical URL: ${absoluteUrl("/privacy")}
- Mirror URL: ${absoluteUrl("/markdown/privacy.md")}

## Purpose

This is a short AI-readable summary of the public Privacy page.

## Summary

- The public privacy page explains how Savlo handles personal information, privacy rights, and support contact.
- The page should be consulted directly for the full legal wording.
- Support contact listed on the site: ${siteConfig.supportEmail}
`
}

export function buildTermsMarkdownMirror() {
  return `# Savlo Terms Page Mirror

- Canonical URL: ${absoluteUrl("/terms")}
- Mirror URL: ${absoluteUrl("/markdown/terms.md")}

## Purpose

This is a short AI-readable summary of the public Terms page.

## Summary

- The public terms page covers legal usage terms, billing language, and app-distribution clauses.
- The page should be consulted directly for the full legal wording.
- Support contact listed on the site: ${siteConfig.supportEmail}
`
}

export async function buildBlogPostMarkdownMirror(slug: string) {
  const post = getPostBySlug(slug)

  return post ? renderPostMarkdown(post) : null
}
