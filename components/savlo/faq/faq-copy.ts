import type { Locale } from "@/lib/i18n"

/*
 * The home's FAQ, in the five languages (owner, 2026-11-05). One-to-one and
 * direct, like a friend answering: the answer first, then what to do; never
 * "we". Each language is written for itself, not translated word by word
 * (French "tu", German "du", Brazilian "você", neutral Spanish with "tú").
 *
 * Every claim here is checked against the app (memory
 * `landing_claims_must_match_app`): not in the stores yet, 14-day trial then
 * monthly or yearly, no bank connection, data in the cloud with a copy on the
 * phone, export, account deletion erases the cloud (`delete-account`),
 * an import undoes in one step, totals in the currency you pick.
 */

export type FaqItem = {
  q: string
  a: string
  /** numbered steps under the answer */
  steps?: readonly string[]
  /** a closing line under the steps */
  note?: string
}

type FaqCopy = {
  title: string
  subtitle: string
  items: readonly FaqItem[]
}

// French typography: a narrow no-break space before ? : ! keeps the mark on
// its word's line
const nb = " "

export const faqCopy: Record<Locale, FaqCopy> = {
  en: {
    title: "Frequently asked questions",
    subtitle: "Pricing, your data and your bank: what to know before you start.",
    items: [
      {
        q: "Can I download it yet?",
        a: "Not yet. Savlo is built for Android, with iPhone coming after. Want to know when it’s out? Join the waitlist from the download button.",
      },
      {
        q: "Do I need to connect my bank?",
        a: "No. Savlo doesn’t connect to your bank. You log a purchase by saying it or typing it, and if your history is already in a file, you upload it.",
      },
      {
        q: "How do I bring my history over?",
        a: "If your bank lets you export your history, you already have what you need:",
        steps: [
          "Download it as a CSV or Excel file. Your own spreadsheet works too.",
          "Upload it in Import. Savlo figures out the format on its own.",
          "Check the recurring payments it found, and you’re done.",
        ],
        note: "If something looks off, you can undo the whole import in one step.",
      },
      {
        q: "How much does it cost?",
        a: "The first 14 days are free. After that, you pick a monthly or yearly plan and see the price in the store before you pay. No plan has ads.",
      },
      {
        q: "Where does my data live?",
        a: "In your Savlo account, in the cloud. Your phone keeps a copy so the app works offline. You can export a copy of everything anytime, and if you delete your account, your data is deleted from the cloud too.",
      },
      {
        q: "What if I use more than one currency?",
        a: "No problem. Each account keeps its own currency, and you see the total in whichever one you choose.",
      },
    ],
  },
  es: {
    title: "Preguntas frecuentes",
    subtitle: "El precio, tus datos y tu banco, antes de empezar.",
    items: [
      {
        q: "¿Ya puedo descargarla?",
        a: "Todavía no. Savlo está hecha para Android y la versión de iPhone viene después. Si quieres enterarte cuando salga, entra a la lista de espera desde el botón de descarga.",
      },
      {
        q: "¿Necesito conectar mi banco?",
        a: "No. Savlo no se conecta a tu banco. Anotas un gasto diciéndolo o escribiéndolo, y si ya tienes tu historial en un archivo, lo subes.",
      },
      {
        q: "¿Cómo traigo mi historial?",
        a: "Si tu banco te deja descargar tus movimientos, ya tienes todo lo que necesitas:",
        steps: [
          "Descarga tus movimientos en CSV o Excel. Tu hoja de cálculo también sirve.",
          "Súbelo en Importar. Savlo reconoce el formato solo.",
          "Revisa los recurrentes que encontró, y listo.",
        ],
        note: "Si algo no quedó bien, deshaces la importación entera en un paso.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Los primeros 14 días son gratis. Después eliges entre un plan mensual o uno anual, y ves el precio en la tienda antes de pagar. Ningún plan tiene anuncios.",
      },
      {
        q: "¿Dónde quedan mis datos?",
        a: "En tu cuenta de Savlo, en la nube. El teléfono guarda una copia para que la app funcione sin conexión. Puedes exportar una copia de todo cuando quieras, y si borras tu cuenta, tus datos se borran también de la nube.",
      },
      {
        q: "¿Y si manejo más de una moneda?",
        a: "Sin problema. Cada cuenta va en su moneda, y el total lo ves en la que elijas.",
      },
    ],
  },
  pt: {
    title: "Perguntas frequentes",
    subtitle: "Preço, seus dados e seu banco: o que saber antes de começar.",
    items: [
      {
        q: "Já posso baixar?",
        a: "Ainda não. O Savlo é feito para Android, e a versão para iPhone vem depois. Quer saber quando sair? Entre na lista de espera pelo botão de download.",
      },
      {
        q: "Preciso conectar meu banco?",
        a: "Não. O Savlo não se conecta ao seu banco. Você registra um gasto falando ou digitando, e se o seu histórico já está num arquivo, é só enviar.",
      },
      {
        q: "Como trago meu histórico?",
        a: "Se o seu banco deixa baixar o extrato, você já tem tudo o que precisa:",
        steps: [
          "Baixe o extrato em CSV ou Excel. Sua planilha também serve.",
          "Envie em Importar. O Savlo reconhece o formato sozinho.",
          "Confira os recorrentes que ele encontrou, e pronto.",
        ],
        note: "Se algo não ficou certo, você desfaz a importação inteira de uma vez.",
      },
      {
        q: "Quanto custa?",
        a: "Os primeiros 14 dias são grátis. Depois, você escolhe um plano mensal ou anual e vê o preço na loja antes de pagar. Nenhum plano tem anúncios.",
      },
      {
        q: "Onde ficam meus dados?",
        a: "Na sua conta do Savlo, na nuvem. O celular guarda uma cópia para o app funcionar sem internet. Você pode exportar uma cópia de tudo quando quiser, e se excluir sua conta, seus dados são apagados da nuvem também.",
      },
      {
        q: "E se eu usar mais de uma moeda?",
        a: "Sem problema. Cada conta fica na sua moeda, e você vê o total na que escolher.",
      },
    ],
  },
  de: {
    title: "Häufige Fragen",
    subtitle: "Preis, deine Daten, deine Bank: was du vorher wissen solltest.",
    items: [
      {
        q: "Kann ich die App schon herunterladen?",
        a: "Noch nicht. Savlo ist für Android gemacht, die iPhone-Version kommt danach. Wenn du wissen willst, wann es so weit ist: Über den Download-Button kommst du auf die Warteliste.",
      },
      {
        q: "Muss ich mein Bankkonto verbinden?",
        a: "Nein. Savlo verbindet sich nicht mit deiner Bank. Du erfasst eine Ausgabe, indem du sie sagst oder eintippst. Und wenn deine Umsätze schon in einer Datei stecken, lädst du sie einfach hoch.",
      },
      {
        q: "Wie übernehme ich meinen bisherigen Verlauf?",
        a: "Wenn deine Bank dir deine Umsätze als Datei gibt, hast du schon alles, was du brauchst:",
        steps: [
          "Lade sie als CSV- oder Excel-Datei herunter. Deine eigene Tabelle geht auch.",
          "Lade die Datei unter „Importieren“ hoch. Savlo erkennt das Format selbst.",
          "Prüf die wiederkehrenden Zahlungen, die Savlo gefunden hat. Fertig.",
        ],
        note: "Passt etwas nicht, machst du den ganzen Import in einem Schritt rückgängig.",
      },
      {
        q: "Was kostet Savlo?",
        a: "Die ersten 14 Tage sind kostenlos. Danach wählst du ein Monats- oder Jahresabo und siehst den Preis im Store, bevor du zahlst. Werbung gibt es in keinem Abo.",
      },
      {
        q: "Wo liegen meine Daten?",
        a: "In deinem Savlo-Konto, in der Cloud. Dein Handy behält eine Kopie, damit die App auch offline läuft. Du kannst jederzeit eine Kopie von allem exportieren. Und wenn du dein Konto löschst, sind deine Daten auch aus der Cloud weg.",
      },
      {
        q: "Und wenn ich mehrere Währungen nutze?",
        a: "Kein Problem. Jedes Konto hat seine eigene Währung, und die Summe siehst du in der Währung deiner Wahl.",
      },
    ],
  },
  fr: {
    title: "Questions fréquentes",
    subtitle: `Le prix, tes données, ta banque${nb}: ce qu’il faut savoir avant de commencer.`,
    items: [
      {
        q: `Je peux déjà la télécharger${nb}?`,
        a: `Pas encore. Savlo est conçu pour Android, et la version iPhone arrive ensuite. Pour savoir quand elle sort, inscris-toi sur la liste d’attente depuis le bouton de téléchargement.`,
      },
      {
        q: `Je dois connecter ma banque${nb}?`,
        a: "Non. Savlo ne se connecte pas à ta banque. Tu notes une dépense en la disant ou en la tapant, et si ton historique est déjà dans un fichier, tu l’importes.",
      },
      {
        q: `Comment je récupère mon historique${nb}?`,
        a: `Si ta banque te permet d’exporter tes relevés, tu as déjà tout ce qu’il faut${nb}:`,
        steps: [
          "Télécharge-les en CSV ou en Excel. Ton propre tableur marche aussi.",
          "Ajoute le fichier dans « Importer ». Savlo reconnaît le format tout seul.",
          "Vérifie les paiements récurrents qu’il a trouvés, et c’est bon.",
        ],
        note: "Si quelque chose cloche, tu annules tout l’import en une seule étape.",
      },
      {
        q: `Combien ça coûte${nb}?`,
        a: "Les 14 premiers jours sont gratuits. Ensuite, tu choisis un abonnement mensuel ou annuel, et tu vois le prix dans le store avant de payer. Aucun abonnement n’a de pub.",
      },
      {
        q: `Où sont stockées mes données${nb}?`,
        a: "Dans ton compte Savlo, dans le cloud. Ton téléphone en garde une copie pour que l’app marche hors connexion. Tu peux exporter une copie de tout quand tu veux, et si tu supprimes ton compte, tes données sont aussi effacées du cloud.",
      },
      {
        q: `Et si j’utilise plusieurs devises${nb}?`,
        a: "Aucun souci. Chaque compte garde sa devise, et tu vois le total dans celle de ton choix.",
      },
    ],
  },
}

/** The FAQPage entries for the home's structured data: the visible text, steps included. */
export function faqStructuredData(locale: Locale) {
  return faqCopy[locale].items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: [item.a, ...(item.steps ?? []).map((step, i) => `${i + 1}. ${step}`), item.note]
        .filter(Boolean)
        .join(" "),
    },
  }))
}
