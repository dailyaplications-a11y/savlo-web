import type { Locale } from "@/lib/i18n"

// Cromo de /licenses. Los avisos en sí NO se traducen: se reproducen verbatim
// en su idioma original, que es la única forma de reproducir una licencia.
//
// Es a propósito que arriba de la lista no haya nada más que el título, la
// versión y el buscador. La página es un índice, no un artículo: quien llega
// viene de tocar una fila en Ajustes y quiere ver los nombres. Lo único que
// sobrevive en prosa está al PIE, porque es lo que pide la MPL-2.0 (decir
// dónde se consigue el fuente) y no una explicación nuestra.
export type OssLicensesStrings = {
  title: string
  metaDescription: string
  subtitle: string
  familyCopyrightNotice: string
  searchPlaceholder: string
  searchEmpty: string
  showingAll: string
  showingSome: string
  groups: Record<"package" | "engine" | "font", string>
  noticeCount: (count: number) => string
  alsoCovers: string
  footerGenerated: string
  footerMpl: string
  footerNote: string
}

const strings: Record<Locale, OssLicensesStrings> = {
  en: {
    title: "Open source licenses",
    metaDescription:
      "Complete list of the open source components distributed inside the Savlo mobile app, with the full text of every license.",
    subtitle: "Savlo {version}",
    familyCopyrightNotice: "Copyright notice",
    searchPlaceholder: "Filter by name or license…",
    searchEmpty: "No component matches that filter.",
    showingAll: "{total} components",
    showingSome: "{count} of {total} components",
    groups: {
      package: "Dart and Flutter packages",
      engine: "Engine and platform components",
      font: "Brand typefaces",
    },
    noticeCount: (count) => (count === 1 ? "1 notice" : `${count} notices`),
    alsoCovers: "This notice also covers:",
    footerGenerated:
      "Generated on {date} from the app build itself. The same notices ship inside the app package.",
    footerMpl:
      "dbus, gtk, nm and the Dart SDK's fallback root certificates are under the Mozilla Public License 2.0 and ship unmodified — write to support@savloapp.com for their source.",
    footerNote:
      "Missing an attribution, or credited incorrectly? Write to support@savloapp.com and we will fix it.",
  },
  es: {
    title: "Licencias de código abierto",
    metaDescription:
      "Lista completa de los componentes de código abierto que distribuye la app de Savlo, con el texto completo de cada licencia.",
    subtitle: "Savlo {version}",
    familyCopyrightNotice: "Aviso de copyright",
    searchPlaceholder: "Filtrar por nombre o licencia…",
    searchEmpty: "Ningún componente coincide con ese filtro.",
    showingAll: "{total} componentes",
    showingSome: "{count} de {total} componentes",
    groups: {
      package: "Paquetes de Dart y Flutter",
      engine: "Componentes del motor y de la plataforma",
      font: "Tipografías de marca",
    },
    noticeCount: (count) => (count === 1 ? "1 aviso" : `${count} avisos`),
    alsoCovers: "Este aviso cubre también:",
    footerGenerated:
      "Generada el {date} desde el propio build de la app. Esos mismos avisos viajan dentro del paquete de la app.",
    footerMpl:
      "dbus, gtk, nm y los certificados raíz de respaldo del SDK de Dart están bajo la Mozilla Public License 2.0 y se distribuyen sin modificar; escríbenos a support@savloapp.com por su código fuente.",
    footerNote:
      "¿Falta una atribución o está mal acreditada? Escríbenos a support@savloapp.com y lo corregimos.",
  },
  pt: {
    title: "Licenças de código aberto",
    metaDescription:
      "Lista completa dos componentes de código aberto distribuídos dentro do aplicativo Savlo, com o texto integral de cada licença.",
    subtitle: "Savlo {version}",
    familyCopyrightNotice: "Aviso de copyright",
    searchPlaceholder: "Filtrar por nome ou licença…",
    searchEmpty: "Nenhum componente corresponde a esse filtro.",
    showingAll: "{total} componentes",
    showingSome: "{count} de {total} componentes",
    groups: {
      package: "Pacotes Dart e Flutter",
      engine: "Componentes do motor e da plataforma",
      font: "Tipografias da marca",
    },
    noticeCount: (count) => (count === 1 ? "1 aviso" : `${count} avisos`),
    alsoCovers: "Este aviso também cobre:",
    footerGenerated:
      "Gerada em {date} a partir do próprio build do aplicativo. Esses mesmos avisos viajam dentro do pacote do aplicativo.",
    footerMpl:
      "dbus, gtk, nm e os certificados raiz de reserva do SDK do Dart estão sob a Mozilla Public License 2.0 e são distribuídos sem modificações; escreva para support@savloapp.com para obter o código-fonte.",
    footerNote:
      "Falta uma atribuição ou está creditada de forma incorreta? Escreva para support@savloapp.com e nós corrigimos.",
  },
  de: {
    title: "Open-Source-Lizenzen",
    metaDescription:
      "Vollständige Liste der Open-Source-Komponenten, die in der Savlo-App ausgeliefert werden, mit dem vollständigen Text jeder Lizenz.",
    subtitle: "Savlo {version}",
    familyCopyrightNotice: "Copyright-Hinweis",
    searchPlaceholder: "Nach Name oder Lizenz filtern…",
    searchEmpty: "Keine Komponente passt zu diesem Filter.",
    showingAll: "{total} Komponenten",
    showingSome: "{count} von {total} Komponenten",
    groups: {
      package: "Dart- und Flutter-Pakete",
      engine: "Engine- und Plattform-Komponenten",
      font: "Marken-Schriften",
    },
    noticeCount: (count) => (count === 1 ? "1 Hinweis" : `${count} Hinweise`),
    alsoCovers: "Dieser Hinweis gilt auch für:",
    footerGenerated:
      "Am {date} aus dem App-Build selbst erzeugt. Dieselben Hinweise liegen im App-Paket selbst.",
    footerMpl:
      "dbus, gtk, nm und die Fallback-Wurzelzertifikate des Dart-SDK stehen unter der Mozilla Public License 2.0 und werden unverändert ausgeliefert; für den Quellcode schreib an support@savloapp.com.",
    footerNote:
      "Fehlt eine Nennung oder ist sie falsch? Schreib an support@savloapp.com, wir korrigieren das.",
  },
  fr: {
    title: "Licences open source",
    metaDescription:
      "Liste complète des composants open source distribués dans l'application Savlo, avec le texte intégral de chaque licence.",
    subtitle: "Savlo {version}",
    familyCopyrightNotice: "Avis de copyright",
    searchPlaceholder: "Filtrer par nom ou licence…",
    searchEmpty: "Aucun composant ne correspond à ce filtre.",
    showingAll: "{total} composants",
    showingSome: "{count} composants sur {total}",
    groups: {
      package: "Paquets Dart et Flutter",
      engine: "Composants du moteur et de la plateforme",
      font: "Typographies de marque",
    },
    noticeCount: (count) => (count === 1 ? "1 avis" : `${count} avis`),
    alsoCovers: "Cet avis couvre également :",
    footerGenerated:
      "Générée le {date} à partir du build de l'application. Ces mêmes avis voyagent dans le paquet de l'application.",
    footerMpl:
      "dbus, gtk, nm et les certificats racine de secours du SDK Dart sont sous Mozilla Public License 2.0 et distribués sans modification ; écrivez à support@savloapp.com pour obtenir leur source.",
    footerNote:
      "Une attribution manque ou est erronée ? Écrivez à support@savloapp.com et nous la corrigerons.",
  },
}

export function ossLicensesStrings(locale: Locale): OssLicensesStrings {
  return strings[locale]
}
