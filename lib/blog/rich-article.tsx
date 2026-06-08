import { Fragment, type ReactNode } from "react"
import type { BlogCategory } from "@/lib/blog/posts"

export type RichBlock =
  | { kind: "h2"; id: string; text: string }
  | { kind: "h3"; id: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; text: string }
  | { kind: "divider" }
  | { kind: "faq"; items: Array<{ q: string; a: string }> }

export type RichArticle = {
  slug: string
  title: string
  description: string
  category: BlogCategory
  date: string
  dateModified: string
  keywords: string[]
  readingTime: number
  blocks: RichBlock[]
}

const inlineLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null
  let n = 0
  inlineLinkPattern.lastIndex = 0
  while ((match = inlineLinkPattern.exec(text)) !== null) {
    if (match.index > last) {
      out.push(text.slice(last, match.index))
    }
    out.push(
      <a
        key={`${keyPrefix}-lnk-${n}`}
        href={match[2]}
        className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
      >
        {match[1]}
      </a>,
    )
    last = inlineLinkPattern.lastIndex
    n += 1
  }
  if (last < text.length) {
    out.push(text.slice(last))
  }
  return out
}

export function RichArticleContent({ article }: { article: RichArticle }) {
  return (
    <>
      {article.blocks.map((block, i) => {
        const k = `b-${i}`
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={k}
                id={block.id}
                className="mt-14 scroll-mt-28 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-[34px]"
              >
                {block.text}
              </h2>
            )
          case "h3":
            return (
              <h3
                key={k}
                id={block.id}
                className="mt-10 scroll-mt-28 font-serif text-xl font-medium tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            )
          case "p":
            return (
              <p
                key={k}
                className="mt-5 text-[17px] leading-[1.75] text-foreground/90"
              >
                {renderInline(block.text, k)}
              </p>
            )
          case "ul":
            return (
              <ul
                key={k}
                className="mt-5 space-y-2.5 pl-5 text-[17px] leading-[1.7] text-foreground/90 [&>li]:list-disc [&>li]:marker:text-primary/80"
              >
                {block.items.map((item, j) => (
                  <li key={`${k}-i-${j}`}>{renderInline(item, `${k}-i-${j}`)}</li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol
                key={k}
                className="mt-5 space-y-2.5 pl-5 text-[17px] leading-[1.7] text-foreground/90 [&>li]:list-decimal [&>li]:marker:text-primary/80"
              >
                {block.items.map((item, j) => (
                  <li key={`${k}-i-${j}`}>{renderInline(item, `${k}-i-${j}`)}</li>
                ))}
              </ol>
            )
          case "callout":
            return (
              <aside
                key={k}
                className="mt-8 rounded-2xl border border-primary/25 bg-primary/[0.06] px-5 py-4 text-[16px] leading-relaxed text-foreground/90"
              >
                {renderInline(block.text, k)}
              </aside>
            )
          case "divider":
            return (
              <div
                key={k}
                aria-hidden
                className="mx-auto my-14 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent"
              />
            )
          case "faq":
            return (
              <Fragment key={k}>
                {block.items.map((item, j) => (
                  <p
                    key={`${k}-q-${j}`}
                    className="mt-5 text-[17px] leading-[1.75] text-foreground/90"
                  >
                    <strong>{item.q}</strong>
                    <br />
                    {renderInline(item.a, `${k}-q-${j}`)}
                  </p>
                ))}
              </Fragment>
            )
          default:
            return null
        }
      })}
    </>
  )
}
