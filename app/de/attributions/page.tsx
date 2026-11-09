import type { Metadata } from "next"
import { notInSearch } from "@/lib/site"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import attributionsData from "@/lib/legal/attributions-de.json"

// reachable (footer, app, Google Play), but not a search result: lib/site.ts
export const metadata: Metadata = {
  robots: notInSearch,
  title: attributionsData.title,
  description: attributionsData.description,
  alternates: {
    canonical: "/de/attributions",
    languages: {
      en: "https://www.savloapp.com/attributions",
      es: "https://www.savloapp.com/es/attributions",
      "pt-BR": "https://www.savloapp.com/pt/attributions",
      "de-DE": "https://www.savloapp.com/de/attributions",
      "fr-FR": "https://www.savloapp.com/fr/attributions",
      "x-default": "https://www.savloapp.com/attributions",
    },
  },
}

export default function AttributionsPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={attributionsData} locale="de" type="attributions" />
      <SiteFooter locale="de" />
    </div>
  )
}
