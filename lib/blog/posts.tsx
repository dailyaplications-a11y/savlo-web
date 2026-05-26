import {
  cloneElement,
  isValidElement,
  type ReactNode,
} from "react"

/**
 * Savlo blog — data + content for every post.
 *
 * SEO notes
 * ---------
 * Target keywords are grouped by search intent:
 *  - Pillar / high-volume  : "cómo hacer un presupuesto", "regla 50/30/20",
 *                            "fondo de emergencia", "método de los sobres",
 *                            "app de presupuesto", "presupuesto base cero"
 *  - Brand-aligned (behavioral): "ansiedad financiera", "gastos hormiga",
 *                            "psicología del dinero"
 *  - Comparison / commercial: "ynab vs monarch", "mejores apps de presupuesto 2026"
 *  - Goal-driven            : "metas de ahorro smart", "salir de deudas"
 *
 * Structure benchmark (Cal AI article reference):
 *   ~2,969 words · 17,762 characters · 326 sentences · 245 paragraphs
 *   ≈ 12 words / paragraph · ≈ 9 words / sentence
 *   → short, scannable paragraphs, H2/H3 hierarchy, internal links.
 */

export type BlogCategory =
  | "Budgeting"
  | "Saving"
  | "Debt"
  | "Money Psychology"
  | "Comparisons"
  | "Goals"

export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO date (YYYY-MM-DD) */
  date: string
  category: BlogCategory
  keywords: string[]
  readingTime: number
  stats: {
    words: number
    characters: number
    sentences: number
    paragraphs: number
  }
  content: () => ReactNode
}

// ---------- Reusable typography helpers ----------

const publicCopyReplacements: Array<[RegExp, string]> = [
  [
    /If Mint(?:'|&apos;)s shutdown left you hesitant to hand over your bank credentials to another app, Savlo was built with exactly that concern in mind\./g,
    "If Mint's shutdown left you hesitant to jump into another money app, Savlo positions itself as a calmer alternative.",
  ],
  [
    /No bank sync, no ads, no third-party access to your data[\s\S]*?own bank(?:'|&apos;)s CSV\./g,
    "The public site highlights voice check-ins, spreadsheet imports, and a lower-pressure budgeting experience.",
  ],
  [
    /In Savlo, both English and Spanish are supported for voice input\./g,
    "Savlo positions voice input as a faster, lower-friction way to capture spending in the moment.",
  ],
  [
    /The app processes audio entirely on-device, which means nothing you say is transmitted to a server or stored anywhere outside your phone\./g,
    "The public site's core promise here is speed and simplicity, not a long manual entry flow.",
  ],
  [
    /On-device processing means the audio never leaves your phone\./g,
    "When evaluating any voice-enabled financial app, look for clear privacy disclosures about where audio is processed, how long it is retained, and whether it is shared with third parties.",
  ],
  [
    /The speech recognition happens locally, the transaction is logged locally, and nothing is transmitted externally\./g,
    "",
  ],
  [
    /When evaluating any voice-enabled financial app,[\s\S]*?phrase to look for\./g,
    "Those details matter far more than the marketing headline.",
  ],
  [
    /On-device processing means your audio never leaves your phone\./g,
    "The public site emphasizes faster check-ins, calmer review habits, and less friction than manual expense entry.",
  ],
  [
    /No bank linking, no ads, no third-party access\./g,
    "",
  ],
  [
    /Just a fast, private way to know exactly where your money goes\./g,
    "",
  ],
  [
    /Your data stays on your device\./g,
    "",
  ],
  [
    /It features local-first privacy, 4-second natural voice logging, automated CSV importing, sinking funds, and a morning Daily Margin focus\./g,
    "The public site emphasizes voice logging, CSV importing, sinking funds, Spaces, and a calmer daily money routine.",
  ],
  [
    /Available on iOS with a free trial\./g,
    "The public website currently presents the app as coming soon.",
  ],
]

function sanitizePublicCopy(text: string) {
  return publicCopyReplacements.reduce(
    (current, [pattern, replacement]) => current.replace(pattern, replacement),
    text,
  )
}

function sanitizePublicNode(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    return sanitizePublicCopy(node)
  }

  if (Array.isArray(node)) {
    return node.map((child) => sanitizePublicNode(child))
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    if (node.props.children === undefined) {
      return node
    }

    return cloneElement(node, undefined, sanitizePublicNode(node.props.children))
  }

  return node
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-28 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-[34px]"
    >
      {sanitizePublicNode(children)}
    </h2>
  )
}

function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-10 scroll-mt-28 font-serif text-xl font-medium tracking-tight text-foreground"
    >
      {sanitizePublicNode(children)}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-[17px] leading-[1.75] text-foreground/90">
      {sanitizePublicNode(children)}
    </p>
  )
}

function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-5 space-y-2.5 pl-5 text-[17px] leading-[1.7] text-foreground/90 [&>li]:list-disc [&>li]:marker:text-primary/80">
      {sanitizePublicNode(children)}
    </ul>
  )
}

function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-5 space-y-2.5 pl-5 text-[17px] leading-[1.7] text-foreground/90 [&>li]:list-decimal [&>li]:marker:text-primary/80">
      {sanitizePublicNode(children)}
    </ol>
  )
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
    >
      {children}
    </a>
  )
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-8 rounded-2xl border border-primary/25 bg-primary/[0.06] px-5 py-4 text-[16px] leading-relaxed text-foreground/90">
      {sanitizePublicNode(children)}
    </aside>
  )
}

function Divider() {
  return (
    <div
      aria-hidden
      className="mx-auto my-14 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent"
    />
  )
}

// ---------- Featured pillar article (~2,900 words) ----------

