import { posts, type BlogCategory } from "@/lib/blog/posts"
import type { RichArticle } from "@/lib/blog/rich-article"

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
    readingTime: 22,
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "L'anxiété financière est rarement proportionnelle au montant d'argent que tu as sur ton compte. Elle est proportionnelle à la quantité d'incertitude que tu ressens. Les habitudes quotidiennes présentées ici sont conçues pour réduire ta charge émotionnelle avant même que tu ne regardes les chiffres. Elles ne remplacent pas l'aide d'un professionnel si l'anxiété est sévère, mais elles constituent un point de départ pour toute personne qui veut changer la façon dont l'argent la fait se sentir.",
        },
        {
          kind: "h2",
          id: "ce-que-c'est",
          text: "Ce qu'est vraiment l'anxiété financière",
        },
        {
          kind: "p",
          text: "L'anxiété financière ne concerne pas le chiffre sur ton compte. Des personnes avec des épargnes à six chiffres peuvent se réveiller à trois heures du matin en se demandant si elles ont assez, et des personnes sans rien peuvent dormir tranquillement. L'anxiété naît de l'écart entre ce que tu as et ce que tu penses avoir besoin, combiné au sentiment de ne pas avoir le contrôle sur la fermeture de cet écart. C'est un sentiment, pas un relevé bancaire.",
        },
        {
          kind: "p",
          text: "Le sentiment a généralement deux couches. La couche de surface est l'inquiétude immédiate : est-ce que je peux payer le loyer ? Est-ce que je peux couvrir la réparation de la voiture ? Est-ce que ma carte sera refusée ? La couche profonde est l'histoire que tu te racontes sur ce que ce chiffre signifie à ton sujet. La couche de surface est résoluble avec un plan. La couche profonde est ce qui fait que l'anxiété persiste même une fois le plan en place. L'anxiété financière est rarement à propos de l'argent lui-même. Elle est à propos de ce que tu crois que l'argent dit sur ta compétence, ta valeur et ton avenir.",
        },
        {
          kind: "p",
          text: "Le terme est utilisé librement, mais l'expérience est réelle. Elle peut se manifester par de la dread quand tu ouvres ton application bancaire, de l'irritabilité après un achat, de l'insomnie la nuit avant de recevoir ton salaire, ou un bourdonnement constant d'inquiétude qui te suit partout. Elle ne nécessite pas de crise. Elle ne nécessite pas de dette. Elle ne nécessite pas de pauvreté. Elle ne nécessite que la croyance que tu n'es pas en sécurité, et cette croyance est souvent déconnectée des faits.",
        },
        {
          kind: "h2",
          id: "pourquoi-largent-provoque",
          text: "Pourquoi l'argent provoque de l'anxiété",
        },
        {
          kind: "p",
          text: "L'argent est l'un des rares sujets qui touche chaque partie de la vie : logement, alimentation, santé, relations, identité, liberté, temps. Quand l'argent semble instable, chaque partie de la vie semble instable. L'anxiété n'est pas irrationnelle. C'est le cerveau qui fait exactement ce pour quoi il a été conçu : signaler une menace perçue pour la survie. Le problème est que la réponse à la menace ne fait pas la différence entre une véritable urgence et une notification indiquant que ton solde est plus bas que prévu.",
        },
        {
          kind: "p",
          text: "La deuxième raison pour laquelle l'argent provoque de l'anxiété est que la plupart des gens n'ont jamais appris à y penser. Les écoles enseignent l'algèbre, pas les intérêts composés. Les familles parlent d'argent à voix basse, ou pas du tout, ou dans des disputes. Le résultat est que la plupart des adultes abordent leurs finances avec la boîte à outils émotionnelle d'un enfant : éviter le sujet, se sentir coupable quand il survient, et espérer qu'il se résolve tout seul. L'évasion aggrave l'anxiété, parce que moins tu connais ta situation financière, plus ton cerveau remplit les trous par des scénarios catastrophes.",
        },
        {
          kind: "p",
          text: "La troisième raison est la comparaison. Les réseaux sociaux te montrent les vacances, voitures et maisons des autres sans te montrer leur dette, leur anxiété, ou les soixante heures de travail hebdomadaires qui ont financé l'achat. La comparaison crée un standard invisible contre lequel tu te mesures, et le standard est impossible parce qu'il n'est pas réel. Tu compares ton intérieur à l'extérieur de quelqu'un d'autre, et tu perdras toujours cette comparaison.",
        },
        {
          kind: "p",
          text: "La quatrième raison est la honte. La honte est la croyance que tu es le problème, pas que tu as un problème. La honte financière dit : je devrais savoir faire ça. Je devrais être plus avancé. Tout le monde a compris ça. La honte t'empêche de demander de l'aide, de regarder les chiffres, et de faire les petits premiers pas qui réduiraient réellement l'anxiété. La honte est la meilleure amie de l'anxiété, parce qu'elle te garde silencieux.",
        },
        {
          kind: "h2",
          id: "symptomes-physiques",
          text: "Les symptômes physiques du stress financier",
        },
        {
          kind: "p",
          text: "Le stress financier ne vit pas seulement dans ta tête. Il se manifeste dans ton corps de façons faciles à manquer parce qu'elles semblent sans rapport avec l'argent. Des maux de tête qui apparaissent le premier du mois quand le loyer est dû. De la tension de la mâchoire causée par le serrement nocturne. Des problèmes d'estomac qui semblent venir de nulle part. De la fatigue que le sommeil ne répare pas. Une oppression thoracique quand tu reçois un e-mail de ta banque. Ce n'est pas imaginaire. C'est la réponse de stress qui fait exactement ce pour quoi elle a été conçue : préparer ton corps au danger. Le problème est que le danger est une pensée à propos de l'argent, pas une menace physique, et ton corps ne peut pas faire la différence.",
        },
        {
          kind: "p",
          text: "Les symptômes physiques créent une boucle de rétroaction. Tu ressens le mal de tête, et ton cerveau interprète le mal de tête comme une preuve que quelque chose ne va pas, ce qui augmente l'anxiété, ce qui augmente le mal de tête. La boucle se renforce d'elle-même, et la seule façon de la briser est de traiter l'anxiété à la source : la pensée, pas le symptôme. Le corps se calme quand l'esprit se calme, et l'esprit se calme quand l'incertitude diminue. Les habitudes de ce guide sont conçues pour diminuer l'incertitude, ce qui est la solution en amont des symptômes physiques.",
        },
        {
          kind: "p",
          text: "L'autre effet physique du stress financier est sur la prise de décision. Le stress réduit ton attention à la menace immédiate, ce qui est utile si une voiture se dirige vers toi mais destructeur si tu essaies de planifier un budget. Sous stress, tu prends des décisions plus impulsives, ce qui crée plus de problèmes financiers, ce qui crée plus de stress. La boucle est vicieuse et courante. La façon de la briser est de réduire le stress avant de prendre la décision financière, pas après. Les habitudes ci-dessous sont conçues pour faire exactement cela.",
        },
        {
          kind: "h2",
          id: "habitudes",
          text: "Habitudes quotidiennes pour la paix financière",
        },
        {
          kind: "ol",
          items: [
            "**Fenêtres de vérification dédiées.** Vérifie tes comptes à un moment programmé, pas à chaque fois que tu reçois une notification. Le moment programmé te donne le contrôle sur le moment où tu engages avec l'argent. La notification aléatoire donne à l'argent le contrôle sur le moment où il t'engage. La différence est entre choisir de regarder et être surpris par un chiffre.",
            "**Prends une grande respiration.** Respire lentement trois fois avant d'ouvrir toute application financière. Les trois respirations ne sont pas un tour de magie. Ce sont une réinitialisation physiologique. La respiration lente active le système nerveux parasympathique, c'est-à-dire le système qui dit à ton corps que le danger est passé. Cela n'éliminera pas l'anxiété, mais cela la réduira suffisamment pour que tu puisses réfléchir clairement au lieu de sombrer.",
            "**Utilise un langage doux.** Remplace « j'ai trop dépensé » par « j'observe mes schémas de dépenses ». La différence n'est pas sémantique. La première formulation est un verdict. La seconde est une observation. Un verdict ferme la conversation. Une observation l'ouvre. Le langage plus doux crée un espace entre toi et le chiffre, et c'est dans cet espace que vit la pensée rationnelle.",
            "**Concentre-toi sur un seul chiffre.** Ne te surcharge pas ; choisis un seul indicateur à examiner par session. Peut-être c'est le solde du compte courant. Peut-être c'est le montant de ton fonds d'urgence. Peut-être c'est le montant que tu as dépensé en courses cette semaine. Un seul chiffre est gérable. Cinq chiffres en même temps sont une recette pour la panique. Commence petit, construis l'habitude, et laisse le nombre de choses que tu suis croître naturellement avec le temps.",
            "**Fixe un couvre-feu.** Pas de revues financières ou de discussions sur l'argent dans la dernière heure avant de te coucher. Ton cerveau traite le contenu émotionnel différemment pendant le sommeil, et la dernière chose à laquelle tu penses avant de dormir a tendance à recevoir plus de poids émotionnel. Une conversation sur l'argent à vingt-trois heures devient un cauchemar financier à trois heures du matin. Déplace la revue au matin, quand ton cerveau est frais et ton cortisol est naturellement plus élevé.",
          ],
        },
        {
          kind: "h2",
          id: "verifier-sans-paniquer",
          text: "Comment vérifier tes finances sans sombrer",
        },
        {
          kind: "p",
          text: "L'objectif de vérifier tes finances n'est pas de te sentir bien à propos du chiffre. L'objectif est de connaître le chiffre, parce que connaître est toujours moins effrayant que ne pas connaître. L'inconnu est l'endroit où vit l'anxiété. Le chiffre, même s'il est plus bas que tu ne l'espérais, est un fait, et les faits sont gérables. Le processus de vérification devrait prendre moins de cinq minutes. Tout ce qui dépasse cinq minutes n'est pas de la vérification ; c'est de la rumination, et la rumination est de l'anxiété portant un masque productif.",
        },
        {
          kind: "p",
          text: "La vérification de cinq minutes a une structure. Premièrement, ouvre le compte ou l'application. Deuxièmement, regarde le chiffre. Troisièmement, dis le chiffre à voix haute. Quatrièmement, demande-toi : est-ce que ce chiffre est une crise, ou est-ce que c'est juste pas ce que je voulais ? La plupart du temps, c'est juste pas ce que tu voulais. La distinction entre une crise et une déception est importante, parce qu'une crise nécessite une action et une déception nécessite une acceptance. La vérification de cinq minutes t'aide à faire la différence avant de réagir.",
        },
        {
          kind: "p",
          text: "Après la vérification, ferme l'application. Ne fais pas défiler les transactions. N'ouvre pas d'autres comptes pour comparer. Ne vérifie pas ton score de crédit. Ne lis pas d'articles sur comment épargner plus. La vérification est terminée. Le reste est du bruit. La discipline de fermer l'application après cinq minutes est la partie qui réduit réellement l'anxiété, parce qu'elle apprend à ton cerveau que tu peux regarder le chiffre et survivre. Chaque fois que tu regardes et que tu survis, regarder devient plus facile, et survivre devient plus rapide.",
        },
        {
          kind: "h2",
          id: "comparaison",
          text: "Le rôle de la comparaison dans l'anxiété liée à l'argent",
        },
        {
          kind: "p",
          text: "La comparaison est le moteur de la plupart des anxiétés financières qui ne sont pas liées à un besoin réel de survie. Tu as assez pour le loyer, mais ton collègue vient d'acheter une maison, et maintenant ton appartement semble être un échec. Tu as assez pour les courses, mais ton ami a posté une photo de vacances, et maintenant ton week-end à la maison semble être une punition. La comparaison prend une situation qui allait bien il y a cinq minutes et la transforme en preuve que tu es en retard.",
        },
        {
          kind: "p",
          text: "L'antidote à la comparaison n'est pas la gratitude, bien que la gratitude aide. L'antidote est l'information. Quand tu vois l'achat de quelqu'un, tu vois un point de données. Tu ne vois pas son salaire, sa dette, son héritage, le revenu de son partenaire, son loyer, sa santé mentale, ou les compromis qu'il a fait pour se le permettre. Tu vois le résultat, pas l'entrée, et c'est l'entrée qui détermine si l'achat était sage ou imprudent. La comparaison est injuste parce qu'elle est incomplète.",
        },
        {
          kind: "p",
          text: "La solution pratique est de limiter les entrées qui déclenchent la comparaison. Cela ne signifie pas supprimer tous les réseaux sociaux ou éviter tous les amis. Cela signifie remarquer quels comptes, quelles personnes et quels contextes déclenchent la spirale de comparaison, et réduire ton exposition à ces déclencheurs spécifiques. L'objectif n'est pas de vivre dans une bulle. L'objectif est d'arrêter de t'exposer volontairement à du matériel qui te fait mal sentir à propos de choix qui étaient parfaitement bien avant que tu ne le voies.",
        },
        {
          kind: "h2",
          id: "evitement",
          text: "Quand l'anxiété financière devient de l'évitement",
        },
        {
          kind: "p",
          text: "La chose la plus dangereuse que fait l'anxiété financière est de te faire éviter tes finances. L'évitement semble protecteur : si je ne regarde pas, je n'ai pas à faire face. Mais l'évitement est l'opposé de protecteur. C'est cumulatif. Chaque jour où tu ne regardes pas, l'inconnu grandit, et l'anxiété remplit l'inconnu par des scénarios catastrophes. Une facture que tu n'as pas ouverte devient des frais de retard que tu n'attendais pas. Un compte que tu n'as pas vérifié devient un découvert que tu n'as pas attrapé. L'évitement crée exactement le résultat qu'il essayait de prévenir.",
        },
        {
          kind: "p",
          text: "Le schéma est prévisible. D'abord, tu évites de regarder. Ensuite tu te sens coupable d'éviter. Ensuite la culpabilité rend plus difficile de regarder. Ensuite tu évites plus fort. Le cycle peut durer des mois ou des années, et il se termine généralement par une crise qui te force à regarder quand même, mais maintenant dans de pires conditions. La façon de briser le cycle est de rendre le regard aussi facile que possible. Cinq minutes. Un seul chiffre. Pas de jugement. Plus l'étape est petite, plus tu es susceptible de la franchir, et plus tu franchis d'étapes, plus l'étape suivante paraît petite.",
        },
        {
          kind: "p",
          text: "La reformulation qui aide la plupart des gens est celle-ci : regarder tes finances n'est pas un test de ton caractère. C'est un exercice de collecte de données. Tu n'es pas noté. Tu n'es pas jugé. Tu collectes de l'information qui t'aidera à prendre une meilleure décision demain. Le cadre de collecte de données enlève le poids moral de l'acte de regarder, et le poids enlevé rend le regard possible.",
        },
        {
          kind: "h2",
          id: "parler-dargent",
          text: "Comment parler d'argent quand ça te rend anxieux",
        },
        {
          kind: "p",
          text: "L'argent est l'un des derniers sujets tabous. Les gens parleront de leur santé, de leurs relations et de leur santé mentale avant de parler de leur salaire, de leur dette ou de leurs habitudes de dépenses. Le silence autour de l'argent aggrave l'anxiété, parce que l'anxiété se nourrit de la croyance que tu es le seul à lutter avec ça. Tu ne l'es pas. Le silence est partagé, et le silence partagé fait que tout le monde se sent seul.",
        },
        {
          kind: "p",
          text: "La façon de parler d'argent sans sombrer est de fixer des limites avant que la conversation ne commence. Dis à l'autre personne : je peux parler de ça pendant dix minutes, et ensuite j'ai besoin d'arrêter. La limite de temps empêche la conversation de devenir une séance de thérapie, ce qui n'est pas ce pour quoi l'autre personne s'est inscrite. La limite te protège aussi, parce que cela signifie que la conversation a une fin connue, et les fins connues sont moins effrayantes que les fins ouvertes.",
        },
        {
          kind: "p",
          text: "L'autre limite est la portée. Tu n'as pas à partager chaque chiffre. Tu peux parler de ce que l'argent te fait ressentir sans partager ton salaire. Tu peux parler de l'anxiété sans partager ta dette. Le sentiment est la partie importante, parce que le sentiment est l'endroit où le changement se produit. Les chiffres ne sont que des données. Le sentiment est l'histoire que tu racontes à propos des données, et c'est l'histoire que tu peux changer.",
        },
        {
          kind: "h2",
          id: "routine",
          text: "Construire une routine financière qui ne déclenche pas de stress",
        },
        {
          kind: "p",
          text: "Une routine financière n'est pas un budget. Un budget est un plan pour ton argent. Une routine est un plan pour quand et comment tu penses à ton argent. C'est la routine qui rend le budget possible, parce que sans routine, le budget devient une chose de plus que tu ne fais pas. La routine est petite, régulière et automatique, et elle existe pour rendre l'acte d'engager avec l'argent normal au lieu de menaçant.",
        },
        {
          kind: "p",
          text: "La routine a trois parties. La première est la vérification hebdomadaire, qui prend cinq minutes et se produit au même moment chaque semaine. La seconde est la reconstruction mensuelle, qui prend trente à soixante minutes et se produit à la même date chaque mois. La troisième est la revue annuelle, qui prend soixante à quatre-vingt-dix minutes et se produit au même moment chaque année. Les trois parties diffèrent par la portée mais sont identiques dans la structure : tu regardes les chiffres, tu fais un plan, et tu fermes le livre.",
        },
        {
          kind: "p",
          text: "La clé pour rendre la routine sans stress est de rendre chaque partie aussi petite que possible. La vérification hebdomadaire ne devrait jamais prendre plus de cinq minutes. Si elle prend plus de temps, tu fais trop. La reconstruction mensuelle ne devrait jamais prendre plus de soixante minutes. Si elle prend plus de temps, tu compliques trop. La revue annuelle ne devrait jamais prendre plus de quatre-vingt-dix minutes. Si elle prend plus de temps, tu rumines, tu ne révises pas. Les limites de temps ne sont pas arbitraires. Elles font la différence entre une routine qui réduit l'anxiété et une routine qui la crée.",
        },
        {
          kind: "h2",
          id: "scripts-argent",
          text: "Les scripts argent qui tournent en arrière-plan",
        },
        {
          kind: "p",
          text: "La plupart des anxiétés financières sont alimentées par ce que les thérapeutes appellent les scripts argent : des croyances inconscientes à propos de l'argent que tu as absorbées dans l'enfance et que tu exécutes depuis. Les scripts sont invisibles, ce qui les rend puissants. Tu ne les remarques pas plus que tu ne remarques le système d'exploitation sur ton téléphone. Mais ils façonnent chaque décision financière que tu prends, et ils sont généralement faux.",
        },
        {
          kind: "p",
          text: "Les scripts argent les plus courants sont : l'argent est la racine de tous les maux, les gens riches sont avides, je ne mérite pas l'argent, je n'aurai jamais assez, l'argent est difficile à gagner, l'argent est facile à perdre, et parler d'argent est impoli. Chacun de ces scripts crée un type spécifique d'anxiété. Le script « je n'aurai jamais assez » crée un sentiment perpétuel de pénurie, même quand les chiffres vont bien. Le script « l'argent est difficile à gagner » crée une peur de dépenser, parce que chaque dollar dépensé semble avoir pris des mois à remplacer. Le script « les gens riches sont avides » crée de la culpabilité à gagner plus, ce qui t'empêche de négocier une augmentation ou d'augmenter tes prix.",
        },
        {
          kind: "p",
          text: "La façon d'identifier tes scripts argent est de remarquer les pensées qui apparaissent quand tu penses à l'argent. Note-les, exactement comme elles apparaissent dans ta tête. Ne les édite pas. Ne les juge pas. Note-les simplement. Ensuite demande-toi : d'où vient cette pensée ? Qui m'a dit ça ? Quand ai-je commencé à croire ça ? Les réponses remontent généralement à un moment précis de l'enfance : un parent qui dispute à propos des factures, un professeur qui dit quelque chose à propos des gens riches, un parent qui fait un commentaire sur les finances de la famille. Le moment était petit, mais la croyance qu'il a créée était grande, et elle a façonné ton comportement financier depuis.",
        },
        {
          kind: "p",
          text: "Les scripts argent ne disparaissent pas d'eux-mêmes. Ils disparaissent quand tu les vois, que tu les nommes, et que tu décides s'ils sont encore vrais. La plupart ne le sont pas. Le script « je n'aurai jamais assez » était vrai quand tu étais enfant et que tu n'avais aucun contrôle sur les finances du foyer. Il n'est plus vrai maintenant que tu as ton propre revenu, ton propre compte, et ta propre capacité à prendre des décisions. Le script a servi un objectif autrefois. Il ne sert plus d'objectif maintenant. L'identifier est le premier pas pour le remplacer par quelque chose de plus précis et de moins douloureux.",
        },
        {
          kind: "h2",
          id: "aider-les-autres",
          text: "Comment aider quelqu'un d'autre avec son anxiété financière",
        },
        {
          kind: "p",
          text: "Si quelqu'un que tu aimes lutte avec l'anxiété financière, la chose la plus utile que tu puisses faire n'est pas de donner des conseils. Les conseils semblent utiles, mais ils arrivent souvent comme un jugement : tu devrais faire ça, tu devrais arrêter de faire ça. La personne sait déjà qu'elle devrait. La connaissance n'est pas le problème. Le problème est que l'anxiété rend l'action impossible. Ce dont la personne a besoin n'est pas d'un plan. Ce dont elle a besoin est de quelqu'un qui s'assoie avec elle pendant qu'elle regarde les chiffres, sans ciller, sans corriger, et sans la faire se sentir pire.",
        },
        {
          kind: "p",
          text: "La version pratique de cela s'appelle la co-régulation. Tu t'assieds dans la même pièce pendant que la personne ouvre son application bancaire. Tu ne regardes pas l'écran. Tu ne commentes pas le chiffre. Tu exists simplement dans l'espace pendant qu'elle fait la chose qui lui fait peur. Ta présence calme réduit sa réponse de stress, ce qui rend le regard possible, ce qui rend le prochain regard plus facile. La co-régulation n'est pas une solution. C'est un pont qui rend la solution possible.",
        },
        {
          kind: "p",
          text: "L'autre chose que tu peux faire est de normaliser. Dis : moi aussi je ressens de l'anxiété à propos de l'argent parfois. Moi aussi j'évite de regarder mes comptes. Moi aussi je ressens de la honte à propos de mes dépenses. La normalisation enlève l'isolement, et c'est l'isolement qui fait que l'anxiété grandit. La personne n'a pas besoin d'être corrigée. Elle a besoin de savoir qu'elle n'est pas la seule à se sentir comme ça. L'expérience partagée est plus guérissante que n'importe quelle application de budget ou plan financier.",
        },
        {
          kind: "h2",
          id: "dysmorphie",
          text: "L'anxiété financière et la dysmorphie monétaire",
        },
        {
          kind: "p",
          text: "La dysmorphie monétaire est un terme plus récent pour un phénomène qui a toujours existé : la distorsion entre ta situation financière réelle et la façon dont tu la perçois. Tu peux gagner un salaire confortable et te sentir perpétuellement fauché. Tu peux avoir plus d'épargne que la plupart de tes pairs et te sentir en retard. La distorsion n'est pas à propos des faits. Elle est à propos de la lentille à travers laquelle tu vois les faits, et l'anxiété financière est la lentille qui fait que tout semble pire qu'il ne l'est.",
        },
        {
          kind: "p",
          text: "La dysmorphie monétaire est courante chez les personnes qui ont grandi dans des foyers où l'argent était serré, même si leur situation actuelle est stable. L'expérience de l'enfance a créé une attente de base de pénurie, et cette base ne se met pas à jour automatiquement quand les faits changent. Tu peux gagner trois fois ce que tes parents gagnaient et ressentir la même anxiété qu'ils ressentaient, parce que le sentiment a été installé avant que tu n'aies le langage pour le remettre en question. L'anxiété est héritée, pas méritée, et l'héritage peut être décliné.",
        },
        {
          kind: "p",
          text: "L'effet pratique de la dysmorphie monétaire est qu'elle t'empêche de profiter de la stabilité financière que tu as déjà atteinte. Tu épargnes agressivement mais tu te sens comme si ce n'était jamais assez. Tu évites de dépenser pour des choses qui amélioreraient ta vie parce que la dépense déclenche l'anxiété. Tu te compares à des personnes qui gagnent plus et tu te sens en échec, même si tu te débrouilles bien selon toutes les mesures objectives. La dysmorphie est l'anxiété portant un déguisement, et le déguisement ressemble à de la prudence.",
        },
        {
          kind: "h2",
          id: "mythe-fonds-urgence",
          text: "Le mythe du fonds d'urgence et pourquoi il aggrave l'anxiété",
        },
        {
          kind: "p",
          text: "Tout le monde dit : construis un fonds d'urgence. Trois à six mois de dépenses. C'est le chiffre magique. Si tu l'as, tu es en sécurité. Si tu ne l'as pas, tu devrais ressentir de l'anxiété. Le conseil est bienveillant, mais il aggrave souvent l'anxiété, parce qu'il crée un nouveau chiffre obsessionnel et une nouvelle façon de te sentir en échec. Tu as déjà le chiffre du loyer, le chiffre de la carte de crédit, et le chiffre de l'épargne. Maintenant tu as le chiffre du fonds d'urgence aussi, et c'est généralement celui qui semble le plus éloigné.",
        },
        {
          kind: "p",
          text: "Le fonds d'urgence est une bonne idée. Mais la façon dont il est généralement présenté en fait une autre source d'anxiété au lieu d'une solution. La présentation suppose que tu as assez de marge pour épargner, que tu peux épargner régulièrement, et que l'acte d'épargner ne crée pas lui-même de stress. Pour les personnes avec de l'anxiété financière, l'acte d'épargner crée souvent du stress, parce que chaque dollar épargné est un dollar qui aurait pu être utilisé pour réduire l'anxiété immédiate. La tension entre épargner pour l'avenir et apaiser le présent est réelle, et le conseil standard ne l'aborde pas.",
        },
        {
          kind: "p",
          text: "Un meilleur cadrage est de penser au fonds d'urgence comme un spectre, pas comme une cible. Tout montant épargné est mieux que rien. Cent euros sont mieux que zéro. Cinq cents sont mieux que cent. Le chiffre n'a pas à être parfait. Il a à exister. L'existence d'un même petit fonds change l'histoire que tu te racontes sur ta capacité à gérer les surprises, et c'est l'histoire changée qui réduit l'anxiété. Le fonds n'est pas à propos de l'argent. Il est à propos de l'histoire.",
        },
        {
          kind: "h2",
          id: "demander-de-laide",
          text: "Quand demander l'aide d'un professionnel",
        },
        {
          kind: "p",
          text: "Si l'anxiété liée à l'argent affecte gravement ton sommeil, tes relations ou ton fonctionnement quotidien depuis plus de deux semaines, envisage de consulter un thérapeute financier. Une application de budget peut arrêter d'aggraver l'anxiété, mais elle ne peut pas remplacer les soins professionnels.",
        },
        {
          kind: "p",
          text: "La thérapie financière est un domaine spécifique qui combine la planification financière avec le soutien psychologique. Un thérapeute financier ne te dit pas simplement où mettre ton argent. Il t'aide à comprendre pourquoi l'argent te fait ressentir ce qu'il te fait ressentir, et il t'aide à développer les compétences émotionnelles pour engager avec tes finances sans la surcharge. La combinaison est plus efficace que chaque discipline séparément, parce que le plan financier ne tient pas si la fondation émotionnelle n'est pas stable, et le travail émotionnel ne tient pas si la fondation financière n'est pas abordée.",
        },
        {
          kind: "p",
          text: "Les signes que tu devrais demander de l'aide incluent : tu n'as pas ouvert ton courrier depuis plus d'un mois, tu ne t'es pas connecté à ton compte bancaire depuis plus de deux semaines, tu perds du sommeil à cause de l'argent plus d'une fois par semaine, tu disputes à propos de l'argent avec ton partenaire plus d'une fois par semaine, ou tu prends des décisions financières basées sur la panique plutôt que sur l'information. Aucun de ces signes ne signifie que tu as échoué. Ils signifient que l'anxiété a grandi au-delà de ce que l'auto-aide peut gérer, et il n'y a pas de honte à ça. La honte serait de continuer à souffrir quand de l'aide est disponible.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Questions fréquentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "L'anxiété financière, c'est la même chose que d'être nul avec l'argent ?",
              a: "Non. L'anxiété financière est une réponse émotionnelle à l'incertitude à propos de l'argent. Elle peut toucher des personnes excellentes avec l'argent et des personnes qui ne le sont pas. L'anxiété est à propos du sentiment, pas de la compétence. Tu peux être très compétent avec tes finances et quand même ressentir de l'anxiété, parce que l'anxiété est enracinée dans la croyance que tu n'es pas en sécurité, pas dans la réalité de ta situation financière.",
            },
            {
              q: "Une application de budget peut-elle aider avec l'anxiété financière ?",
              a: "Ça dépend de l'application. Certaines applications aggravent l'anxiété en te bombardant de notifications, en te montrant des graphiques qui ressemblent à du jugement, et en te faisant te sentir en échec. Une application bien conçue fait l'opposé : elle réduit le nombre de décisions que tu dois prendre, elle présente l'information calmément, et elle t'aide à construire une routine qui rend le regard sur ton argent normal. La bonne application ne remplace pas l'aide professionnelle pour une anxiété sévère, mais elle peut faire partie d'un plan qui réduit la charge quotidienne.",
            },
            {
              q: "Combien de temps faut-il pour que l'anxiété financière s'améliore ?",
              a: "Ça dépend de la source. Si l'anxiété est alimentée par un problème financier spécifique (dette, une facture, une perte d'emploi), l'anxiété diminue souvent dès que tu as un plan, même si le plan prend des mois à exécuter. Si l'anxiété est alimentée par une croyance plus profonde (honte, trauma financier de l'enfance, peur de ne pas être à la hauteur), cela peut prendre plus de temps, et l'aide professionnelle accélère souvent le processus. La plupart des gens remarquent une amélioration dans les quatre à six semaines suivant le début d'une routine régulière, même sans aide professionnelle.",
            },
            {
              q: "Devrais-je partager mon anxiété financière avec mon partenaire ?",
              a: "Oui, mais avec une structure. Choisis un moment où aucun de vous n'est stressé, fixe une limite de temps, et concentre-toi sur ce que tu ressens plutôt que sur ce que l'autre personne devrait faire. L'objectif de la conversation n'est pas de résoudre le problème ensemble. L'objectif est d'être connu. Une fois le sentiment partagé, la honte perd son pouvoir, et la résolution de problème devient possible depuis un endroit plus calme.",
            },
            {
              q: "Et si mon anxiété financière est justifiée parce que mes finances sont vraiment mauvaises ?",
              a: "Même une anxiété justifiée reste de l'anxiété, et l'anxiété ne t'aide pas à résoudre les problèmes financiers. Elle te fait les éviter. Le fait que tes finances soient difficiles rend plus important, pas moins, de les aborder calmement. Le calme n'est pas du déni. Le calme est la condition dans laquelle de bonnes décisions sont possibles. Une personne calme avec de mauvaises finances prend de meilleures décisions qu'une personne anxieuse avec de mauvaises finances, à chaque fois.",
            },
            {
              q: "Est-ce normal de ressentir de l'anxiété à propos de l'argent même quand ça va bien ?",
              a: "Oui. L'anxiété financière n'est pas proportionnelle à ta situation financière. Elle est proportionnelle à ta relation avec l'incertitude, tes scripts argent de l'enfance, et les comparaisons que tu fais. Les personnes avec des revenus confortables ressentent souvent plus d'anxiété à propos de l'argent que les personnes avec moins, parce qu'elles ont plus à perdre et des décisions plus complexes à prendre. L'anxiété n'est pas un signe que quelque chose ne va pas avec tes finances. C'est un signe que quelque chose vaut la peine d'être exploré dans ta relation avec l'argent.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusion",
          text: "Une relation plus calme avec l'argent commence par le regard",
        },
        {
          kind: "p",
          text: "L'anxiété financière n'est pas un défaut de caractère. C'est une réponse de stress à l'incertitude, et l'incertitude diminue quand tu regardes. Le regard n'a pas à être spectaculaire. Il n'a pas à être une revue budgétaire complète. Il peut être cinq minutes, un seul chiffre, pas de jugement. Les cinq minutes ne sont pas une solution. C'est une pratique, et la pratique s'accumule. Chaque fois que tu regardes, le regard devient plus facile. Chaque fois que tu survis au regard, la peur perd un peu de son pouvoir. L'anxiété ne disparaît pas, mais elle rétrécit, et l'espace qu'elle occupait se remplit de quelque chose d'utile : de l'information, de l'autonomie, et la connaissance tranquille que tu peux gérer ça.",
        },
        {
          kind: "p",
          text: "Les habitudes de ce guide sont conçues pour réduire la charge émotionnelle avant même que tu ne regardes les chiffres. Les respirations, le langage, les limites de temps, le couvre-feu : chacune est une petite intervention qui change la relation entre toi et ton argent. Aucune ne nécessite de volonté. Aucune ne nécessite que tu te sentes motivé. Elles nécessitent simplement que tu les fasses, et l'action crée la motivation, pas l'inverse. La motivation suit l'action. L'action ne suit pas la motivation.",
        },
        {
          kind: "p",
          text: "Si tu veux un outil qui rend le regard plus facile, Savlo est conçu exactement pour ça : un moyen calme, privé et sans publicité de voir ton argent sans la surcharge. Savlo est disponible sur Android et arrive bientôt sur iOS. Si tu veux continuer, les articles ci-dessous approfondissent les mécaniques spécifiques : la [philosophie de budgétisation plus large](/fr/blog/how-to-budget-money), la [mécanique pratique des Sinking Funds](/fr/blog/sinking-funds), et le guide spécifique sur [la règle 50/30/20](/fr/blog/50-30-20-rule) si tu veux un point de départ simple.",
        },
      ],
    },
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
    readingTime: 22,
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Le budget base zéro est l'une des méthodes les plus connues de planification personnelle. La règle est directe : quand le mois commence, chaque unité d'argent attendue a une destination. Quand la première dépense arrive, il n'y a aucun solde sans nom sur le compte qui attend d'être mangé par l'impulsion. C'est tout. Le chiffre à droite de la page est zéro, non pas parce que tout a été dépensé, mais parce que rien n'est resté sans tâche. L'ambiguïté est partie.",
        },
        {
          kind: "p",
          text: "Le changement mental va de réactif à intentionnel. Au lieu de demander « qu'est-ce qu'il reste à la fin du mois ? », tu commences le mois avec une réponse complète. La plupart des personnes qui gardent un budget base zéro pendant plus de six mois disent la même chose : le budget cesse de ressembler à une contrainte et commence à ressembler à une permission. Tu sais exactement ce qu'il est sûr de dépenser, ce qui est réservé pour une facture future, et ce qui est bloqué dans un objectif. L'incertitude disparaît.",
        },
        {
          kind: "p",
          text: "Le système a été popularisé dans le monde des finances personnelles par YNAB (You Need A Budget) et a ses racines dans la comptabilité de gestion des années 1970. La version personnelle est bien plus légère que la version entreprise, mais le principe est le même : chaque unité monétaire est une ressource, et les ressources sont plus utiles quand elles sont attribuées avec intention. Tu peux en lire plus sur la philosophie large dans notre guide sur [comment budgétiser son argent](/fr/blog/how-to-budget-money), et la comparer avec l'approche en pourcentage plus simple dans le [guide 50/30/20](/fr/blog/50-30-20-rule).",
        },
        {
          kind: "h2",
          id: "quatre-regles",
          text: "Les quatre règles du budget base zéro",
        },
        {
          kind: "p",
          text: "YNAB présente la pratique comme quatre règles. Elles méritent d'être répétées parce qu'elles expliquent le comportement derrière la mathématique, pas seulement la mathématique elle-même.",
        },
        {
          kind: "ol",
          items: [
            "**Donne un rôle à chaque euro.** Le revenu qui entre est de l'argent qui a besoin d'une attribution, pas d'une cachette. Le rôle peut être une facture, un objectif, un Sinking Fund, une marge ou une catégorie de dépense flexible. Le point est qu'aucun euro ne reste sans attribution.",
            "**Accepte tes vraies dépenses.** La plupart des surprises de l'année ne sont pas des surprises. Assurances, impôts, cadeaux, inscriptions, voyages. Ils arrivent à des dates prévisibles. Le budget base zéro t'oblige à répartir leur coût sur l'année en allouant chaque mois un petit montant dans un Sinking Fund pour chacun. La dépense cesse d'être une surprise.",
            "**Encaisse les coups.** Si tu dépasses une catégorie, tu déplaces de l'argent d'une autre catégorie pour couvrir. Le plan s'ajuste, le total reste à zéro, et le mois n'est pas gâché. Dépasser est une information, pas un échec.",
            "**Fais vieillir ton argent.** Plus ton argent reste longtemps sur le compte avant que tu ne le dépenses, plus tu as de marge. Avec le temps, le budget base zéro élargit l'écart entre gagner et dépenser, et c'est ce qui crée une vraie sérénité financière. Le but n'est pas de thésauriser. Le but est de dépenser de l'argent qui a au moins un mois d'âge, pas de l'argent qui vient d'arriver.",
          ],
        },
        {
          kind: "h2",
          id: "processus-etape-par-etape",
          text: "Le processus étape par étape",
        },
        {
          kind: "ol",
          items: [
            "Note ton revenu net total du mois.",
            "Liste toutes les obligations fixes (logement, services, transport).",
            "Alloue d'abord l'argent à l'épargne et aux investissements.",
            "Distribue le reste sur des catégories flexibles du quotidien.",
            "Assure-toi que le total des allocations est exactement égal au revenu qui va entrer.",
          ],
        },
        {
          kind: "p",
          text: "Les cinq étapes semblent simples parce que le travail n'est pas dans les étapes. Le travail est dans les catégories que tu choisis, la taille de la marge que tu gardes, et la discipline de revenir au plan chaque semaine. Le premier mois prend généralement entre soixante et quatre-vingt-dix minutes. Au troisième mois, la plupart peuvent reconstruire le plan en trente. Le but des étapes est de te donner une séquence qui ne saute pas les parties difficiles, surtout la tentation de laisser une ligne « divers » à la fin. Il n'y a pas de divers. L'idée est de rendre explicite ce qui est implicite.",
        },
        {
          kind: "h2",
          id: "exemple-avec-chiffres",
          text: "Un exemple avec de vrais chiffres",
        },
        {
          kind: "p",
          text: "Pour voir la méthode en action, prenons un seul mois. Revenu net : 4 000 euros. Le plan commence par lister chaque obligation fixe avec sa date d'échéance et son montant. Loyer 1 400, services 120, transport 180, téléphone 60, paiement minimum de dette 260, courses 480, assurances 90, abonnements 45, frais médicaux récurrents 60. Cela totalise 2 695. La couche suivante est constituée des objectifs et Sinking Funds : fonds d'urgence 200, cadeaux de fin d'année 50, entretien du véhicule 40, frais annuels 40, apprentissage 30. Cela ajoute 360. Jusqu'ici, 2 695 + 360 = 3 055 sur 4 000. Les 945 restants sont répartis en catégories flexibles : sorties au restaurant 200, divertissement 120, soins personnels 60, vêtements 80, enfants 120, cadeaux 50, divers flexible 315. Le total arrive à exactement 4 000. Le solde non attribué est zéro. Chaque euro a un rôle.",
        },
        {
          kind: "p",
          text: "Maintenant le mois commence. Vers le 12, « sorties au restaurant » a été plus sollicité que prévu, et il y a un dépassement de 40. Le plan n'est pas cassé. La règle est de déplacer 40 euros depuis une catégorie en surplus (divertissement a eu une semaine calme) vers sorties au restaurant. Le total reste à zéro. Le plan s'est ajusté. Le comportement a changé. Le mois continue.",
        },
        {
          kind: "h2",
          id: "resiste-realite",
          text: "Construire un budget base zéro qui résiste au contact avec la réalité",
        },
        {
          kind: "p",
          text: "La version du budget base zéro qui survit un an est celle qui est légèrement plus généreuse que tu ne penses qu'elle doit l'être. L'erreur que commettent la plupart des gens lors de la première tentative est de sous-budgéter les catégories élastiques. Ils devinent 150 pour les courses, puis dépensent 200, puis se sentent comme s'ils avaient échoué, puis abandonnent le système. La solution est de budgéter la moyenne réelle des trois derniers mois, pas le chiffre plein d'espoir. Une fois que les catégories élastiques sont réalistes, les dépassements surprises diminuent. Le plan ne ressemble plus à un combat.",
        },
        {
          kind: "p",
          text: "L'autre astuce de durabilité est de planifier l'irrégulier. Prends les douze derniers mois et liste chaque dépense qui n'est arrivée que quelques fois : carte grise, fournitures scolaires, vétérinaire, fêtes, mariages d'amis. Additionne-les. Divise par 12. C'est ton allocation mensuelle irrégulière. Mets-la dans un Sinking Fund. Quand la dépense arrive, l'argent est déjà là. Le plan survit parce que l'irrégulier a été intégré, pas ignoré.",
        },
        {
          kind: "h2",
          id: "revenu-irregulier",
          text: "Comment gérer un revenu irrégulier en base zéro",
        },
        {
          kind: "p",
          text: "Le budget base zéro a été conçu pour des salaires prévisibles, mais il fonctionne tout aussi bien avec un revenu irrégulier, avec un changement : au lieu de budgétiser le revenu que tu reçois ce mois-ci, tu budgétises le revenu que tu gardes. Pour les freelances, les travailleurs de gig et toute personne avec des commissions, le rythme est de déposer chaque paiement sur un compte tampon, puis d'allouer aux catégories depuis ce compte. Les catégories sont les mêmes. La source des euros recule juste d'un pas.",
        },
        {
          kind: "p",
          text: "La discipline qui fait fonctionner cela est de budgétiser à partir du mois le plus bas fiable, pas de la moyenne. Si les six derniers mois de dépôts nets sont 3 200, 4 500, 2 900, 3 800, 4 200 et 2 400, ne budgétise pas la moyenne. Budgétise 2 400, et traite chaque euro au-dessus comme une décision : un Sinking Fund, un paiement de dette supplémentaire, un complément de marge, un accélérateur d'objectif. C'est le même principe qui apparaît dans le guide plus large sur [comment budgétiser son argent](/fr/blog/how-to-budget-money) avec un revenu variable ; la structure base zéro lui donne simplement un endroit où atterrir.",
        },
        {
          kind: "h2",
          id: "rythme-hebdomadaire",
          text: "Le rythme hebdomadaire du budget base zéro",
        },
        {
          kind: "p",
          text: "Le plan se construit une fois par mois. Le plan se vérifie une fois par semaine. La vérification est la partie que la plupart des gens sautent, et c'est ce saut qui tue le système. Une vérification hebdomadaire prend entre quinze et vingt minutes : ouvre le plan, enregistre les dépenses de la semaine, regarde le solde restant dans chaque catégorie et demande-toi si une catégorie se dirige vers un dépassement. Si oui, décide maintenant d'où viendra l'argent. La décision prise tôt est la décision qui marche.",
        },
        {
          kind: "p",
          text: "L'autre moitié du rythme est la reconstruction mensuelle. Réserve un bloc de calendrier de 60 à 90 minutes autour du 25 de chaque mois, quand la plupart des factures du mois suivant sont visibles. Reconstruis le plan de haut en bas. Ajuste les catégories, les objectifs des Sinking Funds, la taille de la marge, les priorités d'objectifs. La reconstruction est l'endroit où le plan devient plus affûté chaque mois. C'est aussi l'endroit où la vision annuelle commence à ressembler à la réalité plutôt qu'à une aspiration.",
        },
        {
          kind: "h2",
          id: "sinking-funds",
          text: "Pourquoi le base zéro se marie si bien avec les Sinking Funds",
        },
        {
          kind: "p",
          text: "Les Sinking Funds sont l'arme secrète du budget base zéro. La plupart des gens pensent à un budget comme à un outil pour les trente prochains jours : combien pour le loyer, combien pour les courses, combien pour le transport. Un Sinking Fund est un outil pour les douze prochains mois : il convertit des dépenses irrégulières prévisibles en petites contributions mensuelles, de sorte que la dépense cesse d'être une surprise et devient une ligne du budget.",
        },
        {
          kind: "p",
          text: "La façon de les configurer dans un budget base zéro est de créer une catégorie séparée pour chaque dépense irrégulière, de décider de son coût total annuel, de diviser par douze et d'allouer ce montant chaque mois. Assurance deux fois par an, 300 chacune. Cadeaux en novembre et décembre, 400 au total. Contrôle technique en mars, 180. Abonnements annuels en janvier, 240. Vacances en été, 1 200. Les allocations mensuelles s'additionnent à environ 190. C'est le coût, en tranches mensuelles, d'une année sans dépenses surprises. C'est un petit nombre, et c'est là le point : les Sinking Funds font que les grosses dépenses paraissent petites.",
        },
        {
          kind: "p",
          text: "L'effet combiné du budget base zéro plus les Sinking Funds est d'éliminer les deux sources les plus courantes de stress budgétaire : la grosse dépense surprise et la sensation grandissante que le mois va être serré. Le Sinking Fund s'occupe de la première. Le suivi par catégorie s'occupe de la seconde. Le budget cesse d'être quelque chose que tu survis et devient quelque chose que tu maintiens. Notre [guide plus approfondi sur les Sinking Funds](/fr/blog/sinking-funds) parcourt la mécanique en détail, y compris comment les dimensionner et comment prioriser quand il n'y a pas assez de place dans le budget pour tous.",
        },
        {
          kind: "h2",
          id: "pour-qui",
          text: "À qui est-ce adapté ?",
        },
        {
          kind: "p",
          text: "Le budget base zéro est parfait pour les personnes qui aiment le détail, la structure et la planification financière active. C'est la méthodologie centrale derrière des outils comme YNAB.",
        },
        {
          kind: "p",
          text: "Plus précisément, la méthode tend à convenir aux personnes qui veulent une réponse claire et écrite à la question « que dois-je faire du prochain euro ? ». Si tu as déjà fermé ton application bancaire en te sentant un peu perdu, la méthode est pour toi. Elle convient aussi aux personnes qui passent d'un budget de survie à un budget de planification, parce qu'elle force la différence entre une facture et un objectif à émerger. Une facture est un montant fixe avec une date fixe. Un objectif est un montant flexible avec une date cible. Les traiter de la même manière est l'une des raisons les plus courantes pour lesquelles les budgets échouent.",
        },
        {
          kind: "h2",
          id: "pas-pour-qui",
          text: "À qui cela ne convient peut-être pas ?",
        },
        {
          kind: "p",
          text: "Si planifier chaque euro te semble trop restrictif ou écrasant, commence par la bien plus légère [règle 50/30/20](/fr/blog/50-30-20-rule). Le budget base zéro est une excellente destination, mais pas une ligne de départ obligatoire.",
        },
        {
          kind: "p",
          text: "L'autre groupe qui peut avoir des difficultés avec le base zéro est toute personne dont le revenu est si instable que le plan mensuel est construit sur des suppositions. Si le salaire varie de plus de 40 % d'un mois à l'autre, une structure différente (d'abord un gros Sinking Fund, puis le budget) fonctionne souvent mieux. Le [guide pour budgétiser avec un revenu faible](/fr/blog/budgeting-on-a-low-income) couvre ce cas en détail. La bonne nouvelle est que le budget base zéro devient plus facile au fil de l'usage, donc même un utilisateur mal assorti peut y entrer progressivement une fois que le revenu se stabilise.",
        },
        {
          kind: "h2",
          id: "categories-courantes",
          text: "Catégories courantes et comment les dimensionner",
        },
        {
          kind: "p",
          text: "La plupart des budgets base zéro partagent un ensemble similaire de catégories. Les noms exacts importent moins que la forme. La forme ressemble généralement à : logement et services (environ 30 % à 40 % du revenu), alimentation et ménage (10 % à 15 %), transport (5 % à 10 %), assurances et service minimum de dette (5 % à 10 %), épargne et Sinking Funds (10 % à 20 %), dépenses flexibles (10 % à 20 %), et une marge discrétionnaire (5 % à 10 %). Les pourcentages exacts varient, mais la structure tient. Un budget avec trop peu de catégories cache les dépassements. Un budget avec trop de catégories crée une fatigue de décision. Le juste milieu se situe généralement entre 8 et 14 catégories.",
        },
        {
          kind: "p",
          text: "La taille de chaque Sinking Fund dépend de la dépense qu'il couvre. Prends le coût annuel total et divise par douze. Une assurance de 600 euros devient 50 par mois. Des vacances de 1 200 euros deviennent 100 par mois. Une inspection de voiture de 300 euros devient 25 par mois. Ces allocations paraissent petites, et c'est le point. Le point des Sinking Funds est de faire que les grosses dépenses prévisibles ressemblent à de petites allocations mensuelles. Plus tu gardes le système longtemps, plus cela devient naturel, et moins ton année financière comporte un seul mois qui te surprend.",
        },
        {
          kind: "h2",
          id: "erreurs-courantes",
          text: "Erreurs courantes et comment les éviter",
        },
        {
          kind: "ol",
          items: [
            "**Sous-budgéter les catégories élastiques.** La raison la plus courante pour laquelle un budget base zéro meurt au premier mois. Utilise la moyenne de trois mois, pas le chiffre plein d'espoir. Si la moyenne est 200 pour les courses, planifie 200.",
            "**Sauter la vérification hebdomadaire.** La vérification est ce qui maintient le plan honnête. Sans elle, le plan est une liste de souhaits. Avec elle, le plan est un contrat que tu tiens avec toi-même.",
            "**Oublier les irréguliers.** Assurances, cadeaux, voyages, école, médecin. Les irréguliers sont l'endroit où se cachent les surprises. La façon d'éliminer la surprise est d'allouer pour eux chaque mois, même en petites quantités.",
            "**Traiter le dépassement comme un échec.** Le dépassement est une information. Déplace de l'argent depuis une autre catégorie, ajuste le plan et continue. La règle « encaisse les coups » est ce qui sépare un budget base zéro à long terme d'un budget de trois mois.",
            "**Construire un plan une fois et ne jamais y revenir.** Un budget est un document vivant. S'il ne change pas, la vie pour laquelle il a été conçu a changé, et le budget n'est plus en phase avec la réalité. La reconstruction mensuelle est ce qui maintient la phase.",
            "**Fixer l'objectif à zéro trop agressivement.** Un budget qui arrive à zéro est un budget sans marge. Laisse une petite ligne « prêt à attribuer » ou discrétionnaire, même si ce n'est que 20 euros. La marge est ce qui absorbe les surprises que les catégories n'ont pas captées.",
          ],
        },
        {
          kind: "h2",
          id: "comparer-methodes",
          text: "Comment le base zéro se compare aux autres méthodes",
        },
        {
          kind: "p",
          text: "Le budget base zéro est l'une des plusieurs méthodes de budgétisation bien connues. Les différences importent parce qu'elles déterminent combien de temps et combien de structure la méthode te demande.",
        },
        {
          kind: "p",
          text: "La [règle 50/30/20](/fr/blog/50-30-20-rule) divise le revenu en trois seaux en pourcentage : 50 % pour les besoins, 30 % pour les envies, 20 % pour le futur (épargne et dette). C'est la méthode la plus légère et la plus facile à maintenir. Le compromis est que les catégories à l'intérieur de chaque seau restent ta décision, ce qui signifie qu'un dépassement peut se cacher longtemps dans le seau des envies avant de devenir visible. Le budget base zéro règle cela en donnant à chaque euro une catégorie spécifique.",
        },
        {
          kind: "p",
          text: "La méthode des enveloppes (aussi appelée cash stuffing) est la version en espèces du budget base zéro. Chaque catégorie a une enveloppe, et quand l'enveloppe est vide, la catégorie est en pause pour le mois. La discipline est la même qu'en base zéro ; la différence est que l'argent est dans des enveloppes physiques plutôt que dans une application de suivi. La méthode des enveloppes fonctionne bien pour les personnes qui dépensent plus librement quand elles tapent une carte. Le budget base zéro fonctionne bien pour les personnes qui veulent la flexibilité des paiements par carte mais la discipline de la méthode des enveloppes. La plupart des applications modernes en base zéro, dont Savlo, te permettent de recréer la logique des enveloppes numériquement sous forme de « Spaces ».",
        },
        {
          kind: "p",
          text: "La méthode en pourcentage est similaire à 50/30/20 mais avec des seaux personnalisés. Certaines personnes utilisent 70/20/10 (dépense, épargne, charité). D'autres utilisent 60/30/10 (dépense, futur, marge). L'avantage est la flexibilité. Le désavantage est que les seaux peuvent devenir des fourre-tout qui cachent le même problème que 50/30/20 cache. Le budget base zéro amène la structure un niveau plus bas, de sorte que le seau de dépenses n'est plus un chiffre unique mais un ensemble de catégories nommées.",
        },
        {
          kind: "p",
          text: "La méthode du paye-toi d'abord (aussi appelée budget inversé) est l'opposé du base zéro. Tu décides d'abord le chiffre d'épargne ou d'investissement, tu l'automatises, et tu laisses le reste du revenu couler vers la dépense sans plan détaillé. C'est la méthode la plus facile à maintenir et la plus difficile à garder honnête. Le budget base zéro est plus de travail, mais il te donne une image beaucoup plus claire de l'endroit où va l'argent.",
        },
        {
          kind: "p",
          text: "La bonne méthode est celle qui correspond à ta vie et à ton énergie. La méthode la plus légère que tu utiliseras encore dans douze mois est la bonne pour toi. La plupart des personnes qui essaient le budget base zéro une fois ne reviennent jamais à une méthode plus légère, parce que la visibilité et le contrôle sont difficiles à lâcher. Mais une méthode plus légère utilisée pendant une décennie vaut mieux qu'une méthode plus lourde utilisée pendant un mois.",
        },
        {
          kind: "h2",
          id: "premier-mois",
          text: "Un premier mois réaliste en base zéro",
        },
        {
          kind: "p",
          text: "Le premier mois avec un budget base zéro est rarement sans accroc. Le plan prend plus de temps à construire que tu ne l'imagines, les catégories ne sont pas tout à fait justes, et les chiffres bougent au fur et à mesure que le mois avance. Le plan est censé bouger. L'erreur est de traiter le premier mois comme un échec s'il n'arrive pas à zéro au jour un. Le premier mois réaliste ressemble plus à une ébauche qu'à une version finale : il t'enseigne quelles devraient être les catégories, quels devraient être les objectifs des Sinking Funds, et comment les catégories élastiques se comportent vraiment. Le deuxième mois est quand le plan commence à ressembler à celui que tu voulais écrire depuis le début.",
        },
        {
          kind: "p",
          text: "Quelques conseils pratiques pour le premier mois. Premièrement, construis le plan sur papier ou dans une feuille de calcul avant de le déplacer dans une application. La friction de l'écrire à la main attrape beaucoup d'erreurs que l'application aurait acceptées. Deuxièmement, demande à une autre personne de regarder le plan, idéalement quelqu'un qui gère aussi un budget de foyer. Elle verra les trous que tu ne vois pas. Troisièmement, n'ajuste pas le plan pendant les trois premières semaines. Laisse les catégories soit tenir, soit dépasser. Les données des trois premières semaines sont ce qui rend le plan du deuxième mois précis. Quatrièmement, planifie une date pour la reconstruction. La reconstruction est la partie du mois qui ferme réellement la boucle.",
        },
        {
          kind: "p",
          text: "Le premier mois réaliste est le mois où tu apprends que le budget est un outil pour apprendre, pas un outil pour contrôler. Les données que tu collectes au premier mois sont ce qui rend le douzième mois presque sans effort. La plupart des personnes qui restent avec le budget base zéro pendant un an disent la même chose : le budget a cessé d'être quelque chose qu'ils devaient maintenir et est devenu quelque chose dont ils ne voudraient pas se passer.",
        },
        {
          kind: "h2",
          id: "apres-six-mois",
          text: "Ce qui change après six mois de base zéro",
        },
        {
          kind: "p",
          text: "Au sixième mois, le plan s'est généralement stabilisé dans un rythme. Les catégories sont proches de leur forme finale. Les objectifs des Sinking Funds sont proches de leur forme finale. La marge (la ligne « prêt à attribuer ») commence à se sentir confortable. Les dépenses surprises ne surprennent plus. La charge mentale du budget a été divisée par deux, parce que le système est maintenant dans ta mémoire musculaire.",
        },
        {
          kind: "p",
          text: "Le basculement qui se produit habituellement autour du sixième mois va de « je suis un plan » à « le plan me suit ». Les catégories ne sont plus une contrainte. Elles sont une description de la vie que tu mènes. Une nouvelle catégorie de dépense apparaît (salle de sport, activité d'un enfant) et le système l'absorbe sans drame. Une ancienne catégorie rétrécit (tu ne vas plus au bureau) et le système absorbe aussi cela. Le plan est vivant. Le plan est le tien.",
        },
        {
          kind: "p",
          text: "L'autre basculement est la relation au dépassement. Dans les premiers mois, un dépassement se sentait comme un échec. Au sixième mois, un dépassement se sent comme une question : quelle catégorie a du surplus ce mois-ci, et puis-je déplacer de l'argent de là ? Les données ont cessé d'être un verdict et sont devenues un outil. Le plan continue d'arriver à zéro. Le mois continue. Le calme que le système était censé produire commence à vraiment ressembler à du calme.",
        },
        {
          kind: "p",
          text: "Le basculement autour du sixième mois est aussi quand la plupart des gens commencent à se demander ce qui se passe s'ils continuent. La réponse, pour la plupart, est que le budget devient plus affûté chaque année, les Sinking Funds couvrent de plus en plus de l'année, et la marge « prêt à attribuer » devient assez grande pour absorber un seul mauvais mois sans casser le plan. C'est le grand arc du budget base zéro : pas un projet d'un mois, mais une mise à niveau pluriannuelle de la façon dont tu penses à l'argent.",
        },
        {
          kind: "h2",
          id: "revue-annuelle",
          text: "La revue annuelle qui maintient le système honnête",
        },
        {
          kind: "p",
          text: "Une fois par an, le budget mérite un regard plus profond que la reconstruction mensuelle. La revue annuelle est l'endroit où les données des douze derniers mois deviennent le plan des douze prochains. La plupart la font fin décembre ou début janvier, quand l'année est fraîche et que la suivante prend forme. La revue a trois parties.",
        },
        {
          kind: "p",
          text: "Premièrement, regarde les catégories qui ont régulièrement dépassé. Une catégorie qui dépasse chaque mois n'est pas un problème de dépassement. C'est un problème de dimensionnement. La solution est d'augmenter la catégorie, ou de te demander si la catégorie a la bonne forme. Parfois la bonne solution est de diviser une catégorie en deux. Une catégorie « sorties au restaurant » qui dépasse chaque mois est peut-être vraiment une catégorie « sorties au restaurant » et une catégorie « social ». La division ne réduit pas la dépense, mais elle rend la dépense honnête.",
        },
        {
          kind: "p",
          text: "Deuxièmement, regarde les catégories qui ont régulièrement eu du surplus. Une catégorie avec trois mois de surplus d'affilée est soit sur-financée, soit plus pertinente. La solution est de la réduire et de déplacer l'argent libéré vers un objectif, un Sinking Fund ou un paiement de dette. La revue annuelle est le moment où la forme du budget rattrape la forme de la vie.",
        },
        {
          kind: "p",
          text: "Troisièmement, regarde les objectifs. Quels Sinking Funds ont grandi comme tu le voulais ? Quels objectifs ont été financés en retard ? Quels objectifs ne sont plus pertinents ? La revue annuelle est le bon moment pour retirer un objectif qui n'est plus prioritaire et pour en ajouter un nouveau qui a émergé. Un budget est censé suivre la vie, pas la vie d'il y a trois ans.",
        },
        {
          kind: "h2",
          id: "suivi",
          text: "Conseils de suivi qui rendent le base zéro durable",
        },
        {
          kind: "p",
          text: "Le plus grand déterminant de la survie d'un budget base zéro est la facilité d'enregistrer une transaction. La friction de l'étape de suivi est ce qui tue le système. Si l'enregistrement d'un café à 3 euros prend plus de cinq secondes, l'entrée sera sautée. La solution est de choisir une méthode de suivi qui a la plus faible friction possible.",
        },
        {
          kind: "p",
          text: "Les méthodes de suivi les plus durables, par ordre de friction. Premièrement, une application à entrée vocale. Tu ouvres l'application, tu dis la dépense, et l'application l'enregistre. Le temps total est plus proche de deux secondes que de cinq. Le coût est que la reconnaissance vocale n'est pas toujours parfaite, et l'entrée aura parfois besoin d'une édition rapide. Deuxièmement, un widget d'ajout rapide sur l'écran d'accueil du téléphone. Tape, entre le montant, choisis une catégorie, terminé. Temps total : cinq secondes. Troisièmement, une application de notes. Note la dépense dans une liste courante, puis transfère-la au budget une fois par semaine. La friction est plus faible sur le moment, mais le transfert hebdomadaire est son propre type de travail.",
        },
        {
          kind: "p",
          text: "Quelle que soit la méthode que tu choisis, la règle est la même : enregistre la dépense au moment où tu la fais, pas le lendemain matin, pas le week-end suivant. Plus l'écart entre la dépense et l'enregistrement est grand, plus tu oublieras d'entrées, et moins le budget sera utile. Un café à 3 euros enregistré est une donnée. Un café à 3 euros oublié est de l'argent qui disparaît. La première version du budget alimente le système. La seconde alimente l'illusion que tu sais où va l'argent.",
        },
        {
          kind: "h2",
          id: "approfondir",
          text: "Un regard plus approfondi sur les quatre règles en pratique",
        },
        {
          kind: "p",
          text: "Connaître les quatre règles du budget base zéro est une chose. Voir comment elles se déploient sur une année entière de décisions réelles en est une autre. Les quatre règles sont : donne un rôle à chaque euro, accepte tes vraies dépenses, encaisse les coups, et fais vieillir ton argent. La plupart des personnes qui gardent le système au-delà du troisième mois rapportent que chacune de ces règles apparaît dans un rythme différent : la première est quotidienne, la deuxième est mensuelle, la troisième est hebdomadaire, et la quatrième est le grand arc qui ne devient visible qu'après plusieurs mois.",
        },
        {
          kind: "p",
          text: "La première règle, donne un rôle à chaque euro, est celle qui anime le rituel de planification. Chaque euro sur le compte a une catégorie, et chaque catégorie a un solde. Quand une transaction arrive, le solde de la catégorie baisse. Quand un revenu arrive, les catégories sont remplies. Le travail se fait au début du mois, quand le plan est reconstruit, et à tout moment où un nouvel euro arrive. La règle n'est pas un événement unique. C'est une décision continue. Plus tu prends la décision souvent, moins elle demande d'effort. Le plan devient mémoire musculaire.",
        },
        {
          kind: "p",
          text: "La deuxième règle, accepte tes vraies dépenses, est celle qui met le plus de temps à sembler naturelle. L'instinct est de budgétiser seulement les factures qui tombent ce mois-ci. La pratique du budget base zéro est de budgétiser les factures qui tombent cette année, réparties de manière égale entre les mois. Le changement est petit sur le papier (quelques dizaines d'euros par catégorie par mois) et énorme dans la vie (plus de dépenses surprises, plus de frais annuels qui ressemblent à des urgences). Le Sinking Fund est la forme structurelle de cette règle. C'est là que la règle vit dans le budget.",
        },
        {
          kind: "p",
          text: "La troisième règle, encaisse les coups, est celle à laquelle la plupart résistent les premiers mois et sur laquelle ils s'appuient au sixième mois. L'instinct est de traiter un dépassement comme un échec moral. La pratique du budget base zéro est de traiter un dépassement comme une donnée. La catégorie qui a dépassé est maintenant une source d'information. Soit elle était trop petite (et la solution est de la redimensionner le mois prochain), soit la dépense était un événement unique (et la solution est de déplacer de l'argent depuis une catégorie en surplus). La règle est la différence entre un budget qui survit au contact avec la réalité et un budget qui est abandonné au troisième mois.",
        },
        {
          kind: "p",
          text: "Les quatre règles ne sont pas une liste à mémoriser. Ce sont une description du comportement que le système récompense. Le premier mois, tu les suis avec effort. Au sixième mois, tu les suis par habitude. Au douzième mois, tu cesses de les remarquer, parce qu'elles sont la façon dont le budget fonctionne. Le système n'est plus quelque chose que tu fais. C'est la façon dont tu penses à l'argent. C'est le grand arc du budget base zéro : un projet d'un mois qui devient une mise à niveau pluriannuelle.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Questions fréquentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Un budget base zéro signifie-t-il que je dois dépenser chaque euro ?",
              a: "Non. Le « zéro » dans le nom fait référence au solde non attribué, pas au montant dépensé. Le but est d'attribuer chaque euro à un rôle. Le rôle peut être une catégorie de dépense, un Sinking Fund, un objectif d'épargne ou un paiement de dette. La plupart des mois se terminent avec les euros attribués en grande partie dépensés, mais certains rôles (comme l'épargne) sont conçus pour faire croître le solde, pas pour le réduire.",
            },
            {
              q: "Combien de temps prend la maintenance d'un budget base zéro chaque mois ?",
              a: "Le premier mois prend généralement entre soixante et quatre-vingt-dix minutes. Au troisième mois, la plupart peuvent reconstruire le plan en trente. La vérification hebdomadaire est de quinze à vingt minutes. La revue annuelle, qui compare le plan à l'année réelle, prend environ une heure. L'investissement total en temps pour une année est d'environ quinze à vingt heures, ce qui est moins que ce que la plupart des gens dépensent en services de streaming.",
            },
            {
              q: "Quelle est la différence entre le budget base zéro et la règle 50/30/20 ?",
              a: "La règle 50/30/20 divise le revenu en trois seaux en pourcentage (besoins, envies, futur). C'est un bon point de départ. Le budget base zéro va un niveau plus loin : il attribue chaque euro à une catégorie ou un objectif spécifique à l'intérieur de ces seaux. Si 50/30/20 est une carte à haute altitude, le base zéro est la direction virage par virage.",
            },
            {
              q: "Que faire si je ne peux pas arriver à zéro parce que mes dépenses dépassent mes revenus ?",
              a: "C'est un écart structurel, pas un échec de budgétisation. Le premier mouvement est de regarder les plus grandes catégories fixes (logement, transport, paiements minimums de dette) et de voir si quelque chose peut être renégocié. Le deuxième mouvement est d'ajouter des revenus. Le troisième est de demander de l'aide. Le budget ne peut pas réparer un écart structurel, mais il peut le montrer clairement, ce qui est le premier pas pour le fermer.",
            },
            {
              q: "Le budget base zéro est-il bon pour les couples ?",
              a: "Oui, avec un ajustement. La plupart des couples gardent un petit ensemble de catégories communes (logement, courses, épargne) et un petit ensemble de catégories personnelles (dépenses personnelles, objectifs individuels). Les catégories communes sont base zéro ensemble. Les catégories personnelles sont base zéro individuellement. La conversation sur qui finance quoi a lieu une fois par mois, pendant la reconstruction.",
            },
            {
              q: "Puis-je utiliser le budget base zéro sans application ?",
              a: "Oui. Une feuille de calcul vide avec des colonnes pour catégorie, prévu, réel et différence suffit pour exécuter la méthode. Un carnet papier fonctionne aussi. L'application est utile pour le suivi continu des petites dépenses, mais la partie planification du budget base zéro peut se faire n'importe où, et beaucoup de gens gardent la méthode entière fonctionner sur une seule page d'un carnet pendant des années. Le bon outil est celui que tu utiliseras encore le mois prochain.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusion",
          text: "Un plan calme et complet auquel tu peux revenir",
        },
        {
          kind: "p",
          text: "Le budget base zéro est une façon de donner un rôle à chaque euro, d'accepter les vraies dépenses qui apparaissent quelques fois par an, d'encaisser les coups quand une catégorie dépasse, et de faire vieillir ton argent pour que l'écart entre gagner et dépenser s'élargisse. La méthode n'est pas pour tout le monde. Elle récompense les personnes qui aiment la structure et la constance, et elle est plus difficile à maintenir quand le revenu est très irrégulier. Pour la plupart, elle devient le budget le plus calme qu'ils aient jamais maintenu, et le plus facile vers lequel revenir après un mauvais mois.",
        },
        {
          kind: "p",
          text: "Si tu veux essayer la méthode sans t'engager dans une nouvelle application, exécute-la dans une feuille de calcul pendant un mois. Si tu veux un outil qui respecte ta vie privée, ne demande pas d'identifiants bancaires et fonctionne avec les mêmes quatre règles, Savlo est disponible sur Android et arrive bientôt sur iOS. Il est construit autour des mêmes principes : attribue chaque euro, accepte les vraies dépenses, encaisse les coups, et fais vieillir ton argent. Le reste de ce blog approfondit des idées connexes, de la [philosophie de budgétisation plus large](/fr/blog/how-to-budget-money) à la [mécanique pratique des Sinking Funds](/fr/blog/sinking-funds), si tu veux continuer.",
        },
      ],
    },
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
  "how-to-budget-money": {
    title:
      "Comment faire un budget: un guide calme et complet pour debutants",
    description:
      "Un guide clair et sans jugement pour apprendre a budgetiser depuis zero. Decouvre les quatre chiffres qui font bouger chaque budget, trois styles qui fonctionnent vraiment, et comment suivre tes depenses sans t'epuiser.",
    keywords: [
      "comment faire un budget",
      "budget pour debutants",
      "etablir un budget",
      "budget mensuel",
      "gestion d'argent debutants",
      "planificateur de budget",
      "regle 50 30 20",
      "budget base zero",
      "suivre ses depenses",
      "methodes de budget",
    ],
    readingTime: 20,
    summary: [
      "Faire un budget n'est pas une punition ni un test de volonte. C'est un plan court que tu signes avec toi-meme avant de depenser, et la difference entre conduire avec une carte et conduire en ne regardant que le retroviseur.",
      "Ce guide parcourt, dans l'ordre, comment penser l'argent sans flincher, comment construire un budget que tu tiendras vraiment, comment enregistrer tes depenses sans que ca te prenne ta journee, et comment te relever quand la vie casse le plan.",
    ],
    sections: [
      {
        heading: "Ce que budgetiser veut vraiment dire",
        body: [
          "Un budget utile n'est pas un tableur parfait ni une serie a maintenir. C'est une promesse courte et ecrite que tu te fais sur la facon dont tu utiliseras ton argent le mois prochain.",
          "Les budgets qui echouent le font presque toujours pour trois raisons: ils essaient de suivre chaque centime, ils sont construits sur le salaire brut au lieu du net, ou ils ne sont revises qu'en fin de mois, quand le train est deja parti. Aucun de ces problemes ne parle de toi.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Faire un budget est l'une des competences les plus pratiques qui existent. Ce n'est pas un regime financier, ce n'est pas un test de volonte, et cela n'a pas besoin de devenir un rituel du dimanche soir avec des tableurs. C'est un plan court, honnete et facile a ajuster, qui change ta facon de regarder chaque mois ce qui entre et ce qui sort de ton compte. La difference entre budgetiser et ne pas budgetiser est la difference entre conduire avec une carte et conduire en ne regardant que le retroviseur. Les deux t'emmenent quelque part, mais un seul te laisse choisir la destination.",
        },
        {
          kind: "p",
          text: "Ce guide s'adresse a ceux qui n'ont jamais eu de budget, a ceux qui ont essaye et abandonne, et a ceux qui entretiennent depuis des annees un vieux budget qui ne represente plus leur vie actuelle. Tu y trouveras les quatre chiffres qui font bouger n'importe quel budget, trois styles qui fonctionnent, un pas-a-pas en sept etapes pour commencer depuis zero, et un systeme de suivi qui tient dans un apres-midi par semaine. Au lieu de jargon, on prend des exemples concrets. Au lieu de grandes promesses, on montre ce qui se passe reellement la plupart des mois: tu vas exploser une categorie, et c'est tres bien. Le plan existe precisement pour t'aider a revenir.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Savlo est disponible sur Android et bientot sur iOS. Tu peux appliquer tout ce guide dans un tableur, un carnet ou toute application qui respecte ta vie privee. Quand tu decideras d'essayer Savlo, il a ete pense exactement pour etre ce genre de compagnon: simple, calme, et sans demande d'identifiants bancaires.",
        },
        {
          kind: "h2",
          text: "Ce que budgetiser veut vraiment dire",
          id: "ce-que-budgetiser-veut-dire",
        },
        {
          kind: "p",
          text: "Budgetiser, c'est prendre une decision consciente avant de depenser. Ce n'est pas se priver, ce n'est pas se punir, et ce n'est pas vivre dans la peur de la prochaine facture. C'est simplement dire, clairement, ou l'argent va travailler ce mois-ci, au lieu de le decouvrir sur le releve de carte.",
        },
        {
          kind: "p",
          text: "Quand le budget est bien fait, il fonctionne comme une promesse que tu signes avec toi-meme. Si la promesse est vague, du type « je vais depenser moins », elle casse. Si elle est specifique, du type « je mets six cents euros de cote pour les urgences et quatre cents pour les loisirs », elle a une chance de tenir. Un budget est un accord entre ta vie actuelle et la vie que tu veux batir dans les douze prochains mois.",
        },
        {
          kind: "p",
          text: "C'est pourquoi un bon budget ne commence pas dans un tableur. Il commence dans une conversation honnete sur ce qui t'inquiete: la facture de carte qui ne rentre jamais dans le salaire, le sentiment de ne pas savoir ou est passe l'argent, la peur de ne pas avoir de marge en cas d'imprevu. Le tableur n'est que la forme d'enregistrer cette conversation de maniere utile.",
        },
        {
          kind: "h3",
          text: "Pourquoi la plupart des budgets echouent",
          id: "pourquoi-budgets-echouent",
        },
        {
          kind: "p",
          text: "Les budgets echouent le plus souvent pour trois raisons, et aucune n'a a voir avec ta discipline. La premiere est la tentation de tout suivre au centime pres. La deuxieme est de construire le plan sur le salaire brut au lieu du net. La troisieme est de tout revoir seulement en fin de mois, quand les degats sont la. Quand un budget nait fatigue, il meurt fatigue.",
        },
        {
          kind: "p",
          text: "Il y a aussi une composante emotionnelle. La majorite des personnes ont appris a voir l'argent comme une question de volonte. Quand le budget serre, la lecture automatique est « j'ai echoue ». Mais cela confond l'outil avec l'operateur. Un marteau n'est pas responsable du clou tordu, et un budget n'est pas responsable de ta fatigue. C'est une carte, pas un juge.",
        },
        {
          kind: "p",
          text: "L'objectif de ce guide est de te donner une carte simple. Si tu suis les etapes, tu auras un plan qui tient sur une feuille de papier et qui fonctionne dans les bons comme dans les mauvais mois. Si quelque chose se casse, on te montre aussi comment revenir.",
        },
        {
          kind: "h2",
          text: "Les quatre chiffres qui font bouger chaque budget",
          id: "quatre-chiffres",
        },
        {
          kind: "p",
          text: "Chaque budget, du plus detaille au plus simple, repose sur les memes quatre chiffres. Quand tu apprends a les reperer dans ta vie, tu comprends deja mieux ton argent que la majorite des gens. Ce sont: le revenu net, les depenses fixes, les depenses variables et le taux d'epargne.",
        },
        {
          kind: "h3",
          text: "Revenu net",
          id: "revenu-net",
        },
        {
          kind: "p",
          text: "C'est l'argent qui arrive reellement sur ton compte, apres les impots et les cotisations obligatoires. Le piege classique est de budgetiser avec le salaire brut, qui est le chiffre du contrat mais qui n'apparait jamais sur le compte. Budgetiser avec le brut cree un ecart silencieux de dix a vingt pour cent entre ce que tu crois avoir et ce qui arrive vraiment. Cet ecart est, a lui seul, la plus grande raison du sentiment que l'argent s'evapore.",
        },
        {
          kind: "h3",
          text: "Depenses fixes",
          id: "depenses-fixes",
        },
        {
          kind: "p",
          text: "Ce sont les charges qui se repetent chaque mois, pour un montant proche: loyer ou credit immobilier, charges, electricite, eau, internet, mensualites de credit, abonnements, assurances. Liste tout ce qui est paye par prelevement, virement automatique ou carte de credit a date fixe. Additionne. C'est ton point de depart. Les depenses fixes definissent ce qu'il reste, et donc ce que tu peux orienter.",
        },
        {
          kind: "h3",
          text: "Depenses variables",
          id: "depenses-variables",
        },
        {
          kind: "p",
          text: "C'est la que reside la flexibilite. Courses, transport, loisirs, habits, sorties, cadeaux, livraisons. Ce sont les depenses dont le montant change d'un mois a l'autre et qui, en meme temps, concentrent la plus grande part de l'anxiete financiere. La raison est simple: comme le montant varie, le sentiment de controle varie aussi. Un bon budget traite les depenses variables avec deux questions: quel est le montant moyen et quel est le plafond confortable.",
        },
        {
          kind: "h3",
          text: "Taux d'epargne",
          id: "taux-epargne",
        },
        {
          kind: "p",
          text: "C'est la part du revenu net qui reste apres les depenses fixes et variables. Au debut, il peut etre negatif. Ce n'est pas un echec, c'est un diagnostic. Un taux d'epargne negatif te dit que le probleme n'est pas d'epargner, c'est d'ajuster l'une des trois autres variables. Il peut s'agir de couper une depense fixe, de reduire une depense variable ou d'augmenter le revenu. L'important est de regarder le chiffre en face. Budgetiser consiste en grande partie a decider un taux d'epargne qui te permette de dormir tranquille.",
        },
        {
          kind: "h2",
          text: "Trois styles de budget qui fonctionnent vraiment",
          id: "trois-styles",
        },
        {
          kind: "p",
          text: "Il n'y a pas une seule bonne methode. Il y a des methodes differentes pour des temperaments et des rythmes de vie differents. Nous en presentons trois qui ont survecu a l'epreuve du temps, et indiquons quand chacune fonctionne le mieux.",
        },
        {
          kind: "h3",
          text: "La regle 50/30/20",
          id: "regle-50-30-20",
        },
        {
          kind: "p",
          text: "La regle 50/30/20 repartit le revenu net en trois tranches simples: cinquante pour cent pour les besoins, trente pour cent pour les envies et vingt pour cent pour l'epargne et pour accelerer le remboursement des dettes au-dessus du minimum. La beaute de la regle tient a sa proportion. Au lieu de deviner les montants par categorie, tu decides des priorites. Elle fonctionne particulierement bien pour les debutants qui cherchent un point de depart sans rester bloques devant le tableur.",
        },
        {
          kind: "p",
          text: "La regle coince quand la part des besoins depasse cinquante pour cent. La proportion se bloque et l'epargne disparait. Dans ce cas, plutot que d'abandonner la methode, le bon chemin est de regarder la part des besoins: generalement c'est un loyer trop eleve, un credit auto lourd, ou des mensualites qui prennent trop de place. Couper une charge fixe libere plus que supprimer vingt cafes par mois. C'est pourquoi comprendre les [depenses fixes et variables](#depenses-fixes) est la base de tout plan.",
        },
        {
          kind: "h3",
          text: "Budget base zero",
          id: "budget-base-zero",
        },
        {
          kind: "p",
          text: "Le budget base zero attribue une tache a chaque euro avant le debut du mois. Quand le mois demarre, il ne reste rien sans destination. S'il reste quelque chose, cet excedent va vers un objectif: augmenter la reserve, accelerer une dette, ou alimenter un but precis. Cette methode est ideale si le sentiment d'argent qui s'evapore te derange. C'est aussi la methode preferee des personnes qui aiment voir l'ensemble du mois, au lieu d'improviser en cours de route.",
        },
        {
          kind: "p",
          text: "L'inconvenient est le temps investi en debut de mois. Pour la majorite, une heure de planification vaut douze heures de paix. Si tu te retrouves dans cette logique, lis en detail notre [guide du budget base zero](/fr/blog/zero-based-budgeting).",
        },
        {
          kind: "h3",
          text: "Methode des enveloppes et Spaces",
          id: "enveloppes-spaces",
        },
        {
          kind: "p",
          text: "La methode des enveloppes separe l'argent en categories physiques: une enveloppe pour les courses, une autre pour le transport, une autre pour les loisirs. Quand l'enveloppe est vide, la categorie fait une pause jusqu'au mois suivant. La version numerique, appelee Spaces, fait la meme chose sans l'argent liquide: chaque categorie a son solde virtuel, et l'application gere la partie ennuyeuse. Savlo applique exactement cette idee, avec des Spaces que l'on remplit en debut de mois et qui se vident au fil des jours. Si cela t'interesse, decouvre comment [fonctionnent les Spaces dans Savlo](/fr/blog/sinking-funds), qui sont une forme d'enveloppe etendue pour des objectifs plus gros comme les assurances annuelles ou les voyages.",
        },
        {
          kind: "h2",
          text: "Sept etapes pour construire un budget depuis zero",
          id: "sept-etapes",
        },
        {
          kind: "p",
          text: "Le moment est venu de passer a la pratique. Les etapes ci-dessous fonctionnent aussi bien pour ceux qui n'ont jamais budgetise que pour ceux qui reconstruisent leur budget apres une periode tourmentee. Reserve entre soixante et quatre-vingt-dix minutes dans un moment calme, avec un cafe, une calculatrice et les releves des trois derniers mois a portee de main. L'idee n'est pas de viser une precision chirurgicale, mais de gagner en clarte.",
        },
        {
          kind: "ol",
          items: [
            "**Reunis les releves des trois derniers mois.** Imprime-les ou ouvre-les sur le telephone, pour le compte principal et la carte de credit. Trois mois est le minimum pour reperer les saisonnalites, comme les factures qui arrivent tous les deux mois ou les depenses de saison.",
            "**Calcule ton revenu net reel.** Additionne tous les versements tombes au cours des trois derniers mois et divise par trois. Utilise la moyenne des derniers mois comme base. Si ton revenu est variable, prends le mois le plus bas des six derniers, et non la moyenne. L'objectif est de ne pas budgetiser avec optimisme.",
            "**Liste les depenses fixes.** Additionne loyer, factures, mensualites, abonnements, transport fixe. Ce montant sort avant meme que le mois commence. C'est ton cout d'existence. Il definit la part qui reste pour le reste.",
            "**Liste les depenses variables moyennes.** Regarde le releve et regroupe en trois a six grandes categories: courses, transport, loisirs, sante, personnel, autres. Additionne chaque categorie. Tu vas decouvrir ou va la plus grande part du variable. Ne te effraye pas de ce qui apparait.",
            "**Fixe un taux d'epargne realisable.** Prends le revenu net, soustrais les fixes, soustrais les variables moyennes, et vois ce qu'il reste. S'il reste quelque chose, c'est ce que tu peux mettre de cote ou utiliser pour accelerer le remboursement de dettes. S'il ne reste rien, reviens aux fixes et regarde ce qui peut etre renegocie, ou aux variables et regarde ce qui peut etre compresse sans souffrance.",
            "**Attribue une destination a chaque euro.** Repartis le reste entre reserve d'urgence, remboursement anticipe de dettes, objectifs a moyen terme et une categorie de plaisir garanti. La categorie de plaisir est aussi importante que les autres. Un budget sans plaisir casse dans la premiere semaine.",
            "**Bloque une revue hebdomadaire de vingt minutes.** Chaque dimanche, ou un jour fixe, ouvre le plan, regarde ce qui a change, ajuste ce qui doit l'etre, et continue. La revue hebdomadaire est ce qui distingue un budget qui dure un mois d'un budget qui dure des annees.",
          ],
        },
        {
          kind: "callout",
          tone: "info",
          text: "Si tu n'as jamais suivi ce processus, le simple fait de completer les trois premieres etapes te met dans une meilleure position que la majorite. La plus grande partie du gain se trouve au debut, quand l'argent cesse d'etre abstrait.",
        },
        {
          kind: "h2",
          text: "Suivre ses depenses sans s'epuiser",
          id: "suivre-depenses",
        },
        {
          kind: "p",
          text: "Apres avoir construit le plan, la deuxieme partie de la vie d'un budget est le suivi. C'est la que beaucoup de gens coincent, parce qu'il faut transformer la theorie en pratique sans en faire une obligation de plus. La bonne nouvelle est qu'il existe aujourd'hui trois chemins, et tu peux en combiner deux sans culpabilite. L'important n'est pas la perfection, c'est la regularite.",
        },
        {
          kind: "h3",
          text: "Suivi a la voix",
          id: "suivi-voix",
        },
        {
          kind: "p",
          text: "Le suivi a la voix est la forme la plus rapide de capturer une depense dans l'instant. Au lieu d'ouvrir l'application, chercher la bonne categorie et taper le montant, tu dis une phrase courte comme « dejeuner trente-deux euros sur la carte » et l'operation apparait prete. Cette voie est particulierement utile pour les personnes au planning serre, qui gerent leur budget en marchant ou en voiture, et qui ne veulent pas perdre l'occasion d'enregistrer pendant que la memoire est fraiche. Pour ceux qui travaillent a l'exterieur ou ont un revenu variable, [suivre ses depenses a la voix](/fr/blog/voice-expense-tracking) reduit la friction au point d'en faire une habitude.",
        },
        {
          kind: "h3",
          text: "Suivi manuel",
          id: "suivi-manuel",
        },
        {
          kind: "p",
          text: "Le suivi manuel, fait au calme le soir ou lors de la revue hebdomadaire, est la forme la plus ancienne et reste l'une des plus solides. L'avantage est la conscience: taper chaque depense t'oblige a la regarder, et regarder represente deja la moitie du travail. L'inconvenient est le temps et l'oubli. C'est pourquoi le suivi manuel fonctionne mieux comme complement, et non comme methode unique. Reserve la voix pour ce qui se passe a l'exterieur, et le manuel pour la revue hebdomadaire.",
        },
        {
          kind: "h3",
          text: "Import de CSV",
          id: "import-csv",
        },
        {
          kind: "p",
          text: "L'import de CSV se situe entre l'automatique et le manuel. Tu te connectes au site de ta banque, telecharges le fichier de mouvements et l'uploades dans l'application. Cela prend quelques minutes, ne partage aucun identifiant avec des agregateurs et ne permet pas de synchronisation continue. C'est une voie utile pour ceux qui veulent avoir la vision complete du mois sans confier la lecture du releve a un tiers. C'est aussi la posture par defaut de confidentialite de Savlo.",
        },
        {
          kind: "h2",
          text: "Gerer un revenu variable",
          id: "revenu-variable",
        },
        {
          kind: "p",
          text: "Si tu es freelance, independant, travaille a la commission, conduis une application de VTC ou as un revenu qui change chaque mois, le budget classique ne te conviendra pas directement. Le piege est de budgetiser avec la moyenne et, dans les mauvais mois, de decouvrir que la moyenne n'etait pas la. La solution est de construire le budget sur le plancher, pas sur le plafond.",
        },
        {
          kind: "p",
          text: "Fixe une valeur de base mensuelle, qui est le minimum que tu recois de facon fiable sur les six derniers mois, et construis tout le budget autour de cette valeur. Tout ce qui rentre en plus devient une decision consciente: cela va dans la reserve, accelere une dette ou finance un objectif. Avec le temps, tu vas remarquer que les bons mois financent les mauvais, et le stress mensuel disparait.",
        },
        {
          kind: "p",
          text: "Une technique utile est d'ouvrir un Space specifique pour le revenu variable, ou tu deposes l'excedent des bons mois et que tu utilises pour couvrir les mois faibles. Cela transforme l'irrregularite en probleme de tresorerie plutot qu'en probleme emotionnel. Si ton revenu evolue dans un contexte inflationniste, applique la meme logique avec une revision trimestrielle de la valeur de base. La flexibilite est dans la methode, pas dans la discipline.",
        },
        {
          kind: "h2",
          text: "La reinitialisation de sept jours",
          id: "reset-sept-jours",
        },
        {
          kind: "p",
          text: "Tu vas exploser ton budget. Ce n'est pas une possibilite, c'est une certitude. Toute personne qui tient un budget depuis plus d'un an l'a deja explose, plusieurs fois. La difference entre ceux qui gardent le systeme pendant des annees et ceux qui abandonnent au bout de trois mois est ce qui se passe apres l'explosion.",
        },
        {
          kind: "p",
          text: "Construis-toi une reinitialisation de sept jours. Le jour ou tu remarques le depassement, attends une semaine. Assieds-toi vingt minutes avec le plan et le releve, et reponds a trois questions calmement: que s'est-il passe, quelle categorie a absorbe le choc, et quel petit changement l'aurait evite le mois suivant. La regle d'or est de ne prendre aucune decision financiere dans les vingt-quatre heures apres avoir remarque le depassement. Attends, traite, ajuste.",
        },
        {
          kind: "p",
          text: "Ce petit intervalle transforme la reaction en revue. Au lieu de tout couper par colere et d'abandonner le plan par epuisement, tu ajustes une ou deux choses. Les personnes qui tiennent le budget pendant des annees ne sont pas celles qui ne se trompent jamais. Ce sont celles qui, en moyenne, se relevent en une semaine et continuent.",
        },
        {
          kind: "h2",
          text: "Fonds d'urgence versus fonds dedies",
          id: "urgence-vs-dedies",
        },
        {
          kind: "p",
          text: "Le fonds d'urgence et les fonds dedies sont les deux filets de securite qui soutiennent le budget dans les mauvais mois. La confusion entre les deux est l'une des causes les plus frequentes d'un budget qui semble fonctionner sur le papier mais echoue dans la vraie vie.",
        },
        {
          kind: "p",
          text: "Le fonds d'urgence couvre l'imprevisible: perte d'emploi, evenement medical, reparation urgente, remplacement d'equipement. L'objectif classique est de trois a six mois de depenses fixes, sur un compte a haute liquidite, separe de l'argent du quotidien. C'est ton assurance contre la vie qui tourne mal par surprise.",
        },
        {
          kind: "p",
          text: "Les fonds dedies transforment le previsible en routine. Assurance auto, taxe fonciere, cadeaux de fin d'annee, vacances, frais de scolarite, franchises medicales connues: tout ce que tu sais devoir arriver mais qui, sans planification, ressemble a un imprevu. L'idee est de diviser le montant total par le nombre de mois restants et d'en mettre une fraction de cote chaque mois. Quand l'evenement arrive, l'argent est deja la, en attente.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "L'ordre compte. Construis d'abord la reserve d'urgence minimale, equivalente a un mois de fixes. Ensuite, ouvre des fonds dedies pour les evenements previsibles des douze prochains mois. Enfin, elargis la reserve a l'objectif de trois a six mois. Ce chemin evite l'erreur classique de vouloir remplir une enorme reserve pendant que l'assurance auto arrive a echeance et embarque la carte de credit avec elle.",
        },
        {
          kind: "h2",
          text: "La psychologie d'un budget qui dure",
          id: "psychologie",
        },
        {
          kind: "p",
          text: "Un budget dure lorsqu'il respecte ta vie emotionnelle. Ce n'est pas le tableur qui casse: c'est la relation au tableur. Si le systeme humilie, la reponse naturelle est de l'eviter. Si le systeme encourage de petits ajustements, il devient routine. La difference tient en trois habitudes:",
        },
        {
          kind: "p",
          text: "La premiere habitude est de separer la personne du chiffre. Le solde du compte n'est pas un bulletin scolaire. Un mauvais mois n'est pas une preuve d'incompetence. Voir le budget comme un miroir, et non comme un juge, change la maniere dont tu reagis a un depassement. Tu regardes le chiffre et tu te demandes ce qu'il t'enseigne, au lieu de ce qu'il te reproche.",
        },
        {
          kind: "p",
          text: "La deuxieme habitude est de celebrer le progres discret. Completer trois mois avec un plan qui fonctionne, resilier un abonnement inutilise, construire la premiere reserve, sont des victoires reelles. Mais la tete a tendance a les ignorer parce qu'elles sont petites. Les noter, meme en une seule ligne en fin de mois, aide le cerveau a enregistrer ce qui fonctionne. Ce qui est reconnu est repete.",
        },
        {
          kind: "p",
          text: "La troisieme habitude est de vivre avec l'imperfection. Un budget parfait sur le papier, mais qui genere un stress permanent, sera abandonne. Un budget avec cinq pour cent de gras, avec lequel tu dors tranquille, sera tenu. Optimise pour la regularite, pas pour la precision. Le meilleur outil de budget est celui que tu utilises encore l'annee prochaine.",
        },
        {
          kind: "h2",
          text: "Huit erreurs frequentes qui coutent cher",
          id: "huit-erreurs",
        },
        {
          kind: "p",
          text: "Les erreurs de budget ne sont pas des signes d'incompetence, ce sont des signes de methode. Presque tout le monde en a commises certaines. Reconnaitre l'erreur est la moitie de la reparation. L'autre moitie est de la remplacer par une habitude plus simple. La liste ci-dessous couvre les plus frequentes, par ordre d'impact.",
        },
        {
          kind: "ol",
          items: [
            "**Budgetiser avec le salaire brut.** Utilise toujours le net, ou la valeur plancher fiable des six derniers mois en cas de revenu variable.",
            "**Essayer de tout suivre au centime.** L'objectif du suivi est la clarte pour la prochaine decision, pas l'omniscience. Trois a six grandes categories suffisent.",
            "**Confondre la carte de credit avec ton revenu.** La carte est un outil de delai, pas un revenu. Payer la totalite de la facture chaque mois est la seule facon dont elle travaille pour toi.",
            "**Ne pas separer reserve d'urgence et fonds dedies.** Les deux ont des fonctions differentes et ont besoin de places differentes dans le budget.",
            "**Sauter la revue hebdomadaire.** La revue est ce qui transforme un plan en habitude. Sans elle, le budget devient une promesse oubliee.",
            "**Couper les loisirs completement.** Un budget sans plaisir casse en quelques semaines. Conserve une categorie de plaisir garanti, meme petite.",
            "**Tout changer d'un coup quand ca coince.** Modifier plusieurs variables a la fois genere de l'epuisement et le sentiment d'avoir echoue. Ajuste une chose a la fois.",
            "**Cacher le budget au partenaire ou a la famille.** Un budget personnel fonctionne pour les depenses personnelles. Quand la vie est partagee, le plan doit etre partage aussi, meme si chacun garde son espace.",
          ],
        },
        {
          kind: "h2",
          text: "Les outils qui aident a tenir le plan",
          id: "outils",
        },
        {
          kind: "p",
          text: "Le bon outil n'est pas celui qui a le plus de fonctions, c'est celui que tu utilises vraiment. Il y a trois chemins classiques. Le tableur, avec toute la flexibilite du monde et zero aide. Le carnet, avec toute la simplicite et l'avantage de t'obliger a reflechir. Et l'application, qui automatise la partie ennuyeuse et te rappelle de reviser.",
        },
        {
          kind: "p",
          text: "Si tu choisis une application, cherche trois qualites: confidentialite par defaut, pas de liaison obligatoire avec un compte bancaire, et focalisation sur la simplicite du suivi. Beaucoup d'applications demandent aujourd'hui des identifiants bancaires pour tout synchroniser automatiquement. Ce choix a un cout: tu confies la lecture de ton releve a des tiers et tu ouvres la porte aux fuites et a la revente de donnees. Pour qui prefere garder cette limite, le chemin est de suivre a la main, d'importer le CSV de la banque ou d'utiliser la voix locale pour categoriser.",
        },
        {
          kind: "p",
          text: "Si tu commences maintenant et que tu ne veux prendre aucune decision d'outil, fais ceci: prends une feuille A4, divise-la en trois colonnes, ecrit revenu, fixes et variables au crayon, et revise le dimanche. Au bout de trois mois, si la methode tient encore, cela vaut la peine de migrer vers un outil qui t'aide a ne pas perdre l'habitude. N'invente pas d'outil avant d'avoir une habitude.",
        },
        {
          kind: "h2",
          text: "Maintenir la regularite sur plus d'un an",
          id: "maintenir-regularite",
        },
        {
          kind: "p",
          text: "La majorite des personnes abandonnent le budget entre le deuxieme et le quatrieme mois. La raison n'est pas un defaut de caractere, c'est la maniere dont le plan a ete construit. Des plans trop rigides meurent de rigidite. Des plans trop souples meurent d'inutilite. La regularite vit au milieu, dans quatre engagements simples.",
        },
        {
          kind: "p",
          text: "Le premier est de reviser chaque dimanche, pendant vingt minutes. Pas besoin de sophistication. Regarde les chiffres, ajuste ce qui doit l'etre, continue. La revue hebdomadaire est ce qui fait que le plan reste le tien, et pas un document ecrit en janvier et jamais rouvert.",
        },
        {
          kind: "p",
          text: "Le deuxieme est de ne pas toucher au plan par colere. Quand le mois est mauvais, la tentation est de tout couper d'un coup. Ne le fais pas. Attends sept jours, revise calmement, ajuste une chose. Les decisions prises sous le coup de la colere doivent presque toujours etre annulees avec du regret.",
        },
        {
          kind: "p",
          text: "Le troisieme est de laisser le plan visible. Ce peut etre sur le telephone, un papier colle sur le refrigerateur, une note dans l'app. Ce qui ne doit pas arriver, c'est que le plan devienne un fichier au fond d'un dossier. Ce qui est visible est revu. Ce qui est cache est oublie.",
        },
        {
          kind: "p",
          text: "Le quatrieme est de se rappeler que le budget est un moyen, pas une fin. La fin est de dormir tranquille, d'avoir une reserve pour les imprevus, et de pouvoir dire oui a ce qui compte. Quand le plan commence a empecher cela, c'est le plan qui a un probleme, et non ta vie. Reviens, ajuste, continue.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Questions frequentes sur le budget",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Combien d'argent faut-il pour commencer un budget?",
              a: "Aucun montant minimum. Un budget commence avec ce que tu as deja. Ce qu'il demande, c'est de l'honnetete, pas de l'abondance. Si aujourd'hui ton revenu est serre, le budget va te montrer ou va le peu qui entre, et c'est deja un gain enorme.",
            },
            {
              q: "A quelle frequence faut-il reviser le budget?",
              a: "Une fois par semaine, pendant vingt minutes, suffit pour la majorite. C'est la revue hebdomadaire qui transforme un plan en habitude. Si un mois est tres instable, revise deux fois. Dans les mois calmes, une fois tous les quinze jours peut suffire.",
            },
            {
              q: "Dois-je budgetiser avec le brut ou le net?",
              a: "Toujours avec le net. Le net est ce qui arrive reellement sur ton compte. Budgetiser avec le brut cree un ecart silencieux de dix a vingt pour cent entre ce que tu crois avoir et ce qui arrive vraiment. En cas de revenu variable, prends le mois le plus bas des six derniers comme base.",
            },
            {
              q: "Et si j'explose mon budget?",
              a: "Traite le depassement comme un signal du plan, pas comme un echec personnel. Attends sept jours, revise calmement, ajuste une ou deux variables, et continue. Les personnes qui tiennent le budget depuis des annees ne sont pas celles qui ne depassent jamais. Ce sont celles qui, en moyenne, se relevent en une semaine.",
            },
            {
              q: "Quelle est la meilleure methode de budget pour un debutant?",
              a: "La regle 50/30/20 est le point de depart le plus simple, parce qu'elle travaille en proportions et non en montants. Pour ceux qui preferent voir l'ensemble du mois, le budget base zero est plus complet, mais demande une heure de planification en debut de mois. Pour ceux qui sont genees par le sentiment d'argent qui s'evapore, la methode des enveloppes, ou Spaces, fonctionne particulierement bien.",
            },
            {
              q: "Ai-je besoin d'une application pour tenir le budget?",
              a: "Non. Tu peux utiliser un tableur, un carnet ou toute autre methode. Si tu choisis une application, prefere celles qui ne demandent pas d'identifiants bancaires, qui respectent ta confidentialite et qui facilitent le suivi a la main, a la voix ou par CSV. Le bon outil est celui que tu utiliseras encore dans un an.",
            },
            {
              q: "Comment commencer a construire la reserve d'urgence?",
              a: "Commence petit. L'objectif du premier palier est un mois de depenses fixes, et non six. Quand ce premier mois est sur le compte, ton etat emotionnel change deja. De la, elargis la reserve jusqu'a trois a six mois, en increments qui tiennent dans le budget. L'important est de commencer, pas de tout faire d'un coup.",
            },
            {
              q: "Un budget fonctionne-t-il avec un revenu variable?",
              a: "Oui, et il fonctionne peut-etre encore mieux, parce qu'il t'oblige a utiliser le plancher au lieu de la moyenne. Fixe une valeur de base mensuelle, qui est le minimum que tu recois de facon fiable, et construis le plan autour de cette valeur. Tout ce qui rentre en plus devient une decision consciente: dans la reserve, dans le remboursement accelere d'une dette, ou dans un objectif.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Conclusion: un budget simple vaut mieux qu'un plan parfait",
          id: "conclusion",
        },
        {
          kind: "p",
          text: "Un budget n'a pas besoin d'etre complexe pour fonctionner. Il doit etre honnete, tenir dans ta vie et laisser de la place aux ajustements. Quand le plan est simple, il devient habitude. Quand il devient habitude, il te rend quelque chose de rare: le sentiment que l'argent travaille pour toi, et non contre toi.",
        },
        {
          kind: "p",
          text: "Commence par les quatre chiffres. Choisis un style. Parcours les sept etapes. Reserve vingt minutes le dimanche. Quand le premier mois se ferme, ajuste deux choses. Quand le deuxieme mois se ferme, ajuste-en une autre. Dans six mois, tu regarderas en arriere et tu realiseras que le plan actuel ne ressemble plus du tout a la premiere ebauche timide. Et c'est tres bien. C'est exactement le but: le budget grandit avec toi, pas ton devouement envers lui.",
        },
        {
          kind: "p",
          text: "Si tu veux appliquer ce que tu as lu ici dans un outil qui respecte ta confidentialite, Savlo est disponible sur Android et bientot sur iOS. Il a ete pense exactement comme ce genre de compagnon: simple, calme, sans demande d'identifiants bancaires, avec des Spaces, le suivi a la voix et l'import de CSV, pour mettre la theorie en pratique sans te perdre dans le processus. Le meilleur outil de budget est celui que tu utilises encore l'annee prochaine.",
        },
      ],
    },
  },
  "budgeting-on-a-low-income": {
    title:
      "Faire un budget avec un petit revenu: un guide realiste, pas a pas, qui marche vraiment",
    description:
      "Un guide sans jugement, pas a pas, pour faire un budget avec un petit revenu. Apprends a construire un petit tampon, verrouiller les non-negociables, et arreter l'hemorragie quand les chiffres ne passent pas.",
    keywords: [
      "budget avec petit revenu",
      "budget avec peu d'argent",
      "faire un budget petit revenu",
      "budget quand on est a sec",
      "budget avec argent serre",
      "gestion argent petit revenu",
      "budget serre",
      "budget petit salaire",
      "pas de marge d'epargne",
      "survivre avec petit revenu",
      "argent budget serre",
    ],
    readingTime: 20,
    summary: [
      "Faire un budget avec un petit revenu a son propre metier. La majorite des conseils supposent une marge qui n'est pas toujours la, et ressemblent alors a une porte claquee au visage.",
      "Ce guide propose sept pas realistes, sans culpabilite, pour prendre soin de ce que tu as, construire le plus petit tampon possible et arreter l'hemorragie quand les chiffres ne passent pas.",
    ],
    sections: [
      {
        heading: "Ce que signifie vraiment faire un budget avec un petit revenu",
        body: [
          "Petit revenu n'est pas un chiffre unique. Ca peut signifier vivre paycheck a paycheck avec un salaire stable qui ne suffit pas. Ca peut signifier du travail a la mission ou le mois dernier etait bon et celui-ci ne l'est pas. Ca peut signifier etre entre deux contrats, elever des enfants avec un seul revenu, ou gagner dans une devise qui ne correspond pas au cout de la vie de ta ville.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Faire un budget avec un petit revenu a son propre metier. Les conseils qui circulent sur internet partent en general d'une marge: coupe les cafes, construis un fonds d'urgence, automatise ton epargne. Quand la marge n'est pas la, ces conseils ne semblent pas utiles. Ils ressemblent a une porte claquee au visage. Ce guide est pour les mois ou les chiffres sont serres, ou le salaire disparait avant la fin du mois, et ou «fais juste un meilleur budget» est la derniere chose que tu as besoin d'entendre.",
        },
        {
          kind: "p",
          text: "L'objectif ici n'est pas de romantiser la rarete, ni de pretendre qu'une annee a 40 000 est la meme chose qu'une a 90 000. L'objectif est de te donner une facon realiste et sans jugement de prendre soin de ce que tu as, de construire le plus petit tampon possible et d'arreter l'hemorragie quand les chiffres ne passent pas. Sept pas, sans honte, et quelques habitudes qui tiennent vraiment dans un budget serre.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Savlo est disponible sur Android et bientot sur iOS. Tout ce que couvre ce guide fonctionne dans un carnet, une feuille de calcul ou une app simple. Si tu veux un outil qui respecte ta vie privee, ne demande pas d'identifiants bancaires et fonctionne dans des routines serrees, Savlo a ete pense avec ca en tete. Tu peux appliquer chaque pas de ce guide sans lui aussi.",
        },
        {
          kind: "h2",
          text: "Ce que signifie reellement faire un budget avec un petit revenu",
          id: "ce-que-signifie-reellement",
        },
        {
          kind: "p",
          text: "«Petit revenu» n'est pas un seul chiffre. Ca peut signifier vivre paycheck a paycheck avec un salaire stable qui ne suffit pas. Ca peut signifier du travail a la mission ou le mois dernier etait bon et celui-ci ne l'est pas. Ca peut signifier etre entre deux contrats, elever des enfants avec un seul revenu, ou gagner dans une devise qui ne correspond pas au cout de la vie de ta ville. Ca peut aussi vouloir dire un foyer avec des entrees irregulieres et une longue liste de sorties previsibles. La forme change, mais l'experience vecue est similaire: chaque euro a un emploi avant d'arriver, et la plupart de ces emplois ne sont pas negociables.",
        },
        {
          kind: "p",
          text: "Quand l'argent est serre, le budget arrete d'etre un exercice de planification et devient un outil de survie. Ce n'est pas un echec de ta discipline ni de ton intelligence. C'est la reponse naturelle a un environnement contraint. Un bon budget fait dans ce contexte trois choses a la fois: il te dit ce qu'il est sur de depenser, il empeche les petites surprises de devenir de grandes crises, et il laisse une fente d'espace pour quelque chose qui est a toi. Le reste de ce guide te montre comment construire ca, un pas a la fois.",
        },
        {
          kind: "h3",
          text: "Le petit revenu n'est pas une seule chose",
          id: "pas-une-seule-chose",
        },
        {
          kind: "p",
          text: "Le conseil qui marche pour un freelance dans une ville chere ne marche pas toujours pour une personne a mi-temps dans une ville plus petite, et inversement. Ce qu'ils partagent, c'est la structure: un petit revenu previsible, une liste de depenses fixes, et un funambule entre les deux. Une fois que tu acceptes que l'objectif n'est pas d'optimiser pour la richesse mais d'optimiser pour la stabilite, le budget devient un outil different. Il devient un moyen de donner a chaque euro un emploi clair pour que rien ne se perde dans le genre de stress qui coute plus cher qu'il n'economise.",
        },
        {
          kind: "h2",
          text: "Pourquoi la majorite des conseils de budget echouent quand l'argent est serre",
          id: "pourquoi-echouent",
        },
        {
          kind: "p",
          text: "La majorite du contenu sur les finances personnelles est ecrit pour des gens qui ont une marge. Il suppose que tu peux rediriger quelques centaines d'euros par mois vers l'investissement, que tu peux passer quelques depenses non essentielles, que tu peux absorber une surprise sans perdre le sommeil. Quand ces conditions ne sont pas reunies, le meme conseil ressemble a une langue etrangere. Il peut aussi ressembler a un reproche, surtout quand l'auteur ne reconnait pas l'ecart entre ta realite et l'exemple.",
        },
        {
          kind: "p",
          text: "La deuxieme raison pour laquelle le conseil echoue est qu'il traite la discipline comme le goulot d'etranglement. La discipline est rarement le goulot d'etranglement. Le goulot est structurel: le revenu ne suit pas les depenses, les depenses ne suivent pas les mois, et il n'y a pas de mou pour absorber une surprise de 200 euros. Un bon budget ne peut pas reparer un deficit structurel. Ce qu'il peut faire, c'est rendre le deficit visible, et c'est la premiere etape pour prendre une decision differente. Parfois la decision est de renegocier une depense fixe. Parfois c'est de changer de travail. Parfois c'est de demander de l'aide. Le budget est la carte, pas le sauvetage.",
        },
        {
          kind: "h3",
          text: "Le mythe du «coupe les cafes»",
          id: "mythe-des-cafes",
        },
        {
          kind: "p",
          text: "Couper les petites depenses discretionnaires est une bonne habitude quand tu as du mou. Avec un petit revenu, le calcul ne fonctionne pas. La distance entre un mois serre et un mois vivable est rarement quelques cafes. C'est generalement une hausse de loyer, une facture medicale, un shift perdu, ou une depense liee aux enfants qui n'existait pas le mois d'avant. Couper le petit aide, mais ce n'est pas le levier. Le levier est dans les couts fixes, dans les sources de revenu, et dans la facon dont les deux s'enchainent dans le mois. C'est la que ce guide met son energie.",
        },
        {
          kind: "h2",
          text: "Les quatre chiffres, ajustes pour les mois serres",
          id: "quatre-chiffres-ajustes",
        },
        {
          kind: "p",
          text: "Chaque budget, quel que soit le revenu, repose sur les memes quatre chiffres: revenu net, depenses fixes, depenses variables et taux d'epargne. La forme de ces chiffres change quand l'argent est serre, mais ils restent la colonne vertebrale. Le revenu net est la quantite mensuelle realiste la plus basse sur laquelle tu peux compter, apres impots et deductions obligatoires. Les depenses fixes sont les factures qui arrivent quoi qu'il arrive: loyer, charges, transport, paiements minimums de dettes, couts fixes lies aux enfants. Les depenses variables sont la partie flexible: courses, produits menagers, soins personnels, transport occasionnel. Le taux d'epargne dans un budget serre n'est pas un objectif d'investissement agressif. C'est ce qui reste apres les trois autres, meme si le nombre commence a zero.",
        },
        {
          kind: "p",
          text: "Ce qui change quand l'argent est serre, c'est l'ordre des priorites. Au lieu de «epargne d'abord, puis tout le reste», l'ordre devient «non negociables d'abord, puis petites reserves, puis depense discretionnaire». Cet ordre est la colonne vertebrale des sept pas ci-dessous. Tu peux en lire plus sur les quatre chiffres dans le guide plus large sur [comment faire un budget](/fr/blog/how-to-budget-money); cette version les accorde juste pour les mois serres.",
        },
        {
          kind: "h2",
          text: "Sept pas pour faire un budget avec un petit revenu",
          id: "sept-pas",
        },
        {
          kind: "p",
          text: "Ces sept pas partent du principe que ton revenu est irregulier, ta marge est mince et ton temps est limite. Ils sont concus pour prendre environ une heure la premiere fois et vingt minutes par semaine apres. Ils n'exigent ni une app, ni une feuille de calcul, ni un etat d'esprit special. Ils exigent de l'honnetete et un bout de papier.",
        },
        {
          kind: "h3",
          text: "Pas 1: Cartographie chaque euro qui entre",
          id: "pas-1-carto",
        },
        {
          kind: "p",
          text: "Ouvre les releves des trois derniers mois et note chaque depot. Additionne, divise par trois, et c'est ton revenu net mensuel moyen. Regarde maintenant le mois le plus bas des trois, pas la moyenne. C'est ton revenu de planification. Budgetise a partir du mois le plus bas, pas du mois typique. Quand tu budgetises a partir de la moyenne, les mauvais mois te cassent. Quand tu budgetises a partir du plancher, les bons mois sont un tampon. Ce seul changement protege plus de budgets serres que n'importe quelle autre habitude.",
        },
        {
          kind: "p",
          text: "Pour rendre ca concret, prends un exemple reel. Si les trois derniers mois de depots sont 1 400, 1 250 et 1 520, la moyenne est 1 390. Le plus bas est 1 250. Construis le budget a partir de 1 250. Les 140 euros de difference entre la moyenne et le plancher ne sont pas un petit montant sur un petit revenu. C'est souvent la difference entre une facture payee et des frais de retard. Si le revenu est irregulier, par exemple 1 800 un mois et 1 100 le suivant, le schema est encore plus important. Utilise le mois le plus bas realiste des six derniers comme revenu de planification. Si deux mois de suite tombent en dessous, traite la moyenne de ces deux comme le nouveau plancher. Le budget est un document vivant, pas une regle figee.",
        },
        {
          kind: "h3",
          text: "Pas 2: Verrouille les non negociables",
          id: "pas-2-non-negociables",
        },
        {
          kind: "p",
          text: "Les non negociables sont les factures qui doivent etre payees pour que le minimum vital continue: loyer ou credit immobilier, charges, paiements minimums de dettes, transport au travail, couts fixes lies aux enfants, medicaments. Additionne. Soustrais cette somme de ton revenu de planification. Le nombre qui reste, s'il reste quelque chose, est le point de depart pour tout le reste. Si le nombre est negatif, tu as un deficit structurel. Le premier mouvement n'est pas d'optimiser les courses. Le premier mouvement est de regarder les non negociables eux-memes: lequel peut etre renegocie, lequel peut etre reduit, lequel te maintient dans une mauvaise place.",
        },
        {
          kind: "h3",
          text: "Pas 3: Trouve ton argent «elastique»",
          id: "pas-3-elastique",
        },
        {
          kind: "p",
          text: "L'argent elastique, c'est la depense qui peut retrecir sans casser le minimum. Il vit generalement dans les courses, les produits menagers, les extras de transport, les loisirs et les soins personnels. Regarde les trois derniers mois et identifie les categories elastiques. Choisis les deux ou trois ou un petit changement peut economiser quelques euros par semaine. Pas cent euros par mois. Quelques euros par semaine. Le but de ce pas n'est pas de bouleverser ta vie. C'est de liberer une quantite petite et reelle d'argent qui devient la graine du pas suivant.",
        },
        {
          kind: "h3",
          text: "Pas 4: Construis un tampon de depart de 100",
          id: "pas-4-tampon",
        },
        {
          kind: "p",
          text: "Un fonds d'urgence classique, c'est trois a six mois de depenses. C'est le bon objectif a terme, mais pas le bon objectif pour un mois serre. Sur un petit revenu, le bon objectif est 100. Cent euros suffisent a couvrir une petite surprise, comme une quote-part de medicament, une contravention ou une facture de service qui arrive en double. C'est assez petit pour se construire en quelques semaines, et assez petit pour que tu n'aies pas a choisir entre lui et un repas. Quand tu as 100, tu arrêtes de payer les surprises avec des frais de decouvert. Ca seul vaut l'effort.",
        },
        {
          kind: "h3",
          text: "Pas 5: Utilise la methode du calendrier de factures",
          id: "pas-5-calendrier",
        },
        {
          kind: "p",
          text: "La plupart des budgets serres cassent a cause du calendrier, pas du montant. Le loyer est du le 1er, le salaire tombe le 5, la charge est due le 10. Quand le calendrier ne s'aligne pas, quelque chose est paye en retard. La solution est de passer d'un budget par categories a un budget par dates. Prends une feuille blanche et dessine un calendrier. Marque chaque date de revenu. Marque chaque date d'echeance. Fais correspondre les revenus aux echeances dans l'ordre, pas par categorie. Quand le calendrier marche, le budget marche. Quand il ne marche pas, le budget est une liste de souhaits. L'app Savlo utilise un rythme voisin: voir ce qui est du avant de payer.",
        },
        {
          kind: "p",
          text: "Pour rendre ca concret, imagine: loyer 700 le 1er, une charge 90 le 10, un forfait telephone 45 le 15, et un salaire de 1 250 tombe le 5 et le 20. Le 5, 700 du premier salaire vont au loyer. Le 10, les 90 du second salaire (qui arrive le 20) doivent venir de quelque part. Le calendrier revele ce probleme avant qu'il devienne une facture perdue. La solution est de mettre de cote un petit tampon en especes le 5 qui couvre la facture du 10, ou d'appeler le fournisseur et demander un deplacement de l'echeance au 20. L'une ou l'autre solution est moins chere que des frais de retard. La methode du calendrier transforme le calcul d'abstrait en une seule page que tu peux lire en une minute.",
        },
        {
          kind: "h3",
          text: "Pas 6: Ouvre un fonds dedie minuscule",
          id: "pas-6-fonds",
        },
        {
          kind: "p",
          text: "Les fonds dedies ont l'air d'un luxe, mais sur un petit revenu c'est une competence de survie. Un fonds dedie est une petite reserve que tu construis pour une depense future connue: une prime annuelle d'assurance, la rentree scolaire, un cadeau de fin d'annee, le controle technique. La plupart des depenses annuelles sont entre 50 et 500. Divise ce montant par douze et mets de cote ce petit montant chaque mois. Quand la depense arrive, l'argent est deja la. Si tu veux une explication plus longue, le [guide des fonds dedies](/fr/blog/sinking-funds) parcourt le calcul. Sur un petit revenu, la regle est simple: 5 par semaine pour une depense previsible suffit pour commencer.",
        },
        {
          kind: "h3",
          text: "Pas 7: Ajoute de petits coups de pouce de revenu",
          id: "pas-7-revenus",
        },
        {
          kind: "p",
          text: "Faire un budget avec un petit revenu finit par buter sur un mur. Le mur est le revenu. Couper l'argent elastique a un plancher, et une fois que tu l'atteins, aucune feuille de calcul n'aide. Le pas suivant est d'ajouter du revenu, pas de couper des depenses. Les petits coups de pouce de revenu ne signifient pas quitter ton emploi principal. Ils signifient mettre vingt euros dans ta poche ce mois-ci avec quelque chose que tu sais deja faire: vendre quelque chose, prendre un shift en plus, ecrire en freelance, promener des chiens, rendre un petit service a un voisin. Fais une liste de trois choses que tu pourrais faire dans les deux prochaines semaines et qui ajouteraient entre 20 et 100 euros a ton revenu. Fais-en une la semaine prochaine. Empile les succes. La composition de petites quantites est ce qui transforme un budget serre en un budget vivable.",
        },
        {
          kind: "p",
          text: "Les coups de pouce les plus faciles sont ceux qui utilisent une heure que tu as deja. Une soiree a faire le tri et a mettre cinq objets sur une marketplace locale rapporte souvent entre 40 et 150 euros en une semaine. Un samedi matin a aider un voisin a deplacer un canapé, c'est 30 euros en especes et un service pour plus tard. Quelques heures a traduire un document court, a promener trois chiens ou a monter un meuble pour quelqu'un qui prefere payer que de le faire lui-meme, c'est 50 de plus. Aucun de ces coups n'est extensible, et c'est le but. Sur un petit revenu, l'objectif est d'ajouter une quantite petite et reelle ce mois-ci, pas de monter un cote. Traite chaque coup de pouce comme un evenement unique, et laisse le budget en beneficier sans redessiner le plan autour.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Les sept pas ont l'air longs. En pratique, la premiere fois que tu les fais, ils prennent environ une heure. Apres, la revue hebdomadaire prend vingt minutes. Le pas le plus difficile est le premier, parce que le premier est la ou la verite apparait. La bonne nouvelle, c'est que chaque pas apres devient plus facile. L'autre bonne nouvelle, c'est qu'aucun des pas n'exige une app, un abonnement ou un temperament special. Ils exigent un bout de papier, une heure honnete et la disposition de revenir dimanche prochain.",
        },
        {
          kind: "h2",
          text: "Composer avec la honte et l'anxiete liees a l'argent",
          id: "honte-anxiete",
        },
        {
          kind: "p",
          text: "L'argent sur un petit revenu n'est pas un probleme de calcul. C'est aussi un probleme emotionnel. Les sentiments qui viennent en verifiant ton solde et en voyant 17 euros jusqu'a vendredi sont reels, et ils ne sont pas des signes de faiblesse. Ils sont des signes que ca compte pour toi. Le probleme est que la honte te fait eviter exactement ce qui aiderait: regarder les chiffres. Si tu n'as pas ouvert l'app de ta banque depuis des semaines, tu n'es pas seul, et tu n'es pas un raté. Tu es une personne avec un systeme nerveux qui fait son travail en te protegeant d'un stresseur.",
        },
        {
          kind: "p",
          text: "Le remede n'est pas la motivation. Le remede est la petitesse. Ouvre l'app trente secondes et regarde le solde. Ferme l'app. C'est une interaction complete de budget pour une journee serree. Le lendemain, fais pareil. Le surlendemain, regarde aussi une facture. En une semaine, tu as regarde les chiffres quatre fois et la honte a perdu l'essentiel de son pouvoir. La version longue de cette idee est dans le guide sur [l'anxiete financiere](/fr/blog/financial-anxiety), qui creuse la science de l'evitement et ce qui aide.",
        },
        {
          kind: "h3",
          text: "La charge mentale des petites quantites",
          id: "charge-mentale",
        },
        {
          kind: "p",
          text: "Les gens qui ont plus d'argent ne realisent pas souvent combien de reflexion tient dans chaque petite quantite sur un budget serre. Les 4 euros de difference entre deux supermarches. Les 30 centimes d'un sac en plus. Prendre le bus deux fois cette semaine ou marcher. Cette charge mentale est reelle, et c'est l'une des raisons pour lesquelles les budgets a petit revenu epuisent. La sortie n'est pas de prendre les petites decisions a chaque fois. La sortie est de poser les regles une fois, puis de les suivre par defaut. Acheter au meme supermarche. Utiliser du cash pour la depense variable. Fixer un plafond discretionnaire hebdomadaire et arreter de tracker apres. L'objectif est que les petites decisions ne ressemblent plus a des decisions.",
        },
        {
          kind: "h3",
          text: "Suivre ses depenses en trente secondes",
          id: "suivre-30-secondes",
        },
        {
          kind: "p",
          text: "Sur un petit revenu, le temps que tu passes a tracker le budget est souvent plus cher que le cout d'une depense manquee. La regle est simple: tracke trente secondes, pas dix minutes. La plupart des depenses sur un petit revenu viennent d'un de trois endroits: courses, transport et personnel. Quand tu depenses, enregistre une seule ligne avec le montant, la categorie et le jour. C'est tout. Une entree vocale qui fait la meme chose en trois secondes est encore mieux. L'app Savlo est concue pour ce rythme: une phrase courte et l'entree est dans le calendrier, sans liaison bancaire et sans friction. Le but est de faire du tracking une habitude que tu peux tenir un mardi fatigue a 21h, pas un projet qui demande une heure de concentration.",
        },
        {
          kind: "p",
          text: "L'autre moitie de la regle des trente secondes est d'arreter de tracker quand le temps ne rapporte plus. Si un cafe a 4 euros ne va pas changer le budget, enregistre-le en deux secondes et passe a autre chose. Si une reparation de voiture a 400 euros vient d'arriver, enregistre-la soigneusement et mets en pause la depense discretionnaire de la semaine. Tracker est un outil, pas une religion. La bonne version du tracking est celle qui tient dans une vie normale sans la prendre entierement.",
        },
        {
          kind: "h3",
          text: "Un exemple detaille: le mois a 1 250",
          id: "exemple-detaille",
        },
        {
          kind: "p",
          text: "Pour reunir les sept pas, prends un seul mois comme exemple. Revenu du mois: 1 250 net, avec la seconde moitie tombant le 20. Non negociables: 700 de loyer le 1er, 90 de charge le 10, 45 de telephone le 15, 60 de paiement minimum de dette le 22, 120 de transport, 80 de courses, 30 de soins personnels. Cela fait 1 125 de depense fixe et previsible. Le tampon du mois precedent est 100. Le premier salaire du 5 couvre le loyer et ramene le tampon a 100 apres la facture du 10. Le second salaire du 20 couvre le forfait telephone, le paiement minimum, le transport et les courses, et laisse 25. Ces 25 vont dans un fonds dedie pour la prochaine depense previsible. Le calcul est serre, mais il tient. La meme forme tient pour un mois a 2 200, un mois a 900 ou un mois a 3 400. Les sept pas ne changent pas avec la taille du chiffre.",
        },
        {
          kind: "h3",
          text: "Quand le bon mois arrive",
          id: "bon-mois",
        },
        {
          kind: "p",
          text: "Sur un petit revenu, les bons mois sont plus rares que les mauvais, et la tentation est de les depenser. Resiste. Les premiers 50 de chaque bon mois vont au tampon jusqu'a ce qu'il atteigne 100. Les 50 suivants vont au prochain fonds dedie petit. Les 50 suivants vont a la prochaine dette de la liste. Quand le bon mois a quelques centaines d'euros en plus, le budget a une vraie base, et le prochain mauvais mois n'est plus une crise. Le bon mois n'est pas une permission de monter le niveau de vie. C'est une permission de renforcer le plancher.",
        },
        {
          kind: "h2",
          text: "Sept erreurs qui aggravent un mois serre",
          id: "sept-erreurs",
        },
        {
          kind: "ol",
          items: [
            "**Sauter des repas pour economiser.** Marche une semaine, puis te coute en energie, en concentration et en factures de sante. La nourriture est un cout fixe, pas un cout elastique. Trouve une autre categorie elastique.",
            "**Credits a court terme ou avances de cash.** Ils ont l'air d'un pont, mais les frais s'accumulent. Si un credit a court terme est la seule option, c'est un signal pour demander de l'aide, pas pour prendre le credit. La plupart des villes ont une aide d'urgence pour les charges et des alternatives de petit montant via des associations.",
            "**Ignorer une facture parce qu'elle fait peur.** Les frais de retard, la perte de service et le recouvrement coutent plus cher qu'un appel. Appelle l'entreprise, demande un echelonnement, demande une extension pour difficulte. La pire reponse est «non», et la meilleure est «on peut etaler en trois fois».",
            "**Utiliser le credit pour les courses.** La facture de courses est la partie la plus previsible du budget. Si elle passe par le credit, le budget a un probleme structurel, pas un probleme de discipline.",
            "**Essayer de payer toutes les dettes en meme temps.** Sur un petit revenu, payer un extra sur cinq dettes en meme temps revient a payer un extra sur zero. Paie le minimum sur toutes pour proteger le credit et la serenite, puis mets chaque euro libre sur le solde le plus petit. Le calcul est dans le [guide pour sortir des dettes](/fr/blog/how-to-get-out-of-debt), et l'ordre compte encore plus quand le revenu est serre.",
            "**Essayer d'epargner de facon agressive quand il n'y a pas de marge.** Epargner 50 euros par mois quand le calcul est deja serre ne fait que creer une nouvelle crise. Construis d'abord le tampon de 100. Puis parle d'epargner plus.",
            "**Comparer ton budget a celui des autres.** Le budget «moyen» que tu vois en ligne est fait pour un revenu «moyen». Le tien est fait pour ton revenu reel. Ce n'est pas le meme exercice.",
            "**Abandonner le budget apres un mauvais mois.** Le but d'un budget a petit revenu n'est pas la perfection. Le but est de revenir dimanche prochain et de reessayer. C'est tout le travail. Si tu reviens, le budget fonctionne.",
          ],
        },
        {
          kind: "h2",
          text: "Les outils qui aident quand l'argent est serre",
          id: "outils-serr",
        },
        {
          kind: "p",
          text: "Le meilleur outil est celui que tu utiliseras vraiment. Sur un petit revenu, le cout d'un abonnement est rarement decisif. Ce qui est decisif, c'est de savoir si l'outil respecte ton temps et ta realite. Pour la majorite, le bon outil est l'un des trois: un papier divise en non negociables, elastique et une petite reserve; une feuille de calcul simple a trois colonnes mise a jour chaque semaine; ou une app qui priorise la confidentialite et permet d'enregistrer les depenses a la voix, en quelques secondes, sans lier de compte bancaire. Savlo est concu pour la troisieme voie. Il tourne aujourd'hui sur Android et bientot sur iOS, et fonctionne sans demander d'identifiants bancaires, ce qui importe quand la confiance est le facteur decisif.",
        },
        {
          kind: "p",
          text: "Si tu preferes la voie manuelle, un bref check hebdomadaire suffit. Ouvre l'app de notes de ton telephone. Note ce qui est entre, ce qui est sorti, et ce qui reste. C'est un budget complet. Si tu veux une forme plus structuree, le calendrier de factures du pas 5 te donne tout ce qu'il faut sur une seule page. Le but n'est pas le format. Le but est l'habitude. Choisis un outil qui n'ajoute pas de friction et utilise-le chaque dimanche.",
        },
        {
          kind: "h2",
          text: "Quand demander de l'aide au-dela du budget",
          id: "demander-aide",
        },
        {
          kind: "p",
          text: "Un budget est un outil, pas un sauvetage. Il y a des mois ou le calcul ne passe simplement pas, et la bonne reponse est de demander de l'aide. La majorite des villes ont une aide d'urgence pour les charges, la nourriture, le loyer et les medicaments. Les organisations ne sont pas des charites que tu dois meriter. Ce sont des services publics finances exactement pour cette situation. Si tu es en France, le Centre Communal d'Action Sociale (CCAS) de ta commune peut t'orienter vers les aides locales. Au Quebec, les centres locaux d'emploi et d'aide aux consommateurs font un travail similaire. Dans beaucoup d'autres pays, il existe des lignes equivalentes. Le budget te donne la dignite de savoir ce qui se passe. L'aide te donne le temps de prendre la decision suivante.",
        },
        {
          kind: "p",
          text: "Un deuxieme type d'aide est la bibliotheque publique. La majorite des bibliotheques offrent un acces gratuit a du coaching financier, des ateliers gratuits sur le budget et les dettes, l'impression gratuite de formulaires, internet gratuit pour chercher un emploi, et des salles gratuites pour la vie associative. La bibliotheque est un espace public tranquille ou tu peux t'asseoir avec tes releves et travailler les sept pas de ce guide sans que personne ne te demande ce que tu fais la. Si le calcul est serre, la bibliotheque est l'une des rares ressources publiques qui s'ajustent a ce dont tu as besoin.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Questions frequentes sur le budget avec un petit revenu",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Est-ce qu'on peut vraiment faire un budget quand l'argent est serre?",
              a: "Oui, mais l'objectif est different. L'objectif d'un budget a petit revenu n'est pas d'epargner de facon agressive. C'est d'eviter les surprises, de proteger une petite reserve et d'arreter l'hemorragie quand une petite facture arrive au mauvais moment. Un budget qui evite 35 euros de frais de decouvert fait son travail, meme s'il ne ressemble pas a ce que montrent les blogs finances.",
            },
            {
              q: "Quelle est la plus petite somme que je devrais essayer d'epargner en premier?",
              a: "Cent. Un tampon de 100 suffit a absorber une petite surprise, et est assez petit pour etre construit en quelques semaines. Une fois que tu l'as, elargis-le. Le but est de commencer avec un nombre atteignable, pas avec un qui laisse l'objectif sur l'etagere.",
            },
            {
              q: "Comment je fais un budget si mon revenu change chaque mois?",
              a: "Budgetise a partir du mois le plus bas des six derniers, pas a partir de la moyenne. Quand les bons mois arrivent, traite l'extra comme un tampon, pas comme une amelioration du plan. Le plan est concu pour survivre au mauvais mois. Le bon mois est un cadeau au plan.",
            },
            {
              q: "Et si toutes les categories sont non negociables?",
              a: "Alors le budget a un probleme structurel, pas un probleme de categorie. Le pas suivant est de regarder le revenu, pas la depense. Renegocie une depense fixe, demande une augmentation, prends un petit revenu en plus, ou demande de l'aide. Le budget peut te montrer le trou. Il ne peut pas le refermer.",
            },
            {
              q: "Comment j'arrete d'avoir honte de mes depenses?",
              a: "La honte vit generalement dans l'evitement. Ouvre l'app trente secondes. Regarde le solde. Ferme l'app. Fais ca pendant une semaine. La honte perd l'essentiel de son pouvoir des que regarder devient une habitude. Tu peux en lire plus dans la piece sur la [dysmorphie de l'argent](/fr/blog/money-dysmorphia), qui creuse le cote emotionnel.",
            },
            {
              q: "Est-ce que c'est ok d'utiliser une app de budget quand l'argent est serre?",
              a: "Oui, tant que l'app n'ajoute pas de friction. Une app simple qui permet d'enregistrer un cafe a 4 euros en deux secondes vaut mieux qu'une app sophistiquee que tu ouvres deux fois par an. Si une app gratuite sans liaison bancaire et sans abonnement marche, c'est la bonne app. Savlo est une de ces options, mais pas la seule. Qu'elle priorise la confidentialite importe ici, parce que tu proteges aussi les quelques euros que tu as.",
            },
            {
              q: "Comment je fais un budget si j'ai en plus des dettes sur un petit revenu?",
              a: "Paie le minimum sur chaque dette pour garder les comptes a jour, puis mets chaque euro libre sur le solde le plus petit. Quand le solde le plus petit est tombe, passe ce paiement au suivant. La mecanique est la meme que dans le [guide pour sortir des dettes](/fr/blog/how-to-get-out-of-debt), et l'ordre des priorites compte encore plus quand le revenu est serre.",
            },
            {
              q: "Que faire si je dois choisir entre payer une facture et acheter de la nourriture?",
              a: "Appelle d'abord la facture. La majorite des entreprises ont une ligne pour les difficultes. Elles mettent le service en pause un mois, echelonnent un paiement, ou te referent a un programme d'aide. La nourriture est non negociable, et un seul appel te donne souvent le temps de regler la nourriture. Si ca ne marche pas, c'est le signe que l'aide alimentaire publique et les banques alimentaires locales sont la bonne reponse. Elles existent exactement pour cette situation.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Un petit budget honnete vaut mieux qu'un budget parfait",
          id: "conclusion",
        },
        {
          kind: "p",
          text: "Un budget a petit revenu n'est pas une performance. C'est une habitude d'entretien. Le travail consiste a empecher les petites surprises de devenir de grandes crises, a garder un petit filet d'argent en reserve, et a rester assez proche des chiffres pour prendre une decision calme quand quelque chose casse. Un petit budget honnete auquel tu reviens dimanche prochain vaut mieux qu'un parfait que tu abandonnes en trois semaines.",
        },
        {
          kind: "p",
          text: "Si tu pars de zero, parcours les sept pas dans l'ordre. Construis le tampon de 100. Ouvre un petit fonds dedie. Empile un petit coup de pouce de revenu. Apres un mois, le calcul n'est pas encore confortable, mais la routine si. La routine est ce qui rend le mois suivant plus facile. En six mois, la routine est ce qui rend l'annee suivante possible.",
        },
        {
          kind: "p",
          text: "La partie la plus dure d'un budget a petit revenu, ce n'est pas le calcul. C'est la solitude de le faire. La majorite des conversations sur le budget supposent une marge que tu n'as pas, et la majorite du contenu sur le budget est ecrit pour des gens qui peuvent absorber une surprise. Tu n'es pas en retard, et tu n'echoues pas. Tu fais tourner une version plus exigeante du meme exercice, avec moins de marge d'erreur et un plus petit tampon pour la surprise. Un budget qui tient dans cette realite est l'un des outils les plus utiles que tu peux construire, et il vaut l'heure qu'il faut pour commencer. Si tu veux un outil qui respecte ta confidentialite, ne demande pas d'identifiants bancaires et fonctionne dans des routines serrees, Savlo est disponible sur Android et bientot sur iOS. Il a ete concu pour le genre de budget decrit dans ce guide: petit, honnete, et facile a retrouver. Tout fonctionne ici sans lui. Si tu veux un compagnon de routine, Savlo est l'une des options les plus tranquilles du marche.",
        },
      ],
    },
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
    rich: override.rich ? { blocks: [...override.rich.blocks] } : undefined,
  }
}

export const frenchPosts = (Object.keys(overrides) as FrenchSlug[]).map((slug) =>
  buildPost(slug),
)

export function getFrenchPostBySlug(slug: string): FrenchBlogPost | undefined {
  return frenchPosts.find((post) => post.slug === slug)
}
