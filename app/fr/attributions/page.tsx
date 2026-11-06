import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import attributionsData from "@/lib/legal/attributions-fr.json"

export const metadata: Metadata = {
  title: attributionsData.title,
  description: attributionsData.description,
  alternates: {
    canonical: "/fr/attributions",
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
      <LegalPage data={attributionsData} locale="fr" type="attributions" />
      <SiteFooter locale="fr" />
    </div>
  )
}