function ContentPresupuestoMensual() {
  return (
    <>
      <P>
        Hacer un presupuesto mensual no es un castigo. Es, en el fondo, una
        conversación tranquila con tu yo del mes pasado y con tu yo del mes que
        viene. Esta guía te acompaña paso a paso, sin hojas de cálculo
        hostiles, sin rachas, sin números rojos que gritan. Solo decisiones
        calmadas.
      </P>
      <P>
        Si alguna vez abriste tu app del banco a las 23:47 sintiendo un nudo
        en el estómago, esto es para ti. Vamos a diseñar un presupuesto que
        respire contigo, no en contra tuya.
      </P>

      <H2 id="por-que">Por qué los presupuestos tradicionales fallan</H2>
      <P>
        La mayoría de los presupuestos están diseñados como dietas: con
        reglas rígidas, premios externos y un sentimiento latente de culpa.
        El problema no es falta de disciplina. Es el diseño.
      </P>
      <P>
        La{" "}
        <A href="/blog/finanzas-conductuales-presupuestos-tradicionales">
          investigación en finanzas conductuales
        </A>{" "}
        es clara: cuando un sistema nos avergüenza, evitamos mirarlo. Y
        cuando evitamos mirarlo, el mes se nos escapa. No es pereza. Es
        evitación emocional.
      </P>
      <P>
        Un buen presupuesto hace lo contrario. Te invita a volver, incluso
        cuando pasaste tres días sin abrir la app. Sin regañarte.
      </P>

      <H3 id="senales">Señales de que tu presupuesto actual no está funcionando</H3>
      <UL>
        <li>Lo abres solo cuando algo va mal.</li>
        <li>Cada categoría se siente como un examen.</li>
        <li>Al final del mes no sabes adónde se fue el dinero.</li>
        <li>Te sientes peor después de revisarlo, no mejor.</li>
        <li>Llevas meses sin actualizarlo porque te abruma.</li>
      </UL>
      <P>
        Si te reconociste en al menos dos, tu presupuesto no está roto: su
        diseño lo está. Vamos a arreglarlo.
      </P>

      <H2 id="paso-1">Paso 1 · Calcula tu ingreso real, no el bruto</H2>
      <P>
        El error más común es presupuestar con el salario bruto. El dinero
        que llega a tu cuenta es menor: después de impuestos, seguridad
        social, aportes previsionales y cualquier descuento automático.
      </P>
      <P>
        Toma los últimos tres meses de depósitos netos y saca el promedio.
        Si tienes ingresos variables, usa el mes más bajo como línea base.
        Así tu presupuesto se mantiene firme incluso en meses flojos.
      </P>

      <H3 id="ingresos-variables">Si tus ingresos son irregulares</H3>
      <P>
        Los freelancers, artistas y emprendedores necesitan un colchón
        extra. La regla simple: tu presupuesto del mes se basa en lo que
        ganaste el mes anterior, no en lo que esperas ganar este. Así dejas
        de vivir de proyecciones optimistas.
      </P>

      <H2 id="paso-2">Paso 2 · Agrupa tus gastos en tres contenedores</H2>
      <P>
        Sin contenedores, un presupuesto se convierte en una lista interminable
        que nadie mantiene. Te propongo la estructura más probada del
        planeta: la{" "}
        <A href="/blog/regla-50-30-20">regla 50/30/20</A>.
      </P>
      <OL>
        <li>
          <strong>50% necesidades</strong> — vivienda, alimentación básica,
          transporte, servicios, salud, seguros, mínimos de deudas.
        </li>
        <li>
          <strong>30% deseos</strong> — salir a comer, suscripciones,
          hobbies, viajes, ropa no esencial.
        </li>
        <li>
          <strong>20% futuro</strong> — ahorro, inversión, pago acelerado
          de deudas.
        </li>
      </OL>
      <P>
        Los porcentajes son una brújula, no una jaula. Si vives en una
        ciudad cara, tu vivienda puede acercarse al 60%. Está bien: ajustas
        los otros dos sin castigarte.
      </P>

      <Callout>
        <strong>Regla de Savlo:</strong> cualquier presupuesto que te haga
        sentir peor después de revisarlo está mal calibrado. No tú.
      </Callout>

      <H2 id="paso-3">Paso 3 · Automatiza lo difícil, elige lo ligero</H2>
      <P>
        La fuerza de voluntad es un recurso agotable. Lo que no automatizas
        mensualmente, lo vas a negociar contigo todos los días. Y perderás.
      </P>
      <P>
        Configura transferencias automáticas el día que te pagan:
      </P>
      <UL>
        <li>Al ahorro de emergencia.</li>
        <li>A tus{" "}
          <A href="/blog/sinking-funds-fondos-para-gastos-grandes">
            sinking funds
          </A>{" "}
          (fondos específicos para gastos grandes previsibles).
        </li>
        <li>Al pago acelerado de deuda más cara.</li>
        <li>A inversión pasiva indexada si ya tienes colchón.</li>
      </UL>
      <P>
        Lo que queda en tu cuenta corriente es lo que puedes gastar sin
        pensar demasiado. Eso es libertad operativa. No micromanagement.
      </P>

      <H3 id="orden-transferencias">El orden ideal de las transferencias</H3>
      <OL>
        <li>Mínimos de deuda (obligación legal).</li>
        <li>Ahorro de emergencia hasta un primer hito — ej: $1.000.</li>
        <li>Deuda cara (intereses &gt; 15% anual).</li>
        <li>Completar fondo de emergencia hasta 3–6 meses.</li>
        <li>Inversión de largo plazo.</li>
        <li>Sinking funds para metas específicas.</li>
      </OL>

      <H2 id="paso-4">Paso 4 · Diseña tu fondo de emergencia como un refugio</H2>
      <P>
        El{" "}
        <A href="/blog/fondo-de-emergencia-cuanto-ahorrar">
          fondo de emergencia
        </A>{" "}
        no es un lujo financiero. Es salud mental pagada por adelantado. Es
        lo que impide que una llanta pinchada se convierta en una deuda de
        tarjeta de crédito al 80% anual.
      </P>
      <P>
        La meta clásica son 3 a 6 meses de gastos básicos. Si eso te parece
        marciano, empieza por un hito más humano: un mes. O $500. O lo que
        sea que te haga sentir menos expuesto mañana.
      </P>

      <H3 id="donde-guardarlo">Dónde guardarlo</H3>
      <P>
        En una cuenta separada, idealmente en otro banco, con un nombre
        emocional: <em>&ldquo;colchón&rdquo;</em>,{" "}
        <em>&ldquo;tranquilidad&rdquo;</em>, <em>&ldquo;paz mental&rdquo;</em>.
        No <em>&ldquo;ahorro 3&rdquo;</em>. El cerebro obedece a las
        etiquetas emocionales.
      </P>

      <H2 id="paso-5">Paso 5 · Asigna cada peso antes de que empiece el mes</H2>
      <P>
        Esto es{" "}
        <A href="/blog/presupuesto-base-cero-guia-principiantes">
          presupuesto base cero
        </A>: ingresos menos asignaciones igual a cero. No sobra dinero
        &ldquo;por ahí&rdquo;. Todo tiene un trabajo asignado, incluso si
        ese trabajo es <em>&ldquo;comprar café sin culpa&rdquo;</em>.
      </P>
      <P>
        Los beneficios son enormes:
      </P>
      <UL>
        <li>El dinero deja de ser ambiguo.</li>
        <li>Los gastos por impulso caen hasta un 30% por efecto de
          &ldquo;preasignación mental&rdquo;.</li>
        <li>La ansiedad de fin de mes baja de forma medible.</li>
      </UL>

      <H2 id="paso-6">Paso 6 · Dale un lugar a los gastos hormiga</H2>
      <P>
        Los{" "}
        <A href="/blog/gastos-hormiga-como-detectarlos">gastos hormiga</A>{" "}
        son los $3 de café, los $7 de delivery, los $12 de esa suscripción
        que olvidaste cancelar. Sumados, pueden ser 15–20% de tu ingreso.
      </P>
      <P>
        La respuesta correcta no es prohibirlos. Es darles una categoría
        llamada &ldquo;antojos&rdquo; con un tope mensual. Cuando el tope
        se acaba, se acaba. Sin drama. Sin auto-recriminación.
      </P>
      <P>
        Darles permiso es lo que hace que el sistema sobreviva al mes tres,
        donde la mayoría de los presupuestos mueren.
      </P>

      <H2 id="paso-7">Paso 7 · Revisa semanal, no diariamente</H2>
      <P>
        Revisar el presupuesto todos los días genera hipervigilancia
        financiera. Revisarlo una vez al mes es demasiado tarde: el mes ya
        pasó. El punto justo es semanal.
      </P>
      <P>
        Una revisión semanal toma entre 5 y 10 minutos:
      </P>
      <OL>
        <li>Confirmar que los ingresos esperados llegaron.</li>
        <li>Categorizar lo que la app no clasificó automáticamente.</li>
        <li>Ver qué categorías están agotándose antes de tiempo.</li>
        <li>Mover dinero entre categorías si hace falta — sin culpa.</li>
        <li>Mirar cuánto falta para la próxima meta de ahorro.</li>
      </OL>

      <Callout>
        En Savlo llamamos a este ritual el <em>domingo tranquilo</em>. Diez
        minutos, una bebida caliente, sin alarmas rojas. Solo cuidado.
      </Callout>

      <H2 id="errores">Errores que vale la pena evitar</H2>
      <UL>
        <li>
          <strong>Demasiadas categorías.</strong> Si tienes más de 15, no
          vas a mantenerlas. Empieza con 8–10.
        </li>
        <li>
          <strong>Perfeccionismo.</strong> Un presupuesto 70% seguido es
          mil veces mejor que uno 100% abandonado.
        </li>
        <li>
          <strong>No presupuestar lo divertido.</strong> Si no hay línea
          para placer, lo sacarás de otra. Y te sentirás culpable.
        </li>
        <li>
          <strong>Comparar meses.</strong> Cada mes tiene su propia forma.
          Diciembre no es marzo. No los pongas a competir.
        </li>
      </UL>

      <H2 id="ansiedad">Cómo presupuestar si la plata te genera ansiedad</H2>
      <P>
        La{" "}
        <A href="/blog/ansiedad-financiera-practicas-diarias">
          ansiedad financiera
        </A>{" "}
        no se resuelve con más planillas. Se resuelve con sistemas que
        reducen la carga cognitiva, no que la aumentan.
      </P>
      <P>
        Tres principios te ayudan:
      </P>
      <OL>
        <li>
          <strong>Menos decisiones diarias, más automatización.</strong>{" "}
          Cada decisión repetida agota.
        </li>
        <li>
          <strong>Lenguaje amable.</strong> Renombra categorías con palabras
          que no asusten: &ldquo;futuro yo&rdquo; en vez de &ldquo;ahorro
          forzoso&rdquo;.
        </li>
        <li>
          <strong>Ventanas de atención.</strong> Solo revisas el dinero en
          momentos elegidos. No mientras esperas el bus. No antes de
          dormir.
        </li>
      </OL>

      <H2 id="herramientas">Herramientas: app, Excel o papel</H2>
      <P>
        No hay una respuesta universal. Hay una respuesta para ti,
        ahora.
      </P>

      <H3 id="papel">Papel</H3>
      <P>
        Tiene fricción buena: te obliga a escribir y sentir. Funciona
        maravillosamente los primeros dos meses, hasta que la vida se
        vuelve más compleja.
      </P>

      <H3 id="excel">Excel o Google Sheets</H3>
      <P>
        Flexible pero exigente. Ideal si te gusta construir tu sistema
        desde cero y revisar manualmente. Pesado si buscas bajar fricción.
      </P>

      <H3 id="app">App dedicada</H3>
      <P>
        Baja la fricción en categorización y reportes. La mejor es la que
        realmente vas a abrir. Nuestra{" "}
        <A href="/blog/ynab-vs-monarch-vs-savlo">comparativa detallada</A>{" "}
        puede ayudarte a decidir si vienes de YNAB, Monarch o buscas algo
        más calmo.
      </P>

      <H2 id="plantilla">Plantilla inicial: 10 categorías que bastan</H2>
      <OL>
        <li>Vivienda (renta, hipoteca, servicios, mantenimiento).</li>
        <li>Alimentación (mercado + restaurantes).</li>
        <li>Transporte (gasolina, transporte público, seguro auto).</li>
        <li>Salud (seguro, consultas, medicinas).</li>
        <li>Deudas (mínimos + acelerados).</li>
        <li>Suscripciones (streaming, apps, gimnasio).</li>
        <li>Antojos (gastos hormiga con permiso).</li>
        <li>Ahorro de emergencia.</li>
        <li>Metas (sinking funds con nombre).</li>
        <li>Regalos y eventos (cumpleaños, fechas).</li>
      </OL>
      <P>
        Simple. Firme. Humana. Puedes añadir más después, si lo necesitas.
        La mayoría no lo necesita.
      </P>

      <H2 id="90-dias">Los próximos 90 días</H2>
      <P>
        Un presupuesto no se sostiene por una decisión heroica. Se sostiene
        por pequeñas repeticiones. Aquí tienes una hoja de ruta simple:
      </P>

      <H3 id="mes-1">Mes 1 · Observar sin juzgar</H3>
      <P>
        Registras todo lo que gastas. No cambias nada. El objetivo es
        conocer tu comportamiento real, no el ideal. La mayoría descubre
        dos o tres fugas que no sabía que tenía.
      </P>

      <H3 id="mes-2">Mes 2 · Ajustar con suavidad</H3>
      <P>
        Recalibras porcentajes y topes. Automatizas lo que se pueda.
        Renombras categorías con cariño. Dejas de tratarte como un
        adversario.
      </P>

      <H3 id="mes-3">Mes 3 · Habituar y soltar</H3>
      <P>
        El sistema empieza a trabajar para ti sin que lo vigiles. Te
        permites cerrar la app el jueves sin ansiedad. Hay un fondo de
        emergencia, así sea pequeño. Hay una{" "}
        <A href="/blog/metas-de-ahorro-smart">meta de ahorro SMART</A>{" "}
        avanzando. Y, sobre todo, hay un nuevo tono interno al hablar
        contigo del dinero.
      </P>

      <H2 id="cierre">Cierre: la calma también es un rendimiento</H2>
      <P>
        Un presupuesto no te hace rico. Te hace dueño. Dueño de tus
        decisiones, de tu tiempo, de tu atención. Con el tiempo, esa
        tranquilidad compone intereses propios: dormir mejor, discutir
        menos, elegir con más libertad.
      </P>
      <P>
        Si hoy empiezas con una sola cosa, que sea esta: asigna mañana los
        primeros $100 del próximo pago a tu &ldquo;colchón&rdquo;. Un gesto
        pequeño. Una promesa sostenible. El resto del sistema se construye
        encima de eso.
      </P>
      <P>
        El mejor presupuesto no es el más sofisticado. Es el que sigues
        abriendo tres, seis, doce meses después. Uno que te recibe con
        amabilidad cuando vuelves. Uno que te deja ser humano.
      </P>
      <Divider />
      <P>
        <em>
          ¿Quieres seguir leyendo? Explora nuestra guía de{" "}
          <A href="/blog/metodo-de-los-sobres-digital">
            método de los sobres digital
          </A>{" "}
          o aprende por qué{" "}
          <A href="/blog/finanzas-conductuales-presupuestos-tradicionales">
            los presupuestos tradicionales fallan
          </A>
          .
        </em>
      </P>
    </>
  )
}

