import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import arrepentimientoData from "@/lib/legal/arrepentimiento-es.json"
import { ARREPENTIMIENTO_LANGUAGES } from "@/lib/legal/arrepentimiento"

// Página exigida por la Disposición 954/2025 (Subsecretaría de Defensa del
// Consumidor y Lealtad Comercial), que reemplazó a la Resolución 424/2020.
//
// Esta es la versión que vale legalmente. Desde el 2026-11-05 la web la
// traduce a los otros cuatro idiomas (dueño: "todas las páginas en los 5
// idiomas"); cada traducción lo dice y enlaza aquí, y el rótulo "BOTÓN DE
// ARREPENTIMIENTO" queda literal en todas. El pie la enlaza desde los cinco
// idiomas, porque la norma pide que sea alcanzable "a simple vista y en el
// primer acceso".
export const metadata: Metadata = {
  title: arrepentimientoData.title,
  description: arrepentimientoData.description,
  alternates: {
    canonical: "/es/arrepentimiento",
    languages: ARREPENTIMIENTO_LANGUAGES,
  },
}

export default function ArrepentimientoPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage
        data={arrepentimientoData}
        locale="es"
        type="delete-account"
      />
      <SiteFooter locale="es" />
    </div>
  )
}
