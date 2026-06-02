import { posts, type BlogCategory } from "@/lib/blog/posts"

export type SpanishBlogPost = {
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

export const spanishPosts: SpanishBlogPost[] = [
  {
    slug: "how-to-make-a-budget",
    title: "Cómo hacer un presupuesto mensual sin culpa",
    description:
      "Una guía tranquila para crear un presupuesto realista, entender tus gastos y volver a mirar tu dinero sin ansiedad.",
    category: fromEnglish("how-to-make-a-budget").category,
    date: fromEnglish("how-to-make-a-budget").date,
    dateModified: fromEnglish("how-to-make-a-budget").dateModified,
    keywords: [
      "cómo hacer un presupuesto",
      "presupuesto mensual",
      "presupuesto para principiantes",
      "app de presupuesto",
    ],
    readingTime: 8,
    summary: [
      "Un presupuesto no debería sentirse como una dieta financiera. Sirve para decidir antes de gastar, no para castigarte después.",
      "La forma más sostenible empieza con tu ingreso neto, pocas categorías, un fondo de emergencia y una revisión semanal breve.",
    ],
    sections: [
      {
        heading: "Empieza con el dinero que realmente llega",
        body: [
          "Presupuesta con tu ingreso neto, no con el bruto. Si tus ingresos varían, usa el mes más bajo como base y deja los meses mejores como margen.",
          "Ese pequeño ajuste evita construir un plan sobre optimismo. Un presupuesto útil tiene que sobrevivir a un mes normal, no solo al mes ideal.",
        ],
      },
      {
        heading: "Usa pocas categorías",
        body: [
          "La mayoría abandona el presupuesto porque intenta clasificar demasiado. Empieza con vivienda, comida, transporte, salud, deudas, ahorro, metas y gastos personales.",
          "Luego puedes usar métodos como la regla 50/30/20 o el presupuesto base cero. La estructura importa menos que la capacidad de volver a mirarla cada semana.",
        ],
      },
      {
        heading: "Revisa una vez por semana",
        body: [
          "Mirar el dinero todos los días puede generar hipervigilancia. Mirarlo solo a fin de mes llega tarde. Una revisión semanal de 10 minutos suele ser el punto medio.",
          "Savlo está pensado para ese ritmo: registrar rápido, separar por espacios y fondos, y volver al sistema sin números rojos que te griten.",
        ],
      },
    ],
  },
  {
    slug: "50-30-20-rule",
    title: "Regla 50/30/20: cómo aplicarla sin rigidez",
    description:
      "La regla 50/30/20 explicada con una mirada flexible para necesidades, deseos y futuro financiero.",
    category: fromEnglish("50-30-20-rule").category,
    date: fromEnglish("50-30-20-rule").date,
    dateModified: fromEnglish("50-30-20-rule").dateModified,
    keywords: [
      "regla 50/30/20",
      "presupuesto 50 30 20",
      "cómo dividir ingresos",
      "método de presupuesto",
    ],
    readingTime: 5,
    summary: [
      "La regla 50/30/20 divide tu ingreso en necesidades, deseos y futuro. Es una brújula, no una sentencia.",
      "Funciona mejor cuando la adaptas a tu ciudad, tus ingresos y tu etapa de vida.",
    ],
    sections: [
      {
        heading: "Qué significa cada porcentaje",
        body: [
          "El 50% cubre necesidades: vivienda, comida básica, transporte, salud, seguros y pagos mínimos de deuda.",
          "El 30% cubre deseos: salidas, suscripciones, hobbies y compras no esenciales. El 20% va al futuro: ahorro, inversión, deudas y fondos específicos.",
        ],
      },
      {
        heading: "Cuándo ajustar la regla",
        body: [
          "Si vives en una ciudad cara, quizá tus necesidades sean 60%. Eso no significa fracaso; significa que el resto del plan debe ser honesto.",
          "La regla se vuelve útil cuando reduce decisiones, no cuando te obliga a sentir culpa por vivir en una realidad distinta al ejemplo.",
        ],
      },
    ],
  },
  {
    slug: "best-mint-alternatives-2025",
    title: "Mejores alternativas a Mint en 2025",
    description:
      "Qué buscar después del cierre de Mint: privacidad, precio, facilidad de uso y alternativas sin conexión bancaria obligatoria.",
    category: fromEnglish("best-mint-alternatives-2025").category,
    date: fromEnglish("best-mint-alternatives-2025").date,
    dateModified: fromEnglish("best-mint-alternatives-2025").dateModified,
    keywords: [
      "alternativas a Mint",
      "apps como Mint",
      "mejor app de presupuesto",
      "app finanzas personales",
    ],
    readingTime: 6,
    summary: [
      "Después de Mint, muchas personas buscan una app que no convierta sus finanzas en otro panel lleno de ruido.",
      "La mejor alternativa depende de lo que más valoras: automatización, control, privacidad o una experiencia más calmada.",
    ],
    sections: [
      {
        heading: "Qué comparar primero",
        body: [
          "Mira si la app exige vincular bancos, qué hace con tus datos, cuánto cuesta después del periodo inicial y si puedes exportar tu información.",
          "También importa la sensación de uso. Si una app te da ansiedad, es menos probable que la abras cuando más la necesitas.",
        ],
      },
      {
        heading: "Dónde encaja Savlo",
        body: [
          "Savlo se posiciona como una alternativa más tranquila: registro por voz, importación de CSV/XLSX, espacios separados y sinking funds.",
          "No intenta ser un tablero de control agresivo. Intenta ayudarte a volver a mirar tu dinero con menos fricción.",
        ],
      },
    ],
  },
  {
    slug: "emergency-fund-vs-sinking-fund",
    title: "Fondo de emergencia vs sinking fund: cuál es la diferencia",
    description:
      "Aprende a separar imprevistos reales de gastos previsibles para ahorrar con más claridad.",
    category: fromEnglish("emergency-fund-vs-sinking-fund").category,
    date: fromEnglish("emergency-fund-vs-sinking-fund").date,
    dateModified: fromEnglish("emergency-fund-vs-sinking-fund").dateModified,
    keywords: [
      "fondo de emergencia",
      "sinking fund",
      "fondo de ahorro",
      "ahorro para gastos grandes",
    ],
    readingTime: 5,
    summary: [
      "El fondo de emergencia protege ante lo inesperado. Un sinking fund prepara gastos grandes que sí puedes anticipar.",
      "Separarlos reduce la tentación de usar tu colchón de seguridad para vacaciones, regalos o mantenimiento.",
    ],
    sections: [
      {
        heading: "Cuándo usar un fondo de emergencia",
        body: [
          "Úsalo para pérdida de ingresos, reparaciones urgentes, salud o situaciones que no estaban en el calendario.",
          "Su objetivo principal es darte margen mental. No es dinero para optimizar; es dinero para dormir mejor.",
        ],
      },
      {
        heading: "Cuándo usar un sinking fund",
        body: [
          "Úsalo para gastos previsibles: vacaciones, impuestos, regalos, mantenimiento del auto, mudanzas o renovación de tecnología.",
          "Cada fondo tiene nombre y propósito. Esa etiqueta ayuda a tu cerebro a no mezclar todo en una bolsa confusa.",
        ],
      },
    ],
  },
  {
    slug: "why-traditional-budgets-fail",
    title: "Por qué fallan los presupuestos tradicionales",
    description:
      "La respuesta desde las finanzas conductuales: culpa, fricción y sistemas que no respetan cómo funciona la atención humana.",
    category: fromEnglish("why-traditional-budgets-fail").category,
    date: fromEnglish("why-traditional-budgets-fail").date,
    dateModified: fromEnglish("why-traditional-budgets-fail").dateModified,
    keywords: [
      "por qué fallan los presupuestos",
      "finanzas conductuales",
      "psicología del dinero",
      "ansiedad financiera",
    ],
    readingTime: 6,
    summary: [
      "Muchos presupuestos fallan porque se diseñan como castigo. Cuando un sistema avergüenza, la respuesta natural es evitarlo.",
      "Un mejor diseño reduce fricción, usa lenguaje amable y permite volver después de equivocarte.",
    ],
    sections: [
      {
        heading: "La culpa no crea constancia",
        body: [
          "Las alertas rojas y los mensajes de fracaso pueden funcionar un día, pero rara vez construyen una relación estable con el dinero.",
          "La constancia aparece cuando el sistema es fácil de retomar. Un presupuesto abandonado no necesita más presión; necesita menos amenaza.",
        ],
      },
      {
        heading: "La fricción importa",
        body: [
          "Si registrar un gasto tarda demasiado, tu yo cansado no lo hará. Por eso Savlo prioriza check-ins breves, voz e importaciones.",
          "El objetivo es que el hábito sea liviano antes de pedirte disciplina.",
        ],
      },
    ],
  },
  {
    slug: "voice-expense-tracking",
    title: "Registro de gastos por voz: la forma más rápida de anotar lo que gastas",
    description:
      "Cómo funciona el registro por voz, para quién sirve y qué mirar antes de elegir una app.",
    category: fromEnglish("voice-expense-tracking").category,
    date: fromEnglish("voice-expense-tracking").date,
    dateModified: fromEnglish("voice-expense-tracking").dateModified,
    keywords: [
      "registro de gastos por voz",
      "app gastos por voz",
      "seguimiento de gastos",
      "presupuesto sin escribir",
    ],
    readingTime: 5,
    summary: [
      "Escribir cada gasto puede sentirse pequeño, hasta que tienes que hacerlo todos los días. Decirlo en voz alta baja la fricción.",
      "El registro por voz funciona mejor para compras cotidianas, comidas, transporte y gastos que normalmente olvidarías anotar.",
    ],
    sections: [
      {
        heading: "Por qué ayuda",
        body: [
          "La voz captura el gasto cerca del momento real. Eso reduce olvidos y evita reconstruir el día desde el resumen bancario.",
          "También se siente menos administrativo. Para muchas personas, esa diferencia emocional decide si el hábito sobrevive.",
        ],
      },
      {
        heading: "Qué evaluar en una app",
        body: [
          "Busca claridad sobre privacidad, idiomas soportados, edición manual, categorías y exportación.",
          "Savlo comunica soporte para inglés y español, junto con una experiencia pensada para check-ins rápidos y revisión tranquila.",
        ],
      },
    ],
  },
  {
    slug: "financial-anxiety",
    title: "Ansiedad financiera: hábitos diarios para calmar la relación con el dinero",
    description:
      "La ansiedad financiera no siempre depende de cuánto ganas. Aprende prácticas pequeñas para volver a mirar tus números.",
    category: fromEnglish("financial-anxiety").category,
    date: fromEnglish("financial-anxiety").date,
    dateModified: fromEnglish("financial-anxiety").dateModified,
    keywords: [
      "ansiedad financiera",
      "estrés por dinero",
      "bienestar financiero",
      "hábitos financieros",
    ],
    readingTime: 6,
    summary: [
      "La ansiedad financiera mezcla números, memoria, comparación y miedo. No se arregla solo con una hoja de cálculo.",
      "Ayuda crear rituales pequeños: mirar el dinero en un horario definido, usar categorías amables y separar decisiones de emociones.",
    ],
    sections: [
      {
        heading: "Mira menos veces, pero mejor",
        body: [
          "Revisar compulsivamente puede aumentar el estrés. Evitar por completo también. Una ventana semanal y tranquila suele funcionar mejor.",
          "El objetivo es que mirar tus finanzas deje de ser una emergencia emocional.",
        ],
      },
      {
        heading: "Diseña un sistema amable",
        body: [
          "Pon nombres humanos a tus fondos, automatiza lo que se repite y reduce el número de decisiones diarias.",
          "Una app calmada no reemplaza ayuda profesional cuando hace falta, pero sí puede bajar la fricción de volver a tus números.",
        ],
      },
    ],
  },
  {
    slug: "sinking-funds",
    title: "Sinking funds: guía completa para ahorrar sin estrés",
    description:
      "Convierte gastos grandes y previsibles en aportes pequeños mensuales con fondos de ahorro específicos.",
    category: fromEnglish("sinking-funds").category,
    date: fromEnglish("sinking-funds").date,
    dateModified: fromEnglish("sinking-funds").dateModified,
    keywords: [
      "sinking funds",
      "fondos de ahorro",
      "ahorrar para metas",
      "gastos grandes",
    ],
    readingTime: 5,
    summary: [
      "Un sinking fund es un fondo para un gasto grande que sabes que llegará. No es emergencia; es preparación.",
      "Sirve para vacaciones, mantenimiento, regalos, impuestos, tecnología y cualquier meta con fecha o monto aproximado.",
    ],
    sections: [
      {
        heading: "Cómo calcularlo",
        body: [
          "Define monto, fecha y frecuencia. Si necesitas 600 dólares en 6 meses, el aporte base es 100 por mes.",
          "Si el número te abruma, ajusta fecha, monto o alcance. La meta debe ayudarte a actuar, no a congelarte.",
        ],
      },
      {
        heading: "Por qué funciona",
        body: [
          "Los fondos con nombre hacen visible el futuro. En vez de sentir que todo sale del mismo bolsillo, cada gasto tiene su lugar.",
          "Savlo usa Sinking Funds para separar metas y reducir sorpresas previsibles.",
        ],
      },
    ],
  },
  {
    slug: "zero-based-budgeting",
    title: "Presupuesto base cero: una versión moderna y tranquila",
    description:
      "Dale un trabajo a cada peso o dólar antes de gastarlo, sin convertir tu mes en una auditoría constante.",
    category: fromEnglish("zero-based-budgeting").category,
    date: fromEnglish("zero-based-budgeting").date,
    dateModified: fromEnglish("zero-based-budgeting").dateModified,
    keywords: [
      "presupuesto base cero",
      "zero based budgeting",
      "método YNAB",
      "asignar dinero",
    ],
    readingTime: 6,
    summary: [
      "Presupuesto base cero significa que cada unidad de dinero tiene un destino: gasto, ahorro, deuda, meta o margen.",
      "No significa gastar todo. Significa eliminar la ambigüedad.",
    ],
    sections: [
      {
        heading: "La regla central",
        body: [
          "Ingreso menos asignaciones debe dar cero. Si sobra dinero sin propósito, asígnalo a ahorro, deuda o una categoría flexible.",
          "Esa claridad reduce decisiones impulsivas porque el dinero ya tiene una tarea antes de aparecer la tentación.",
        ],
      },
      {
        heading: "Cómo hacerlo sostenible",
        body: [
          "Empieza con pocas categorías y deja margen para lo irregular. Si cada cambio requiere reescribir todo, abandonarás.",
          "La versión tranquila permite mover dinero entre categorías sin tratarlo como fracaso.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-out-of-debt",
    title: "Cómo salir de deudas sin culpa",
    description:
      "Compara bola de nieve y avalancha de deuda con una estrategia humana para sostener la motivación.",
    category: fromEnglish("how-to-get-out-of-debt").category,
    date: fromEnglish("how-to-get-out-of-debt").date,
    dateModified: fromEnglish("how-to-get-out-of-debt").dateModified,
    keywords: [
      "cómo salir de deudas",
      "bola de nieve de deuda",
      "avalancha de deuda",
      "pagar tarjetas",
    ],
    readingTime: 6,
    summary: [
      "Salir de deudas requiere números, pero también motivación. El mejor método es el que puedes sostener cuando estás cansado.",
      "La avalancha ahorra más intereses; la bola de nieve puede dar victorias psicológicas más rápidas.",
    ],
    sections: [
      {
        heading: "Ordena tus deudas",
        body: [
          "Anota saldo, tasa, pago mínimo y fecha. Primero protege los mínimos para evitar recargos y daño adicional.",
          "Luego elige estrategia: tasa más alta para eficiencia o saldo más pequeño para impulso emocional.",
        ],
      },
      {
        heading: "Construye margen",
        body: [
          "Un plan de deuda sin fondo de emergencia mínimo suele romperse con el primer imprevisto.",
          "Incluso un colchón pequeño ayuda a no volver a usar la tarjeta ante cualquier gasto inesperado.",
        ],
      },
    ],
  },
  {
    slug: "money-dysmorphia",
    title: "Money dysmorphia: sentirte en quiebra aunque tus números estén bien",
    description:
      "Por qué puedes sentir inseguridad financiera incluso con estabilidad y cómo distinguirlo de un problema real.",
    category: fromEnglish("money-dysmorphia").category,
    date: fromEnglish("money-dysmorphia").date,
    dateModified: fromEnglish("money-dysmorphia").dateModified,
    keywords: [
      "money dysmorphia",
      "sentirse pobre",
      "ansiedad financiera",
      "inseguridad financiera",
    ],
    readingTime: 6,
    summary: [
      "Money dysmorphia describe la distancia entre tu realidad financiera y cómo se siente esa realidad.",
      "Puede aparecer por comparación social, historia familiar, trauma financiero o metas que se mueven cada vez que las alcanzas.",
    ],
    sections: [
      {
        heading: "Diferencia entre sensación y dato",
        body: [
          "La sensación de estar mal no siempre significa que los números estén mal. Pero tampoco hay que ignorarla.",
          "El primer paso es mirar datos concretos: gastos, deudas, ahorro, ingresos y riesgos reales.",
        ],
      },
      {
        heading: "Reduce la comparación",
        body: [
          "Las redes sociales distorsionan lo que parece normal. Si tu referencia es siempre alguien con más ingresos, ningún número se siente suficiente.",
          "Define tu propio suficiente antes de perseguir el de otra persona.",
        ],
      },
    ],
  },
  {
    slug: "ynab-vs-monarch-vs-savlo",
    title: "YNAB vs Monarch vs Savlo: comparación honesta 2026",
    description:
      "Tres apps de finanzas personales con filosofías distintas: control activo, tablero patrimonial o hábitos más tranquilos.",
    category: fromEnglish("ynab-vs-monarch-vs-savlo").category,
    date: fromEnglish("ynab-vs-monarch-vs-savlo").date,
    dateModified: fromEnglish("ynab-vs-monarch-vs-savlo").dateModified,
    keywords: [
      "YNAB vs Monarch",
      "Savlo vs YNAB",
      "mejor app de presupuesto",
      "alternativas a Monarch Money",
    ],
    readingTime: 6,
    summary: [
      "YNAB, Monarch y Savlo no intentan resolver el mismo problema emocional. Por eso compararlas solo por features puede confundir.",
      "La pregunta útil es qué tipo de relación quieres tener con tu dinero.",
    ],
    sections: [
      {
        heading: "YNAB y Monarch",
        body: [
          "YNAB es fuerte para control proactivo y presupuesto base cero. Requiere participación frecuente y una curva de aprendizaje clara.",
          "Monarch brilla como tablero financiero amplio, especialmente para patrimonio, cuentas conectadas y finanzas compartidas.",
        ],
      },
      {
        heading: "Dónde encaja Savlo",
        body: [
          "Savlo apunta a personas que evitan mirar sus finanzas porque la experiencia se siente pesada o ansiosa.",
          "Su propuesta se concentra en voz, espacios, sinking funds, importación/exportación y un diseño menos punitivo.",
        ],
      },
    ],
  },
]

export function getSpanishPostBySlug(slug: string): SpanishBlogPost | undefined {
  return spanishPosts.find((post) => post.slug === slug)
}