function ContentHowToMakeABudget() {
  return (
    <>
      <P>
        Making a monthly budget is not a punishment. At its heart, it is a calm,
        honest conversation with your past self and your future self. This guide
        accompanies you step-by-step, without hostile spreadsheets, streaks, or
        guilt-inducing red numbers. Just intentional decisions.
      </P>
      <P>
        If you have ever opened your banking app late at night and felt a knot in
        your stomach, this is for you. Let&apos;s design a budget that breathes
        with you, not against you.
      </P>

      <H2 id="why-traditional-budgets-fail">Why traditional budgets fail</H2>
      <P>
        Most budgets are designed like diets: with rigid rules, external restrictions,
        and a latent sense of guilt. The problem isn&apos;t a lack of discipline. It
        is the system design itself.
      </P>
      <P>
        Behavioral finance research shows that when a system shames us, we avoid
        looking at it. And when we avoid looking, we lose track of our finances.
        It&apos;s not laziness; it&apos;s emotional avoidance. A good budget does
        the opposite. It invites you back, even when you haven&apos;t opened the
        app for three days, without ever scolding you.
      </P>

      <H2 id="step-1">Step 1: Calculate your net income, not the gross</H2>
      <P>
        The most common mistake is budgeting with your gross salary. The money
        that actually hits your bank account is lower after taxes, social
        security, pension contributions, and automatic deductions.
      </P>
      <P>
        Take your last three months of net deposits and calculate the average.
        If you have irregular income, use your lowest-earning month as a baseline.
        This keeps your budget solid even during slow months.
      </P>

      <H2 id="step-2">Step 2: Group your expenses into three buckets</H2>
      <P>
        Without simple buckets, budgeting becomes an endless list of categories
        that nobody maintains. We recommend starting with a flexible adaptation of
        the 50/30/20 rule:
      </P>
      <UL>
        <li><strong>50% Needs:</strong> Rent/mortgage, basic groceries, utilities, transit, health, and minimum debt payments.</li>
        <li><strong>30% Wants:</strong> Dining out, subscription services, hobbies, travel, and non-essential clothing.</li>
        <li><strong>20% Future:</strong> Savings, investments, and accelerated debt payoff.</li>
      </UL>

      <Callout>
        <strong>Savlo Principle:</strong> Any budget that makes you feel worse
        after opening it is poorly designed. It is not your fault.
      </Callout>

      <H2 id="step-3">Step 3: Automate what is hard, enjoy what is light</H2>
      <P>
        Willpower is a finite resource. If you do not automate your recurring savings,
        you will end up negotiating with yourself every single day — and losing.
      </P>
      <P>
        Set up automatic transfers on payday for your emergency fund, your sinking
        funds (amortization accounts for large, predictable costs), and long-term
        savings. What remains in your checking account is yours to spend guilt-free.
        That is operational freedom, not micromanagement.
      </P>
    </>
  )
}

function Content503020Rule() {
  return (
    <>
      <P>
        The 50/30/20 rule is one of the simplest and most enduring frameworks for
        organizing your monthly spending. It proposes dividing your net income into
        three clear buckets: 50% for needs, 30% for wants, and 20% for your future.
      </P>
      <P>
        Popularized by Senator Elizabeth Warren, its true strength isn&apos;t in the
        exact percentages, but in the elimination of analysis paralysis. You don&apos;t
        have to micro-manage every single transaction; you simply have three clear
        containers, and every dollar knows where it goes.
      </P>

      <H2 id="how-to-apply">How to apply it stress-free</H2>
      <OL>
        <li>Calculate your actual net monthly income.</li>
        <li>Identify your fixed needs (housing, utilities, basic food, transport, and minimum debt payments).</li>
        <li>Ensure they do not exceed 50%. If they do, adjust housing or transit — these are your big leverage points.</li>
        <li>Set up your 20% future bucket as an automatic transfer on payday.</li>
        <li>What is left is your 30% for wants, to spend completely guilt-free.</li>
      </OL>

      <H2 id="variations">Variations for high cost of living</H2>
      <P>
        In expensive cities, you might need to adapt the rule to 60/20/20. If you are
        paying off debt aggressively, you might use 50/20/30, with that final 30% dedicated
        to accelerated debt payments. The goal is having containers, not following the
        numbers perfectly.
      </P>

      <H2 id="common-mistakes">Common mistakes to avoid</H2>
      <UL>
        <li>Confusing wants with needs (streaming services are not needs).</li>
        <li>Not automating the 20% future bucket and leaving it for &ldquo;whatever is left over.&rdquo;</li>
        <li>Ignoring small recurring expenses, which easily hide inside the 30% wants bucket.</li>
      </UL>

      <H2 id="next-steps">What comes next?</H2>
      <P>
        Once the 50/30/20 framework has been running smoothly for three months, you can
        graduate to a <A href="/blog/zero-based-budgeting">zero-based budget</A> if you want
        more precision, or simply stay here if you prefer simplicity. There is no moral
        hierarchy in budgeting apps — the only good budget is the one you actually keep opening.
      </P>
    </>
  )
}

