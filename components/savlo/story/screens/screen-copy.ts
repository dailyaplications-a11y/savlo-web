import type { Locale } from "@/lib/i18n"

/*
 * What the app says on each of the storyboard's screens, in the reader's
 * language. Same rules as the app: neutral Spanish with "tú", French "tu",
 * German "du"; a movement is a movimiento / Bewegung / mouvement, a fund a
 * fondo / Fonds / fonds. Dates are written out (screenDates), not left to
 * Intl: Node and the browser may space a range differently, and a page that
 * renders on both can't afford a mismatch.
 */

export type ScreenCopy = {
  nav: { today: string; accounts: string; budget: string; more: string }
  today: {
    title: string
    netWorth: string
    lastDays: string
    flow: string
    all: string
    activity: string
    todaySuffix: string
    funds: string
    fundsLine: string
    income: string
    expenses: string
  }
  // the "+" sheet (hoy_fab_menu.dart), as the app's ARB says it
  entry: {
    eyebrow: string
    title: string
    voice: string
    voiceHint: string
    text: string
    import: string
    manual: string
  }
  voice: {
    title: string
    hint: string
    listening: string
    // what is said, word by word: filler, amount or entity (the app's token kinds)
    words: [string, "f" | "a" | "e"][]
    editor: {
      count: string
      kinds: [string, string, string]
      date: string
      account: string
      repeat: string
      description: string
      category: string
      fund: string
      save: string
    }
  }
  imp: {
    eyebrow: string
    title: string
    body: string
    choose: string
    formats: string
    does: string
    steps: [string, string][]
    privacy: string
    // the import the step plays: reading the file, importing, the recurring found
    flow: {
      reading: string // eyebrow, after "Savlo AI ·"
      understanding: string
      rows: string // "660 rows"
      finding: string
      of: string // "1 of 5"
      checks: [string, string][] // label, what was found
      importing: string
      imported: string
      cancel: string
      account: string
      justImported: string
      preparing: string
      importingPill: string
      movements: [string, string, string, number][] // emoji, name, category, amount
      dates: [string, string, string] // the rows' dates, newest first
      review: string
      detected: string
      next: string
      recurringEyebrow: string
      recurringTitle: string
      recurringBody: string
      newLabel: string
      clearAll: string
      monthly: string
      recurring: [string, string, number][] // emoji, name, amount a month
      create: string
      aMonth: string
      notNow: string
    }
  }
  reports: {
    title: string
    all: string
    cashFlow: string
    inOut: [string, string]
    salary: string
    available: string
    cats: string[]
    other: string
    viewMovements: string
  }
  ai: {
    l1: string
    l2em: string
    l2: string
    fromData: string
    dataLine: string
    asks: [string, string][]
    composer: string
    disclaimer: string
    // the conversation the step plays; **…** is bold, as the app sets figures.
    // The answer embeds Reports' Cash flow section, as the chat really does.
    chat: {
      question: string
      thread: string
      status: string
      answer: string
      section: {
        title: string
        dates: string
        inOut: [string, string]
        in: string
        out: string
        savings: string
        months: string[] // Nov … Oct, the window's twelve months
      }
      deepen: string
      follow: [string, string]
      keepAsking: string
    }
  }
  budget: {
    tab: string
    funds: string
    month: string
    overall: string
    left: string
    spent: string
    byCategory: string
  }
  fund: {
    name: string
    due: string
    goal: string
    of: string
    aWeek: string
    vsPlan: string
    target: string
    activity: string
    moves: string
    month: string
    rowTitle: string
    rowSub: string
    add: string
  }
  recurring: {
    title: string
    perMonth: string
    expenses: string
    income: string
    total: string
    upcoming: string
    monthly: string
    tomorrow: string
    items: string[]
  }
}

export type ScreenDates = {
  axis: [string, string, string] // Sep 12, Sep 21, Oct 1 on the Today chart
  week: string[] // Sunday first, as the app's calendar
  range: string // the calendar's fortnight
  days: string[] // the four upcoming charges
  fundDate: string // the fund's target date, short
}

export const screenDates: Record<Locale, ScreenDates> = {
  en: {
    axis: ["Sep 12", "Sep 21", "Oct 1"],
    week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    range: "Oct 11 – 24",
    days: ["Mon, Oct 12", "Thu, Oct 15", "Sun, Oct 18", "Wed, Oct 21"],
    fundDate: "Jan 9 '27",
  },
  es: {
    axis: ["12 sep", "21 sep", "1 oct"],
    week: ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"],
    range: "11 – 24 oct",
    days: ["Lun, 12 oct", "Jue, 15 oct", "Dom, 18 oct", "Mié, 21 oct"],
    fundDate: "9 ene '27",
  },
  pt: {
    axis: ["12 set", "21 set", "1 out"],
    week: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    range: "11 – 24 out",
    days: ["Seg, 12 out", "Qui, 15 out", "Dom, 18 out", "Qua, 21 out"],
    fundDate: "9 jan '27",
  },
  de: {
    axis: ["12. Sep.", "21. Sep.", "1. Okt."],
    week: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
    range: "11.–24. Okt.",
    days: ["Mo., 12. Okt.", "Do., 15. Okt.", "So., 18. Okt.", "Mi., 21. Okt."],
    fundDate: "9. Jan. '27",
  },
  fr: {
    axis: ["12 sept.", "21 sept.", "1 oct."],
    week: ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"],
    range: "11 – 24 oct.",
    days: ["Lun. 12 oct.", "Jeu. 15 oct.", "Dim. 18 oct.", "Mer. 21 oct."],
    fundDate: "9 janv. '27",
  },
}

