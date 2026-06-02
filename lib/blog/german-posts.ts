import { posts, type BlogCategory } from "@/lib/blog/posts"

export type GermanBlogPost = {
  slug: string
  title: string
  description: string
  category: BlogCategory
  date: string
  dateModified: string
  keywords: string[]
  readingTime: number
  summary: string[]
  sections: {
    heading: string
    body: string[]
  }[]
}

const englishPostBySlug = new Map(posts.map((post) => [post.slug, post]))

function fromEnglish(slug: string) {
  const post = englishPostBySlug.get(slug)
  if (!post) throw new Error(`Missing English post for ${slug}`)
  return post
}

const overrides = {
  "how-to-make-a-budget": {
    title: "Wie man ein Budget erstellt: ein ruhiger Schritt-für-Schritt-Leitfaden",
    description:
      "Lerne, wie du ein realistisches Monatsbudget aufbaust, deine Ausgaben verstehst und wieder ohne Druck auf dein Geld schaust.",
    summary: [
      "Ein Budget sollte sich nicht wie eine finanzielle Diät anfühlen. Es hilft dir, vor dem Ausgeben zu entscheiden statt danach zu schuetzen.",
      "Am nachhaltigsten wird es mit Netto-Einkommen, wenigen Kategorien, einem Notgroschen und einer kurzen Wochenroutine.",
    ],
    sections: [
      {
        heading: "Starte mit dem Geld, das wirklich ankommt",
        body: [
          "Nutze dein Netto-Einkommen, nicht das Brutto. Wenn dein Einkommen schwankt, nimm den schwächeren Monat als Basis und lasse die besseren Monate als Puffer.",
          "So baust du keinen Plan auf Wunschdenken. Ein hilfreiches Budget muss einen normalen Monat ueberstehen, nicht nur den idealen.",
        ],
      },
      {
        heading: "Arbeite mit wenigen Kategorien",
        body: [
          "Die meisten geben ein Budget auf, weil sie zu fein unterteilen. Starte mit Miete, Lebensmittel, Transport, Gesundheit, Schulden, Sparen, Ziele und persoenlichen Ausgaben.",
          "Danach kannst du Methoden wie die 50/30/20-Regel oder ein Nullbudget ausprobieren. Wichtiger als die Methode ist, dass du jede Woche wieder hinschaust.",
        ],
      },
      {
        heading: "Pruefe einmal pro Woche",
        body: [
          "Jeden Tag aufs Geld zu schauen kann nervoes machen. Nur am Monatsende zu schauen ist zu spaet. Eine kurze Wochenpruefung von zehn Minuten liegt meist genau richtig.",
          "Savlo ist fuer diesen Rhythmus gebaut: schnell erfassen, nach Spaces und Funds trennen und ohne schrille rote Zahlen weitermachen.",
        ],
      },
    ],
  },
  "50-30-20-rule": {
    title: "Die 50/30/20-Regel: so setzt du sie ohne Stress um",
    description:
      "Die 50/30/20-Regel erklaert mit einem flexiblen Blick auf Bedürfnisse, Wünsche und die finanzielle Zukunft.",
    summary: [
      "Die 50/30/20-Regel teilt dein Einkommen in Bedürfnisse, Wünsche und Zukunft auf. Sie ist ein Kompass, kein Urteil.",
      "Am besten funktioniert sie, wenn du sie an deine Stadt, dein Einkommen und deine Lebensphase anpasst.",
    ],
    sections: [
      {
        heading: "Was die einzelnen Anteile bedeuten",
        body: [
          "50 Prozent decken Bedürfnisse ab: Wohnen, Grundnahrungsmittel, Transport, Gesundheit, Versicherungen und Mindestzahlungen bei Schulden.",
          "30 Prozent sind fuer Wünsche da: Essen gehen, Abos, Hobbys und nicht notwendige Kauefe. Die restlichen 20 Prozent gehen in die Zukunft: Sparen, Investieren, Schuldenabbau und konkrete Ziele.",
        ],
      },
      {
        heading: "Wann du die Regel anpassen solltest",
        body: [
          "Wenn du in einer teuren Stadt lebst, koennen deine Bedürfnisse leicht bei 60 Prozent liegen. Das ist kein Scheitern, sondern Realitaet.",
          "Hilfreich ist die Regel dann, wenn sie Entscheidungen vereinfacht, nicht wenn sie Schuldgefuehle ausloest, weil dein Leben anders aussieht als im Beispiel.",
        ],
      },
    ],
  },
  "best-mint-alternatives-2025": {
    title: "Die besten Mint-Alternativen 2025",
    description:
      "Was nach dem Ende von Mint wichtig ist: Privatsphaere, Preis, Bedienbarkeit und Alternativen ohne zwingende Bankverknuepfung.",
    summary: [
      "Nach Mint suchen viele nach einer App, die Geld nicht in ein weiteres lautes Dashboard verwandelt.",
      "Die beste Alternative haengt davon ab, was dir wichtiger ist: Automatisierung, Kontrolle, Privatsphaere oder eine ruhigere Bedienung.",
    ],
    sections: [
      {
        heading: "Worauf du zuerst achten solltest",
        body: [
          "Pruefe, ob die App Bankkonten verknuepfen muss, was mit deinen Daten passiert, was sie nach der Testphase kostet und ob du deine Daten exportieren kannst.",
          "Auch das Gefuehl der Nutzung zaehlt. Wenn dich eine App nervoes macht, wirst du sie seltener oeffnen, genau dann, wenn du sie am meisten brauchst.",
        ],
      },
      {
        heading: "Wo Savlo hineinpasst",
        body: [
          "Savlo positioniert sich als ruhigere Alternative: Spracheingabe, CSV/XLSX-Importe, getrennte Spaces und Sinking Funds.",
          "Es will kein aggressives Kontrollzentrum sein. Es soll dir helfen, dein Geld mit weniger Reibung wieder anzuschauen.",
        ],
      },
    ],
  },
  "emergency-fund-vs-sinking-fund": {
    title: "Notgroschen vs. Sinking Fund: worin liegt der Unterschied?",
    description:
      "Lerne, echte Notfaelle von planbaren Ausgaben zu trennen, damit du mit mehr Klarheit sparen kannst.",
    summary: [
      "Der Notgroschen schuetzt vor dem Unerwarteten. Ein Sinking Fund bereitet grosse Ausgaben vor, die du kommen sehen kannst.",
      "Wenn du beides trennst, greifst du seltener in die Reserve fuer Urlaub, Geschenke oder Wartung.",
    ],
    sections: [
      {
        heading: "Wann du einen Notgroschen nutzt",
        body: [
          "Nutze ihn fuer Einkommensverlust, dringende Reparaturen, Gesundheit oder Situationen, die nicht im Kalender standen.",
          "Das Ziel ist nicht Rendite, sondern Ruhe. Es ist Geld, das dir mental Luft verschafft.",
        ],
      },
      {
        heading: "Wann du einen Sinking Fund nutzt",
        body: [
          "Nutze ihn fuer planbare Ausgaben: Urlaub, Steuern, Geschenke, Autowartung, Umzug oder neue Technik.",
          "Jeder Fonds bekommt einen Namen und einen Zweck. Diese Beschriftung hilft dem Kopf, nicht alles in einen einzigen unklaren Topf zu werfen.",
        ],
      },
    ],
  },
  "why-traditional-budgets-fail": {
    title: "Warum traditionelle Budgets scheitern: die Antwort der Verhaltensfinanzen",
    description:
      "Drei psychologische Muster erklaeren, warum wir Budget-Apps oft aufgeben. Erfahre, wie ein ruhiges, verhaltensbasiertes Design besser mit deinem Kopf arbeitet.",
    summary: [
      "Viele Budgets scheitern, weil sie wie Strafe wirken. Wenn ein System schaemt, will man es nicht mehr ansehen.",
      "Ein besseres Design senkt Reibung, spricht freundlich und macht die Rueckkehr nach einem Fehler leicht.",
    ],
    sections: [
      {
        heading: "Schuldgefuehle schaffen keine Konstanz",
        body: [
          "Rote Warnungen und Fehlermeldungen koennen einen Tag lang motivieren, aber sie bauen selten eine stabile Beziehung zum Geld auf.",
          "Konstanz entsteht, wenn das System leicht wieder aufnehmbar ist. Ein verlassenes Budget braucht weniger Bedrohung, nicht mehr Druck.",
        ],
      },
      {
        heading: "Reibung ist entscheidend",
        body: [
          "Wenn das Erfassen einer Ausgabe zu lange dauert, macht dein muedes Ich es nicht. Deshalb setzt Savlo auf kurze Check-ins, Sprache und Importe.",
          "Das Ziel ist, dass die Gewohnheit leicht bleibt, bevor sie Disziplin verlangt.",
        ],
      },
    ],
  },
  "voice-expense-tracking": {
    title: "Ausgaben per Sprache erfassen: der schnellste Weg, deine Ausgaben festzuhalten",
    description:
      "Wie Spracheingabe funktioniert, fuer wen sie gedacht ist und worauf du bei einer App achten solltest.",
    summary: [
      "Jede Ausgabe einzutippen wirkt klein, bis man es taeglich tun muss. Laut zu sprechen senkt die Reibung deutlich.",
      "Spracheingabe funktioniert besonders gut fuer Alltagskaeufe, Essen, Transport und Ausgaben, die man sonst schnell vergisst.",
    ],
    sections: [
      {
        heading: "Warum das hilft",
        body: [
          "Sprache erfasst die Ausgabe nahe am echten Moment. Das reduziert Vergessen und spart dir den Umweg ueber spaeteres Rekonstruieren.",
          "Es fuehlt sich auch weniger administrativ an. Fuer viele entscheidet genau das, ob die Gewohnheit haelt oder nicht.",
        ],
      },
      {
        heading: "Was du in einer App pruefen solltest",
        body: [
          "Achte auf klare Angaben zu Privatsphaere, unterstuetzten Sprachen, manueller Bearbeitung, Kategorien und Export.",
          "Die beste App ist die, die du wirklich oeffnest. Ein schoener Pitch allein bringt nichts.",
        ],
      },
    ],
  },
  "financial-anxiety": {
    title: "Warum Geld uns nervoes macht (und 7 taegliche Gewohnheiten, die es beruhigen)",
    description:
      "Finanzielle Angst haengt nicht nur davon ab, wie viel du verdienst. Lerne kleine, taegliche Praktiken, die den Druck senken und die Beziehung zu Geld beruhigen.",
    summary: [
      "Finanzielle Angst ist nicht nur eine Frage der Hoehe des Einkommens. Oft geht es auch um Unsicherheit, Vergleich und alte Erfahrungen.",
      "Kleine, wiederholbare Gewohnheiten helfen mehr als grosse Motivationsschuebe, die nach zwei Tagen verschwinden.",
    ],
    sections: [
      {
        heading: "Trenne Gefuehl und Fakten",
        body: [
          "Schau zuerst auf konkrete Zahlen: Einnahmen, Ausgaben, Schulden, Ruecklagen und echte Risiken.",
          "Wenn das Gefuehl lauter ist als die Daten, hilft ein ruhiger Fakten-Check oft mehr als noch eine weitere Planungsrunde.",
        ],
      },
      {
        heading: "Baue kleine Beruhigungsroutinen auf",
        body: [
          "Ein kurzer woechentlicher Check-in, ein klares Sparziel und weniger spontane Entscheidungen koennen viel Last aus dem Alltag nehmen.",
          "Das Ziel ist nicht, jedes Gefuehl zu kontrollieren. Das Ziel ist, dem System wieder Verlaesslichkeit zu geben.",
        ],
      },
    ],
  },
  "sinking-funds": {
    title: "Sinking Funds: der komplette Leitfaden zum entspannten Sparen",
    description:
      "Ein Sinking Fund verwandelt grosse, planbare Ausgaben in kleine monatliche Ruecklagen. Lerne, wie du Fonds fuer Reisen, Feiertage und Autowartung anlegst.",
    summary: [
      "Ein Sinking Fund macht grosse, absehbare Ausgaben kleiner und planbarer.",
      "Wenn du jeden Fonds klar benennst, wird Sparen weniger abstrakt und deutlich leichter durchzuhalten.",
    ],
    sections: [
      {
        heading: "Wofuer ein Sinking Fund gedacht ist",
        body: [
          "Nutze ihn fuer Ausgaben, die nicht jeden Monat kommen, aber sicher irgendwann auftauchen: Urlaub, Versicherungen, Geschenke, Reparaturen oder Technik.",
          "Wichtig ist die Planbarkeit. Ein Fonds ist kein Notgroschen, sondern ein vorbereitetes Ziel mit Datum im Kopf.",
        ],
      },
      {
        heading: "So startest du einfach",
        body: [
          "Beginne mit wenigen Fonds und einem kleinen monatlichen Beitrag. Wenn alles sofort umgebaut werden muss, gibt man schneller auf.",
          "Die ruhige Variante erlaubt dir, Geld zwischen Fonds zu verschieben, ohne es als Scheitern zu sehen.",
        ],
      },
    ],
  },
  "zero-based-budgeting": {
    title: "Nullbasiertes Budgetieren: ein ruhiger, moderner Ansatz",
    description:
      "Gib jedem Euro vor dem Ausgeben einen Auftrag. So funktioniert Nullbudgetieren, welche Vorteile es hat und wie du anfängst, ohne dich eingeengt zu fuehlen.",
    summary: [
      "Beim nullbasierten Budgetieren bekommt jeder Euro vor dem Ausgeben eine Aufgabe. So bleibt am Ende nichts vage 'irgendwo' liegen.",
      "Das Verfahren hilft, weil es Geld klarer macht und weniger spontane Entscheidungen braucht.",
    ],
    sections: [
      {
        heading: "Wie es funktioniert",
        body: [
          "Addiere dein Einkommen und verteile es komplett auf Kategorien wie Fixkosten, Sparen, Schulden, Ziele und flexible Ausgaben.",
          "Wenn die Summe bei null endet, ist nichts verloren gegangen. Jeder Euro hat einen Job.",
        ],
      },
      {
        heading: "Wann es besonders hilft",
        body: [
          "Nullbasiertes Budgetieren ist stark, wenn du mehr Kontrolle moechtest, ohne alles im Kopf behalten zu muessen.",
          "Es passt besonders gut zu Menschen, die klare Entscheidungen lieber als diffuse Puffer haben.",
        ],
      },
    ],
  },
  "how-to-get-out-of-debt": {
    title: "Wie man aus Schulden herauskommt, ohne sich schuldig zu fuehlen",
    description:
      "Schulden-Schneeball gegen Schulden-Avalanche, ohne Urteil. Lerne eine menschliche Strategie, um Kreditkarten und Kredite motiviert abzubauen.",
    summary: [
      "Schuldenabbau braucht Zahlen, aber auch Motivation. Die beste Methode ist die, die du an einem mue­den Tag noch durchhalten kannst.",
      "Die Avalanche spart mehr Zinsen; der Schneeball gibt oft schneller psychologische Erfolge.",
    ],
    sections: [
      {
        heading: "Sortiere deine Schulden",
        body: [
          "Schreibe Saldo, Zinssatz, Mindestzahlung und Faelligkeit auf. Schuetze zuerst die Mindestzahlungen, damit keine Zusatzkosten entstehen.",
          "Dann waehlst du die Strategie: hoechster Zinssatz fuer Effizienz oder kleinster Saldo fuer mehr Motivation.",
        ],
      },
      {
        heading: "Baue einen kleinen Puffer auf",
        body: [
          "Ein Schuldenplan ohne kleinen Notgroschen bricht oft beim ersten unvorhergesehenen Ereignis zusammen.",
          "Schon ein kleiner Puffer hilft, nicht bei jeder ploetzlichen Ausgabe wieder zur Karte zu greifen.",
        ],
      },
    ],
  },
  "money-dysmorphia": {
    title: "Money Dysmorphie: warum du dich pleite fuehlst, obwohl du es nicht bist",
    description:
      "Money Dysmorphie beschreibt das Gefuehl, finanziell leer zu sein, obwohl die Zahlen okay sind. Hier ist, was dahintersteckt und wie du es entwirren kannst.",
    summary: [
      "Money Dysmorphie beschreibt die Luecke zwischen deiner finanziellen Realitaet und dem Gefuehl, das diese Realitaet ausloest.",
      "Sie kann durch sozialen Vergleich, Familiengeschichte, finanzielle Erfahrungen oder immer wieder verrutschende Ziele entstehen.",
    ],
    sections: [
      {
        heading: "Gefuehl und Daten sind nicht dasselbe",
        body: [
          "Das Gefuehl, knapp zu sein, bedeutet nicht automatisch, dass die Zahlen wirklich schlecht sind. Trotzdem sollte man es nicht wegdruecken.",
          "Der erste Schritt ist ein Blick auf die Fakten: Ausgaben, Schulden, Ruecklagen, Einkommen und echte Risiken.",
        ],
      },
      {
        heading: "Vergleiche weniger",
        body: [
          "Soziale Netzwerke verzerren, was normal erscheint. Wenn dein Massstab immer jemand mit mehr Einkommen ist, reicht nie eine Zahl aus.",
          "Definiere dein eigenes genug, bevor du das von jemand anderem jagst.",
        ],
      },
    ],
  },
  "ynab-vs-monarch-vs-savlo": {
    title: "YNAB vs Monarch vs Savlo: ein ehrlicher Vergleich 2026",
    description:
      "Drei Personal-Finance-Apps, drei unterschiedliche Philosophien. Vergleiche YNAB, Monarch und Savlo und finde die App, die du auch in sechs Monaten noch nutzt.",
    summary: [
      "YNAB, Monarch und Savlo loesen nicht genau dasselbe emotionale Problem. Wer nur Features vergleicht, kann sich leicht verheddern.",
      "Die nuetzliche Frage ist: Welche Art Beziehung willst du zu deinem Geld haben?",
    ],
    sections: [
      {
        heading: "YNAB und Monarch",
        body: [
          "YNAB ist stark bei proaktivem Kontrollieren und Nullbudget. Es verlangt regelmaessige Beteiligung und eine klare Lernkurve.",
          "Monarch punktet als breites Finanz-Dashboard, besonders fuer Vermoegen, verknuepfte Konten und geteilte Finanzen.",
        ],
      },
      {
        heading: "Wo Savlo hineinpasst",
        body: [
          "Savlo richtet sich an Menschen, die ihre Finanzen meiden, weil sich die Erfahrung schwer oder nervoes anfuellt.",
          "Der Fokus liegt auf Sprache, Spaces, Sinking Funds, Import/Export und einem weniger strafenden Design.",
        ],
      },
    ],
  },
} as const

type GermanSlug = keyof typeof overrides

function buildPost(slug: GermanSlug): GermanBlogPost {
  const base = fromEnglish(slug)
  const override = overrides[slug]

  return {
    slug,
    title: override.title,
    description: override.description,
    category: base.category,
    date: base.date,
    dateModified: base.dateModified,
    keywords: base.keywords,
    readingTime: base.readingTime,
    summary: override.summary,
    sections: override.sections,
  }
}

export const germanPosts = (Object.keys(overrides) as GermanSlug[]).map((slug) =>
  buildPost(slug),
)

export function getGermanPostBySlug(slug: string): GermanBlogPost | undefined {
  return germanPosts.find((post) => post.slug === slug)
}
