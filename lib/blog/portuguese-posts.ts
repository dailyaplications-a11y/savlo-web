import { posts, type BlogCategory } from "@/lib/blog/posts"

export type PortugueseBlogPost = {
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

export const portuguesePosts: PortugueseBlogPost[] = [
  {
    slug: "how-to-make-a-budget",
    title: "Como fazer um orçamento mensal sem culpa",
    description:
      "Um guia calmo para criar um orçamento realista, entender seus gastos e voltar a olhar seu dinheiro sem ansiedade.",
    category: fromEnglish("how-to-make-a-budget").category,
    date: fromEnglish("how-to-make-a-budget").date,
    dateModified: fromEnglish("how-to-make-a-budget").dateModified,
    keywords: [
      "como fazer um orçamento",
      "orçamento mensal",
      "orçamento para iniciantes",
      "app de orçamento",
    ],
    readingTime: 8,
    summary: [
      "Um orçamento não deveria soar como uma dieta financeira. Ele serve para decidir antes de gastar, não para se punir depois.",
      "A forma mais sustentável começa pela renda líquida, poucas categorias, um fundo de emergência e uma revisão semanal curta.",
    ],
    sections: [
      {
        heading: "Comece pelo dinheiro que realmente entra",
        body: [
          "Use a renda líquida, não a bruta. Se a renda variar, use o mês mais baixo como base e deixe os meses melhores como margem.",
          "Esse ajuste pequeno evita construir um plano em cima de otimismo. Um orçamento útil precisa sobreviver a um mês normal, não só ao mês ideal.",
        ],
      },
      {
        heading: "Use poucas categorias",
        body: [
          "A maioria abandona o orçamento porque tenta classificar demais. Comece com moradia, alimentação, transporte, saúde, dívidas, poupança, metas e gastos pessoais.",
          "Depois você pode usar métodos como a regra 50/30/20 ou o orçamento base zero. A estrutura importa menos do que a capacidade de voltar a olhar toda semana.",
        ],
      },
      {
        heading: "Revise uma vez por semana",
        body: [
          "Olhar o dinheiro todos os dias pode gerar hipervigilância. Olhar só no fim do mês chega tarde demais. Uma revisão semanal de 10 minutos costuma ser o ponto médio.",
          "O Savlo foi pensado para esse ritmo: registrar rápido, separar por espaços e fundos e voltar ao sistema sem números vermelhos gritando.",
        ],
      },
    ],
  },
  {
    slug: "50-30-20-rule",
    title: "Regra 50/30/20: como aplicá-la sem rigidez",
    description:
      "A regra 50/30/20 explicada com uma visão flexível para necessidades, desejos e futuro financeiro.",
    category: fromEnglish("50-30-20-rule").category,
    date: fromEnglish("50-30-20-rule").date,
    dateModified: fromEnglish("50-30-20-rule").dateModified,
    keywords: [
      "regra 50/30/20",
      "orçamento 50 30 20",
      "como dividir a renda",
      "método de orçamento",
    ],
    readingTime: 5,
    summary: [
      "A regra 50/30/20 divide sua renda em necessidades, desejos e futuro. É uma bússola, não uma sentença.",
      "Ela funciona melhor quando você a adapta à sua cidade, à sua renda e à sua fase de vida.",
    ],
    sections: [
      {
        heading: "O que cada porcentagem significa",
        body: [
          "Os 50% cobrem necessidades: moradia, alimentação básica, transporte, saúde, seguros e pagamentos mínimos de dívida.",
          "Os 30% cobrem desejos: saídas, assinaturas, hobbies e compras não essenciais. Os 20% vão para o futuro: poupança, investimentos, dívidas e fundos específicos.",
        ],
      },
      {
        heading: "Quando ajustar a regra",
        body: [
          "Se você vive numa cidade cara, talvez suas necessidades fiquem em 60%. Isso não significa fracasso; significa que o restante do plano precisa ser honesto.",
          "A regra fica útil quando reduz decisões, não quando te faz sentir culpa por viver numa realidade diferente do exemplo do post.",
        ],
      },
    ],
  },
  {
    slug: "best-mint-alternatives-2025",
    title: "Melhores alternativas ao Mint em 2025",
    description:
      "O que procurar depois do fim do Mint: privacidade, preço, facilidade de uso e alternativas sem conexão bancária obrigatória.",
    category: fromEnglish("best-mint-alternatives-2025").category,
    date: fromEnglish("best-mint-alternatives-2025").date,
    dateModified: fromEnglish("best-mint-alternatives-2025").dateModified,
    keywords: [
      "alternativas ao Mint",
      "apps como Mint",
      "melhor app de orçamento",
      "app de finanças pessoais",
    ],
    readingTime: 6,
    summary: [
      "Depois do fim do Mint, muita gente procura um app que não transforme as finanças em outro painel barulhento.",
      "A melhor alternativa depende do que você mais valoriza: automação, controle, privacidade ou uma experiência mais calma.",
    ],
    sections: [
      {
        heading: "O que comparar primeiro",
        body: [
          "Veja se o app exige conectar bancos, o que faz com seus dados, quanto custa depois do período inicial e se você consegue exportar suas informações.",
          "Também importa a sensação de uso. Se um app te deixa ansioso, é menos provável que você o abra quando mais precisa.",
        ],
      },
      {
        heading: "Onde o Savlo entra",
        body: [
          "O Savlo se posiciona como uma alternativa mais tranquila: registro por voz, importação de CSV/XLSX, espaços separados e sinking funds.",
          "Ele não tenta ser um painel de controle agressivo. Tenta te ajudar a olhar seu dinheiro com menos atrito.",
        ],
      },
    ],
  },
  {
    slug: "emergency-fund-vs-sinking-fund",
    title: "Fundo de emergência vs. sinking fund: qual é a diferença",
    description:
      "Aprenda a separar imprevistos reais de gastos previsíveis para poupar com mais clareza.",
    category: fromEnglish("emergency-fund-vs-sinking-fund").category,
    date: fromEnglish("emergency-fund-vs-sinking-fund").date,
    dateModified: fromEnglish("emergency-fund-vs-sinking-fund").dateModified,
    keywords: [
      "fundo de emergência",
      "sinking fund",
      "fundo de poupança",
      "como poupar para gastos grandes",
    ],
    readingTime: 5,
    summary: [
      "O fundo de emergência protege contra o inesperado. Um sinking fund prepara gastos grandes que você consegue prever.",
      "Separar os dois reduz a tentação de usar a reserva em férias, presentes ou manutenção.",
    ],
    sections: [
      {
        heading: "Quando usar um fundo de emergência",
        body: [
          "Use para perda de renda, reparos urgentes, saúde ou situações que não estavam no calendário.",
          "O objetivo principal é dar margem mental. Não é dinheiro para otimizar; é dinheiro para dormir melhor.",
        ],
      },
      {
        heading: "Quando usar um sinking fund",
        body: [
          "Use para despesas previsíveis: férias, impostos, presentes, manutenção do carro, mudanças ou troca de tecnologia.",
          "Cada fundo tem nome e propósito. Essa etiqueta ajuda seu cérebro a não misturar tudo numa bolsa confusa.",
        ],
      },
    ],
  },
  {
    slug: "why-traditional-budgets-fail",
    title: "Por que os orçamentos tradicionais falham",
    description:
      "A resposta das finanças comportamentais: culpa, fricção e sistemas que não respeitam como a atenção humana funciona.",
    category: fromEnglish("why-traditional-budgets-fail").category,
    date: fromEnglish("why-traditional-budgets-fail").date,
    dateModified: fromEnglish("why-traditional-budgets-fail").dateModified,
    keywords: [
      "por que orçamentos falham",
      "finanças comportamentais",
      "psicologia do dinheiro",
      "gastos e vieses cognitivos",
    ],
    readingTime: 6,
    summary: [
      "Muitos orçamentos falham porque são desenhados como punição. Quando um sistema envergonha, a resposta natural é evitá-lo.",
      "Um design melhor reduz fricção, usa linguagem amigável e permite voltar depois de errar.",
    ],
    sections: [
      {
        heading: "A culpa não cria constância",
        body: [
          "Alertas vermelhos e mensagens de fracasso podem funcionar por um dia, mas raramente constroem uma relação estável com o dinheiro.",
          "A constância aparece quando o sistema é fácil de retomar. Um orçamento abandonado não precisa de mais pressão; precisa de menos ameaça.",
        ],
      },
      {
        heading: "A fricção importa",
        body: [
          "Se registrar um gasto demora demais, o seu eu cansado não vai fazer isso. Por isso o Savlo prioriza check-ins curtos, voz e importações.",
          "A meta é que o hábito seja leve antes de pedir disciplina.",
        ],
      },
    ],
  },
  {
    slug: "voice-expense-tracking",
    title: "Registro de gastos por voz: a maneira mais rápida de anotar o que você gasta",
    description:
      "Como funciona o registro por voz, para quem serve e o que observar antes de escolher um app.",
    category: fromEnglish("voice-expense-tracking").category,
    date: fromEnglish("voice-expense-tracking").date,
    dateModified: fromEnglish("voice-expense-tracking").dateModified,
    keywords: [
      "registro de gastos por voz",
      "app de gastos por voz",
      "controle de gastos",
      "orçamento sem digitar",
    ],
    readingTime: 5,
    summary: [
      "Digitar cada gasto pode parecer pouco, até você ter que fazer isso todos os dias. Dizer em voz alta reduz a fricção.",
      "O registro por voz funciona melhor para compras do dia a dia, refeições, transporte e gastos que você costuma esquecer.",
    ],
    sections: [
      {
        heading: "Por que isso ajuda",
        body: [
          "A voz captura o gasto perto do momento real. Isso reduz esquecimentos e evita reconstruir o dia a partir do resumo do banco.",
          "Também parece menos administrativo. Para muita gente, essa diferença emocional decide se o hábito sobrevive.",
        ],
      },
      {
        heading: "O que avaliar em um app",
        body: [
          "Procure clareza sobre privacidade, idiomas suportados, edição manual, categorias e exportação.",
          "O melhor app é o que você realmente abre. Não existe vitória se a ferramenta só parece boa na apresentação.",
        ],
      },
    ],
  },
  {
    slug: "financial-anxiety",
    title: "Ansiedade financeira: hábitos diários para acalmar sua relação com o dinheiro",
    description:
      "A ansiedade financeira não depende só de quanto você ganha. Aprenda práticas pequenas para voltar a olhar seus números.",
    category: fromEnglish("financial-anxiety").category,
    date: fromEnglish("financial-anxiety").date,
    dateModified: fromEnglish("financial-anxiety").dateModified,
    keywords: [
      "ansiedade financeira",
      "estresse com dinheiro",
      "bem-estar financeiro",
      "hábitos financeiros",
    ],
    readingTime: 6,
    summary: [
      "A ansiedade financeira mistura números, memória, comparação e medo. Ela não se resolve só com uma planilha.",
      "Ajuda criar rituais pequenos: olhar o dinheiro num horário definido, usar categorias mais humanas e separar decisões de emoções.",
    ],
    sections: [
      {
        heading: "Olhe menos vezes, mas olhe melhor",
        body: [
          "Revisar compulsivamente pode aumentar o estresse. Evitar por completo também. Uma janela semanal e tranquila costuma funcionar melhor.",
          "O objetivo é fazer olhar suas finanças deixar de parecer uma emergência emocional.",
        ],
      },
      {
        heading: "Desenhe um sistema amigável",
        body: [
          "Dê nomes humanos aos seus fundos, automatize o que se repete e reduza o número de decisões diárias.",
          "Um app calmo não substitui ajuda profissional quando ela é necessária, mas pode diminuir bastante a fricção de voltar aos seus números.",
        ],
      },
    ],
  },
  {
    slug: "sinking-funds",
    title: "Sinking funds: guia completo para poupar sem estresse",
    description:
      "Um sinking fund transforma despesas grandes e previsíveis em pequenos aportes mensais. Aprenda a montar fundos para viagem, fim de ano e manutenção do carro.",
    category: fromEnglish("sinking-funds").category,
    date: fromEnglish("sinking-funds").date,
    dateModified: fromEnglish("sinking-funds").dateModified,
    keywords: [
      "sinking funds",
      "fundos para metas",
      "como poupar dinheiro",
      "template de sinking fund",
    ],
    readingTime: 5,
    summary: [
      "Um sinking fund é um fundo para uma despesa grande que você sabe que vai chegar. Não é emergência; é preparação.",
      "Ele serve para férias, manutenção, presentes, impostos, tecnologia e qualquer meta com data ou valor aproximado.",
    ],
    sections: [
      {
        heading: "Como calcular",
        body: [
          "Defina valor, prazo e frequência. Se você precisa de 600 dólares em 6 meses, o aporte base é 100 por mês.",
          "Se o número parecer pesado, ajuste prazo, valor ou escopo. A meta precisa te ajudar a agir, não te congelar.",
        ],
      },
      {
        heading: "Por que funciona",
        body: [
          "Fundos com nome tornam o futuro visível. Em vez de sentir que tudo sai do mesmo bolso, cada gasto tem o seu lugar.",
          "O Savlo usa Sinking Funds para separar metas e reduzir surpresas previsíveis.",
        ],
      },
    ],
  },
  {
    slug: "zero-based-budgeting",
    title: "Orçamento base zero: uma abordagem moderna e tranquila",
    description:
      "Dê um trabalho para cada real antes de gastá-lo, sem transformar o mês numa auditoria constante.",
    category: fromEnglish("zero-based-budgeting").category,
    date: fromEnglish("zero-based-budgeting").date,
    dateModified: fromEnglish("zero-based-budgeting").dateModified,
    keywords: [
      "orçamento base zero",
      "zero based budgeting",
      "método YNAB",
      "como distribuir dinheiro",
    ],
    readingTime: 6,
    summary: [
      "Orçamento base zero significa que cada unidade de dinheiro tem um destino: gasto, poupança, dívida, meta ou margem.",
      "Isso não significa gastar tudo. Significa eliminar a ambiguidade.",
    ],
    sections: [
      {
        heading: "A regra central",
        body: [
          "Renda menos alocações deve dar zero. Se sobrar dinheiro sem função, direcione para poupança, dívida ou uma categoria flexível.",
          "Essa clareza reduz decisões impulsivas porque o dinheiro já tem tarefa antes da tentação aparecer.",
        ],
      },
      {
        heading: "Como tornar sustentável",
        body: [
          "Comece com poucas categorias e deixe margem para o que é irregular. Se cada mudança exigir reescrever tudo, você vai abandonar.",
          "A versão tranquila permite mover dinheiro entre categorias sem tratar isso como fracasso.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-out-of-debt",
    title: "Como sair das dívidas sem culpa",
    description:
      "Comparando bola de neve e avalanche sem julgamento. Aprenda uma estratégia humana para quitar cartões e empréstimos sem perder a motivação.",
    category: fromEnglish("how-to-get-out-of-debt").category,
    date: fromEnglish("how-to-get-out-of-debt").date,
    dateModified: fromEnglish("how-to-get-out-of-debt").dateModified,
    keywords: [
      "como sair das dívidas",
      "bola de neve da dívida",
      "avalanche de dívida",
      "pagar cartões",
    ],
    readingTime: 6,
    summary: [
      "Sair das dívidas exige números, mas também motivação. O melhor método é o que você consegue sustentar quando está cansado.",
      "A avalanche economiza mais juros; a bola de neve pode dar vitórias psicológicas mais rápidas.",
    ],
    sections: [
      {
        heading: "Organize suas dívidas",
        body: [
          "Anote saldo, taxa, pagamento mínimo e data. Primeiro proteja os mínimos para evitar multas e danos adicionais.",
          "Depois escolha a estratégia: maior taxa para eficiência ou menor saldo para impulso emocional.",
        ],
      },
      {
        heading: "Construa margem",
        body: [
          "Um plano de dívida sem um fundo de emergência mínimo costuma quebrar no primeiro imprevisto.",
          "Mesmo um colchão pequeno ajuda a não voltar ao cartão a cada despesa inesperada.",
        ],
      },
    ],
  },
  {
    slug: "money-dysmorphia",
    title: "Money dysmorphia: por que você se sente quebrado mesmo quando não está",
    description:
      "Money dysmorphia é quando você se sente financeiramente quebrado mesmo com números saudáveis. Veja o que causa isso, como diferenciar de estresse financeiro real e como destravar.",
    category: fromEnglish("money-dysmorphia").category,
    date: fromEnglish("money-dysmorphia").date,
    dateModified: fromEnglish("money-dysmorphia").dateModified,
    keywords: [
      "money dysmorphia",
      "sentir que está quebrado",
      "ansiedade financeira",
      "mentalidade financeira",
      "insegurança financeira",
    ],
    readingTime: 6,
    summary: [
      "Money dysmorphia descreve a distância entre sua realidade financeira e o jeito como essa realidade é sentida.",
      "Ela pode surgir por comparação social, histórico familiar, trauma financeiro ou metas que mudam sempre que são alcançadas.",
    ],
    sections: [
      {
        heading: "Sensação e dado não são a mesma coisa",
        body: [
          "A sensação de estar mal nem sempre significa que os números estão mal. Mas também não deve ser ignorada.",
          "O primeiro passo é olhar dados concretos: gastos, dívidas, poupança, renda e riscos reais.",
        ],
      },
      {
        heading: "Reduza a comparação",
        body: [
          "As redes sociais distorcem o que parece normal. Se sua referência é sempre alguém com mais renda, nenhum número parece suficiente.",
          "Defina o seu próprio suficiente antes de perseguir o de outra pessoa.",
        ],
      },
    ],
  },
  {
    slug: "ynab-vs-monarch-vs-savlo",
    title: "YNAB vs Monarch vs Savlo: uma comparação honesta de 2026",
    description:
      "Três apps de finanças pessoais, três filosofias diferentes. Compare YNAB, Monarch e Savlo para encontrar o que você realmente vai continuar usando daqui a seis meses.",
    category: fromEnglish("ynab-vs-monarch-vs-savlo").category,
    date: fromEnglish("ynab-vs-monarch-vs-savlo").date,
    dateModified: fromEnglish("ynab-vs-monarch-vs-savlo").dateModified,
    keywords: [
      "YNAB vs Monarch",
      "melhor app de orçamento",
      "Savlo vs YNAB",
      "alternativas ao Monarch Money",
    ],
    readingTime: 6,
    summary: [
      "YNAB, Monarch e Savlo não tentam resolver exatamente o mesmo problema emocional. Por isso compará-los só por recursos pode confundir.",
      "A pergunta útil é que tipo de relação você quer ter com o seu dinheiro.",
    ],
    sections: [
      {
        heading: "YNAB e Monarch",
        body: [
          "O YNAB é forte para controle proativo e orçamento base zero. Tem uma curva de aprendizado clara e pede participação frequente.",
          "O Monarch se destaca como um painel financeiro amplo, especialmente para patrimônio, contas conectadas e finanças compartilhadas.",
        ],
      },
      {
        heading: "Onde o Savlo entra",
        body: [
          "O Savlo mira pessoas que evitam olhar as finanças porque a experiência parece pesada ou ansiosa.",
          "A proposta se concentra em voz, espaços, sinking funds, importação/exportação e um design menos punitivo.",
        ],
      },
    ],
  },
]

export function getPortuguesePostBySlug(
  slug: string,
): PortugueseBlogPost | undefined {
  return portuguesePosts.find((post) => post.slug === slug)
}
