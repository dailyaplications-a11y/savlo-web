import { blogDateLocale, type Locale } from "@/lib/i18n"
import { ossLicenses, type OssPackage } from "@/lib/legal/oss-licenses"
import { ossLicensesStrings } from "@/lib/legal/oss-licenses-strings"
import { OssLicenseFilter } from "./oss-license-filter"

const ORIGIN_ORDER: OssPackage["origin"][] = ["package", "engine", "font"]

// La MPL-2.0 es la única de la lista que pide algo más que reproducir el aviso
// (acceso al fuente de sus archivos), así que se marca distinto. El resto de
// las familias son permisivas; "Copyright notice" es un encabezado suelto que
// no otorga permisos por sí solo y se pinta apagado.
function badgeClass(family: string) {
  if (family === "MPL-2.0") return "border-accent/40 bg-accent/10 text-accent"
  if (family === "Copyright notice") return "border-border bg-surface text-muted-foreground"
  return "border-primary/30 bg-primary/10 text-primary"
}

function familyLabel(family: string, copyrightNoticeLabel: string) {
  return family === "Copyright notice" ? copyrightNoticeLabel : family
}

export default function OssLicensesPage({ locale }: { locale: Locale }) {
  const t = ossLicensesStrings(locale)
  const data = ossLicenses

  const generatedDate = new Date(`${data.generatedAt}T00:00:00Z`).toLocaleDateString(blogDateLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-36">
      <header>
        <h1 className="font-serif text-4xl font-medium uppercase leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-3 text-[13px] text-muted-foreground">
          {t.subtitle.replace("{version}", data.appVersion)}
        </p>
      </header>

      <OssLicenseFilter
        total={data.packageCount}
        placeholder={t.searchPlaceholder}
        showingAll={t.showingAll}
        showingSome={t.showingSome}
        emptyLabel={t.searchEmpty}
      />

      {ORIGIN_ORDER.map((origin) => {
        const packages = data.packages.filter((pkg) => pkg.origin === origin)
        if (packages.length === 0) return null

        return (
          <section key={origin} data-oss-group={origin} className="mt-10 scroll-mt-24">
            <h2 className="font-serif text-xl font-semibold uppercase text-foreground">
              {t.groups[origin]}
              <span className="ml-2 font-sans text-[12px] font-normal tabular-nums text-muted-foreground">
                {packages.length}
              </span>
            </h2>

            <ul className="mt-4 space-y-2">
              {packages.map((pkg) => (
                <li
                  key={pkg.slug}
                  data-oss-haystack={`${pkg.name} ${pkg.version ?? ""} ${pkg.families.join(" ")}`.toLowerCase()}
                >
                  <details
                    id={`c-${pkg.slug}`}
                    className="group overflow-hidden rounded-[var(--radius-sm)] border border-border bg-surface transition-colors open:bg-surface-2/40 hover:border-border/80"
                  >
                    <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-3 gap-y-2 px-4 py-3 [&::-webkit-details-marker]:hidden">
                      {/* Los nombres largos de pub (`flutter_secure_storage_platform_interface`)
                          son UNA palabra sin espacios: sin `break-words` se salen de la tarjeta
                          en 375 dp, que es el ancho desde el que llega casi todo el tráfico. */}
                      <span className="min-w-0 break-words font-mono text-[14px] text-foreground">{pkg.name}</span>
                      {pkg.version && (
                        <span className="font-mono text-[12px] tabular-nums text-muted-foreground">{pkg.version}</span>
                      )}
                      <span className="ml-auto flex flex-wrap items-center gap-1.5">
                        {pkg.families.map((family) => (
                          <span
                            key={family}
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeClass(family)}`}
                          >
                            {familyLabel(family, t.familyCopyrightNotice)}
                          </span>
                        ))}
                        <span className="text-[11px] tabular-nums text-muted-foreground/70">
                          {t.noticeCount(pkg.notices.length)}
                        </span>
                      </span>
                    </summary>

                    <div className="space-y-4 border-t border-border/60 px-4 py-4">
                      {pkg.notices.map((notice, index) => (
                        <article key={index}>
                          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                            {familyLabel(notice.family, t.familyCopyrightNotice)}
                          </p>
                          {notice.shared.length > 0 && (
                            <p className="mt-1 text-[11px] text-muted-foreground/70">
                              {t.alsoCovers} {notice.shared.join(", ")}
                            </p>
                          )}
                          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words rounded-[var(--radius-sm)] bg-background/60 p-3 font-mono text-[11.5px] leading-relaxed text-foreground/80">
                            {notice.text}
                          </pre>
                        </article>
                      ))}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      {/* La letra chica va al pie, no arriba de la lista. `footerMpl` no es
          color: es lo que pide la MPL-2.0 §3.2 —informar dónde se consigue el
          fuente de sus archivos cuando se distribuye el ejecutable—, y es la
          única de las licencias de la lista que obliga a algo más que
          reproducir el aviso. Si algún día no queda ningún componente MPL, esa
          línea se va con ellos. */}
      <footer className="mt-16 space-y-2 border-t border-border/40 pt-8 text-[11.5px] leading-relaxed text-muted-foreground/60">
        <p>{t.footerGenerated.replace("{date}", generatedDate)}</p>
        <p>{t.footerMpl}</p>
        <p>{t.footerNote}</p>
      </footer>
    </main>
  )
}
