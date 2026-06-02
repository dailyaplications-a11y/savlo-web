import { posts, type BlogCategory } from "@/lib/blog/posts"

export type FrenchBlogPost = {
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
    title: "Comment faire un budget mensuel sans culpabilité",
    description:
      "Un guide calme pour créer un budget réaliste, comprendre tes dépenses et regarder ton argent sans anxiété.",
    keywords: [
      "comment faire un budget",
      "budget mensuel",
      "budget pour débutants",
      "application budget",
      "budget personnel",
    ],
    readingTime: 14,
    summary: [
      "Un budget ne devrait pas ressembler à une punition financière. Il sert à décider avant de dépenser, pas à te réprimander après.",
      "La manière la plus durable commence avec le revenu net, peu de catégories, un fonds d'urgence et une courte routine hebdomadaire.",
    ],
    sections: [
      {
        heading: "Commence avec l'argent qui arrive vraiment",
        body: [
          "Utilise ton revenu net, pas le brut. Si tes revenus varient, prends le mois le plus bas comme base et laisse les meilleurs mois jouer le rôle de marge.",
          "Ce petit ajustement t'évite de construire un plan sur l'optimisme. Un budget utile doit survivre à un mois normal, pas seulement au mois idéal.",
        ],
      },
      {
        heading: "Travaille avec peu de catégories",
        body: [
          "La plupart des gens abandonnent parce qu'ils essaient de tout découper. Commence avec logement, alimentation, transport, santé, dettes, épargne, objectifs et dépenses personnelles.",
          "Ensuite, tu peux tester des méthodes comme la règle 50/30/20 ou le budget base zéro. La structure compte moins que la capacité à y revenir chaque semaine.",
        ],
      },
      {
        heading: "Vérifie une fois par semaine",
        body: [
          "Regarder l'argent tous les jours peut créer une hypervigilance. Regarder seulement en fin de mois arrive trop tard. Une revue hebdomadaire de dix minutes tombe souvent juste.",
          "Savlo est pensé pour ce rythme: enregistrer vite, séparer en Spaces et en fonds, puis revenir au système sans chiffres rouges qui crient.",
        ],
      },
    ],
  },
  "50-30-20-rule": {
    title: "La règle 50/30/20: comment l'appliquer sans stress",
    description:
      "La règle 50/30/20 expliquée avec une approche souple pour les besoins, les envies et l'avenir financier.",
    keywords: [
      "règle 50/30/20",
      "budget 50 30 20",
      "répartition du revenu",
      "méthode de budget",
      "budget pour débutants",
    ],
    readingTime: 6,
    summary: [
      "La règle 50/30/20 divise ton revenu en besoins, envies et avenir. C'est une boussole, pas une sentence.",
      "Elle fonctionne mieux quand tu l'adaptes à ta ville, à tes revenus et à ta phase de vie.",
    ],
    sections: [
      {
        heading: "Ce que signifie chaque pourcentage",
        body: [
          "Les 50% couvrent les besoins: logement, alimentation de base, transport, santé, assurances et paiements minimums de dettes.",
          "Les 30% couvrent les envies: sorties, abonnements, loisirs et achats non essentiels. Les 20% vont vers l'avenir: épargne, investissements, dettes et fonds spécifiques.",
        ],
      },
      {
        heading: "Quand ajuster la règle",
        body: [
          "Si tu vis dans une ville chère, tes besoins peuvent monter à 60%. Ce n'est pas un échec; cela veut juste dire que le reste du plan doit rester honnête.",
          "La règle devient utile quand elle réduit les décisions, pas quand elle te fait culpabiliser de vivre une réalité différente de l'exemple du post.",
        ],
      },
    ],
  },
  "best-mint-alternatives-2025": {
    title: "Meilleures alternatives à Mint en 2025",
    description:
      "Ce qu'il faut rechercher après l'arrêt de Mint: confidentialité, prix, facilité d'utilisation et alternatives sans connexion bancaire obligatoire.",
    keywords: [
      "alternatives à Mint",
      "applications comme Mint",
      "meilleure app de budget",
      "application finances personnelles",
      "app sans connexion bancaire",
    ],
    readingTime: 7,
    summary: [
      "Après Mint, beaucoup de personnes cherchent une app qui ne transforme pas leurs finances en un autre tableau bruyant.",
      "La meilleure alternative dépend de ce que tu valorises le plus: automatisation, contrôle, confidentialité ou une expérience plus calme.",
    ],
    sections: [
      {
        heading: "Ce qu'il faut comparer d'abord",
        body: [
          "Vérifie si l'application exige de connecter des banques, ce qu'elle fait de tes données, combien elle coûte après l'essai et si tu peux exporter tes informations.",
          "L'impression d'usage compte aussi. Si une app te rend nerveux, tu l'ouvriras moins souvent, précisément quand tu en auras le plus besoin.",
        ],
      },
      {
        heading: "Où Savlo se situe",
        body: [
          "Savlo se positionne comme une alternative plus calme: saisie vocale, importation CSV/XLSX, Spaces séparés et fonds dédiés.",
          "Il n'essaie pas d'être un centre de contrôle agressif. Il essaie de t'aider à regarder ton argent avec moins de friction.",
        ],
      },
    ],
  },
  "emergency-fund-vs-sinking-fund": {
    title: "Fonds d'urgence vs fonds dédié: quelle différence ?",
    description:
      "Apprends à séparer les imprévus réels des dépenses prévisibles pour épargner avec plus de clarté.",
    keywords: [
      "fonds d'urgence",
      "fonds dédié",
      "épargne de précaution",
      "épargne pour gros achats",
      "fonds vacances",
    ],
    readingTime: 6,
    summary: [
      "Le fonds d'urgence protège contre l'imprévu. Un fonds dédié prépare les grosses dépenses que tu peux voir venir.",
      "Les séparer réduit la tentation d'utiliser ta réserve pour les vacances, les cadeaux ou l'entretien.",
    ],
    sections: [
      {
        heading: "Quand utiliser un fonds d'urgence",
        body: [
          "Utilise-le pour une perte de revenu, une réparation urgente, la santé ou des situations qui n'étaient pas au calendrier.",
          "Son objectif principal est de te laisser de l'air mental. Ce n'est pas de l'argent pour optimiser; c'est de l'argent pour mieux dormir.",
        ],
      },
      {
        heading: "Quand utiliser un fonds dédié",
        body: [
          "Utilise-le pour les dépenses prévisibles: vacances, impôts, cadeaux, entretien auto, déménagement ou renouvellement de matériel.",
          "Chaque fonds a un nom et un but. Cette étiquette aide ton cerveau à ne pas tout mélanger dans un seul sac flou.",
        ],
      },
    ],
  },
  "why-traditional-budgets-fail": {
    title: "Pourquoi les budgets traditionnels échouent",
    description:
      "La réponse des finances comportementales: culpabilité, friction et systèmes qui ne respectent pas le fonctionnement de l'attention humaine.",
    keywords: [
      "pourquoi les budgets échouent",
      "finance comportementale",
      "psychologie de l'argent",
      "anxiété financière",
      "budget qui marche",
    ],
    readingTime: 7,
    summary: [
      "Beaucoup de budgets échouent parce qu'ils sont conçus comme une punition. Quand un système humilie, la réaction naturelle est de l'éviter.",
      "Un meilleur design réduit la friction, parle avec douceur et permet de revenir après une erreur.",
    ],
    sections: [
      {
        heading: "La culpabilité ne crée pas la constance",
        body: [
          "Les alertes rouges et les messages d'échec peuvent fonctionner une journée, mais ils construisent rarement une relation stable avec l'argent.",
          "La constance apparaît lorsque le système est facile à reprendre. Un budget abandonné a besoin de moins de menace, pas de plus de pression.",
        ],
      },
      {
        heading: "La friction compte",
        body: [
          "Si enregistrer une dépense prend trop de temps, ton toi fatigué ne le fera pas. C'est pour ça que Savlo mise sur des check-ins courts, la voix et les imports.",
          "Le but est que l'habitude reste légère avant de te demander de la discipline.",
        ],
      },
    ],
  },
  "voice-expense-tracking": {
    title: "Suivi des dépenses par voix: le moyen le plus rapide d'enregistrer ce que tu dépenses",
    description:
      "Comment fonctionne la saisie vocale, pour qui elle est pensée et quoi regarder avant de choisir une app.",
    keywords: [
      "suivi des dépenses par voix",
      "application dépenses vocales",
      "suivi des dépenses",
      "budget sans taper",
      "enregistrer dépenses par voix",
    ],
    readingTime: 5,
    summary: [
      "Saisir chaque dépense peut sembler minime, jusqu'au moment où il faut le faire tous les jours. La voix réduit cette friction.",
      "Le suivi vocal fonctionne particulièrement bien pour les achats du quotidien, les repas, le transport et les dépenses que tu oublies souvent.",
    ],
    sections: [
      {
        heading: "Pourquoi cela aide",
        body: [
          "La voix capture la dépense près du moment réel. Cela réduit les oublis et t'évite de reconstruire la journée depuis le relevé bancaire.",
          "Cela paraît aussi moins administratif. Pour beaucoup de personnes, cette différence émotionnelle décide si l'habitude tient ou non.",
        ],
      },
      {
        heading: "Ce qu'il faut vérifier dans une app",
        body: [
          "Cherche de la clarté sur la confidentialité, les langues prises en charge, l'édition manuelle, les catégories et l'export.",
          "L'app la meilleure est celle que tu ouvres vraiment. Il n'y a pas de victoire si l'outil a seulement l'air bien dans la présentation.",
        ],
      },
    ],
  },
  "financial-anxiety": {
    title: "Anxiété financière: habitudes quotidiennes pour apaiser ta relation à l'argent",
    description:
      "L'anxiété financière ne dépend pas seulement de ce que tu gagnes. Découvre de petites pratiques pour regarder à nouveau tes chiffres.",
    keywords: [
      "anxiété financière",
      "stress financier",
      "bien-être financier",
      "habitudes financières",
      "argent et anxiété",
    ],
    readingTime: 6,
    summary: [
      "L'anxiété financière mélange chiffres, mémoire, comparaison et peur. Elle ne se résout pas seulement avec un tableur.",
      "Aide-toi de petits rituels: regarder l'argent à une heure définie, utiliser des catégories plus humaines et séparer les décisions des émotions.",
    ],
    sections: [
      {
        heading: "Regarde moins souvent, mais mieux",
        body: [
          "Vérifier compulsivement peut augmenter le stress. Éviter complètement, aussi. Une fenêtre hebdomadaire et calme fonctionne souvent mieux.",
          "Le but est de faire en sorte que regarder tes finances ne ressemble plus à une urgence émotionnelle.",
        ],
      },
      {
        heading: "Dessine un système bienveillant",
        body: [
          "Donne des noms humains à tes fonds, automatise ce qui se répète et réduis le nombre de décisions quotidiennes.",
          "Une app calme ne remplace pas l'aide d'un professionnel quand elle est nécessaire, mais elle peut beaucoup réduire la friction pour revenir à tes chiffres.",
        ],
      },
    ],
  },
  "sinking-funds": {
    title: "Fonds dédiés: guide complet pour épargner sans stress",
    description:
      "Un fonds dédié transforme de grosses dépenses prévisibles en petits versements mensuels. Apprends à créer des fonds pour les voyages, les fêtes et l'entretien auto.",
    keywords: [
      "fonds dédiés",
      "sinking funds",
      "épargne pour objectifs",
      "comment épargner",
      "fonds vacances",
    ],
    readingTime: 5,
    summary: [
      "Un fonds dédié correspond à une grosse dépense que tu sais déjà venir. Ce n'est pas une urgence; c'est de la préparation.",
      "Il sert pour les vacances, l'entretien, les cadeaux, les impôts, la technologie et tout objectif avec une date ou un montant approximatif.",
    ],
    sections: [
      {
        heading: "Comment le calculer",
        body: [
          "Définis le montant, la date et la fréquence. Si tu as besoin de 600 dollars dans 6 mois, la base est de 100 par mois.",
          "Si le chiffre te semble trop lourd, ajuste la date, le montant ou le périmètre. L'objectif doit t'aider à agir, pas te figer.",
        ],
      },
      {
        heading: "Pourquoi cela fonctionne",
        body: [
          "Les fonds nommés rendent l'avenir visible. Au lieu d'avoir l'impression que tout sort de la même poche, chaque dépense a sa place.",
          "Savlo utilise les fonds dédiés pour séparer les objectifs et réduire les surprises prévisibles.",
        ],
      },
    ],
  },
  "zero-based-budgeting": {
    title: "Budget base zéro: une approche moderne et calme",
    description:
      "Attribue un rôle à chaque euro avant de le dépenser, sans transformer ton mois en audit permanent.",
    keywords: [
      "budget base zéro",
      "zero based budgeting",
      "méthode YNAB",
      "répartir l'argent",
      "budget mensuel",
    ],
    readingTime: 6,
    summary: [
      "Le budget base zéro signifie que chaque unité d'argent a une destination: dépense, épargne, dette, objectif ou marge.",
      "Cela ne veut pas dire tout dépenser. Cela veut dire éliminer l'ambiguïté.",
    ],
    sections: [
      {
        heading: "La règle centrale",
        body: [
          "Revenu moins allocations doit donner zéro. S'il reste de l'argent sans fonction, dirige-le vers l'épargne, une dette ou une catégorie flexible.",
          "Cette clarté réduit les décisions impulsives parce que l'argent a déjà une tâche avant que la tentation n'apparaisse.",
        ],
      },
      {
        heading: "Comment le rendre durable",
        body: [
          "Commence avec peu de catégories et garde de la marge pour ce qui est irrégulier. Si chaque changement exige de tout réécrire, tu abandonneras.",
          "La version calme permet de déplacer l'argent entre catégories sans traiter cela comme un échec.",
        ],
      },
    ],
  },
  "how-to-get-out-of-debt": {
    title: "Comment sortir des dettes sans culpabilité",
    description:
      "Compare la méthode boule de neige et avalanche sans jugement. Apprends une stratégie humaine pour rembourser cartes et prêts sans perdre la motivation.",
    keywords: [
      "comment sortir des dettes",
      "méthode boule de neige",
      "avalanche de dettes",
      "rembourser les cartes",
      "plan de remboursement",
    ],
    readingTime: 6,
    summary: [
      "Sortir des dettes demande des chiffres, mais aussi de la motivation. La meilleure méthode est celle que tu peux tenir quand tu es fatigué.",
      "L'avalanche économise plus d'intérêts; la boule de neige donne souvent des victoires psychologiques plus rapides.",
    ],
    sections: [
      {
        heading: "Organise tes dettes",
        body: [
          "Note le solde, le taux, le paiement minimum et la date. Protège d'abord les minimums pour éviter les frais et les dégâts supplémentaires.",
          "Ensuite, choisis ta stratégie: taux le plus élevé pour l'efficacité ou solde le plus petit pour l'élan émotionnel.",
        ],
      },
      {
        heading: "Construis de la marge",
        body: [
          "Un plan de dettes sans fonds d'urgence minimal casse souvent au premier imprévu.",
          "Même un petit coussin t'aide à ne pas revenir à la carte à chaque dépense inattendue.",
        ],
      },
    ],
  },
  "money-dysmorphia": {
    title: "Dysmorphie financière: pourquoi tu te sens ruiné alors que tes chiffres vont bien",
    description:
      "La dysmorphie financière, c'est quand tu te sens à sec malgré des chiffres sains. Voici ce qui la provoque, comment la distinguer d'un vrai stress financier et comment l'apaiser.",
    keywords: [
      "dysmorphie financière",
      "se sentir ruiné",
      "anxiété financière",
      "insécurité financière",
      "argent et perception",
    ],
    readingTime: 6,
    summary: [
      "La dysmorphie financière décrit l'écart entre ta réalité financière et la façon dont cette réalité est ressentie.",
      "Elle peut venir de la comparaison sociale, de l'histoire familiale, d'un traumatisme financier ou d'objectifs qui bougent à chaque fois qu'ils sont atteints.",
    ],
    sections: [
      {
        heading: "La sensation et les données ne sont pas la même chose",
        body: [
          "Le sentiment d'aller mal ne veut pas toujours dire que les chiffres vont mal. Mais il ne faut pas l'ignorer non plus.",
          "La première étape consiste à regarder des données concrètes: dépenses, dettes, épargne, revenus et risques réels.",
        ],
      },
      {
        heading: "Réduis la comparaison",
        body: [
          "Les réseaux sociaux déforment ce qui paraît normal. Si ta référence est toujours quelqu'un qui gagne plus, aucun chiffre ne semble suffisant.",
          "Définis ton propre assez avant de poursuivre celui de quelqu'un d'autre.",
        ],
      },
    ],
  },
  "ynab-vs-monarch-vs-savlo": {
    title: "YNAB vs Monarch vs Savlo: une comparaison honnête pour 2026",
    description:
      "Trois apps de finances personnelles, trois philosophies différentes. Compare YNAB, Monarch et Savlo pour trouver celle que tu continueras vraiment à utiliser dans six mois.",
    keywords: [
      "YNAB vs Monarch",
      "meilleure application budget",
      "Savlo vs YNAB",
      "alternatives à Monarch Money",
      "application budget calme",
    ],
    readingTime: 7,
    summary: [
      "YNAB, Monarch et Savlo ne cherchent pas à résoudre exactement le même problème émotionnel. Les comparer seulement par les fonctionnalités peut donc brouiller la vue.",
      "La vraie question est: quelle relation veux-tu avoir avec ton argent ?",
    ],
    sections: [
      {
        heading: "YNAB et Monarch",
        body: [
          "YNAB est fort pour le contrôle proactif et le budget base zéro. Il demande une participation fréquente et une vraie courbe d'apprentissage.",
          "Monarch brille comme tableau financier large, surtout pour le patrimoine, les comptes connectés et les finances partagées.",
        ],
      },
      {
        heading: "Où Savlo se situe",
        body: [
          "Savlo vise les personnes qui évitent de regarder leurs finances parce que l'expérience paraît lourde ou anxiogène.",
          "La proposition se concentre sur la voix, les Spaces, les fonds dédiés, l'import/export et un design moins punitif.",
        ],
      },
    ],
  },
} as const

type FrenchSlug = keyof typeof overrides

function buildPost(slug: FrenchSlug): FrenchBlogPost {
  const base = fromEnglish(slug)
  const override = overrides[slug]

  return {
    slug,
    title: override.title,
    description: override.description,
    category: base.category,
    date: base.date,
    dateModified: base.dateModified,
    keywords: [...override.keywords],
    readingTime: override.readingTime,
    summary: [...override.summary],
    sections: override.sections.map((section) => ({
      heading: section.heading,
      body: [...section.body],
    })),
  }
}

export const frenchPosts = (Object.keys(overrides) as FrenchSlug[]).map((slug) =>
  buildPost(slug),
)

export function getFrenchPostBySlug(slug: string): FrenchBlogPost | undefined {
  return frenchPosts.find((post) => post.slug === slug)
}
