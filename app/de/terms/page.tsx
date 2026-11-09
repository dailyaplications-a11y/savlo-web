import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import termsData from "@/lib/legal/terms-de.json"

export const metadata: Metadata = {
  title: termsData.title,
  description: termsData.description,
  alternates: {
    canonical: "/de/terms",
    languages: {
      en: "https://www.savloapp.com/terms",
      es: "https://www.savloapp.com/es/terms",
      "pt-BR": "https://www.savloapp.com/pt/terms",
      "de-DE": "https://www.savloapp.com/de/terms",
      "fr-FR": "https://www.savloapp.com/fr/terms",
      "x-default": "https://www.savloapp.com/terms",
    },
  },
}

export default function TermsPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={termsData} locale="de" type="terms" />
      <SiteFooter locale="de" />
    </div>
  )
}