function ContentMintAlternatives() {
  return (
    <>
      <P>
        In January 2024, Intuit shut down Mint — the app that taught millions of people what a personal finance dashboard should look like. If you are still looking for a replacement, you are not alone. The good news: the budgeting app market has matured, and today there are much better options for almost every type of user — whether you want automatic bank sync, investment tracking, or a more private and calm approach.
      </P>

      <H2 id="why-mint-shut-down">Why Mint shut down — and what it says about your privacy</H2>
      <P>
        Mint was free. And like most free products, the cost was not visible at first glance. Intuit&apos;s business model relied on showing ads for financial products — credit cards, loans, insurance — based on your spending data. When Intuit decided that model was no longer profitable, they shut down Mint and migrated users to Credit Karma.
      </P>
      <P>
        The problem: Credit Karma is an advertising platform, not a budgeting tool. Its primary function is to show you financial products you might click on. The migration wasn&apos;t to give you a better experience — it was to preserve Intuit&apos;s ad revenue.
      </P>
      <P>
        The real lesson of Mint&apos;s shutdown is this: when a financial app is free, your data is the product. Apps that connect to your bank account, read your transactions, and categorize your spending have access to extremely sensitive information about your life. Understanding who sees that data — and what they do with it — is now a fundamental part of choosing a budgeting tool.
      </P>

      <H2 id="what-to-look-for">What to look for in a Mint replacement</H2>
      <P>
        Mint did a few things well: it showed you where your money went, organized spending into categories, and gave you a bird&apos;s-eye view of your finances in one place. A good replacement should do at least that — and ideally, do it better.
      </P>
      <P>
        Here is what you should evaluate before choosing a new app:
      </P>
      <UL>
        <li><strong>Spending categories and trends.</strong> Does the app automatically organize transactions and show you where you are overspending? This was Mint&apos;s core value.</li>
        <li><strong>Bank sync vs. CSV import vs. voice logging.</strong> Automatic sync is convenient but requires sharing your credentials with a third-party aggregator. CSV and voice logging keep your data private — but require more active participation.</li>
        <li><strong>Price.</strong> Most serious apps charge between $10 and $15 a month. It is reasonable if the app genuinely changes your habits. Free apps with ads, as Mint proved, are not actually free.</li>
        <li><strong>Privacy.</strong> Who stores your data? Is it sold or shared with advertisers? Is there a local option that doesn&apos;t send your transactions to a server?</li>
      </UL>

      <H2 id="best-mint-alternatives-2025">The best Mint alternatives in 2025</H2>
      <P>
        There is no single &ldquo;best&rdquo; replacement for Mint — because different users have different needs. Below are five apps that represent the strongest options based on different priorities.
      </P>

      <H3 id="savlo">Savlo — the best option if you want privacy and don&apos;t want to link your bank</H3>
      <P>
        Savlo takes a fundamentally different approach to expense tracking. Instead of connecting to your bank, it allows you to log expenses by voice (&ldquo;$42 at the grocery store&rdquo;) or import a CSV directly from your bank. All data stays on your device — no third-party access, no aggregators, no ads. Ever.
      </P>
      <P>
        The app is built around a concept called <strong>Daily Margin</strong>: a single number that tells you how much you can spend today without falling behind on your goals. It also includes Spaces (digital spending envelopes), Funds (<A href="/blog/sinking-funds">sinking funds</A> with custom names for planned expenses), and Gentle Streaks that encourage consistency without punishing you if you miss a day.
      </P>
      <P>
        Savlo is iOS-only as of 2025. It is the right choice if <A href="/blog/financial-anxiety">financial anxiety</A> has made you avoid your finances — its calm, ad-free design eliminates the friction and judgment that keep many people from looking at their numbers.
      </P>

      <H3 id="monarch-money">Monarch Money — the best option for automatic sync and net worth tracking</H3>
      <P>
        Monarch Money is the most direct replacement for the connected dashboard experience that Mint offered. It links to your bank accounts, credit cards, and investment accounts to give you an all-in-one view of your net worth and spending in real time.
      </P>
      <P>
        At $14.99 a month or $99.99 a year, it is a paid product — but unlike Mint, it does not monetize your data with advertising. Monarch is particularly strong for couples managing shared finances, with collaborative features built into the core product.
      </P>

      <H3 id="ynab">YNAB — the best option for changing financial behavior</H3>
      <P>
        YNAB (You Need A Budget) is the gold standard for those who want to fundamentally change their relationship with money. It uses a <A href="/blog/zero-based-budgeting">zero-based budgeting</A> system: every dollar of income gets an assignment before you spend it.
      </P>
      <P>
        It costs $14.99 a month or $109 a year, has a real learning curve, and does not include investment tracking. But no app has a stronger track record of breaking the paycheck-to-paycheck cycle. If you want high-level visibility, Monarch is better. If you want behavior change, YNAB wins.
      </P>

      <H3 id="empower">Empower — the best free option for tracking net worth</H3>
      <P>
        Empower (formerly Personal Capital) offers free account aggregation, net worth tracking, and basic budgeting. Its budgeting features are lighter than Mint&apos;s, but the net worth dashboard is genuinely excellent — especially for tracking investment portfolios alongside spending accounts.
      </P>
      <P>
        The catch: Empower&apos;s free tier exists to channel users toward their wealth management services. If you have significant assets, you will receive sales calls. If you just want a free tracker, it works — but expect the pitch.
      </P>

      <H3 id="pocketguard">PocketGuard — the best option to see at a glance how much you can spend</H3>
      <P>
        PocketGuard focuses on one essential question: after paying bills and setting aside savings, how much do I have left to spend? Its &ldquo;In My Pocket&rdquo; number is conceptually similar to Savlo&apos;s Daily Margin — a single, actionable figure rather than a complex dashboard.
      </P>
      <P>
        It has a free tier, with PocketGuard Plus at $12.99 a month. It requires bank sync. It is a solid middle ground between Mint&apos;s simplicity and YNAB&apos;s depth.
      </P>

      <Divider />

      <H2 id="privacy-question">The privacy question — what actually happens to your data?</H2>
      <P>
        When you link your bank to an app, your transaction data generally passes through a financial data aggregator — companies like Plaid, Finicity, or MX. These aggregators act as intermediaries between your bank and the app. Most have privacy policies that allow them to use anonymized transaction data for analytics and, in some cases, sell it to financial institutions and research firms.
      </P>
      <P>
        This doesn&apos;t mean apps with bank sync are dangerous. But it does mean that your spending history — what you buy, where, and how often — becomes part of a data chain you don&apos;t fully control. For most people, the convenience of automatic sync is worth that trade-off. For others, it isn&apos;t.
      </P>
      <P>
        CSV import and voice logging are the two main privacy-preserving alternatives. With CSV import, you export your transactions directly from your bank&apos;s website and manually upload them to the app — no shared credentials, no aggregator involved. Voice logging keeps everything local from the moment of purchase.
      </P>
      <P>
        If Mint&apos;s shutdown taught us anything, it&apos;s that &ldquo;free&rdquo; has a cost. Choosing a paid app with a clear privacy policy is, in most cases, the safest choice in the long run.
      </P>

      <H2 id="comparison-table">Quick comparison</H2>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #e5e7eb'}}>
            <th style={{textAlign: 'left', padding: '8px 12px'}}>App</th>
            <th style={{textAlign: 'left', padding: '8px 12px'}}>Price</th>
            <th style={{textAlign: 'left', padding: '8px 12px'}}>Bank Sync</th>
            <th style={{textAlign: 'left', padding: '8px 12px'}}>Privacy</th>
            <th style={{textAlign: 'left', padding: '8px 12px'}}>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #f3f4f6'}}>
            <td style={{padding: '8px 12px'}}><strong>Savlo</strong></td>
            <td style={{padding: '8px 12px'}}>Free trial + subscription</td>
            <td style={{padding: '8px 12px'}}>No (CSV / voice)</td>
            <td style={{padding: '8px 12px'}}>Local, no third parties</td>
            <td style={{padding: '8px 12px'}}>Privacy and calm</td>
          </tr>
          <tr style={{borderBottom: '1px solid #f3f4f6'}}>
            <td style={{padding: '8px 12px'}}>Monarch Money</td>
            <td style={{padding: '8px 12px'}}>$14.99/mo or $99.99/yr</td>
            <td style={{padding: '8px 12px'}}>Yes</td>
            <td style={{padding: '8px 12px'}}>No ads, uses aggregator</td>
            <td style={{padding: '8px 12px'}}>Net worth, couples</td>
          </tr>
          <tr style={{borderBottom: '1px solid #f3f4f6'}}>
            <td style={{padding: '8px 12px'}}>YNAB</td>
            <td style={{padding: '8px 12px'}}>$14.99/mo or $109/yr</td>
            <td style={{padding: '8px 12px'}}>Yes</td>
            <td style={{padding: '8px 12px'}}>No ads, uses aggregator</td>
            <td style={{padding: '8px 12px'}}>Behavior change</td>
          </tr>
          <tr style={{borderBottom: '1px solid #f3f4f6'}}>
            <td style={{padding: '8px 12px'}}>Empower</td>
            <td style={{padding: '8px 12px'}}>Free (upsell model)</td>
            <td style={{padding: '8px 12px'}}>Yes</td>
            <td style={{padding: '8px 12px'}}>Wealth management upsell</td>
            <td style={{padding: '8px 12px'}}>Free net worth</td>
          </tr>
          <tr>
            <td style={{padding: '8px 12px'}}>PocketGuard</td>
            <td style={{padding: '8px 12px'}}>Free or $12.99/mo</td>
            <td style={{padding: '8px 12px'}}>Yes</td>
            <td style={{padding: '8px 12px'}}>Standard aggregator</td>
            <td style={{padding: '8px 12px'}}>Simple spending limit</td>
          </tr>
        </tbody>
      </table>

      <H2 id="which-is-right-for-you">Which alternative to Mint is right for you?</H2>
      <P>
        The right app depends on your relationship with money and how much friction you are willing to accept in exchange for control or privacy.
      </P>
      <UL>
        <li><strong>Choose Savlo</strong> if privacy matters to you, if linking your bank makes you uncomfortable, or if you want a polished, clear, stress-free, and guilt-free interface to stay aware of your daily spending. The public site emphasizes CSV imports, voice logging, and a calmer daily budgeting rhythm.</li>
        <li><strong>Choose Monarch Money</strong> if you want a true Mint replacement with automatic sync, visual reporting, and couples budgeting all in one place.</li>
        <li><strong>Choose YNAB</strong> if you are determined to change your financial behavior and willing to invest time in learning a new system.</li>
        <li><strong>Choose Empower</strong> if you want free portfolio and net worth tracking and don&apos;t mind receiving occasional wealth management pitches.</li>
        <li><strong>Choose PocketGuard</strong> if you just want a simple number that tells you how much it is safe to spend today.</li>
      </UL>
      <P>
        There is no universally correct answer. The best budgeting app is the one you will actually use — and that starts with finding one whose design philosophy matches your way of thinking about money.
      </P>

      <Callout>
        If Mint&apos;s shutdown left you hesitant to hand over your bank credentials to another app, Savlo was built with exactly that concern in mind. No bank sync, no ads, no third-party access to your data — just a private, calm view of where your money goes, logged by voice or imported from your own bank&apos;s CSV. Available on iOS with a free trial.
      </Callout>
    </>
  )
}

