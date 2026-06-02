import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"

const root = process.cwd()
const failures = []

function filePath(relativePath) {
  return resolve(root, relativePath)
}

function read(relativePath) {
  return readFileSync(filePath(relativePath), "utf8")
}

function check(name, condition) {
  if (!condition) failures.push(name)
}

function contains(relativePath, pattern) {
  return pattern.test(read(relativePath))
}

const postsSource = read("lib/blog/posts.tsx")
const slugCount = (postsSource.match(/\n\s+slug: /g) ?? []).length
const dateModifiedCount =
  (postsSource.match(/\n\s+dateModified: /g) ?? []).length

check(
  "Every blog post has a visible dateModified source value",
  slugCount > 0 && dateModifiedCount === slugCount,
)

check(
  "Home page includes FAQPage structured data",
  contains("app/page.tsx", /"@type":\s*"FAQPage"/),
)

check(
  "Home SoftwareApplication schema includes a free offer",
  contains("app/page.tsx", /offers:[\s\S]*price:[\s\S]*["']0["']/),
)

check(
  "Blog article schema uses BlogPosting",
  contains("app/blog/[slug]/page.tsx", /"@type":\s*"BlogPosting"/),
)

check(
  "Blog article schema includes dateModified",
  contains("app/blog/[slug]/page.tsx", /dateModified:/),
)

check(
  "Blog articles include BreadcrumbList structured data",
  contains("app/blog/[slug]/page.tsx", /"@type":\s*"BreadcrumbList"/),
)

check(
  "Author page exists for Savlo Team",
  existsSync(filePath("app/author/savlo-team/page.tsx")),
)

check(
  "Blog articles visibly link the author profile",
  contains(
    "components/savlo/blog/blog-article.tsx",
    /authorHref:\s*siteConfig\.author\.url/,
  ) &&
    contains(
      "components/savlo/blog/blog-article.tsx",
      /authorHref:\s*["']\/es\/author\/savlo-team["']/,
    ) &&
    contains(
      "components/savlo/blog/blog-article.tsx",
      /href={text\.authorHref}/,
  ),
)

check(
  "Blog articles visibly show updated dates",
  contains("components/savlo/blog/blog-article.tsx", /Updated/),
)

check(
  "Sitemap uses post dateModified values",
  contains("app/sitemap.ts", /post\.dateModified/),
)

check(
  "Hero phone screenshots use next/image",
  contains("components/savlo/phone-pair.tsx", /from "next\/image"/) &&
    contains("components/savlo/phone-pair.tsx", /fetchPriority="high"/),
)

check(
  "Next image optimization is not disabled",
  !contains("next.config.mjs", /unoptimized:\s*true/),
)

check(
  "i18n SEO helper exists",
  existsSync(filePath("lib/i18n.ts")),
)

check(
  "Spanish home route exists",
  existsSync(filePath("app/es/page.tsx")),
)

check(
  "Spanish blog index route exists",
  existsSync(filePath("app/es/blog/page.tsx")),
)

check(
  "Spanish blog article route exists",
  existsSync(filePath("app/es/blog/[slug]/page.tsx")),
)

check(
  "Home metadata includes hreflang alternates",
  contains("app/page.tsx", /metadataAlternates\(["']\/["']\)/) &&
    contains("lib/i18n.ts", /languages:[\s\S]*languageAlternates/),
)

check(
  "Spanish metadata includes canonical /es and x-default",
  existsSync(filePath("app/es/page.tsx")) &&
    contains("app/es/page.tsx", /metadataAlternates\(["']\/es["']\)/) &&
    contains("lib/i18n.ts", /x-default/),
)

check(
  "Sitemap includes localized alternates",
  contains("app/sitemap.ts", /languages:\s*languageAlternates/) &&
    contains("app/sitemap.ts", /localizedPath\(path,\s*["']es["']\)/),
)

check(
  "Spanish home reuses the English landing UI components",
  contains("app/es/page.tsx", /from "@\/components\/savlo\/hero"/) &&
    contains("app/es/page.tsx", /<Hero\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<ProductOverview\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<FeaturesShowcase\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<BehavioralSection\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<TrustSection\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<FeaturedReads\s+locale="es"\s*\/>/) &&
    contains("app/es/page.tsx", /<CtaSection\s+locale="es"\s*\/>/),
)

check(
  "Spanish blog index reuses the English blog UI component",
  contains("app/es/blog/page.tsx", /from "@\/components\/savlo\/blog\/blog-index"/) &&
    contains("app/es/blog/page.tsx", /<BlogIndex\s+locale="es"/),
)

check(
  "Spanish blog articles reuse the English article UI component",
  contains(
    "app/es/blog/[slug]/page.tsx",
    /from "@\/components\/savlo\/blog\/blog-article"/,
  ) &&
    contains("app/es/blog/[slug]/page.tsx", /<BlogArticle\s+post={post}\s+locale="es"/),
)

if (failures.length > 0) {
  process.stderr.write("SEO structure checks failed:\n")
  for (const failure of failures) {
    process.stderr.write(`- ${failure}\n`)
  }
  process.exit(1)
}

process.stdout.write("SEO structure checks passed.\n")
