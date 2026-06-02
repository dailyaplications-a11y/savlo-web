import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { formatBlogDateShort } from "@/lib/blog/posts"
import { spanishPosts } from "@/lib/blog/spanish-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.author.name,
  description:
    "Notas de finanzas conductuales y presupuesto en calma del equipo que construye Savlo.",
  alternates: metadataAlternates("/es/author/savlo-team"),
  openGraph: {
    title: siteConfig.author.name,
    description:
      "Guías sobre presupuesto, ahorro, ansiedad financiera y sinking funds.",
    type: "profile",
    locale: "es_ES",
    siteName: siteConfig.name,
    url: "/es/author/savlo-team",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Perfil de autor de Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.author.name,
    description:
      "Guías sobre presupuesto, ahorro y psicología del dinero.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function SpanishAuthorPage() {
  const featuredPosts = spanishPosts.slice(0, 6)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/es/author/savlo-team")}#profile`,
    url: absoluteUrl("/es/author/savlo-team"),
    name: siteConfig.author.name,
    description: metadata.description,
    inLanguage: "es",
    mainEntity: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.author.name,
      url: absoluteUrl("/es/author/savlo-team"),
      email: siteConfig.supportEmail,
      image: absoluteUrl("/savlo-icon.png"),
      knowsAbout: [
        "Presupuesto personal",
        "Finanzas conductuales",
        "Ansiedad financiera",
        "Sinking funds",
        "Registro de gastos por voz",
      ],
    },
  }

  return (
    <div
      lang="es"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="es" />
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[12px] text-muted-foreground"
        >
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/es" className="transition-colors hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li>
              <Link
                href="/es/blog"
                className="transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li className="text-foreground/80">{siteConfig.author.name}</li>
          </ol>
        </nav>

        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Autor
          </p>
          <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl">
            {siteConfig.author.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Notas de finanzas conductuales y presupuesto en calma del equipo
            que construye Savlo.
          </p>
        </header>

        <section className="mt-12 border-y border-border/60 py-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Enfoque editorial
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Presupuestos que reducen evitación financiera.</li>
            <li>Sinking funds y planificación de emergencias.</li>
            <li>Hábitos de registro por voz.</li>
            <li>Finanzas conductuales para rutinas más calmadas.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Guías recientes
          </h2>
          <ol className="mt-6 flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/es/blog/${post.slug}`} className="group block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                    {post.category} - Actualizado{" "}
                    {formatBlogDateShort(post.dateModified)}
                  </p>
                  <h3 className="mt-2 text-balance text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