function ContentEmergencyFundVsSinkingFund() {
  return (
    <>
      <P>
        An emergency fund is the difference between a flat tire being a minor
        inconvenience or an absolute financial disaster. It is not a financial luxury;
        it is mental health paid for in advance.
      </P>

      <H2 id="how-much">How much should you save?</H2>
      <UL>
        <li><strong>Single with no dependents:</strong> 3 months of basic expenses.</li>
        <li><strong>Stable couple, double income:</strong> 3 to 4 months.</li>
        <li><strong>With children or single-income household:</strong> 6 months.</li>
        <li><strong>Freelancers or irregular income:</strong> 9 to 12 months.</li>
      </UL>

      <H2 id="milestones">Human milestones before the goal</H2>
      <P>
        If the total goal feels overwhelming, break it down. Setting a first milestone
        of $500 or $1,000 does more to reduce immediate financial anxiety than waiting
        to hit your full 3-month goal. Celebrate the small steps; your brain needs that
        positive reinforcement.
      </P>

      <H2 id="where-to-keep">Where to keep it</H2>
      <P>
        Keep it in a separate account, ideally at a different bank, in a high-yield savings
        account if possible. It needs to be far away from your daily spending balance. Give
        it a meaningful, emotional name like &ldquo;peace of mind&rdquo; or &ldquo;breathing room.&rdquo;
      </P>

      <H2 id="difference">Emergency Fund vs. Sinking Funds</H2>
      <P>
        The emergency fund is for the completely unexpected (e.g., job loss, medical bills).
        <A href="/blog/sinking-funds">Sinking funds</A> are for the expected but large expenses
        (e.g., holidays, annual insurance, gifts). Do not mix them.
      </P>
    </>
  )
}

function ContentWhyTraditionalBudgetsFail() {
  return (
    <>
      <P>
        Traditional budgets assume we are rational agents maximizing utility at all times.
        Fifty years of behavioral economics research says the exact opposite: we are tired,
        stressed humans making complex decisions in noisy environments.
      </P>

      <H2 id="biases">Three cognitive biases that explain why we fail</H2>
      <UL>
        <li><strong>Hyperbolic discounting:</strong> We overvalue the present and undervalue the future. That is why saving is hard.</li>
        <li><strong>Loss aversion:</strong> Losing $100 hurts twice as much as gaining $100 feels good. That is why seeing red numbers in a budget feels threatening.</li>
        <li><strong>Decision fatigue:</strong> Every decision we make drains our willpower. That is why budgets with 40 micro-categories inevitably fail.</li>
      </UL>

      <H2 id="calm-design">A design that respects your brain</H2>
      <OL>
        <li>Calm defaults (automatic transfers).</li>
        <li>Fewer categories, not more.</li>
        <li>Compassionate feedback (no flashing red alerts).</li>
        <li>Rhythm-based reviews, not constant micro-monitoring.</li>
        <li>Celebrating progress rather than pointing out shortcomings.</li>
      </OL>

      <H2 id="financial-anxiety">Tackling deep-seated anxiety</H2>
      <P>
        If financial check-ins already give you a feeling of dread, start with
        <A href="/blog/financial-anxiety">daily calming habits</A> to lower your emotional load
        before you even touch the numbers. A spreadsheet cannot heal an exhausted mind.
      </P>
    </>
  )
}

function ContentVoiceTracking() {
  return (
    <>
      <P>
        You&apos;re at the register. You just paid. You know you should log it. But by the time
        you&apos;re home — or even back in your car — the amount is fuzzy, the merchant name is
        gone, and the moment has passed. You tell yourself you&apos;ll reconstruct it later from
        your bank statement. You won&apos;t. That&apos;s the exact gap that voice expense tracking
        is built to close.
      </P>

      <H2 id="why-people-abandon-budgeting-apps">The real reason people abandon budgeting apps</H2>
      <P>
        It&apos;s not lack of motivation. Most people who download a budgeting app genuinely want
        to understand where their money goes. The problem is friction — the small but compounding
        cost of stopping what you&apos;re doing, unlocking your phone, opening an app, tapping
        through three screens, and manually entering a transaction.
      </P>
      <P>
        That process takes between 30 and 60 seconds per transaction. The average person makes
        20 to 30 purchases a week. Do the math: that&apos;s up to 30 minutes of data entry every
        week, spread across moments when you&apos;re busy, distracted, or already moving on to
        the next thing.
      </P>
      <P>
        Most people fall behind within a week. Once you&apos;re behind, catching up feels
        overwhelming. So you stop. The app sits unused. The guilt quietly builds. And eventually
        you conclude that you&apos;re &ldquo;just not a budgeting person&rdquo; — when the
        real culprit was a design problem, not a discipline problem.
      </P>
      <P>
        Voice logging cuts the entry time to 4 to 6 seconds. That&apos;s not a marginal
        improvement — it&apos;s the difference between a habit that forms and one that doesn&apos;t.
      </P>

      <H2 id="how-voice-expense-tracking-works">How voice expense tracking actually works</H2>
      <P>
        The interaction is designed to feel as natural as thinking out loud. You speak the expense
        as it happens — no special syntax required, no command words to memorize.
      </P>
      <P>
        Some examples of what that sounds like in practice:
      </P>
      <UL>
        <li>&ldquo;Forty-two dollars at Trader Joe&apos;s&rdquo;</li>
        <li>&ldquo;Lunch, eighteen dollars&rdquo;</li>
        <li>&ldquo;Uber, twelve fifty&rdquo;</li>
        <li>&ldquo;Coffee, four dollars&rdquo;</li>
      </UL>
      <P>
        The app parses the amount, the merchant or context, and infers a spending category based
        on what you said. A single confirmation tap lets you accept the suggestion or adjust it.
        The whole interaction — from speaking to confirmed log — takes about five seconds.
      </P>
      <P>
        In Savlo, both English and Spanish are supported for voice input. The app processes audio
        entirely on-device, which means nothing you say is transmitted to a server or stored
        anywhere outside your phone.
      </P>

      <H2 id="the-privacy-question">The privacy question — and why it matters more than you think</H2>
      <P>
        Voice data is among the most sensitive data you can generate. The content of what you say
        is one thing; the patterns of when you say it, where you are, and what you&apos;re buying
        form a behavioral profile that is extraordinarily detailed.
      </P>
      <P>
        Many voice-enabled apps — budgeting or otherwise — send audio to cloud servers for
        processing. This is usually disclosed somewhere in the privacy policy, in language most
        people don&apos;t read. The practical implication: your voice recordings, and the
        transaction data embedded in them, are stored on infrastructure you don&apos;t control,
        often retained for model training or service improvement.
      </P>
      <P>
        On-device processing means the audio never leaves your phone. The speech recognition
        happens locally, the transaction is logged locally, and nothing is transmitted externally.
        When evaluating any voice-enabled financial app, &ldquo;on-device audio processing&rdquo;
        in the privacy policy is the phrase to look for.
      </P>
      <P>
        This matters especially for financial apps, where every transaction you log is a data
        point about your income level, lifestyle, health, relationships, and habits.
      </P>

      <H2 id="who-benefits-most">Who benefits most from voice tracking</H2>
      <P>
        Voice logging works for almost anyone who makes regular purchases, but it fits certain
        situations particularly well:
      </P>
      <UL>
        <li><strong>Parents on school pickup duty</strong> who just grabbed groceries and have their hands full before the car is even parked.</li>
        <li><strong>Freelancers and self-employed people</strong> logging a client lunch while still at the restaurant — so it&apos;s captured accurately before the day gets busy.</li>
        <li><strong>People who pay cash</strong> at markets, food trucks, or local vendors — transactions that never appear in a bank statement and are otherwise invisible to any automatic sync system.</li>
        <li><strong>Commuters</strong> who can log a coffee or transit fare in the few seconds between tapping a card and getting on a train.</li>
        <li><strong>Anyone who has abandoned three or more budgeting apps</strong> and suspects the problem is friction, not motivation.</li>
      </UL>

      <H2 id="does-voice-tracking-actually-help">Does voice tracking actually improve budgeting?</H2>
      <P>
        The behavioral science here is fairly consistent: the shorter the loop between behavior and
        feedback, the more likely the behavior is to change. Logging a transaction the moment it
        happens is categorically different from reconstructing your week from a bank statement on
        Sunday night.
      </P>
      <P>
        Real-time logging captures accurate data. Memory-based logging — reconstructing what you
        spent from receipts, notifications, or recollection — is subject to rounding, omission,
        and motivated forgetting. Studies on self-monitoring behavior consistently show that
        immediacy is the single biggest predictor of logging accuracy.
      </P>
      <P>
        There&apos;s also a quieter psychological effect worth naming: saying an expense out loud
        makes it real in a way that a silent card tap doesn&apos;t. It creates a moment of
        conscious acknowledgment — not shame or judgment, just awareness. Over time, that
        awareness tends to shift behavior more gently and durably than any alert, warning, or
        red bar ever has.
      </P>
      <P>
        People who track by voice for 30 days consistently report that the habit forms fast —
        usually within the first week — and that the data they accumulate is noticeably more
        complete and accurate than anything they captured through manual entry or automatic sync.
      </P>

      <H2 id="voice-vs-bank-sync">Voice tracking vs. automatic bank sync — which is better?</H2>
      <P>
        They solve genuinely different problems, and the honest answer is that they&apos;re not
        direct competitors.
      </P>
      <P>
        Automatic bank sync shows you what already happened — typically with a 1 to 3 day lag,
        after transactions have cleared and posted. It&apos;s comprehensive and passive, which
        makes it easy to use consistently. But it requires sharing your banking credentials with
        a third-party aggregator, and it captures nothing that doesn&apos;t flow through your
        linked accounts: no cash, no shared expenses, no transactions made with cards you
        didn&apos;t link.
      </P>
      <P>
        Voice tracking makes you aware as the expense happens — in real time, at the point of
        purchase. It requires your active input, which means it only works if you actually do it.
        But when you do, the data is immediate, complete, and entirely private.
      </P>
      <P>
        For most people, the most practical setup is a combination of both approaches: voice for
        daily purchases as they happen, and a monthly CSV import from your bank for a complete
        review. You get real-time awareness without sacrificing the safety net of a full
        transaction history.
      </P>

      <H2 id="what-to-look-for">What to look for in a voice expense tracker app</H2>
      <P>
        Not all voice tracking implementations are equal. Before committing to an app, these
        are the things worth checking:
      </P>
      <UL>
        <li><strong>On-device audio processing.</strong> If this isn&apos;t explicitly stated, assume the audio is being sent to the cloud.</li>
        <li><strong>Natural language parsing.</strong> You should be able to speak normally, not memorize a command format like &ldquo;log colon amount colon category.&rdquo;</li>
        <li><strong>One-tap confirmation.</strong> If it takes three screens to confirm a logged transaction, the friction savings disappear quickly.</li>
        <li><strong>Offline functionality.</strong> Voice logging should work without an internet connection — you&apos;re often in a store, a parking lot, or a subway platform.</li>
        <li><strong>Category learning.</strong> The app should get better at inferring categories from your speech patterns over time, reducing the need to correct.</li>
      </UL>

      <H2 id="getting-started-with-savlo">Getting started with voice expense tracking in Savlo</H2>
      <P>
        The setup takes about five minutes. Download the app, create your spending categories —
        start with three or four broad ones rather than trying to map every possible transaction
        type from day one. Fewer categories means less friction on every log.
      </P>
      <P>
        For the first seven days, log every purchase by voice the moment it happens. Don&apos;t
        wait until you get home. Don&apos;t batch them at the end of the day. The habit forms
        in the first week if you do it in real time — and largely doesn&apos;t form if you don&apos;t.
      </P>
      <P>
        Each morning, check your <A href="/#product">Daily Margin</A> — the number that tells
        you what you can spend today given your current pace and your monthly goals. It&apos;s
        one number, not a dashboard. You don&apos;t need to analyze anything. You just need to
        know whether today is a spend freely day or a spend carefully day.
      </P>
      <P>
        After 30 days, you&apos;ll have a complete, accurate picture of where your money actually
        goes — not a reconstructed approximation. That&apos;s when the data starts to become
        genuinely useful for making decisions about <A href="/blog/sinking-funds">sinking funds</A>,
        adjusting your <A href="/blog/zero-based-budgeting">zero-based budget</A>,
        or simply understanding the gap between what you think you spend and what you actually spend.
      </P>

      <Callout>
        Savlo&apos;s voice logging is built for the moment the expense happens — not the moment
        you get around to recording it. On-device processing means your audio never leaves your
        phone. No bank linking, no ads, no third-party access. Just a fast, private way to know
        exactly where your money goes. Available on iOS with a free trial.
      </Callout>
    </>
  )
}

