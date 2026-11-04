import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import helpData from "@/lib/legal/help-pt.json"

// La app abre esta URL desde Ajustes -> Ayuda y comunidad
// (`help_community_screen.dart`). Antes no existia: el usuario tocaba y no
// pasaba nada, porque `_launchUrl` descarta el fallo en silencio.
export const metadata: Metadata = {
  title: helpData.title,
  description: helpData.description,
  alternates: {
    canonical: "/pt/help",
    languages: {
      en: "https://savloapp.com/help",
      es: "https://savloapp.com/es/help",
      "pt-BR": "https://savloapp.com/pt/help",
      "de-DE": "https://savloapp.com/de/help",
      "fr-FR": "https://savloapp.com/fr/help",
      "x-default": "https://savloapp.com/help",
    },
  },
}

export default function HelpPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="pt" />
      <LegalPage data={helpData} locale="pt" type="help" />
      <SiteFooter locale="pt" />
    </div>
  )
}
