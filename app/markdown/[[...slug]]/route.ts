import {
  buildBlogMarkdownMirror,
  buildBlogPostMarkdownMirror,
  buildHomeMarkdownMirror,
  buildMarkdownMirrorIndex,
  buildPrivacyMarkdownMirror,
  buildTermsMarkdownMirror,
} from "@/lib/markdown-mirrors"

export const revalidate = 86400

const headers = {
  "Content-Type": "text/markdown; charset=utf-8",
  "X-Robots-Tag": "noindex, follow",
}

type RouteParams = {
  slug?: string[]
}

function markdownResponse(body: string, status: number = 200) {
  return new Response(body, {
    headers,
    status,
  })
}

export async function GET(
  _request: Request,
  context: { params: Promise<RouteParams> },
) {
  const { slug = [] } = await context.params

  if (slug.length === 0) {
    return markdownResponse(buildMarkdownMirrorIndex())
  }

  if (slug.length === 1) {
    switch (slug[0]) {
      case "home.md":
        return markdownResponse(buildHomeMarkdownMirror())
      case "blog.md":
        return markdownResponse(buildBlogMarkdownMirror())
      case "privacy.md":
        return markdownResponse(buildPrivacyMarkdownMirror())
      case "terms.md":
        return markdownResponse(buildTermsMarkdownMirror())
      default:
        return markdownResponse("# Not found\n", 404)
    }
  }

  if (slug.length === 2 && slug[0] === "blog" && slug[1].endsWith(".md")) {
    const postSlug = slug[1].replace(/\.md$/, "")
    const markdown = await buildBlogPostMarkdownMirror(postSlug)

    if (markdown) {
      return markdownResponse(markdown)
    }
  }

  return markdownResponse("# Not found\n", 404)
}