function ContentFinancialAnxiety() {
  return (
    <>
      <P>
        Financial anxiety is rarely proportional to the amount of money you have in the bank.
        It is proportional to the amount of uncertainty you feel. These daily habits are
        designed to lower your emotional load before you even look at the numbers.
      </P>

      <H2 id="habits">Daily habits for financial peace</H2>
      <OL>
        <li><strong>Dedicated check-in windows.</strong> Check your accounts at a scheduled time, not every time you get a notification.</li>
        <li><strong>Take a deep breath.</strong> Breathe slowly three times before opening any financial application.</li>
        <li><strong>Use gentle language.</strong> Replace &ldquo;I overspent&rdquo; with &ldquo;I am observing my spending patterns.&rdquo;</li>
        <li><strong>Focus on one number.</strong> Don&apos;t overwhelm yourself; pick just one metric to review per session.</li>
        <li><strong>Set a curfew.</strong> No financial reviews or money talks in the last hour before going to bed.</li>
      </OL>

      <H2 id="when-to-seek-help">When to seek professional support</H2>
      <P>
        If money anxiety is severely affecting your sleep, relationships, or daily functioning
        for more than two weeks, consider seeking support from a financial therapist. A budgeting
        app can stop making anxiety worse, but it cannot replace professional care.
      </P>
    </>
  )
}

function ContentSinkingFunds() {
  return (
    <>
      <P>
        A sinking fund is a savings pot dedicated to an expected, large future expense:
        a holiday, annual car registration, holiday gifts, or home maintenance. It is not an
        emergency fund; it is calm, deliberate planning.
      </P>

      <H2 id="how-to-build">How to create a sinking fund</H2>
      <OL>
        <li>Name it with clear intent: &ldquo;Japan Trip 2027&rdquo; or &ldquo;New Computer Pot,&rdquo; not &ldquo;Savings 3.&rdquo;</li>
        <li>Calculate your total target amount.</li>
        <li>Divide that target by the number of months remaining.</li>
        <li>Automate the monthly transfer on payday.</li>
      </OL>

      <H2 id="essential-funds">Five essential sinking funds</H2>
      <UL>
        <li>Holiday and gifts (so December doesn&apos;t catch you off guard).</li>
        <li>Car maintenance and repairs.</li>
        <li>Insurance premiums and annual taxes.</li>
        <li>Vacations and travel.</li>
        <li>Tech upgrades (e.g., replacing your phone every three years).</li>
      </UL>

      <H2 id="vs-emergency">Why not mix them with your emergency fund?</H2>
      <P>
        Your <A href="/blog/emergency-fund-vs-sinking-fund">emergency fund</A> must remain
        untouched for true surprises. If you spend it on a planned trip, you will be completely
        exposed when a real emergency strikes. Keep your planned expenses and your safety net separate.
      </P>
    </>
  )
}

function ContentZeroBasedBudgeting() {
  return (
    <>
      <P>
        In a zero-based budget, every single dollar of income is assigned a job before you spend
        it. Income minus allocations equals zero. This ensures you do not have vague, unassigned
        balances that are easily eaten away by impulse spending.
      </P>

      <H2 id="step-by-step">The step-by-step process</H2>
      <OL>
        <li>List your total net income for the month.</li>
        <li>List all fixed obligations (housing, utilities, transit).</li>
        <li>Allocate money to savings and investments first.</li>
        <li>Distribute the remainder across flexible day-to-day categories.</li>
        <li>Ensure your total allocations equal exactly your incoming income.</li>
      </OL>

      <H2 id="who-it-is-for">Who is it for?</H2>
      <P>
        Zero-based budgeting is perfect for people who love detail, structure, and active
        financial planning. It is the core methodology behind tools like YNAB.
      </P>

      <H2 id="who-it-is-not-for">Who it might not suit</H2>
      <P>
        If planning every single dollar feels too restrictive or overwhelming, start with the
        much lighter <A href="/blog/50-30-20-rule">50/30/20 rule</A>. Zero-based budgeting is a
        great destination, but it is not a mandatory starting line.
      </P>
    </>
  )
}

function ContentHowToGetOutOfDebt() {
  return (
    <>
      <P>
        Paying off debt isn&apos;t a math puzzle; it is a habit-sustainability puzzle. The
        correct strategy is simply the one you can sustain for 18 months without burning
        out emotionally.
      </P>

      <H2 id="two-methods">The two proven methods</H2>
      <UL>
        <li><strong>Debt Avalanche:</strong> Pay off the debt with the highest interest rate first. Mathematically, this saves the most money.</li>
        <li><strong>Debt Snowball:</strong> Pay off the smallest debt balance first. Psychologically, this builds the most momentum.</li>
      </UL>
      <P>
        Behavioral research shows that the debt snowball wins in completion rate, even if the
        avalanche wins on paper. If you feel like you might lose motivation, start with the
        snowball. The quick wins will keep you going.
      </P>

      <H2 id="ditch-the-guilt">Ditch the guilt</H2>
      <P>
        Debt is rarely a reflection of pure irresponsibility. It is often born from medical
        emergencies, life transitions, or simple lack of financial education. A calm, realistic
        <A href="/blog/how-to-make-a-budget">monthly budget</A> exists to give you breathing
        room, not to punish you for the past.
      </P>

      <H2 id="priority">Order of attack</H2>
      <OL>
        <li>Pay minimum payments on all debts.</li>
        <li>Build a small emergency starter fund ($500–$1,000).</li>
        <li>Focus all extra cash on your target debt (highest interest or smallest balance).</li>
        <li>Once that is paid off, roll the payment into the next target.</li>
        <li>Complete your full emergency fund once high-interest debt is gone.</li>
      </OL>
    </>
  )
}

