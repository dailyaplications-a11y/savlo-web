import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import attributionsData from "@/lib/legal/attributions-pt.json"

export const metadata: Metadata = {
  title: attributionsData.title,
  description: attributionsData.description,
  alternates: {
    canonical: "/pt/attributions",
    languages: {
      en: "https://savloapp.com/attributions",
      es: "https://savloapp.com/es/attributions",
      "pt-BR": "https://savloapp.com/pt/attributions",
      "de-DE": "https://savloapp.com/de/attributions",
      "fr-FR": "https://savloapp.com/fr/attributions",
      "x-default": "https://savloapp.com/attributions",
    },
  },
}

export default function AttributionsPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="pt" />
      <LegalPage data={attributionsData} locale="pt" type="attributions" />
      <SiteFooter locale="pt" />
    </div>
  )
}
