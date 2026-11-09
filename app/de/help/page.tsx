import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import helpData from "@/lib/legal/help-de.json"

// La app abre esta URL desde Ajustes -> Ayuda y comunidad
// (`help_community_screen.dart`). Antes no existia: el usuario tocaba y no
// pasaba nada, porque `_launchUrl` descarta el fallo en silencio.
export const metadata: Metadata = {
  title: helpData.title,
  description: helpData.description,
  alternates: {
    canonical: "/de/help",
    languages: {
      en: "https://www.savloapp.com/help",
      es: "https://www.savloapp.com/es/help",
      "pt-BR": "https://www.savloapp.com/pt/help",
      "de-DE": "https://www.savloapp.com/de/help",
      "fr-FR": "https://www.savloapp.com/fr/help",
      "x-default": "https://www.savloapp.com/help",
    },
  },
}

export default function HelpPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={helpData} locale="de" type="help" />
      <SiteFooter locale="de" />
    </div>
  )
}