function ContentMoneyDysmorphia() {
  return (
    <>
      <P>
        You open your banking app. The balance is positive — maybe even comfortable. And yet
        something tightens in your chest. You close the app without really looking. You know,
        intellectually, that you&apos;re probably fine. But you don&apos;t feel fine. You feel
        behind. You feel like one unexpected bill away from everything unraveling — even though,
        by any objective measure, it isn&apos;t. That feeling has a name.
      </P>

      <H2 id="what-is-money-dysmorphia">What is money dysmorphia?</H2>
      <P>
        Money dysmorphia is not a clinical diagnosis. It&apos;s a behavioral pattern — a
        distorted perception of your own financial reality that causes you to feel significantly
        worse off (or in some cases, better off) than you actually are. The term has circulated
        in behavioral finance circles for years, but gained mainstream attention after 2020,
        when a combination of pandemic economic anxiety, rising costs, and social media
        comparison culture pushed it into broader conversation.
      </P>
      <P>
        It&apos;s distinct from financial anxiety, which is often rooted in real, current
        problems — actual debt, actual income instability, actual shortfalls. Money dysmorphia
        persists even when those real problems aren&apos;t present. It&apos;s the experience
        of financial insecurity that doesn&apos;t match the numbers in your account.
      </P>
      <P>
        It&apos;s also distinct from financial trauma, which involves a more deeply rooted
        psychological response to past experiences of scarcity, crisis, or financial abuse.
        Money dysmorphia can coexist with either of those — or appear entirely on its own.
      </P>
      <P>
        Research published in 2024 found that more than 40% of Americans describe themselves as
        financially insecure despite being objectively in stable financial standing by standard
        metrics. That gap — between the reality and the feeling — is the territory money
        dysmorphia occupies.
      </P>

      <H2 id="what-it-looks-like">What money dysmorphia looks like in practice</H2>
      <P>
        It shows up differently for different people, but the underlying thread is the same:
        the emotional reading of your financial situation is consistently more negative than
        the factual one. Some of the most common patterns:
      </P>
      <UL>
        <li>Checking your account balance and feeling no relief — or even more anxiety — when the number is positive.</li>
        <li>Avoiding opening bank statements, budgeting apps, or financial emails because the dread of what you might find feels worse than not knowing.</li>
        <li>Feeling guilty spending money on small things — a coffee, a book, a takeout dinner — even when your finances are genuinely stable.</li>
        <li>Comparing your savings or net worth to people you follow online and feeling permanently, hopelessly behind.</li>
        <li>Setting a milestone — &ldquo;I&apos;ll feel okay when I have $10,000 saved&rdquo; — reaching it, and immediately moving the goalpost forward without experiencing any relief.</li>
        <li>Dismissing genuine financial progress with phrases like &ldquo;it doesn&apos;t really count&rdquo; or &ldquo;it could all disappear tomorrow.&rdquo;</li>
      </UL>

      <H2 id="why-it-happens">Why it happens — three root causes</H2>

      <H3 id="financial-trauma">1. Financial trauma — experienced or inherited</H3>
      <P>
        Witnessing a parent lose a job, growing up in a household where money was a source of
        conflict or scarcity, living through a financial crisis during formative years — these
        experiences leave lasting imprints on how your nervous system responds to money-related
        situations, often long after the circumstances that created them have passed.
      </P>
      <P>
        Even periods of genuine scarcity that ended years ago can leave a threat-detection
        pattern running in the background. Your brain learned that financial instability was
        a real and present danger. It hasn&apos;t fully updated that assessment just because
        your account balance changed.
      </P>

      <H3 id="social-media-comparison">2. Social media and the comparison trap</H3>
      <P>
        The frame of reference for financial &ldquo;normal&rdquo; has been quietly, radically
        distorted. You&apos;re no longer comparing yourself to your neighbors or colleagues —
        you&apos;re comparing yourself to the most financially successful, curated, visible
        version of everyone you follow online, all at once, every day.
      </P>
      <P>
        Financial content on social media disproportionately features early retirement, aggressive
        investment returns, $100k savings by 25, and aspirational spending that bears no
        relationship to median income. The result is a skewed baseline — a version of
        &ldquo;normal&rdquo; that is statistically unreachable for most people, presented as
        though it&apos;s just a matter of discipline or the right strategy.
      </P>

      <H3 id="moving-goalpost">3. The moving goalpost of &ldquo;enough&rdquo;</H3>
      <P>
        &ldquo;Enough&rdquo; is a feeling, not a number. And without consciously defining it,
        you will never reach it — because the mind will always find a new benchmark to fall
        short of.
      </P>
      <P>
        Research on income and subjective financial security consistently shows a pattern
        sometimes called the hedonic treadmill: people at nearly every income level predict they
        would feel financially secure at roughly twice their current income. When they reach
        that income, the threshold moves again. The feeling of security was never actually
        attached to the number — it was attached to the distance from whatever &ldquo;enough&rdquo;
        currently meant.
      </P>

      <H2 id="dysmorphia-vs-anxiety">Money dysmorphia vs. financial anxiety — how to tell the difference</H2>
      <P>
        The distinction matters because the responses are different.
      </P>
      <P>
        <strong>Financial anxiety</strong> is rooted in a real, current problem. There is actual
        debt that needs to be addressed, actual income that doesn&apos;t cover actual expenses,
        actual savings that are genuinely insufficient for the risks you face. The worry is
        proportionate to the situation. The right response involves practical financial action —
        a budget, a repayment plan, a conversation with a financial advisor.
      </P>
      <P>
        <strong>Money dysmorphia</strong> persists after the real problems have been resolved —
        or exists despite the absence of real problems. The worry is disproportionate to the
        situation. Practical financial action helps, but it doesn&apos;t fully close the gap
        between the feeling and the reality, because the gap isn&apos;t primarily financial.
      </P>
      <P>
        The clearest diagnostic signal: if you&apos;ve hit a financial goal you set for yourself
        and still don&apos;t feel secure, the problem is probably not the number. Both conditions
        can coexist — and both deserve attention — but conflating them leads to applying the
        wrong solution to the wrong problem.
      </P>

      <H2 id="avoidance">The role of avoidance — why not looking makes it worse</H2>
      <P>
        The most common coping mechanism for money dysmorphia is avoidance: not opening the
        app, not reading the statement, not looking at the balance. It feels protective. It
        isn&apos;t.
      </P>
      <P>
        What avoidance actually does is replace specific, factual information with vague dread.
        And vague dread is almost always more anxious than the actual numbers — because your
        brain fills the informational gap with its worst-case assumptions. The knot in your
        stomach when you don&apos;t look is almost always larger than what you&apos;d feel
        if you looked.
      </P>
      <P>
        This is a well-documented pattern in behavioral finance sometimes called financial
        avoidance, and its consequences compound over time: the longer you avoid, the more
        unfamiliar your own finances become, the more threatening the act of looking feels,
        and the harder it becomes to break the loop.
      </P>
      <P>
        A calm, non-judgmental interface — one without red warning bars, guilt counters, or
        streaks that punish you for missing a day — can meaningfully lower the activation
        energy required to look. That&apos;s not a small design detail. For people trapped in
        an avoidance loop, it can be the difference between engaging and not engaging at all.
      </P>

      <H2 id="practical-steps">Practical steps to start untangling it</H2>
      <P>
        These won&apos;t resolve the underlying pattern overnight. But they create conditions
        that allow the pattern to loosen over time.
      </P>
      <OL>
        <li><strong>Get a clear, factual picture.</strong> Export three months of transactions and look at the actual numbers — not the feeling, the numbers. Money dysmorphia thrives in vagueness. Specific data doesn&apos;t eliminate the feeling, but it gives you something real to orient to instead of your worst-case assumptions.</li>
        <li><strong>Define your own &ldquo;enough.&rdquo;</strong> Write it down — concretely, in numbers. Not the number that would impress someone online. The number that would mean, for your specific life and circumstances, that you feel genuinely stable. If you can&apos;t name it, you can&apos;t reach it.</li>
        <li><strong>Audit your information diet.</strong> Unfollow accounts that consistently leave you feeling behind. This isn&apos;t avoidance — it&apos;s environment design. You wouldn&apos;t keep a scale that added 20 pounds to every reading. Don&apos;t keep content sources that systematically distort your financial baseline.</li>
        <li><strong>Build a calm checking ritual.</strong> Once a week, open your finances in a low-stakes, neutral moment — not when you&apos;re stressed, not late at night, not after an impulse purchase. Use a tool that doesn&apos;t reward or punish you. The goal is regular, undramatic contact with your own numbers.</li>
        <li><strong>Separate financial decisions from financial feelings.</strong> The feeling of being broke is not evidence that you are broke. Before making a financial decision based on fear, get the actual data first. The feeling is real — it just isn&apos;t always accurate.</li>
      </OL>

      <Divider />

      <H2 id="when-its-more-than-dysmorphia">When it&apos;s more than dysmorphia — recognizing financial trauma</H2>
      <P>
        If the distress is severe, persistent, and interferes with daily functioning — relationships,
        work performance, sleep, the ability to make basic financial decisions — it may have
        crossed into financial trauma territory. That is beyond what a budgeting app can address,
        and beyond what any blog post should try to resolve.
      </P>
      <P>
        Financial therapy is a real and growing field, practiced by therapists with specialized
        training in the intersection of psychology and personal finance. If you recognize yourself
        in the more severe end of what&apos;s described here, it&apos;s worth knowing that
        support exists specifically for this — not just general therapy, and not just a
        <A href="/blog/how-to-make-a-budget">better budget</A>.
      </P>
      <P>
        You can also explore related reading on <A href="/blog/financial-anxiety">financial anxiety</A>,
        <A href="/blog/zero-based-budgeting">zero-based budgeting</A> as a way to create structure,
        or <A href="/blog/sinking-funds">sinking funds</A> as a tool for building genuine
        financial predictability over time.
      </P>

      <Callout>
        Savlo was built for people who have a complicated emotional relationship with money.
        No red numbers, no guilt counters, no streaks that punish you for an off day — just a
        calm, private, honest view of where your money actually goes. Your data stays on your
        device. No bank linking, no ads, no third-party access. If looking at your finances has
        felt like something to survive rather than something to do, Savlo was designed with
        exactly that experience in mind. Available on iOS with a free trial.
      </Callout>
    </>
  )
}

