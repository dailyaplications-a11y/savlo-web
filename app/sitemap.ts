import type { MetadataRoute } from "next"
import { posts } from "@/lib/blog/posts"
import { languageAlternates, localizedPath } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

function localizedEntries({
  path,
  lastModified,
  changeFrequency,
  priority,
}: {
  path: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}): MetadataRoute.Sitemap {
  const alternates = {
    languages: languageAlternates(path),
  }

  return [
    {
      url: absoluteUrl(localizedPath(path, "en")),
      lastModified,
      changeFrequency,
      priority,
      alternates,
    },
    {
      url: absoluteUrl(localizedPath(path, "es")),
      lastModified,
      changeFrequency,
      priority: Math.max(priority - 0.05, 0.1),
      alternates,
    },
    {
      url: absoluteUrl(localizedPath(path, "pt")),
      lastModified,
      changeFrequency,
      priority: Math.max(priority - 0.1, 0.1),
      alternates,
    },
    {
      url: absoluteUrl(localizedPath(path, "de")),
      lastModified,
      changeFrequency,
      priority: Math.max(priority - 0.15, 0.1),
      alternates,
    },
    {
      url: absoluteUrl(localizedPath(path, "fr")),
      lastModified,
      changeFrequency,
      priority: Math.max(priority - 0.2, 0.1),
      alternates,
    },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date(`${siteConfig.lastUpdated}T00:00:00Z`)

  return [
    ...localizedEntries({
      path: "/",
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    }),
    ...localizedEntries({
      path: "/blog",
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
    ...posts.flatMap((post) =>
      localizedEntries({
        path: `/blog/${post.slug}`,
        lastModified: new Date(`${post.dateModified}T00:00:00Z`),
        changeFrequency: "monthly",
        priority: post.slug === "how-to-make-a-budget" ? 0.9 : 0.8,
      }),
    ),
    ...localizedEntries({
      path: siteConfig.author.url,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.5,
    }),
    {
      url: absoluteUrl("/privacy"),
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
