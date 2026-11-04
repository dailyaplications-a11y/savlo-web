import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import OssLicensesPage from "@/components/savlo/oss-licenses-page"
import { ossLicensesStrings } from "@/lib/legal/oss-licenses-strings"

const t = ossLicensesStrings("pt")

// Página deliberadamente NO indexada: se llega desde Ajustes → Acerca de →
// Licencias de código abierto en la app, no navegando el sitio. Por eso va
// `noindex` en el HTML y NO un `Disallow` en robots.txt: bloquear el rastreo
// impide leer el `noindex`, y una URL bloqueada igual puede terminar indexada
// sin contenido. Tampoco entra al sitemap ni al pie de página.
export const metadata: Metadata = {
  title: t.title,
  description: t.metaDescription,
  alternates: { canonical: "/pt/licenses" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
}

export default function LicensesPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="pt" />
      <OssLicensesPage locale="pt" />
      <SiteFooter locale="pt" />
    </div>
  )
}