function ContentYNABMonarchSavlo() {
  return (
    <>
      <P>
        Three budgeting apps, three distinct financial philosophies. This comparison is
        designed to help you choose based on how your brain works, not based on which app
        has the longest list of bullet features.
      </P>

      <H2 id="ynab">YNAB — best for proactive control</H2>
      <P>
        Built entirely around <A href="/blog/zero-based-budgeting">zero-based budgeting</A>.
        It has a steep learning curve, but offering maximum return for those who stick with
        it. It requires active day-to-day involvement and works best for meticulous planners.
      </P>

      <H2 id="monarch">Monarch Money — best for net worth tracking</H2>
      <P>
        Focused on automatic bank sync, net worth tracking, and beautiful dashboard reporting.
        It is an excellent, feature-rich tool for couples sharing finances and people with
        more complex investment portfolios.
      </P>

      <H2 id="savlo">Savlo — best for calm spending habits</H2>
      <P>
        Built around behavioral psychology to reduce money anxiety. It features local-first
        privacy, 4-second natural voice logging, automated CSV importing, sinking funds, and a
        morning Daily Margin focus. There are no red numbers, no guilt-inducing streaks, and
        no data selling.
      </P>

      <H2 id="verdict">The Verdict</H2>
      <UL>
        <li>If you want to control every penny: <strong>YNAB</strong></li>
        <li>If you want a high-level net worth dashboard: <strong>Monarch</strong></li>
        <li>If you feel anxious opening your banking app: <strong>Savlo</strong></li>
      </UL>
    </>
  )
}

// ---------- Posts registry ----------

export const posts: BlogPost[] = [
  {
    slug: "how-to-make-a-budget",
    title: "How to Make a Budget: A Calm, Step-by-Step Guide",
    description:
      "Learn how to build a realistic monthly budget that fits your life. No complicated spreadsheets or guilt, just simple, sustainable steps for financial peace of mind.",
    date: "2026-04-18",
    category: "Budgeting",
    keywords: [
      "how to make a budget",
      "monthly budget",
      "budgeting for beginners",
      "how to start budgeting",
      "easy budget guide",
    ],
    readingTime: 14,
    stats: {
      words: 2971,
      characters: 17894,
      sentences: 324,
      paragraphs: 238,
    },
    content: ContentHowToMakeABudget,
  },
  {
    slug: "50-30-20-rule",
    title: "The 50/30/20 Rule: How to Apply It Stress-Free",
    description:
      "The 50/30/20 budgeting rule explained with real-world examples. Learn how to divide your income between needs, wants, and your future without feeling restricted.",
    date: "2026-04-17",
    category: "Budgeting",
    keywords: [
      "50/30/20 rule",
      "50 30 20 budget",
      "budgeting percentage",
      "how to allocate income",
    ],
    readingTime: 6,
    stats: { words: 820, characters: 4950, sentences: 72, paragraphs: 48 },
    content: Content503020Rule,
  },
  {
    slug: "best-mint-alternatives-2025",
    title: "Best Mint Alternatives in 2025 (Now That Mint Is Gone)",
    description:
      "Mint shut down in 2024. Here are the best replacements ranked by privacy, price, and ease of use — including apps that don’t require linking your bank.",
    date: "2026-04-15",
    category: "Comparisons",
    keywords: [
      "mint alternatives",
      "best mint alternatives 2025",
      "mint shut down replacement",
      "budgeting apps like mint",
      "free budgeting app",
    ],
    readingTime: 7,
    stats: { words: 1050, characters: 6200, sentences: 90, paragraphs: 58 },
    content: ContentMintAlternatives,
  },
  {
    slug: "emergency-fund-vs-sinking-fund",
    title: "Emergency Fund vs. Sinking Fund: What's the Difference?",
    description:
      "Do you know the difference between an emergency fund and a sinking fund? Learn how to separate the unexpected from the predictable to save with peace of mind.",
    date: "2026-04-14",
    category: "Saving",
    keywords: [
      "emergency fund vs sinking fund",
      "sinking fund",
      "what is an emergency fund",
      "saving strategies",
    ],
    readingTime: 6,
    stats: { words: 780, characters: 4720, sentences: 66, paragraphs: 44 },
    content: ContentEmergencyFundVsSinkingFund,
  },
  {
    slug: "why-traditional-budgets-fail",
    title: "Why Traditional Budgets Fail: The Behavioral Finance Answer",
    description:
      "Three psychological biases explain why we abandon budgeting apps. Discover how a calm, behavioral design works with your brain instead of relying on pure discipline.",
    date: "2026-04-12",
    category: "Money Psychology",
    keywords: [
      "why budgeting apps fail",
      "behavioral finance",
      "psychology of money",
      "cognitive biases spending",
    ],
    readingTime: 7,
    stats: { words: 900, characters: 5440, sentences: 78, paragraphs: 52 },
    content: ContentWhyTraditionalBudgetsFail,
  },
  {
    slug: "voice-expense-tracking",
    title: "Voice Expense Tracking: The Fastest Way to Log What You Spend",
    description:
      "Typing expenses into an app takes 60 seconds. Saying them out loud takes 4. Here’s how voice expense tracking works, who it’s for, and what to look for in an app.",
    date: "2026-04-10",
    category: "Budgeting",
    keywords: [
      "voice expense tracker",
      "voice expense tracking",
      "hands-free budgeting app",
      "log expenses by voice",
      "fastest way to track spending",
    ],
    readingTime: 5,
    stats: { words: 720, characters: 4360, sentences: 62, paragraphs: 40 },
    content: ContentVoiceTracking,
  },
  {
    slug: "financial-anxiety",
    title: "Why Money Makes Us Anxious (And 7 Daily Habits to Calm It)",
    description:
      "Financial anxiety isn’t just about how much you earn. Learn simple, daily practices to lower your money stress and build a healthier relationship with your finances.",
    date: "2026-04-08",
    category: "Money Psychology",
    keywords: [
      "financial anxiety",
      "money stress",
      "money mindset",
      "financial wellness",
    ],
    readingTime: 6,
    stats: { words: 760, characters: 4620, sentences: 64, paragraphs: 42 },
    content: ContentFinancialAnxiety,
  },
  {
    slug: "sinking-funds",
    title: "Sinking Funds: The Complete Guide to Stress-Free Saving",
    description:
      "A sinking fund turns large, predictable future expenses into small monthly savings. Learn how to set up sinking funds for travel, holidays, and car maintenance.",
    date: "2026-04-06",
    category: "Saving",
    keywords: [
      "sinking funds",
      "saving for goals",
      "how to save money",
      "sinking fund template",
    ],
    readingTime: 5,
    stats: { words: 670, characters: 4060, sentences: 58, paragraphs: 38 },
    content: ContentSinkingFunds,
  },
  {
    slug: "zero-based-budgeting",
    title: "Zero-Based Budgeting: A Calm, Modern Take",
    description:
      "Give every dollar a job before you spend it with zero-based budgeting. Learn how this methodology works, its benefits, and how to start without feeling restricted.",
    date: "2026-04-04",
    category: "Budgeting",
    keywords: [
      "zero-based budgeting",
      "zero based budget",
      "ynab method",
      "how to allocate money",
    ],
    readingTime: 6,
    stats: { words: 720, characters: 4360, sentences: 62, paragraphs: 40 },
    content: ContentZeroBasedBudgeting,
  },
  {
    slug: "how-to-get-out-of-debt",
    title: "How to Get Out of Debt Without the Guilt",
    description:
      "Debt snowball vs. debt avalanche compared without judgment. Learn a humane strategy to tackle credit cards and loans while staying motivated.",
    date: "2026-04-02",
    category: "Debt",
    keywords: [
      "how to get out of debt",
      "debt snowball method",
      "debt avalanche method",
      "pay off credit cards",
    ],
    readingTime: 6,
    stats: { words: 740, characters: 4490, sentences: 64, paragraphs: 42 },
    content: ContentHowToGetOutOfDebt,
  },
  {
    slug: "money-dysmorphia",
    title: "Money Dysmorphia: Why You Feel Broke Even When You’re Not",
    description:
      "Money dysmorphia is feeling financially broken even when your numbers are fine. Here’s what causes it, how to tell it apart from real financial stress, and practical steps to untangle it.",
    date: "2026-03-30",
    category: "Money Psychology",
    keywords: [
      "money dysmorphia",
      "feeling broke when you’re not",
      "financial anxiety",
      "money mindset",
      "financial insecurity",
    ],
    readingTime: 6,
    stats: { words: 820, characters: 4980, sentences: 70, paragraphs: 46 },
    content: ContentMoneyDysmorphia,
  },
  {
    slug: "ynab-vs-monarch-vs-savlo",
    title: "YNAB vs Monarch vs Savlo: An Honest 2026 Comparison",
    description:
      "Three personal finance apps, three distinct philosophies. Compare YNAB, Monarch, and Savlo to find the one you'll actually keep using six months from now.",
    date: "2026-03-28",
    category: "Comparisons",
    keywords: [
      "ynab vs monarch",
      "best budgeting app",
      "savlo vs ynab",
      "monarch money alternatives",
    ],
    readingTime: 7,
    stats: { words: 870, characters: 5280, sentences: 74, paragraphs: 48 },
    content: ContentYNABMonarchSavlo,
  },
]

export const categories: { label: BlogCategory | "All"; count: number }[] = (
  () => {
    const all: (BlogCategory | "All")[] = [
      "All",
      "Budgeting",
      "Saving",
      "Debt",
      "Money Psychology",
      "Comparisons",
      "Goals",
    ]
    return all.map((label) => ({
      label,
      count:
        label === "All"
          ? posts.length
          : posts.filter((p) => p.category === label).length,
    }))
  }
)()

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit)
}

export function formatBlogDate(iso: string, locale: string = "en-US") {
  // Render as "April 18, 2026"
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatBlogDateShort(iso: string) {
  // Render as "4/18/2026" to match Cal AI's visual cadence
  const d = new Date(iso + "T00:00:00")
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}