export const screenCopy: Record<Locale, ScreenCopy> = {
  en: {
    nav: { today: "Today", accounts: "Accounts", budget: "Budget", more: "More" },
    today: {
      title: "Today",
      netWorth: "Net worth",
      lastDays: "last 30 days",
      flow: "Flow · last 30 days",
      all: "ALL",
      activity: "Activity",
      todaySuffix: "today",
      funds: "Funds",
      fundsLine: "1 active",
      income: "Income",
      expenses: "Expenses",
    },
    entry: {
      eyebrow: "New movement",
      title: "How do you want to record?",
      voice: "Voice",
      voiceHint: "Record your voice, AI does the rest",
      text: "Text",
      import: "Import",
      manual: "Manual",
    },
    voice: {
      title: "Tap the mic and speak",
      hint: "“12 dollars on lunch”",
      listening: "Listening",
      words: [["Spent", "f"], ["24", "a"], ["at", "f"], ["the", "f"], ["supermarket", "e"]],
      editor: {
        count: "1 movement",
        kinds: ["Expenses", "Income", "Reserve"],
        date: "Today",
        account: "Primary account",
        repeat: "Once",
        description: "Supermarket",
        category: "Food",
        fund: "Pay from a fund",
        save: "Save",
      },
    },
    imp: {
      eyebrow: "Import",
      title: "Upload your history",
      body: "Bring your movements from another app or your bank. Savlo understands them and sorts them for you.",
      choose: "Choose your file",
      formats: "CSV, XLSX or XLS",
      does: "What Savlo does with it",
      steps: [
        ["Recognizes your format", "Columns, dates and currencies, no setup needed."],
        ["Categorizes every movement", "With Savlo AI, learning from how you already sort."],
        ["Finds your recurring payments", "Rent, subscriptions and salary, ready to track."],
      ],
      privacy: "Your data is never shared with anyone.",
      flow: {
        reading: "Reading",
        understanding: "Understanding your file",
        rows: "660 rows",
        finding: "What we're finding",
        of: "of",
        checks: [
          ["Format", "CSV · UTF-8 · , separated"],
          ["Date", "DD/MM/YYYY"],
          ["Description", "“Concept” column"],
          ["Amount", "− spent · + earned"],
          ["Category", "Learned by Savlo AI"],
        ],
        importing: "Importing your movements",
        imported: "Movements imported",
        cancel: "Cancel",
        account: "Primary account",
        justImported: "Just imported",
        preparing: "Importing movements",
        importingPill: "Savlo AI",
        movements: [
          ["🚗", "Transit", "transport", -12],
          ["🍽️", "Groceries", "food", -36],
          ["🎮", "Cinema", "entertainment", -19.39],
          ["🍽️", "Weekly groceries", "food", -80.82],
          ["🛍️", "Home essentials", "shopping", -57],
          ["🍽️", "Lunch", "food", -25.85],
          ["📺", "Music subscription", "subscriptions", -10.99],
        ],
        dates: ["Oct 11", "Oct 10", "Oct 9"],
        review: "Review recurring",
        detected: "detected",
        next: "Next",
        recurringEyebrow: "Recurring",
        recurringTitle: "Recurring found",
        recurringBody: "Pick which ones to track, and tap one to fix it. What you imported links to each rule — never duplicated.",
        newLabel: "New",
        clearAll: "Clear all",
        monthly: "Monthly",
        recurring: [
          ["💼", "Salary · Studio", 3200],
          ["🏠", "Rent", -1180],
          ["🛜", "Internet", -48],
          ["🏋️", "Gym membership", -42],
          ["📺", "Music subscription", -10.99],
          ["📱", "Mobile plan", -26],
        ],
        create: "Create {n} recurring",
        aMonth: "a month",
        notNow: "Not now",
      },
    },
    reports: {
      title: "Reports",
      all: "All",
      cashFlow: "Cash flow",
      inOut: ["In", "out"],
      salary: "Salary",
      available: "Available",
      cats: ["Housing", "Food", "Shopping", "Utilities"],
      other: "Other categories",
      viewMovements: "View 809 movements",
    },
    ai: {
      l1: "How can I",
      l2em: "help you",
      l2: "today?",
      fromData: "From your data",
      dataLine: "809 movements · 1 account",
      asks: [
        ["Will I reach my trip goal?", "A trip fund · 60% of $3,000"],
        ["What payments are coming up?", "Your recurring payments in October"],
        ["Why am I spending so much on Housing?", "82% of your spending this month"],
        ["Review my subscriptions", "8 active recurring charges"],
      ],
      composer: "Ask Savlo",
      disclaimer: "Savlo AI can make mistakes · This is not financial advice",
      chat: {
        question: "How's my cash flow this year?",
        thread: "Cash flow this year",
        status: "Checking your movements",
        answer:
          "Healthy. You brought in **$115,760** and spent **$66,931** over the last 12 months, so you kept **42%** of what you earned.",
        section: {
          title: "Cash flow",
          dates: "Nov 1, 2025 – Oct 11, 2026",
          inOut: ["In", "out"],
          in: "In",
          out: "Out",
          savings: "Savings rate",
          months: ["nov", "dec", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct"],
        },
        deepen: "Deepen",
        follow: ["Which month did I save the most?", "Where can I cut back?"],
        keepAsking: "Keep asking…",
      },
    },
    budget: {
      tab: "Budget",
      funds: "Funds",
      month: "October",
      overall: "Overall budget",
      left: "left this month",
      spent: "Spent",
      byCategory: "By category",
    },
    fund: {
      name: "A trip",
      due: "Due Jan 9, 2027 · 13 weeks left",
      goal: "Goal",
      of: "of",
      aWeek: "a week",
      vsPlan: "vs. plan today",
      target: "target date",
      activity: "Activity",
      moves: "1 move",
      month: "October",
      rowTitle: "Trip savings",
      rowSub: "Today · from Primary account",
      add: "Add money",
    },
    recurring: {
      title: "Recurring",
      perMonth: "Per month",
      expenses: "Expenses",
      income: "Income",
      total: "Total",
      upcoming: "Upcoming",
      monthly: "Monthly",
      tomorrow: "Tomorrow",
      items: ["Mobile plan", "Electricity", "Video subscription", "Language course"],
    },
  },

  es: {
    nav: { today: "Hoy", accounts: "Cuentas", budget: "Presupuesto", more: "Más" },
    today: {
      title: "Hoy",
      netWorth: "Patrimonio",
      lastDays: "últimos 30 días",
      flow: "Flujo · últimos 30 días",
      all: "TODO",
      activity: "Actividad",
      todaySuffix: "hoy",
      funds: "Fondos",
      fundsLine: "1 activo",
      income: "Ingresos",
      expenses: "Gastos",
    },
    entry: {
      eyebrow: "Nuevo movimiento",
      title: "¿Cómo quieres registrar?",
      voice: "Voz",
      voiceHint: "Graba tu voz, la IA lo procesa",
      text: "Texto",
      import: "Importar",
      manual: "Manual",
    },
    voice: {
      title: "Toca el micrófono y habla",
      hint: "“12 dólares en el almuerzo”",
      listening: "Escuchando",
      words: [["Gasté", "f"], ["24", "a"], ["en", "f"], ["el", "f"], ["supermercado", "e"]],
      editor: {
        count: "1 movimiento",
        kinds: ["Gastos", "Ingresos", "Reservar"],
        date: "Hoy",
        account: "Cuenta principal",
        repeat: "Una vez",
        description: "Supermercado",
        category: "Comida",
        fund: "Pagar con un fondo",
        save: "Guardar",
      },
    },
    imp: {
      eyebrow: "Importar",
      title: "Sube tu historial",
      body: "Trae tus movimientos de otra app o de tu banco. Savlo los entiende y los ordena por ti.",
      choose: "Elige tu archivo",
      formats: "CSV, XLSX o XLS",
      does: "Qué hace Savlo con él",
      steps: [
        ["Reconoce tu formato", "Columnas, fechas y monedas, sin configurar nada."],
        ["Categoriza cada movimiento", "Con Savlo AI, aprendiendo de cómo ya ordenas."],
        ["Encuentra tus pagos recurrentes", "Alquiler, suscripciones y sueldo, listos para seguir."],
      ],
      privacy: "Tus datos nunca se comparten con nadie.",
      flow: {
        reading: "Leyendo",
        understanding: "Entendiendo tu archivo",
        rows: "660 filas",
        finding: "Lo que vamos encontrando",
        of: "de",
        checks: [
          ["Formato", "CSV · UTF-8 · separado por ,"],
          ["Fecha", "DD/MM/AAAA"],
          ["Descripción", "Columna “Concepto”"],
          ["Monto", "− gastos · + ingresos"],
          ["Categoría", "Aprendida por Savlo AI"],
        ],
        importing: "Importando tus movimientos",
        imported: "Movimientos importados",
        cancel: "Cancelar",
        account: "Cuenta principal",
        justImported: "Recién importados",
        preparing: "Importando movimientos",
        importingPill: "Savlo AI",
        movements: [
          ["🚗", "Transporte", "transporte", -12],
          ["🍽️", "Supermercado", "comida", -36],
          ["🎮", "Cine", "entretenimiento", -19.39],
          ["🍽️", "Compras de la semana", "comida", -80.82],
          ["🛍️", "Cosas para la casa", "compras", -57],
          ["🍽️", "Almuerzo", "comida", -25.85],
          ["📺", "Suscripción de música", "suscripciones", -10.99],
        ],
        dates: ["11 oct", "10 oct", "9 oct"],
        review: "Revisar recurrentes",
        detected: "detectados",
        next: "Sigue",
        recurringEyebrow: "Recurrentes",
        recurringTitle: "Recurrentes encontrados",
        recurringBody: "Elige cuáles seguir y toca uno para corregirlo. Lo que importaste se enlaza a cada regla, nunca se duplica.",
        newLabel: "Nuevos",
        clearAll: "Quitar todos",
        monthly: "Mensual",
        recurring: [
          ["💼", "Sueldo · Estudio", 3200],
          ["🏠", "Alquiler", -1180],
          ["🛜", "Internet", -48],
          ["🏋️", "Gimnasio", -42],
          ["📺", "Suscripción de música", -10.99],
          ["📱", "Plan del celular", -26],
        ],
        create: "Crear {n} recurrentes",
        aMonth: "al mes",
        notNow: "Ahora no",
      },
    },
    reports: {
      title: "Reportes",
      all: "Todo",
      cashFlow: "Flujo de dinero",
      inOut: ["Entra", "sale"],
      salary: "Sueldo",
      available: "Disponible",
      cats: ["Vivienda", "Comida", "Compras", "Servicios"],
      other: "Otras categorías",
      viewMovements: "Ver 809 movimientos",
    },
    ai: {
      l1: "¿Cómo puedo",
      l2em: "ayudarte",
      l2: "hoy?",
      fromData: "De tus datos",
      dataLine: "809 movimientos · 1 cuenta",
      asks: [
        ["¿Llegaré a mi objetivo del viaje?", "Fondo Un viaje · 60% de $3,000"],
        ["¿Qué pagos se vienen?", "Tus pagos recurrentes de octubre"],
        ["¿Por qué gasto tanto en Vivienda?", "82% de tu gasto de este mes"],
        ["Revisa mis suscripciones", "8 cargos recurrentes activos"],
      ],
      composer: "Pregúntale a Savlo",
      disclaimer: "Savlo AI puede equivocarse · No es asesoramiento financiero",
      chat: {
        question: "¿Cómo viene mi flujo de dinero este año?",
        thread: "Flujo de dinero del año",
        status: "Revisando tus movimientos",
        answer:
          "Sano. Entraron **$115,760** y gastaste **$66,931** en los últimos 12 meses: te quedaste con el **42%** de lo que ganaste.",
        section: {
          title: "Flujo de dinero",
          dates: "1 nov 2025 – 11 oct 2026",
          inOut: ["Entra", "sale"],
          in: "Entra",
          out: "Sale",
          savings: "Tasa de ahorro",
          months: ["nov", "dic", "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct"],
        },
        deepen: "Profundizar",
        follow: ["¿En qué mes ahorré más?", "¿Dónde puedo recortar?"],
        keepAsking: "Sigue preguntando…",
      },
    },
    budget: {
      tab: "Presupuesto",
      funds: "Fondos",
      month: "Octubre",
      overall: "Presupuesto total",
      left: "te quedan este mes",
      spent: "Gastado",
      byCategory: "Por categoría",
    },
    fund: {
      name: "Un viaje",
      due: "Vence el 9 ene 2027 · faltan 13 semanas",
      goal: "Objetivo",
      of: "de",
      aWeek: "por semana",
      vsPlan: "vs. el plan hoy",
      target: "fecha objetivo",
      activity: "Actividad",
      moves: "1 movimiento",
      month: "Octubre",
      rowTitle: "Ahorro del viaje",
      rowSub: "Hoy · desde Cuenta principal",
      add: "Agregar dinero",
    },
    recurring: {
      title: "Recurrentes",
      perMonth: "Por mes",
      expenses: "Gastos",
      income: "Ingresos",
      total: "Total",
      upcoming: "Próximos",
      monthly: "Mensual",
      tomorrow: "Mañana",
      items: ["Plan del celular", "Electricidad", "Suscripción de video", "Curso de idiomas"],
    },
  },

  pt: {
    nav: { today: "Hoje", accounts: "Contas", budget: "Orçamento", more: "Mais" },
    today: {
      title: "Hoje",
      netWorth: "Patrimônio",
      lastDays: "últimos 30 dias",
      flow: "Fluxo · últimos 30 dias",
      all: "TUDO",
      activity: "Atividade",
      todaySuffix: "hoje",
      funds: "Fundos",
      fundsLine: "1 ativo",
      income: "Receitas",
      expenses: "Despesas",
    },
    entry: {
      eyebrow: "Novo movimento",
      title: "Como você quer registrar?",
      voice: "Voz",
      voiceHint: "Grave sua voz, a IA faz o resto",
      text: "Texto",
      import: "Importar",
      manual: "Manual",
    },
    voice: {
      title: "Toque no microfone e fale",
      hint: "“12 dólares no almoço”",
      listening: "Ouvindo",
      words: [["Gastei", "f"], ["24", "a"], ["no", "f"], ["supermercado", "e"]],
      editor: {
        count: "1 movimento",
        kinds: ["Despesas", "Receitas", "Reservar"],
        date: "Hoje",
        account: "Conta principal",
        repeat: "Uma vez",
        description: "Supermercado",
        category: "Comida",
        fund: "Pagar com um fundo",
        save: "Salvar",
      },
    },
    imp: {
      eyebrow: "Importar",
      title: "Envie seu histórico",
      body: "Traga seus movimentos de outro app ou do seu banco. O Savlo entende e organiza tudo para você.",
      choose: "Escolha seu arquivo",
      formats: "CSV, XLSX ou XLS",
      does: "O que o Savlo faz com ele",
      steps: [
        ["Reconhece seu formato", "Colunas, datas e moedas, sem configurar nada."],
        ["Categoriza cada movimento", "Com o Savlo AI, aprendendo com o jeito que você organiza."],
        ["Encontra seus pagamentos recorrentes", "Aluguel, assinaturas e salário, prontos para acompanhar."],
      ],
      privacy: "Seus dados nunca são compartilhados com ninguém.",
      flow: {
        reading: "Lendo",
        understanding: "Entendendo seu arquivo",
        rows: "660 linhas",
        finding: "O que estamos encontrando",
        of: "de",
        checks: [
          ["Formato", "CSV · UTF-8 · separado por ,"],
          ["Data", "DD/MM/AAAA"],
          ["Descrição", "Coluna “Histórico”"],
          ["Valor", "− gastos · + receitas"],
          ["Categoria", "Aprendida pelo Savlo AI"],
        ],
        importing: "Importando seus movimentos",
        imported: "Movimentos importados",
        cancel: "Cancelar",
        account: "Conta principal",
        justImported: "Recém-importados",
        preparing: "Importando movimentos",
        importingPill: "Savlo AI",
        movements: [
          ["🚗", "Transporte", "transporte", -12],
          ["🍽️", "Mercado", "comida", -36],
          ["🎮", "Cinema", "entretenimento", -19.39],
          ["🍽️", "Compras da semana", "comida", -80.82],
          ["🛍️", "Coisas para casa", "compras", -57],
          ["🍽️", "Almoço", "comida", -25.85],
          ["📺", "Assinatura de música", "assinaturas", -10.99],
        ],
        dates: ["11 out", "10 out", "9 out"],
        review: "Revisar recorrentes",
        detected: "detectados",
        next: "Próximo",
        recurringEyebrow: "Recorrentes",
        recurringTitle: "Recorrentes encontrados",
        recurringBody: "Escolha quais acompanhar e toque em um para corrigir. O que você importou se liga a cada regra, nunca se duplica.",
        newLabel: "Novos",
        clearAll: "Limpar tudo",
        monthly: "Mensal",
        recurring: [
          ["💼", "Salário · Estúdio", 3200],
          ["🏠", "Aluguel", -1180],
          ["🛜", "Internet", -48],
          ["🏋️", "Academia", -42],
          ["📺", "Assinatura de música", -10.99],
          ["📱", "Plano do celular", -26],
        ],
        create: "Criar {n} recorrentes",
        aMonth: "por mês",
        notNow: "Agora não",
      },
    },
    reports: {
      title: "Relatórios",
      all: "Tudo",
      cashFlow: "Fluxo de caixa",
      inOut: ["Entra", "sai"],
      salary: "Salário",
      available: "Disponível",
      cats: ["Moradia", "Comida", "Compras", "Contas"],
      other: "Outras categorias",
      viewMovements: "Ver 809 movimentos",
    },
    ai: {
      l1: "Como posso",
      l2em: "te ajudar",
      l2: "hoje?",
      fromData: "Dos seus dados",
      dataLine: "809 movimentos · 1 conta",
      asks: [
        ["Vou chegar ao objetivo da viagem?", "Fundo Uma viagem · 60% de $3.000"],
        ["Quais pagamentos estão chegando?", "Seus pagamentos recorrentes de outubro"],
        ["Por que gasto tanto com Moradia?", "82% dos seus gastos neste mês"],
        ["Revise minhas assinaturas", "8 cobranças recorrentes ativas"],
      ],
      composer: "Pergunte ao Savlo",
      disclaimer: "O Savlo AI pode errar · Isto não é aconselhamento financeiro",
      chat: {
        question: "Como está meu fluxo de caixa este ano?",
        thread: "Fluxo de caixa do ano",
        status: "Verificando seus movimentos",
        answer:
          "Saudável. Entraram **$115.760** e você gastou **$66.931** nos últimos 12 meses: ficou com **42%** do que ganhou.",
        section: {
          title: "Fluxo de caixa",
          dates: "1 nov 2025 – 11 out 2026",
          inOut: ["Entra", "sai"],
          in: "Entra",
          out: "Sai",
          savings: "Taxa de poupança",
          months: ["nov", "dez", "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out"],
        },
        deepen: "Aprofundar",
        follow: ["Em que mês economizei mais?", "Onde posso cortar?"],
        keepAsking: "Continue perguntando…",
      },
    },
    budget: {
      tab: "Orçamento",
      funds: "Fundos",
      month: "Outubro",
      overall: "Orçamento total",
      left: "sobrando este mês",
      spent: "Gasto",
      byCategory: "Por categoria",
    },
    fund: {
      name: "Uma viagem",
      due: "Vence em 9 jan 2027 · faltam 13 semanas",
      goal: "Objetivo",
      of: "de",
      aWeek: "por semana",
      vsPlan: "vs. o plano hoje",
      target: "data objetivo",
      activity: "Atividade",
      moves: "1 movimento",
      month: "Outubro",
      rowTitle: "Economia da viagem",
      rowSub: "Hoje · da Conta principal",
      add: "Adicionar dinheiro",
    },
    recurring: {
      title: "Recorrentes",
      perMonth: "Por mês",
      expenses: "Despesas",
      income: "Receitas",
      total: "Total",
      upcoming: "Próximos",
      monthly: "Mensal",
      tomorrow: "Amanhã",
      items: ["Plano do celular", "Energia", "Assinatura de vídeo", "Curso de idiomas"],
    },
  },

  de: {
    nav: { today: "Heute", accounts: "Konten", budget: "Budget", more: "Mehr" },
    today: {
      title: "Heute",
      netWorth: "Vermögen",
      lastDays: "letzte 30 Tage",
      flow: "Fluss · letzte 30 Tage",
      all: "ALLE",
      activity: "Aktivität",
      todaySuffix: "heute",
      funds: "Fonds",
      fundsLine: "1 aktiv",
      income: "Einnahmen",
      expenses: "Ausgaben",
    },
    entry: {
      eyebrow: "Neue Bewegung",
      title: "Wie möchtest du aufnehmen?",
      voice: "Stimme",
      voiceHint: "Sprich es ein, die KI macht den Rest",
      text: "Text",
      import: "Importieren",
      manual: "Manuell",
    },
    voice: {
      title: "Tippe aufs Mikro und sprich",
      hint: "„12 Dollar fürs Mittagessen“",
      listening: "Hört zu",
      words: [["24", "a"], ["im", "f"], ["Supermarkt", "e"], ["ausgegeben", "f"]],
      editor: {
        count: "1 Bewegung",
        kinds: ["Ausgaben", "Einnahmen", "Zurücklegen"],
        date: "Heute",
        account: "Hauptkonto",
        repeat: "Einmalig",
        description: "Supermarkt",
        category: "Essen",
        fund: "Mit einem Fonds zahlen",
        save: "Speichern",
      },
    },
    imp: {
      eyebrow: "Import",
      title: "Lade deinen Verlauf hoch",
      body: "Bring deine Bewegungen aus einer anderen App oder von deiner Bank mit. Savlo versteht und sortiert sie für dich.",
      choose: "Wähle deine Datei",
      formats: "CSV, XLSX oder XLS",
      does: "Was Savlo damit macht",
      steps: [
        ["Erkennt dein Format", "Spalten, Daten und Währungen, ohne Einrichtung."],
        ["Kategorisiert jede Bewegung", "Mit Savlo AI, das lernt, wie du sortierst."],
        ["Findet deine wiederkehrenden Zahlungen", "Miete, Abos und Gehalt, bereit zum Verfolgen."],
      ],
      privacy: "Deine Daten werden mit niemandem geteilt.",
      flow: {
        reading: "Liest",
        understanding: "Deine Datei wird gelesen",
        rows: "660 Zeilen",
        finding: "Was wir finden",
        of: "von",
        checks: [
          ["Format", "CSV · UTF-8 · durch , getrennt"],
          ["Datum", "TT.MM.JJJJ"],
          ["Beschreibung", "„Verwendungszweck“"],
          ["Betrag", "− Ausgaben · + Einnahmen"],
          ["Kategorie", "Von Savlo AI gelernt"],
        ],
        importing: "Deine Bewegungen werden importiert",
        imported: "Bewegungen importiert",
        cancel: "Abbrechen",
        account: "Hauptkonto",
        justImported: "Gerade importiert",
        preparing: "Import läuft",
        importingPill: "Savlo AI",
        movements: [
          ["🚗", "Nahverkehr", "transport", -12],
          ["🍽️", "Lebensmittel", "essen", -36],
          ["🎮", "Kino", "freizeit", -19.39],
          ["🍽️", "Wocheneinkauf", "essen", -80.82],
          ["🛍️", "Haushalt", "shopping", -57],
          ["🍽️", "Mittagessen", "essen", -25.85],
          ["📺", "Musik-Abo", "abos", -10.99],
        ],
        dates: ["11. Okt.", "10. Okt.", "9. Okt."],
        review: "Wiederkehrende prüfen",
        detected: "erkannt",
        next: "Als Nächstes",
        recurringEyebrow: "Wiederkehrend",
        recurringTitle: "Wiederkehrende gefunden",
        recurringBody: "Wähle aus, welche du verfolgen willst, und tippe zum Korrigieren. Was du importiert hast, hängt an jeder Regel – nie doppelt.",
        newLabel: "Neu",
        clearAll: "Alle abwählen",
        monthly: "Monatlich",
        recurring: [
          ["💼", "Gehalt · Studio", 3200],
          ["🏠", "Miete", -1180],
          ["🛜", "Internet", -48],
          ["🏋️", "Fitnessstudio", -42],
          ["📺", "Musik-Abo", -10.99],
          ["📱", "Handyvertrag", -26],
        ],
        create: "Alle {n} anlegen",
        aMonth: "pro Monat",
        notNow: "Jetzt nicht",
      },
    },
    reports: {
      title: "Berichte",
      all: "Alle",
      cashFlow: "Geldfluss",
      inOut: ["Rein", "raus"],
      salary: "Gehalt",
      available: "Verfügbar",
      cats: ["Wohnen", "Essen", "Shopping", "Nebenkosten"],
      other: "Andere Kategorien",
      viewMovements: "809 Bewegungen ansehen",
    },
    ai: {
      l1: "Wie kann ich",
      l2em: "dir helfen",
      l2: "heute?",
      fromData: "Aus deinen Daten",
      dataLine: "809 Bewegungen · 1 Konto",
      asks: [
        ["Erreiche ich mein Reiseziel?", "Fonds Eine Reise · 60 % von $3.000"],
        ["Welche Zahlungen stehen an?", "Deine wiederkehrenden Zahlungen im Oktober"],
        ["Warum gebe ich so viel fürs Wohnen aus?", "82 % deiner Ausgaben diesen Monat"],
        ["Prüfe meine Abos", "8 aktive wiederkehrende Abbuchungen"],
      ],
      composer: "Frag Savlo",
      disclaimer: "Savlo AI kann sich irren · Keine Finanzberatung",
      chat: {
        question: "Wie läuft mein Geldfluss dieses Jahr?",
        thread: "Geldfluss dieses Jahr",
        status: "Prüfe deine Bewegungen",
        answer:
          "Gesund. Rein kamen **$115.760**, ausgegeben hast du **$66.931** in den letzten 12 Monaten: Du hast **42 %** behalten.",
        section: {
          title: "Geldfluss",
          dates: "1. Nov. 2025 – 11. Okt. 2026",
          inOut: ["Rein", "raus"],
          in: "Rein",
          out: "Raus",
          savings: "Sparquote",
          months: ["Nov", "Dez", "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt"],
        },
        deepen: "Vertiefen",
        follow: ["In welchem Monat habe ich am meisten gespart?", "Wo kann ich sparen?"],
        keepAsking: "Frag weiter…",
      },
    },
    budget: {
      tab: "Budget",
      funds: "Fonds",
      month: "Oktober",
      overall: "Gesamtbudget",
      left: "übrig diesen Monat",
      spent: "Ausgegeben",
      byCategory: "Nach Kategorie",
    },
    fund: {
      name: "Eine Reise",
      due: "Fällig am 9. Jan. 2027 · noch 13 Wochen",
      goal: "Ziel",
      of: "von",
      aWeek: "pro Woche",
      vsPlan: "vs. Plan heute",
      target: "Zieldatum",
      activity: "Aktivität",
      moves: "1 Bewegung",
      month: "Oktober",
      rowTitle: "Reisekasse",
      rowSub: "Heute · vom Hauptkonto",
      add: "Geld hinzufügen",
    },
    recurring: {
      title: "Wiederkehrend",
      perMonth: "Pro Monat",
      expenses: "Ausgaben",
      income: "Einnahmen",
      total: "Gesamt",
      upcoming: "Demnächst",
      monthly: "Monatlich",
      tomorrow: "Morgen",
      items: ["Handyvertrag", "Strom", "Video-Abo", "Sprachkurs"],
    },
  },

  fr: {
    nav: { today: "Aujourd'hui", accounts: "Comptes", budget: "Budget", more: "Plus" },
    today: {
      title: "Aujourd'hui",
      netWorth: "Patrimoine",
      lastDays: "30 derniers jours",
      flow: "Flux · 30 derniers jours",
      all: "TOUT",
      activity: "Activité",
      todaySuffix: "aujourd'hui",
      funds: "Fonds",
      fundsLine: "1 actif",
      income: "Revenus",
      expenses: "Dépenses",
    },
    entry: {
      eyebrow: "Nouveau mouvement",
      title: "Comment veux-tu enregistrer ?",
      voice: "Voix",
      voiceHint: "Enregistre ta voix, l'IA s'en charge",
      text: "Texte",
      import: "Importer",
      manual: "Manuel",
    },
    voice: {
      title: "Touche le micro et parle",
      hint: "« 12 dollars pour le déjeuner »",
      listening: "J'écoute",
      words: [["J'ai", "f"], ["dépensé", "f"], ["24", "a"], ["au", "f"], ["supermarché", "e"]],
      editor: {
        count: "1 mouvement",
        kinds: ["Dépenses", "Revenus", "Réserver"],
        date: "Aujourd'hui",
        account: "Compte principal",
        repeat: "Une fois",
        description: "Supermarché",
        category: "Repas",
        fund: "Payer avec un fonds",
        save: "Enregistrer",
      },
    },
    imp: {
      eyebrow: "Import",
      title: "Importe ton historique",
      body: "Apporte tes mouvements d'une autre app ou de ta banque. Savlo les comprend et les trie pour toi.",
      choose: "Choisis ton fichier",
      formats: "CSV, XLSX ou XLS",
      does: "Ce que Savlo en fait",
      steps: [
        ["Reconnaît ton format", "Colonnes, dates et devises, sans réglage."],
        ["Catégorise chaque mouvement", "Avec Savlo AI, qui apprend de ta façon de trier."],
        ["Trouve tes paiements récurrents", "Loyer, abonnements et salaire, prêts à suivre."],
      ],
      privacy: "Tes données ne sont jamais partagées.",
      flow: {
        reading: "Lecture",
        understanding: "Lecture de ton fichier",
        rows: "660 lignes",
        finding: "Ce qu'on trouve",
        of: "sur",
        checks: [
          ["Format", "CSV · UTF-8 · séparé par ,"],
          ["Date", "JJ/MM/AAAA"],
          ["Description", "Colonne « Libellé »"],
          ["Montant", "− dépenses · + revenus"],
          ["Catégorie", "Apprise par Savlo AI"],
        ],
        importing: "Import de tes mouvements",
        imported: "Mouvements importés",
        cancel: "Annuler",
        account: "Compte principal",
        justImported: "Tout juste importés",
        preparing: "Import des mouvements",
        importingPill: "Savlo AI",
        movements: [
          ["🚗", "Transports", "transport", -12],
          ["🍽️", "Courses", "repas", -36],
          ["🎮", "Cinéma", "loisirs", -19.39],
          ["🍽️", "Courses de la semaine", "repas", -80.82],
          ["🛍️", "Maison", "achats", -57],
          ["🍽️", "Déjeuner", "repas", -25.85],
          ["📺", "Abonnement musique", "abonnements", -10.99],
        ],
        dates: ["11 oct.", "10 oct.", "9 oct."],
        review: "Revoir les récurrents",
        detected: "détectés",
        next: "Ensuite",
        recurringEyebrow: "Récurrents",
        recurringTitle: "Récurrents trouvés",
        recurringBody: "Choisis ceux à suivre et touche-en un pour le corriger. Ce que tu as importé se rattache à chaque règle, jamais en double.",
        newLabel: "Nouveaux",
        clearAll: "Tout décocher",
        monthly: "Mensuel",
        recurring: [
          ["💼", "Salaire · Studio", 3200],
          ["🏠", "Loyer", -1180],
          ["🛜", "Internet", -48],
          ["🏋️", "Salle de sport", -42],
          ["📺", "Abonnement musique", -10.99],
          ["📱", "Forfait mobile", -26],
        ],
        create: "Créer {n} récurrents",
        aMonth: "par mois",
        notNow: "Pas maintenant",
      },
    },
    reports: {
      title: "Rapports",
      all: "Tout",
      cashFlow: "Flux d'argent",
      inOut: ["Entrées", "sorties"],
      salary: "Salaire",
      available: "Disponible",
      cats: ["Logement", "Repas", "Achats", "Factures"],
      other: "Autres catégories",
      viewMovements: "Voir 809 mouvements",
    },
    ai: {
      l1: "Comment puis-je",
      l2em: "t'aider",
      l2: "aujourd'hui ?",
      fromData: "D'après tes données",
      dataLine: "809 mouvements · 1 compte",
      asks: [
        ["Vais-je atteindre mon objectif voyage ?", "Fonds Un voyage · 60 % de $3 000"],
        ["Quels paiements arrivent ?", "Tes paiements récurrents d'octobre"],
        ["Pourquoi je dépense autant en Logement ?", "82 % de tes dépenses ce mois-ci"],
        ["Revois mes abonnements", "8 prélèvements récurrents actifs"],
      ],
      composer: "Demande à Savlo",
      disclaimer: "Savlo AI peut se tromper · Ceci n'est pas un conseil financier",
      chat: {
        question: "Comment va mon flux d'argent cette année ?",
        thread: "Flux d'argent de l'année",
        status: "Je vérifie tes mouvements",
        answer:
          "Sain. Il est entré **$115 760** et tu as dépensé **$66 931** sur les 12 derniers mois : tu as gardé **42 %** de ce que tu as gagné.",
        section: {
          title: "Flux d'argent",
          dates: "1 nov. 2025 – 11 oct. 2026",
          inOut: ["Entrées", "sorties"],
          in: "Entrées",
          out: "Sorties",
          savings: "Taux d'épargne",
          months: ["nov.", "déc.", "janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct."],
        },
        deepen: "Approfondir",
        follow: ["Quel mois ai-je le plus épargné ?", "Où puis-je réduire ?"],
        keepAsking: "Continue à demander…",
      },
    },
    budget: {
      tab: "Budget",
      funds: "Fonds",
      month: "Octobre",
      overall: "Budget global",
      left: "restants ce mois-ci",
      spent: "Dépensé",
      byCategory: "Par catégorie",
    },
    fund: {
      name: "Un voyage",
      due: "Échéance 9 janv. 2027 · encore 13 semaines",
      goal: "Objectif",
      of: "sur",
      aWeek: "par semaine",
      vsPlan: "vs. le plan",
      target: "date cible",
      activity: "Activité",
      moves: "1 mouvement",
      month: "Octobre",
      rowTitle: "Épargne voyage",
      rowSub: "Aujourd'hui · du Compte principal",
      add: "Ajouter de l'argent",
    },
    recurring: {
      title: "Récurrents",
      perMonth: "Par mois",
      expenses: "Dépenses",
      income: "Revenus",
      total: "Total",
      upcoming: "À venir",
      monthly: "Mensuel",
      tomorrow: "Demain",
      items: ["Forfait mobile", "Électricité", "Abonnement vidéo", "Cours de langue"],
    },
  },
}
