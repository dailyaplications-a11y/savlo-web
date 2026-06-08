import { posts, type BlogCategory } from "@/lib/blog/posts"
import type { RichArticle } from "@/lib/blog/rich-article"

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
  rich?: RichArticle
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
    title: "Finanzielle Angst: taegliche Gewohnheiten, die die Beziehung zu Geld beruhigen",
    description:
      "Finanzielle Angst haengt nicht nur davon ab, wie viel du verdienst. Lerne kleine, taegliche Praktiken, die den Druck senken.",
    readingTime: 20,
    summary: [
      "Finanzielle Angst mischt Zahlen, Erinnerungen, Vergleich und Angst. Sie laesst sich nicht mit einer Tabelle loesen.",
      "Kleine Rituale helfen: zu einer festen Zeit auf das Geld schauen, Freundlich-kategorien nutzen und Entscheidungen von Gefuehlen trennen.",
    ],
    sections: [
      {
        heading: "Schau seltener, aber besser",
        body: [
          "Kompulsives Pruefen kann den Stress erhoehen. Komplett vermeiden auch. Ein woechentliches, ruhiges Fenster funktioniert oft besser.",
          "Das Ziel ist, dass das Schauen deiner Finanzen aufhoert, eine emotionale Notlage zu sein.",
        ],
      },
      {
        heading: "Baue ein freundliches System auf",
        body: [
          "Gib deinen Fonds menschliche Namen, automatisiere wiederkehrendes und reduziere die Anzahl der taeglichen Entscheidungen.",
          "Eine ruhige App ersetzt keine professionelle Hilfe, wenn sie noetig ist, aber sie kann die Reibung beim Zurueckkehren zu deinen Zahlen deutlich senken.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Finanzielle Angst ist selten proportional zu dem Geld auf deinem Konto. Sie ist proportional der Menge an Unsicherheit, die du fühlst. Die taeglichen Gewohnheiten in diesem Leitfaden sind darauf ausgelegt, deine emotionale Belastung zu senken, bevor du überhaupt auf die Zahlen schaust. Sie ersetzen keine professionelle Hilfe, wenn die Angst schwerwiegend ist, aber sie sind ein Ausgangspunkt für jeden, der die Art verändern möchte, wie Geld ihn fühlen lässt.",
        },
        {
          kind: "h2",
          id: "was-finanzangst-ist",
          text: "Was finanzielle Angst wirklich ist",
        },
        {
          kind: "p",
          text: "Finanzielle Angst geht nicht um die Zahl auf deinem Konto. Menschen mit sechsstelligen Ersparnissen können um drei Uhr morgens aufwachen und sich fragen, ob sie genug haben, und Menschen mit nichts können ruhig schlafen. Die Angst entsteht aus der Kluft zwischen dem, was du hast, und dem, was du zu brauchen glaubst, kombiniert mit dem Gefühl, keine Kontrolle darüber zu haben, ob diese Kluft sich schließt. Es ist ein Gefühl, keine Bilanz.",
        },
        {
          kind: "p",
          text: "Das Gefühl hat normalerweise zwei Schichten. Die Oberfläche ist die unmittelbare Sorge: Kann ich die Miete bezahlen? Kann ich die Autoreparatur bezahlen? Wird meine Karte abgelehnt? Die tiefere Schicht ist die Geschichte, die du dir selbst erzählst, was die Zahl über dich aussagt. Die Oberfläche ist mit einem Plan lösbar. Die tiefere Schicht ist es, was die Angst auch dann bestehen lässt, wenn der Plan steht. Finanzielle Angst geht selten um das Geld selbst. Sie geht darum, was du glaubst, dass das Geld über deine Kompetenz, deinen Wert und deine Zukunft sagt.",
        },
        {
          kind: "p",
          text: "Der Begriff wird locker verwendet, aber die Erfahrung ist real. Sie kann als Dread auftreten, wenn du deine Banking-App öffnest, als Reizbarkeit nach einem Kauf, als Schlaflosigkeit in der Nacht vor dem Gehaltseingang, oder als ein ständiges leises Summen von Sorge, das dich überallhin begleitet. Sie braucht keine Krise. Sie braucht keine Schulden. Sie braucht keine Armut. Sie braucht nur den Glauben, dass du nicht sicher bist, und dieser Glaube ist oft von den Fakten entkoppelt.",
        },
        {
          kind: "h2",
          id: "warum-geld-angst-macht",
          text: "Warum Geld überhaupt Angst auslöst",
        },
        {
          kind: "p",
          text: "Geld ist eines der wenigen Themen, die jeden Teil des Lebens betreffen: Wohnen, Essen, Gesundheit, Beziehungen, Identität, Freiheit, Zeit. Wenn sich Geld unstabil anfühlt, fühlt sich jeder Teil des Lebens unstabil an. Die Angst ist nicht irrational. Es ist das Gehirn, das genau das tut, wofür es entworfen wurde: eine empfundene Bedrohung für das Überleben signalisiert. Das Problem ist, dass die Bedrohungsreaktion nicht zwischen einem echten Notfall und einer Benachrichtigung unterscheidet, dass dein Saldo niedriger ist als erwartet.",
        },
        {
          kind: "p",
          text: "Der zweite Grund, warum Geld Angst auslöst, ist, dass die meisten Menschen nie gelernt haben, darüber nachzudenken. Schulen lehren Algebra, nicht Zinseszins. Familien reden über Geld in gedämpften Tönen, oder gar nicht, oder in Streitgesprächen. Das Ergebnis ist, dass die meisten Erwachsenen ihre Finanzen mit dem emotionalen Werkzeugkasten eines Kindes angehen: das Thema meiden, sich schuldig fühlen, wenn es aufkommt, und hoffen, dass es sich von selbst löst. Das Meiden verschlimmert die Angst, denn je weniger du über deine finanzielle Situation weißt, desto mehr füllt dein Gehirn die Lücken mit worst-case-Szenarien.",
        },
        {
          kind: "p",
          text: "Der dritte Grund ist der Vergleich. Soziale Medien zeigen dir die Urlaube, Autos und Häuser anderer, ohne dir ihre Schulden, ihre Angst oder die 60-Stunden-Wochen zu zeigen, die den Kauf finanziert haben. Der Vergleich erschafft einen unsichtbaren Standard, an dem du dich misst, und der Standard ist unmöglich, weil er nicht real ist. Du vergleichst dein Inneres mit dem Äußeren eines anderen, und du wirst diesen Vergleich immer verlieren.",
        },
        {
          kind: "p",
          text: "Der vierte Grund ist Scham. Scham ist der Glaube, dass du das Problem bist, nicht dass du ein Problem hast. Finanzielle Scham sagt: Ich sollte wissen, wie das geht. Ich sollte weiter sein. Alle anderen haben das verstanden. Die Scham hält dich davon ab, um Hilfe zu bitten, auf die Zahlen zu schauen und die kleinen ersten Schritte zu machen, die die Angst tatsächlich reduzieren würden. Die Scham ist die beste Freundin der Angst, weil sie dich ruhig hält.",
        },
        {
          kind: "h2",
          id: "koerperliche-symptome",
          text: "Die körperlichen Symptome von finanziellem Stress",
        },
        {
          kind: "p",
          text: "Finanzieller Stress lebt nicht nur in deinem Kopf. Er zeigt sich in deinem Körper auf Arten, die leicht zu übersehen sind, weil sie nichts mit Geld zu tun zu haben scheinen. Kopfschmerzen, die am ersten des Monats auftreten, wenn die Miete fällig ist. Kieferspannung vom nächtlichen Knirschen. Magenprobleme, die aus dem Nichts zu kommen scheinen. Müdigkeit, die Schlaf nicht repariert. Ein Engegefühl in der Brust, wenn du eine E-Mail von deiner Bank siehst. Das ist nicht eingebildet. Das ist die Stressreaktion, die genau das tut, wofür sie entworfen wurde: deinen Körper auf Gefahr vorzubereiten. Das Problem ist, dass die Gefahr ein Gedanke über Geld ist, keine körperliche Bedrohung, und dein Körper kann keinen Unterschied machen.",
        },
        {
          kind: "p",
          text: "Die körperlichen Symptome erzeugen eine Rückkopplungsschleife. Du spürst den Kopfschmerz, und dein Gehirn interpretiert den Kopfschmerz als Beweis dafür, dass etwas nicht stimmt, was die Angst erhöht, was den Kopfschmerz erhöht. Die Schleife verstärkt sich selbst, und der einzige Weg, sie zu durchbrechen, ist, die Angst an ihrer Quelle zu behandeln: den Gedanken, nicht das Symptom. Der Körper beruhigt sich, wenn der Geist sich beruhigt, und der Geist beruhigt sich, wenn die Unsicherheit abnimmt. Die Gewohnheiten in diesem Leitfaden sind darauf ausgelegt, die Unsicherheit zu verringern, was die obere Lösung für die körperlichen Symptome ist.",
        },
        {
          kind: "p",
          text: "Die andere körperliche Wirkung von finanziellem Stress ist auf die Entscheidungsfindung. Stress schenkt deine Aufmerksamkeit der unmittelbaren Bedrohung, was nützlich ist, wenn ein Auto auf dich zufährt, aber zerstörerisch, wenn du versuchst, ein Budget zu planen. Unter Stress triffst du impulsivere Entscheidungen, was mehr finanzielle Probleme erzeugt, was mehr Stress erzeugt. Die Schleife ist bösartig und verbreitet. Der Weg, sie zu durchbrechen, ist, den Stress zu senken, bevor du die finanzielle Entscheidung triffst, nicht danach. Die folgenden Gewohnheiten sind darauf ausgelegt, genau das zu tun.",
        },
        {
          kind: "h2",
          id: "gewohnheiten",
          text: "Taegliche Gewohnheiten fuer finanziellen Frieden",
        },
        {
          kind: "ol",
          items: [
            "**Gewidmete Check-in-Fenster.** Prüfe deine Konten zu einem geplanten Zeitpunkt, nicht jedes Mal, wenn du eine Benachrichtigung erhältst. Der geplante Zeitpunkt gibt dir die Kontrolle darüber, wann du mit Geld interagierst. Die zufällige Benachrichtigung gibt dem Geld die Kontrolle darüber, wann es mit dir interagiert. Der Unterschied liegt darin, zu wählen, hinzuschauen, oder von einer Zahl überrascht zu werden.",
            "**Mach eine tiefe Einatmung.** Atme dreimal langsam ein, bevor du eine finanzielle App öffnest. Die drei Atemzüge sind kein Zaubertrick. Sie sind ein physiologischer Reset. Langsames Atmen aktiviert das parasympathische Nervensystem, also das System, das deinem Körper sagt, dass die Gefahr vorbei ist. Es wird die Angst nicht beseitigen, aber sie wird sie senken, sodass du klar denken kannst, anstatt in eine Spirale zu geraten.",
            "**Benutze sanfte Sprache.** Ersetze 'Ich habe zu viel ausgegeben' mit 'Ich beobachte meine Ausgabenmuster'. Der Unterschied ist nicht semantisch. Die erste Formulierung ist ein Urteil. Die zweite ist eine Beobachtung. Ein Urteil schließt das Gespräch. Eine Beobachtung öffnet es. Sanftere Sprache schafft Abstand zwischen dir und der Zahl, und in diesem Abstand lebt rationales Denken.",
            "**Konzentriere dich auf eine Zahl.** Überwältige dich nicht; wähle nur eine Kennzahl pro Sitzung aus. Vielleicht ist es der Girokontostand. Vielleicht ist es der Betrag in deinem Notgroschen. Vielleicht ist es der Betrag, den du diese Woche für Lebensmittel ausgegeben hast. Eine Zahl ist handhabbar. Fünf Zahlen gleichzeitig sind ein Rezept für Panik. Fang klein an, baue die Gewohnheit auf und lasse die Anzahl der Dinge, die du verfolgst, mit der Zeit natürlich wachsen.",
            "**Setze eine Sperrstunde.** Keine Finanzprüfungen oder Geldgespräche in der letzten Stunde vor dem Schlafengehen. Dein Gehirn verarbeitet emotionale Inhalte während des Schlafs anders, und das Letzte, woran du vor dem Einschlafen denkst, hat die Tendenz, mehr emotionales Gewicht zu bekommen. Ein Geldgespräch um 23 Uhr wird zu einem finanziellen Albtraum um 3 Uhr morgens. Verlege die Überprüfung auf den Morgen, wenn dein Gehirn frisch ist und dein Cortisol natürlich höher ist.",
          ],
        },
        {
          kind: "h2",
          id: "schauen-ohne-spirale",
          text: "Wie du deine Finanzen prüfst, ohne in eine Spirale zu geraten",
        },
        {
          kind: "p",
          text: "Das Ziel des Überprüfens deiner Finanzen ist es nicht, dich wegen der Zahl gut zu fühlen. Das Ziel ist, die Zahl zu kennen, weil Wissen immer weniger beängstigend ist als Nicht-Wissen. Das Unbekannte ist der Ort, an dem Angst lebt. Die Zahl, auch wenn sie niedriger ist als erhofft, ist eine Tatsache, und Tatsachen sind handhabbar. Der Prozess des Überprüfens sollte weniger als fünf Minuten dauern. Alles, was fünf Minuten überschreitet, ist kein Überprüfen; es ist Ruminieren, und Rumination ist Angst mit einer produktiven Maske.",
        },
        {
          kind: "p",
          text: "Die Fünf-Minuten-Prüfung hat eine Struktur. Erstens, öffne das Konto oder die App. Zweitens, schau auf die Zahl. Drittens, sag die Zahl laut. Viertens, frag dich: Ist diese Zahl eine Krise, oder ist es einfach nur nicht das, was ich wollte? In den meisten Fällen ist es einfach nur nicht das, was du wolltest. Die Unterscheidung zwischen einer Krise und einer Enttäuschung ist wichtig, weil eine Krise eine Handlung erfordert und eine Enttäuschung eine Akzeptanz. Die Fünf-Minuten-Prüfung hilft dir, den Unterschied zu erkennen, bevor du reagierst.",
        },
        {
          kind: "p",
          text: "Nach der Prüfung, schließe die App. Scrolle nicht durch Transaktionen. Öffne keine anderen Konten zum Vergleichen. Überprüfe nicht deinen Kredit-Score. Lies keine Artikel darüber, wie du mehr sparen kannst. Die Prüfung ist erledigt. Der Rest ist Lärm. Die Disziplin, die App nach fünf Minuten zu schließen, ist der Teil, der die Angst tatsächlich reduziert, weil er deinem Gehirn beibringt, dass du auf die Zahl schauen und überleben kannst. Jedes Mal, wenn du schaust und überlebst, wird das Schauen leichter und das Überleben schneller.",
        },
        {
          kind: "h2",
          id: "vergleich",
          text: "Die Rolle des Vergleichs bei Geldangst",
        },
        {
          kind: "p",
          text: "Der Vergleich ist der Motor der meisten finanziellen Angst, die nicht mit einem echten Überlebensbedürfnis verbunden ist. Du hast genug für die Miete, aber dein Kollege hat gerade ein Haus gekauft, und jetzt fühlt sich deine Wohnung wie ein Misserfolg an. Du hast genug für den Supermarkt, aber dein Freund hat ein Urlaubsfoto gepostet, und jetzt fühlt sich dein Wochenende zu Hause wie eine Bestrafung an. Der Vergleich nimmt eine Situation, die vor fünf Minuten in Ordnung war, und verwandelt sie in einen Beweis dafür, dass du zurückbleibst.",
        },
        {
          kind: "p",
          text: "Das Gegenmittel zum Vergleich ist nicht Dankbarkeit, obwohl Dankbarkeit hilft. Das Gegenmittel sind Informationen. Wenn du den Kauf von jemandem siehst, siehst du einen Datenpunkt. Du siehst nicht sein Gehalt, seine Schulden, sein Erbe, das Einkommen seines Partners, seine Miete, seine psychische Gesundheit oder die Kompromisse, die er gemacht hat, um sich den Kauf leisten zu können. Du siehst das Ergebnis, nicht den Input, und der Input ist es, der bestimmt, ob der Kauf weise oder unvorsichtig war. Der Vergleich ist unfair, weil er unvollständig ist.",
        },
        {
          kind: "p",
          text: "Die praktische Lösung ist, die Eingaben zu begrenzen, die den Vergleich auslösen. Das bedeutet nicht, alle sozialen Medien zu löschen oder alle Freunde zu meiden. Es bedeutet zu bemerken, welche Konten, welche Personen und welche Kontexte die Vergleichsspirale auslösen, und deine Exposition gegenüber diesen spezifischen Auslösern zu reduzieren. Das Ziel ist nicht, in einer Blase zu leben. Das Ziel ist aufzuhören, dich freiwillig Material auszusetzen, das dich schlecht fühlen lässt über Entscheidungen, die völlig in Ordnung waren, bevor du es gesehen hast.",
        },
        {
          kind: "h2",
          id: "vermeidung",
          text: "Wenn finanzielle Angst zur Vermeidung wird",
        },
        {
          kind: "p",
          text: "Das Gefährlichste, was finanzielle Angst tut, ist, dass sie dich deine Finanzen vermeiden lässt. Die Vermeidung fühlt sich schützend an: Wenn ich nicht hinschaue, muss ich mich nicht damit befassen. Aber Vermeidung ist das Gegenteil von schützend. Sie ist kumulativ. Jeden Tag, in dem du nicht hinschaust, wächst das Unbekannte, und die Angst füllt das Unbekannte mit worst-case-Szenarien. Eine Rechnung, die du nicht geöffnet hast, wird zu einer Verspätungsgebühr, die du nicht erwartet hast. Ein Konto, das du nicht überprüft hast, wird zu einem Überziehungsgebühr, die du nicht bemerkt hast. Die Vermeidung erzeugt genau das Ergebnis, das sie zu verhindern versuchte.",
        },
        {
          kind: "p",
          text: "Das Muster ist vorhersehbar. Zuerst meidest du das Hinschauen. Dann fühlst du dich schuldig wegen der Meidung. Dann macht die Schuld es schwerer, hinzuschauen. Dann meidest du stärker. Der Zyklus kann Monate oder Jahre dauern und endet normalerweise mit einer Krise, die dich zwingt, trotzdem hinzuschauen, aber jetzt unter schlechteren Bedingungen. Der Weg, den Zyklus zu durchbrechen, ist, das Hinschauen so einfach wie möglich zu machen. Fünf Minuten. Eine Zahl. Kein Urteil. Je kleiner der Schritt, desto wahrscheinlicher ist es, dass du ihn machst, und je mehr Schritte du machst, desto kleiner fühlt sich der nächste Schritt an.",
        },
        {
          kind: "p",
          text: "Die Umdeutung, die den meisten Menschen hilft, ist diese: Auf deine Finanzen zu schauen ist kein Test deines Charakters. Es ist eine Datensammlungsübung. Du wirst nicht benotet. Du wirst nicht beurteilt. Du sammelst Informationen, die dir helfen werden, morgen eine bessere Entscheidung zu treffen. Der Rahmen der Datensammlung nimmt das moralische Gewicht von der Handlung des Hinschauens, und das genommene Gewicht macht das Hinschauen möglich.",
        },
        {
          kind: "h2",
          id: "ueber-geld-sprechen",
          text: "Wie man über Geld spricht, wenn es einen ängstigend macht",
        },
        {
          kind: "p",
          text: "Geld ist eines der letzten Tabuthemen. Menschen diskutieren über ihre Gesundheit, ihre Beziehungen und ihre psychische Gesundheit, bevor sie über ihr Gehalt, ihre Schulden oder ihre Ausgabengewohnheiten diskutieren. Die Stille um Geld macht die Angst schlimmer, weil die Angst sich von dem Glauben nährt, dass du der Einzig bist, der damit zu kämpfen hat. Das bist du nicht. Die Stille ist geteilt, und die geteilte Stille lässt alleine fühlen.",
        },
        {
          kind: "p",
          text: "Der Weg, über Geld zu sprechen, ohne in eine Spirale zu geraten, ist, Grenzen zu setzen, bevor das Gespräch beginnt. Sag der anderen Person: Ich kann zehn Minuten darüber reden, und dann muss ich aufhören. Die Zeitgrenze verhindert, dass das Gespräch zu einer Therapiesitzung wird, worauf die andere Person sich nicht eingelassen hat. Die Grenze schützt auch dich, weil sie bedeutet, dass das Gespräch ein bekanntes Ende hat, und bekannte Enden sind weniger beängstigend als offene.",
        },
        {
          kind: "p",
          text: "Die andere Grenze ist der Umfang. Du musst nicht jede Zahl teilen. Du kannst darüber reden, wie Geld dich fühlen lässt, ohne dein Gehalt zu teilen. Du kannst über die Angst reden, ohne deine Schulden zu teilen. Das Gefühl ist der wichtige Teil, weil das Gefühl der Ort ist, wo die Veränderung passiert. Die Zahlen sind nur Daten. Das Gefühl ist die Geschichte, die du über die Daten erzählst, und die Geschichte ist das, was du ändern kannst.",
        },
        {
          kind: "h2",
          id: "routine",
          text: "Eine finanzielle Routine aufbauen, die keinen Stress auslöst",
        },
        {
          kind: "p",
          text: "Eine finanzielle Routine ist kein Budget. Ein Budget ist ein Plan für dein Geld. Eine Routine ist ein Plan dafür, wann und wie du über dein Geld nachdenkst. Die Routine ist es, die das Budget möglich macht, denn ohne Routine wird das Budget eine weitere Sache, die du nicht schaffst. Die Routine ist klein, regelmäßig und automatisch, und sie existiert, um das Engagement mit Geld normal statt bedrohlich wirken zu lassen.",
        },
        {
          kind: "p",
          text: "Die Routine hat drei Teile. Der erste ist der wöchentliche Check-in, der fünf Minuten dauert und jede Woche zur gleichen Zeit stattfindet. Der zweite ist der monatliche Umbau, der 30 bis 60 Minuten dauert und jeden Monat am selben Datum stattfindet. Der dritte ist die jährliche Überprüfung, die 60 bis 90 Minuten dauert und jedes Jahr zur gleichen Zeit stattfindet. Die drei Teile unterscheiden sich im Umfang, sind aber identisch in der Struktur: Du schaust auf die Zahlen, du machst einen Plan und du schließt das Buch.",
        },
        {
          kind: "p",
          text: "Der Schlüssel, die Routine stressfrei zu machen, ist, jeden Teil so klein wie möglich zu halten. Der wöchentliche Check-in sollte nie mehr als fünf Minuten dauern. Wenn es länger dauert, machst du zu viel. Der monatliche Umbau sollte nie mehr als 60 Minuten dauern. Wenn es länger dauert, machst du es zu kompliziert. Die jährliche Überprüfung sollte nie mehr als 90 Minuten dauern. Wenn es länger dauert, ruminierst du, anstatt zu überprüfen. Die Zeitlimits sind nicht willkürlich. Sie sind der Unterschied zwischen einer Routine, die Angst reduziert, und einer Routine, die sie erzeugt.",
        },
        {
          kind: "h2",
          id: "geld-schemata",
          text: "Die Geld-Schemata, die im Hintergrund laufen",
        },
        {
          kind: "p",
          text: "Die meisten finanziellen Angst werden von dem angetrieben, was Therapeuten Geld-Schemata nennen: unbewusste Überzeugungen über Geld, die du in der Kindheit absorbiert hast und seitdem ausführst. Die Schemata sind unsichtbar, was sie mächtig macht. Du bemerkst sie nicht mehr, als du das Betriebssystem auf deinem Telefon bemerkst. Aber sie formen jede finanzielle Entscheidung, die du triffst, und sie sind normalerweise falsch.",
        },
        {
          kind: "p",
          text: "Die häufigsten Geld-Schemata sind: Geld ist die Wurzel allen Bösen, reiche Menschen sind gierig, ich verdiene kein Geld, ich werde nie genug haben, Geld ist schwer zu verdienen, Geld ist leicht zu verlieren, und über Geld zu reden ist unhöflich. Jedes dieser Schemata erzeugt eine bestimmte Art von Angst. Das Schema 'Ich werde nie genug haben' erzeugt ein permanentes Gefühl von Knappheit, selbst wenn die Zahlen in Ordnung sind. Das Schema 'Geld ist schwer zu verdienen' erzeugt eine Angst vor dem Ausgeben, weil jeder ausgegebene Dollar sich anfühlt, als hätte er Monate gekostet, ihn zu ersetzen. Das Schema 'Reiche Menschen sind gierig' erzeugt Schuldgefühle beim Mehrverdienen, was dich davon abhält, eine Gehaltserhöhung zu verhandeln oder deine Preise zu erhöhen.",
        },
        {
          kind: "p",
          text: "Die Methode, deine Geld-Schemata zu identifizieren, ist, die Gedanken zu bemerken, die auftauchen, wenn du über Geld nachdenkst. Schreib sie auf, genau wie sie in deinem Kopf erscheinen. Bearbeite sie nicht. Urteile nicht darüber. Schreib sie nur. Dann frag: Woher kommt dieser Gedanke? Wer hat mir das gesagt? Wann habe ich das zum ersten Mal geglaubt? Die Antworten führen normalerweise zu einem bestimmten Moment in der Kindheit: ein Elternteil, das über Rechnungen streitet, ein Lehrer, der etwas über reiche Menschen sagt, ein Verwandter, der einen Kommentar über die Finanzen deiner Familie macht. Der Moment war klein, aber die Überzeugung, die er erzeugte, war groß, und sie hat dein finanzielles Verhalten seitdem geformt.",
        },
        {
          kind: "p",
          text: "Die Geld-Schemata verschwinden nicht von selbst. Sie verschwinden, wenn du sie siehst, sie benennst und entscheidest, ob sie immer noch wahr sind. Die meisten sind es nicht. Das Schema 'Ich werde nie genug haben' war wahr, als du ein Kind warst und keine Kontrolle über die Finanzen des Haushalts hattest. Es ist nicht wahr, jetzt, wo du dein eigenes Einkommen, dein eigenes Konto und deine eigene Fähigkeit hast, Entscheidungen zu treffen. Das Schema hat einmal einen Zweck erfüllt. Es erfüllt jetzt keinen Zweck mehr. Es zu identifizieren ist der erste Schritt, es durch etwas genauere und weniger schmerzhafte zu ersetzen.",
        },
        {
          kind: "h2",
          id: "anderen-helfen",
          text: "Wie man jemandem anderem mit finanzieller Angst hilft",
        },
        {
          kind: "p",
          text: "Wenn jemand, den du liebst, mit finanzieller Angst kämpft, ist das Hilfreichste, was du tun kannst, nicht, Ratschläge zu geben. Ratschläge fühlen sich hilfreich an, landen aber oft als Urteil: Du solltest das tun, du solltest das aufhören zu tun. Die Person weiß bereits, dass sie sollte. Das Wissen ist nicht das Problem. Das Problem ist, dass die Angst das Tun unmöglich erscheinen lässt. Was die Person braucht, ist kein Plan. Was sie braucht, ist jemand, der mit ihnen sitzt, während sie ihre Banking-App öffnen, ohne zusammenzuzucken, ohne zu reparieren und ohne sich schlechter fühlen zu lassen.",
        },
        {
          kind: "p",
          text: "Die praktische Version davon nennt sich Koregulation. Du sitzt im selben Zimmer, während die Person ihre Banking-App öffnest. Du schaust nicht auf den Bildschirm. Du kommentierst nicht die Zahl. Du existierst einfach im Raum, während sie das tun, was sie erschreckt. Deine ruhige Gegenwart senkt ihre Stressreaktion, was das Hinschauen möglich macht, was das nächste Hinschauen leichter macht. Die Koregulation ist keine Lösung. Sie ist eine Brücke, die die Lösung möglich macht.",
        },
        {
          kind: "p",
          text: "Das andere, was du tun kannst, ist zu normalisieren. Sag: Ich fühle mich manchmal auch ängstlich wegen Geld. Ich meide auch das Schauen auf meine Konten. Ich fühle mich auch schuldig wegen meiner Ausgaben. Die Normalisierung nimmt die Isolation, und die Isolation ist es, die die Angst wachsen lässt. Die Person muss nicht repariert werden. Sie muss wissen, dass sie nicht der Einzige ist, der sich so fühlt. Die geteilte Erfahrung heilt mehr als jede Budgeting-App oder jeder Finanzplan.",
        },
        {
          kind: "h2",
          id: "notgroschen-mythos",
          text: "Der Notgroschen-Mythos und warum er die Angst verschlimmert",
        },
        {
          kind: "p",
          text: "Jeder sagt: Baue einen Notgroschen auf. Drei bis sechs Monate Ausgaben. Das ist die magische Zahl. Wenn du sie hast, bist du sicher. Wenn nicht, solltest du ängstlich sein. Der Rat ist gut gemeint, verschlimmert aber oft die Angst, weil er eine neue Zahl zum Besessen-Sein und eine neue Art schafft, sich wie ein Versager zu fühlen. Du hast bereits die Mietenzahl, die Kreditkartenzahl und die Sparkonto-Zahl. Jetzt hast du auch noch die Notgroschen-Zahl, und sie ist normalerweise die, die sich am weitesten entfernt anfühlt.",
        },
        {
          kind: "p",
          text: "Der Notgroschen ist eine gute Idee. Aber die Art, wie er normalerweise präsentiert wird, verwandelt ihn in eine weitere Angstquelle statt in eine Lösung. Die Präsentation geht davon aus, dass du genug Spielraum zum Sparen hast, dass du regelmäßig sparen kannst und dass das Sparen selbst keinen Stress erzeugt. Für Menschen mit finanzieller Angst erzeugt das Sparen oft Stress, weil jeder gesparte Dollar ein Dollar ist, der hätte verwendet werden können, um die unmittelbare Angst zu lindern. Die Spannung zwischen Sparen für die Zukunft und Beruhigung der Gegenwart ist real, und der Standardrat geht nicht darauf ein.",
        },
        {
          kind: "p",
          text: "Ein besserer Rahmen ist, den Notgroschen als Spektrum zu betrachten, nicht als Ziel. Jeder gesparte Betrag ist besser als nichts. Hundert Dollar sind besser als null. Fünfhundert sind besser als hundert. Die Zahl muss nicht perfekt sein. Sie muss existieren. Die Existenz eines kleinen Fonds verändert die Geschichte, die du dir selbst erzählst über deine Fähigkeit, Überraschungen zu bewältigen, und die geänderte Geschichte ist es, die die Angst reduziert. Es geht nicht um das Geld. Es geht um die Geschichte.",
        },
        {
          kind: "h2",
          id: "dismorphie",
          text: "Finanzielle Angst und Geld-Dysmorphie",
        },
        {
          kind: "p",
          text: "Geld-Dysmorphie ist ein neuerer Begriff für ein Phänomen, das immer existiert hat: die Verzerrung zwischen deiner tatsächlichen finanziellen Situation und der Art, wie du sie wahrnimmst. Du verdienst vielleicht ein komfortables Gehalt und fühlst dich trotzdem ständig pleite. Du hast vielleicht mehr Ersparnisse als die meisten deiner Gleichaltrigen und fühlst dich, als würdest du zurückbleiben. Die Verzerrung geht nicht um die Fakten. Sie geht um die Linse, durch die du die Fakten siehst, und finanzielle Angst ist die Linse, die alles schlechter aussehen lässt, als es ist.",
        },
        {
          kind: "p",
          text: "Geld-Dysmorphie ist verbreitet bei Menschen, die in Haushalten aufgewachsen sind, in denen das Geld knapp war, selbst wenn ihre jetzige Situation stabil ist. Die Kindheitserfahrung schuf eine Basis-Erwartung von Knappheit, und die Basis aktualisiert sich nicht automatisch, wenn sich die Fakten ändern. Du kannst dreimal so viel verdienen wie deine Eltern und trotzdem die gleiche Angst fühlen wie sie, weil das Gefühl installiert wurde, bevor du die Sprache hattest, es zu hinterfragen. Die Angst ist geerbt, nicht verdient, und das Erbe kann abgelehnt werden.",
        },
        {
          kind: "p",
          text: "Die praktische Wirkung der Geld-Dysmorphie ist, dass sie dich daran hindert, die finanzielle Stabilität zu genießen, die du bereits erreicht hast. Du sparst aggressiv, fühlst dich aber, als wäre es nie genug. Du meidest Ausgaben für Dinge, die dein Leben verbessern würden, weil die Ausgaben die Angst auslösen. Du vergleichst dich mit Menschen, die mehr verdienen, und fühlst dich wie ein Versager, auch wenn du nach jedem objektiven Maßstab gut dastehst. Die Dysmorphie ist die Angst mit einer Maske, und die Maske sieht wie Vorsicht aus.",
        },
        {
          kind: "h2",
          id: "professionelle-hilfe",
          text: "Wann professionelle Unterstützung suchen",
        },
        {
          kind: "p",
          text: "Wenn Geldangst deinen Schlaf, deine Beziehungen oder dein tägliches Funktionieren seit mehr als zwei Wochen stark beeinträchtigt, ziehe in Betracht, Unterstützung von einem Finanztherapeuten zu suchen. Eine Budgeting-App kann verhindern, dass die Angst schlimmer wird, aber sie kann keine professionelle Betreuung ersetzen.",
        },
        {
          kind: "p",
          text: "Finanztherapie ist ein spezifisches Feld, das Finanzplanung mit psychologischer Unterstützung verbindet. Ein Finanztherapeut sagt dir nicht nur, wohin du dein Geld stecken sollst. Er hilft dir zu verstehen, warum Geld dich so fühlen lässt, wie es dich fühlen lässt, und er hilft dir, die emotionalen Fähigkeiten aufzubauen, um mit deinen Finanzen umzugehen, ohne überfordert zu sein. Die Kombination ist wirksamer als jede Disziplin allein, weil der Finanzplan nicht hält, wenn der emotionale Fundament nicht stabil ist, und die emotionale Arbeit nicht hält, wenn der finanzielle Fundament nicht angesprochen wird.",
        },
        {
          kind: "p",
          text: "Die Anzeichen, dass du Hilfe suchen solltest, sind: Du hast deine Post seit mehr als einem Monat nicht geöffnet, du bist seit mehr als zwei Wochen nicht auf dein Bankkonto eingeloggt, du verlierst mehr als einmal pro Woche des Schlafs wegen Geld, du streitest dich mehr als einmal pro Woche mit deinem Partner über Geld, oder du triffst finanzielle Entscheidungen basierend auf Panik statt auf Informationen. Keine dieser Anzeichen bedeutet, dass du versagt hast. Sie bedeuten, dass die Angst gewachsen ist über das hinaus, was Selbsthilfe bewältigen kann, und dafür gibt es keine Scham. Die Scham wäre, weiterhin zu leiden, wenn Hilfe verfügbar ist.",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Häufig gestellte Fragen",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Ist finanzielle Angst dasselbe wie schlecht mit Geld umgehen können?",
              a: "Nein. Finanzielle Angst ist eine emotionale Reaktion auf Unsicherheit über Geld. Sie kann Menschen betreffen, die ausgezeichnet mit Geld umgehen können, und Menschen, die das nicht können. Die Angst geht um das Gefühl, nicht um die Fähigkeit. Du kannst hochkompetent mit deinen Finanzen sein und trotzdem Angst haben, weil die Angst in dem Glauben wurzelt, dass du nicht sicher bist, nicht in der Realität deiner finanziellen Situation.",
            },
            {
              q: "Kann eine Budgeting-App bei finanzieller Angst helfen?",
              a: "Es kommt auf die App an. Manche Apps machen die Angst schlimmer, indem sie dich mit Benachrichtigungen bombardieren, dir Diagramme zeigen, die sich wie Urteil anfühlen, und dich das Gefühl haben lassen, du versagst. Eine gut gestaltete App tut das Gegenteil: Sie reduziert die Anzahl der Entscheidungen, die du treffen musst, präsentiert Informationen ruhig und hilft dir, eine Routine aufzubauen, die das Schauen auf dein Geld normal erscheinen lässt. Die richtige App ersetzt keine professionelle Hilfe bei schwerer Angst, aber sie kann Teil eines Plans sein, der die tägliche Belastung reduziert.",
            },
            {
              q: "Wie lange dauert es, bis finanzielle Angst besser wird?",
              a: "Es kommt auf die Quelle an. Wenn die Angst durch ein spezifisches finanzielles Problem verursacht wird (Schulden, eine Rechnung, ein Jobverlust), nimmt die Angst oft ab, sobald du einen Plan hast, auch wenn der Plan Monate dauert, ihn auszuführen. Wenn die Angst durch eine tiefere Überzeugung verursacht wird (Scham, Kindheitstrauma, eine Angst, nicht genug zu sein), kann es länger dauern, und professionelle Hilfe beschleunigt den Prozess oft. Die meisten Menschen bemerken innerhalb von vier bis sechs Wochen nach Beginn einer konsequenten Routine eine Verbesserung, auch ohne professionelle Hilfe.",
            },
            {
              q: "Soll ich meine finanzielle Angst mit meinem Partner teilen?",
              a: "Ja, aber mit Struktur. Wähle einen Zeitpunkt, an dem keiner von euch gestresst ist, setze eine Zeitgrenze und konzentriere dich darauf, wie du dich fühlst, anstatt was die andere Person tun sollte. Das Ziel des Gesprächs ist nicht, das Problem gemeinsam zu lösen. Das Ziel ist, bekannt zu werden. Sobald das Gefühl geteilt ist, verliert die Scham ihre Macht, und das Problemlösen wird von einem ruhigeren Ort aus möglich.",
            },
            {
              q: "Was, wenn meine finanzielle Angst berechtigt ist, weil meine Finanzen tatsächlich schlecht sind?",
              a: "Auch berechtigte Angst ist immer noch Angst, und Angst hilft dir nicht, finanzielle Probleme zu lösen. Sie lässt dich sie meiden. Die Tatsache, dass deine Finanzen schwierig sind, macht es wichtiger, nicht weniger, ruhig mit ihnen umzugehen. Die Ruhe ist keine Verleugnung. Die Ruhe ist die Bedingung, unter der gute Entscheidungen möglich sind. Ein ruhiger Mensch mit schlechten Finanzen trifft bessere Entscheidungen als ein ängstlicher Mensch mit schlechten Finanzen, jedes Mal.",
            },
            {
              q: "Ist es normal, sich wegen Geld ängstlich zu fühlen, auch wenn es mir gut geht?",
              a: "Ja. Finanzielle Angst ist nicht proportional zu deiner finanziellen Situation. Sie ist proportional zu deiner Beziehung mit Unsicherheit, deinen Geld-Schemata aus der Kindheit und den Vergleichen, die du machst. Menschen mit komfortablen Einkommen fühlen sich oft ängstlicher wegen Geld als Menschen mit weniger, weil sie mehr zu verlieren und komplexere Entscheidungen zu treffen haben. Die Angst ist kein Zeichen dafür, dass etwas mit deinen Finanzen nicht stimmt. Sie ist ein Zeichen dafür, dass etwas in deiner Beziehung zu Geld der Erkundung wert ist.",
            },
          ],
        },
        {
          kind: "h2",
          id: "fazit",
          text: "Eine ruhigere Beziehung zu Geld beginnt mit dem Hinschauen",
        },
        {
          kind: "p",
          text: "Finanzielle Angst ist kein Charakterfehler. Sie ist eine Stressreaktion auf Unsicherheit, und Unsicherheit nimmt ab, wenn du hinschaust. Das Hinschauen muss nicht spektakulär sein. Es muss keine vollständige Budgetüberprüfung sein. Es können fünf Minuten sein, eine Zahl, kein Urteil. Die fünf Minuten sind keine Lösung. Es ist eine Praxis, und die Praxis summiert sich. Jedes Mal, wenn du hinschaust, wird das Hinschauen leichter. Jedes Mal, wenn du das Hinschauen überlebst, verliert die Angst ein wenig ihrer Macht. Die Angst verschwindet nicht, aber sie schrumpft, und der Raum, den sie einst besetzt hat, füllt sich mit etwas Nützlicherem: Information, Handlungsfähigkeit und dem stillen Wissen, dass du das schaffen kannst.",
        },
        {
          kind: "p",
          text: "Die Gewohnheiten in diesem Leitfaden sind darauf ausgelegt, die emotionale Belastung zu senken, bevor du überhaupt auf die Zahlen schaust. Die Atemzüge, die Sprache, die Zeitlimits, die Sperrstunde: jede ist ein kleiner Eingriff, der die Beziehung zwischen dir und deinem Geld verändert. Keiner erfordert Willenskraft. Keiner erfordert, dass du dich motiviert fühlst. Sie erfordern nur, dass du sie machst, und das Machen erzeugt die Motivation, nicht umgekehrt. Die Motivation folgt der Handlung. Die Handlung folgt nicht der Motivation.",
        },
        {
          kind: "p",
          text: "Wenn du ein Werkzeug suchst, das das Hinschauen leichter macht, ist Savlo genau dafür konzipiert: eine ruhige, private, werbefreie Möglichkeit, dein Geld ohne Überflutung zu sehen. Es ist auf Android verfügbar und kommt bald auf iOS. Wenn du weitermachen möchtest, gehen die folgenden verwandten Artikel tiefer in die spezifischen Mechaniken ein: die breitere [Budgetierungsphilosophie](/de/blog/how-to-budget-money), die praktischen [Sinking-Fund-Mechaniken](/de/blog/sinking-funds), und der spezifische Leitfaden zur [50/30/20-Regel](/de/blog/50-30-20-rule), wenn du einen einfachen Ausgangspunkt suchst.",
        },
      ],
    },
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Nullbasiertes Budgetieren ist eine der bekanntesten Methoden der privaten Finanzplanung. Die Regel ist direkt: Wenn der Monat beginnt, hat jeder erwartete Euro ein Ziel. Wenn die erste Ausgabe kommt, gibt es keinen unbenannten Saldo auf dem Konto, der vom Impuls aufgefressen werden könnte. Das ist alles. Die Zahl auf der rechten Seite ist null, nicht weil alles ausgegeben wurde, sondern weil nichts ohne Aufgabe übrig bleibt. Die Mehrdeutigkeit verschwindet.",
        },
        {
          kind: "p",
          text: "Der mentale Wechsel geht von reaktiv zu absichtlich. Statt am Monatsende zu fragen «was ist übrig?», startest du den Monat mit einer vollständigen Antwort. Die meisten Menschen, die ein nullbasiertes Budget länger als sechs Monate führen, sagen dasselbe: Das Budget hört auf, sich wie eine Einschränkung anzufühlen, und fängt an, sich wie eine Erlaubnis anzufühlen. Du weißt genau, was du gefahrlos ausgeben kannst, was für eine künftige Rechnung reserviert ist und was in einem Ziel festgelegt ist. Die Unsicherheit verschwindet.",
        },
        {
          kind: "p",
          text: "Das System wurde in der Welt der privaten Finanzen von YNAB (You Need A Budget) populär gemacht und hat seine Wurzeln im Management-Accounting der 1970er Jahre. Die private Version ist deutlich leichter als die Unternehmensversion, aber das Prinzip ist dasselbe: Jede Geldeinheit ist eine Ressource, und Ressourcen sind am nützlichsten, wenn sie absichtlich zugewiesen werden. Mehr zur breiteren Philosophie findest du in unserem Leitfaden [Geld budgetieren](/de/blog/how-to-budget-money), und einen Vergleich mit dem einfacheren prozentualen Ansatz in der [50/30/20-Anleitung](/de/blog/50-30-20-rule).",
        },
        {
          kind: "h2",
          id: "vier-regeln",
          text: "Die vier Regeln des nullbasierten Budgetierens",
        },
        {
          kind: "p",
          text: "YNAB formuliert die Praxis als vier Regeln. Es lohnt sich, sie zu wiederholen, weil sie das Verhalten hinter der Mathematik erklären, nicht nur die Mathematik selbst.",
        },
        {
          kind: "ol",
          items: [
            "**Gib jedem Euro einen Job.** Eingehendes Einkommen ist Geld, das eine Zuweisung braucht, nicht Geld, das ein Versteck braucht. Der Job kann eine Rechnung, ein Ziel, ein Sinking Fund, ein Puffer oder eine flexible Ausgabenkategorie sein. Der Punkt ist, dass kein Euro ohne Zuweisung bleibt.",
            "**Akzeptiere deine wahren Ausgaben.** Die meisten Überraschungen im Jahr sind keine Überraschungen. Versicherungen, Steuern, Geschenke, Einschreibungen, Reisen. Sie kommen zu vorhersehbaren Zeitpunkten. Nullbasiertes Budgetieren zwingt dich, ihre Kosten über das Jahr zu verteilen, indem du jeden Monat einen kleinen Betrag in einen Sinking Fund für jeden Posten legst. Die Ausgabe hört auf, eine Überraschung zu sein.",
            "**Stehe Schläge durch.** Wenn du eine Kategorie überziehst, verschiebst du Geld aus einer anderen Kategorie, um sie zu decken. Der Plan passt sich an, die Summe bleibt bei null, und der Monat ist nicht ruiniert. Überziehen ist eine Information, kein Versagen.",
            "**Lasse dein Geld altern.** Je länger dein Geld auf dem Konto bleibt, bevor du es ausgibst, desto mehr Spielraum hast du. Mit der Zeit vergrößert das nullbasierte Budgetieren die Lücke zwischen Verdienen und Ausgeben, und genau das schafft echte finanzielle Ruhe. Das Ziel ist nicht, zu horten. Das Ziel ist, Geld auszugeben, das mindestens einen Monat alt ist, nicht Geld, das gerade erst eingegangen ist.",
          ],
        },
        {
          kind: "h2",
          id: "schritt-fuer-schritt",
          text: "Der schrittweise Prozess",
        },
        {
          kind: "ol",
          items: [
            "Notiere dein gesamtes Nettoeinkommen für den Monat.",
            "Liste alle festen Verpflichtungen auf (Wohnen, Versorger, Verkehr).",
            "Weise zuerst Geld für Sparen und Investitionen zu.",
            "Verteile den Rest auf flexible Alltagskategorien.",
            "Stelle sicher, dass die Summe der Zuweisungen genau dem eingehenden Einkommen entspricht.",
          ],
        },
        {
          kind: "p",
          text: "Die fünf Schritte sehen einfach aus, weil die Arbeit nicht in den Schritten liegt. Die Arbeit liegt in den Kategorien, die du wählst, in der Größe des Puffers, den du hältst, und in der Disziplin, jede Woche zum Plan zurückzukehren. Der erste Monat dauert meist sechzig bis neunzig Minuten. Im dritten Monat können die meisten den Plan in dreißig Minuten neu aufbauen. Der Punkt der Schritte ist, dir eine Reihenfolge zu geben, die die schwierigen Teile nicht überspringt, vor allem die Versuchung, am Ende eine «Sonstiges»-Zeile stehen zu lassen. Es gibt kein Sonstiges. Die Idee ist, das Implizite explizit zu machen.",
        },
        {
          kind: "h2",
          id: "beispiel-mit-zahlen",
          text: "Ein durchgerechnetes Beispiel mit echten Zahlen",
        },
        {
          kind: "p",
          text: "Um die Methode in Aktion zu sehen, nimm einen einzelnen Monat. Nettoeinkommen: 4.000 Euro. Der Plan beginnt damit, jede feste Verpflichtung mit Fälligkeit und Betrag aufzulisten. Miete 1.400, Versorger 120, Verkehr 180, Telefon 60, Mindestschuldentilgung 260, Lebensmittel 480, Versicherungen 90, Abonnements 45, wiederkehrende Medizin 60. Das summiert sich auf 2.695. Die nächste Schicht sind Ziele und Sinking Funds: Notfallfonds 200, Feiertagsgeschenke 50, Fahrzeugwartung 40, Jahresgebühren 40, Lernen 30. Das addiert 360. Bis hierher: 2.695 + 360 = 3.055 von 4.000. Die verbleibenden 945 werden auf flexible Kategorien verteilt: Essen gehen 200, Unterhaltung 120, Körperpflege 60, Kleidung 80, Kinder 120, Geschenke 50, Sonstiges flexibel 315. Die Summe landet bei genau 4.000. Der nicht zugewiesene Saldo ist null. Jeder Euro hat einen Job.",
        },
        {
          kind: "p",
          text: "Jetzt beginnt der Monat. Bis zum 12. ist «Essen gehen» stärker beansprucht als geplant, und es gibt eine Überschreitung von 40. Der Plan ist nicht kaputt. Die Regel ist, 40 Euro aus einer Kategorie mit Überschuss (Unterhaltung hatte eine ruhige Woche) auf Essen gehen zu verschieben. Die Summe bleibt bei null. Der Plan hat sich angepasst. Das Verhalten hat sich geändert. Der Monat geht weiter.",
        },
        {
          kind: "h2",
          id: "realitaetsfest",
          text: "Ein nullbasiertes Budget bauen, das den Kontakt mit der Realität überlebt",
        },
        {
          kind: "p",
          text: "Die Version des nullbasierten Budgetierens, die ein Jahr überlebt, ist die, die etwas großzügiger ist, als du denkst, dass sie sein muss. Der häufigste Fehler im ersten Versuch ist, die elastischen Kategorien zu knapp zu budgetieren. Man schätzt 150 für Lebensmittel, gibt dann 200 aus, fühlt sich dann gescheitert und gibt das System auf. Die Lösung ist, den tatsächlichen Durchschnitt der letzten drei Monate zu budgetieren, nicht die hoffnungsvolle Zahl. Sobald die elastischen Kategorien realistisch sind, schrumpfen die Überraschungs-Überschreitungen. Der Plan fühlt sich nicht mehr wie ein Kampf an.",
        },
        {
          kind: "p",
          text: "Der andere Haltbarkeitstrick ist, das Unregelmäßige zu planen. Nimm die letzten 12 Monate und liste jede Ausgabe auf, die nur ein paar Mal vorkam: Kfz-Steuer, Schulmaterial, Tierarzt, Feiern, Hochzeiten von Freunden. Summiere sie. Teile durch 12. Das ist deine unregelmäßige monatliche Zuweisung. Packe sie in einen Sinking Fund. Wenn die Ausgabe kommt, ist das Geld schon da. Der Plan überlebt, weil das Unregelmäßige integriert wurde, nicht ignoriert.",
        },
        {
          kind: "h2",
          id: "unregelmaessiges-einkommen",
          text: "Wie du unregelmäßiges Einkommen mit nullbasiert handhabst",
        },
        {
          kind: "p",
          text: "Nullbasiertes Budgetieren wurde für vorhersehbare Gehälter entwickelt, funktioniert aber genauso gut mit unregelmäßigem Einkommen, mit einer Änderung: Statt das Einkommen zu budgetieren, das du in diesem Monat erhältst, budgetierst du das Einkommen, das du behältst. Für Freelancer, Gig-Worker und jeden mit Provisionen ist der Rhythmus, jede Zahlung auf ein Auffangkonto einzuzahlen und dann aus diesem Konto den Kategorien zuzuweisen. Die Kategorien sind dieselben. Die Quelle der Euros verschiebt sich nur einen Schritt zurück.",
        },
        {
          kind: "p",
          text: "Die Disziplin, die das funktionieren lässt, ist, vom niedrigsten zuverlässigen Monat zu budgetieren, nicht vom Durchschnitt. Wenn die letzten sechs Monate an Nettoeinzahlungen 3.200, 4.500, 2.900, 3.800, 4.200 und 2.400 sind, budgetiere nicht den Durchschnitt. Budgetiere 2.400 und behandle jeden Euro darüber als eine Entscheidung: einen Sinking Fund, eine zusätzliche Schuldentilgung, ein Puffer-Auffüllen, einen Zielbeschleuniger. Das ist dasselbe Prinzip, das im breiteren Leitfaden [Geld budgetieren](/de/blog/how-to-budget-money) bei variablem Einkommen auftaucht; die nullbasierte Struktur gibt ihm einfach einen Ort zum Landen.",
        },
        {
          kind: "h2",
          id: "wochenrhythmus",
          text: "Der wöchentliche Rhythmus des nullbasierten Budgetierens",
        },
        {
          kind: "p",
          text: "Der Plan wird einmal im Monat gebaut. Der Plan wird einmal in der Woche überprüft. Die Überprüfung ist der Teil, den die meisten überspringen, und das Überspringen ist es, was das System tötet. Eine wöchentliche Überprüfung dauert fünfzehn bis zwanzig Minuten: Öffne den Plan, logge die Ausgaben dieser Woche, schau dir den verbleibenden Saldo in jeder Kategorie an und frage dich, ob eine Kategorie auf eine Überschreitung zusteuert. Wenn ja, entscheide jetzt, woher das Geld kommen wird. Die früh getroffene Entscheidung ist die, die funktioniert.",
        },
        {
          kind: "p",
          text: "Die andere Hälfte des Rhythmus ist der monatliche Neuaufbau. Reserviere einen Kalenderblock von 60 bis 90 Minuten um den 25. eines jeden Monats, wenn die meisten Rechnungen für den nächsten Monat sichtbar sind. Baue den Plan von oben bis unten neu auf. Passe die Kategorien, die Sinking-Fund-Ziele, die Puffergröße, die Zielprioritäten an. Der Neuaufbau ist der Ort, an dem der Plan jeden Monat schärfer wird. Es ist auch der Ort, an dem die Jahressicht anfängt, sich wie Realität anzufühlen und nicht wie ein Wunsch.",
        },
        {
          kind: "h2",
          id: "sinking-funds",
          text: "Warum nullbasiert so gut mit Sinking Funds zusammenspielt",
        },
        {
          kind: "p",
          text: "Sinking Funds sind die Geheimwaffe des nullbasierten Budgetierens. Die meisten denken bei einem Budget an ein Werkzeug für die nächsten dreißig Tage: wie viel für Miete, wie viel für Lebensmittel, wie viel für Verkehr. Ein Sinking Fund ist ein Werkzeug für die nächsten zwölf Monate: Er verwandelt unregelmäßige, vorhersehbare Ausgaben in kleine monatliche Beiträge, sodass die Ausgabe aufhört, eine Überraschung zu sein, und zu einer Budgetzeile wird.",
        },
        {
          kind: "p",
          text: "Die Art, sie innerhalb eines nullbasierten Budgets einzurichten, ist, für jede unregelmäßige Ausgabe eine eigene Kategorie zu erstellen, ihre jährlichen Gesamtkosten festzulegen, durch zwölf zu teilen und diesen Betrag jeden Monat zuzuweisen. Versicherung zweimal im Jahr, je 300. Feiertagsgeschenke im November und Dezember, 400 insgesamt. Fahrzeuginspektion im März, 180. Jahresabos im Januar, 240. Urlaub im Sommer, 1.200. Die monatlichen Zuweisungen summieren sich auf ungefähr 190. Das sind die Kosten, in monatlichen Scheiben, eines Jahres ohne Überraschungsausgaben. Es ist eine kleine Zahl, und genau das ist der Punkt: Sinking Funds lassen große Ausgaben klein wirken.",
        },
        {
          kind: "p",
          text: "Die kombinierte Wirkung von nullbasiertem Budgetieren plus Sinking Funds ist, die zwei häufigsten Quellen von Budgetstress zu entfernen: die überraschende große Ausgabe und das wachsende Gefühl, dass der Monat knapp wird. Der Sinking Fund kümmert sich um die erste. Die Verfolgung auf Kategorieebene kümmert sich um die zweite. Das Budget hört auf, etwas zu sein, das du überlebst, und wird zu etwas, das du pflegst. Unser [tieferer Leitfaden zu Sinking Funds](/de/blog/sinking-funds) geht die Mechanik im Detail durch, einschließlich wie man sie dimensioniert und wie man priorisiert, wenn nicht genug Platz im Budget für alle ist.",
        },
        {
          kind: "h2",
          id: "fuer-wen",
          text: "Für wen ist es geeignet?",
        },
        {
          kind: "p",
          text: "Nullbasiertes Budgetieren ist perfekt für Menschen, die Detail, Struktur und aktive Finanzplanung lieben. Es ist die zentrale Methode hinter Tools wie YNAB.",
        },
        {
          kind: "p",
          text: "Genauer gesagt passt die Methode zu Menschen, die eine klare, schriftliche Antwort auf die Frage «was soll ich mit dem nächsten Euro tun?» wollen. Wenn du jemals deine Banking-App geschlossen hast und dich etwas verloren gefühlt hast, ist die Methode für dich. Sie passt auch zu Menschen, die von einem Überlebensbudget zu einem Planungsbudget übergehen, weil sie den Unterschied zwischen einer Rechnung und einem Ziel an die Oberfläche zwingt. Eine Rechnung ist ein fester Betrag mit einem festen Datum. Ein Ziel ist ein flexibler Betrag mit einem Zieldatum. Sie gleich zu behandeln ist einer der häufigsten Gründe, warum Budgets scheitern.",
        },
        {
          kind: "h2",
          id: "fuer-wen-nicht",
          text: "Für wen ist es möglicherweise nicht geeignet?",
        },
        {
          kind: "p",
          text: "Wenn das Planen jedes einzelnen Euro sich zu restriktiv oder überwältigend anfühlt, starte mit der deutlich leichteren [50/30/20-Regel](/de/blog/50-30-20-rule). Nullbasiertes Budgetieren ist ein großartiges Ziel, aber keine obligatorische Startlinie.",
        },
        {
          kind: "p",
          text: "Die andere Gruppe, die mit nullbasiert Schwierigkeiten haben kann, sind alle, deren Einkommen so instabil ist, dass der Monatsplan auf Vermutungen gebaut wird. Wenn das Gehalt um mehr als 40% von Monat zu Monat schwankt, funktioniert oft eine andere Struktur besser (zuerst ein großer Sinking Fund, dann das Budget). Der [Leitfaden zum Budgetieren mit niedrigem Einkommen](/de/blog/budgeting-on-a-low-income) behandelt diesen Fall im Detail. Die gute Nachricht ist, dass nullbasiertes Budgetieren mit der Zeit einfacher wird, sodass selbst ein Wenig-Pass-Nutzer hineinwachsen kann, sobald das Einkommen sich stabilisiert.",
        },
        {
          kind: "h2",
          id: "uebliche-kategorien",
          text: "Übliche Kategorien und wie man sie dimensioniert",
        },
        {
          kind: "p",
          text: "Die meisten nullbasierten Budgets teilen einen ähnlichen Satz von Kategorien. Die genauen Namen sind weniger wichtig als die Form. Die Form sieht meistens so aus: Wohnen und Versorger (etwa 30% bis 40% des Einkommens), Essen und Haushalt (10% bis 15%), Verkehr (5% bis 10%), Versicherungen und Mindestschuldendienst (5% bis 10%), Sparen und Sinking Funds (10% bis 20%), flexible Ausgaben (10% bis 20%) und ein diskretionärer Puffer (5% bis 10%). Die genauen Prozentsätze variieren, aber die Struktur bleibt. Ein Budget mit zu wenigen Kategorien versteckt Überschreitungen. Ein Budget mit zu vielen erzeugt Entscheidungsmüdigkeit. Der Sweet Spot liegt meistens zwischen 8 und 14 Kategorien.",
        },
        {
          kind: "p",
          text: "Die Größe jedes Sinking Funds hängt von der Ausgabe ab, die er abdeckt. Nimm die jährlichen Gesamtkosten und teile durch zwölf. Eine Versicherung von 600 Euro wird zu 50 pro Monat. Ein Urlaub von 1.200 Euro wird zu 100 pro Monat. Eine Autoinspektion von 300 Euro wird zu 25 pro Monat. Diese Zuweisungen fühlen sich klein an, und das ist der Punkt. Der Punkt von Sinking Funds ist, große vorhersehbare Ausgaben wie kleine monatliche Zuweisungen wirken zu lassen. Je länger du das System führst, desto natürlicher wird das, und desto weniger hat dein Finanzjahr einen einzelnen Monat, der dich überrascht.",
        },
        {
          kind: "h2",
          id: "haeufige-fehler",
          text: "Häufige Fehler und wie du sie vermeidest",
        },
        {
          kind: "ol",
          items: [
            "**Elastische Kategorien zu knapp budgetieren.** Der häufigste Grund, warum ein nullbasiertes Budget im ersten Monat stirbt. Nimm den Drei-Monats-Durchschnitt, nicht die Wunschzahl. Wenn der Durchschnitt 200 für Lebensmittel ist, plane 200.",
            "**Die wöchentliche Überprüfung überspringen.** Die Überprüfung ist das, was den Plan ehrlich hält. Ohne sie ist der Plan eine Wunschliste. Mit ihr ist der Plan ein Vertrag, den du mit dir selbst hältst.",
            "**Die Unregelmäßigen vergessen.** Versicherungen, Geschenke, Reisen, Schule, Arzt. Die Unregelmäßigen sind dort, wo sich die Überraschungen verstecken. Die Überraschung zu beseitigen heißt, jeden Monat für sie zuzuweisen, auch in kleinen Beträgen.",
            "**Überschreitung als Versagen behandeln.** Überschreitung ist eine Information. Bewege Geld aus einer anderen Kategorie, passe den Plan an und mach weiter. Die Regel «stehe Schläge durch» ist es, die ein langfristiges nullbasiertes Budget von einem Drei-Monats-Budget unterscheidet.",
            "**Einen Plan einmal bauen und nie wieder besuchen.** Ein Budget ist ein lebendiges Dokument. Wenn es sich nicht ändert, hat sich das Leben, für das es entworfen wurde, geändert, und das Budget ist nicht mehr synchron mit der Realität. Der monatliche Neuaufbau ist es, der die Synchronisation hält.",
            "**Das Ziel zu aggressiv auf null setzen.** Ein Budget, das bei null landet, ist ein Budget ohne Puffer. Lass eine kleine «bereit zum Zuweisen»- oder diskretionäre Zeile stehen, selbst wenn es nur 20 Euro sind. Der Puffer ist es, der die Überraschungen absorbiert, die die Kategorien nicht gefangen haben.",
          ],
        },
        {
          kind: "h2",
          id: "methodenvergleich",
          text: "Wie sich nullbasiert mit anderen Methoden vergleicht",
        },
        {
          kind: "p",
          text: "Nullbasiertes Budgetieren ist eine von mehreren bekannten Budgetmethoden. Die Unterschiede sind wichtig, weil sie bestimmen, wie viel Zeit und Struktur die Methode von dir verlangt.",
        },
        {
          kind: "p",
          text: "Die [50/30/20-Regel](/de/blog/50-30-20-rule) teilt das Einkommen in drei prozentuale Eimer: 50% für Bedürfnisse, 30% für Wünsche, 20% für die Zukunft (Sparen und Schulden). Sie ist die leichteste Methode und die am einfachsten zu führende. Der Nachteil ist, dass die Kategorien innerhalb jedes Eimers immer noch deine Entscheidung sind, was bedeutet, dass eine Überschreitung sich lange im Wünsche-Eimer verstecken kann, bevor sie sichtbar wird. Nullbasiertes Budgetieren behebt das, indem es jedem Euro eine bestimmte Kategorie gibt.",
        },
        {
          kind: "p",
          text: "Die Umschlagmethode (auch Cash Stuffing genannt) ist die bargeldbasierte Version des nullbasierten Budgetierens. Jede Kategorie hat einen Umschlag, und wenn der Umschlag leer ist, wird die Kategorie für den Monat pausiert. Die Disziplin ist dieselbe wie bei nullbasiert; der Unterschied ist, dass das Geld in physischen Umschlägen ist statt in einer Tracking-App. Die Umschlagmethode funktioniert gut für Menschen, die freier ausgeben, wenn sie eine Karte antippen. Nullbasiertes Budgetieren funktioniert gut für Menschen, die die Flexibilität von Kartenzahlungen wollen, aber die Disziplin der Umschlagmethode. Die meisten modernen nullbasierten Apps, einschließlich Savlo, lassen dich die Umschlaglogik digital als «Spaces» nachbilden.",
        },
        {
          kind: "p",
          text: "Die Prozentmethode ähnelt 50/30/20, aber mit benutzerdefinierten Eimern. Manche nutzen 70/20/10 (Ausgeben, Sparen, Wohltätigkeit). Andere nutzen 60/30/10 (Ausgeben, Zukunft, Puffer). Der Vorteil ist Flexibilität. Der Nachteil ist, dass die Eimer zu Mischkästen werden können, die dasselbe Problem verstecken, das 50/30/20 versteckt. Nullbasiertes Budgetieren bringt die Struktur eine Ebene tiefer, sodass der Ausgaben-Eimer keine einzelne Zahl mehr ist, sondern ein Satz benannter Kategorien.",
        },
        {
          kind: "p",
          text: "Die Pay-yourself-first-Methode (auch umgekehrtes Budgetieren genannt) ist das Gegenteil von nullbasiert. Du entscheidest zuerst die Spar- oder Investitionszahl, automatisierst sie und lässt den Rest des Einkommens ohne detaillierten Plan in die Ausgaben fließen. Sie ist die einfachste Methode zu führen und die schwierigste, ehrlich zu bleiben. Nullbasiertes Budgetieren ist mehr Arbeit, gibt dir aber ein viel klareres Bild davon, wohin das Geld geht.",
        },
        {
          kind: "p",
          text: "Die richtige Methode ist die, die zu deinem Leben und deiner Energie passt. Die leichteste Methode, die du in zwölf Monaten immer noch benutzen wirst, ist die richtige für dich. Die meisten Menschen, die nullbasiertes Budgetieren einmal ausprobieren, gehen nie zu einer leichteren Methode zurück, weil die Sichtbarkeit und Kontrolle schwer loszulassen sind. Aber eine leichtere Methode, die ein Jahrzehnt lang benutzt wird, ist besser als eine schwerere Methode, die einen Monat lang benutzt wird.",
        },
        {
          kind: "h2",
          id: "erster-monat",
          text: "Ein realistischer erster Monat mit nullbasiert",
        },
        {
          kind: "p",
          text: "Der erste Monat mit einem nullbasierten Budget verläuft selten reibungslos. Der Plan braucht länger zum Aufbauen als du denkst, die Kategorien sind nicht ganz richtig, und die Zahlen verschieben sich, während der Monat fortschreitet. Der Plan soll sich verschieben. Der Fehler ist, den ersten Monat als Versagen zu behandeln, wenn er am Tag eins nicht bei null landet. Der realistische erste Monat ist eher ein Entwurf als eine Endversion: Er lehrt dich, was die Kategorien sein sollten, was die Sinking-Fund-Ziele sein sollten und wie sich die elastischen Kategorien tatsächlich verhalten. Der zweite Monat ist, wenn der Plan anfängt, so auszusehen, wie du ihn ursprünglich schreiben wolltest.",
        },
        {
          kind: "p",
          text: "Ein paar praktische Tipps für den ersten Monat. Erstens, baue den Plan auf Papier oder in einer Tabellenkalkulation auf, bevor du ihn in eine App verschiebst. Die Reibung, ihn handschriftlich zu schreiben, fängt viele Fehler ab, die die App akzeptiert hätte. Zweitens, bitte eine andere Person, den Plan anzusehen, idealerweise jemanden, der auch einen Haushaltsplan führt. Sie sehen die Lücken, die du nicht siehst. Drittens, passe den Plan in den ersten drei Wochen nicht an. Lass die Kategorien entweder halten oder überzogen werden. Die Daten der ersten drei Wochen sind das, was den Plan des zweiten Monats genau macht. Viertens, plane ein Datum für den Neuaufbau. Der Neuaufbau ist der Teil des Monats, der die Schleife tatsächlich schließt.",
        },
        {
          kind: "p",
          text: "Der realistische erste Monat ist der Monat, in dem du lernst, dass das Budget ein Werkzeug zum Lernen ist, nicht ein Werkzeug zur Kontrolle. Die Daten, die du im ersten Monat sammelst, sind das, was den zwölften Monat fast mühelos macht. Die meisten Menschen, die ein Jahr lang beim nullbasierten Budgetieren bleiben, sagen dasselbe: Das Budget hörte auf, etwas zu sein, das sie pflegen mussten, und wurde etwas, auf das sie nicht mehr verzichten wollten.",
        },
        {
          kind: "h2",
          id: "sechs-monate",
          text: "Was sich nach sechs Monaten nullbasiert ändert",
        },
        {
          kind: "p",
          text: "Im sechsten Monat hat sich der Plan normalerweise in einen Rhythmus eingependelt. Die Kategorien sind nahe an ihrer endgültigen Form. Die Sinking-Fund-Ziele sind nahe an ihrer endgültigen Form. Der Puffer (die «bereit zum Zuweisen»-Zeile) fängt an, sich komfortabel anzufühlen. Die Überraschungsausgaben überraschen nicht mehr. Die mentale Last des Budgets hat sich halbiert, weil das System in deinem Muskelgedächtnis ist.",
        },
        {
          kind: "p",
          text: "Die Verschiebung, die normalerweise um den sechsten Monat herum passiert, geht von «Ich folge einem Plan» zu «Der Plan folgt mir». Die Kategorien sind keine Einschränkung mehr. Sie sind eine Beschreibung des Lebens, das du führst. Eine neue Ausgabenkategorie erscheint (Fitnessstudio, Aktivität eines Kindes) und das System absorbiert es ohne Drama. Eine alte Kategorie schrumpft (du pendelst nicht mehr ins Büro) und das System absorbiert auch das. Der Plan ist lebendig. Der Plan gehört dir.",
        },
        {
          kind: "p",
          text: "Die andere Verschiebung ist die Beziehung zur Überschreitung. In den ersten Monaten fühlte sich eine Überschreitung wie ein Versagen an. Im sechsten Monat fühlt sich eine Überschreitung wie eine Frage an: Welche Kategorie hat diesen Monat Überschuss, und kann ich Geld von dort verschieben? Die Daten haben aufgehört, ein Urteil zu sein, und sind ein Werkzeug geworden. Der Plan landet weiterhin bei null. Der Monat geht weiter. Die Ruhe, die das System erzeugen sollte, fängt an, sich wirklich wie Ruhe anzufühlen.",
        },
        {
          kind: "p",
          text: "Die Verschiebung um den sechsten Monat ist auch der Punkt, an dem die meisten anfangen sich zu fragen, was passiert, wenn sie weitermachen. Die Antwort ist für die meisten, dass das Budget jedes Jahr schärfer wird, die Sinking Funds mehr und mehr vom Jahr abdecken und der «bereit zum Zuweisen»-Puffer groß genug wird, um einen einzelnen schlechten Monat zu absorbieren, ohne den Plan zu brechen. Das ist der lange Bogen des nullbasierten Budgetierens: kein Ein-Monats-Projekt, sondern ein mehrjähriges Upgrade der Art, wie du über Geld denkst.",
        },
        {
          kind: "h2",
          id: "jahresreview",
          text: "Der Jahresrückblick, der das System ehrlich hält",
        },
        {
          kind: "p",
          text: "Einmal im Jahr verdient das Budget einen tieferen Blick als den monatlichen Neuaufbau. Der Jahresrückblick ist der Ort, an dem die Daten der letzten zwölf Monate zum Plan der nächsten zwölf werden. Die meisten machen es Ende Dezember oder Anfang Januar, wenn das Jahr frisch ist und das nächste Gestalt annimmt. Der Rückblick hat drei Teile.",
        },
        {
          kind: "p",
          text: "Erstens, schau dir die Kategorien an, die konsequent überzogen wurden. Eine Kategorie, die jeden Monat überzogen wird, ist kein Überschreitungsproblem. Es ist ein Größenproblem. Die Lösung ist, die Kategorie zu erhöhen, oder zu fragen, ob die Kategorie die richtige Form hat. Manchmal ist die richtige Lösung, eine Kategorie in zwei zu teilen. Eine «Essen gehen»-Kategorie, die jeden Monat überzogen wird, ist vielleicht wirklich eine «Essen gehen»- und eine «Soziales»-Kategorie. Die Teilung reduziert die Ausgabe nicht, aber sie macht die Ausgabe ehrlich.",
        },
        {
          kind: "p",
          text: "Zweitens, schau dir die Kategorien an, die konsequent Überschuss hatten. Eine Kategorie mit drei Monaten Überschuss in Folge ist entweder überfinanziert oder nicht mehr relevant. Die Lösung ist, sie zu reduzieren und das freigewordene Geld in ein Ziel, einen Sinking Fund oder eine Schuldentilgung zu verschieben. Der Jahresrückblick ist der Moment, in dem die Form des Budgets mit der Form des Lebens gleichzieht.",
        },
        {
          kind: "p",
          text: "Drittens, schau dir die Ziele an. Welche Sinking Funds sind so gewachsen, wie du es wolltest? Welche Ziele wurden spät finanziert? Welche Ziele sind nicht mehr relevant? Der Jahresrückblick ist der richtige Moment, ein Ziel, das keine Priorität mehr ist, aufzugeben und ein neues hinzuzufügen, das aufgetaucht ist. Ein Budget soll das Leben verfolgen, nicht das Leben von vor drei Jahren.",
        },
        {
          kind: "h2",
          id: "tracking-tipps",
          text: "Tracking-Tipps, die nullbasiert nachhaltig machen",
        },
        {
          kind: "p",
          text: "Der größte einzelne Faktor dafür, ob ein nullbasiertes Budget überlebt, ist, wie einfach es ist, eine Transaktion zu loggen. Die Reibung des Tracking-Schritts ist es, was das System tötet. Wenn das Loggen eines 3-Euro-Kaffees mehr als fünf Sekunden dauert, wird der Eintrag übersprungen. Die Lösung ist, eine Tracking-Methode mit der geringstmöglichen Reibung zu wählen.",
        },
        {
          kind: "p",
          text: "Die nachhaltigsten Tracking-Methoden, in Reihenfolge der Reibung. Erstens, eine App mit Spracheingabe. Du öffnest die App, sprichst die Ausgabe, und die App loggt sie. Die Gesamtzeit liegt näher an zwei Sekunden als an fünf. Der Preis ist, dass die Spracherkennung nicht immer perfekt ist, und der Eintrag manchmal eine schnelle Korrektur braucht. Zweitens, ein Schnell-hinzufügen-Widget auf dem Startbildschirm des Handys. Tippen, Betrag eingeben, Kategorie wählen, fertig. Gesamtzeit: fünf Sekunden. Drittens, eine Notizen-App. Notiere die Ausgabe in einer laufenden Liste und übertrage sie einmal pro Woche ins Budget. Die Reibung im Moment ist geringer, aber die wöchentliche Übertragung ist ihre eigene Art von Arbeit.",
        },
        {
          kind: "p",
          text: "Welche Methode du auch wählst, die Regel ist dieselbe: Logge die Ausgabe in dem Moment, in dem du sie machst, nicht am nächsten Morgen, nicht am nächsten Wochenende. Je größer die Lücke zwischen Ausgabe und Log, desto mehr Einträge wirst du vergessen, und desto weniger nützlich ist das Budget. Ein geloggter 3-Euro-Kaffee ist eine Information. Ein vergessener 3-Euro-Kaffee ist Geld, das verschwindet. Die erste Version des Budgets füttert das System. Die zweite füttert die Illusion, dass du weißt, wohin das Geld geht.",
        },
        {
          kind: "h2",
          id: "tieferer-blick",
          text: "Ein tieferer Blick auf die vier Regeln in der Praxis",
        },
        {
          kind: "p",
          text: "Es ist eine Sache, die vier Regeln des nullbasierten Budgetierens zu kennen. Es ist eine andere, zu sehen, wie sie sich über ein ganzes Jahr realer Entscheidungen entfalten. Die vier Regeln sind: gib jedem Euro einen Job, akzeptiere deine wahren Ausgaben, stehe Schläge durch, und lasse dein Geld altern. Die meisten Menschen, die das System über den dritten Monat hinaus führen, berichten, dass jede dieser Regeln in einem anderen Rhythmus auftaucht: die erste ist täglich, die zweite ist monatlich, die dritte ist wöchentlich, und die vierte ist der lange Bogen, der erst nach mehreren Monaten sichtbar wird.",
        },
        {
          kind: "p",
          text: "Die erste Regel, gib jedem Euro einen Job, ist die, die das Planungsritual antreibt. Jeder Euro auf dem Konto hat eine Kategorie, und jede Kategorie hat einen Saldo. Wenn eine Transaktion kommt, sinkt der Saldo der Kategorie. Wenn Einkommen kommt, werden die Kategorien aufgefüllt. Die Arbeit passiert zu Monatsbeginn, wenn der Plan neu aufgebaut wird, und in jedem Moment, in dem ein neuer Euro ankommt. Die Regel ist kein einmaliges Ereignis. Sie ist eine kontinuierliche Entscheidung. Je öfter du die Entscheidung triffst, desto weniger Aufwand kostet sie. Der Plan wird Muskelgedächtnis.",
        },
        {
          kind: "p",
          text: "Die zweite Regel, akzeptiere deine wahren Ausgaben, ist die, die am längsten braucht, um sich natürlich anzufühlen. Der Instinkt ist, nur die Rechnungen zu budgetieren, die in diesem Monat anfallen. Die Praxis des nullbasierten Budgetierens ist, die Rechnungen zu budgetieren, die in diesem Jahr anfallen, gleichmäßig über die Monate verteilt. Die Verschiebung ist auf dem Papier klein (ein paar Dutzend Euro pro Kategorie pro Monat) und im Leben riesig (keine Überraschungsausgaben mehr, keine Jahresgebühren mehr, die sich wie Notfälle anfühlen). Der Sinking Fund ist die strukturelle Form dieser Regel. Hier lebt die Regel im Budget.",
        },
        {
          kind: "p",
          text: "Die dritte Regel, stehe Schläge durch, ist die, der die meisten in den ersten Monaten widerstehen und auf die sie sich im sechsten Monat verlassen. Der Instinkt ist, eine Überschreitung als moralisches Versagen zu behandeln. Die Praxis des nullbasierten Budgetierens ist, eine Überschreitung als Datenpunkt zu behandeln. Die Kategorie, die überzogen wurde, ist jetzt eine Informationsquelle. Entweder war sie zu klein dimensioniert (und die Lösung ist, sie nächsten Monat neu zu dimensionieren), oder die Ausgabe war ein einmaliges Ereignis (und die Lösung ist, Geld aus einer Kategorie mit Überschuss zu verschieben). Die Regel ist der Unterschied zwischen einem Budget, das den Kontakt mit der Realität überlebt, und einem Budget, das im dritten Monat aufgegeben wird.",
        },
        {
          kind: "p",
          text: "Die vier Regeln sind keine Liste zum Auswendiglernen. Sie sind eine Beschreibung des Verhaltens, das das System belohnt. Im ersten Monat folgst du ihnen mit Mühe. Im sechsten Monat folgst du ihnen aus Gewohnheit. Im zwölften Monat hörst du auf, sie zu bemerken, weil sie die Art sind, wie das Budget funktioniert. Das System ist nicht mehr etwas, das du tust. Es ist die Art, wie du über Geld denkst. Das ist der lange Bogen des nullbasierten Budgetierens: ein Ein-Monats-Projekt, das zu einem mehrjährigen Upgrade wird.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Häufig gestellte Fragen",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Bedeutet ein nullbasiertes Budget, dass ich jeden Euro ausgeben muss?",
              a: "Nein. Die «Null» im Namen bezieht sich auf den nicht zugewiesenen Saldo, nicht auf den ausgegebenen Betrag. Das Ziel ist, jeden Euro einer Aufgabe zuzuweisen. Die Aufgabe kann eine Ausgabenkategorie, ein Sinking Fund, ein Sparziel oder eine Schuldentilgung sein. Die meisten Monate enden damit, dass die zugewiesenen Euros größtenteils ausgegeben sind, aber einige Aufgaben (wie Sparen) sind darauf ausgelegt, den Saldo wachsen zu lassen, nicht zu schrumpfen.",
            },
            {
              q: "Wie viel Zeit kostet die Pflege eines nullbasierten Budgets pro Monat?",
              a: "Der erste Monat dauert meistens sechzig bis neunzig Minuten. Im dritten Monat können die meisten den Plan in dreißig Minuten neu aufbauen. Die wöchentliche Überprüfung dauert fünfzehn bis zwanzig Minuten. Der Jahresrückblick, der den Plan mit dem tatsächlichen Jahr vergleicht, dauert etwa eine Stunde. Der gesamte Zeitaufwand für ein Jahr liegt bei ungefähr fünfzehn bis zwanzig Stunden, weniger als die meisten für Streaming-Dienste ausgeben.",
            },
            {
              q: "Was ist der Unterschied zwischen nullbasiertem Budgetieren und der 50/30/20-Regel?",
              a: "Die 50/30/20-Regel teilt das Einkommen in drei prozentuale Eimer (Bedürfnisse, Wünsche, Zukunft). Sie ist ein guter Ausgangspunkt. Nullbasiertes Budgetieren geht eine Ebene tiefer: Es weist jeden Euro einer bestimmten Kategorie oder einem Ziel innerhalb dieser Eimer zu. Wenn 50/30/20 eine Karte mit hoher Flughöhe ist, ist nullbasiert die Abbiege-für-Abbiege-Anleitung.",
            },
            {
              q: "Was, wenn ich nicht auf null kommen kann, weil meine Ausgaben meine Einnahmen übersteigen?",
              a: "Das ist eine strukturelle Lücke, kein Budgetversagen. Der erste Schritt ist, sich die größten festen Kategorien (Wohnen, Verkehr, Mindestschuldentilgung) anzusehen und zu prüfen, ob etwas neu verhandelt werden kann. Der zweite Schritt ist, Einkommen hinzuzufügen. Der dritte ist, um Hilfe zu bitten. Das Budget kann eine strukturelle Lücke nicht beheben, aber es kann sie klar zeigen, und das ist der erste Schritt, sie zu schließen.",
            },
            {
              q: "Ist nullbasiertes Budgetieren gut für Paare?",
              a: "Ja, mit einer Anpassung. Die meisten Paare führen einen kleinen Satz gemeinsamer Kategorien (Wohnen, Lebensmittel, Sparen) und einen kleinen Satz persönlicher Kategorien (persönliche Ausgaben, individuelle Ziele). Die gemeinsamen Kategorien sind zusammen nullbasiert. Die persönlichen Kategorien sind individuell nullbasiert. Das Gespräch darüber, wer was finanziert, findet einmal im Monat statt, beim Neuaufbau.",
            },
            {
              q: "Kann ich nullbasiertes Budgetieren ohne App nutzen?",
              a: "Ja. Eine leere Tabellenkalkulation mit Spalten für Kategorie, geplant, tatsächlich und Differenz reicht aus, um die Methode zu führen. Ein Notizbuch aus Papier funktioniert auch. Die App ist hilfreich für das kontinuierliche Tracking kleiner Ausgaben, aber der Planungsteil des nullbasierten Budgetierens kann überall gemacht werden, und viele Menschen führen die ganze Methode jahrelang auf einer einzigen Seite in einem Notizbuch. Das richtige Werkzeug ist das, das du nächsten Monat immer noch benutzen wirst.",
            },
          ],
        },
        {
          kind: "h2",
          id: "fazit",
          text: "Ein ruhiger, vollständiger Plan, zu dem du zurückkehren kannst",
        },
        {
          kind: "p",
          text: "Nullbasiertes Budgetieren ist eine Möglichkeit, jedem Euro einen Job zu geben, die wahren Ausgaben zu akzeptieren, die ein paar Mal im Jahr auftauchen, Schläge durchzustehen, wenn eine Kategorie überzogen wird, und dein Geld altern zu lassen, damit sich die Lücke zwischen Verdienen und Ausgeben weitet. Die Methode ist nicht für jeden. Sie belohnt Menschen, die Struktur und Beständigkeit mögen, und sie ist schwerer durchzuhalten, wenn das Einkommen sehr unregelmäßig ist. Für die meisten wird es das ruhigste Budget, das sie je geführt haben, und das einfachste, zu dem sie nach einem schlechten Monat zurückkehren können.",
        },
        {
          kind: "p",
          text: "Wenn du die Methode ausprobieren willst, ohne dich auf eine neue App festzulegen, führe sie einen Monat lang in einer Tabellenkalkulation. Wenn du ein Werkzeug willst, das deine Privatsphäre respektiert, keine Bankzugangsdaten verlangt und nach denselben vier Regeln funktioniert, ist Savlo auf Android verfügbar und kommt bald auf iOS. Es ist um dieselben Prinzipien herum gebaut: weise jeden Euro zu, akzeptiere die wahren Ausgaben, stehe Schläge durch und lasse dein Geld altern. Der Rest dieses Blogs vertieft verwandte Ideen, von der [breiteren Budgetphilosophie](/de/blog/how-to-budget-money) bis zur [praktischen Sinking-Fund-Mechanik](/de/blog/sinking-funds), falls du weitermachen willst.",
        },
      ],
    },
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
  "how-to-budget-money": {
    title:
      "Wie man Geld budgetiert: ein ruhiger, vollstaendiger Leitfaden fuer Anfaenger",
    description:
      "Ein klarer, vorurteilsfreier Leitfaden zum Budgetieren fuer Anfaenger. Lerne die vier Zahlen, die jedes Budget bewegen, drei Stile, die wirklich funktionieren, und wie du Ausgaben erfasst, ohne dich zu ueberlasten.",
    summary: [
      "Budgetieren ist keine Strafe und kein Willenstest. Es ist ein kurzer Plan, den du mit dir selbst schliesst, bevor du ausgibst, und der Unterschied zwischen Autofahren mit Karte und nur mit Rueckspiegel.",
      "Dieser Leitfaden geht der Reihe nach durch, wie du Geld denkst, ohne zurueckzuschrecken, wie du ein Budget baust, das du wirklich haeltst, wie du Ausgaben erfasst, ohne dass der Tag davon vereinnahmt wird, und wie du dich erholst, wenn das Leben den Plan bricht.",
    ],
    sections: [
      {
        heading: "Was Budgetieren wirklich bedeutet",
        body: [
          "Ein nuetzliches Budget ist keine perfekte Tabelle und keine zu haeltende Streak. Es ist ein kurzes, schriftliches Versprechen an dein zukuenftiges Ich, wie du im naechsten Monat Geld ausgeben wirst.",
          "Budgets scheitern meistens an drei Dingen: Sie wollen jeden Cent erfassen, sie werden auf Brutto- statt Nettoeinkommen gebaut, oder sie werden nur am Monatsende geprueft, wenn der Zug schon abgefahren ist. Keines dieser Probleme liegt bei dir.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Geld zu budgetieren ist eine der praktischsten Faehigkeiten, die es gibt. Es ist keine finanzielle Diaet, kein Willenstest, und es muss kein Sonntagabend-Ritual mit Tabellen werden. Es ist ein kurzer, ehrlicher und leicht anpassbarer Plan, der veraendert, wie du jeden Monat auf das schaust, was hereinkommt und was dein Konto verlaesst. Der Unterschied zwischen Budgetieren und Nicht-Budgetieren ist der Unterschied zwischen Autofahren mit Karte und nur mit Rueckspiegel. Beide bringen dich irgendwohin, aber nur eines laesst du das Ziel waehlen.",
        },
        {
          kind: "p",
          text: "Dieser Leitfaden richtet sich an alle, die nie ein Budget hatten, an alle, die es versucht und aufgegeben haben, und an alle, die seit Jahren ein altes Budget pflegen, das nicht mehr zum aktuellen Leben passt. Du findest hier die vier Zahlen, die jedes Budget bewegen, drei Stile, die funktionieren, eine Schritt-fuer-Schritt-Anleitung mit sieben Schritten fuer den Start bei null, und ein System, das an einem Nachmittag pro Woche passt. Statt Jargon bekommst du konkrete Beispiele. Statt grosser Versprechen zeigen wir, was in den meisten Monaten wirklich passiert: Du wirst irgendeine Kategorie sprengen, und das ist in Ordnung. Der Plan existiert genau dafuer, dir zu helfen, zurueckzufinden.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Savlo ist auf Android verfuegbar und kommt bald auf iOS. Du kannst alles aus diesem Leitfaden in einer Tabelle, in einem Notizbuch oder in jeder App umsetzen, die deine Privatsphaere respektiert. Wenn du Savlo ausprobierst, wurde es genau als dieser Begleiter gedacht: einfach, ruhig und ohne Abfrage von Bank-Zugangsdaten.",
        },
        {
          kind: "h2",
          text: "Was Budgetieren wirklich bedeutet",
          id: "was-budgetieren-bedeutet",
        },
        {
          kind: "p",
          text: "Budgetieren heisst, eine bewusste Entscheidung zu treffen, bevor du ausgibst. Es geht nicht um Verzicht, nicht um Bestrafung, und nicht darum, in Angst vor der naechsten Rechnung zu leben. Es bedeutet einfach, klar zu sagen, wohin das Geld in diesem Monat arbeiten soll, anstatt es auf dem Kontoauszug zu entdecken.",
        },
        {
          kind: "p",
          text: "Ein gutes Budget funktioniert wie ein Versprechen, das du mit dir selbst unterschreibst. Wenn das Versprechen vage ist, etwa 'ich gebe weniger aus', haelt es nicht. Wenn es konkret ist, etwa 'ich lege sechshundert Euro in den Notgroschen und vierhundert in Freizeit', hat es eine echte Chance zu ueberleben. Ein Budget ist eine Vereinbarung zwischen deinem aktuellen Leben und dem Leben, das du in den naechsten zwoelf Monaten aufbauen willst.",
        },
        {
          kind: "p",
          text: "Deshalb beginnt ein gutes Budget nicht in einer Tabelle. Es beginnt in einem ehrlichen Gespraech darueber, was dich beunruhigt: die Kreditkartenrechnung, die nie ins Gehalt passt, das Gefuehl, nicht zu wissen, wohin das Geld ging, die Angst, keinen Puffer fuer einen Notfall zu haben. Die Tabelle ist nur die Form, dieses Gespraech nuetzlich festzuhalten.",
        },
        {
          kind: "h3",
          text: "Warum die meisten Budgets scheitern",
          id: "warum-budgets-scheitern",
        },
        {
          kind: "p",
          text: "Budgets scheitern meist aus drei Gruenden, und keiner hat mit deiner Disziplin zu tun. Der erste ist der Versuch, jeden Cent zu erfassen. Der zweite ist, den Plan auf das Bruttogehalt zu bauen, statt auf das Netto. Der dritte ist, alles erst am Monatsende zu pruefen, wenn der Schaden bereits da ist. Wenn ein Budget muede geboren wird, stirbt es muede.",
        },
        {
          kind: "p",
          text: "Es gibt auch eine emotionale Komponente. Die meisten Menschen wurden darin erzogen, Geld als Frage der Willenskraft zu sehen. Wenn das Budget eng wird, lautet die automatische Reaktion 'ich habe versagt'. Aber das verwechselt das Werkzeug mit der Bedienung. Ein Hammer ist nicht schuld am schiefen Nagel, und ein Budget ist nicht schuld an deiner Muidigkeit. Es ist eine Karte, kein Richter.",
        },
        {
          kind: "p",
          text: "Dieser Leitfaden will dir eine einfache Karte geben. Wenn du die Schritte befolgst, hast du einen Plan, der auf ein Blatt Papier passt und in guten wie in schlechten Monaten funktioniert. Wenn etwas schiefgeht, zeigen wir dir auch, wie du zurueckkommst.",
        },
        {
          kind: "h2",
          text: "Die vier Zahlen, die jedes Budget bewegen",
          id: "vier-zahlen",
        },
        {
          kind: "p",
          text: "Jedes Budget, ob detailliert oder einfach, entsteht aus denselben vier Zahlen. Wenn du lernst, sie in deinem Leben zu erkennen, verstehst du bereits mehr ueber dein Geld als die meisten Menschen. Es sind: Nettoeinkommen, Fixkosten, variable Ausgaben und Sparquote.",
        },
        {
          kind: "h3",
          text: "Nettoeinkommen",
          id: "nettoeinkommen",
        },
        {
          kind: "p",
          text: "Es ist das Geld, das tatsaechlich auf deinem Konto ankommt, nach Steuern und Pflichtabgaben. Die klassische Falle ist, mit dem Bruttogehalt zu planen, also der Zahl aus dem Vertrag, die aber nie auf dem Konto erscheint. Mit dem Brutto zu planen erzeugt eine stille Differenz von zehn bis zwanzig Prozent zwischen dem, was du glaubst zu haben, und dem, was wirklich ankommt. Diese Differenz ist allein schon der groesste Grund fuer das Gefuehl, dass Geld einfach verdampft.",
        },
        {
          kind: "h3",
          text: "Fixkosten",
          id: "fixkosten",
        },
        {
          kind: "p",
          text: "Das sind Ausgaben, die sich jeden Monat wiederholen, mit aehnlichem Betrag: Miete oder Finanzierung, Nebenkosten, Strom, Wasser, Internet, Raten, Mitgliedschaften, Abos. Liste alles auf, was per Lastschrift, Einzugsermächtigung oder Kreditkarte mit festem Datum bezahlt wird. Summiere. Das ist dein Ausgangspunkt. Die Fixkosten bestimmen, was uebrig bleibt und damit, was du gezielt steuern kannst.",
        },
        {
          kind: "h3",
          text: "Variable Ausgaben",
          id: "variable-ausgaben",
        },
        {
          kind: "p",
          text: "Hier liegt die Flexibilitaet. Lebensmittel, Transport, Freizeit, Kleidung, Ausgehen, Geschenke, Lieferdienste. Es sind Ausgaben, deren Betrag sich von Monat zu Monat aendert und in denen gleichzeitig der groesste Teil der finanziellen Anspannung steckt. Der Grund ist einfach: weil der Betrag variiert, variiert auch das Kontrollgefuehl. Ein gutes Budget behandelt variable Ausgaben mit zwei Fragen: Was ist der Durchschnitt, und was ist die bequeme Obergrenze?",
        },
        {
          kind: "h3",
          text: "Sparquote",
          id: "sparquote",
        },
        {
          kind: "p",
          text: "Es ist der Teil des Nettoeinkommens, der nach Fixkosten und variablen Ausgaben uebrig bleibt. Am Anfang kann sie negativ sein. Das ist keine Niederlage, das ist eine Diagnose. Eine negative Sparquote sagt dir, dass das Problem nicht das Sparen ist, sondern das Anpassen einer der drei anderen Variablen. Es kann ein Fixkostenblock sein, eine zu hohe variable Ausgabe oder eine zu geringe Einnahme. Wichtig ist, der Zahl ins Gesicht zu schauen. Budgetieren heisst zu einem grossen Teil, eine Sparquote festzulegen, mit der du ruhig schlafen kannst.",
        },
        {
          kind: "h2",
          text: "Drei Budgetstile, die wirklich funktionieren",
          id: "drei-stile",
        },
        {
          kind: "p",
          text: "Es gibt nicht die eine richtige Methode. Es gibt unterschiedliche Methoden fuer unterschiedliche Temperamente und Lebensrhythmen. Wir stellen drei vor, die den Zahn der Zeit ueberlebt haben, und sagen, wann jede am besten passt.",
        },
        {
          kind: "h3",
          text: "Die 50/30/20-Regel",
          id: "regel-50-30-20",
        },
        {
          kind: "p",
          text: "Die 50/30/20-Regel teilt das Nettoeinkommen in drei einfache Scheiben: fuenfzig Prozent fuer Beduerfnisse, dreissig Prozent fuer Wuensche und zwanzig Prozent fuer Sparen und fuer den beschleunigten Rueckzahl von Schulden ueber dem Minimum. Die Schoenheit der Regel liegt in der Proportion. Statt Betraege pro Kategorie zu raten, entscheidest du Prioritaeten. Sie funktioniert besonders gut fuer Einsteiger, die einen Startpunkt suchen, ohne vor der Tabelle zu erstarren.",
        },
        {
          kind: "p",
          text: "Eng wird es, wenn der Block der Beduerfnisse ueber fuenfzig Prozent liegt. Dann greift die Proportion nicht mehr und das Sparen verschwindet. In diesem Fall ist es sinnvoller, den Beduerfnisblock zu pruefen statt die Methode zu wechseln: meistens sind es eine zu teure Miete, ein zu schwerer Autokredit oder Raten, die zu viel besetzen. Einen Fixposten zu kuerzen bringt mehr als zwanzig Kaffee pro Monat zu streichen. Deshalb ist das Verstehen von [Fixkosten und variablen Ausgaben](#fixkosten) die Grundlage jedes Plans.",
        },
        {
          kind: "h3",
          text: "Nullbudget",
          id: "nullbudget",
        },
        {
          kind: "p",
          text: "Beim Nullbudget bekommt jeder Euro vor Monatsbeginn eine Aufgabe. Wenn der Monat startet, bleibt nichts ohne Ziel uebrig. Wenn etwas uebrig bleibt, geht dieser Ueberschuss in ein konkretes Ziel: Notgroschen aufstocken, eine Schuld schneller abbezahlen, oder fuer ein bestimmtes Vorhaben sparen. Diese Methode passt, wenn dich das Gefuehl stoert, dass Geld einfach verschwindet. Sie ist auch die bevorzugte Methode fuer Menschen, die das ganze Monatsbild sehen wollen, statt unterwegs zu improvisieren.",
        },
        {
          kind: "p",
          text: "Der Nachteil ist die Zeit, die zu Monatsbeginn investiert wird. Fuer die meisten lohnt sich eine Stunde Planung, um dafuer zwoelf Stunden Ruhe zu gewinnen. Wenn du dich darin wiedererkennst, lohnt sich ein Blick in unseren [Leitfaden zum Nullbudget](/de/blog/zero-based-budgeting).",
        },
        {
          kind: "h3",
          text: "Umschlaege und Spaces",
          id: "umschlaege-spaces",
        },
        {
          kind: "p",
          text: "Die Umschlagmethode trennt Geld in physische Kategorien: ein Umschlag fuer Lebensmittel, ein anderer fuer Transport, ein weiterer fuer Freizeit. Wenn der Umschlag leer ist, pausiert die Kategorie bis zum naechsten Monat. Die digitale Version, Spaces genannt, macht das gleiche ohne Bargeld: jede Kategorie hat ihren virtuellen Saldo, und die App kuemmert sich um den laestigen Teil. Savlo setzt genau diese Idee um, mit Spaces, die zu Monatsbeginn gefuellt und im Laufe des Monats geleert werden. Wenn dich das interessiert, lohnt ein Blick darauf, wie [Spaces in Savlo funktionieren](/de/blog/sinking-funds), die eine erweiterte Umschlagform fuer groessere Ziele wie Jahresversicherungen oder Reisen sind.",
        },
        {
          kind: "h2",
          text: "Sieben Schritte, um ein Geldbudget von null aufzubauen",
          id: "sieben-schritte",
        },
        {
          kind: "p",
          text: "Jetzt wird es konkret. Die folgenden Schritte funktionieren sowohl fuer alle, die nie budgetiert haben, als auch fuer alle, die ihr Budget nach einer turbulenten Phase neu aufbauen. Nimm dir sechzig bis neunzig Minuten an einem ruhigen Moment, mit Kaffee, Taschenrechner und den Auszuegen der letzten drei Monate zur Hand. Es geht nicht um chirurgische Praezision, sondern um Klarheit.",
        },
        {
          kind: "ol",
          items: [
            "**Sammle die Auszuege der letzten drei Monate.** Drucke sie aus oder oeffne sie auf dem Handy, fuer das Hauptkonto und die Kreditkarte. Drei Monate sind das Minimum, um Saisonalitaeten zu erkennen, etwa Rechnungen, die alle zwei Monate kommen, oder saisonale Ausgaben.",
            "**Berechne dein tatsaechliches Nettoeinkommen.** Summiere alle Einzahlungen der letzten drei Monate und teile durch drei. Nutze den Durchschnitt der letzten Monate als Basis. Wenn dein Einkommen schwankt, nimm den niedrigsten der letzten sechs Monate, nicht den Durchschnitt. Ziel ist, nicht mit Optimismus zu planen.",
            "**Liste die Fixkosten auf.** Summe aus Miete, Rechnungen, Raten, Mitgliedschaften, Abos, fixem Transport. Dieser Betrag geht schon ab, bevor der Monat beginnt. Das sind deine Existenzkosten. Sie bestimmen, was fuer den Rest uebrig bleibt.",
            "**Liste die variablen Durchschnittsausgaben auf.** Schau in den Auszug und gruppiere in drei bis sechs grosse Kategorien: Lebensmittel, Transport, Freizeit, Gesundheit, Persoenliches, Sonstiges. Summiere jede Kategorie. Du wirst entdecken, wohin der groesste Teil der variablen Ausgaben fliesst. Erschrick nicht, wenn etwas auftaucht.",
            "**Lege eine machbare Sparquote fest.** Nimm das Nettoeinkommen, ziehe Fixkosten und variable Durchschnitte ab, und schau, was uebrig bleibt. Wenn etwas uebrig bleibt, ist es das, was du zur Seite legen oder in die schnellere Tilgung von Schulden stecken kannst. Wenn nichts uebrig bleibt, geh zurueck zu den Fixkosten und pruefe, was sich neu verhandeln laesst, oder zu den variablen Ausgaben und pruefe, was sich ohne Leiden zusammenstreichen laesst.",
            "**Vergebe jedem Euro ein Ziel.** Verteile den Ueberschuss auf Notgroschen, vorgezogene Schuldenzahlung, mittelfristige Ziele und eine garantierte Freizeitkategorie. Die Freizeitkategorie ist so wichtig wie die anderen. Ein Budget ohne Spass bricht in der ersten Woche.",
            "**Lege eine woechentliche Pruefung von zwanzig Minuten fest.** Jeden Sonntag, oder an einem festen Tag, oeffnest du den Plan, siehst, was sich geaendert hat, passt an, was angepasst werden muss, und machst weiter. Die woechentliche Pruefung ist das, was ein Budget, das einen Monat haelt, von einem unterscheidet, das Jahre haelt.",
          ],
        },
        {
          kind: "callout",
          tone: "info",
          text: "Wenn du diesen Prozess noch nie durchlaufen hast, bringt dich allein das Abschliessen der ersten drei Schritte in eine bessere Position als die meisten. Der groesste Teil des Gewinns liegt am Anfang, wenn Geld aufhoert, abstrakt zu sein.",
        },
        {
          kind: "h2",
          text: "Ausgaben erfassen, ohne auszubrennen",
          id: "ausgaben-erfassen",
        },
        {
          kind: "p",
          text: "Nach dem Aufbau des Plans ist das Erfassen der zweite Teil im Leben eines Budgets. Hier stocken viele, weil die Theorie in die Praxis umgesetzt werden muss, ohne zur weiteren Pflicht zu werden. Die gute Nachricht: Es gibt heute drei Wege, und du kannst zwei davon kombinieren, ohne schlechtes Gewissen. Wichtig ist nicht Perfektion, sondern Bestaendigkeit.",
        },
        {
          kind: "h3",
          text: "Erfassung per Sprache",
          id: "erfassung-sprache",
        },
        {
          kind: "p",
          text: "Erfassung per Sprache ist die schnellste Form, eine Ausgabe im Moment festzuhalten. Statt die App zu oeffnen, die richtige Kategorie zu suchen und den Betrag zu tippen, sagst du einen kurzen Satz wie 'Mittagessen zweiunddreissig Euro auf Karte', und der Eintrag erscheint fertig. Dieser Weg ist besonders nuetzlich fuer alle mit engem Tagesplan, die das Budget im Kopf fuehren, waehrend sie laufen oder fahren, und die den Moment der Erfassung nicht verpassen wollen, solange das Gedaechtnis frisch ist. Wer ausser Haus arbeitet oder schwankendes Einkommen hat, kann mit [Ausgaben per Sprache erfassen](/de/blog/voice-expense-tracking) die Reibung so weit senken, dass es zur Gewohnheit wird.",
        },
        {
          kind: "h3",
          text: "Manuelles Erfassen",
          id: "manuelles-erfassen",
        },
        {
          kind: "p",
          text: "Das manuelle Erfassen, abends in Ruhe oder bei der woechentlichen Pruefung, ist die aelteste und immer noch eine der solidesten Formen. Der Vorteil ist das Bewusstsein: jede Ausgabe einzutippen zwingt dich, sie anzusehen, und Ansehen ist schon die halbe Arbeit. Der Nachteil sind Zeit und Vergessen. Deshalb funktioniert manuelles Erfassen besser als Ergaenzung, nicht als einzige Methode. Nutze Sprache fuer das, was unterwegs passiert, und manuell fuer die woechentliche Pruefung.",
        },
        {
          kind: "h3",
          text: "CSV-Import",
          id: "csv-import",
        },
        {
          kind: "p",
          text: "Der CSV-Import liegt zwischen automatisch und manuell. Du loggst dich auf der Website deiner Bank ein, lädst die Bewegungsdatei herunter und lädst sie in die App hoch. Es dauert ein paar Minuten, gibt keine Zugangsdaten an Aggregatoren weiter und erlaubt keine dauerhafte Synchronisation. Es ist eine nuetzliche Form fuer alle, die den vollen Blick auf den Monat haben wollen, ohne den Auszug einem Dritten anzuvertrauen. Es ist auch die Standardhaltung zum Datenschutz von Savlo.",
        },
        {
          kind: "h2",
          text: "Umgang mit schwankendem Einkommen",
          id: "schwankendes-einkommen",
        },
        {
          kind: "p",
          text: "Wenn du freiberuflich, selbststaendig, auf Provision, als Fahrer unterwegs bist oder ein Einkommen hast, das sich jeden Monat aendert, wird das klassische Budget nicht direkt passen. Die Falle ist, mit dem Durchschnitt zu planen und in schlechten Monaten zu merken, dass der Durchschnitt gar nicht da war. Die Loesung ist, das Budget am Boden zu bauen, nicht an der Decke.",
        },
        {
          kind: "p",
          text: "Lege einen monatlichen Basiswert fest, der das Minimum ist, das du in den letzten sechs Monaten zuverlaessig erhalten hast, und baue das gesamte Budget um diesen Wert. Alles, was darueber hinaus hereinkommt, wird eine bewusste Entscheidung: Es geht in den Notgroschen, beschleunigt eine Schuld oder finanziert ein Ziel. Mit der Zeit wirst du merken, dass die guten Monate die schlechten finanzieren, und der monatliche Stress verschwindet.",
        },
        {
          kind: "p",
          text: "Eine nuetzliche Technik ist ein eigener Space fuer schwankendes Einkommen, in den du den Ueberschuss guter Monate einzahlst und aus dem du schwache Monate deckst. Das verwandelt die Unregelmaessigkeit in ein Liquiditaetsproblem statt in ein emotionales. Wenn du schwankende Einnahmen in einer Waehrung hast, die inflationieren kann, gilt das gleiche Prinzip mit einer vierteljaehrlichen Pruefung des Basiswerts. Flexibilitaet liegt in der Methode, nicht in der Disziplin.",
        },
        {
          kind: "h2",
          text: "Der Sieben-Tage-Reset",
          id: "sieben-tage-reset",
        },
        {
          kind: "p",
          text: "Du wirst dein Budget sprengen. Das ist keine Moeglichkeit, das ist eine Gewissheit. Jeder, der ein Budget laenger als ein Jahr fuehrt, hat es schon mehrfach gesprengt. Der Unterschied zwischen Menschen, die das System jahrelang halten, und denen, die nach drei Monaten aufgeben, ist das, was nach dem Sprengen passiert.",
        },
        {
          kind: "p",
          text: "Baue dir einen Sieben-Tage-Reset. Am Tag, an dem du die Ueberschreitung bemerkst, warte eine Woche. Setze dich zwanzig Minuten mit dem Plan und dem Auszug hin, und beantworte drei Fragen in Ruhe: Was ist passiert, welche Kategorie hat es aufgefangen, und welche kleine Aenderung haette es im naechsten Monat verhindert. Die goldene Regel lautet, in den ersten vierundzwanzig Stunden nach dem Bemerken keine finanzielle Entscheidung zu treffen. Warten, verarbeiten, anpassen.",
        },
        {
          kind: "p",
          text: "Dieser kleine Abstand verwandelt die Reaktion in eine Pruefung. Statt alles im Zorn zu kuerzen und den Plan aus Erschöpfung aufzugeben, passt du eine oder zwei Sachen an. Menschen, die das Budget jahrelang halten, sind nicht die, die nie daneben liegen. Es sind die, die im Schnitt innerhalb einer Woche zurueckkommen und weitermachen.",
        },
        {
          kind: "h2",
          text: "Notgroschen versus Sinking Funds",
          id: "notgroschen-vs-sinking",
        },
        {
          kind: "p",
          text: "Der Notgroschen und die Sinking Funds sind die beiden Schutznetze, die das Budget in schlechten Monaten stuetzen. Die Verwechslung der beiden ist einer der haeufigsten Gruende, warum ein Budget auf dem Papier funktioniert, im echten Leben aber scheitert.",
        },
        {
          kind: "p",
          text: "Der Notgroschen deckt das Unvorhersehbare: Jobverlust, medizinischer Notfall, dringende Reparatur, Geraetetausch. Das klassische Ziel sind drei bis sechs Monate Fixkosten auf einem liquiden Konto, getrennt vom Geld des Alltags. Er ist deine Versicherung gegen das Leben, das unerwartet schiefgeht.",
        },
        {
          kind: "p",
          text: "Sinking Funds verwandeln Vorhersehbares in Routine. Autoversicherung, Grundsteuer, Geschenke zum Jahresende, Urlaub, Schulgebuehren, bekannte Selbstbeteiligungen: alles, von dem du weisst, dass es kommt, das aber ohne Plan wie ein Notfall wirkt. Die Idee ist, den Gesamtbetrag durch die verbleibenden Monate zu teilen und monatlich einen Bruchteil zur Seite zu legen. Wenn das Ereignis kommt, ist das Geld schon da und wartet.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Die Reihenfolge zaehlt. Baue zuerst den minimalen Notgroschen auf, entsprechend einem Monat Fixkosten. Dann oeffne Sinking Funds fuer vorhersehbare Ereignisse der naechsten zwoelf Monate. Zuletzt erweitere den Notgroschen auf das Ziel von drei bis sechs Monaten. Dieser Weg vermeidet den klassischen Fehler, den riesigen Notgroschen fuellen zu wollen, waehrend die Autoversicherung faellig wird und die Kreditkarte mitnimmt.",
        },
        {
          kind: "h2",
          text: "Die Psychologie hinter einem Budget, das haelt",
          id: "psychologie",
        },
        {
          kind: "p",
          text: "Ein Budget haelt, wenn es dein emotionales Leben respektiert. Nicht die Tabelle bricht: es ist die Beziehung zur Tabelle. Wenn das System beschämt, ist die natuerliche Reaktion, es zu vermeiden. Wenn es kleine Anpassungen foerdert, wird es zur Routine. Der Unterschied liegt in drei Gewohnheiten:",
        },
        {
          kind: "p",
          text: "Die erste Gewohnheit ist, die Person von der Zahl zu trennen. Der Kontostand ist kein Zeugnis. Ein schlechter Monat ist kein Beweis fuer Inkompetenz. Das Budget als Spiegel zu sehen, nicht als Richter, veraendert, wie du auf eine Ueberschreitung reagierst. Du schaust auf die Zahl und fragst, was sie dir beibringt, statt was sie dir vorwirft.",
        },
        {
          kind: "p",
          text: "Die zweite Gewohnheit ist, den leisen Fortschritt zu feiern. Drei Monate mit funktionierendem Plan, ein ungenutztes Abo gekuendigt, der erste Notgroschen aufgebaut: das sind echte Siege. Aber der Kopf neigt dazu, sie zu ignorieren, weil sie klein sind. Sie festzuhalten, selbst in einer einzigen Zeile am Monatsende, hilft dem Gehirn, zu registrieren, was funktioniert. Was anerkannt wird, wird wiederholt.",
        },
        {
          kind: "p",
          text: "Die dritte Gewohnheit ist, mit Unvollkommenheit zu leben. Ein perfektes Budget auf dem Papier, das staendigen Stress erzeugt, wird aufgegeben. Ein Budget mit fuenf Prozent Polster, mit dem du ruhig schlafen kannst, wird gehalten. Optimiere fuer Bestaendigkeit, nicht fuer Praezision. Das beste Budgetwerkzeug ist jenes, das du naechstes Jahr noch benutzt.",
        },
        {
          kind: "h2",
          text: "Acht haeufige Budgetfehler, die teuer werden",
          id: "acht-fehler",
        },
        {
          kind: "p",
          text: "Budgetfehler sind keine Zeichen von Inkompetenz, sondern Zeichen der Methode. Fast alle haben schon einige davon gemacht. Den Fehler zu erkennen ist die Haelfte der Reparatur. Die andere Haelfte ist, ihn durch eine einfachere Gewohnheit zu ersetzen. Die folgende Liste enthaelt die haeufigsten, in Reihenfolge der Wirkung.",
        },
        {
          kind: "ol",
          items: [
            "**Mit dem Bruttogehalt planen.** Nutze immer das Netto, oder den zuverlaessigen Bodenwert der letzten sechs Monate bei schwankendem Einkommen.",
            "**Jeden Cent erfassen wollen.** Ziel des Erfassens ist Klarheit fuer die naechste Entscheidung, nicht Allwissenheit. Drei bis sechs grosse Kategorien reichen.",
            "**Die Kreditkarte mit Einkommen verwechseln.** Die Karte ist ein Fristwerkzeug, kein Einkommen. Die Gesamtrechnung jeden Monat voll zu begleichen ist die einzige Form, in der sie fuer dich arbeitet.",
            "**Notgroschen und Sinking Funds nicht trennen.** Beide haben unterschiedliche Aufgaben und brauchen unterschiedliche Plaetze im Budget.",
            "**Die woechentliche Pruefung auslassen.** Die Pruefung verwandelt einen Plan in eine Gewohnheit. Ohne sie wird das Budget zu einem vergessenen Versprechen.",
            "**Freizeit komplett streichen.** Ein Budget ohne Spass bricht in wenigen Wochen. Halte eine garantierte Freizeitkategorie, selbst wenn sie klein ist.",
            "**Alles auf einmal aendern, wenn es eng wird.** Mehrere Variablen gleichzeitig zu aendern erzeugt Erschöpfung und das Gefuehl, versagt zu haben. Immer eine Sache nach der anderen anpassen.",
            "**Das Budget vor dem Partner oder der Familie verstecken.** Ein persoenliches Budget funktioniert fuer persoenliche Ausgaben. Wenn das Leben geteilt wird, muss der Plan geteilt werden, auch wenn jeder seinen eigenen Raum behält.",
          ],
        },
        {
          kind: "h2",
          text: "Werkzeuge, die helfen, den Plan zu halten",
          id: "werkzeuge",
        },
        {
          kind: "p",
          text: "Das richtige Werkzeug ist nicht das mit den meisten Funktionen, sondern das, das du wirklich nutzt. Es gibt drei klassische Wege. Die Tabelle, mit der vollen Flexibilitaet der Welt und null Hilfe. Das Notizbuch, mit voller Einfachheit und dem Vorteil, dass es dich zum Denken zwingt. Und die App, die den laestigen Teil automatisiert und dich an die Pruefung erinnert.",
        },
        {
          kind: "p",
          text: "Wenn du dich fuer eine App entscheidest, lohnt es sich, auf drei Qualitaeten zu achten: Privatsphaere standardmaessig, keine verpflichtende Verknuepfung mit einem Bankkonto, und Fokus auf einfaches Erfassen. Viele Apps verlangen heute Bankzugangsdaten, um alles automatisch zu synchronisieren. Diese Wahl hat einen Preis: Du gibst die Lesefaehigkeit ueber deinen Auszug an Dritte und oeffnest den Raum fuer Datenlecks und Datenhandel. Wer diese Grenze halten moechte, erfasst per Hand, importiert CSV von der Bank oder nutzt lokale Sprache fuer die Kategorisierung.",
        },
        {
          kind: "p",
          text: "Wenn du jetzt startest und keine Werkzeugentscheidung treffen willst, mach Folgendes: Nimm ein A4-Blatt, teile es in drei Spalten, schreibe Einnahmen, Fixkosten und Variable mit Bleistift, und pruefe am Sonntag. Nach drei Monaten, wenn die Methode noch da ist, lohnt sich der Umstieg auf ein Werkzeug, das dir hilft, die Gewohnheit nicht zu verlieren. Erfinde kein Werkzeug, bevor du eine Gewohnheit hast.",
        },
        {
          kind: "h2",
          text: "Bestaendigkeit ueber mehr als ein Jahr hinweg halten",
          id: "bestaendigkeit",
        },
        {
          kind: "p",
          text: "Die meisten Menschen geben das Budget zwischen dem zweiten und dem vierten Monat auf. Der Grund ist kein Charakterfehler, sondern die Art, wie der Plan gebaut wurde. Zu starre Plaene sterben an Starrheit. Zu lasche Plaene sterben an Beliebigkeit. Bestaendigkeit wohnt in der Mitte, in vier einfachen Verpflichtungen.",
        },
        {
          kind: "p",
          text: "Die erste ist, jeden Sonntag zwanzig Minuten zu pruefen. Es muss nichts Kompliziertes sein. Schau dir die Zahlen an, passe an, was angepasst werden muss, mach weiter. Die woechentliche Pruefung ist das, was den Plan zu deinem macht, statt zu einem Dokument, das du im Januar geschrieben und nie wieder geoeffnet hast.",
        },
        {
          kind: "p",
          text: "Die zweite ist, den Plan nicht im Zorn anzufassen. Wenn der Monat schlecht ist, ist die Versuchung, alles auf einmal zu kuerzen. Tu das nicht. Warte sieben Tage, pruefe in Ruhe, passe eine Sache an. Im Zorn getroffene Entscheidungen muessen fast immer mit Reue rueckgaengig gemacht werden.",
        },
        {
          kind: "p",
          text: "Die dritte ist, den Plan sichtbar zu lassen. Es kann am Handy sein, ein Zettel am Kuehlschrank, eine Notiz in der App. Was nicht passieren darf, ist, dass der Plan zu einer Datei im Hintergrund eines Ordners wird. Was sichtbar ist, wird geprueft. Was versteckt ist, wird vergessen.",
        },
        {
          kind: "p",
          text: "Die vierte ist, sich daran zu erinnern, dass das Budget ein Mittel ist, kein Ziel. Das Ziel ist, ruhig zu schlafen, einen Puffer fuer Unerwartetes zu haben, und zu dem, was wichtig ist, Ja sagen zu koennen. Wenn der Plan daran hindert, stimmt etwas mit dem Plan nicht, nicht mit deinem Leben. Geh zurueck, passe an, mach weiter.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Haeufig gestellte Fragen zum Geldbudget",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Wie viel Geld brauche ich, um ein Budget zu starten?",
              a: "Keinen Mindestbetrag. Ein Budget beginnt mit dem, was du schon hast. Es verlangt Ehrlichkeit, nicht Ueberfluss. Wenn dein Einkommen gerade eng ist, zeigt dir das Budget, wohin das Wenige fliesst, und das ist bereits ein enormer Gewinn.",
            },
            {
              q: "Wie oft muss ich das Budget pruefen?",
              a: "Einmal pro Woche, fuer zwanzig Minuten, reicht den meisten. Die woechentliche Pruefung ist es, die einen Plan zur Gewohnheit macht. Ist ein Monat sehr instabil, pruefe zweimal. In ruhigen Monaten kann vierzehntägig reichen.",
            },
            {
              q: "Soll ich mit Brutto oder Netto planen?",
              a: "Immer mit dem Netto. Das Netto ist das, was tatsaechlich auf deinem Konto ankommt. Mit dem Brutto zu planen erzeugt eine stille Differenz von zehn bis zwanzig Prozent zwischen dem, was du glaubst zu haben, und dem, was wirklich ankommt. Bei schwankendem Einkommen nimm den niedrigsten der letzten sechs Monate als Basis.",
            },
            {
              q: "Was, wenn ich das Budget sprenge?",
              a: "Behandle die Ueberschreitung als Signal des Plans, nicht als persoenliches Versagen. Warte sieben Tage, pruefe in Ruhe, passe eine oder zwei Variablen an, und mach weiter. Wer das Budget jahrelang haelt, sprengt es nicht nie. Sondern er kommt im Schnitt innerhalb einer Woche zurueck.",
            },
            {
              q: "Welche Budgetmethode ist die beste fuer Anfaenger?",
              a: "Die 50/30/20-Regel ist der einfachste Startpunkt, weil sie mit Proportionen arbeitet, nicht mit Betraegen. Wer lieber das ganze Monatsbild sehen will, ist mit dem Nullbudget besser bedient, das aber eine Stunde Planung zu Monatsbeginn braucht. Wen das Gefuehl stoert, dass Geld einfach verschwindet, dem hilft die Umschlag- oder Spaces-Methode besonders gut.",
            },
            {
              q: "Brauche ich eine App, um das Budget zu fuehren?",
              a: "Nein. Du kannst Tabelle, Notizbuch oder jede andere Methode nutzen. Wenn du dich fuer eine App entscheidest, waehle eine, die keine Bankzugangsdaten verlangt, deine Privatsphaere respektiert und das Erfassen per Hand, per Sprache oder per CSV erleichtert. Das richtige Werkzeug ist jenes, das du in einem Jahr noch nutzt.",
            },
            {
              q: "Wie fange ich an, einen Notgroschen aufzubauen?",
              a: "Starte klein. Das erste Ziel ist ein Monat Fixkosten, nicht sechs. Wenn dieser erste Monat auf dem Konto liegt, aendert sich dein Gefuehl schon. Von dort erweitere den Notgroschen in Schritten, die ins Budget passen, auf drei bis sechs Monate. Wichtig ist, zu beginnen, nicht, alles auf einmal zu schaffen.",
            },
            {
              q: "Funktioniert ein Budget bei schwankendem Einkommen?",
              a: "Ja, und vielleicht sogar besser, weil es dich zwingt, den Boden zu nutzen statt den Durchschnitt. Lege einen monatlichen Basiswert fest, der das Minimum ist, das du zuverlaessig bekommst, und baue den Plan darum. Alles darueber wird bewusste Entscheidung: in den Notgroschen, in schnellere Schuldentilgung, oder in ein Ziel.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Fazit: ein einfaches Budget ist mehr wert als ein perfekter Plan",
          id: "fazit",
        },
        {
          kind: "p",
          text: "Ein Geldbudget muss nicht komplex sein, um zu funktionieren. Es muss ehrlich sein, in dein Leben passen und Raum fuer Anpassungen haben. Wenn der Plan einfach ist, wird er Gewohnheit. Wenn er Gewohnheit wird, gibt er dir etwas Seltenes zurueck: das Gefuehl, dass Geld fuer dich arbeitet, und nicht gegen dich.",
        },
        {
          kind: "p",
          text: "Starte mit den vier Zahlen. Waehle einen Stil. Geh die sieben Schritte durch. Nimm dir zwanzig Minuten am Sonntag. Wenn der erste Monat zu Ende ist, passe zwei Sachen an. Wenn der zweite Monat zu Ende ist, passe eine weitere an. In sechs Monaten wirst du zurueckschauen und merken, dass der aktuelle Plan nicht mehr viel mit dem schuechternen Entwurf des ersten Tages zu tun hat. Und das ist in Ordnung. Genau das ist der Punkt: Das Budget waechst mit dir, nicht deine Pflicht ihm gegenueber.",
        },
        {
          kind: "p",
          text: "Wenn du das, was du hier gelesen hast, in einem Werkzeug anwenden willst, das deine Privatsphaere respektiert, ist Savlo auf Android verfuegbar und kommt bald auf iOS. Es wurde genau als dieser Begleiter gedacht: einfach, ruhig, ohne Abfrage von Bank-Zugangsdaten, mit Spaces, Sprache und CSV-Import, damit du die Theorie in die Praxis bringen kannst, ohne dich im Prozess zu verlieren. Das beste Budgetwerkzeug ist jenes, das du naechstes Jahr noch nutzt.",
        },
      ],
    },
  },
  "budgeting-on-a-low-income": {
    title:
      "Budgetieren mit geringem Einkommen: ein realistischer Schritt-fuer-Schritt-Leitfaden, der wirklich funktioniert",
    description:
      "Ein vorurteilsfreier Schritt-fuer-Schritt-Leitfaden zum Budgetieren mit geringem Einkommen. Lerne, einen kleinen Puffer aufzubauen, die Fixpunkte abzusichern und die Blutung zu stoppen, wenn die Rechnungen nicht aufgehen.",
    keywords: [
      "budgetieren mit geringem Einkommen",
      "budget mit wenig geld",
      "wie budgetieren mit geringem einkommen",
      "budget wenn pleite",
      "budget bei knappem geld",
      "geldmanagement bei geringem einkommen",
      "enges budget",
      "budget mit kleinem einkommen",
      "keine sparmarge",
      "ueberleben mit geringem einkommen",
      "geld bei engem budget",
    ],
    readingTime: 20,
    summary: [
      "Budgetieren mit geringem Einkommen hat sein eigenes Handwerk. Die meisten Ratschlaege setzen eine Marge voraus, die nicht immer da ist, und klingen dann wie eine geschlossene Tuer.",
      "Dieser Leitfaden schlaegt sieben realistische, schuldfreie Schritte vor, um das Vorhandene zu pflegen, den kleinsten moeglichen Puffer aufzubauen und die Blutung zu stoppen, wenn die Rechnungen nicht aufgehen.",
    ],
    sections: [
      {
        heading: "Was Budgetieren mit geringem Einkommen wirklich bedeutet",
        body: [
          "Geringes Einkommen ist keine einzelne Zahl. Es kann heissen, mit stabilem Gehalt von Gehalt zu Gehalt zu leben, das nicht reicht. Es kann heissen, Auftragsarbeit, die im letzten Monat gut lief und diesen nicht. Es kann heissen, zwischen Vertraegen zu stehen, Kinder mit einem Einkommen zu versorgen oder in einer Waehrung zu verdienen, die nicht zu den Lebenshaltungskosten der eigenen Stadt passt.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Budgetieren mit geringem Einkommen hat sein eigenes Handwerk. Die Ratschlaege, die im Netz kursieren, setzen meistens eine Marge voraus: Kaffee streichen, Notgroschen aufbauen, Sparen automatisieren. Wenn die Marge nicht da ist, fuehlen sich diese Ratschlaege nicht hilfreich an. Sie fuehlen sich an wie eine zugeworfene Tuer. Dieser Leitfaden ist fuer die Monate, in denen die Rechnung eng ist, in denen das Gehalt vor dem Monatsende aufgebraucht ist, und in denen «budgetiere einfach besser» das Letzte ist, was du hoeren willst.",
        },
        {
          kind: "p",
          text: "Das Ziel hier ist weder, Knappheit zu verherrlichen, noch so zu tun, als waere ein Jahr mit 40.000 Euro dasselbe wie eins mit 90.000. Das Ziel ist, dir eine realistische, vorurteilsfreie Art zu geben, das Vorhandene zu pflegen, den kleinsten moeglichen Puffer aufzubauen und die Blutung zu stoppen, wenn die Rechnungen nicht aufgehen. Sieben Schritte, ohne Scham, und ein paar Gewohnheiten, die wirklich in ein enges Budget passen.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Savlo ist auf Android verfuegbar und kommt bald auf iOS. Alles in diesem Leitfaden funktioniert in einem Notizbuch, einer Tabelle oder einer einfachen App. Wenn du ein Werkzeug willst, das deine Privatsphaere respektiert, keine Bank-Zugangsdaten verlangt und in engen Routinen funktioniert, wurde Savlo mit dem im Hinterkopf gebaut. Du kannst jeden Schritt hier auch ohne es umsetzen.",
        },
        {
          kind: "h2",
          text: "Was Budgetieren mit geringem Einkommen wirklich bedeutet",
          id: "was-heisst-das-wirklich",
        },
        {
          kind: "p",
          text: "Geringes Einkommen ist keine einzelne Zahl. Es kann heissen, von Gehalt zu Gehalt zu leben mit einem stabilen Gehalt, das einfach nicht reicht. Es kann heissen, Auftragsarbeit, die im letzten Monat gut lief und diesen nicht. Es kann heissen, zwischen Verträgen zu stehen, Kinder mit einem Einkommen zu versorgen, oder in einer Waehrung zu verdienen, die nicht zu den Lebenshaltungskosten deiner Stadt passt. Es kann auch ein Haushalt mit unregelmaessigen Einnahmen und einer langen Liste vorhersehbarer Ausgaben sein. Die Form aendert sich, aber die gelebte Erfahrung ist aehnlich: Jeder Euro hat ein Ziel, bevor er ankommt, und die meisten dieser Ziele sind nicht verhandelbar.",
        },
        {
          kind: "p",
          text: "Wenn das Geld knapp ist, hoert das Budget auf, eine Planungsuebung zu sein, und wird zum Ueberlebenswerkzeug. Das ist kein Versagen deiner Disziplin oder deiner Intelligenz. Es ist die natuerliche Reaktion auf eine eingeschraenkte Umgebung. Ein gutes Budget macht in diesem Kontext drei Dinge auf einmal: Es sagt dir, was sicher auszugeben ist, es verhindert, dass kleine Ueberraschungen zu grossen Krisen werden, und es laesst einen schmalen Spalt fuer etwas, das dir gehoert. Der Rest dieses Leitfadens zeigt dir, wie du das Schritt fuer Schritt aufbaust.",
        },
        {
          kind: "h3",
          text: "Geringes Einkommen ist nicht eine Sache",
          id: "nicht-eine-sache",
        },
        {
          kind: "p",
          text: "Der Rat, der fuer einen Freelancer in einer teuren Stadt funktioniert, funktioniert nicht immer fuer jemanden mit Teilzeit in einer kleineren Stadt, und umgekehrt. Was sie teilen, ist die Struktur: ein kleines, vorhersehbares Einkommen, eine Liste fixer Rechnungen und ein Seilakt dazwischen. Sobald du akzeptierst, dass das Ziel nicht Optimierung fuer Reichtum, sondern Optimierung fuer Stabilitaet ist, wird das Budget zu einem anderen Werkzeug. Es wird zu einer Art, jedem Euro ein klares Ziel zu geben, damit nichts in dem Stress verloren geht, der mehr Geld kostet, als er spart.",
        },
        {
          kind: "h2",
          text: "Warum die meisten Budget-Ratschlaege bei knappem Geld scheitern",
          id: "warum-ratschlaege-scheitern",
        },
        {
          kind: "p",
          text: "Der grosste Teil der Inhalte zu persoenlichen Finanzen ist fuer Menschen mit einer Marge geschrieben. Es wird angenommen, dass du einige hundert Euro pro Monat zum Investieren umleiten kannst, dass du auf ein paar nicht notwendige Ausgaben verzichten kannst, dass du eine Ueberraschung absorbieren kannst, ohne den Schlaf zu verlieren. Wenn diese Bedingungen nicht erfuellt sind, klingt derselbe Rat wie eine Fremdsprache. Er kann auch wie Schuld klingen, vor allem wenn der Autor den Abstand zwischen deiner Realitaet und dem Beispiel nicht benennt.",
        },
        {
          kind: "p",
          text: "Der zweite Grund, warum der Rat scheitert, ist, dass er Disziplin als Engpass behandelt. Disziplin ist selten der Engpass. Der Engpass ist strukturell: das Einkommen reicht nicht fuer die Ausgaben, die Ausgaben richten sich nicht nach den Monaten, und es gibt keine Lockerung, um eine Ueberraschung von 200 Euro zu absorbieren. Ein gutes Budget kann ein strukturelles Defizit nicht beheben. Was es kann, ist das Defizit sichtbar machen, und das ist der erste Schritt zu einer anderen Entscheidung. Manchmal ist die Entscheidung, eine Fixrechnung neu zu verhandeln. Manchmal ist es, den Job zu wechseln. Manchmal ist es, um Hilfe zu bitten. Das Budget ist die Karte, nicht die Rettung.",
        },
        {
          kind: "h3",
          text: "Der Mythos vom Kaffeestreichen",
          id: "kaffee-mythos",
        },
        {
          kind: "p",
          text: "Kleine diskretionaere Ausgaben zu kuerzen ist eine gute Gewohnheit, wenn du Lockerung hast. Bei einem engen Einkommen geht die Rechnung nicht auf. Der Abstand zwischen einem engen Monat und einem ueberlebbaren Monat sind selten ein paar Kaffees. Es ist meistens eine Mietsteigerung, eine Arztrechnung, eine verlorene Schicht oder eine kindbezogene Ausgabe, die es im Vormonat nicht gab. Das Kleine zu kuerzen hilft, aber es ist nicht der Hebel. Der Hebel sitzt in den Fixkosten, in den Einnahmequellen und in der Art, wie beide im Monat aufeinander folgen. Dahin geht die Energie dieses Leitfadens.",
        },
        {
          kind: "h2",
          text: "Die vier Zahlen, angepasst an enge Monate",
          id: "vier-zahlen-angepasst",
        },
        {
          kind: "p",
          text: "Jedes Budget, unabh\u00e4ngig vom Einkommen, baut auf denselben vier Zahlen auf: Nettoeinkommen, Fixkosten, variable Ausgaben und Sparquote. Die Form dieser Zahlen aendert sich, wenn das Geld knapp ist, aber sie bleiben das Rueckgrat. Das Nettoeinkommen ist der kleinste realistische Monatsbetrag, mit dem du rechnen kannst, nach Steuern und Pflichtabgaben. Die Fixkosten sind die Rechnungen, die unabhaengig davon kommen: Miete, Nebenkosten, Transport, Mindesttilgungen, fixe kindbezogene Kosten. Die variablen Ausgaben sind der flexible Teil: Lebensmittel, Haushaltsartikel, persoenliche Pflege, gelegentlicher Transport. Die Sparquote in einem engen Budget ist kein aggressives Investitionsziel. Sie ist das, was nach den anderen drei uebrig bleibt, selbst wenn die Zahl bei null startet.",
        },
        {
          kind: "p",
          text: "Was sich aendert, wenn das Geld knapp ist, ist die Reihenfolge der Prioritaeten. Statt «zuerst sparen, dann alles andere» wird die Reihenfolge «zuerst nicht verhandelbar, dann kleine Reserven, dann diskretionaere Ausgaben». Diese Reihenfolge ist das Rueckgrat der sieben folgenden Schritte. Mehr zu den vier Zahlen findest du im umfassenderen [Leitfaden zum Geldbudgetieren](/de/blog/how-to-budget-money); diese Version stimmt sie nur fuer enge Monate ab.",
        },
        {
          kind: "h2",
          text: "Sieben Schritte zum Budgetieren mit geringem Einkommen",
          id: "sieben-schritte",
        },
        {
          kind: "p",
          text: "Diese sieben Schritte setzen voraus, dass dein Einkommen unregelmaessig ist, deine Marge duenn und deine Zeit begrenzt. Sie sind darauf ausgelegt, beim ersten Mal etwa eine Stunde zu dauern und danach zwanzig Minuten pro Woche. Sie verlangen weder eine App noch eine Tabelle noch eine besondere Geisteshaltung. Sie verlangen Ehrlichkeit und ein Stueck Papier.",
        },
        {
          kind: "h3",
          text: "Schritt 1: Jeden Euro erfassen, der reinkommt",
          id: "schritt-1-erfassen",
        },
        {
          kind: "p",
          text: "Oeffne die letzten drei Monate deiner Kontoauszuege und schreibe jede Einzahlung auf. Summiere sie, teile durch drei, und das ist dein durchschnittliches monatliches Nettoeinkommen. Schau jetzt auf den niedrigsten der drei Monate, nicht auf den Durchschnitt. Das ist dein Planungseinkommen. Budgetiere ab dem niedrigsten Monat, nicht ab dem typischen. Wenn du ab dem Durchschnitt budgetierst, brechen dich die schlechten Monate. Wenn du ab dem Boden budgetierst, sind die guten Monate ein Polster. Diese eine Aenderung schuetzt mehr enge Budgets als jede andere Gewohnheit.",
        },
        {
          kind: "p",
          text: "Um das konkret zu machen, nimm ein echtes Beispiel. Wenn die letzten drei Monate an Einzahlungen 1.400, 1.250 und 1.520 sind, ist der Durchschnitt 1.390. Der niedrigste ist 1.250. Baue das Budget ab 1.250. Die 140 Euro Unterschied zwischen Durchschnitt und Boden sind bei einem engen Einkommen kein kleiner Betrag. Oft sind sie der Unterschied zwischen einer bezahlten Rechnung und einer Verspaetungsgebuehr. Wenn das Einkommen unregelmaessig ist, etwa 1.800 in einem Monat und 1.100 im naechsten, ist das Muster noch wichtiger. Nutze den niedrigsten realistischen Monat der letzten sechs als Planungseinkommen. Wenn zwei Monate hintereinander darunter fallen, behandle den Durchschnitt dieser beiden als neuen Boden. Das Budget ist ein lebendiges Dokument, keine feste Regel.",
        },
        {
          kind: "h3",
          text: "Schritt 2: Sichere die nicht verhandelbaren Posten",
          id: "schritt-2-fix",
        },
        {
          kind: "p",
          text: "Die nicht verhandelbaren Posten sind die Rechnungen, die bezahlt werden muessen, damit das Grundlegende des Lebens weiterlaeuft: Miete oder Finanzierung, Nebenkosten, Mindesttilgungen, Transport zur Arbeit, fixe kindbezogene Kosten, Medikamente. Summiere sie. Ziehe diese Summe von deinem Planungseinkommen ab. Die Zahl, die uebrig bleibt, falls etwas uebrig bleibt, ist der Ausgangspunkt fuer alles andere. Wenn die Zahl negativ ist, hast du ein strukturelles Defizit. Der erste Schritt ist nicht, den Einkauf zu optimieren. Der erste Schritt ist, auf die nicht verhandelbaren Posten selbst zu schauen: welcher kann neu verhandelt werden, welcher kann reduziert werden, welcher haelt dich an einem schlechten Ort fest.",
        },
        {
          kind: "h3",
          text: "Schritt 3: Finde dein elastisches Geld",
          id: "schritt-3-elastisch",
        },
        {
          kind: "p",
          text: "Elastisches Geld ist die Ausgabe, die schrumpfen kann, ohne das Grundlegende zu brechen. Es lebt meistens in Lebensmitteln, Haushaltsartikeln, Transportextras, Unterhaltung und persoenlicher Pflege. Schau dir die letzten drei Monate an und identifiziere die elastischen Kategorien. Waehle die zwei oder drei, in denen eine kleine Aenderung ein paar Euro pro Woche sparen kann. Nicht hundert Euro im Monat. Ein paar Euro pro Woche. Dieser Schritt soll dein Leben nicht umkrempeln. Er soll einen kleinen, echten Geldbetrag freisetzen, der zum Samen des naechsten Schritts wird.",
        },
        {
          kind: "h3",
          text: "Schritt 4: Baue einen Starterpuffer von 100",
          id: "schritt-4-puffer",
        },
        {
          kind: "p",
          text: "Ein klassischer Notgroschen sind drei bis sechs Monatsausgaben. Das ist auf laenge Sicht das richtige Ziel, aber nicht das richtige Ziel fuer einen engen Monat. Bei einem engen Einkommen ist das richtige Ziel 100. Hundert Euro reichen aus, um eine kleine Ueberraschung abzudecken, wie eine Rezeptzuzahlung, ein Strafzettel oder eine Nebenkostenrechnung, die doppelt kommt. Es ist klein genug, um in wenigen Wochen aufgebaut zu werden, und klein genug, dass du dich nicht zwischen ihm und einer Mahlzeit entscheiden musst. Wenn du 100 hast, zahlst du Ueberraschungen nicht mehr mit Dispo-Gebuehren. Das allein ist die Muehe wert.",
        },
        {
          kind: "h3",
          text: "Schritt 5: Nutze die Rechnungs-Kalender-Methode",
          id: "schritt-5-kalender",
        },
        {
          kind: "p",
          text: "Die meisten engen Budgets zerbrechen am Timing, nicht am Betrag. Die Miete ist am 1. faellig, das Gehalt kommt am 5., die Nebenkosten sind am 10. faellig. Wenn das Timing nicht passt, wird etwas zu spaet bezahlt. Die Loesung ist, von einem kategoriebasierten Budget auf ein datumbasiertes Budget zu wechseln. Nimm ein leeres Blatt und zeichne einen Kalender. Markiere jedes Einkommensdatum. Markiere jedes Faelligkeitsdatum. Ordne das Einkommen in dieser Reihenfolge den Faelligkeiten zu, nicht nach Kategorie. Wenn der Kalender funktioniert, funktioniert das Budget. Wenn nicht, ist das Budget eine Wunschliste. Die Savlo-App nutzt einen aehnlichen Rhythmus, zu sehen, was faellig ist, bevor es bezahlt wird.",
        },
        {
          kind: "p",
          text: "Um das konkret zu machen, stell dir vor: Miete 700 am 1., eine Nebenkostenrechnung 90 am 10., ein Telefonvertrag 45 am 15., und ein Gehalt von 1.250 kommt am 5. und am 20. Am 5. gehen 700 des ersten Gehalts an die Miete. Am 10. muessen die 90 der zweiten Gehaltszahlung (die am 20. kommt) irgendwoher kommen. Der Kalender zeigt dieses Problem, bevor es eine verpasste Rechnung wird. Die Loesung ist, am 5. einen kleinen Bargeldpuffer fuer die Rechnung am 10. zur Seite zu legen, oder den Versorger anzurufen und eine Verschiebung des Faelligkeitsdatums auf den 20. zu erbitten. Beide Wege sind billiger als eine Verspaetungsgebuehr. Die Kalendermethode verwandelt die Rechnung von etwas Abstraktem in eine einzige Seite, die du in einer Minute lesen kannst.",
        },
        {
          kind: "h3",
          text: "Schritt 6: Oeffne einen winzigen Sinking Fund",
          id: "schritt-6-sinking",
        },
        {
          kind: "p",
          text: "Sinking Funds klingen wie Luxus, sind aber bei einem engen Einkommen eine Ueberlebensfaehigkeit. Ein Sinking Fund ist eine kleine Reserve, die du fuer eine bekannte kuenftige Ausgabe aufbaust: eine Jahresversicherung, der Schulanfang, ein Weihnachtsgeschenk, die TUEV-Pruefung. Die meisten Jahresausgaben liegen zwischen 50 und 500. Teile diesen Betrag durch zwoelf und lege jeden Monat diesen kleinen Betrag zur Seite. Wenn die Ausgabe kommt, ist das Geld schon da. Wenn du eine laengere Erklaerung willst, geht der [Leitfaden zu Sinking Funds](/de/blog/sinking-funds) die Mathematik durch. Bei einem engen Einkommen ist die Regel einfach: 5 pro Woche fuer eine vorhersehbare Ausgabe reichen, um anzufangen.",
        },
        {
          kind: "h3",
          text: "Schritt 7: Schichte kleine Einnahme-Boosts darueber",
          id: "schritt-7-einnahmen",
        },
        {
          kind: "p",
          text: "Budgetieren mit geringem Einkommen stoesst irgendwann an eine Wand. Die Wand ist das Einkommen. Elastisches Geld zu kuerzen hat einen Boden, und wenn du den erreichst, hilft keine Tabelle mehr. Der naechste Schritt ist, Einkommen hinzuzufuegen, nicht Ausgaben zu kuerzen. Kleine Einnahme-Boosts bedeuten nicht, deinen Hauptjob hinzuwerfen. Sie bedeuten, in diesem Monat zwanzig Euro in die Tasche zu stecken mit etwas, das du schon kannst: etwas verkaufen, eine Extraschicht uebernehmen, freiberuflich schreiben, Hunde ausfuehren, einem Nachbarn einen kleinen Dienst erweisen. Schreibe drei Dinge auf, die du in den naechsten zwei Wochen tun koenntest und die 20 bis 100 Euro zu deinem Einkommen addieren. Mach eines davon naechste Woche. Stapele die Erfolge. Die Komposition kleiner Betraege ist es, die aus einem engen Budget ein lebenswertes macht.",
        },
        {
          kind: "p",
          text: "Die einfachsten Boosts nutzen eine Stunde, die du schon hast. Ein Nachmittag Aufräumen und fünf Dinge auf einem lokalen Marktplatz einzustellen, bringt oft 40 bis 150 Euro in einer Woche. Ein Samstagmorgen, an dem du einem Nachbarn hilfst, ein Sofa zu tragen, bringt 30 Euro bar und einen kuenftigen Gefallen. Ein paar Stunden, einen kurzen Text uebersetzen, drei Hunde ausfuehren oder ein Moebelstuck fuer jemanden aufbauen, der lieber zahlt als selbst zu machen, sind weitere 50. Keiner davon ist skalierbar, und genau das ist der Punkt. Bei einem engen Einkommen geht es darum, diesen Monat eine kleine, echte Summe hinzuzufuegen, nicht ein Nebengesch\u00e4ft aufzubauen. Behandle jeden Boost als einmaliges Ereignis, und lass das Budget davon profitieren, ohne den Plan um ihn herum neu zu entwerfen.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Die sieben Schritte wirken lang. In der Praxis dauern sie beim ersten Mal etwa eine Stunde. Danach sind die woechentlichen Checks zwoanzig Minuten. Der schwierigste Schritt ist der erste, weil im ersten die Wahrheit erscheint. Die gute Nachricht ist, dass jeder Schritt danach leichter wird. Die andere gute Nachricht ist, dass keiner der Schritte eine App, ein Abo oder ein besonderes Temperament verlangt. Sie verlangen ein Stueck Papier, eine ehrliche Stunde und die Bereitschaft, am naechsten Sonntag wiederzukommen.",
        },
        {
          kind: "h2",
          text: "Umgang mit Scham und Geldangst",
          id: "scham-und-angst",
        },
        {
          kind: "p",
          text: "Geld bei einem engen Einkommen ist kein mathematisches Problem. Es ist auch ein emotionales. Die Gefuehle, die kommen, wenn du deinen Kontostand pruefst und bis Freitag 17 Euro siehst, sind real, und sie sind keine Zeichen von Schwaeche. Sie sind Zeichen, dass es dir etwas bedeutet. Das Problem ist, dass Scham dich genau das vermeiden laesst, was helfen wuerde: hinzuschauen. Wenn du seit Wochen die Banking-App nicht geoeffnet hast, bist du nicht allein, und du bist kein Versager. Du bist ein Mensch mit einem Nervensystem, das seinen Job macht, indem es dich vor einem Stressor schuetzt.",
        },
        {
          kind: "p",
          text: "Die Heilung ist nicht Motivation. Die Heilung ist Kleinheit. Oeffne die App dreissig Sekunden lang und schau auf den Saldo. Schliesse die App. Das ist eine vollstaendige Budget-Interaktion fuer einen engen Tag. Am naechsten Tag mach dasselbe. Am uebernaechsten Tag schau dir auch eine Rechnung an. In einer Woche hast du viermal auf die Zahlen geschaut, und die Scham hat den grossten Teil ihrer Macht verloren. Die laengere Version dieser Idee steht im [Leitfaden zu finanzieller Angst](/de/blog/financial-anxiety), der tiefer in die Wissenschaft der Vermeidung geht und in das, was hilft.",
        },
        {
          kind: "h3",
          text: "Die mentale Last kleiner Betraege",
          id: "mentale-last",
        },
        {
          kind: "p",
          text: "Menschen mit mehr Geld merken oft nicht, wie viel Denken in jeden kleinen Betrag in einem engen Budget fliesst. Die 4 Euro Unterschied zwischen zwei Supermärkten. Die 30 Cent fuer eine zusaetzliche Tute. Ob du diese Woche zweimal den Bus nimmst oder laufst. Diese mentale Last ist real, und sie ist einer der Gruende, warum enge Budgets erschoepfen. Der Ausweg ist nicht, die kleinen Entscheidungen jedes Mal neu zu treffen. Der Ausweg ist, die Regeln einmal aufzustellen und sie dann standardmaessig zu befolgen. Kaufe im selben Supermarkt. Nutze Bargeld fuer variable Ausgaben. Setze eine woechentliche Obergrenze fuer Diskretionaeres und hoer danach auf zu tracken. Das Ziel ist, dass die kleinen Entscheidungen nicht mehr wie Entscheidungen wirken.",
        },
        {
          kind: "h3",
          text: "Ausgaben in dreissig Sekunden erfassen",
          id: "erfassen-30-sekunden",
        },
        {
          kind: "p",
          text: "Bei einem engen Einkommen ist die Zeit, die du mit dem Budget-Tracken verbringst, oft teurer als der Wert einer verpassten Ausgabe. Die Regel ist einfach: Tracke dreissig Sekunden, nicht zehn Minuten. Die meisten Ausgaben bei einem engen Einkommen kommen aus einem von drei Bereichen: Lebensmittel, Transport und Persoenliches. Wenn du ausgibst, schreibe eine einzige Zeile mit Betrag, Kategorie und Tag. Das ist alles. Eine Spracheingabe, die dasselbe in drei Sekunden tut, ist noch besser. Die Savlo-App ist fuer diesen Rhythmus gebaut: ein kurzer Satz und der Eintrag ist im Kalender, ohne Bank-Verknuepfung und ohne Reibung. Der Punkt ist, das Tracking zu einer Gewohnheit zu machen, die du an einem mueden Dienstag um 21 Uhr durchhalten kannst, nicht zu einem Projekt, das eine Stunde Fokus verlangt.",
        },
        {
          kind: "p",
          text: "Die andere Haelfte der Dreissig-Sekunden-Regel ist, mit dem Tracking aufzuhoeren, wenn die Zeit sich nicht mehr lohnt. Wenn ein Kaffee fuer 4 Euro das Budget nicht veraendert, tracke ihn in zwei Sekunden und mach weiter. Wenn gerade eine Autoreparatur fuer 400 Euro passiert ist, tracke sie sorgfaeltig und pausiere die diskretionaeren Ausgaben fuer die Woche. Tracking ist ein Werkzeug, keine Religion. Die gute Version des Trackings ist eine, die in ein normales Leben passt, ohne es zu uebernehmen.",
        },
        {
          kind: "h3",
          text: "Ein durchgerechnetes Beispiel: der 1.250-Euro-Monat",
          id: "beispiel-durchgerechnet",
        },
        {
          kind: "p",
          text: "Um die sieben Schritte zusammenzufuehren, nimm einen einzelnen Monat als Beispiel. Einkommen des Monats: 1.250 netto, mit der zweiten Haelfte am 20. Nicht verhandelbar: 700 Miete am 1., 90 Nebenkosten am 10., 45 Telefon am 15., 60 Mindesttilgung am 22., 120 Transport, 80 Lebensmittel, 30 persoenliche Pflege. Das sind 1.125 fixe und vorhersehbare Ausgaben. Der Puffer aus dem Vormonat ist 100. Das erste Gehalt am 5. deckt die Miete und bringt den Puffer nach der Nebenkostenrechnung am 10. zurueck auf 100. Das zweite Gehalt am 20. deckt den Telefonvertrag, die Mindesttilgung, den Transport und die Lebensmittel, und laesst 25 uebrig. Diese 25 gehen in einen Sinking Fund fuer die naechste vorhersehbare Ausgabe. Die Rechnung ist eng, aber sie geht auf. Dieselbe Form funktioniert fuer einen 2.200-Euro-Monat, einen 900-Euro-Monat oder einen 3.400-Euro-Monat. Die sieben Schritte aendern sich nicht mit der Groesse der Zahl.",
        },
        {
          kind: "h3",
          text: "Wenn der gute Monat kommt",
          id: "guter-monat",
        },
        {
          kind: "p",
          text: "Bei einem engen Einkommen sind die guten Monate seltener als die schlechten, und die Versuchung ist, sie auszugeben. Widersteh ihr. Die ersten 50 jedes guten Monats gehen in den Puffer, bis der Puffer 100 erreicht. Die naechsten 50 gehen in den naechsten kleinen Sinking Fund. Die naechsten 50 gehen in die naechste Schuld auf der Liste. Wenn der gute Monat ein paar hundert Euro extra hat, hat das Budget eine echte Grundlage, und der naechste schlechte Monat ist keine Krise mehr. Der gute Monat ist keine Erlaubnis, den Lebensstil hochzufahren. Er ist eine Erlaubnis, den Boden zu verstaerken.",
        },
        {
          kind: "h2",
          text: "Sieben Fehler, die einen engen Monat schlimmer machen",
          id: "sieben-fehler",
        },
        {
          kind: "ol",
          items: [
            "**Mahlzeiten auslassen, um Geld zu sparen.** Funktioniert eine Woche, dann kostet es dich Energie, Fokus und Arztrechnungen. Essen ist ein Fixkostenposten, kein elastischer. Suche eine andere elastische Kategorie.",
            "**Payday-Loans oder Cash-Advances.** Sie wirken wie eine Bruecke, aber die Gebuehren wachsen. Wenn ein Payday-Loan die einzige Option ist, ist das ein Signal, um Hilfe zu bitten, nicht den Loan aufzunehmen. Die meisten Staedte haben Notfallhilfen fuer Nebenkosten und Kleinkredit-Alternativen ueber gemeinnuetzige Organisationen.",
            "**Eine Rechnung ignorieren, weil sie Angst macht.** Verspaetungsgebuehren, verlorene Dienste und Inkasso sind teurer als ein Anruf. Ruf das Unternehmen an, frag nach einem Zahlungsplan, frag nach einer Härtefall-Verlaengerung. Die schlimmste Antwort ist «nein», und die beste ist «wir koennen es in drei Raten aufteilen».",
            "**Kredit fuer den Lebensmitteleinkauf nutzen.** Die Lebensmittelrechnung ist der vorhersehbarste Teil des Budgets. Wenn sie ueber Kredit laeuft, hat das Budget ein strukturelles Problem, kein Disziplin-Problem.",
            "**Alle Schulden gleichzeitig abzahlen wollen.** Bei einem engen Einkommen ist es dasselbe, auf fuenf Schulden extra zu zahlen, wie auf null extra zu zahlen. Zahle das Minimum auf allen, um den Kredit und die Ruhe zu schuetzen, und packe dann jeden freien Euro auf den kleinsten Saldo. Die Mathematik steht im [Leitfaden zum Schuldenabbau](/de/blog/how-to-get-out-of-debt), und die Reihenfolge zaehlt bei engem Einkommen umso mehr.",
            "**Aggressiv sparen, wenn es keine Marge gibt.** 50 Euro im Monat sparen, wenn die Rechnung schon eng ist, schafft nur eine neue Krise. Baue zuerst den Puffer von 100. Dann reden wir ueber mehr sparen.",
            "**Dein Budget mit dem von anderen vergleichen.** Das «Durchschnitts»-Budget, das du online siehst, ist fuer ein «Durchschnitts»-Einkommen gemacht. Deines ist fuer dein tatsaechliches Einkommen gemacht. Nicht dieselbe Uebung.",
            "**Das Budget nach einem schlechten Monat aufgeben.** Der Punkt eines Budgets mit engem Einkommen ist nicht Perfektion. Der Punkt ist, am naechsten Sonntag wiederzukommen und es nochmal zu versuchen. Das ist die ganze Aufgabe. Wenn du wiederkommst, funktioniert das Budget.",
          ],
        },
        {
          kind: "h2",
          text: "Werkzeuge, die bei knappem Geld helfen",
          id: "werkzeuge-knapp",
        },
        {
          kind: "p",
          text: "Das beste Werkzeug ist das, das du wirklich nutzt. Bei einem engen Einkommen ist der Preis eines Abos selten entscheidend. Entscheidend ist, ob das Werkzeug deine Zeit und deine Realitaet respektiert. Fuer die meisten ist das richtige Werkzeug eines von dreien: ein Papier, geteilt in nicht verhandelbar, elastisch und eine kleine Reserve; eine einfache Tabelle mit drei Spalten, die woechentlich aktualisiert wird; oder eine App, die Privatsphaere priorisiert und es dir ermoeglicht, Ausgaben per Sprache in wenigen Sekunden zu erfassen, ohne ein Bankkonto zu verknuepfen. Savlo ist fuer den dritten Weg gebaut. Es laeuft heute auf Android und kommt bald auf iOS, und es arbeitet ohne Bank-Zugangsdaten, was wichtig ist, wenn Vertrauen der entscheidende Faktor ist.",
        },
        {
          kind: "p",
          text: "Wenn du den manuellen Weg bevorzugst, reicht ein kurzer woechentlicher Check. Oeffne die Notizen-App auf deinem Handy. Schreib auf, was reinkam, was rausging und was uebrig blieb. Das ist ein vollstaendiges Budget. Wenn du eine strukturiertere Form willst, gibt dir der Rechnungs-Kalender aus Schritt 5 alles, was du brauchst, auf einer einzigen Seite. Der Punkt ist nicht das Format. Der Punkt ist die Gewohnheit. Waehle ein Werkzeug, das keine Reibung hinzufuegt, und nutze es jeden Sonntag.",
        },
        {
          kind: "h2",
          text: "Wann du um Hilfe bitten solltest, die ueber das Budget hinausgeht",
          id: "um-hilfe-bitten",
        },
        {
          kind: "p",
          text: "Ein Budget ist ein Werkzeug, keine Rettung. Es gibt Monate, in denen die Rechnung einfach nicht aufgeht, und die richtige Antwort ist, um Hilfe zu bitten. Die meisten Staedte haben Notfallhilfen fuer Nebenkosten, Essen, Miete und Medikamente. Die Organisationen sind keine Wohltaten, die du verdienen musst. Es sind oeffentliche Dienste, die genau fuer diese Situation gemacht sind. Wenn du in Deutschland bist, bieten die Jobcenter und Sozialaemter Beratung zu einmaligen Beihilfen und Mehrbedarfen. In Oesterreich und der Schweiz gibt es entsprechende Aemter und Hotlines. Das Budget gibt dir die Wuerde zu wissen, was los ist. Die Hilfe gibt dir die Zeit, die naechste Entscheidung zu treffen.",
        },
        {
          kind: "p",
          text: "Eine zweite Art von Hilfe ist die oeffentliche Bibliothek. Die meisten Bibliotheken bieten kostenlosen Zugang zu Finanz-Coaching, kostenlose Workshops zu Budget und Schulden, kostenlosen Druck von Formularen, kostenloses Internet fuer die Jobsuche und kostenlose Raeume fuer Community-Treffen. Die Bibliothek ist ein ruhiger, kostenloser Raum, in dem du mit deinen Auszuegen sitzen und die sieben Schritte dieses Leitfadens durchgehen kannst, ohne dass jemand fragt, was du dort machst. Wenn die Rechnung eng ist, ist die Bibliothek eine der wenigen oeffentlichen Ressourcen, die auf das skaliert, was du brauchst.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Haeufige Fragen zum Budgetieren mit geringem Einkommen",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Kann man ueberhaupt budgetieren, wenn das Geld knapp ist?",
              a: "Ja, aber das Ziel ist anders. Das Ziel eines Budgets mit engem Einkommen ist nicht, aggressiv zu sparen. Es geht darum, Ueberraschungen zu vermeiden, eine kleine Reserve zu schuetzen und die Blutung zu stoppen, wenn eine kleine Rechnung zur falschen Zeit kommt. Ein Budget, das eine Dispo-Gebuehr von 35 Euro verhindert, macht seinen Job, auch wenn es nicht aussieht wie das, was Geld-Blogs zeigen.",
            },
            {
              q: "Was ist der kleinste Betrag, den ich zuerst sparen sollte?",
              a: "Hundert. Ein Puffer von 100 reicht aus, um eine kleine Ueberraschung zu absorbieren, und ist klein genug, um in wenigen Wochen aufgebaut zu werden. Wenn du ihn hast, erweitere ihn. Der Punkt ist, mit einer erreichbaren Zahl zu starten, nicht mit einer, die das Ziel im Regal stehen laesst.",
            },
            {
              q: "Wie budgetiere ich, wenn mein Einkommen jeden Monat schwankt?",
              a: "Budgetiere ab dem niedrigsten Monat der letzten sechs, nicht ab dem Durchschnitt. Wenn die guten Monate kommen, behandle das Extra als Puffer, nicht als Upgrade des Plans. Der Plan ist dafuer gebaut, den schlechten Monat zu ueberstehen. Der gute Monat ist ein Geschenk an den Plan.",
            },
            {
              q: "Was, wenn alle Kategorien nicht verhandelbar sind?",
              a: "Dann hat das Budget ein strukturelles Problem, kein Kategorien-Problem. Der naechste Schritt ist, auf das Einkommen zu schauen, nicht auf die Ausgaben. Verhandle eine Fixrechnung neu, frag nach einer Gehaltserhoehung, nimm ein kleines Zusatzeinkommen, oder frag nach Hilfe. Das Budget kann dir die Luecke zeigen. Es kann sie nicht schliessen.",
            },
            {
              q: "Wie hoere ich auf, mich fuer meine Ausgaben zu schaemen?",
              a: "Die Scham lebt meistens in der Vermeidung. Oeffne die App dreissig Sekunden. Schau auf den Saldo. Schliesse die App. Mach das eine Woche lang. Die Scham verliert den grossten Teil ihrer Kraft, sobald das Hinsehen zur Gewohnheit wird. Mehr dazu findest du im [Stueck ueber Money-Dysmorphie](/de/blog/money-dysmorphia), das die emotionale Seite vertieft.",
            },
            {
              q: "Ist es in Ordnung, eine Budget-App zu nutzen, wenn das Geld knapp ist?",
              a: "Ja, solange die App keine Reibung hinzufuegt. Eine einfache App, mit der du einen Kaffee fuer 4 Euro in zwei Sekunden erfassen kannst, ist mehr wert als eine ausgekluegelte App, die du zweimal im Jahr oeffnest. Wenn eine kostenlose App ohne Bank-Verknuepfung und ohne Abo funktioniert, ist das die richtige App. Savlo ist eine solche Option, aber nicht die einzige. Dass sie Privatsphaere priorisiert, ist hier wichtig, weil du auch die wenigen Euro schuetzt, die du hast.",
            },
            {
              q: "Wie budgetiere ich, wenn ich ausserdem Schulden bei engem Einkommen habe?",
              a: "Zahle das Minimum auf jeder Schuld, um die Konten aktuell zu halten, und packe dann jeden freien Euro auf den kleinsten Saldo. Wenn der kleinste Saldo weg ist, rolle diese Zahlung auf den naechsten. Die Mechanik ist dieselbe wie im [Leitfaden zum Schuldenabbau](/de/blog/how-to-get-out-of-debt), und die Prioritaetenfolge zaehlt bei engem Einkommen umso mehr.",
            },
            {
              q: "Was, wenn ich zwischen einer Rechnung und Essen waehlen muss?",
              a: "Ruf zuerst bei der Rechnung an. Die meisten Unternehmen haben eine Haertefall-Hotline. Sie pausieren den Dienst fuer einen Monat, teilen eine Zahlung auf, oder verweisen dich an ein Hilfsprogramm. Essen ist nicht verhandelbar, und ein einziger Anruf kauft dir oft die Zeit, das Essen zu regeln. Wenn nicht, ist das das Zeichen, dass oeffentliche Essenshilfen und lokale Tafel die richtige Antwort sind. Sie existieren genau fuer diese Situation.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Ein kleines, ehrliches Budget schlaegt ein perfektes",
          id: "fazit",
        },
        {
          kind: "p",
          text: "Ein Budget mit geringem Einkommen ist keine Vorstellung. Es ist eine Wartungsgewohnheit. Die Aufgabe ist, die kleinen Ueberraschungen daran zu hindern, grosse Krisen zu werden, einen schmalen Geldstreifen in Reserve zu halten und dich nahe genug an den Zahlen zu halten, dass du in Ruhe entscheiden kannst, wenn etwas bricht. Ein kleines, ehrliches Budget, zu dem du am naechsten Sonntag zurueckkehrst, schlaegt ein perfektes, das du in drei Wochen aufgibst.",
        },
        {
          kind: "p",
          text: "Wenn du bei null startest, geh die sieben Schritte der Reihe nach durch. Baue den Puffer von 100. Oeffne einen winzigen Sinking Fund. Stapele einen kleinen Einnahme-Boost. Nach einem Monat ist die Rechnung noch nicht bequem, aber die Routine ist es. Die Routine ist es, die den naechsten Monat leichter macht. In sechs Monaten ist die Routine das, was das naechste Jahr moeglich macht.",
        },
        {
          kind: "p",
          text: "Der schwierigste Teil eines Budgets mit geringem Einkommen ist nicht die Mathematik. Es ist die Einsamkeit dabei. Die meisten Budget-Gespraeche setzen eine Marge voraus, die du nicht hast, und die meisten Budget-Inhalte sind fuer Menschen geschrieben, die eine Ueberraschung absorbieren koennen. Du bist nicht im Rueckstand, und du versagst nicht. Du laeufst eine anspruchsvollere Version derselben Uebung, mit weniger Fehlerspielen und einem kleineren Puffer fuer Ueberraschungen. Ein Budget, das in diese Realitaet passt, ist eines der nuetzlichsten Werkzeuge, die du bauen kannst, und es ist die Stunde wert, die es braucht, um anzufangen. Wenn du ein Werkzeug willst, das deine Privatsphaere respektiert, keine Bank-Zugangsdaten verlangt und in engen Routinen funktioniert, ist Savlo auf Android verfuegbar und kommt bald auf iOS. Es wurde fuer die Art von Budget gebaut, die in diesem Leitfaden beschrieben ist: klein, ehrlich und leicht wieder aufzusuchen. Alles hier funktioniert auch ohne es. Wenn du einen Begleiter fuer die Routine willst, ist Savlo eine der leisesten Optionen auf dem Markt.",
        },
      ],
    },
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
    keywords: [...base.keywords],
    readingTime: base.readingTime,
    summary: [...override.summary],
    sections: override.sections.map((section) => ({
      heading: section.heading,
      body: [...section.body],
    })),
    rich: override.rich ? { blocks: [...override.rich.blocks] } : undefined,
  }
}

export const germanPosts = (Object.keys(overrides) as GermanSlug[]).map((slug) =>
  buildPost(slug),
)

export function getGermanPostBySlug(slug: string): GermanBlogPost | undefined {
  return germanPosts.find((post) => post.slug === slug)
}
