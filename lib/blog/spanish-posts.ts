import { posts, type BlogCategory } from "@/lib/blog/posts"
import type { RichArticle } from "@/lib/blog/rich-article"

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
  rich?: RichArticle
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
    rich: {
      blocks: [
        { kind: "p", text: "Ya intentaste hacer un presupuesto antes. Tal vez descargaste una app, armaste una hoja de cálculo o seguiste un reto viral de dinero. Y por unas semanas funcionó. Pero entonces la vida real pasó: una factura inesperada, una cena de cumpleaños, un martes en el que simplemente no tenías ganas de registrar nada. Y todo el sistema colapsó en silencio." },
        { kind: "p", text: "Si eso te suena familiar, no estás roto. Lo estaba el sistema. Lo que necesitas no es otro conjunto rígido de reglas. Necesitas un marco simple que se doble cuando la vida se complica, pero que siga manteniéndote en marcha." },
        { kind: "p", text: "Ese marco existe y se llama la regla 50/30/20. Es uno de los enfoques más duraderos y accesibles para las finanzas personales jamás creados. No requiere título en finanzas, una hoja de cálculo con colores ni maratones diarios de fuerza de voluntad. Requiere tres números y una comprensión básica de adónde va tu dinero en realidad." },
        { kind: "p", text: "Este artículo desglosa la regla 50/30/20 en detalle: cómo calcular tus números, qué pertenece a cada contenedor, dónde la regla falla y cómo adaptarla cuando tu vida financiera no encaja en una fórmula ordenada. Ya ganes un cheque estable o navegues ingresos irregulares, ya te ahogues en deudas o estés construyendo tu primer fondo de emergencia, esta guía te encuentra donde estás." },
        { kind: "divider" },
        { kind: "h2", id: "que-es-50-30-20", text: "¿Qué es la regla 50/30/20?" },
        { kind: "p", text: "La regla 50/30/20 es un marco de presupuestación que divide tu ingreso después de impuestos en tres categorías amplias: cincuenta por ciento para necesidades, treinta por ciento para deseos y veinte por ciento para ahorro y pago de deudas. La idea es engañosamente simple: en vez de rastrear cada transacción individual, diriges tu dinero a tres contenedores y dejas que los porcentajes guíen tus decisiones." },
        { kind: "p", text: "La regla fue popularizada por la senadora Elizabeth Warren en su libro All Your Worth: The Ultimate Lifetime Money Plan, coescrito con su hija Amelia Warren Tyagi. Warren observó que las familias más financieramente estables que estudió no se obsesionaban con cada línea del presupuesto. Mantenían tres grandes contenedores en equilibrio. Los detalles dentro de cada contenedor importaban menos que la proporción general." },
        { kind: "p", text: "Aquí está la idea central de un vistazo:" },
        { kind: "ul", items: ["50% Necesidades — Vivienda, servicios públicos, comida básica, transporte, seguros, pagos mínimos de deuda y todo lo demás que genuinamente no puedes omitir sin consecuencias serias.", "30% Deseos — Salir a comer, suscripciones a streaming, hobbies, viajes, ropa nueva más allá de lo básico, entretenimiento y todo lo que hace la vida agradable pero no es estrictamente necesario.", "20% Ahorro y Deuda — Aportes al fondo de emergencia, pagos extra de deuda, ahorro para el retiro, inversiones y todo lo que fortalece tu futuro financiero."] },
        { kind: "p", text: "Eso es todo el marco. Tres contenedores, tres porcentajes. Sin hojas de cálculo de cuarenta categorías. Sin conciliación diaria. Solo una brújula direccional que te ayuda a responder la pregunta más importante del presupuesto: ¿mi dinero va aproximadamente adónde quiero que vaya?" },
        { kind: "divider" },
        { kind: "h2", id: "por-que-funcionan-marco-simple", text: "Por qué los marcos simples realmente funcionan" },
        { kind: "p", text: "Hay una razón por la que la regla 50/30/20 ha sobrevivido durante décadas mientras innumerables apps de presupuesto, retos y métodos han caído en el olvido. Esa razón está arraigada en cómo funciona realmente la cognición humana." },
        { kind: "p", text: "El economista conductual Daniel Kahneman dedicó su carrera a estudiar cómo las personas toman decisiones. Uno de sus hallazgos más importantes es que los seres humanos tenemos dos sistemas cognitivos: el Sistema 1, que es rápido, automático y sin esfuerzo; y el Sistema 2, que es lento, deliberado y agotador. La mayoría de nuestras decisiones diarias — qué comer, qué ruta tomar, si revisar el teléfono — las maneja el Sistema 1." },
        { kind: "p", text: "Los presupuestos complejos te obligan al Sistema 2. Cada gasto requiere un juicio: ¿esto es una necesidad o un deseo? ¿Esto pertenece a la categoría hogar o a la de cuidado personal? ¿Gasté de más aquí, o fue una fluctuación esperada? Estas microdecisiones drenan tu energía mental rápidamente. Para el jueves, tu Sistema 2 está agotado y dejas de interactuar con el presupuesto por completo." },
        { kind: "p", text: "La regla 50/30/20 funciona porque opera al nivel del Sistema 1. No necesitas categorizar cada transacción en el momento. Necesitas una conciencia general de en qué contenedor cae tu gasto, y puedes evaluar eso en trazos amplios al final de la semana o el mes. La carga cognitiva es dramáticamente menor." },
        { kind: "p", text: "La investigación sobre fatiga de decisión confirma este patrón. Cuando las personas enfrentan menos opciones, toman mejores decisiones y mantienen su comportamiento por más tiempo. Un estudio publicado en el Journal of Consumer Research encontró que los consumidores que usaron marcos de presupuesto más simples reportaron menos estrés financiero y tenían más probabilidades de mantener su presupuesto más allá de tres meses. El marco no necesita ser perfecto. Necesita ser usable." },
        { kind: "p", text: "La regla 50/30/20 también evita una de las trampas psicológicas más grandes en la presupuestación: la mentalidad de todo o nada. Cuando un presupuesto tiene cuarenta categorías y excedes el gasto en tres de ellas, todo el sistema se siente roto. Cuando tu marco tiene tres contenedores amplios, gastar de más en un área es un problema simple de reequilibrio, no una crisis moral." },
        { kind: "divider" },
        { kind: "h2", id: "como-calcular", text: "Cómo calcular tus números de 50/30/20" },
        { kind: "p", text: "El primer paso es conocer tu ingreso neto real: el dinero que llega a tu cuenta bancaria después de impuestos, seguro médico, contribuciones al retiro y cualquier otra deducción automática. Este no es tu salario. Es lo que realmente recibes." },
        { kind: "p", text: "Aquí hay una forma práctica de encontrar tu número:" },
        { kind: "ol", items: ["Mira tus últimos tres estados de cuenta bancarios. Encuentra el depósito de tu empleador: el monto neto después de las deducciones, no el bruto de tu talón de pago.", "Calcula el promedio. Si tus ingresos varían mes a mes, promedia los últimos tres meses. Si ganas de forma irregular (freelance, comisiones, trabajo estacional), usa tu mes más bajo como línea base.", "Aplica los porcentajes. Multiplica tu ingreso neto promedio por 0.50, 0.30 y 0.20 para obtener los montos de tus tres contenedores."] },
        { kind: "p", text: "Por ejemplo, si tu ingreso neto mensual promedio es $4,000:" },
        { kind: "ul", items: ["Necesidades: $4,000 × 0.50 = $2,000", "Deseos: $4,000 × 0.30 = $1,200", "Ahorro/Deuda: $4,000 × 0.20 = $800"] },
        { kind: "p", text: "Esos son tus objetivos de partida. No límites rígidos: objetivos. La meta es llegar aproximadamente al vecindario, no golpear el monto exacto en dólares cada mes." },
        { kind: "h3", id: "ingresos-irregulares", text: "Calculando con ingresos irregulares" },
        { kind: "p", text: "Si eres freelancer, trabajador por contrato o cualquier persona cuyos ingresos fluctúan, el cálculo requiere un paso adicional. Usa tu mes con menor ingreso de los últimos seis meses como línea base. Presupuesta desde ese número. Cuando los meses son mejores, el excedente fluye a tu contenedor de ahorro automáticamente." },
        { kind: "p", text: "Este enfoque previene el ciclo peligroso de presupuestar basándote en tu mejor mes, quedarte corto en tu peor mes y luego abandonar el sistema porque no funciona. Funciona. Solo necesitas anclarlo a la realidad, no a la optimismo." },
        { kind: "divider" },
        { kind: "h2", id: "necesidades-profundidad", text: "El contenedor del 50% de Necesidades: qué realmente califica" },
        { kind: "p", text: "Aquí es donde la mayoría se tropieza. La palabra necesidades es subjetiva, y sin criterios claros, todo empieza a sentirse necesario. Una membresía de gimnasio es una necesidad si tu salud mental depende de ella. Un pago de auto es una necesidad si vives en una ciudad sin transporte público. Un plan de teléfono es una necesidad en 2026: no puedes funcionar social o profesionalmente sin uno." },
        { kind: "p", text: "La prueba honesta es esta: si eliminar este gasto crearía una interrupción seria a tu salud, seguridad, vivienda, empleo o relaciones esenciales, es una necesidad. Todo lo demás es negociable." },
        { kind: "p", text: "Aquí está lo que típicamente pertenece al contenedor del 50% de necesidades:" },
        { kind: "ul", items: ["Pago de renta o hipoteca", "Servicios públicos (electricidad, agua, gas, internet)", "Comida básica (supermercado, no restaurantes ni mejoras orgánicas)", "Transporte (pago del auto, seguro, gasolina, pases de transporte público)", "Seguro médico y costos médicos esenciales", "Pagos mínimos de deuda (mínimos de tarjeta de crédito, préstamos estudiantiles, préstamos personales)", "Cuidado infantil o de dependientes", "Plan básico de teléfono", "Seguro de renta o de propiedad"] },
        { kind: "p", text: "Nota lo que no está en esa lista: servicios de streaming, salidas a comer, ropa nueva (más allá de reemplazar lo gastado), membresías de gimnasio, hobbies y mejoras de cualquier tipo. Estos son gastos reales, pero pertenecen al contenedor de deseos, lo que significa que llegan después de que tus necesidades estén cubiertas, no antes." },
        { kind: "h3", id: "necesidades-cuando-exceden", text: "Cuando las necesidades exceden el 50%" },
        { kind: "p", text: "En ciudades de alto costo de vida — Nueva York, San Francisco, Londres, Sídney — la vivienda sola puede consumir entre el cuarenta y el cincuenta por ciento de tu ingreso. Suma transporte, comida y seguros, y puedes estar al sesenta y cinco por ciento antes de gastar un solo dólar en algo placentero." },
        { kind: "p", text: "Este es el punto de quiebre más común de la regla, y no significa que la regla sea inútil. Significa que adaptas. Un ajuste común es la proporción 60/20/20: sesenta por ciento para necesidades, veinte por ciento para deseos, veinte por ciento para ahorro. Los porcentajes cambian, pero el principio se mantiene: tres contenedores, prioridades claras, impulso hacia adelante." },
        { kind: "p", text: "La clave es esta: los porcentajes son una brújula, no una jaula. Si tus necesidades son genuinamente altas, ajustas los otros dos contenedores en vez de abandonar el marco por completo. La peor respuesta a costos altos es dejar de rastrear por completo." },
        { kind: "divider" },
        { kind: "h2", id: "deseos-profundidad", text: "El contenedor del 30% de Deseos: permiso para disfrutar tu dinero" },
        { kind: "p", text: "Este es el contenedor que hace que la regla 50/30/20 sea psicológicamente sostenible. La mayoría de los presupuestos tratan los deseos como placeres culpables o lujos innecesarios. La regla 50/30/20 los trata como esenciales: no porque salir a comer sea tan importante como la renta, sino porque un presupuesto que elimina todo placer es un presupuesto que vas a abandonar." },
        { kind: "p", text: "El contenedor de deseos es donde tu dinero financia la vida que realmente quieres vivir. Incluye:" },
        { kind: "ul", items: ["Salidas a comer y pedidos a domicilio", "Servicios de streaming, suscripciones de música, videojuegos", "Hobbies y actividades creativas", "Viajes y vacaciones", "Ropa nueva y estilo personal", "Salidas sociales y entretenimiento", "Decoración del hogar y mejoras no esenciales", "Cuidado personal más allá de lo básico (spa, productos premium)", "Regalos más allá de los obligatorios"] },
        { kind: "p", text: "El poder emocional de este contenedor es que elimina la culpa al gastar. Cuando sabes que tus necesidades están cubiertas y tus ahorros están automatizados, el dinero que queda en el contenedor de deseos es tuyo para gastar libremente. No necesitas justificar una compra de café o atormentarte por un viaje de fin de semana. El marco ya lo contempló." },
        { kind: "p", text: "Esto es lo opuesto a cómo la mayoría experimenta la presupuestación. En vez de una voz en tu cabeza que dice no deberías gastar esto, la regla 50/30/20 dice ya planeaste para esto. Ese cambio: de la restricción al permiso, es lo que hace al sistema duradero." },
        { kind: "h3", id: "deseos-vs-necesidades", text: "Cómo distinguir deseos de necesidades honestamente" },
        { kind: "p", text: "La línea entre necesidades y deseos no siempre es limpia. Aquí hay tres preguntas que ayudan a clarificar:" },
        { kind: "ol", items: ["La prueba de reemplazo: Si este gasto desapareciera mañana, ¿causaría un problema serio? ¿O encontrarías una alternativa? Un auto es una necesidad si viajas al trabajo. Un auto de lujo es un deseo. La necesidad es transporte; la mejora es preferencia.", "La prueba de frecuencia: ¿Es esto esencial de una vez o una comodidad recurrente? Comprar botas de invierno es una necesidad. Comprar la marca premium en vez de la opción accesible es un deseo.", "La prueba de consecuencia: ¿Qué pasaría si pausaras este gasto por un mes? Si nada significativo cambia, pertenece a deseos."] },
        { kind: "p", text: "No hay vergüenza en tener deseos. Son lo que hace que la vida valga la pena. La regla 50/30/20 simplemente asegura que los deseos no consuman silenciosamente el dinero destinado a tu futuro." },
        { kind: "divider" },
        { kind: "h2", id: "ahorro-deuda-profundidad", text: "El contenedor del 20% de Ahorro y Deuda: invirtiendo en tu yo futuro" },
        { kind: "p", text: "El contenedor del veinte por ciento es donde se construye la estabilidad financiera. Es el más pequeño por porcentaje, pero tiene el mayor impacto con el tiempo. Aquí es donde tu dinero trabaja para ti: pagando deudas más rápido, construyendo un fondo de emergencia y creando el colchón que evita que un gasto inesperado se convierta en una crisis financiera." },
        { kind: "p", text: "El contenedor de ahorro y deuda incluye:" },
        { kind: "ul", items: ["Aportes al fondo de emergencia", "Pagos extra de deuda más allá de los mínimos", "Contribuciones a cuentas de retiro (401k, IRA, plan de pensiones)", "Aportes a inversiones", "Sinking funds para gastos grandes planificados", "Metas de ahorro (fondo de vacaciones, enganche, renovación del hogar)"] },
        { kind: "h3", id: "fondo-emergencia", text: "Construye tu fondo de emergencia primero" },
        { kind: "p", text: "Si aún no tienes un fondo de emergencia, aquí es donde va tu veinte por ciento primero. Un fondo de emergencia no es un lujo: es la fundación que hace que todo lo demás sea posible. Sin él, una reparación de auto o una factura médica te envía a la deuda, lo que hace que la porción de deuda de este contenedor sea más grande, lo que hace que la porción de ahorro sea más pequeña, lo que hace que la siguiente emergencia sea aún más dañina." },
        { kind: "p", text: "La recomendación estándar son tres a seis meses de gastos esenciales. Si ese número te parece abrumador, empieza más pequeño. Un primer hito de mil dólares previene que la mayoría de las emergencias financieras se conviertan en eventos de deuda. Lee más sobre cómo construir un fondo de emergencia en nuestra guía de sinking funds y ahorro de emergencia." },
        { kind: "h3", id: "pago-deuda", text: "Paga tus deudas estratégicamente" },
        { kind: "p", text: "Si cargas deudas de alto interés — tarjetas de crédito, préstamos salarios, préstamos personales con tasas de doble dígito — tu contenedor del veinte por ciento debería priorizar el pago acelerado de esas deudas. La matemática es simple: cada dólar de deuda de alto interés que eliminas te genera un retorno garantizado igual a la tasa de interés. Ninguna inversión ofrece ese tipo de retorno garantizado." },
        { kind: "p", text: "Dos estrategias comunes:" },
        { kind: "ul", items: ["Método avalancha: Paga primero la deuda con la tasa de interés más alta. Matemáticamente óptimo. Ahorra más dinero con el tiempo.", "Método bola de nieve: Paga primero el saldo más pequeño. Psicológicamente poderoso. Cada cuenta pagada ofrece un impulso de motivación."] },
        { kind: "p", text: "Ningún enfoque es incorrecto. Elige el que realmente vas a mantener. La consistencia importa más que la optimización matemática." },
        { kind: "divider" },
        { kind: "h2", id: "errores-comunes", text: "Errores comunes que la gente comete con la regla 50/30/20" },
        { kind: "p", text: "El marco es simple, pero esa simplicidad puede crear puntos ciegos. Aquí están los errores más frecuentes y cómo evitarlos." },
        { kind: "h3", id: "error-contar-deseos", text: "Contar deseos como necesidades" },
        { kind: "p", text: "Este es el punto de fallo más común. Un paquete de streaming de cien dólares al mes no es una necesidad. Un auto que cuesta el doble de lo que puedes permitirte porque querías asientos de cuero no es una necesidad. Un plan de teléfono con datos ilimitados cuando podrías usar un plan básico no es una necesidad." },
        { kind: "p", text: "La prueba honesta es si podrías llevar una vida funcional, segura y socialmente conectada sin este gasto específico. Si la respuesta es sí, incluso si sería menos cómodo, pertenece a deseos." },
        { kind: "h3", id: "error-no-automatizar", text: "No automatizar el 20%" },
        { kind: "p", text: "El contenedor del veinte por ciento falla cuando depende de la fuerza de voluntad. Si planeas ahorrar lo que sobre al final del mes, no quedará nada. La solución es la automatización: configura una transferencia automática a ahorro el día que te pagan, antes de ver el dinero en tu cuenta corriente. Lo que queda es lo que puedes gastar. Este simple cambio de hábito es más poderoso que cualquier cantidad de disciplina presupuestaria." },
        { kind: "h3", id: "error-bruto", text: "Presupuestar con ingreso bruto" },
        { kind: "p", text: "Tus porcentajes de necesidades, deseos y ahorro deberían aplicarse a tu ingreso neto: lo que realmente llega a tu cuenta bancaria. Presupuestar con tu salario bruto crea una ilusión de más dinero del que tienes, lo que conduce a exceder el gasto en las primeras dos semanas y a resolver problemas en las últimas dos." },
        { kind: "h3", id: "error-revision", text: "Nunca revisar ni ajustar" },
        { kind: "p", text: "La regla 50/30/20 no es un sistema de configúralo y olvídalo. La vida cambia. Te dan un aumento. La renta sube. Pagas una tarjeta de crédito. Aparece un nuevo gasto. Los porcentajes deberían revisarse mensualmente y ajustarse trimestralmente. Una revisión de cinco minutos al final de cada mes — ¿mis tres contenedores están aproximadamente en equilibrio? — previene que las pequeñas desviaciones se conviertan en problemas grandes." },
        { kind: "p", text: "Si quieres un marco más detallado para revisar tu gasto regularmente, nuestra guía sobre cómo presupuestar tu dinero te guía a través de un proceso de revisión paso a paso." },
        { kind: "h3", id: "error-todo-nada", text: "Tratarlo como todo o nada" },
        { kind: "p", text: "Si tus necesidades llegan al cincuenta y cinco por ciento un mes, no has fracasado. Ajustas los contenedores de deseos y ahorro proporcionalmente y sigues adelante. El marco está diseñado para absorber la imperfección. Un presupuesto que sigues con setenta por ciento de precisión durante doce meses siempre superará un presupuesto perfecto que abandonas después de tres semanas." },
        { kind: "divider" },
        { kind: "h2", id: "cuando-no-funciona", text: "Cuando la regla 50/30/20 no funciona perfectamente" },
        { kind: "p", text: "El marco no es universal. Varias situaciones financieras comunes requieren adaptaciones significativas. Reconocer estas situaciones no es un signo de fracaso: es un signo de autoconciencia financiera." },
        { kind: "h3", id: "situacion-deuda-alta", text: "Pago agresivo de deudas" },
        { kind: "p", text: "Si cargas deudas significativas de alto interés — digamos diez mil dólares en tarjetas de crédito al veintidós por ciento de tasa anual — la tasa estándar de ahorro del veinte por ciento puede sentirse inadecuada. En esta situación, muchas personas cambian a una proporción 50/20/30: cincuenta por ciento para necesidades, veinte por ciento para deseos y treinta por ciento para pago de deudas. La matemática lo respalda: acelerar el pago de deudas al veintidós por ciento de interés es mejor movimiento financiero que ahorrar al cinco por ciento." },
        { kind: "p", text: "El compromiso es claro: reduces tu gasto de estilo de vida temporalmente para eliminar una carga financiera más rápido. La clave es que este es un cambio consciente y temporal, no una privación permanente. Una vez que la deuda se fue, los porcentajes vuelven a cambiar." },
        { kind: "h3", id: "situacion-un-ingreso", text: "Hogares con un solo ingreso" },
        { kind: "p", text: "Cuando un ingreso sostiene a un hogar entero, ya sea por elección o por circunstancias, el cincuenta por ciento para necesidades puede sentirse imposiblemente ajustado. Cuidado infantil, vivienda, comida y transporte con un solo ingreso a menudo exceden el cincuenta por ciento en la mayoría de las áreas metropolitanas." },
        { kind: "p", text: "Para familias con un solo ingreso, una proporción 60/20/20 o incluso 65/15/20 puede ser más realista. El principio se adapta: tus necesidades se cubren primero, tu futuro sigue recibiendo algo y tu calidad de vida se preserva en la medida de lo posible." },
        { kind: "h3", id: "situacion-ingreso-bajo", text: "Ingreso muy bajo" },
        { kind: "p", text: "Cuando el ingreso apenas cubre los gastos esenciales, la meta de ahorro del veinte por ciento puede ser genuinamente imposible. Si tus necesidades consumen el setenta y cinco por ciento de tu ingreso, no puedes producir mágicamente el veinte por ciento para ahorro sin caer en deudas." },
        { kind: "p", text: "En este caso, cualquier ahorro es progreso. Incluso el cinco por ciento importa. La meta cambia de alcanzar la proporción ideal a construir el hábito de ahorrar, incluso montos pequeños, mientras reconoces que tu realidad financiera actual aún no permite el marco completo. Progreso, no perfección." },
        { kind: "h3", id: "situacion-ingreso-variable", text: "Freelancers e ingresos variables" },
        { kind: "p", text: "Freelancers, trabajadores por contrato y vendedores por comisión enfrentan un desafío único: los porcentajes cambian cada mes porque el denominador cambia cada mes. La solución es presupuestar desde tu mes de menor ingreso y tratar cualquier mes por encima de esa línea base como ahorro adicional." },
        { kind: "p", text: "Si ganas tres mil un mes y seis mil el siguiente, presupuesta desde tres mil. Cuando llegan seis mil, los tres mil extra fluyen directamente a tu contenedor de ahorro y deuda. Esto previene la inflación del estilo de vida que acompaña a los buenos meses y el pánico que acompaña a los difíciles." },
        { kind: "divider" },
        { kind: "h2", id: "lado-emocional", text: "El lado emocional de presupuestar con porcentajes" },
        { kind: "p", text: "Los números en una hoja de cálculo no capturan el panorama completo de tu vida financiera. El dinero es emocional. Lleva historias de tu infancia, ansiedad por el futuro, vergüenza por el pasado y presión de la comparación social. Cualquier marco de presupuestación que ignore estas dimensiones emocionales está incompleto." },
        { kind: "p", text: "La regla 50/30/20 maneja el lado emocional mejor que la mayoría de los marcos porque normaliza gastar en ti mismo. El contenedor del treinta por ciento de deseos no es una concesión: es una característica de diseño. Reconoce que los humanos no somos máquinas optimizadas para el máximo ahorro. Somos criaturas que necesitan placer, descanso, conexión social y alegría." },
        { kind: "p", text: "Cuando asignas el treinte por ciento a las cosas que hacen la vida agradable, eliminas la culpa del gasto. Dejas de preguntar ¿debí haber comprado esto? y empiezas a preguntar ¿esto encaja en mi contenedor de deseos este mes? Esa es una experiencia emocional fundamentalmente diferente." },
        { kind: "p", text: "Si el estrés financiero o la ansiedad hacen difícil siquiera mirar tus números, el marco 50/30/20 puede ayudar al reducir la granularidad de lo que necesitas examinar. No necesitas categorizar cada recibo. Necesitas saber, aproximadamente, si tus tres grandes contenedores están en equilibrio. Esa menor demanda cognitiva puede ser la diferencia entre interactuar con tus finanzas y evitarlas por completo." },
        { kind: "p", text: "Nuestra exploración más profunda de la ansiedad financiera cubre estrategias prácticas para reducir la carga emocional alrededor de las revisiones de dinero." },
        { kind: "divider" },
        { kind: "h2", id: "50-30-20-vs-base-cero", text: "Regla 50/30/20 versus presupuesto base cero" },
        { kind: "p", text: "Dos de los marcos de presupuestación más populares son la regla 50/30/20 y el presupuesto base cero. Resuelven diferentes problemas y se adaptan a diferentes personalidades." },
        { kind: "p", text: "La regla 50/30/20 es un enfoque de arriba hacia abajo. Comienzas con tu ingreso total y lo divides en tres categorías amplias. Es rápido, simple y requiere mínimo mantenimiento continuo. Funciona mejor para personas que quieren una guía direccional sin enredarse en detalles." },
        { kind: "p", text: "El presupuesto base cero es un enfoque de abajo hacia arriba. Le das un trabajo a cada dólar antes de que empiece el mes. Ingreso menos gastos igual a cero. Es minucioso, preciso y exigente. Funciona mejor para personas que quieren máximo control y están dispuestas a invertir el tiempo para mantenerlo." },
        { kind: "p", text: "Ningún enfoque es objetivamente mejor. La regla 50/30/20 es más sostenible para la mayoría porque requiere menor inversión cognitiva. El presupuesto base cero produce resultados más precisos para quienes pueden mantenerlo. Muchas personas empiezan con la regla 50/30/20 para construir el hábito de presupuestar y pasan al presupuesto base cero una vez establecido el hábito." },
        { kind: "divider" },
        { kind: "h2", id: "poder-automatizacion", text: "El poder de automatizar tu 20%" },
        { kind: "p", text: "Si hay un cambio que transforma la regla 50/30/20 de teoría a práctica, es automatizar el contenedor de ahorro del veinte por ciento. Aquí está por qué este simple paso es tan efectivo." },
        { kind: "p", text: "Cuando el ahorro ocurre automáticamente — una transferencia que se ejecuta el día de pago antes de que veas el dinero — nunca enfrentas el momento de elección. Nunca tienes que decidir entre ahorrar y gastar. El ahorro ya ocurrió. Tu estilo de vida se ajusta a lo que queda, no a lo que teóricamente podrías ahorrar." },
        { kind: "p", text: "Este enfoque aprovecha lo que los economistas conductuales llaman el efecto predeterminado. Cuando algo es lo predeterminado, cuando ocurre a menos que activamente optes por no hacerlo, las personas tienen mucha más probabilidades de mantenerlo. Automatizar el ahorro hace que ahorrar sea lo predeterminado." },
        { kind: "p", text: "Configura tres transferencias automáticas en tu día de pago:" },
        { kind: "ol", items: ["Fondo de emergencia — hasta que alcances tu meta (tres a seis meses de gastos).", "Aceleración de deuda — pagos extra hacia tu deuda con mayor interés.", "Ahorro a largo plazo — contribuciones al retiro, cuentas de inversión o metas de ahorro específicas."] },
        { kind: "p", text: "Una vez que el fondo de emergencia esté completamente financiado y la deuda de alto interés eliminada, la automatización continúa: el dinero simplemente fluye hacia nuevas metas. El hábito nunca cambia. El destino sí." },
        { kind: "divider" },
        { kind: "h2", id: "construir-habitos", text: "Construyendo hábitos de presupuestación que realmente duran" },
        { kind: "p", text: "La regla 50/30/20 es un marco, no un hábito. El marco te dice adónde debería ir tu dinero. El hábito es la práctica regular de revisar tus finanzas para asegurar que eso realmente esté pasando." },
        { kind: "p", text: "La investigación sobre formación de hábitos sugiere que los hábitos duraderos se construyen sobre acciones pequeñas y consistentes reforzadas por bucles de retroalimentación positivos. No se construyen sobre declaraciones grandiosas ni adherencia perfecta." },
        { kind: "p", text: "Así se ve la construcción de hábitos de presupuestación sostenible:" },
        { kind: "ol", items: ["Empieza con una revisión semanal de cinco minutos. Abre tu app bancaria, mira tus saldos y pregúntate: ¿mis tres contenedores van aproximadamente en buen camino? Eso es todo. Sin análisis profundo. Sin juicio. Solo un vistazo rápido.", "Hazlo ritual, no obligación. Empareja la revisión con algo que ya hagas: café de la mañana del domingo, relajación de la tarde del viernes, tiempo libre del miércoles. El ancla hace que el hábito sea automático.", "Celebra pequeñas victorias. ¿Te mantuviste debajo de tu presupuesto de deseos esta semana? ¿Transferiste dinero a ahorro sin atormentarte? Estas son victorias reales. Reconócelas.", "Ajusta sin culpa. Si una categoría se desvía, mueve dinero entre contenedores y sigue adelante. El marco está diseñado para doblarse. Usa esa flexibilidad."] },
        { kind: "p", text: "Para más sobre cómo construir hábitos financieros que perduran, consulta nuestra guía sobre cómo hacer un presupuesto que realmente seguirás." },
        { kind: "divider" },
        { kind: "h2", id: "adaptar-50-30-20", text: "Cómo adaptar la regla 50/30/20 a tu vida" },
        { kind: "p", text: "La belleza del marco es su flexibilidad. Aquí están adaptaciones prácticas para situaciones comunes." },
        { kind: "h3", id: "adaptar-ahorrador-agresivo", text: "El ahorrador agresivo (30/20/50)" },
        { kind: "p", text: "Si estás libre de deudas y construyes hacia una meta importante — un enganche para casa, retiro temprano, independencia financiera — podrías cambiar a treinta por ciento necesidades, veinte por ciento deseos y cincuenta por ciento ahorro. Este enfoque acelerado requiere disciplina pero comprime dramáticamente el cronograma hacia hitos financieros importantes." },
        { kind: "h3", id: "adaptar-alto-costo", text: "El residente de alto costo de vida (60/20/20)" },
        { kind: "p", text: "En ciudades caras, vivienda y transporte solos pueden consumir la mayor parte de tu contenedor de necesidades. Una proporción 60/20/20 reconoce esta realidad sin abandonar el marco. La clave es asegurar que el contenedor de ahorro del veinte por ciento permanezca automatizado e intacto, incluso cuando el contenedor de necesidades demande más." },
        { kind: "h3", id: "adaptar-mucha-deuda", text: "El hogar con muchas deudas (50/15/35)" },
        { kind: "p", text: "Cuando la deuda de alto interés es la amenaza financiera principal, dedicar el treinta y cinco por ciento (o más) al pago de deudas acelera el camino hacia la libertad. El contenedor de deseos del quince por ciento es ajustado, pero temporal. Una vez eliminada la deuda, los porcentajes cambian dramáticamente a tu favor." },
        { kind: "h3", id: "adaptar-familia-creciente", text: "La familia en crecimiento (50/25/25)" },
        { kind: "p", text: "A medida que las familias crecen, los gastos cambian. Cuidado infantil, educación, salud y necesidades de vivienda más grandes empujan el contenedor de necesidades más arriba. Una ligera reducción en el porcentaje de ahorro — del veinte al veinte y cinco — puede dar espacio para respirar sin sacrificar la salud financiera a largo plazo." },
        { kind: "divider" },
        { kind: "h2", id: "sinking-funds", text: "Sinking funds: el arma secreta dentro del 20%" },
        { kind: "p", text: "Una de las herramientas más poderosas dentro del contenedor de ahorro y deuda es el sinking fund: una cuenta de ahorro dedicada a un gasto futuro específico y predecible. A diferencia de un fondo de emergencia, que cubre lo inesperado, los sinking funds cubren lo esperado: primas anuales de seguro, regalos de navidad, mantenimiento del auto, costos de vacaciones y reparaciones del hogar." },
        { kind: "p", text: "Sin sinking funds, estos gastos predecibles llegan como emergencias porque no planeaste para ellos. Terminas cargándolos a una tarjeta de crédito, lo que crea deuda, lo que aumenta tus pagos mínimos, lo que reduce tu contenedor de ahorro. Los sinking funds rompen este ciclo al extender el costo a lo largo de meses." },
        { kind: "p", text: "Si tu seguro de auto cuesta $1,200 anuales, un sinking fund de $100 al mes significa que cuando llega la factura simplemente la pagas: sin interrupción financiera, sin deuda, sin estrés. Lee más sobre cómo configurar sinking funds en nuestra guía detallada de sinking funds y gastos planificados." },
        { kind: "divider" },
        { kind: "h2", id: "por-que-supera-presupuestos", text: "Por qué la regla 50/30/20 supera a los presupuestos tradicionales" },
        { kind: "p", text: "Los presupuestos tradicionales fallan porque están diseñados para una versión del ser humano que no existe: un agente perfectamente racional que toma decisiones óptimas en todo momento, no siente resistencia emocional al rastrear cada dólar y mantiene un comportamiento consistente semana tras semana sin apoyo externo." },
        { kind: "p", text: "La regla 50/30/20 tiene éxito porque está diseñada para humanos reales: personas cansadas, estresadas y ocupadas tomando decisiones complejas en entornos ruidosos. Reconoce que no rastrearás cada transacción. Acepta que tu gasto fluctuará. Incluye espacio para el disfrute. Y proporciona una estructura simple y memorable que no requiere una hoja de cálculo para mantenerla." },
        { kind: "p", text: "Para una exploración más profunda de por qué la mayoría de los métodos de presupuestación fallan y la ciencia conductual detrás de ello, lee nuestro artículo sobre por qué fallan los presupuestos tradicionales." },
        { kind: "divider" },
        { kind: "h2", id: "donde-encaja-savlo", text: "Cómo Savlo apoya el enfoque 50/30/20" },
        { kind: "p", text: "La regla 50/30/20 te da el marco. Una buena herramienta te ayuda a mantenerlo sin la fricción que mata la mayoría de los presupuestos." },
        { kind: "p", text: "Savlo está diseñado alrededor de los mismos principios que hacen que la regla 50/30/20 funcione: simplicidad, baja carga cognitiva y compasión. En vez de exigirte categorizar cada transacción en cuarenta subcategorías, Savlo te ayuda a rastrear el gasto en contenedores amplios y manejables. En vez de avergonzarte cuando excedes el gasto, proporciona contexto calmado sobre dónde estás en relación con tus metas." },
        { kind: "p", text: "Savlo apoya el enfoque 50/30/20 al facilitar ver, de un vistazo, si tus tres contenedores están en equilibrio. Puedes registrar gastos rápido, revisar tus patrones de gasto sin juicio y ajustar tus asignaciones a medida que la vida cambia, todo en un ambiente tranquilo y sin anuncios diseñado para reducir la ansiedad financiera en vez de aumentarla." },
        { kind: "p", text: "Savlo está disponible en Android y llegará pronto a iOS." },
        { kind: "divider" },
        { kind: "h2", id: "empezar-hoy", text: "Empezar hoy" },
        { kind: "p", text: "No necesitas renovar tu vida financiera para empezar a usar la regla 50/30/20. Necesitas tres pasos:" },
        { kind: "ol", items: ["Calcula tu ingreso neto. Mira tus últimos tres depósitos bancarios. Promedia esos. Ese es tu número.", "Ejecuta los porcentajes. Multiplica por 0.50, 0.30 y 0.20. Escribe esos tres números. Esos son tus contenedores.", "Automatiza el veinte por ciento. Configura una transferencia automática a ahorro en tu próximo día de pago. Todo lo demás se ajusta alrededor de eso."] },
        { kind: "p", text: "Eso es todo. Puedes refinar, ajustar y optimizar después. La primera versión no necesita ser perfecta. Necesita existir." },
        { kind: "p", text: "La regla 50/30/20 no es una solución mágica. Es una brújula: una herramienta simple que te señala en la dirección correcta y te deja navegar los detalles sobre la marcha. Y para la mayoría de las personas, esa brújula es exactamente lo que faltaba." },
        { kind: "divider" },
        { kind: "h2", id: "faq", text: "Preguntas Frecuentes" },
        { kind: "h3", id: "faq-bruto-o-neto", text: "¿Debería usar ingreso bruto o neto para la regla 50/30/20?" },
        { kind: "p", text: "Siempre usa tu ingreso neto: el monto que realmente llega a tu cuenta bancaria después de impuestos, seguro médico, contribuciones al retiro y otras deducciones automáticas. Presupuestar con tu salario bruto crea una falsa sensación de dinero disponible y conduce a exceder el gasto. Los porcentajes necesitan aplicarse a lo que realmente tienes, no a lo que teóricamente ganas." },
        { kind: "h3", id: "faq-hipoteca-necesidades", text: "¿Mi hipoteca o renta cuenta como necesidad?" },
        { kind: "p", text: "Sí. La vivienda es la necesidad más grande para la mayoría de las personas y pertenece decididamente al contenedor del cincuenta por ciento. Esto incluye pagos de renta o hipoteca, impuestos sobre la propiedad (si no están en custodia), seguro de renta o de propiedad y costos básicos de mantenimiento. Si tus costos de vivienda solos consumen más del cincuenta por ciento de tu ingreso, considera la adaptación 60/20/20, pero no ignores el marco por completo." },
        { kind: "h3", id: "faq-inversiones-20", text: "¿Las inversiones cuentan hacia el contenedor del 20% de ahorro?" },
        { kind: "p", text: "Sí. El contenedor del veinte por ciento abarca todo lo que fortalece tu futuro financiero: aportes al fondo de emergencia, pagos extra de deuda, contribuciones a cuentas de retiro, inversiones en bolsa y ahorro para metas específicas. El orden dentro del contenedor depende de tu situación: la deuda de alto interés típicamente va primero, seguida por la construcción del fondo de emergencia y luego la inversión a largo plazo." },
        { kind: "h3", id: "faq-20-suficiente", text: "¿Es suficiente el veinte por ciento para ahorro?" },
        { kind: "p", text: "El veinte por ciento es una línea base sólida, no un techo. Si vas rezagado en ahorro para el retiro, cargas deudas de alto interés o estás ahorrando para una meta importante, aumentar el porcentaje de ahorro, incluso temporalmente, acelera tu progreso. La meta es eventualmente ahorrar al menos el veinte por ciento mientras mantienes los otros dos contenedores. Si puedes ahorrar más, ahorra más. El marco proporciona un mínimo, no un máximo." },
        { kind: "h3", id: "faq-subcategorias", text: "¿Necesito rastrear subcategorías dentro de cada contenedor?" },
        { kind: "p", text: "No inicialmente. La regla 50/30/20 funciona por su simplicidad. Empieza rastreando solo los tres contenedores amplios. Después de un mes o dos, si notas que un contenedor está consistentemente por encima o por debajo de la meta, puedes dividirlo en subcategorías para identificar el área específica que causa el desequilibrio. Pero la mayoría de las personas encuentran que tres contenedores amplios son suficientes para una conciencia financiera significativa. Más categorías crean más carga cognitiva y más oportunidades de autojuicio, lo cual es exactamente lo que la regla 50/30/20 está diseñada para evitar." },
        { kind: "h3", id: "faq-ingreso-combinado", text: "¿Cómo aplico la regla 50/30/20 con mi pareja?" },
        { kind: "p", text: "Aplica los porcentajes a tu ingreso neto combinado del hogar. Siéntense juntos y categoricen sus gastos compartidos: vivienda, servicios, comida y transporte van en necesidades. El gasto discrecional individual, los deseos personales de cada pareja, va en deseos. El ahorro conjunto y los pagos de deuda van en el contenedor del veinte por ciento. La clave es estar de acuerdo en lo que cuenta como necesidad versus deseo, lo que requiere una conversación honesta. Muchas parejas encuentran que el marco en sí facilita esa conversación, porque proporciona un vocabulario compartido para hablar de dinero sin culpa." },
        { kind: "h3", id: "faq-cuanto-tiempo", text: "¿Cuánto tiempo debería probar la regla 50/30/20 antes de decidir si funciona?" },
        { kind: "p", text: "Dale tres meses completos. El primer mes es de observación: estás aprendiendo adónde va tu dinero realmente versus adónde crees que va. El segundo mes es de ajuste: refinas tus categorías y configuras automatizaciones. El tercer mes es donde el hábito empieza a solidificarse. La mayoría de las personas que abandonan el marco lo hacen en las primeras tres semanas, antes de tener suficientes datos para ver si está funcionando. Comprométete a un trimestre completo antes de hacer un juicio. Y recuerda: la meta no es perfección. La meta es progreso direccional." }
      ],
    },
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
    readingTime: 20,
    summary: [
      "La ansiedad financiera mezcla números, memoria, comparación y miedo. No se arregla solo con una hoja de cálculo.",
      "Ayuda crear rituales pequeños: mirar el dinero en un horario definido, usar categorías amables y separar decisiones de emociones.",
    ],
    sections: [
      {
        heading: "Mira menos veces, pero mejor",
        body: [
          "Revisar compulsivamente puede aumentar el estrés. Evitar por completo también. Una ventana semanal y tranquila suele funcionar mejor.",
          "El objetivo es que mirar tus finanças deje de ser una emergencia emocional.",
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "La ansiedad financiera rara vez es proporcional a la cantidad de dinero que tienes en tu cuenta bancaria. Es proporcional a la cantidad de incertidumbre que sientes. Los hábitos diarios presentados aquí están diseñados para reducir tu carga emocional antes incluso de que mires los números. No sustituyen ayuda profesional si la ansiedad es grave, pero son un punto de partida para cualquiera que quiera cambiar la forma en que el dinero le hace sentir.",
        },
        {
          kind: "h2",
          id: "que-es",
          text: "Qué es realmente la ansiedad financiera",
        },
        {
          kind: "p",
          text: "La ansiedad financiera no va del número en tu cuenta. Personas con seis dígitos en ahorros pueden despertarse a las tres de la mañana preguntándose si tienen suficiente, y personas con nada pueden dormir plácidamente. La ansiedad surge de la brecha entre lo que tienes y lo que crees que necesitas, combinada con la sensación de no tener control sobre si esa brecha se cierra. Es una sensación, no un estado de cuenta bancario.",
        },
        {
          kind: "p",
          text: "La sensación generalmente tiene dos capas. La capa de superficie es la preocupación inmediata: ¿Puedo pagar la renta? ¿Puedo cubrir la reparación del coche? ¿Mi tarjeta será rechazada? La capa más profunda es la historia que te cuentas sobre lo que el número significa sobre ti. La capa de superficie es resoluble con un plan. La capa más profunda es lo que hace que la ansiedad persista incluso después de que el plan está en su lugar. La ansiedad financiera rara vez va del dinero en sí. Va de lo que crees que el dinero dice sobre tu competencia, tu valor y tu futuro.",
        },
        {
          kind: "p",
          text: "El término se usa libremente, pero la experiencia es real. Puede manifestarse como pavor cuando abres tu aplicación bancaria, como irritabilidad después de una compra, como insomnio la noche antes de payday, o como un zumbido constante de preocupación que te sigue a todas partes. No requiere una crisis. No requiere deudas. No requiere pobreza. Solo requiere la creencia de que no estás a salvo, y esa creencia a menudo está desconectada de los hechos.",
        },
        {
          kind: "h2",
          id: "por-que-dinheiro-causa-ansiedad",
          text: "Por qué el dinero causa ansiedad en primer lugar",
        },
        {
          kind: "p",
          text: "El dinero es uno de los pocos temas que toca cada parte de la vida: vivienda, alimentación, salud, relaciones, identidad, libertad, tiempo. Cuando el dinero se siente inestable, cada parte de la vida se siente inestable. La ansiedad no es irracional. Es el cerebro haciendo exactamente lo que fue diseñado para hacer: señalar una amenaza percibida para la supervivencia. El problema es que la respuesta a la amenaza no distingue entre una emergencia real y una notificación de que tu saldo es más bajo de lo esperado.",
        },
        {
          kind: "p",
          text: "La segunda razón por la que el dinero causa ansiedad es que la mayoría de las personas nunca fueron enseñadas a pensar sobre ello. Las escuelas enseñan álgebra, no intereses compuestos. Las familias hablan de dinero en voz baja, o no lo hacen, o en discusiones. El resultado es que la mayoría de los adultos abordan sus finanzas con el kit de herramientas emocional de un niño: evitar el tema, sentir culpa cuando surge, y esperar que se resuelva solo. La evasión empeora la ansiedad, porque menos sabes sobre tu situación financiera, más tu cerebro llena los vacíos con escenarios de peor caso.",
        },
        {
          kind: "p",
          text: "La tercera razón es la comparación. Las redes sociales muestran las vacaciones, coches y casas de otros sin mostrarte sus deudas, su ansiedad, o las 60 horas semanales que financiaron la compra. La comparación crea un estándar invisible contra el que te mides, y el estándar es imposible porque no es real. Estás comparando tu interior con el exterior de otra persona, y siempre perderás esa comparación.",
        },
        {
          kind: "p",
          text: "La cuarta razón es la vergüenza. La vergüenza es la creencia de que tú eres el problema, no que tienes un problema. La vergüenza financiera dice: Debería saber hacer esto. Debería estar más avanzado. Todos los demás lo entendieron. La vergüenza te impide pedir ayuda, mirar los números, y dar los pequeños primeros pasos que realmente reducirían la ansiedad. La vergüenza es la mejor amiga de la ansiedad, porque te mantiene callado.",
        },
        {
          kind: "h2",
          id: "sintomas-fisicos",
          text: "Los síntomas físicos del estrés financiero",
        },
        {
          kind: "p",
          text: "El estrés financiero no vive solo en tu cabeza. Se manifiesta en tu cuerpo de maneras fáciles de perder porque parecen no tener relación con el dinero. Dolores de cabeza que aparecen el primero del mes cuando la renta es due. Tensión de la mandíbula por apretar los dientes por la noche. Problemas de estómago que parecen venir de la nada. Fatiga que el sueño no repara. Una opresión en el pecho cuando recibes un correo electrónico de tu banco. Esto no es imaginario. Es la respuesta de estrés haciendo exactamente lo que fue diseñada para hacer: preparar tu cuerpo para el peligro. El problema es que el peligro es un pensamiento sobre dinero, no una amenaza física, y tu cuerpo no puede distinguir la diferencia.",
        },
        {
          kind: "p",
          text: "Los síntomas físicos crean un ciclo de retroalimentación. Sientes el dolor de cabeza, y tu cerebro interpreta el dolor de cabeza como evidencia de que algo está mal, lo que aumenta la ansiedad, lo que aumenta el dolor de cabeza. El ciclo se refuerza a sí mismo, y la única forma de romperlo es tratar la ansiedad en su fuente: el pensamiento, no el síntoma. El cuerpo se calma cuando la mente se calma, y la mente se calma cuando la incertidumbre disminuye. Los hábitos de esta guía están diseñados para disminuir la incertidumbre, que es la solución aguas arriba de los síntomas físicos.",
        },
        {
          kind: "p",
          text: "El otro efecto físico del estrés financiero es en la toma de decisiones. El estrés reduce tu atención a la amenaza inmediata, lo cual es útil si un coche se dirige hacia ti pero destructivo si estás tratando de planificar un presupuesto. Bajo estrés, tomas decisiones más impulsivas, lo que crea más problemas financieros, lo que crea más estrés. El ciclo es vicioso y común. La forma de romperlo es reducir el estrés antes de tomar la decisión financiera, no después. Los hábitos a continuación están diseñados para hacer exactamente eso.",
        },
        {
          kind: "h2",
          id: "habitos",
          text: "Hábitos diarios para la paz financiera",
        },
        {
          kind: "ol",
          items: [
            "**Ventanas de revisión dedicadas.** Revisa tus cuentas en un horario programado, no cada vez que recibas una notificación. El horario programado te da control sobre cuándo interactúas con el dinero. La notificación aleatoria le da al dinero el control sobre cuándo interactúa contigo. La diferencia es entre elegir mirar y ser sorprendido por un número.",
            "**Toma una respiración profunda.** Respira lentamente tres veces antes de abrir cualquier aplicación financiera. Las tres respiraciones no son un truco mágico. Son un reinicio fisiológico. La respiración lenta activa el sistema nervioso parasimpático, que es el sistema que le dice a tu cuerpo que el peligro ha pasado. No eliminará la ansiedad, pero la reducirá lo suficiente para que puedas pensar con claridad en vez de entrar en espiral.",
            "**Usa un lenguaje amable.** Reemplaza \"Gasté de más\" con \"Estoy observando mis patrones de gasto\". La diferencia no es semántica. La primera formulación es un veredicto. La segunda es una observación. Un veredicto cierra la conversación. Una observación la abre. El lenguaje más amable crea un espacio entre tú y el número, y es en ese espacio donde vive el pensamiento racional.",
            "**Concéntrate en un número.** No te sobrecargues; elige solo una métrica para revisar por sesión. Tal vez sea el saldo de la cuenta corriente. Tal vez sea el monto en tu fondo de emergencia. Tal vez sea el monto que gastaste en supermercado esta semana. Un número es manejable. Cinco números al mismo tiempo son una receta para el pánico. Empieza pequeño, construye el hábito, y deja que el número de cosas que rastreas crezca naturalmente con el tiempo.",
            "**Establece un toque de quina.** Sin revisiones financieras o conversaciones sobre dinero en la última hora antes de dormir. Tu cerebro procesa contenido emocionalmente diferente durante el sueño, y la última cosa en la que piensas antes de dormir tiende a recibir más peso emocional. Una conversación sobre dinero a las 11 PM se convierte en una pesadilla financiera a las 3 AM. Mueve la revisión a la mañana, cuando tu cerebro está fresco y tu cortisol está naturalmente más alto.",
          ],
        },
        {
          kind: "h2",
          id: "revisar-sin-espiral",
          text: "Cómo revisar tus finanzas sin entrar en espiral",
        },
        {
          kind: "p",
          text: "El objetivo de revisar tus finanzas no es sentirte bien con el número. El objetivo es conocer el número, porque conocer es siempre menos aterrador que no conocer. Lo desconocido es donde vive la ansiedad. El número, incluso si es más bajo de lo que esperabas, es un hecho, y los hechos son manejables. El proceso de revisión debería tomar menos de cinco minutos. Cualquier cosa que exceda cinco minutos no es revisión; es rumiación, y la rumiación es ansiedad usando una máscara productiva.",
        },
        {
          kind: "p",
          text: "La revisión de cinco minutos tiene una estructura. Primero, abre la cuenta o la aplicación. Segundo, mira el número. Tercero, di el número en voz alta. Cuarto, pregúntate: ¿Este número es una crisis, o es solo no lo que yo quería? La mayoría de las veces, es solo no lo que tú querías. La distinción entre una crisis y una decepción es importante, porque una crisis requiere acción y una decepción requiere aceptación. La revisión de cinco minutos te ayuda a hacer la distinción antes de reaccionar.",
        },
        {
          kind: "p",
          text: "Después de la revisión, cierra la aplicación. No desplazues por las transacciones. No abras otras cuentas para comparar. No revises tu puntaje de crédito. No leas artículos sobre cómo ahorrar más. La revisión está terminada. El resto es ruido. La disciplina de cerrar la aplicación después de cinco minutos es la parte que realmente reduce la ansiedad, porque le enseña a tu cerebro que puedes mirar el número y sobrevivir. Cada vez que miras y sobrevives, mirar se hace más fácil, y sobrevivir se hace más rápido.",
        },
        {
          kind: "h2",
          id: "comparacion",
          text: "El papel de la comparación en la ansiedad por el dinero",
        },
        {
          kind: "p",
          text: "La comparación es el motor de la mayoría de la ansiedad financiera que no está ligada a una necesidad real de supervivencia. Tienes suficiente para la renta, pero tu compañero de trabajo acaba de comprar una casa, y ahora tu apartamento se siente como un fracaso. Tienes suficiente para el supermercado, pero tu amigo publicó una foto de vacaciones, y ahora tu fin de semana en casa se siente como un castigo. La comparación toma una situación que estaba bien hace cinco minutos y la convierte en evidencia de que estás quedándote atrás.",
        },
        {
          kind: "p",
          text: "El antídoto para la comparación no es la gratitud, aunque la gratitud ayuda. El antídoto es la información. Cuando ves la compra de alguien, estás viendo un punto de datos. No estás viendo su salario, sus deudas, su herencia, los ingresos de su pareja, su renta, su salud mental, o los compromisos que hizo para permitirse la compra. Estás viendo el resultado, no la entrada, y la entrada es lo que determina si la compra fue sabia o imprudente. La comparación es injusta porque es incompleta.",
        },
        {
          kind: "p",
          text: "La solución práctica es limitar las entradas que desencadenan la comparación. Esto no significa eliminar todas las redes sociales o evitar a todos los amigos. Significa notar qué cuentas, qué personas y qué contextos desencadenan la espiral de comparación, y reducir tu exposición a esos desencadenantes específicos. El objetivo no es vivir en una burbuja. El objetivo es dejar de exponerte voluntariamente a material que te hace sentir mal sobre decisiones que estaban perfectamente bien antes de que las vieras.",
        },
        {
          kind: "h2",
          id: "evitacion",
          text: "Cuando la ansiedad financiera se convierte en evitación",
        },
        {
          kind: "p",
          text: "La cosa más peligrosa que hace la ansiedad financiera es hacerte evitar tus finanzas. La evitación se siente protectora: si no miro, no tengo que lidiar con ello. Pero la evitación es lo opuesto a protectora. Es acumulativa. Cada día que no miras, lo desconocido crece, y la ansiedad llena lo desconocido con escenarios de peor caso. Una factura que no abriste se convierte en una multa por retraso que no esperabas. Una cuenta que no revisaste se convierte en un sobregiro que no atrapaste. La evitación crea exactamente el resultado que intentaba prevenir.",
        },
        {
          kind: "p",
          text: "El patrón es predecible. Primero, evitas mirar. Luego te sientes culpable por evitar. Luego la culpa hace más difícil mirar. Luego evitas con más fuerza. El ciclo puede durar meses o años, y generalmente termina con una crisis que te fuerza a mirar de todos modos, pero ahora en condiciones peores. La forma de romper el ciclo es hacer que el mirar sea lo más fácil posible. Cinco minutos. Un número. Sin juicio. Cuanto más pequeño el paso, más probable es que lo des, y cuantos más pasos das, más pequeño se siente el siguiente paso.",
        },
        {
          kind: "p",
          text: "La reformulación que ayuda a la mayoría de las personas es esta: mirar tus finanzas no es una prueba de tu carácter. Es un ejercicio de recolección de datos. No estás siendo calificado. No estás siendo juzgado. Estás recopilando información que te ayudará a tomar una mejor decisión mañana. El marco de recolección de datos elimina el peso moral del acto de mirar, y el peso eliminado hace que el mirar sea posible.",
        },
        {
          kind: "h2",
          id: "hablar-sobre-dinero",
          text: "Cómo hablar sobre dinero cuando te causa ansiedad",
        },
        {
          kind: "p",
          text: "El dinero es uno de los últimos temas tabú. Las personas discutirán su salud, sus relaciones y su salud mental antes de discutir su salario, sus deudas o sus hábitos de gasto. El silencio alrededor del dinero hace que la ansiedad empeore, porque la ansiedad se alimenta de la creencia de que eres el único que lucha con esto. No lo eres. El silencio es compartido, y el silencio compartido hace que todos se sientan solos.",
        },
        {
          kind: "p",
          text: "La forma de hablar sobre dinero sin entrar en espiral es establecer límites antes de que la conversación comience. Di a la otra persona: Puedo hablar de esto por diez minutos, y luego necesito parar. El límite de tiempo evita que la conversación se convierta en una sesión de terapia, que no es lo que la otra persona esperaba. El límite también te protege, porque significa que la conversación tiene un final conocido, y los finales conocidos son menos aterradores que los abiertos.",
        },
        {
          kind: "p",
          text: "El otro límite es el alcance. No tienes que compartir cada número. Puedes hablar de cómo el dinero te hace sentir sin compartir tu salario. Puedes hablar de la ansiedad sin compartir tus deudas. La sensación es la parte importante, porque la sensación es donde ocurre el cambio. Los números son solo datos. La sensación es la historia que cuentas sobre los datos, y la historia es lo que puedes cambiar.",
        },
        {
          kind: "h2",
          id: "rutina",
          text: "Construyendo una rutina financiera que no cause estrés",
        },
        {
          kind: "p",
          text: "Una rutina financiera no es un presupuesto. Un presupuesto es un plan para tu dinero. Una rutina es un plan para cuándo y cómo piensas sobre tu dinero. La rutina es lo que hace posible el presupuesto, porque sin una rutina, el presupuesto se convierte en una cosa más que no estás logrando hacer. La rutina es pequeña, regular y automática, y existe para hacer que el acto de interactuar con el dinero se sienta normal en vez de amenazante.",
        },
        {
          kind: "p",
          text: "La rutina tiene tres partes. La primera es el check-in semanal, que toma cinco minutos y ocurre a la misma hora cada semana. La segunda es la reconstrucción mensual, que toma 30 a 60 minutos y ocurre en la misma fecha cada mes. La tercera es la revisión anual, que toma 60 a 90 minutos y ocurre a la misma hora cada año. Las tres partes son diferentes en alcance pero idénticas en estructura: miras los números, haces un plan y cierras el libro.",
        },
        {
          kind: "p",
          text: "La clave para hacer la rutina sin estrés es hacer cada parte lo más pequeña posible. El check-in semanal nunca debería tomar más de cinco minutos. Si toma más, estás haciendo demasiado. La reconstrucción mensual nunca debería tomar más de 60 minutos. Si toma más, estás complicando demasiado. La revisión anual nunca debería tomar más de 90 minutos. Si toma más, estás rumiando, no revisando. Los límites de tiempo no son arbitrarios. Son la diferencia entre una rutina que reduce la ansiedad y una rutina que la crea.",
        },
        {
          kind: "h2",
          id: "scripts-de-dinero",
          text: "Los scripts de dinero ejecutándose en segundo plano",
        },
        {
          kind: "p",
          text: "La mayoría de la ansiedad financiera es impulsada por lo que los terapeutas llaman scripts de dinero: creencias inconscientes sobre dinero que absorbias en la infancia y has estado ejecutando desde entonces. Los scripts son invisibles, lo que los hace poderosos. No los notas más de lo que notas el sistema operativo en tu teléfono. Pero forman cada decisión financiera que tomas, y generalmente están equivocados.",
        },
        {
          kind: "p",
          text: "Los scripts de dinero más comunes son: el dinero es la raíz de todo mal, las personas ricas son codiciosas, yo no merezco dinero, nunca tendré suficiente, el dinero es difícil de ganar, el dinero es fácil de perder, y hablar sobre dinero es thonf. Cada uno de estos scripts crea un tipo específico de ansiedad. El script \"Nunca tendré suficiente\" crea una sensación permanente de escasez, incluso cuando los números están bien. El script \"El dinero es difícil de ganar\" crea miedo a gastar, porque cada dólar gastado se siente como si hubiera tomado meses reemplazarlo. El script \"Las personas ricas son codiciosas\" crea culpa al ganar más, lo que te impide negociar un aumento o subir tus precios.",
        },
        {
          kind: "p",
          text: "La forma de identificar tus scripts de dinero es notar los pensamientos que aparecen cuando piensas sobre dinero. Escríbelos, exactamente como aparecen en tu cabeza. No los edites. No los juzgues. Solo escríbelos. Luego pregunta: ¿De dónde vino este pensamiento? ¿Quién me dijo esto? ¿Cuándo creí esto por primera vez? Las respuestas generalmente se remontan a un momento específico de la infancia: un padre discutiendo sobre facturas, un profesor diciendo algo sobre personas ricas, un pariente haciendo un comentario sobre las finanzas de tu familia. El momento fue pequeño, pero la creencia que creó fue grande, y ha estado formando tu comportamiento financiero desde entonces.",
        },
        {
          kind: "p",
          text: "Los scripts de dinero no desaparecen solos. Desaparecen cuando los ves, los nombras y decides si todavía son ciertos. La mayoría no lo son. El script \"Nunca tendré suficiente\" era cierto cuando eras un niño y no tenías control sobre las finanzas del hogar. No es cierto ahora que tienes tu propio ingreso, tu propia cuenta y tu propia capacidad para tomar decisiones. El script sirvió a un propósito una vez. No sirve a un propósito ahora. Identificarlo es el primer paso para reemplazarlo por algo más preciso y menos doloroso.",
        },
        {
          kind: "h2",
          id: "ayudar-a-otros",
          text: "Cómo ayudar a otra persona con ansiedad financiera",
        },
        {
          kind: "p",
          text: "Si alguien que amas está luchando con ansiedad financiera, la cosa más útil que puedes hacer no es dar consejos. Los consejos se sienten útiles, pero a menudo llegan como juicio: deberías hacer esto, deberías dejar de hacer eso. La persona ya sabe que debería. El saber no es el problema. El problema es que la ansiedad hace que el hacer se sienta imposible. Lo que la persona necesita no es un plan. Lo que necesita es alguien que se siente con ella mientras mira los números, sin parpadear, sin arreglar y sin hacerla sentir peor.",
        },
        {
          kind: "p",
          text: "La versión práctica de esto se llama co-regulación. Te sientas en la misma habitación mientras la persona abre su aplicación bancaria. No miras la pantalla. No comentas el número. Solo existes en el espacio mientras ella hace lo que la asusta. Tu presencia calma reduce su respuesta de estrés, lo que hace que el mirar sea posible, lo que hace que el siguiente mirar sea más fácil. La co-regulación no es una solución. Es un puente que hace que la solución sea posible.",
        },
        {
          kind: "p",
          text: "La otra cosa que puedes hacer es normalizar. Di: Yo también me siento ansioso por dinero a veces. Yo también evito mirar mis cuentas. Yo también siento vergüenza de mis gastos. La normalización elimina el aislamiento, y el aislamiento es lo que hace que la ansiedad crezca. La persona no necesita ser arreglada. Necesita saber que no es la única que se siente así. La experiencia compartida es más sanadora que cualquier aplicación de presupuesto o plan financiero.",
        },
        {
          kind: "h2",
          id: "mito-del-fondo-de-emergencia",
          text: "El mito del fondo de emergencia y por qué empeora la ansiedad",
        },
        {
          kind: "p",
          text: "Todo el mundo dice: construye un fondo de emergencia. Tres a seis meses de gastos. Ese es el número mágico. Si lo tienes, estás seguro. Si no lo tienes, deberías sentir ansiedad. El consejo es bien intencionado, pero a menudo empeora la ansiedad, porque crea un nuevo número para obsesionarse y una nueva forma de sentirte como un fracasado. Ya tienes el número de la renta, el número de la tarjeta de crédito y el número de ahorros. Ahora también tienes el número del fondo de emergencia, y generalmente es el que se siente más lejano.",
        },
        {
          kind: "p",
          text: "El fondo de emergencia es una buena idea. Pero la forma en que normalmente se presenta lo convierte en otra fuente de ansiedad en lugar de una solución. La presentación asume que tienes margen para ahorrar, que puedes ahorrar consistentemente, y que el acto de ahorrar no crea estrés por sí mismo. Para personas con ansiedad financiera, el acto de ahorrar frecuentemente crea estrés, porque cada dólar ahorrado es un dólar que podría haberse usado para reducir la ansiedad inmediata. La tensión entre ahorrar para el futuro y calmar el presente es real, y el consejo estándar no la aborda.",
        },
        {
          kind: "p",
          text: "Un mejor marco es pensar en el fondo de emergencia como un espectro, no como un objetivo. Cualquier cantidad ahorrada es mejor que nada. Cien dólares son mejores que cero. Quinientos son mejores que cien. El número no tiene que ser perfecto. Tiene que existir. La existencia de un fondo pequeño cambia la historia que te cuentas sobre tu capacidad para manejar sorpresas, y la historia cambiada es lo que reduce la ansiedad. No va del dinero. Va de la historia.",
        },
        {
          kind: "h2",
          id: "dismorfia",
          text: "Ansiedad financiera y dismorfia monetaria",
        },
        {
          kind: "p",
          text: "La dismorfia monetaria es un término más reciente para un fenómeno que siempre ha existido: la distorsión entre tu situación financiera real y cómo la percibes. Puedes ganar un salario cómodo y sentirte perpetuamente sin dinero. Puedes tener más ahorros que la mayoría de tus pares y sentirte como si estuvieras quedándote atrás. La distorsión no va de los hechos. Va de la lente a través de la cual ves los hechos, y la ansiedad financiera es la lente que hace que todo se vea peor de lo que es.",
        },
        {
          kind: "p",
          text: "La dismorfia monetaria es común entre personas que crecieron en hogares donde el dinero era apretado, incluso si su situación actual es estable. La experiencia de la infancia creó una expectativa básica de escasez, y la básica no se actualiza automáticamente cuando los hechos cambian. Puedes ganar tres veces más de lo que ganaban tus padres y todavía sentir la misma ansiedad que ellos sentían, porque la sensación fue instalada antes de que tuvieras el lenguaje para cuestionarla. La ansiedad es heredada, no ganada, y la herencia puede ser rechazada.",
        },
        {
          kind: "p",
          text: "El efecto práctico de la dismorfia monetaria es que te impide disfrutar la estabilidad financiera que ya has alcanzado. Ahorras agresivamente pero sientes que nunca es suficiente. Evitas gastar en cosas que mejorarían tu vida porque los gastos desencadenan la ansiedad. Te comparas con personas que ganan más y te sientes como un fracasado, aunque estás bien por cada medida objetiva. La dismorfia es la ansiedad usando un disfraz, y el disfraz se ve como prudencia.",
        },
        {
          kind: "h2",
          id: "cuando-buscar-ayuda",
          text: "Cuándo buscar apoyo profesional",
        },
        {
          kind: "p",
          text: "Si la ansiedad por dinero está afectando gravemente tu sueño, relaciones o funcionamiento diario por más de dos semanas, considera buscar apoyo de un terapeuta financiero. Una aplicación de presupuesto puede impedir que la ansiedad empeore, pero no puede reemplazar el cuidado profesional.",
        },
        {
          kind: "p",
          text: "La terapia financiera es un campo específico que combina planificación financiera con apoyo psicológico. Un terapeuta financiero no solo te dice dónde poner tu dinero. Te ayuda a entender por qué el dinero te hace sentir como te hace sentir, y te ayuda a construir habilidades emocionales para interactuar con tus finanzas sin la sobrecarga. La combinación es más efectiva que cualquier disciplina por separado, porque el plan financiero no se mantiene si la fundación emocional no está estable, y el trabajo emocional no se mantiene si la fundación financiera no se aborda.",
        },
        {
          kind: "p",
          text: "Los signos de que deberías buscar ayuda incluyen: no has abierto tu correo por más de un mes, no has iniciado sesión en tu cuenta bancaria por más de dos semanas, estás perdiendo el sueño por dinero más de una vez por semana, estás discutiendo sobre dinero con tu pareja más de una vez por semana, o estás tomando decisiones financieras basadas en pánico en lugar de información. Ninguno de estos signos significa que has fallado. Significan que la ansiedad ha crecido más allá de lo que la autoayuda puede manejar, y no hay vergüenza en eso. La vergüenza sería seguir sufriendo cuando la ayuda está disponible.",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Preguntas frecuentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "¿La ansiedad financiera es lo mismo que ser malo con el dinero?",
              a: "No. La ansiedad financiera es una respuesta emocional a la incertidumbre sobre el dinero. Puede afectar a personas que son excelentes con el dinero y a personas que no lo son. La ansiedad va de la sensación, no de la habilidad. Puedes ser altamente competente con tus finanzas y todavía sentir ansiedad sobre ellas, porque la ansiedad está enraizada en la creencia de que no estás a salvo, no en la realidad de tu situación financiera.",
            },
            {
              q: "¿Una aplicación de presupuesto puede ayudar con la ansiedad financiera?",
              a: "Depende de la aplicación. Algunas aplicaciones empeoran la ansiedad bombardeándote con notificaciones, mostrándote gráficos que se sienten como juicio, y haciéndote sentir como si estuvieras fallando. Una aplicación bien diseñada hace lo opuesto: reduce el número de decisiones que tienes que tomar, presenta información calmadamente, y te ayuda a construir una rutina que hace que mirar tu dinero se sienta normal. La aplicación correcta no reemplaza ayuda profesional para ansiedad grave, pero puede ser parte de un plan que reduce la carga diaria.",
            },
            {
              q: "¿Cuánto tiempo toma para que la ansiedad financiera mejore?",
              a: "Depende de la fuente. Si la ansiedad es causada por un problema financiero específico (deudas, una factura, pérdida de empleo), la ansiedad frecuentemente disminuye tan pronto como tienes un plan, incluso si el plan toma meses en ejecutarse. Si la ansiedad es causada por una creencia más profunda (vergüenza, trauma infantil con dinero, miedo a no ser suficiente), puede tomar más tiempo, y la ayuda profesional frecuentemente acelera el proceso. La mayoría de las personas notan mejoría dentro de cuatro a seis semanas después de comenzar una rutina consistente, incluso sin ayuda profesional.",
            },
            {
              q: "¿Debería compartir mi ansiedad financiera con mi pareja?",
              a: "Sí, pero con estructura. Elige un momento en el que ninguno de ustedes esté estresado, establece un límite de tiempo, y concéntrate en cómo te sientes en lugar de lo que la otra persona debería hacer. El objetivo de la conversación no es resolver el problema juntos. El objetivo es ser conocido. Una vez que el sentimiento se comparte, la vergüenza pierde su poder, y la resolución de problemas se vuelve posible desde un lugar más calmado.",
            },
            {
              q: "¿Qué pasa si mi ansiedad financiera está justificada porque mis finanzas realmente son malas?",
              a: "Incluso la ansiedad justificada sigue siendo ansiedad, y la ansiedad no te ayuda a resolver problemas financieros. Te hace evitarlos. El hecho de que tus finanzas sean difíciles hace que sea más importante, no menos, interactuar con ellas calmadamente. La calma no es negación. La calma es la condición bajo la cual las buenas decisiones son posibles. Una persona calmada con finanzas malas toma mejores decisiones que una persona ansiosa con finanzas malas, cada vez.",
            },
            {
              q: "¿Es normal sentir ansiedad por dinero incluso cuando me está yendo bien?",
              a: "Sí. La ansiedad financiera no es proporcional a tu situación financiera. Es proporcional a tu relación con la incertidumbre, tus scripts de dinero de la infancia, y las comparaciones que haces. Las personas con ingresos cómodos frecuentemente se sienten más ansiosas por dinero que personas con menos, porque tienen más que perder y decisiones más complejas que tomar. La ansiedad no es una señal de que algo está mal con tus finanzas. Es una señal de que algo vale la pena explorar en tu relación con el dinero.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusion",
          text: "Una relación más tranquila con el dinero empieza con mirar",
        },
        {
          kind: "p",
          text: "La ansiedad financiera no es un defecto de carácter. Es una respuesta de estrés a la incertidumbre, y la incertidumbre disminuye cuando miras. El mirar no tiene que ser dramático. No tiene que ser una revisión completa del presupuesto. Puede ser cinco minutos, un número, sin juicio. Los cinco minutos no son una solución. Es una práctica, y la práctica se acumula. Cada vez que miras, el mirar se hace más fácil. Cada vez que sobrevives al mirar, el miedo pierde un poco de su poder. La ansiedad no desaparece, pero se encoge, y el espacio que solía ocupar se llena con algo más útil: información, autonomía, y el conocimiento silencioso de que puedes manejar esto.",
        },
        {
          kind: "p",
          text: "Los hábitos de esta guía están diseñados para reducir la carga emocional antes incluso de que mires los números. Las respiraciones, el lenguaje, los límites de tiempo, el toque de quina: cada uno es una pequeña intervención que cambia la relación entre tú y tu dinero. Ninguno requiere fuerza de voluntad. Ninguno requiere que te sientas motivado. Solo requieren que los hagas, y el hacer crea la motivación, no al revés. La motivación sigue a la acción. La acción no sigue a la motivación.",
        },
        {
          kind: "p",
          text: "Si quieres una herramienta que haga que el mirar sea más fácil, Savlo está diseñado exactamente para eso: una forma tranquila, privada y sin anuncios de ver tu dinero sin la sobrecarga. Está disponible en Android y llegará pronto a iOS. Si quieres seguir, los artículos relacionados a continuación profundizan en las mecánicas específicas: la más amplia [filosofía de presupuestación](/es/blog/how-to-budget-money), las [mecánicas prácticas de Sinking Funds](/es/blog/sinking-funds), y la guía específica sobre [la regla 50/30/20](/es/blog/50-30-20-rule) si quieres un punto de partida simple.",
        },
      ],
    },
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
    readingTime: 22,
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "El presupuesto base cero es uno de los métodos más conocidos de planificación personal. La regla es directa: cuando el mes empieza, cada unidad de dinero esperada tiene un destino. Para cuando llega el primer gasto, no hay saldo sin nombre en la cuenta esperando ser comido por el impulso. Eso es todo. El número del lado derecho de la página es cero, no porque se gastó todo, sino porque nada quedó sin tarea. La ambigüedad se fue.",
        },
        {
          kind: "p",
          text: "El cambio mental va de reactivo a intencional. En lugar de preguntar «¿qué me quedó al final del mes?», empiezas el mes con una respuesta completa. La mayoría de las personas que mantienen un presupuesto base cero por más de seis meses dicen lo mismo: el presupuesto deja de sentirse como una restricción y empieza a sentirse como un permiso. Sabes exactamente qué es seguro gastar, qué está reservado para una factura futura y qué está bloqueado en una meta. La incertidumbre desaparece.",
        },
        {
          kind: "p",
          text: "El sistema fue popularizado en el mundo de las finanzas personales por YNAB (You Need A Budget) y tiene raíces en la contabilidad gerencial de los años setenta. La versión personal es mucho más ligera que la corporativa, pero el principio es el mismo: cada unidad monetaria es un recurso, y los recursos son más útiles cuando se asignan con intención. Puedes leer más sobre la filosofía amplia en nuestra guía sobre [cómo presupuestar dinero](/es/blog/how-to-budget-money), y compararlo con el enfoque porcentual más simple en la [guía de 50/30/20](/es/blog/50-30-20-rule).",
        },
        {
          kind: "h2",
          id: "cuatro-reglas",
          text: "Las cuatro reglas del presupuesto base cero",
        },
        {
          kind: "p",
          text: "YNAB plantea la práctica como cuatro reglas. Vale la pena repasarlas porque explican el comportamiento detrás de la matemática, no solo la matemática en sí.",
        },
        {
          kind: "ol",
          items: [
            "**Dale un trabajo a cada peso.** El ingreso que entra es dinero que necesita una asignación, no dinero que necesita un escondite. El trabajo puede ser una factura, una meta, un Sinking Fund, un colchón o una categoría de gasto flexible. El punto es que ningún peso quede sin asignar.",
            "**Acepta tus gastos verdaderos.** La mayoría de las sorpresas del año no son sorpresas. Seguros, impuestos, regalos, matrículas, viajes. Llegan en fechas predecibles. El presupuesto base cero te obliga a repartir su costo a lo largo del año asignando una pequeña cantidad cada mes a un Sinking Fund para cada uno. El gasto deja de ser sorpresa.",
            "**Rueda con los golpes.** Si te pasas en una categoría, mueves dinero desde otra categoría para cubrirlo. El plan se ajusta, el total queda en cero y el mes no se arruina. Pasarse es información, no fracaso.",
            "**Envejece tu dinero.** Cuanto más tiempo permanezca tu dinero en la cuenta antes de gastarlo, más espacio de maniobra tienes. Con el tiempo, el presupuesto base cero amplía la brecha entre ganar y gastar, que es lo que crea calma financiera real. La meta no es atesorar. La meta es gastar dinero que tiene al menos un mes de edad, no dinero que acaba de llegar.",
          ],
        },
        {
          kind: "h2",
          id: "proceso-paso-a-paso",
          text: "El proceso paso a paso",
        },
        {
          kind: "ol",
          items: [
            "Anota tu ingreso neto total del mes.",
            "Enumera todas las obligaciones fijas (vivienda, servicios, transporte).",
            "Asigna primero el dinero al ahorro y a las inversiones.",
            "Distribuye el resto entre categorías flexibles del día a día.",
            "Asegúrate de que el total de asignaciones sea exactamente igual al ingreso que va a entrar.",
          ],
        },
        {
          kind: "p",
          text: "Los cinco pasos parecen simples porque el trabajo no está en los pasos. El trabajo está en las categorías que elijas, el tamaño del colchón que mantengas y la disciplina de volver al plan cada semana. El primer mes suele tomar entre 60 y 90 minutos. Para el tercer mes, la mayoría puede reconstruir el plan en 30. El punto de los pasos es darte una secuencia que no salte las partes difíciles, sobre todo la tentación de dejar una línea de «varios» al final. No hay varios. La idea es hacer explícito lo implícito.",
        },
        {
          kind: "h2",
          id: "ejemplo-real",
          text: "Un ejemplo con números reales",
        },
        {
          kind: "p",
          text: "Para ver el método en acción, tomemos un solo mes. Ingreso neto: 4.000 euros. El plan empieza listando cada obligación fija con su fecha de vencimiento y su monto. Alquiler 1.400, servicios 120, transporte 180, teléfono 60, pago mínimo de deuda 260, comida 480, seguros 90, suscripciones 45, gastos médicos recurrentes 60. Suman 2.695. La siguiente capa son metas y Sinking Funds: fondo de emergencia 200, regalos de fin de año 50, mantenimiento del coche 40, tasas anuales 40, aprendizaje 30. Eso añade 360. Hasta ahora, 2.695 + 360 = 3.055 de 4.000. Los 945 restantes se reparten en categorías flexibles: salir a comer 200, entretenimiento 120, cuidado personal 60, ropa 80, hijos 120, regalos 50, varios flexible 315. El total llega a exactamente 4.000. El saldo sin asignar es cero. Cada euro tiene un trabajo.",
        },
        {
          kind: "p",
          text: "Ahora el mes empieza. Hacia el día 12, «salir a comer» se ha consumido más de lo previsto, y hay un exceso de 40. El plan no está roto. La regla es mover 40 desde una categoría con superávit (entretenimiento tuvo una semana tranquila) hacia salir a comer. El total sigue en cero. El plan se ajustó. La conducta cambió. El mes continúa.",
        },
        {
          kind: "h2",
          id: "aguanta-realidad",
          text: "Construir un presupuesto base cero que aguante el contacto con la realidad",
        },
        {
          kind: "p",
          text: "La versión del presupuesto base cero que sobrevive un año es la que es ligeramente más generosa de lo que crees que necesita ser. El error que comete la mayoría en el primer intento es presupuestar por debajo las categorías elásticas. Adivinan 150 para comida, luego gastan 200, luego sienten que fallaron, luego abandonan el sistema. La solución es presupuestar el promedio real de los últimos tres meses, no la cifra esperanzadora. Una vez que las categorías elásticas son realistas, los excesos sorpresa se reducen. El plan deja de sentirse como una pelea.",
        },
        {
          kind: "p",
          text: "El otro truco de durabilidad es planificar lo irregular. Toma los últimos 12 meses y anota cada gasto que ocurrió solo unas pocas veces: matrícula del coche, materiales escolares, veterinario, fiestas, bodas de amigos. Súmalos. Divide entre 12. Esa es tu asignación mensual irregular. Métela en un Sinking Fund. Cuando llegue el gasto, el dinero ya está ahí. El plan sobrevive porque lo irregular fue integrado, no ignorado.",
        },
        {
          kind: "h2",
          id: "ingreso-irregular",
          text: "Cómo manejar ingreso irregular con base cero",
        },
        {
          kind: "p",
          text: "El presupuesto base cero fue diseñado para sueldos predecibles, pero funciona igual de bien con ingresos irregulares, con un cambio: en lugar de presupuestar el ingreso que recibes este mes, presupuestas el ingreso que conservas. Para freelancers, trabajadores de gig y cualquiera con comisiones, el ritmo es depositar cada pago en una cuenta de retención y luego asignar a categorías desde esa cuenta. Las categorías son las mismas. La fuente de los euros solo se retrasa un paso.",
        },
        {
          kind: "p",
          text: "La disciplina que hace que esto funcione es presupuestar desde el mes más bajo confiable, no desde el promedio. Si los últimos seis meses de depósitos netos son 3.200, 4.500, 2.900, 3.800, 4.200 y 2.400, no presupuestes el promedio. Presupuesta 2.400, y trata cada euro por encima como una decisión: un Sinking Fund, un pago extra de deuda, una recarga de colchón, un acelerador de meta. Este es el mismo principio que aparece en la guía más amplia sobre [cómo presupuestar dinero](/es/blog/how-to-budget-money) cuando hay ingresos variables; la estructura base cero simplemente le da un lugar donde aterrizar.",
        },
        {
          kind: "h2",
          id: "ritmo-semanal",
          text: "El ritmo semanal del presupuesto base cero",
        },
        {
          kind: "p",
          text: "El plan se construye una vez al mes. El plan se revisa una vez a la semana. La revisión es la parte que la mayoría se salta, y el salto es lo que mata el sistema. Una revisión semanal toma entre quince y veinte minutos: abre el plan, anota los gastos de la semana, mira el saldo restante en cada categoría y pregunta si alguna categoría se dirige a un exceso. Si sí, decide ahora de dónde saldrá el dinero. La decisión tomada temprano es la decisión que funciona.",
        },
        {
          kind: "p",
          text: "La otra mitad del ritmo es la reconstrucción mensual. Reserva un bloque de calendario de 60 a 90 minutos alrededor del día 25 de cada mes, cuando la mayoría de las facturas del mes siguiente son visibles. Reconstruye el plan de arriba a abajo. Ajusta las categorías, los objetivos de Sinking Fund, el tamaño del colchón, las prioridades de metas. La reconstrucción es donde el plan se vuelve más fino cada mes. También es donde la visión anual empieza a sentirse como realidad y no como aspiración.",
        },
        {
          kind: "h2",
          id: "sinking-funds",
          text: "Por qué base cero se combina tan bien con Sinking Funds",
        },
        {
          kind: "p",
          text: "Los Sinking Funds son el arma secreta del presupuesto base cero. La mayoría piensa en un presupuesto como una herramienta para los próximos treinta días: cuánto para alquiler, cuánto para comida, cuánto para transporte. Un Sinking Fund es una herramienta para los próximos doce meses: convierte gastos irregulares predecibles en contribuciones mensuales pequeñas, de modo que el gasto deja de ser sorpresa y se convierte en una línea del presupuesto.",
        },
        {
          kind: "p",
          text: "La forma de configurarlos dentro de un presupuesto base cero es crear una categoría separada para cada gasto irregular, decidir su costo total anual, dividir entre doce y asignar esa cantidad cada mes. Seguros dos veces al año, 300 cada uno. Regalos en noviembre y diciembre, 400 en total. Matrícula del vehículo en marzo, 180. Suscripciones anuales en enero, 240. Vacaciones en verano, 1.200. Las asignaciones mensuales suman aproximadamente 190. Ese es el costo, en porciones mensuales, de un año sin gastos sorpresa. Es un número pequeño, y ese es el punto: los Sinking Funds hacen que los gastos grandes se sientan pequeños.",
        },
        {
          kind: "p",
          text: "El efecto combinado del presupuesto base cero más los Sinking Funds es eliminar las dos fuentes más comunes de estrés presupuestario: el gasto grande sorpresa y la sensación creciente de que el mes va a ir apretado. El Sinking Fund se encarga del primero. El seguimiento por categorías se encarga del segundo. El presupuesto deja de ser algo que sobrevives y empieza a ser algo que mantienes. Nuestra [guía más profunda sobre Sinking Funds](/es/blog/sinking-funds) recorre la mecánica en detalle, incluyendo cómo dimensionarlos y cómo priorizar cuando no hay suficiente espacio en el presupuesto para todos.",
        },
        {
          kind: "h2",
          id: "para-quien",
          text: "¿Para quién es?",
        },
        {
          kind: "p",
          text: "El presupuesto base cero es perfecto para personas que aman el detalle, la estructura y la planificación financiera activa. Es la metodología central detrás de herramientas como YNAB.",
        },
        {
          kind: "p",
          text: "Más específicamente, el método tiende a encajar con personas que quieren una respuesta clara y por escrito a la pregunta «¿qué hago con el próximo peso?». Si alguna vez cerraste tu app bancaria sintiéndote un poco perdido, el método es para ti. También encaja con personas que están pasando de un presupuesto de supervivencia a un presupuesto de planificación, porque fuerza la diferencia entre una factura y una meta a salir a la luz. Una factura es un monto fijo con una fecha fija. Una meta es un monto flexible con una fecha objetivo. Tratarlas igual es una de las razones más comunes por las que los presupuestos fallan.",
        },
        {
          kind: "h2",
          id: "no-para-quien",
          text: "¿A quién podría no convenirle?",
        },
        {
          kind: "p",
          text: "Si planificar cada peso se siente demasiado restrictivo o abrumador, empieza con la mucho más ligera [regla 50/30/20](/es/blog/50-30-20-rule). El presupuesto base cero es un gran destino, pero no es una línea de salida obligatoria.",
        },
        {
          kind: "p",
          text: "El otro grupo que puede tener dificultades con base cero es cualquier persona cuyo ingreso sea tan inestable que el plan mensual se construya sobre conjeturas. Si el sueldo varía más del 40% mes a mes, una estructura diferente (primero un Sinking Fund grande, después un presupuesto) suele funcionar mejor. La [guía para presupuestar con bajos ingresos](/es/blog/budgeting-on-a-low-income) cubre ese caso en detalle. La buena noticia es que el presupuesto base cero se vuelve más fácil cuanto más lo usas, así que incluso un usuario de bajo encaje puede graduarse en él una vez que el ingreso se estabilice.",
        },
        {
          kind: "h2",
          id: "categorias-comunes",
          text: "Categorías comunes y cómo dimensionarlas",
        },
        {
          kind: "p",
          text: "La mayoría de los presupuestos base cero comparten un conjunto similar de categorías. Los nombres exactos importan menos que la forma. La forma suele ser: vivienda y servicios (alrededor del 30% al 40% del ingreso), comida y hogar (10% al 15%), transporte (5% al 10%), seguros y servicio mínimo de deuda (5% al 10%), ahorro y Sinking Funds (10% al 20%), gasto flexible (10% al 20%) y un colchón discrecional (5% al 10%). Los porcentajes exactos varían, pero la estructura se mantiene. Un presupuesto con muy pocas categorías esconde excesos. Un presupuesto con demasiadas crea fatiga de decisión. El punto dulce suele estar entre 8 y 14 categorías.",
        },
        {
          kind: "p",
          text: "El tamaño de cada Sinking Fund depende del gasto que cubre. Toma el costo anual total y divide entre doce. Una factura de seguros de 600 euros se convierte en 50 al mes. Unas vacaciones de 1.200 euros se convierten en 100 al mes. Una inspección del coche de 300 euros se convierte en 25 al mes. Estas asignaciones se sienten pequeñas, que es el punto. El punto de los Sinking Funds es hacer que los gastos grandes previsibles se sientan como asignaciones mensuales pequeñas. Cuanto más tiempo mantengas el sistema, más natural se vuelve esto, y menos tiene tu año financiero un solo mes que te sorprenda.",
        },
        {
          kind: "h2",
          id: "errores-comunes",
          text: "Errores comunes y cómo evitarlos",
        },
        {
          kind: "ol",
          items: [
            "**Presupuestar por debajo las categorías elásticas.** La razón más común por la que un presupuesto base cero muere en el primer mes. Usa el promedio de tres meses, no la cifra esperanzadora. Si el promedio es 200 para comida, planifica 200.",
            "**Saltarse la revisión semanal.** La revisión es lo que mantiene al plan honesto. Sin ella, el plan es una lista de deseos. Con ella, el plan es un contrato que mantienes contigo mismo.",
            "**Olvidar los irregulares.** Seguros, regalos, viajes, escuela, médico. Los irregulares son donde se esconden las sorpresas. La forma de eliminar la sorpresa es asignar para ellos cada mes, incluso en cantidades pequeñas.",
            "**Tratar el exceso como fracaso.** El exceso es información. Mueve dinero desde otra categoría, ajusta el plan y sigue. La regla de «rodar con los golpes» es la que separa un presupuesto base cero de largo plazo de uno de tres meses.",
            "**Construir un plan una vez y nunca revisarlo.** Un presupuesto es un documento vivo. Si no cambia, la vida para la que fue diseñado ha cambiado, y el presupuesto ya no está sincronizado con la realidad. La reconstrucción mensual es lo que lo mantiene en sincronía.",
            "**Llevar la meta a cero demasiado agresivamente.** Un presupuesto que llega a cero es un presupuesto que no tiene colchón. Deja una pequeña línea de «listo para asignar» o discrecional, aunque sean solo 20. El colchón es lo que absorbe las sorpresas que las categorías no capturaron.",
          ],
        },
        {
          kind: "h2",
          id: "comparar-metodos",
          text: "Cómo se compara base cero con otros métodos",
        },
        {
          kind: "p",
          text: "El presupuesto base cero es uno de varios métodos de presupuestación bien conocidos. Las diferencias importan porque determinan cuánto tiempo y cuánta estructura te pide el método.",
        },
        {
          kind: "p",
          text: "La [regla 50/30/20](/es/blog/50-30-20-rule) divide el ingreso en tres categorías porcentuales: 50% para necesidades, 30% para deseos, 20% para futuro (ahorro y deuda). Es el método más ligero y el más fácil de mantener. La contrapartida es que las categorías dentro de cada cubo siguen siendo decisión tuya, lo que significa que un exceso puede esconderse dentro del cubo de deseos durante mucho tiempo antes de hacerse visible. El presupuesto base cero lo arregla dando a cada peso una categoría específica.",
        },
        {
          kind: "p",
          text: "El método de sobres (también llamado cash stuffing) es la versión en efectivo del presupuesto base cero. Cada categoría tiene un sobre, y cuando el sobre queda vacío, la categoría se pausa para el mes. La disciplina es la misma que base cero; la diferencia es que el dinero está en sobres físicos en lugar de en una app de seguimiento. El método de sobres funciona bien para personas que gastan más libremente cuando tocan una tarjeta. El presupuesto base cero funciona bien para personas que quieren la flexibilidad de los pagos con tarjeta pero la disciplina del método de sobres. La mayoría de las apps modernas de base cero, incluida Savlo, te permiten recrear la lógica de sobres digitalmente como «Spaces».",
        },
        {
          kind: "p",
          text: "El método porcentual es similar al 50/30/20 pero con cubos personalizados. Algunas personas usan 70/20/10 (gasto, ahorro, caridad). Otras usan 60/30/10 (gasto, futuro, colchón). La ventaja es la flexibilidad. La desventaja es que los cubos pueden convertirse en cajones de sastre que esconden el mismo problema que esconde 50/30/20. El presupuesto base cero lleva la estructura un nivel más profundo, de modo que el cubo de gasto ya no es un número único sino un conjunto de categorías con nombre.",
        },
        {
          kind: "p",
          text: "El método de pagarte a ti mismo primero (también llamado presupuesto inverso) es lo opuesto a base cero. Decides primero la cifra de ahorro o inversión, la automatizas y dejas que el resto del ingreso fluya al gasto sin un plan detallado. Es el método más fácil de mantener y el más difícil de mantener honesto. El presupuesto base cero es más trabajo, pero te da una imagen mucho más clara de adónde va el dinero.",
        },
        {
          kind: "p",
          text: "El método correcto es el que encaja con tu vida y tu energía. El método más ligero que seguirás usando dentro de doce meses es el correcto para ti. La mayoría de las personas que prueban el presupuesto base cero una vez nunca vuelven a un método más ligero, porque la visibilidad y el control son difíciles de soltar. Pero un método más ligero usado durante una década es mejor que un método más pesado usado durante un mes.",
        },
        {
          kind: "h2",
          id: "primer-mes",
          text: "Un primer mes realista en base cero",
        },
        {
          kind: "p",
          text: "El primer mes con un presupuesto base cero rara vez es tranquilo. El plan toma más tiempo del que esperabas para construirse, las categorías no son del todo correctas y los números cambian a medida que el mes avanza. El plan se supone que debe cambiar. El error es tratar el primer mes como un fracaso si no llega a cero el día uno. El primer mes realista es más un borrador que una versión final: te enseña cuáles deberían ser las categorías, cuáles deberían ser los objetivos de los Sinking Funds y cómo se comportan realmente las categorías elásticas. El segundo mes es cuando el plan empieza a parecerse al que querías escribir al principio.",
        },
        {
          kind: "p",
          text: "Algunos consejos prácticos para el primer mes. Primero, construye el plan en papel o en una hoja de cálculo antes de moverlo a una app. La fricción de escribirlo a mano captura muchos errores que la app habría aceptado. Segundo, pide a otra persona que mire el plan, idealmente alguien que también gestione un presupuesto del hogar. Verá los huecos que tú no ves. Tercero, no ajustes el plan durante las primeras tres semanas. Deja que las categorías aguanten o se pasen. Los datos de las primeras tres semanas son los que hacen que el plan del segundo mes sea preciso. Cuarto, planea una fecha para reconstruir. La reconstrucción es la parte del mes que realmente cierra el ciclo.",
        },
        {
          kind: "p",
          text: "El primer mes realista es el mes en que aprendes que el presupuesto es una herramienta para aprender, no una herramienta para controlar. Los datos que recoges en el mes uno son los que hacen que el mes doce sea casi sin esfuerzo. La mayoría de las personas que se quedan con el presupuesto base cero durante un año dicen lo mismo: el presupuesto dejó de ser algo que tenían que mantener y empezó a ser algo de lo que no querrían prescindir.",
        },
        {
          kind: "h2",
          id: "seis-meses",
          text: "Qué cambia después de seis meses de base cero",
        },
        {
          kind: "p",
          text: "Para el sexto mes, el plan suele haberse estabilizado en un ritmo. Las categorías están cerca de su forma final. Los objetivos de Sinking Funds están cerca de su forma final. El colchón (la línea de «listo para asignar») está empezando a sentirse cómodo. Los gastos sorpresa ya no sorprenden. La carga mental del presupuesto se ha reducido a la mitad, porque el sistema ya está en la memoria muscular.",
        },
        {
          kind: "p",
          text: "El cambio que suele ocurrir alrededor del mes seis es de «estoy siguiendo un plan» a «el plan me está siguiendo a mí». Las categorías ya no son una restricción. Son una descripción de la vida que estás viviendo. Aparece una nueva categoría de gasto (gimnasio, actividad de un hijo) y el sistema la absorbe sin drama. Una categoría vieja se encoge (ya no vas a la oficina) y el sistema también absorbe eso. El plan está vivo. El plan es tuyo.",
        },
        {
          kind: "p",
          text: "El otro cambio es la relación con el exceso. En los primeros meses, un exceso se sentía como un fracaso. Para el sexto mes, un exceso se siente como una pregunta: ¿qué categoría tiene superávit este mes y puedo mover dinero desde ahí? Los datos han dejado de ser un veredicto y se han convertido en una herramienta. El plan sigue llegando a cero. El mes sigue continuando. La calma que el sistema se suponía que iba a producir está empezando a sentirse realmente como calma.",
        },
        {
          kind: "p",
          text: "El cambio alrededor del mes seis es también cuando la mayoría empieza a preguntarse qué pasa si siguen. La respuesta, para la mayoría, es que el presupuesto se vuelve más fino cada año, los Sinking Funds cubren más y más del año, y el colchón de «listo para asignar» crece lo suficiente como para absorber un solo mal mes sin romper el plan. Ese es el arco largo del presupuesto base cero: no un proyecto de un mes, sino una mejora plurianual de la forma en que piensas sobre el dinero.",
        },
        {
          kind: "h2",
          id: "revision-anual",
          text: "La revisión anual que mantiene al sistema honesto",
        },
        {
          kind: "p",
          text: "Una vez al año, el presupuesto merece una mirada más profunda que la reconstrucción mensual. La revisión anual es donde los datos de los últimos doce meses se convierten en el plan de los próximos doce. La mayoría la hace a finales de diciembre o principios de enero, cuando el año está fresco y el siguiente está tomando forma. La revisión tiene tres partes.",
        },
        {
          kind: "p",
          text: "Primero, mira las categorías que se pasaron de forma consistente. Una categoría que se pasa todos los meses no es un problema de exceso. Es un problema de dimensionamiento. La solución es aumentar la categoría, o preguntarse si la categoría tiene la forma correcta. A veces la solución correcta es dividir una categoría en dos. Una categoría de «salir a comer» que se pasa todos los meses podría ser realmente una categoría de «salir a comer» y una de «social». La división no reduce el gasto, pero hace que el gasto sea honesto.",
        },
        {
          kind: "p",
          text: "Segundo, mira las categorías que tuvieron superávit de forma consistente. Una categoría con tres meses seguidos de superávit está sobre-financiada o ya no es relevante. La solución es reducirla y mover el dinero liberado a una meta, un Sinking Fund o un pago de deuda. La revisión anual es el momento en que la forma del presupuesto se pone al día con la forma de la vida.",
        },
        {
          kind: "p",
          text: "Tercero, mira las metas. ¿Qué Sinking Funds crecieron como querías? ¿Qué metas se financiaron tarde? ¿Qué metas ya no son relevantes? La revisión anual es el momento adecuado para retirar una meta que ya no es prioridad y para añadir una nueva que ha emergido. Un presupuesto se supone que sigue la vida, no la vida de hace tres años.",
        },
        {
          kind: "h2",
          id: "seguimiento",
          text: "Consejos de seguimiento que hacen sostenible el base cero",
        },
        {
          kind: "p",
          text: "El mayor determinante de si un presupuesto base cero sobrevive es lo fácil que es registrar una transacción. La fricción del paso de seguimiento es lo que mata el sistema. Si registrar un café de 3 euros toma más de cinco segundos, el registro se va a saltar. La solución es elegir un método de seguimiento que tenga la menor fricción posible.",
        },
        {
          kind: "p",
          text: "Los métodos de seguimiento más sostenibles, en orden de fricción. Primero, una app con entrada por voz. Abres la app, dices el gasto y la app lo registra. El tiempo total está más cerca de dos segundos que de cinco. El costo es que el reconocimiento de voz no siempre es perfecto, y la entrada a veces necesitará una edición rápida. Segundo, un widget de adición rápida en la pantalla de inicio del teléfono. Toque, escribe la cantidad, elige una categoría, listo. Tiempo total: cinco segundos. Tercero, una app de notas. Apunta el gasto en una lista corrida y luego transfiérelo al presupuesto una vez a la semana. La fricción es menor en el momento, pero la transferencia semanal es su propio tipo de trabajo.",
        },
        {
          kind: "p",
          text: "Cualquiera que sea el método que elijas, la regla es la misma: registra el gasto en el momento en que lo haces, no a la mañana siguiente, no el fin de semana siguiente. Cuanto mayor sea la brecha entre el gasto y el registro, más entradas olvidarás, y menos útil será el presupuesto. Un café de 3 euros registrado es información. Un café de 3 euros olvidado es dinero que desaparece. La primera versión del presupuesto alimenta al sistema. La segunda alimenta la ilusión de que sabes adónde va el dinero.",
        },
        {
          kind: "h2",
          id: "profundizando",
          text: "Una mirada más profunda a las cuatro reglas en la práctica",
        },
        {
          kind: "p",
          text: "Una cosa es conocer las cuatro reglas del presupuesto base cero. Otra es ver cómo se despliegan a lo largo de un año de decisiones reales. Las cuatro reglas son: dale un trabajo a cada peso, acepta tus gastos verdaderos, rueda con los golpes y envejece tu dinero. La mayoría de las personas que mantienen el sistema pasado el tercer mes reportan que cada una de estas reglas aparece en un ritmo diferente: la primera es diaria, la segunda es mensual, la tercera es semanal y la cuarta es el arco largo que solo se vuelve visible después de varios meses.",
        },
        {
          kind: "p",
          text: "La primera regla, dale un trabajo a cada peso, es la que mueve el ritual de planificación. Cada euro en la cuenta tiene una categoría, y cada categoría tiene un saldo. Cuando llega una transacción, el saldo de la categoría baja. Cuando llega ingreso, las categorías se rellenan. El trabajo ocurre al principio del mes, cuando se reconstruye el plan, y en cualquier momento que llegue un nuevo euro. La regla no es un evento único. Es una decisión continua. Cuanto más a menudo tomas la decisión, menos esfuerzo requiere. El plan se convierte en memoria muscular.",
        },
        {
          kind: "p",
          text: "La segunda regla, acepta tus gastos verdaderos, es la que más tarda en sentirse natural. El instinto es presupuestar solo las facturas que caen este mes. La práctica del presupuesto base cero es presupuestar las facturas que caen este año, repartidas de forma pareja entre los meses. El cambio es pequeño en el papel (unas pocas docenas de euros por categoría al mes) y enorme en la vida (no más gastos sorpresa, no más tasas anuales que se sienten como emergencias). El Sinking Fund es la forma estructural de esta regla. Es donde vive la regla en el presupuesto.",
        },
        {
          kind: "p",
          text: "La tercera regla, rueda con los golpes, es la que más resiste la mayoría en los primeros meses y en la que más se apoya para el sexto. El instinto es tratar un exceso como un fracaso moral. La práctica del presupuesto base cero es tratar un exceso como un dato. La categoría que se pasó ahora es una fuente de información. O bien se dimensionó demasiado pequeña (y la solución es redimensionarla el mes que viene), o bien el gasto fue un evento único (y la solución es mover dinero desde una categoría con superávit). La regla es la diferencia entre un presupuesto que sobrevive al contacto con la realidad y un presupuesto que se abandona en el mes tres.",
        },
        {
          kind: "p",
          text: "Las cuatro reglas no son una lista para memorizar. Son una descripción del comportamiento que el sistema recompensa. El primer mes, las sigues con esfuerzo. Para el sexto mes, las sigues por hábito. Para el duodécimo mes, dejas de notarlas, porque son la forma en que funciona el presupuesto. El sistema ya no es algo que haces. Es la forma en que piensas sobre el dinero. Ese es el arco largo del presupuesto base cero: un proyecto de un mes que se convierte en una mejora plurianual.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "preguntas",
          text: "Preguntas frecuentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "¿Un presupuesto base cero significa que tengo que gastarme cada euro?",
              a: "No. El «cero» del nombre se refiere al saldo sin asignar, no a la cantidad gastada. La meta es asignar cada euro a un trabajo. El trabajo puede ser una categoría de gasto, un Sinking Fund, una meta de ahorro o un pago de deuda. La mayoría de los meses terminan con los euros asignados gastados en su mayor parte, pero algunos trabajos (como el ahorro) están diseñados para hacer crecer el saldo, no para reducirlo.",
            },
            {
              q: "¿Cuánto tiempo lleva mantener un presupuesto base cero al mes?",
              a: "El primer mes suele llevar entre sesenta y noventa minutos. Para el tercer mes, la mayoría puede reconstruir el plan en treinta. La revisión semanal es de quince a veinte minutos. La revisión anual, que compara el plan con el año real, toma alrededor de una hora. La inversión total de tiempo para un año es de aproximadamente quince a veinte horas, que es menos de lo que la mayoría gasta en servicios de streaming.",
            },
            {
              q: "¿Cuál es la diferencia entre el presupuesto base cero y la regla 50/30/20?",
              a: "La regla 50/30/20 divide el ingreso en tres cubos porcentuales (necesidades, deseos, futuro). Es un buen punto de partida. El presupuesto base cero va un nivel más profundo: asigna cada euro a una categoría o meta específica dentro de esos cubos. Si 50/30/20 es un mapa de alto nivel, base cero son las instrucciones giro a giro.",
            },
            {
              q: "¿Qué pasa si no puedo llegar a cero porque mis gastos superan mis ingresos?",
              a: "Eso es un desajuste estructural, no un fallo de presupuestación. El primer movimiento es mirar las categorías fijas más grandes (vivienda, transporte, mínimos de deuda) y ver si alguna se puede renegociar. El segundo movimiento es añadir ingreso. El tercero es pedir ayuda. El presupuesto no puede arreglar una brecha estructural, pero puede mostrarla con claridad, que es el primer paso para cerrarla.",
            },
            {
              q: "¿Es bueno el presupuesto base cero para parejas?",
              a: "Sí, con un ajuste. La mayoría de las parejas mantienen un pequeño conjunto de categorías conjuntas (vivienda, comida, ahorro) y un pequeño conjunto de categorías personales (gasto personal, metas individuales). Las categorías conjuntas son base cero juntas. Las categorías personales son base cero individualmente. La conversación sobre quién financia qué ocurre una vez al mes, durante la reconstrucción.",
            },
            {
              q: "¿Puedo usar el presupuesto base cero sin una app?",
              a: "Sí. Una hoja de cálculo en blanco con columnas para categoría, planificado, real y diferencia es suficiente para ejecutar el método. Un cuaderno de papel también funciona. La app es útil para el seguimiento continuo de gastos pequeños, pero la parte de planificación del presupuesto base cero se puede hacer en cualquier sitio, y mucha gente mantiene el método entero funcionando en una sola página de un cuaderno durante años. La herramienta correcta es la que seguirás usando el mes que viene.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusion",
          text: "Un plan tranquilo y completo al que puedes volver",
        },
        {
          kind: "p",
          text: "El presupuesto base cero es una forma de darle un trabajo a cada euro, aceptar los gastos verdaderos que aparecen unas pocas veces al año, rodar con los golpes cuando una categoría se pasa y envejecer tu dinero para que la brecha entre ganar y gastar se amplíe. El método no es para todos. Premia a personas a las que les gusta la estructura y la consistencia, y es más difícil de sostener cuando el ingreso es muy irregular. Para la mayoría, se convierte en el presupuesto más tranquilo que jamás han mantenido, y el más fácil al que volver después de un mal mes.",
        },
        {
          kind: "p",
          text: "Si quieres probar el método sin comprometerte con una nueva app, ejecútalo en una hoja de cálculo durante un mes. Si quieres una herramienta que respete tu privacidad, no pida credenciales bancarias y funcione con las mismas cuatro reglas, Savlo está disponible en Android y próximamente en iOS. Está construido alrededor de los mismos principios: asigna cada euro, acepta los gastos verdaderos, rueda con los golpes y envejece tu dinero. El resto de este blog profundiza en ideas relacionadas, desde la [filosofía de presupuestación más amplia](/es/blog/how-to-budget-money) hasta la mecánica práctica de los [Sinking Funds](/es/blog/sinking-funds), si quieres seguir.",
        },
      ],
    },
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
  {
    slug: "how-to-budget-money",
    title:
      "Cómo hacer un presupuesto de dinero: una guía completa y tranquila para principiantes (y para quienes ya lo intentaron antes)",
    description:
      "Una guía clara y sin juicios para aprender a presupuestar desde cero. Conoce los cuatro números que mueven cualquier presupuesto, tres estilos que sí funcionan y cómo registrar gastos sin agotarte.",
    category: fromEnglish("how-to-budget-money").category,
    date: fromEnglish("how-to-budget-money").date,
    dateModified: fromEnglish("how-to-budget-money").dateModified,
    keywords: [
      "cómo hacer un presupuesto de dinero",
      "presupuesto para principiantes",
      "cómo hacer un presupuesto",
      "presupuesto mensual",
      "manejo de dinero para principiantes",
      "planificador de presupuesto",
      "cómo hacer un presupuesto con poco dinero",
      "regla 50 30 20",
      "presupuesto base cero",
      "cómo registrar gastos",
      "métodos de presupuesto",
      "presupuesto personal",
    ],
    readingTime: 20,
    rich: {
      slug: "how-to-budget-money",
      title:
        "Cómo hacer un presupuesto de dinero: una guía completa y tranquila",
      description: "",
      category: fromEnglish("how-to-budget-money").category,
      date: fromEnglish("how-to-budget-money").date,
      dateModified: fromEnglish("how-to-budget-money").dateModified,
      keywords: [],
      readingTime: 20,
      blocks: [
        {
          kind: "p",
          text: 'Si alguna vez has abierto la app de tu banco a las 23:00 y has sentido un nudo en el estómago, esta guía es para ti. Presupuestar nos ha sido vendido casi siempre como un problema de disciplina: una cuestión de fuerza de voluntad, una racha que mantener, un número que derrotar. La realidad es más suave y mucho más útil. Un presupuesto es un plan que haces *antes* de gastar, no un veredicto que dictas *después*. Es la diferencia entre conducir con un mapa y conducir mirando solo el espejo retrovisor.',
        },
        {
          kind: "p",
          text: "Esta es una guía larga a propósito. No hay un solo truco que haga manejable el dinero para el resto de tu vida. Hay un puñado pequeño de hábitos, repetidos a menudo, que se acumulan. El objetivo de este artículo es recorrerlos en orden: cómo pensar el dinero sin asustarte, cómo construir un presupuesto que de verdad vas a mantener, cómo registrar tus gastos sin que te consuman el día, y cómo recuperarte cuando la vida rompe el plan. Vamos a recurrir a la investigación en finanzas conductuales donde ayude, y vamos a mantener los ejemplos anclados en situaciones mensuales reales: alquiler, comida, pagos de deuda, una reparación urgente del coche, la boda de un amigo.",
        },
        {
          kind: "p",
          text: "Si ya intentaste presupuestar antes y lo dejaste, el error casi nunca fue la falta de disciplina. El diseño de la mayoría de las herramientas de presupuesto pelea contra cómo funciona tu cerebro. [Savlo](/) es una de las apps que intenta trabajar contigo en lugar de contra ti. Está disponible en Android y próximamente en iOS, y el resto de esta guía la usará como ejemplo entre varios. Si solo tienes diez minutos, salta a los [siete pasos rápidos](#siete-pasos). Si tienes treinta, léela en orden.",
        },
        {
          kind: "h2",
          id: "contenidos",
          text: "En esta guía",
        },
        {
          kind: "ul",
          items: [
            "[Qué significa realmente presupuestar](#que-es-un-presupuesto)",
            "[Los cuatro números que mueven cualquier presupuesto](#cuatro-numeros)",
            "[Los tres estilos de presupuesto que sí funcionan](#tres-estilos)",
            "[Cómo armar tu primer presupuesto en siete pasos](#siete-pasos)",
            "[Cómo registrar gastos sin quemarte](#registrar-gastos)",
            "[Cómo manejar ingresos variables](#ingresos-variables)",
            "[El reinicio de siete días cuando revientas el presupuesto](#reinicio-siete-dias)",
            "[Fondo de emergencia vs Sinking Funds](#fondo-emergencia-vs-sinking)",
            "[La psicología del gasto (y cómo ganarte a ti mismo)](#psicologia)",
            "[Ocho errores comunes de presupuesto (y cómo evitarlos)](#errores-comunes)",
            "[Herramientas: apps, hojas de cálculo, papel y lápiz](#herramientas)",
            "[Cómo sostener un presupuesto cuando la motivación se apaga](#mantenerlo)",
            "[Preguntas frecuentes](#faq)",
          ],
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "que-es-un-presupuesto",
          text: 'Qué significa realmente presupuestar (y qué no es)',
        },
        {
          kind: "p",
          text: "Un presupuesto no es un castigo. No es una hoja de cálculo que armas una vez y nunca abres. No es un examen moral sobre si eres una persona \"responsable\". En su forma más útil, un presupuesto es una promesa breve y escrita que te haces a tu yo del futuro sobre cómo vas a gastar el dinero durante el próximo mes. Eso es todo. Cuando deja de ser eso, suele dejar de servir.",
        },
        {
          kind: "p",
          text: "La mayoría de los presupuestos que fracasan lo hacen por una de tres razones. Intentan registrar cada centavo, lo cual es agotador. Se construyen sobre el ingreso bruto en lugar del neto, lo cual hace que los números se sientan imposibles. O se revisan solo a fin de mes, cuando el tren ya salió de la estación. Ninguno de estos problemas habla de ti. Habla del diseño del sistema. Los cubrimos en detalle más adelante en esta guía.",
        },
        {
          kind: "p",
          text: "Un presupuesto útil es una herramienta, no un veredicto. Te dice, por adelantado, si la siguiente decisión es accesible y si está alineada con lo que dijiste que te importaba el mes pasado. Si la respuesta es no, el presupuesto está haciendo su trabajo al decirlo. Si la respuesta es sí, el presupuesto está haciendo su trabajo al darte permiso. La mayoría de las personas que se sienten ansiosas con el dinero en realidad no están gastando de más. Están gastando sin un marco, y la incertidumbre es la fuente del estrés. El plan elimina la incertidumbre, no el dinero.",
        },
        {
          kind: "p",
          text: "Hay un concepto relacionado de las finanzas conductuales llamado [money dysmorphia](/es/blog/money-dysmorphia): sentirse quebrado aun cuando las cuentas dicen lo contrario. Es más común de lo que admite la industria financiera, y uno de sus antídotos es hacer visible el plan. Un presupuesto, incluso uno simple, hace visible el plan.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "cuatro-numeros",
          text: "Los cuatro números que mueven cualquier presupuesto",
        },
        {
          kind: "p",
          text: "Cada presupuesto, desde la hoja de cálculo más elaborada hasta la nota más simple en el teléfono, se construye a partir de los mismos cuatro números. Si puedes identificar estos cuatro números en tu propia vida, ya sabes más de tu dinero que la mayoría de la gente va a descubrir jamás. El orden importa menos que la precisión.",
        },
        {
          kind: "h3",
          id: "ingreso",
          text: "1. Ingreso (neto, no bruto)",
        },
        {
          kind: "p",
          text: "Presupuesta siempre con el dinero que llega de verdad a tu cuenta, no con el número de tu carta de sueldo. Los impuestos, la seguridad social, el seguro médico, los aportes a jubilación y cualquier otro descuento automático ocurren antes de que tú veas el efectivo. El error de presupuesto más común es planificar con el número bruto y luego sentirse un fracaso cuando la realidad llega entre un 25% y un 35% más pequeña. Planifica con el neto, y el plan sobrevive al contacto con la realidad.",
        },
        {
          kind: "p",
          text: "Si eres freelance, gig worker o cobras por comisión, tu ingreso neto es variable. En ese caso, la [sección de ingresos variables](#ingresos-variables) más adelante en esta guía es la más importante para ti. La versión corta: usa el mes bajo confiable como base, trata los meses altos como un bono y deja que tu presupuesto respire.",
        },
        {
          kind: "h3",
          id: "gastos-fijos",
          text: "2. Gastos fijos",
        },
        {
          kind: "p",
          text: "Los gastos fijos son las cuentas que llegan cada mes en cantidades parecidas. Alquiler o hipoteca, internet, teléfono, seguros, mínimos de deuda, suscripciones y partidas similares. Son la parte más fácil de un presupuesto porque son predecibles. Ponlos en una sola columna y súmalos. Esa suma es el suelo de lo que te debes a ti mismo cada mes antes de hacer cualquier otra cosa.",
        },
        {
          kind: "p",
          text: "Una trampa: las suscripciones se multiplican silenciosamente. El adulto promedio subestima su gasto mensual en suscripciones entre un 30% y un 50% en encuestas informales. Reserva diez minutos esta semana y revisa los cargos automáticos en tu estado de cuenta. Cancela todo lo que no hayas usado en los últimos 30 días. El ahorro suele ser mayor que la hora que inviertes en la auditoría, y se acumula cada mes a partir de ahí.",
        },
        {
          kind: "h3",
          id: "gastos-variables",
          text: "3. Gastos variables",
        },
        {
          kind: "p",
          text: "Los gastos variables son los costos que cambian de un mes a otro: comida, transporte, entretenimiento, ropa, regalos, artículos del hogar. Son más difíciles de predecir, y por eso merecen su propio número. La mayoría del gasto excesivo vive aquí, no en la columna de fijos.",
        },
        {
          kind: "p",
          text: "Un truco útil es poner un tope único y generoso en la columna variable en vez de microgestionar cada subcategoría. Si tu gasto variable de los últimos tres meses promedió $650, pon el presupuesto en $700, date un pequeño colchón y detente ahí. Rastrear cada café es agotador y rara vez cambia la conducta. El objetivo es la conciencia, no la vigilancia. Cubrimos el registro en detalle en [la siguiente sección principal](#registrar-gastos).",
        },
        {
          kind: "h3",
          id: "tasa-de-ahorro",
          text: "4. Tu tasa de ahorro",
        },
        {
          kind: "p",
          text: "La tasa de ahorro es el porcentaje del ingreso neto que conservas en lugar de gastar. Es el número más predictivo de las finanzas personales. Dos hogares con ingreso idéntico pueden tener resultados a largo plazo radicalmente diferentes, y la tasa de ahorro explica casi toda la brecha.",
        },
        {
          kind: "p",
          text: "Un punto de partida razonable para la mayoría de las personas es entre el 10% y el 20% del ingreso neto, con el resto repartido entre fijos y variables. Si no puedes ahorrar el 10% ahora mismo, ahorra el 1%. El número importa menos que el hábito. Una vez que el hábito existe, el número suele crecer solo. Hablamos de esto en la guía de la [regla 50/30/20](/es/blog/50-30-20-rule), que es uno de los marcos más simples para traducir el ingreso neto en una asignación funcional.",
        },
        {
          kind: "p",
          text: "Dónde pones el ahorro también importa. La diferencia entre un [fondo de emergencia](/es/blog/emergency-fund-vs-sinking-fund) y un [Sinking Fund](/es/blog/sinking-funds) tiene su propia sección más abajo, pero la versión corta es: protégete de lo impredecible, y luego prefinancia lo predecible.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "tres-estilos",
          text: "Los tres estilos de presupuesto que sí funcionan",
        },
        {
          kind: "p",
          text: "No faltan métodos de presupuesto. La mayoría son variaciones de unas pocas ideas centrales. En lugar de memorizar un sistema, elige el que coincida con cómo tu cerebro ya categoriza el dinero, y deja de optimizar desde ahí. Los tres estilos que siguen cubren aproximadamente el 90% del consejo financiero personal que realmente funciona en la vida real.",
        },
        {
          kind: "h3",
          id: "cincuenta-treinta-veinte",
          text: "Estilo 1: La regla 50/30/20",
        },
        {
          kind: "p",
          text: "La [regla 50/30/20](/es/blog/50-30-20-rule) divide tu ingreso neto en tres baldes: 50% para necesidades, 30% para deseos y 20% para ahorro y pago de deuda por encima de los mínimos. Es el marco más simple que todavía respeta la diferencia entre gasto esencial y discrecional.",
        },
        {
          kind: "p",
          text: "Fortalezas: fácil de recordar, casi sin configuración, buena para gente que odia las categorías. Limitaciones: es una guía, no una fórmula. Si vives en una ciudad cara, tu balde de \"necesidades\" puede necesitar ser 55% o 60%. Eso no es un fracaso; es la realidad de tu costo de vida.",
        },
        {
          kind: "h3",
          id: "base-cero",
          text: "Estilo 2: Presupuesto base cero",
        },
        {
          kind: "p",
          text: "El [presupuesto base cero](/es/blog/zero-based-budgeting) asigna un trabajo a cada peso del ingreso antes de que comience el mes. Ingresos menos gastos igual a cero. Nada queda a la deriva. Es el enfoque popularizado por YNAB, y funciona bien para personas a las que les gusta la precisión y no les gusta la sensación de dinero que \"se evapora\".",
        },
        {
          kind: "p",
          text: "Fortalezas: fuerza la priorización, saca a la luz el desperdicio, hace explícitas las compensaciones. Limitaciones: requiere más configuración, más seguimiento y disposición a tomar decisiones pequeñas con frecuencia. Si eres una persona a la que la categorización constante le resulta agotadora, el presupuesto base cero puede sentirse como un trabajo de medio tiempo.",
        },
        {
          kind: "h3",
          id: "sobres-espacios",
          text: "Estilo 3: Método de sobres / Spaces",
        },
        {
          kind: "p",
          text: "El método de sobres, a veces llamado cash stuffing en su forma física, le da a cada categoría de gasto su propio fondo de dinero. Cuando el sobre se vacía, la categoría hace pausa hasta el mes siguiente. En las apps modernas esto suele implementarse como \"Spaces\" o subcuentas separadas. Savlo, por ejemplo, usa el término Spaces para referirse a la misma idea.",
        },
        {
          kind: "p",
          text: "Fortalezas: extremadamente visual, difícil gastar de más por accidente, bueno para personas que se pasan en categorías específicas (comida, restaurantes, compras). Limitaciones: menos útil para gastos irregulares a menos que se combine con Sinking Funds, que es por qué la mayoría de los practitioners terminan mezclando el método de sobres con uno de los otros dos estilos.",
        },
        {
          kind: "p",
          text: "Los tres estilos funcionan. El mejor es con el que vas a seguir dentro de seis meses. Ese es casi siempre el más simple con el que puedes empezar en los próximos diez minutos.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "siete-pasos",
          text: "Cómo armar tu primer presupuesto en siete pasos",
        },
        {
          kind: "p",
          text: "Si partes de cero, aquí hay una secuencia tranquila que produce un presupuesto funcional en menos de una hora. Ninguno de estos pasos requiere una app, aunque una app hará el mes siguiente más fácil.",
        },
        {
          kind: "ol",
          items: [
            "**Lista los últimos tres meses de ingreso neto.** Usa el más bajo de los tres como base para el mes siguiente.",
            "**Lista tus gastos fijos.** Alquiler, servicios, seguros, mínimos de deuda, suscripciones. Súmalos.",
            "**Estima tus gastos variables.** Usa el promedio de los últimos tres meses y luego añade entre un 5% y un 10% como colchón.",
            "**Resta fijos más variables del ingreso neto.** Lo que quede es tu tasa de ahorro inicial.",
            "**Decide a dónde va lo que sobra.** Fondo de emergencia, Sinking Fund, pago de deuda por encima del mínimo, jubilación, o una mezcla. Elige uno para empezar.",
            "**Define un único punto de revisión.** La mayoría de los presupuestos exitosos se revisan una vez a la semana durante diez minutos, no todos los días. Pónlo en el calendario.",
            "**Acepta que el primer mes será imperfecto.** La meta del primer mes es aprender el ritmo, no optimizar. El ritmo es lo que se acumula.",
          ],
        },
        {
          kind: "p",
          text: "Si un paso se siente abrumador, haz solo ese paso. La falla más común en presupuestos es intentar hacer todo esto en una tarde de sábado y abandonar el proyecto para el miércoles. Los pasos pequeños y secuenciales son dramáticamente más efectivos.",
        },
        {
          kind: "callout",
          text: "**Referente realista:** la mayoría de las personas que mantienen un presupuesto durante doce meses empezaron con una versión que era incómoda, vergonzosa e incompleta. La完整性 llegó después. La permanencia vino de lo pequeño del inicio.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "registrar-gastos",
          text: "Cómo registrar gastos sin quemarte",
        },
        {
          kind: "p",
          text: "El registro es la parte del presupuesto que recibe más atención y da menos beneficio. El retorno marginal de rastrear cada visita a una cafetería es esencialmente cero. El retorno de capturar con precisión las grandes categorías es enorme. El objetivo del registro de gastos no es la omnisciencia; es una imagen lo suficientemente clara para que la siguiente decisión esté informada.",
        },
        {
          kind: "p",
          text: "Las apps modernas te dan tres formas principales de capturar una transacción: voz, manual e importación de CSV. Cada una tiene su lugar. La respuesta correcta suele ser una mezcla.",
        },
        {
          kind: "h3",
          id: "registro-por-voz",
          text: "Registro por voz",
        },
        {
          kind: "p",
          text: "El registro por voz es la forma más rápida de capturar un gasto en el momento en que lo haces. Dices una frase corta en voz alta, la app la transcribe y se crea una transacción. Elimina la fricción de sacar el teléfono, abrir una app y escribir números. Esa fricción es la razón principal por la que la mayoría de los registros manuales mueren después de una semana.",
        },
        {
          kind: "p",
          text: "Nuestra [guía de registro de gastos por voz](/es/blog/voice-expense-tracking) cubre cómo funciona la tecnología y qué buscar en una función de voz. La versión corta: un buen sistema de voz es lo bastante rápido para sentirse casual, lo bastante preciso para no requerir edición en la mayoría de los casos, y honesto sobre si tu audio se procesa localmente o se envía a un servidor. Savlo es una de las apps construidas alrededor de la voz como entrada principal, junto con opciones manual y de CSV.",
        },
        {
          kind: "h3",
          id: "entrada-manual",
          text: "Entrada manual",
        },
        {
          kind: "p",
          text: "La entrada manual es la red de seguridad. Es más lenta y requiere más fuerza de voluntad, que es exactamente por qué no puede ser la única opción para la mayoría de la gente. Úsala para gastos que necesitan una nota, una foto o una categoría personalizada. La ronda de [mejores alternativas a Mint](/es/blog/best-mint-alternatives-2025) compara cómo las mejores apps manejan la opción manual en 2025.",
        },
        {
          kind: "h3",
          id: "importacion-csv",
          text: "Importación de CSV desde tu banco",
        },
        {
          kind: "p",
          text: "La importación de CSV se sitúa entre la voz y la sincronización bancaria completa. Entras al sitio web de tu banco, descargas un CSV con tus transacciones recientes y lo subes a la app. Ningún agregador第三方 toca tus credenciales. Sin sincronización continua significa que no hay intercambio silencioso de datos. El resultado es un registro más completo con menos esfuerzo que la entrada manual, y más privacidad que la sincronización bancaria automática.",
        },
        {
          kind: "p",
          text: "Este es el enfoque que Savlo adopta por defecto, y es una de las razones por las que la app encaja con personas que dejaron Mint por motivos de privacidad. Puedes aprender más sobre por qué la privacidad importa en las finanzas personales en la guía de [por qué fracasan los presupuestos tradicionales](/es/blog/why-traditional-budgets-fail). El TL;DR: cuando vinculas tu banco, tu historial de transacciones generalmente pasa por un agregador de datos, y ese agregador tiene su propia política de privacidad que tú no controlas.",
        },
        {
          kind: "p",
          text: "El mejor sistema de registro es el que te da una imagen suficientemente completa en menos de diez minutos a la semana. Todo lo demás es decoración.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "ingresos-variables",
          text: "Cómo manejar ingresos variables",
        },
        {
          kind: "p",
          text: "El ingreso variable es el desafío de presupuesto que la mayoría de los artículos de finanzas personales ignora en silencio. Freelancers, gig workers, vendedores a comisión, contratistas y muchos dueños de pequeños negocios no reciben el mismo pago neto el día uno y el día quince de cada mes. El marco tradicional de presupuesto mensual asume que sí, y se rompe para ellos.",
        },
        {
          kind: "p",
          text: "El enfoque más limpio es presupuestar contra el **mes bajo confiable** de los últimos seis a doce meses, no contra el promedio. Usa ese número más bajo como tu línea base. Cuando lleguen meses más altos, trata la diferencia como una ganancia inesperada que va directo al ahorro o al pago de deuda, no a la inflación del estilo de vida. Esta única regla evita la trampa más común del ingreso variable: un mes excelente seguido de uno desesperado.",
        },
        {
          kind: "p",
          text: "Un complemento práctico es una cuenta de colchón. Mueve uno o dos meses de gastos fijos a una cuenta separada, de baja fricción. Cuando llegue un mes más pequeño, el colchón lo cubre. Cuando llegue un mes más grande, recargas el colchón. El colchón es el equivalente a tratar tu ingreso personal como un flujo de ingresos variable de negocio, y es uno de los pocos trucos de presupuesto que escala con el crecimiento profesional.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "reinicio-siete-dias",
          text: "El reinicio de siete días: qué hacer cuando revientas el presupuesto",
        },
        {
          kind: "p",
          text: "Vas a reventar el presupuesto. No una vez; varias veces al año. El coche va a necesitar neumáticos. Un amigo se va a casar en otra ciudad. Va a llegar una factura médica. Tratar estas situaciones como fracasos personales es la forma más rápida de dejar el presupuesto por completo, y el abandono suele venir con un regreso a la relación vaga y ansiosa con el dinero que intentabas dejar atrás.",
        },
        {
          kind: "p",
          text: "En su lugar, construye un reinicio de siete días. El día que notes el exceso, no entres en pánico y no intentes arreglarlo esa noche. Espera siete días. Luego siéntate veinte minutos, en un entorno tranquilo, y hazte tres preguntas. ¿Qué pasó? ¿Qué categoría absorbió el golpe? ¿Cuál es el cambio más pequeño para el mes siguiente que lo habría evitado? Escribe las respuestas. Ese es todo el reinicio.",
        },
        {
          kind: "p",
          text: "El reinicio no es un castigo y no es una celebración. Es un acto pequeño y repetido de prestar atención. Las personas que mantienen un presupuesto durante años no son las que nunca se pasan. Son las que, en promedio, se recuperan de un exceso dentro de una semana y ajustan el plan. El plan mejora, y con él la relación con el dinero.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "fondo-emergencia-vs-sinking",
          text: "Fondo de emergencia vs. Sinking Funds",
        },
        {
          kind: "p",
          text: "Dos baldes de ahorro aparecen en casi todos los sistemas financieros personales que funcionan: el fondo de emergencia y los Sinking Funds. No son lo mismo, y mezclarlos es uno de los errores de presupuesto más comunes.",
        },
        {
          kind: "p",
          text: "Un [fondo de emergencia](/es/blog/emergency-fund-vs-sinking-fund) es para lo impredecible: pérdida de empleo, evento médico, reparación urgente del hogar. El tamaño objetivo suelen ser de tres a seis meses de gastos fijos, mantenido en una cuenta de alta liquidez que no tocas a menos que la situación sea verdaderamente una emergencia.",
        },
        {
          kind: "p",
          text: "Un [Sinking Fund](/es/blog/sinking-funds) es para lo predecible: seguro anual, regalos de vacaciones, un deducible médico conocido, un viaje planeado. Son gastos grandes que llegan en un calendario conocido. Ahorrar un poco cada mes los convierte de shocks en contribuciones rutinarias. La diferencia mental es enorme: unas vacaciones para las que ahorraste se sienten muy distinto de unas vacaciones que pusiste en una tarjeta de crédito.",
        },
        {
          kind: "callout",
          text: "**Regla de oro:** una vez que tengas un mes de gastos en efectivo, empieza a dividir. Sigue construyendo el fondo de emergencia hasta llegar a tres meses, luego desplaza la mayor parte del ahorro nuevo a Sinking Funds con nombre para los próximos gastos predecibles en tu calendario.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "psicologia",
          text: "La psicología del gasto excesivo (y cómo ganarte a ti mismo)",
        },
        {
          kind: "p",
          text: "La investigación en finanzas conductuales de los últimos treinta años ha identificado un pequeño conjunto de atajos mentales que llevan de forma fiable al gasto excesivo. Ninguno de ellos son defectos de carácter. Son características predecibles de la cognición humana, lo cual significa que se puede diseñar alrededor de ellas.",
        },
        {
          kind: "p",
          text: "**El dolor de pagar.** Pagar con tarjeta duele menos que entregar efectivo, así que gastamos más. La solución no es volver al efectivo; es hacer visible el gasto. Una revisión semanal de los totales por categoría restaura la fricción suficiente para frenar las decisiones.",
        },
        {
          kind: "p",
          text: "**El sesgo del presente.** El yo del futuro es más fácil de decepcionar que el yo del presente, así que posponemos el ahorro. La solución es la automatización. Programa el ahorro para que se mueva al día siguiente del cobro, en una cantidad en la que no tengas que pensar, y el yo del presente rara vez lo nota.",
        },
        {
          kind: "p",
          text: "**El anclaje.** El primer precio que ves se convierte en el punto de referencia. Las etiquetas de oferta, los precios originales tachados y el encuadre \"premium\" son anclas. La solución es decidir por adelantado cuánto vale algo para ti, y alejarse de los precios por encima de esa línea, sin importar el descuento.",
        },
        {
          kind: "p",
          text: "Estos sesgos son la razón por la que los presupuestos tradicionales fracasan y por la que un diseño más suave tiende a ganar con el tiempo. El argumento completo vive en la pieza de [por qué fracasan los presupuestos tradicionales](/es/blog/why-traditional-budgets-fail), pero la versión corta es esta: si la herramienta pelea contra tu cerebro, la herramienta va a perder. Si la herramienta trabaja con tu cerebro, la herramienta se va a acumular.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "errores-comunes",
          text: "Ocho errores comunes de presupuesto (y cómo evitarlos)",
        },
        {
          kind: "p",
          text: "Después de trabajar con miles de personas en sus presupuestos, el mismo puñado de errores aparece una y otra vez. Ninguno es de matemáticas. Son del diseño del sistema.",
        },
        {
          kind: "ol",
          items: [
            "**Presupuestar con el bruto en lugar del neto.** El primer error más común. Planifica con el número que de verdad llega a tu cuenta.",
            "**Demasiadas categorías.** Más de diez categorías genera fatiga de decisión. Empieza con cinco o seis y deja que el detalle llegue después.",
            "**Rastrear cada centavo.** Agotador y rara vez útil. Rastrea las categorías que importan y deja que las pequeñas redondeen.",
            "**Sin ritmo de revisión.** Un presupuesto que nunca se revisa es un deseo. Define un hueco de diez minutos a la semana y protégelo.",
            "**Abandonar en un mal mes.** Un mal mes son datos, no fracaso. Ejecuta el reinicio de siete días y sigue.",
            "**Ahorrar lo que sobre.** Nunca va a sobrar nada. Ahorra primero, gasta lo que quede.",
            "**Mezclar el fondo de emergencia y los Sinking Funds.** Sirven para propósitos diferentes. Mezclarlos produce una reserva de emergencia subcapitalizada y un ciclo perpetuo de sorpresas financieras.",
            "**Castigar el pasado en vez de diseñar el futuro.** La culpa no se acumula. Un sistema más simple sí. Cambia vergüenza por iteración.",
          ],
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "herramientas",
          text: "Herramientas: apps, hojas de cálculo, papel y lápiz",
        },
        {
          kind: "p",
          text: "La herramienta correcta es la que vas a seguir usando dentro de seis meses. A veces eso es un cuaderno. A veces es una hoja de cálculo personalizada. A veces es una app. La herramienta importa menos que el ritmo que construyas alrededor de ella.",
        },
        {
          kind: "p",
          text: "Papel y lápiz fuerza una lentitud que algunas personas encuentran terapéutica. Es también la opción más privada, ya que nada sale de tus manos. La desventaja es que la agregación y los reportes son manuales, lo cual se vuelve viejo rápido para cualquiera que rastree más que un puñado de categorías.",
        },
        {
          kind: "p",
          text: "Las hojas de cálculo te dan control total y cero filtración de privacidad, al costo de tu tiempo. Son la respuesta correcta para personas que disfrutan modelar y quieren entender los números en detalle. Son la respuesta incorrecta para personas que solo quieren saber si pueden pagar la cena del viernes.",
        },
        {
          kind: "p",
          text: "Las apps cubren el rango desde automatización completa (vinculación bancaria) hasta solo manual. La app correcta depende de tu relación con la privacidad, tu tolerancia a la fricción de entrada y qué tan visible quieres que sea el gasto. Si te alejaste de Mint por razones de privacidad, la ronda de [mejores alternativas a Mint en 2025](/es/blog/best-mint-alternatives-2025) te ahorrará un fin de semana de investigación. Savlo, por ejemplo, está construida alrededor de check-ins por voz, importaciones de CSV y una rutina diaria de dinero más tranquila en lugar de sincronización bancaria continua. Está disponible en Android y próximamente en iOS.",
        },
        {
          kind: "p",
          text: "La [ansiedad financiera](/es/blog/financial-anxiety) a menudo guía la elección de herramienta más que la lógica. Si una app en particular te hace sentir vigilado, juzgado o abrumado, cámbiala. El punto de una herramienta de presupuesto es hacer la relación con el dinero más humana, no menos.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "mantenerlo",
          text: "Cómo sostener un presupuesto cuando la motivación se apaga",
        },
        {
          kind: "p",
          text: "La motivación es una base terrible para un hábito financiero de largo plazo. Es alta en la semana uno, se va para la semana tres, y es activamente dañina cuando regresa con culpa. Las personas que mantienen un presupuesto durante años no son las más motivadas. Son las que diseñaron el sistema de modo que la motivación no sea necesaria.",
        },
        {
          kind: "p",
          text: "Tres elecciones de diseño ayudan. Primero, automatiza todo lo que se pueda automatizar: transferencias de ahorro, pago de cuentas, seguimiento de suscripciones. Cuantas menos decisiones tengas que tomar, menos decisiones pueden salir mal. Segundo, reduce la revisión a un ritual que realmente disfrutes: un café el domingo por la mañana, una caminata corta, un mensaje de voz de cinco minutos. Tercero, diseña para el fracaso. Espera un mal mes, nombra el reinicio por adelantado y haz que la recuperación sea automática en lugar de heroica.",
        },
        {
          kind: "p",
          text: "Cuando el sistema se mantiene junto durante un mal mes, la relación con el dinero empieza a cambiar. Dejas de ver los presupuestos como un examen de tu carácter y empiezas a verlos como infraestructura. El cambio es pequeño y silencioso, y es lo que de verdad se acumula.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Preguntas frecuentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "¿Vale la pena presupuestar en 2026?",
              a: "Sí, pero el formato cambió. Los presupuestos mensuales estáticos construidos sobre un único flujo de ingreso están dando paso a sistemas flexibles que contemplan ingreso variable, gastos irregulares y el papel que juega la inflación en las categorías cotidianas. Los principios son los mismos; las herramientas y el ritmo han mejorado.",
            },
            {
              q: "¿Cuánto de mi ingreso debería ahorrar?",
              a: "Para la mayoría de las personas, entre el 10% y el 20% del ingreso neto es un objetivo razonable. Si eso no es posible ahora mismo, ahorra el 1%. El porcentaje importa menos que la consistencia. Una vez que el hábito está en su lugar, el número suele crecer solo.",
            },
            {
              q: "¿Qué es la regla 50/30/20, en una frase?",
              a: "Aproximadamente el 50% del ingreso neto para necesidades, 30% para deseos y 20% para ahorro y pago de deuda por encima de los mínimos. Es un punto de partida, no un veredicto.",
            },
            {
              q: "¿Debería vincular mi banco a una app de presupuesto?",
              a: "Solo si te sientes cómodo con la política de privacidad del agregador de datos. La vinculación bancaria es conveniente pero encauza tu historial de transacciones a través de un tercero. La importación de CSV y el registro por voz son las dos principales alternativas que respetan la privacidad, y son suficientemente buenas para la mayoría de la gente.",
            },
            {
              q: "¿Cuánto tarda armarse un presupuesto?",
              a: "La primera pasada toma menos de una hora si tienes tres meses de estados de cuenta. La versión que de verdad vas a usar toma un mes completo de iteración. Planifica para la iteración, no para el primer borrador.",
            },
            {
              q: "¿Cuál es la diferencia entre un fondo de emergencia y un Sinking Fund?",
              a: "Un fondo de emergencia cubre lo impredecible: pérdida de empleo, reparación urgente, evento médico. Un Sinking Fund cubre lo predecible: seguro anual, vacaciones, viajes planeados. El primero te protege; el segundo evita sorpresas. Generalmente quieres ambos.",
            },
            {
              q: "¿Qué hago si no me queda dinero al final del mes?",
              a: "Empieza con una auditoría de una semana de cada gasto, no para juzgarte, sino para encontrar las dos o tres partidas que en silencio concentran un tercio del total. Cancélalas o redúcelas. Mueve el ahorro a una pequeña cuenta de colchón. Repite el mes siguiente. La acumulación es más rápida de lo que parece.",
            },
            {
              q: "¿Cuál es la mejor app de presupuesto para principiantes?",
              a: "La que vas a seguir usando dentro de seis meses. Esa es casi siempre la que tiene la menor fricción de entrada y el diseño más tranquilo. La ronda de [mejores alternativas a Mint](/es/blog/best-mint-alternatives-2025) compara las opciones más fuertes en 2026.",
            },
          ],
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "conclusion",
          text: "Un camino hacia adelante más tranquilo",
        },
        {
          kind: "p",
          text: "Presupuestar no es una prueba de personalidad. Es una práctica de planificación, y como cualquier práctica, recompensa el esfuerzo pequeño y repetido más que la voluntad heroica. Elige la versión más simple del sistema de arriba, dale un mes real y ejecuta el reinicio de siete días la primera vez que te pases. El número en la pantalla al final del año será la prueba, pero el cambio más durable es el que sientes en el cuerpo: menos sobresaltos, más agencia y una relación con el dinero suficientemente humana como para durar.",
        },
        {
          kind: "p",
          text: "Si quieres una herramienta que intente hacer que toda esta guía se sienta más ligera, [Savlo](/) está construida alrededor de las ideas que cubrimos: check-ins por voz, categorización suave, Spaces separados para el dinero que importa, Sinking Funds para el futuro predecible y una interfaz tranquila que no te castiga por tener una mala semana. Está disponible en Android y próximamente en iOS. El resto del blog cubre cada una de estas ideas en más profundidad si quieres seguir.",
        },
      ],
    },
  },
  {
    slug: "budgeting-on-a-low-income",
    title:
      "Cómo hacer un presupuesto con bajos ingresos: una guía realista, paso a paso, que de verdad funciona",
    description:
      "Una guía sin juicios, paso a paso, para presupuestar con bajos ingresos. Aprende a construir un pequeño colchón, asegurar los no negociables y dejar de sangrar cuando las cuentas no alcanzan.",
    category: fromEnglish("budgeting-on-a-low-income").category,
    date: fromEnglish("budgeting-on-a-low-income").date,
    dateModified: fromEnglish("budgeting-on-a-low-income").dateModified,
    keywords: [
      "presupuesto con bajos ingresos",
      "presupuesto con poco dinero",
      "cómo hacer un presupuesto con bajos ingresos",
      "presupuesto cuando estás quebrado",
      "presupuesto con dinero ajustado",
      "manejo de dinero con bajos ingresos",
      "presupuesto ajustado",
      "presupuesto con ingreso pequeño",
      "sin margen de ahorro",
      "sobrevivir con bajos ingresos",
      "dinero con presupuesto ajustado",
    ],
    readingTime: 20,
    summary: [
      "Hacer un presupuesto con bajos ingresos tiene su propio oficio. La mayoría de los consejos asumen un margen que no siempre está, y por eso suenan a puerta cerrada en la cara.",
      "Esta guía propone siete pasos realistas, sin culpas, para cuidar lo que tienes, construir el colchón más pequeño posible y dejar de sangrar cuando las cuentas no cierran. Siete pasos, sin vergüenza, y unos cuantos hábitos que sí caben en un presupuesto ajustado.",
    ],
    sections: [
      {
        heading: "Qué significa realmente presupuestar con bajos ingresos",
        body: [
          "«Bajos ingresos» no es una cifra única. Puede significar vivir al día con un sueldo estable que simplemente no alcanza. Puede significar trabajo eventual donde el mes pasado fue bueno y este no. Puede significar estar entre contratos, mantener hijos con un solo ingreso, o ganar en una moneda que no corresponde al costo de vida de tu ciudad. La forma cambia, pero la experiencia vivida es parecida: cada peso tiene un destino antes de llegar, y la mayoría de esos destinos son no negociables.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Hacer un presupuesto con bajos ingresos tiene su propio oficio. Los consejos que circulan por internet suelen asumir un margen: recorta los cafés, construye un fondo de emergencia, automatiza tus ahorros. Cuando el margen no está, esos consejos no se sienten útiles. Se sienten como una puerta cerrada en la cara. Esta guía es para los meses en que la matemática está ajustada, en que el sueldo se acaba antes de que termine el mes, y en que «simplemente presupuesta mejor» es lo último que necesitas escuchar.",
        },
        {
          kind: "p",
          text: "El objetivo aquí no es romantizar la escasez ni pretender que un año de 40.000 euros es lo mismo que uno de 90.000. El objetivo es darte una forma realista y sin juicios de cuidar lo que tienes, construir el colchón más pequeño posible y dejar de sangrar cuando las cuentas no cierran. Siete pasos, sin culpas, y unos cuantos hábitos que sí caben en un presupuesto ajustado.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Savlo está disponible en Android y próximamente en iOS. Todo lo que cubre esta guía funciona en un cuaderno, una hoja de cálculo o una app sencilla. Si quieres una herramienta que respete tu privacidad, no pida credenciales bancarias y funcione en rutinas ajustadas, Savlo fue pensada con eso en mente. Puedes aplicar cada paso de aquí sin ella también.",
        },
        {
          kind: "h2",
          text: "Qué significa realmente presupuestar con bajos ingresos",
          id: "que-significa-realmente",
        },
        {
          kind: "p",
          text: "«Bajos ingresos» no es una sola cifra. Puede significar vivir al día con un salario estable que simplemente no alcanza. Puede significar trabajo por proyectos donde el mes pasado fue bueno y este no. Puede significar estar entre contratos, mantener hijos con un solo ingreso, o ganar en una moneda que no corresponde al costo de vida de tu ciudad. También puede significar un hogar con entradas irregulares y una larga lista de salidas predecibles. La forma cambia, pero la experiencia vivida es parecida: cada peso tiene un destino antes de llegar, y la mayoría de esos destinos son no negociables.",
        },
        {
          kind: "p",
          text: "Cuando el dinero está ajustado, el presupuesto deja de ser un ejercicio de planificación y se convierte en una herramienta de supervivencia. Eso no es un fracaso de tu disciplina ni de tu inteligencia. Es la respuesta natural a un entorno restringido. Un buen presupuesto en este contexto hace tres cosas a la vez: te dice qué es seguro gastar, evita que las sorpresas pequeñas se conviertan en crisis grandes y deja una rendija de espacio para algo que sea tuyo. El resto de esta guía te muestra cómo construirlo, un paso a la vez.",
        },
        {
          kind: "h3",
          text: "Los bajos ingresos no son una sola cosa",
          id: "no-es-una-sola-cosa",
        },
        {
          kind: "p",
          text: "El consejo que sirve para un autónomo en una ciudad cara no siempre sirve para una persona con trabajo de medio tiempo en un pueblo más pequeño, y viceversa. Lo que se comparte es la estructura: un ingreso pequeño y predecible, una lista de gastos fijos y una cuerda floja entre los dos. Una vez que aceptas que el objetivo no es optimizar para la riqueza sino para la estabilidad, el presupuesto se convierte en una herramienta diferente. Se vuelve una forma de darle a cada peso un destino claro para que nada se desperdicie en el tipo de estrés que cuesta más dinero del que ahorra.",
        },
        {
          kind: "h2",
          text: "Por qué la mayoría de los consejos de presupuesto fallan cuando el dinero está ajustado",
          id: "por-que-fallan",
        },
        {
          kind: "p",
          text: "La mayor parte del contenido de finanzas personales está escrito para personas con un margen. Asume que puedes redirigir unos cientos de euros al mes a invertir, que puedes saltarte algunos gastos no esenciales, que puedes absorber una sorpresa sin perder el sueño. Cuando esas condiciones no se cumplen, el mismo consejo suena a idioma extranjero. También puede sonar a culpa, sobre todo cuando quien escribe no reconoce la distancia entre tu realidad y el ejemplo.",
        },
        {
          kind: "p",
          text: "La segunda razón por la que el consejo falla es que trata la disciplina como el cuello de botella. La disciplina rara vez es el cuello de botella. El cuello de botella es estructural: el ingreso no alcanza para los gastos, los gastos no se alinean con los meses, y no hay holgura para absorber una sorpresa de 200 euros. Un buen presupuesto no puede arreglar un déficit estructural. Lo que puede hacer es hacer visible el déficit, que es el primer paso para tomar una decisión distinta. A veces la decisión es renegociar un gasto fijo. A veces es cambiar de trabajo. A veces es pedir ayuda. El presupuesto es el mapa, no el rescate.",
        },
        {
          kind: "h3",
          text: "El mito de «recorta los cafés»",
          id: "mito-de-los-cafes",
        },
        {
          kind: "p",
          text: "Recortar pequeños gastos discrecionales es una buena práctica cuando tienes margen. Con un ingreso ajustado, la matemática no funciona. La distancia entre un mes apretado y un mes sobrevivible rara vez son unos cafés. Suele ser un aumento de alquiler, una factura médica, un turno perdido o un gasto relacionado con los hijos que no existía el mes anterior. Recortar lo pequeño ayuda, pero no es la palanca. La palanca está en los costos fijos, en las fuentes de ingreso y en la forma en que ambas se secuencian a lo largo del mes. Ahí es donde esta guía pone su energía.",
        },
        {
          kind: "h2",
          text: "Los cuatro números, ajustados a los meses ajustados",
          id: "cuatro-numeros-ajustados",
        },
        {
          kind: "p",
          text: "Todo presupuesto, sin importar el ingreso, se construye sobre los mismos cuatro números: ingreso neto, gastos fijos, gastos variables y tasa de ahorro. La forma de esos números cambia cuando el dinero está ajustado, pero siguen siendo la columna vertebral. El ingreso neto es la cantidad mensual realista más pequeña con la que puedes contar, después de impuestos y deducciones obligatorias. Los gastos fijos son las cuentas que llegan sin importar qué: alquiler, servicios, transporte, pagos mínimos de deudas, costos fijos relacionados con los hijos. Los gastos variables son la parte flexible: comida del hogar, productos del hogar, cuidado personal, transporte ocasional. La tasa de ahorro en un presupuesto ajustado no es una meta agresiva de inversión. Es lo que quede después de las otras tres, incluso si la cifra empieza en cero.",
        },
        {
          kind: "p",
          text: "Lo que cambia cuando el dinero está ajustado es el orden de prioridad. En lugar de «ahorra primero, luego todo lo demás», el orden se vuelve «no negociables primero, luego pequeñas reservas, luego gasto discrecional». Ese orden de prioridad es la columna vertebral de los siete pasos que siguen. Puedes leer más sobre los cuatro números en la guía más amplia de [cómo hacer un presupuesto con dinero](/es/blog/how-to-budget-money); esta versión simplemente los afina para los meses ajustados.",
        },
        {
          kind: "h2",
          text: "Siete pasos para presupuestar con bajos ingresos",
          id: "siete-pasos",
        },
        {
          kind: "p",
          text: "Estos siete pasos asumen que tu ingreso es irregular, tu margen es delgado y tu tiempo es limitado. Están pensados para tomar alrededor de una hora la primera vez que los hagas y veinte minutos a la semana después. No requieren una app, una hoja de cálculo ni una mentalidad especial. Requieren honestidad y un papel.",
        },
        {
          kind: "h3",
          text: "Paso 1: Mapea cada peso que entra",
          id: "paso-1-mapear",
        },
        {
          kind: "p",
          text: "Abre los últimos tres meses de tus estados de cuenta y anota cada depósito. Súmalos, divídelos entre tres y ese es tu ingreso neto mensual promedio. Ahora mira el más bajo de los tres meses, no el promedio. Ese es tu ingreso de planificación. Presupuesta desde el mes más bajo, no desde el típico. Cuando presupuestas desde el promedio, los meses malos te rompen. Cuando presupuestas desde el suelo, los meses buenos son un colchón. Este único cambio protege más presupuestos ajustados que cualquier otro hábito.",
        },
        {
          kind: "p",
          text: "Para hacerlo concreto, toma un ejemplo real. Si los últimos tres meses de depósitos son 1.400, 1.250 y 1.520, el promedio es 1.390. El más bajo es 1.250. Construye el presupuesto desde 1.250. Los 140 euros de diferencia entre el promedio y el suelo no son una pequeña cantidad con un ingreso ajustado. Muchas veces son la diferencia entre una cuenta pagada y una comisión por demora. Si el ingreso es irregular, como 1.800 un mes y 1.100 al siguiente, el patrón es todavía más importante. Usa el mes más bajo realista de los últimos seis como ingreso de planificación. Si dos meses seguidos caen por debajo de eso, trata el promedio de esos dos como el nuevo suelo. El presupuesto es un documento vivo, no una regla fija.",
        },
        {
          kind: "h3",
          text: "Paso 2: Asegura los no negociables",
          id: "paso-2-no-negociables",
        },
        {
          kind: "p",
          text: "Los no negociables son las cuentas que hay que pagar para que lo básico de la vida siga funcionando: alquiler o hipoteca, servicios, pagos mínimos de deudas, transporte al trabajo, costos fijos relacionados con los hijos, medicamentos. Súmalos. Resta esa suma de tu ingreso de planificación. El número que queda, si queda algo, es el punto de partida para todo lo demás. Si el número es negativo, tienes un déficit estructural. El primer movimiento no es optimizar la compra del supermercado. El primer movimiento es mirar los no negociables mismos: cuál se puede renegociar, cuál se puede reducir, cuál te está manteniendo en un mal lugar.",
        },
        {
          kind: "h3",
          text: "Paso 3: Encuentra tu dinero «elástico»",
          id: "paso-3-elastico",
        },
        {
          kind: "p",
          text: "El dinero elástico es el gasto que puede encoger sin romper lo básico. Suele vivir en la compra del hogar, productos del hogar, extras de transporte, entretenimiento y cuidado personal. Mira los últimos tres meses e identifica las categorías elásticas. Escoge las dos o tres en las que un cambio pequeño puede ahorrarte unos pocos euros a la semana. No cien euros al mes. Unos pocos euros a la semana. El punto de este paso no es transformar tu vida. Es liberar una cantidad pequeña y real de dinero que se convierte en la semilla del siguiente paso.",
        },
        {
          kind: "h3",
          text: "Paso 4: Construye un colchón inicial de 100",
          id: "paso-4-colchon",
        },
        {
          kind: "p",
          text: "Un fondo de emergencia tradicional es de tres a seis meses de gastos. Ese es el objetivo correcto a la larga, pero no es el objetivo correcto para un mes ajustado. Con un ingreso ajustado, el objetivo correcto es 100. Cien euros son suficientes para cubrir una sorpresa pequeña, como un copago de receta, una multa de estacionamiento o una factura de servicios que llega dos veces. Es lo bastante pequeño para construirse en unas pocas semanas, y lo bastante pequeño para que no tengas que elegir entre él y una comida. Cuando tengas 100, dejas de pagar sorpresas con comisiones de descubierto. Eso solo ya vale el esfuerzo.",
        },
        {
          kind: "h3",
          text: "Paso 5: Usa el método del calendario de pagos",
          id: "paso-5-calendario",
        },
        {
          kind: "p",
          text: "La mayoría de los presupuestos ajustados se rompen por el calendario, no por el monto. El alquiler vence el día 1, el sueldo cae el día 5, el servicio vence el día 10. Cuando el calendario no encaja, algo se paga tarde. La solución es pasar de un presupuesto por categorías a un presupuesto por fechas. Toma una hoja en blanco y dibuja un calendario. Marca cada fecha de ingreso. Marca cada fecha de vencimiento. Haz coincidir los ingresos con los vencimientos en orden, no por categoría. Cuando el calendario funciona, el presupuesto funciona. Cuando no, el presupuesto es una lista de deseos. La app de Savlo usa un ritmo parecido: ver lo que vence antes de pagarlo.",
        },
        {
          kind: "p",
          text: "Para hacerlo concreto, imagina que el alquiler es 700 el día 1, un servicio es 90 el día 10, un plan de teléfono es 45 el día 15, y un sueldo de 1.250 cae el día 5 y el día 20. El día 5, 700 del primer sueldo van al alquiler. El día 10, los 90 del segundo sueldo (que llega el día 20) tienen que salir de algún lado. El calendario muestra ese problema antes de que se convierta en una factura perdida. La solución es apartar un pequeño colchón de efectivo el día 5 que cubra la factura del día 10, o llamar al servicio y pedir un cambio de vencimiento al día 20. Cualquiera de las dos soluciones es más barata que una comisión por demora. El método del calendario convierte la matemática de algo abstracto a una sola página que puedes leer en un minuto.",
        },
        {
          kind: "h3",
          text: "Paso 6: Abre un Sinking Fund diminuto",
          id: "paso-6-sinking",
        },
        {
          kind: "p",
          text: "Los Sinking Funds suenan a lujo, pero con un ingreso ajustado son una habilidad de supervivencia. Un Sinking Fund es una pequeña reserva que construyes para un gasto futuro conocido: una prima anual de seguro, una vuelta al colegio, un regalo de fin de año, una inspección del coche. La mayoría de los gastos anuales están entre 50 y 500. Divide esa cantidad entre doce y aparta esa pequeña cifra cada mes. Cuando llega el gasto, el dinero ya está ahí. Si quieres una explicación más larga, la [guía de Sinking Funds](/es/blog/sinking-funds) recorre la matemática. Con un ingreso ajustado, la regla es simple: 5 a la semana para un gasto predecible es suficiente para empezar.",
        },
        {
          kind: "h3",
          text: "Paso 7: Suma pequeños impulsos de ingreso",
          id: "paso-7-impulsos",
        },
        {
          kind: "p",
          text: "Hacer un presupuesto con bajos ingresos termina chocando con un muro. El muro es el ingreso. Recortar el dinero elástico tiene un suelo, y una vez que llegas a él, ninguna hoja de cálculo ayuda. El siguiente paso es sumar ingreso, no recortar gastos. Los pequeños impulsos de ingreso no son renunciar a tu trabajo principal. Son meter veinte euros en tu bolsillo este mes con algo que ya sabes hacer: vender algo, tomar un turno extra, escribir por encargo, pasear perros, hacer un pequeño servicio a un vecino. Haz una lista de tres cosas que podrías hacer en las próximas dos semanas que sumen entre 20 y 100 euros a tu ingreso. Haz una de ellas la próxima semana. Encadena los aciertos. El efecto compuesto de cantidades pequeñas es lo que convierte un presupuesto ajustado en uno vivible.",
        },
        {
          kind: "p",
          text: "Los impulsos más fáciles son los que usan una hora que ya tienes. Una tarde de deshacer un cajón y publicar cinco cosas en un marketplace local suele producir entre 40 y 150 euros en una semana. Un sábado por la mañana ayudando a un vecino a mover un sofá son 30 en efectivo y un favor a futuro. Unas horas traduciendo un documento corto, paseando tres perros o montando un mueble para alguien que prefiere pagar a hacerlo son otros 50. Ninguno de estos es escalable, y ese es el punto. Con un ingreso ajustado, el objetivo es sumar una cantidad pequeña y real este mes, no montar un negocio paralelo. Trata cada impulso como un evento único, y deja que el presupuesto se beneficie de él sin rediseñar el plan a su alrededor.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Los siete pasos parecen largos. En la práctica, la primera vez que los haces toman alrededor de una hora. Después, la revisión semanal son veinte minutos. El paso más difícil es el primero, porque el primero es donde aparece la verdad. La buena noticia es que cada paso después de ese es más fácil. La otra buena noticia es que ninguno de los pasos requiere una app, una suscripción ni un temperamento especial. Requieren un papel, una hora honesta y la disposición de volver el próximo domingo.",
        },
        {
          kind: "h2",
          text: "Lidiar con la vergüenza y la ansiedad por el dinero",
          id: "verguenza-y-ansiedad",
        },
        {
          kind: "p",
          text: "El dinero con un ingreso ajustado no es un problema de matemáticas. También es emocional. Los sentimientos que aparecen al revisar tu saldo y ver 17 euros hasta el viernes son reales, y no son señales de debilidad. Son señales de que te importa. El problema es que la vergüenza te hace evitar lo que ayudaría: mirar los números. Si llevas semanas sin abrir la app del banco, no estás solo, y no eres un fracaso. Eres una persona con un sistema nervioso que está haciendo su trabajo al protegerte de un estresor.",
        },
        {
          kind: "p",
          text: "La cura no es motivación. La cura es la pequeñez. Abre la app treinta segundos y mira el saldo. Cierra la app. Esa es una interacción completa de presupuesto para un día ajustado. Al día siguiente, haz lo mismo. Al día siguiente, mira además una cuenta. En una semana, has mirado los números cuatro veces y la vergüenza ha perdido la mayor parte de su poder. La versión larga de esta idea está en la guía de [ansiedad financiera](/es/blog/financial-anxiety), que profundiza en la ciencia de la evitación y en lo que ayuda.",
        },
        {
          kind: "h3",
          text: "La carga mental de las cantidades pequeñas",
          id: "carga-mental",
        },
        {
          kind: "p",
          text: "Las personas con más dinero a menudo no se dan cuenta de cuánto pensamiento implica cada cantidad pequeña en un presupuesto ajustado. Los 4 euros de diferencia entre dos supermercados. Los 30 céntimos por una bolsa extra. Si tomas el autobús dos veces esta semana o caminas. Esa carga mental es real, y es una de las razones por las que los presupuestos con bajos ingresos agotan. La salida no es tomar las decisiones pequeñas cada vez. La salida es hacer las reglas una vez y luego seguirlas por defecto. Compra en el mismo supermercado. Usa efectivo para el gasto variable. Define un máximo semanal discrecional y deja de rastrear después de eso. El objetivo es que las decisiones pequeñas dejen de sentirse como decisiones.",
        },
        {
          kind: "h3",
          text: "Rastrear gastos en treinta segundos",
          id: "rastrear-en-30-segundos",
        },
        {
          kind: "p",
          text: "Con un ingreso ajustado, el tiempo que pasas rastreando el presupuesto a menudo es más caro que el costo de un gasto no registrado. La regla es simple: rastrea durante treinta segundos, no durante diez minutos. La mayoría de los gastos con un ingreso ajustado vienen de uno de tres lugares: comida del hogar, transporte y personales. Cuando gastas, registra una sola línea con el monto, la categoría y el día. Eso es todo. Una entrada por voz que hace lo mismo en tres segundos es incluso mejor. La app de Savlo está pensada para ese ritmo: una frase corta y la entrada está en el calendario, sin vincular bancos y sin fricción. El punto es hacer del rastreo un hábito que puedas mantener un martes cansado a las 9 de la noche, no un proyecto que requiera una hora de concentración.",
        },
        {
          kind: "p",
          text: "La otra mitad de la regla de los treinta segundos es dejar de rastrear cuando el tiempo deja de rendir. Si un café de 4 euros no va a cambiar el presupuesto, regístralo en dos segundos y sigue. Si acaba de ocurrir una reparación del coche de 400 euros, regístrala con cuidado y pausa el gasto discrecional de la semana. Rastrear es una herramienta, no una religión. La buena versión de rastrear es una que cabe en una vida normal sin tomarla por completo.",
        },
        {
          kind: "h3",
          text: "Un ejemplo trabajado: el mes de 1.250",
          id: "ejemplo-trabajado",
        },
        {
          kind: "p",
          text: "Para unir los siete pasos, toma un solo mes como ejemplo. Ingreso del mes: 1.250 netos, con la segunda mitad cayendo el día 20. No negociables: 700 de alquiler el día 1, 90 de servicio el día 10, 45 de teléfono el día 15, 60 de pago mínimo de deuda el día 22, 120 de transporte, 80 de comida del hogar, 30 de cuidado personal. Eso son 1.125 de gasto fijo y predecible. El colchón del mes anterior es 100. El primer sueldo del día 5 cubre el alquiler y devuelve el colchón a 100 después de la factura del servicio el día 10. El segundo sueldo del día 20 cubre el plan de teléfono, el pago mínimo de la deuda, el transporte y la comida del hogar, y deja 25. Esos 25 van a un Sinking Fund para el siguiente gasto predecible. La matemática está ajustada, pero funciona. La misma forma funciona para un mes de 2.200, un mes de 900 o un mes de 3.400. Los siete pasos no cambian con el tamaño de la cifra.",
        },
        {
          kind: "h3",
          text: "Cuando llega el mes bueno",
          id: "cuando-llega-el-mes-bueno",
        },
        {
          kind: "p",
          text: "Con un ingreso ajustado, los meses buenos son más raros que los malos, y la tentación es gastarlos. Resiste. Los primeros 50 de cualquier mes bueno van al colchón hasta que el colchón llegue a 100. Los siguientes 50 van al siguiente Sinking Fund pequeño. Los siguientes 50 van a la siguiente deuda de la lista. Cuando el mes bueno tiene unos cientos de euros extra, el presupuesto tiene una base real, y el próximo mes malo ya no es una crisis. El mes bueno no es un permiso para subir el nivel de vida. Es un permiso para reforzar el suelo.",
        },
        {
          kind: "h2",
          text: "Siete errores que empeoran un mes ajustado",
          id: "siete-errores",
        },
        {
          kind: "ol",
          items: [
            "**Saltarse comidas para ahorrar dinero.** Funciona una semana, después te cobra en energía, concentración y facturas de salud. La comida es un costo fijo, no elástico. Encuentra otra categoría elástica.",
            "**Préstamos de día de pago o adelantos en efectivo.** Parecen un puente, pero las comisiones se acumulan. Si un préstamo de día de pago es la única opción, esa es una señal de pedir ayuda, no de tomar el préstamo. La mayoría de las ciudades tienen asistencia de emergencia para servicios y alternativas de pequeña cantidad a través de organizaciones sin ánimo de lucro.",
            "**Ignorar una factura porque da miedo.** Las comisiones por demora, la pérdida de servicio y los cobros son más caros que una llamada. Llama a la compañía, pide un plan de pago, pide una extensión por dificultad. La peor respuesta es «no», y la mejor es «podemos dividirlo en tres pagos».",
            "**Usar crédito para la compra del supermercado.** La factura del supermercado es la parte más predecible del presupuesto. Si va a crédito, el presupuesto tiene un problema estructural, no de disciplina.",
            "**Pagar todas las deudas a la vez.** Con un ingreso ajustado, pagar extra en cinco deudas al mismo tiempo es lo mismo que pagar extra en cero. Paga el mínimo en todas para proteger el crédito y la calma, y luego mete cada euro extra en el saldo más pequeño. La matemática está en la [guía para salir de deudas](/es/blog/how-to-get-out-of-debt), y el orden importa todavía más cuando el ingreso es ajustado.",
            "**Intentar ahorrar de forma agresiva cuando no hay margen.** Ahorrar 50 euros al mes cuando la matemática ya está ajustada solo crea una crisis nueva. Construye primero el colchón de 100. Luego habla de ahorrar más.",
            "**Comparar tu presupuesto con el de los demás.** El presupuesto «promedio» que ves en internet está hecho para un ingreso «promedio». El tuyo está hecho para tu ingreso real. No son el mismo ejercicio.",
            "**Abandonar el presupuesto después de un mal mes.** El punto de un presupuesto con bajos ingresos no es la perfección. El punto es volver el próximo domingo e intentar de nuevo. Ese es todo el trabajo. Si vuelves, el presupuesto está funcionando.",
          ],
        },
        {
          kind: "h2",
          text: "Herramientas que ayudan cuando el dinero está ajustado",
          id: "herramientas-que-ayudan",
        },
        {
          kind: "p",
          text: "La mejor herramienta es la que vas a usar de verdad. Con un ingreso ajustado, el costo de una suscripción rara vez es el factor decisivo. El factor decisivo es si la herramienta respeta tu tiempo y tu realidad. Para la mayoría, la herramienta correcta es una de tres: un papel dividido en no negociables, elástico y una pequeña reserva; una hoja de cálculo simple con tres columnas que se actualiza cada semana; o una app que prioriza la privacidad y te permita registrar gastos por voz, en pocos segundos, sin vincular una cuenta bancaria. Savlo está pensada para la tercera vía. Funciona en Android hoy y próximamente en iOS, y trabaja sin pedir credenciales bancarias, lo cual importa cuando la confianza es el factor decisivo.",
        },
        {
          kind: "p",
          text: "Si prefieres el camino manual, basta con un breve chequeo semanal. Abre la app de notas del teléfono. Escribe lo que entró, lo que salió y lo que queda. Eso es un presupuesto completo. Si quieres una forma más estructurada, el calendario de pagos del paso cinco te da todo lo que necesitas en una sola página. El punto no es el formato. El punto es el hábito. Escoge una herramienta que no sume fricción y úsala todos los domingos.",
        },
        {
          kind: "h2",
          text: "Cuándo pedir ayuda más allá del presupuesto",
          id: "pedir-ayuda",
        },
        {
          kind: "p",
          text: "Un presupuesto es una herramienta, no un rescate. Hay meses en los que la matemática simplemente no funciona, y la respuesta correcta es pedir ayuda. La mayoría de las ciudades tienen asistencia de emergencia para servicios, comida, alquiler y medicamentos. Las organizaciones no son caridades que tengas que merecer. Son servicios públicos pensados exactamente para esta situación. Si estás en Estados Unidos, marcar 211 te conecta con una línea local de información que puede guiarte al programa correcto. En muchos otros países existen líneas equivalentes. El presupuesto te da la dignidad de saber lo que está pasando. La ayuda te da el tiempo para tomar la siguiente decisión.",
        },
        {
          kind: "p",
          text: "Un segundo tipo de ayuda es la biblioteca pública. La mayoría de las bibliotecas ofrecen acceso gratuito a coaching financiero, talleres gratuitos sobre presupuestos y deudas, impresión gratuita de formularios, internet gratuito para buscar trabajo y espacio de reunión gratuito para organizar a la comunidad. La biblioteca es un espacio público tranquilo donde puedes sentarte con tus estados de cuenta y trabajar los siete pasos de esta guía sin que nadie te pregunte qué estás haciendo ahí. Si la matemática está ajustada, la biblioteca es uno de los pocos recursos públicos que escala a lo que necesites.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Preguntas frecuentes sobre presupuestar con bajos ingresos",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "¿Se puede realmente hacer un presupuesto cuando el dinero está ajustado?",
              a: "Sí, pero el objetivo es distinto. El objetivo de un presupuesto con bajos ingresos no es ahorrar de forma agresiva. Es evitar sorpresas, proteger una pequeña reserva y dejar de sangrar cuando llega una factura pequeña en el momento equivocado. Un presupuesto que evita una comisión de descubierto de 35 euros está haciendo su trabajo, aunque no se parezca a lo que muestran los blogs de dinero.",
            },
            {
              q: "¿Cuál es la cantidad más pequeña que debería intentar ahorrar primero?",
              a: "Cien. Un colchón de 100 es suficiente para absorber una sorpresa pequeña, y lo bastante pequeño para construirse en unas pocas semanas. Cuando lo tengas, expándelo. El punto es empezar con una cifra alcanzable, no con una que mantenga el objetivo en el estante.",
            },
            {
              q: "¿Cómo hago un presupuesto si mi ingreso cambia cada mes?",
              a: "Presupuesta desde el mes más bajo de los últimos seis, no desde el promedio. Cuando llegan los meses buenos, trata el extra como colchón, no como una mejora del plan. El plan está hecho para sobrevivir al mes malo. El mes bueno es un regalo al plan.",
            },
            {
              q: "¿Qué hago si todas las categorías son no negociables?",
              a: "Entonces el presupuesto tiene un problema estructural, no de categoría. El siguiente paso es mirar el ingreso, no el gasto. Renegocia un gasto fijo, pide un aumento, toma un pequeño ingreso extra, o pide ayuda. El presupuesto puede mostrarte la brecha. No puede cerrarla.",
            },
            {
              q: "¿Cómo dejo de sentir vergüenza por mis gastos?",
              a: "La vergüenza suele vivir en la evitación. Abre la app treinta segundos. Mira el saldo. Cierra la app. Haz esto durante una semana. La vergüenza pierde la mayor parte de su poder en el momento en que mirar se vuelve un hábito. Puedes leer más sobre esto en la pieza de [disforia con el dinero](/es/blog/money-dysmorphia), que profundiza en el lado emocional.",
            },
            {
              q: "¿Está bien usar una app de presupuesto cuando el dinero está ajustado?",
              a: "Sí, siempre que la app no sume fricción. Una app sencilla que te permita registrar un café de 4 euros en dos segundos vale más que una app sofisticada que abres dos veces al año. Si una app gratuita sin vinculación bancaria y sin suscripción funciona, esa es la app correcta. Savlo es una de esas opciones, pero no es la única. Que priorice la privacidad importa aquí porque también estás protegiendo los pocos euros que tienes.",
            },
            {
              q: "¿Cómo hago un presupuesto si además tengo deudas con un ingreso ajustado?",
              a: "Paga el mínimo en cada deuda para mantener las cuentas al día, y luego mete cada euro extra en el saldo más pequeño. Cuando el saldo más pequeño se vaya, pasa ese pago al siguiente. La mecánica es la misma que en la [guía para salir de deudas](/es/blog/how-to-get-out-of-debt), y el orden de prioridad importa todavía más cuando el ingreso es ajustado.",
            },
            {
              q: "¿Qué hago si tengo que elegir entre pagar una factura y comprar comida?",
              a: "Llama primero a la factura. La mayoría de las compañías tienen una línea de dificultad. Pausarán el servicio por un mes, dividirán un pago, o te referirán a un programa de asistencia. La comida es un no negociable, y una sola llamada a menudo te compra el tiempo para resolver la comida. Si no funciona, esa es la señal de que la asistencia pública de alimentos y los bancos de comida locales son la respuesta correcta. Existen exactamente para esta situación.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Un presupuesto pequeño y honesto le gana a uno perfecto",
          id: "conclusion",
        },
        {
          kind: "p",
          text: "Un presupuesto con bajos ingresos no es un espectáculo. Es un hábito de mantenimiento. El trabajo es evitar que las sorpresas pequeñas se conviertan en crisis grandes, mantener una pequeña reserva de dinero y mantenerte lo bastante cerca de los números como para tomar una decisión en calma cuando algo se rompe. Un presupuesto pequeño y honesto al que vuelves el próximo domingo le gana a uno perfecto que abandonas en tres semanas.",
        },
        {
          kind: "p",
          text: "Si partes de cero, toma los siete pasos en orden. Construye el colchón de 100. Abre un Sinking Fund pequeño. Suma un pequeño impulso de ingreso. Después de un mes, la matemática todavía no es cómoda, pero la rutina sí. La rutina es lo que hace que el próximo mes sea más fácil. En seis meses, la rutina es lo que hace posible el próximo año.",
        },
        {
          kind: "p",
          text: "La parte más dura de un presupuesto con bajos ingresos no es la matemática. Es la soledad de hacerlo. La mayoría de las conversaciones sobre presupuesto asumen un margen que tú no tienes, y la mayoría del contenido de presupuesto está escrito para personas que pueden absorber una sorpresa. No vas por detrás, y no estás fallando. Estás corriendo una versión más exigente del mismo ejercicio, con menos margen de error y un colchón más pequeño para la sorpresa. Un presupuesto que cabe en esa realidad es una de las herramientas más útiles que puedes construir, y vale la hora que toma empezar. Si quieres una herramienta que respete tu privacidad, no pida credenciales bancarias y funcione en rutinas ajustadas, Savlo está disponible en Android y próximamente en iOS. Está pensada para el tipo de presupuesto descrito en esta guía: pequeño, honesto y fácil de volver a él. Todo lo de aquí funciona sin ella. Si quieres un acompañante para la rutina, Savlo es una de las opciones más tranquilas del mercado.",
        },
      ],
    },
  },
]

export function getSpanishPostBySlug(slug: string): SpanishBlogPost | undefined {
  return spanishPosts.find((post) => post.slug === slug)
}
