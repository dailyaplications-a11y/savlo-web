import { posts, type BlogCategory } from "@/lib/blog/posts"
import type { RichArticle } from "@/lib/blog/rich-article"

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
  rich?: RichArticle
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
    readingTime: 20,
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "A ansiedade financeira raramente é proporcional ao valor que você tem na sua conta bancária. Ela é proporcional à quantidade de incerteza que você sente. Os hábitos diários apresentados aqui são projetados para reduzir sua carga emocional antes mesmo que você olhe para os números. Eles não substituem ajuda profissional se a ansiedade for grave, mas são um ponto de partida para qualquer pessoa que queira mudar a forma como o dinheiro a faz sentir.",
        },
        {
          kind: "h2",
          id: "o-que-e",
          text: "O que é realmente a ansiedade financeira",
        },
        {
          kind: "p",
          text: "A ansiedade financeira não é sobre o número na sua conta. Pessoas com seis dígitos de economia podem acordar às três da manhã se perguntando se têm o suficiente, e pessoas com nada podem dormir tranquilamente. A ansiedade vem da lacuna entre o que você tem e o que acha que precisa, combinada com a sensação de não ter controle sobre se essa lacuna se fechará. É uma sensação, não um extrato bancário.",
        },
        {
          kind: "p",
          text: "A sensação geralmente tem duas camadas. A camada de superfície é a preocupação imediata: Posso pagar o aluguel? Posso cobrir o conserto do carro? Meu cartão será recusado? A camada mais profunda é a história que você conta a si mesmo sobre o que o número significa sobre você. A camada de superfície é resolvível com um plano. A camada mais profunda é o que faz a ansiedade persistir mesmo depois que o plano está em vigor. A ansiedade financeira raramente é sobre o dinheiro em si. É sobre o que você acredita que o dinheiro diz sobre sua competência, seu valor e seu futuro.",
        },
        {
          kind: "p",
          text: "O termo é usado livremente, mas a experiência é real. Ela pode se manifestar como pavor quando você abre seu aplicativo bancário, como irritabilidade após uma compra, como insônia na noite antes do pagamento, ou como um zumbido constante de preocupação que o segue em todo lugar. Ela não exige uma crise. Ela não exige dívidas. Ela não exige pobreza. Ela só exige a crença de que você não está seguro, e essa crença muitas vezes está desligada dos fatos.",
        },
        {
          kind: "h2",
          id: "por-que-dinheiro-causa-ansiedade",
          text: "Por que o dinheiro causa ansiedade em primeiro lugar",
        },
        {
          kind: "p",
          text: "O dinheiro é um dos poucos assuntos que toca cada parte da vida: moradia, alimentação, saúde, relacionamentos, identidade, liberdade, tempo. Quando o dinheiro parece instável, cada parte da vida parece instável. A ansiedade não é irracional. É o cérebro fazendo exatamente o que foi projetado para fazer: sinalizar uma ameaça percebida à sobrevivência. O problema é que a resposta à ameaça não distingue entre uma emergência real e uma notificação de que seu saldo está mais baixo do que o esperado.",
        },
        {
          kind: "p",
          text: "A segunda razão pela qual o dinheiro causa ansiedade é que a maioria das pessoas nunca foi ensinada a pensar sobre isso. As escolas ensinam álgebra, não juros compostos. As famílias falam sobre dinheiro em voz baixa, ou não falam, ou em discussões. O resultado é que a maioria dos adultos aborda suas finanças com o kit de ferramentas emocional de uma criança: evitar o assunto, sentir culpa quando ele surge e esperar que se resolva sozinho. A fuga piora a ansiedade, porque quanto menos você sabe sobre sua situação financeira, mais o cérebro preenche as lacunas com cenários de pior caso.",
        },
        {
          kind: "p",
          text: "A terceira razão é a comparação. As redes sociais mostram as férias, carros e casas das outras pessoas sem mostrar suas dívidas, sua ansiedade ou as 60 horas semanais que financiaram a compra. A comparação cria um padrão invisível contra o qual você se mede, e o padrão é impossível porque não é real. Você está comparando seu interior com o exterior de outra pessoa, e você sempre perderá essa comparação.",
        },
        {
          kind: "p",
          text: "A quarta razão é a vergonha. A vergonha é a crença de que você é o problema, não que você tem um problema. A vergonha financeira diz: Eu deveria saber fazer isso. Eu deveria estar mais adiante. Todo mundo entendeu isso. A vergonha impede que você peça ajuda, olhe para os números e tome os pequenos primeiros passos que realmente reduziriam a ansiedade. A vergonha é a melhor amiga da ansiedade, porque ela o mantém em silêncio.",
        },
        {
          kind: "h2",
          id: "sintomas-fisicos",
          text: "Os sintomas físicos do estresse financeiro",
        },
        {
          kind: "p",
          text: "O estresse financeiro não vive apenas na sua cabeça. Ele se manifesta no seu corpo de maneiras fáceis de perder porque parecem não ter relação com o dinheiro. Dores de cabeça que aparecem no primeiro do mês quando o aluguel é devido. Tensão na mandíbula por apertar os dentes à noite. Problemas no estômago que parecem vir de lugar nenhum. Fadiga que o sono não conserta. Uma aperto no peito quando você recebe um e-mail do seu banco. Isso não é imaginário. É a resposta de estresse fazendo exatamente o que foi projetada para fazer: preparar seu corpo para o perigo. O problema é que o perigo é um pensamento sobre dinheiro, não uma ameaça física, e seu corpo não pode fazer a distinção.",
        },
        {
          kind: "p",
          text: "Os sintomas físicos criam um ciclo de retroalimentação. Você sente a dor de cabeça, e seu cérebro interpreta a dor de cabeça como evidência de que algo está errado, o que aumenta a ansiedade, o que aumenta a dor de cabeça. O ciclo se reforça por si só, e a única forma de quebrá-lo é tratar a ansiedade na sua fonte: o pensamento, não o sintoma. O corpo se acalma quando a mente se acalma, e a mente se acalma quando a incerteza diminui. Os hábitos deste guia são projetados para diminuir a incerteza, que é a solução a montante dos sintomas físicos.",
        },
        {
          kind: "p",
          text: "O outro efeito físico do estresse financeiro é na tomada de decisão. O estresse reduz sua atenção à ameaça imediata, o que é útil se um carro está se dirigindo para você, mas destrutivo se você está tentando planejar um orçamento. Sob estresse, você toma decisões mais impulsivas, o que cria mais problemas financeiros, o que cria mais estresse. O ciclo é vicioso e comum. A forma de quebrá-lo é reduzir o estresse antes de tomar a decisão financeira, não depois. Os hábitos abaixo são projetados para fazer exatamente isso.",
        },
        {
          kind: "h2",
          id: "habitos",
          text: "Hábitos diários para paz financeira",
        },
        {
          kind: "ol",
          items: [
            "**Janelas de verificação dedicadas.** Verifique suas contas em um horário agendado, não sempre que receber uma notificação. O horário agendado dá a você controle sobre quando interage com o dinheiro. A notificação aleatória dá ao dinheiro controle sobre quando ele interage com você. A diferença é entre escolher olhar e ser surpreendido por um número.",
            "**Respire fundo.** Respire lentamente três vezes antes de abrir qualquer aplicativo financeiro. As três respirações não são um truque mágico. São uma redefinição fisiológica. A respiração lenta ativa o sistema nervoso parassimpático, que é o sistema que diz ao seu corpo que o perigo passou. Isso não eliminará a ansiedade, mas a reduzirá o suficiente para que você possa pensar claramente em vez de entrar em espiral.",
            "**Use uma linguagem gentil.** Substitua \"Eu gastei demais\" por \"Estou observando meus padrões de gastos\". A diferença não é semântica. A primeira formulação é um veredicto. A segunda é uma observação. Um veredicto fecha a conversa. Uma observação a abre. A linguagem mais gentil cria um espaço entre você e o número, e é nesse espaço que vive o pensamento racional.",
            "**Concentre-se em um número.** Não se sobrecarregue; escolha apenas uma métrica para revisar por sessão. Talvez seja o saldo da conta corrente. Talvez seja o valor na sua reserva de emergência. Talvez seja o valor que você gastou no supermercado esta semana. Um número é gerenciável. Cinco números ao mesmo tempo são uma receita para o pânico. Comece pequeno, construa o hábito e deixe o número de coisas que você acompanha crescer naturalmente com o tempo.",
            "**Defina um toque de recolher.** Sem revisões financeiras ou conversas sobre dinheiro na última hora antes de ir dormir. Seu cérebro processa conteúdo emocionalmente diferente durante o sono, e a última coisa em que você pensa antes de dormir tende a receber mais peso emocional. Uma conversa sobre dinheiro às 23h se torna um pesadelo financeiro às 3h da manhã. Mova a revisão para a manhã, quando seu cérebro está fresco e seu cortisol está naturalmente mais alto.",
          ],
        },
        {
          kind: "h2",
          id: "verificar-sem-espiral",
          text: "Como verificar suas finanças sem entrar em espiral",
        },
        {
          kind: "p",
          text: "O objetivo de verificar suas finanças não é se sentir bem com o número. O objetivo é conhecer o número, porque conhecer é sempre menos assustador do que não conhecer. O desconhecido é onde a ansiedade vive. O número, mesmo que seja mais baixo do que você esperava, é um fato, e os fatos são gerenciáveis. O processo de verificação deve levar menos de cinco minutos. Qualquer coisa que ultrapasse cinco minutos não é verificação; é ruminação, e a ruminação é ansiedade usando uma máscara produtiva.",
        },
        {
          kind: "p",
          text: "A verificação de cinco minutos tem uma estrutura. Primeiro, abra a conta ou o aplicativo. Segundo, olhe para o número. Terceiro, diga o número em voz alta. Quarto, pergunte a si mesmo: Este número é uma crise, ou é apenas não o que eu queria? Na maioria das vezes, é apenas não o que você queria. A distinção entre uma crise e uma decepção é importante, porque uma crise requer ação e uma decepção requer aceitação. A verificação de cinco minutos ajuda você a fazer a distinção antes de reagir.",
        },
        {
          kind: "p",
          text: "Após a verificação, feche o aplicativo. Não role pelas transações. Não abra outras contas para comparar. Não verifique sua pontuação de crédito. Não leia artigos sobre como economizar mais. A verificação está concluída. O resto é ruído. A disciplina de fechar o aplicativo após cinco minutos é a parte que realmente reduz a ansiedade, porque ensina ao seu cérebro que você pode olhar o número e sobreviver. Cada vez que você olha e sobrevive, olhar fica mais fácil, e sobreviver fica mais rápido.",
        },
        {
          kind: "h2",
          id: "comparacao",
          text: "O papel da comparação na ansiedade com o dinheiro",
        },
        {
          kind: "p",
          text: "A comparação é o motor da maioria da ansiedade financeira que não está ligada a uma necessidade real de sobrevivência. Você tem o suficiente para o aluguel, mas seu colega acabou de comprar uma casa, e agora seu apartamento parece um fracasso. Você tem o suficiente para o supermercado, mas seu amigo postou uma foto de férias, e agora seu fim de semana em casa parece uma punição. A comparação pega uma situação que estava bem há cinco minutos e a transforma em evidência de que você está ficando para trás.",
        },
        {
          kind: "p",
          text: "O antídoto para a comparação não é a gratidão, embora a gratidão ajude. O antídoto são informações. Quando você vê a compra de alguém, está vendo um ponto de dados. Você não está vendo o salário dele, suas dívidas, sua herança, a renda do parceiro dele, o aluguel dele, sua saúde mental ou os compromissos que ele fez para se permitir a compra. Você está vendo o resultado, não a entrada, e a entrada é o que determina se a compra foi sábia ou imprudente. A comparação é injusta porque é incompleta.",
        },
        {
          kind: "p",
          text: "A solução prática é limitar as entradas que desencadeiam a comparação. Isso não significa excluir todas as redes sociais ou evitar todos os amigos. Significa notar quais contas, quais pessoas e quais contextos desencadeiam a espiral de comparação, e reduzir sua exposição a esses gatilhos específicos. O objetivo não é viver em uma bolha. O objetivo é parar de se expor voluntariamente a material que o faz sentir mal sobre escolhas que estavam perfeitamente bem antes de você vê-lo.",
        },
        {
          kind: "h2",
          id: "evitacao",
          text: "Quando a ansiedade financeira se torna evitação",
        },
        {
          kind: "p",
          text: "A coisa mais perigosa que a ansiedade financeira faz é fazê-lo evitar suas finanças. A evitação parece protetora: se eu não olhar, não preciso lidar com isso. Mas a evitação é o oposto de protetora. Ela é cumulativa. Cada dia que você não olha, o desconhecido cresce, e a ansiedade preenche o desconhecido com cenários de pior caso. Uma conta que você não abriu se torna uma multa por atraso que você não esperava. Uma conta que você não verificou se torna um saldo devedor que você não pegou. A evitação cria exatamente o resultado que ela tentava prevenir.",
        },
        {
          kind: "p",
          text: "O padrão é previsível. Primeiro, você evita olhar. Depois se sente culpado por evitar. Depois a culpa torna mais difícil olhar. Depois você evita com mais força. O ciclo pode durar meses ou anos, e geralmente termina com uma crise que o força a olhar de qualquer forma, mas agora em condições piores. A forma de quebrar o ciclo é tornar o olhar o mais fácil possível. Cinco minutos. Um número. Sem julgamento. Quanto menor o passo, mais provável é que você o dê, e quantos mais passos você dá, menor o próximo passo parece.",
        },
        {
          kind: "p",
          text: "A reformulação que ajuda a maioria das pessoas é esta: olhar para suas finanças não é um teste do seu caráter. É um exercício de coleta de dados. Você não está sendo avaliado. Você não está sendo julgado. Você está coletando informações que o ajudarão a tomar uma melhor decisão amanhã. O quadro de coleta de dados remove o peso moral do ato de olhar, e o peso removido torna o olhar possível.",
        },
        {
          kind: "h2",
          id: "falar-sobre-dinheiro",
          text: "Como falar sobre dinheiro quando isso causa ansiedade",
        },
        {
          kind: "p",
          text: "O dinheiro é um dos últimos assuntos tabus. As pessoas discutirão sua saúde, seus relacionamentos e sua saúde mental antes de discutir seu salário, suas dívidas ou seus hábitos de gastos. O silêncio ao redor do dinheiro torna a ansiedade pior, porque a ansiedade se alimenta da crença de que você é o único que luta com isso. Você não é. O silêncio é compartilhado, e o silêncio compartilhado faz todos se sentirem sozinhos.",
        },
        {
          kind: "p",
          text: "A forma de falar sobre dinheiro sem entrar em espiral é estabelecer limites antes que a conversa comece. Diga à outra pessoa: Eu posso falar sobre isso por dez minutos, e depois preciso parar. O limite de tempo evita que a conversa se torne uma sessão de terapia, que não é o que a outra pessoa esperava. O limite também o protege, porque significa que a conversa tem um final conhecido, e fins conhecidos são menos assustadores que fins abertos.",
        },
        {
          kind: "p",
          text: "O outro limite é o escopo. Você não precisa compartilhar cada número. Você pode falar sobre como o dinheiro o faz sentir sem compartilhar seu salário. Você pode falar sobre a ansiedade sem compartilhar suas dívidas. A sensação é a parte importante, porque a sensação é onde a mudança acontece. Os números são apenas dados. A sensação é a história que você conta sobre os dados, e a história é o que você pode mudar.",
        },
        {
          kind: "h2",
          id: "rotina",
          text: "Construindo uma rotina financeira que não causa estresse",
        },
        {
          kind: "p",
          text: "Uma rotina financeira não é um orçamento. Um orçamento é um plano para seu dinheiro. Uma rotina é um plano para quando e como você pensa sobre seu dinheiro. A rotina é o que torna o orçamento possível, porque sem uma rotina, o orçamento se torna mais uma coisa que você não está conseguindo fazer. A rotina é pequena, regular e automática, e existe para tornar o ato de interagir com o dinheiro normal em vez de ameaçador.",
        },
        {
          kind: "p",
          text: "A rotina tem três partes. A primeira é o check-in semanal, que leva cinco minutos e acontece no mesmo horário toda semana. A segunda é a reconstrução mensal, que leva 30 a 60 minutos e acontece na mesma data todo mês. A terceira é a revisão anual, que leva 60 a 90 minutos e acontece no mesmo horário todo ano. As três partes são diferentes em escopo, mas idênticas em estrutura: você olha para os números, faz um plano e fecha o livro.",
        },
        {
          kind: "p",
          text: "A chave para tornar a rotina sem estresse é tornar cada parte o menor possível. O check-in semanal nunca deve levar mais de cinco minutos. Se levar mais, você está fazendo demais. A reconstrução mensal nunca deve levar mais de 60 minutos. Se levar mais, você está complicando demais. A revisão anual nunca deve levar mais de 90 minutos. Se levar mais, você está rumiando, não revisando. Os limites de tempo não são arbitrários. São a diferença entre uma rotina que reduz a ansiedade e uma rotina que a cria.",
        },
        {
          kind: "h2",
          id: "scripts-de-dinheiro",
          text: "Os scripts de dinheiro rodando em segundo plano",
        },
        {
          kind: "p",
          text: "A maioria da ansiedade financeira é impulsionada pelo que os terapeutas chamam de scripts de dinheiro: crenças inconscientes sobre dinheiro que você absorveu na infância e tem executado desde então. Os scripts são invisíveis, o que os torna poderosos. Você não os percebe mais do que percebe o sistema operacional no seu telefone. Mas eles moldam cada decisão financeira que você toma, e eles geralmente estão errados.",
        },
        {
          kind: "p",
          text: "Os scripts de dinheiro mais comuns são: dinheiro é a raiz de todo o mal, pessoas ricas são gananciosas, eu não mereço dinheiro, eu nunca terei o suficiente, dinheiro é difícil de ganhar, dinheiro é fácil de perder, e falar sobre dinheiro é rude. Cada um desses scripts cria um tipo específico de ansiedade. O script \"Eu nunca terei o suficiente\" cria uma sensação permanente de escassez, mesmo quando os números estão bem. O script \"Dinheiro é difícil de ganhar\" cria medo de gastar, porque cada dólar gasto parece ter levado meses para substituir. O script \"Pessoas ricas são gananciosas\" cria culpa ao ganhar mais, o que o impede de negociar um aumento ou elevar seus preços.",
        },
        {
          kind: "p",
          text: "A forma de identificar seus scripts de dinheiro é notar os pensamentos que aparecem quando você pensa sobre dinheiro. Escreva-os, exatamente como aparecem na sua cabeça. Não os edite. Não os julgue. Apenas escreva-os. Depois pergunte: De onde veio esse pensamento? Quem me disse isso? Quando eu acreditei pela primeira vez nisso? As respostas geralmente remontam a um momento específico da infância: um pai discutindo sobre contas, um professor dizendo algo sobre pessoas ricas, um parente fazendo um comentário sobre as finanças da sua família. O momento foi pequeno, mas a crença que ele criou foi grande, e ela tem moldado seu comportamento financeiro desde então.",
        },
        {
          kind: "p",
          text: "Os scripts de dinheiro não desaparecem sozinhos. Eles desaparecem quando você os vê, os nomeia e decide se eles ainda são verdadeiros. A maioria não é. O script \"Eu nunca terei o suficiente\" era verdadeiro quando você era criança e não tinha controle sobre as finanças domésticas. Ele não é verdade agora que você tem sua própria renda, sua própria conta e sua própria capacidade de tomar decisões. O script serviu a um propósito uma vez. Ele não serve a um propósito agora. Identificá-lo é o primeiro passo para substituí-lo por algo mais preciso e menos doloroso.",
        },
        {
          kind: "h2",
          id: "ajudar-outros",
          text: "Como ajudar outra pessoa com ansiedade financeira",
        },
        {
          kind: "p",
          text: "Se alguém que você ama está lutando com ansiedade financeira, a coisa mais útil que você pode fazer não é dar conselhos. Conselhos parecem úteis, mas muitas vezes chegam como julgamento: você deveria fazer isso, você deveria parar de fazer aquilo. A pessoa já sabe que deveria. O saber não é o problema. O problema é que a ansiedade torna o fazer impossível. O que a pessoa precisa não é de um plano. O que ela precisa é de alguém que fique com ela enquanto olha para os números, sem pestanejar, sem consertar e sem fazê-la se sentir pior.",
        },
        {
          kind: "p",
          text: "A versão prática disso se chama co-regulação. Você senta na mesma sala enquanto a pessoa abre seu aplicativo bancário. Você não olha para a tela. Você não comenta o número. Você apenas existe no espaço enquanto ela faz o que a assusta. Sua presença calma reduz a resposta de estresse da pessoa, o que torna o olhar possível, o que torna o próximo olhar mais fácil. A co-regulação não é uma solução. É uma ponte que torna a solução possível.",
        },
        {
          kind: "p",
          text: "A outra coisa que você pode fazer é normalizar. Diga: Eu também me sinto ansioso com dinheiro às vezes. Eu também evito olhar minhas contas. Eu também sinto vergonha dos meus gastos. A normalização remove o isolamento, e o isolamento é o que faz a ansiedade crescer. A pessoa não precisa ser consertada. Ela precisa saber que não é a única que se sente assim. A experiência compartilhada é mais curadora do que qualquer aplicativo de orçamento ou plano financeiro.",
        },
        {
          kind: "h2",
          id: "mito-do-fundo-de-emergencia",
          text: "O mito do fundo de emergência e por que piora a ansiedade",
        },
        {
          kind: "p",
          text: "Todo mundo diz: construa um fundo de emergência. Três a seis meses de despesas. Essa é a mágica número. Se você tiver, está seguro. Se não tiver, deve sentir ansiedade. O conselho é bem-intencionado, mas frequentemente piora a ansiedade, porque cria um novo número para se obcear e uma nova forma de se sentir como um fracassado. Você já tem o número do aluguel, o número do cartão de crédito e o número da poupança. Agora você também tem o número do fundo de emergência, e geralmente é o que mais parece distante.",
        },
        {
          kind: "p",
          text: "O fundo de emergência é uma boa ideia. Mas a forma como ele é normalmente apresentado o transforma em outra fonte de ansiedade em vez de uma solução. A apresentação pressupõe que você tem margem para economizar, que pode economizar consistentemente e que o ato de economizar não cria estresse por si só. Para pessoas com ansiedade financeira, o ato de economizar frequentemente cria estresse, porque cada dólar economizado é um dólar que poderia ter sido usado para reduzir a ansiedade imediata. A tensão entre economizar para o futuro e acalmar o presente é real, e o conselho padrão não a aborda.",
        },
        {
          kind: "p",
          text: "Uma moldura melhor é pensar no fundo de emergência como um espectro, não como um alvo. Qualquer valor economizado é melhor que nada. Cem dólares são melhores que zero. Quinhentos são melhores que cem. O número não precisa ser perfeito. Ele precisa existir. A existência de um pequeno fundo muda a história que você conta a si mesmo sobre sua habilidade de lidar com surpresas, e a história alterada é o que reduz a ansiedade. Não é sobre o dinheiro. É sobre a história.",
        },
        {
          kind: "h2",
          id: "dismorfia",
          text: "Ansiedade financeira e dismorfia monetária",
        },
        {
          kind: "p",
          text: "Dismorfia monetária é um termo mais recente para um fenômeno que sempre existiu: a distorção entre sua situação financeira real e como você a percebe. Você pode ganhar um salário confortável e se sentir perpetuamente sem dinheiro. Você pode ter mais economias que a maioria dos seus pares e se sentir para trás. A distorção não é sobre os fatos. É sobre a lente através da qual você vê os fatos, e a ansiedade financeira é a lente que faz tudo parecer pior do que é.",
        },
        {
          kind: "p",
          text: "A dismorfia monetária é comum entre pessoas que cresceram em casas onde o dinheiro era apertado, mesmo que sua situação atual seja estável. A experiência da infância criou uma expectativa básica de escassez, e a básica não se atualiza automaticamente quando os fatos mudam. Você pode ganhar três vezes mais do que seus pais ganhavam e ainda sentir a mesma ansiedade que eles sentiam, porque a sensação foi instalada antes que você tivesse a linguagem para questioná-la. A ansiedade é herdada, não ganha, e a herança pode ser recusada.",
        },
        {
          kind: "p",
          text: "O efeito prático da dismorfia monetária é que ela o impede de aproveitar a estabilidade financeira que você já alcançou. Você economiza agressivamente, mas sente que nunca é suficiente. Você evita gastar em coisas que melhorariam sua vida porque os gastos desencadeiam a ansiedade. Você se compara com pessoas que ganham mais e se sente um fracassado, mesmo que esteja indo bem por todas as medições objetivas. A dismorfia é a ansiedade usando uma disfarce, e a disfarce parece prudência.",
        },
        {
          kind: "h2",
          id: "quando-buscar-ajuda",
          text: "Quando buscar apoio profissional",
        },
        {
          kind: "p",
          text: "Se a ansiedade com dinheiro está afetando gravemente seu sono, relacionamentos ou funcionamento diário por mais de duas semanas, considere buscar apoio de um terapeuta financeiro. Um aplicativo de orçamento pode impedir que a ansiedade piore, mas não pode substituir cuidados profissionais.",
        },
        {
          kind: "p",
          text: "A terapia financeira é um campo específico que combina planejamento financeiro com apoio psicológico. Um terapeuta financeiro não apenas diz onde colocar seu dinheiro. Ele ajuda você a entender por que o dinheiro o faz sentir da forma que sente, e ajuda a construir habilidades emocionais para lidar com suas finanças sem a sobrecarga. A combinação é mais eficaz do que qualquer disciplina isolada, porque o plano financeiro não se mantém se a fundação emocional não estiver estável, e o trabalho emocional não se mantém se a fundação financeira não for abordada.",
        },
        {
          kind: "p",
          text: "Os sinais de que você deve buscar ajuda incluem: você não abriu seu correio por mais de um mês, você não fez login em sua conta bancária por mais de duas semanas, você está perdendo sono por dinheiro mais de uma vez por semana, você está discutindo sobre dinheiro com seu parceiro mais de uma vez por semana, ou você está tomando decisões financeiras com base em pânico em vez de informações. Nenhum desses sinais significa que você falhou. Eles significam que a ansiedade cresceu além do que a autoajuda pode lidar, e não há vergonha nisso. A vergonha seria continuar sofrendo quando a ajuda está disponível.",
        },
        {
          kind: "h2",
          id: "faq",
          text: "Perguntas frequentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "A ansiedade financeira é a mesma coisa que ser ruim com dinheiro?",
              a: "Não. A ansiedade financeira é uma resposta emocional à incerteza sobre o dinheiro. Ela pode afetar pessoas que são excelentes com dinheiro e pessoas que não são. A ansiedade é sobre a sensação, não sobre a habilidade. Você pode ser altamente competente com suas finanças e ainda sentir ansiedade sobre elas, porque a ansiedade está enraizada na crença de que você não está seguro, não na realidade de sua situação financeira.",
            },
            {
              q: "Um aplicativo de orçamento pode ajudar com a ansiedade financeira?",
              a: "Depende do aplicativo. Alguns aplicativos pioram a ansiedade bombardeando você com notificações, mostrando gráficos que parecem julgamento e fazendo você se sentir como se estivesse falhando. Um aplicativo bem projetado faz o oposto: reduz o número de decisões que você precisa tomar, apresenta informações calmamente e ajuda a construir uma rotina que faz olhar para seu dinheiro parecer normal. O aplicativo certo não substitui ajuda profissional para ansiedade grave, mas pode fazer parte de um plano que reduz a carga do dia a dia.",
            },
            {
              q: "Quanto tempo leva para a ansiedade financeira melhorar?",
              a: "Depende da fonte. Se a ansiedade é causada por um problema financeiro específico (dívidas, uma conta, perda de emprego), a ansiedade frequentemente diminui assim que você tem um plano, mesmo que o plano leve meses para executar. Se a ansiedade é causada por uma crença mais profunda (vergonha, trauma infantil com dinheiro, medo de não ser suficiente), pode levar mais tempo, e a ajuda profissional frequentemente acelera o processo. A maioria das pessoas percebe melhoria dentro de quatro a seis semanas após iniciar uma rotina consistente, mesmo sem ajuda profissional.",
            },
            {
              q: "Devo compartilhar minha ansiedade financeira com meu parceiro?",
              a: "Sim, mas com estrutura. Escolha um momento em que nenhum de vocês esteja estressado, defina um limite de tempo e concentre-se em como você se sente em vez do que a outra pessoa deveria fazer. O objetivo da conversa não é resolver o problema juntos. O objetivo é ser conhecido. Uma vez que o sentimento é compartilhado, a vergonha perde seu poder, e a resolução de problemas se torna possível a partir de um lugar mais calmo.",
            },
            {
              q: "E se minha ansiedade financeira for justificada porque minhas finanças são realmente ruins?",
              a: "Até ansiedade justificada ainda é ansiedade, e ansiedade não ajuda você a resolver problemas financeiros. Ela faz você evitá-los. O fato de suas finanças serem difíceis torna mais importante, não menos, engajar com elas calmamente. A calma não é negação. A calma é a condição sob a qual boas decisões são possíveis. Uma pessoa calma com finanças ruins toma melhores decisões que uma pessoa ansiosa com finanças ruins, toda vez.",
            },
            {
              q: "É normal sentir ansiedade com dinheiro mesmo quando estou bem?",
              a: "Sim. A ansiedade financeira não é proporcional à sua situação financeira. Ela é proporcional à sua relação com a incerteza, seus scripts de dinheiro da infância e as comparações que você faz. Pessoas com rendas confortáveis frequentemente se sentem mais ansiosas com dinheiro que pessoas com menos, porque têm mais a perder e decisões mais complexas a tomar. A ansiedade não é um sinal de que algo está errado com suas finanças. É um sinal de que algo vale a pena explorar na sua relação com o dinheiro.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusao",
          text: "Uma relação mais calma com o dinheiro começa com olhar",
        },
        {
          kind: "p",
          text: "A ansiedade financeira não é uma falha de caráter. É uma resposta de estresse à incerteza, e a incerteza diminui quando você olha. O olhar não precisa ser dramático. Não precisa ser uma revisão completa do orçamento. Pode ser cinco minutos, um número, sem julgamento. Os cinco minutos não são uma solução. É uma prática, e a prática se acumula. Cada vez que você olha, o olhar fica mais fácil. Cada vez que você sobrevive ao olhar, o medo perde um pouco de seu poder. A ansiedade não desaparece, mas encolhe, e o espaço que ela costumava ocupar se preenche com algo mais útil: informação, autonomia e o conhecimento silencioso de que você pode lidar com isso.",
        },
        {
          kind: "p",
          text: "Os hábitos deste guia são projetados para reduzir a carga emocional antes mesmo que você olhe para os números. As respirações, a linguagem, os limites de tempo, o toque de recolher: cada um é uma pequena intervenção que muda a relação entre você e seu dinheiro. Nenhum exige força de vontade. Nenhum exige que você se sinta motivado. Eles apenas exigem que você os faça, e o fazer cria a motivação, não o contrário. A motivação segue a ação. A ação não segue a motivação.",
        },
        {
          kind: "p",
          text: "Se você quer uma ferramenta que torna o olhar mais fácil, o Savlo é projetado exatamente para isso: uma forma calma, privada e sem anúncios de ver seu dinheiro sem a sobrecarga. Ele está disponível no Android e chegará em breve ao iOS. Se você quiser continuar, os artigos relacionados abaixo aprofundam as mecânicas específicas: a mais ampla [filosofia de orçamento](/pt/blog/how-to-budget-money), as [mecânicas práticas de Sinking Funds](/pt/blog/sinking-funds), e o guia específico sobre [a regra 50/30/20](/pt/blog/50-30-20-rule) se você quiser um ponto de partida simples.",
        },
      ],
    },
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
    readingTime: 22,
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
    rich: {
      blocks: [
        {
          kind: "p",
          text: "O orçamento base zero é um dos métodos mais conhecidos de planejamento pessoal. A regra é direta: quando o mês começa, cada unidade de dinheiro esperada tem um destino. Quando a primeira despesa chega, não há saldo sem nome na conta esperando ser comido pelo impulso. É isso. O número do lado direito da página é zero, não porque se gastou tudo, mas porque nada ficou sem tarefa. A ambiguidade sumiu.",
        },
        {
          kind: "p",
          text: "A mudança mental vai de reativo para intencional. Em vez de perguntar «o que sobrou no fim do mês?», você começa o mês com uma resposta completa. A maioria das pessoas que mantêm um orçamento base zero por mais de seis meses dizem a mesma coisa: o orçamento deixa de parecer uma restrição e começa a parecer uma permissão. Você sabe exatamente o que é seguro gastar, o que está reservado para uma conta futura e o que está bloqueado numa meta. A incerteza desaparece.",
        },
        {
          kind: "p",
          text: "O sistema foi popularizado no mundo das finanças pessoais pelo YNAB (You Need A Budget) e tem raízes na contabilidade gerencial dos anos 1970. A versão pessoal é muito mais leve que a corporativa, mas o princípio é o mesmo: cada unidade monetária é um recurso, e recursos são mais úteis quando atribuídos com intenção. Você pode ler mais sobre a filosofia ampla no nosso guia sobre [como orçamentar dinheiro](/pt/blog/how-to-budget-money), e compará-lo com a abordagem percentual mais simples no [guia 50/30/20](/pt/blog/50-30-20-rule).",
        },
        {
          kind: "h2",
          id: "quatro-regras",
          text: "As quatro regras do orçamento base zero",
        },
        {
          kind: "p",
          text: "O YNAB apresenta a prática como quatro regras. Vale a pena revisitá-las porque elas explicam o comportamento por trás da matemática, não só a matemática em si.",
        },
        {
          kind: "ol",
          items: [
            "**Dê um trabalho a cada real.** A renda que entra é dinheiro que precisa de uma atribuição, não dinheiro que precisa de um esconderijo. O trabalho pode ser uma conta, uma meta, um Sinking Fund, uma reserva ou uma categoria de gasto flexível. O ponto é que nenhum real fique sem atribuição.",
            "**Aceite suas despesas verdadeiras.** A maioria das surpresas do ano não são surpresas. Seguros, impostos, presentes, matrículas, viagens. Chegam em datas previsíveis. O orçamento base zero te obriga a repartir o custo ao longo do ano, alocando um pequeno valor por mês a um Sinking Fund para cada uma. A despesa deixa de ser surpresa.",
            "**Role com os socos.** Se você estourar uma categoria, mova dinheiro de outra categoria para cobrir. O plano se ajusta, o total fica em zero e o mês não se estraga. Estourar é dado, não fracasso.",
            "**Envelheça seu dinheiro.** Quanto mais tempo seu dinheiro ficar na conta antes de ser gasto, mais folga você tem. Com o tempo, o orçamento base zero aumenta a distância entre ganhar e gastar, que é o que cria calma financeira real. A meta não é entesourar. A meta é gastar dinheiro com pelo menos um mês de idade, não dinheiro que acabou de chegar.",
          ],
        },
        {
          kind: "h2",
          id: "processo-passo-a-passo",
          text: "O processo passo a passo",
        },
        {
          kind: "ol",
          items: [
            "Anote sua renda líquida total do mês.",
            "Liste todas as obrigações fixas (moradia, serviços, transporte).",
            "Aloque primeiro o dinheiro para a poupança e os investimentos.",
            "Distribua o restante entre categorias flexíveis do dia a dia.",
            "Garanta que o total de alocações seja exatamente igual à renda que vai entrar.",
          ],
        },
        {
          kind: "p",
          text: "Os cinco passos parecem simples porque o trabalho não está nos passos. O trabalho está nas categorias que você escolhe, no tamanho da reserva que você mantém e na disciplina de voltar ao plano a cada semana. O primeiro mês costuma levar de 60 a 90 minutos. No terceiro mês, a maioria consegue reconstruir o plano em 30. O ponto dos passos é te dar uma sequência que não pula as partes difíceis, especialmente a tentação de deixar uma linha de «diversos» no final. Não há diversos. A ideia é tornar explícito o que é implícito.",
        },
        {
          kind: "h2",
          id: "exemplo-real",
          text: "Um exemplo com números reais",
        },
        {
          kind: "p",
          text: "Para ver o método em ação, tomemos um único mês. Renda líquida: R$ 10.000. O plano começa listando cada obrigação fixa com sua data de vencimento e valor. Aluguel R$ 2.500, serviços R$ 300, transporte R$ 400, telefone R$ 100, pagamento mínimo de dívida R$ 600, mercado R$ 1.200, seguros R$ 200, assinaturas R$ 100, gastos médicos recorrentes R$ 150. Soma R$ 5.550. A próxima camada são metas e Sinking Funds: fundo de emergência R$ 500, presentes de fim de ano R$ 150, manutenção do carro R$ 100, taxas anuais R$ 100, aprendizado R$ 80. Isso adiciona R$ 930. Até aqui, R$ 5.550 + R$ 930 = R$ 6.480 de R$ 10.000. Os R$ 3.520 restantes se repartem em categorias flexíveis: sair para comer R$ 500, entretenimento R$ 300, cuidados pessoais R$ 150, roupas R$ 200, filhos R$ 300, presentes R$ 120, diversos flexíveis R$ 1.950. O total chega a exatamente R$ 10.000. O saldo não alocado é zero. Cada real tem um trabalho.",
        },
        {
          kind: "p",
          text: "Agora o mês começa. Por volta do dia 12, «sair para comer» foi consumido mais que o previsto, e há um excesso de R$ 100. O plano não está quebrado. A regra é mover R$ 100 de uma categoria com superávit (entretenimento teve uma semana tranquila) para sair para comer. O total continua em zero. O plano se ajustou. O comportamento mudou. O mês continua.",
        },
        {
          kind: "h2",
          id: "aguenta-realidade",
          text: "Construir um orçamento base zero que aguente o contato com a realidade",
        },
        {
          kind: "p",
          text: "A versão do orçamento base zero que sobrevive um ano é a que é ligeiramente mais generosa do que você acha que precisa ser. O erro que a maioria comete na primeira tentativa é orçar por baixo as categorias elásticas. Adivinham R$ 600 para mercado, depois gastam R$ 800, depois sentem que falharam, depois abandonam o sistema. A solução é orçar a média real dos últimos três meses, não o número esperançoso. Quando as categorias elásticas são realistas, os excessos surpresa diminuem. O plano deixa de parecer uma briga.",
        },
        {
          kind: "p",
          text: "O outro truque de durabilidade é planejar o irregular. Pegue os últimos 12 meses e anote cada gasto que aconteceu só algumas vezes: IPVA, material escolar, veterinário, festas, casamentos de amigos. Some. Divida por 12. Essa é a sua alocação mensal irregular. Coloque num Sinking Fund. Quando o gasto chegar, o dinheiro já está lá. O plano sobrevive porque o irregular foi integrado, não ignorado.",
        },
        {
          kind: "h2",
          id: "renda-irregular",
          text: "Como lidar com renda irregular no base zero",
        },
        {
          kind: "p",
          text: "O orçamento base zero foi desenhado para salários previsíveis, mas funciona tão bem com renda irregular, com uma mudança: em vez de orçar a renda que você recebe este mês, você orça a renda que você guarda. Para freelancers, trabalhadores de gig e qualquer pessoa com comissões, o ritmo é depositar cada pagamento numa conta de retenção e depois alocar para categorias a partir dessa conta. As categorias são as mesmas. A fonte dos reais só atrasa um passo.",
        },
        {
          kind: "p",
          text: "A disciplina que faz isso funcionar é orçar a partir do mês mais baixo confiável, não da média. Se os últimos seis meses de depósitos líquidos são R$ 8.000, R$ 12.000, R$ 7.500, R$ 9.500, R$ 11.000 e R$ 6.000, não orce a média. Orce R$ 6.000, e trate cada real acima como uma decisão: um Sinking Fund, um pagamento extra de dívida, uma recarga de reserva, um acelerador de meta. Este é o mesmo princípio que aparece no guia mais amplo sobre [como orçamentar dinheiro](/pt/blog/how-to-budget-money) com renda variável; a estrutura base zero simplesmente dá um lugar para ele pousar.",
        },
        {
          kind: "h2",
          id: "ritmo-semanal",
          text: "O ritmo semanal do orçamento base zero",
        },
        {
          kind: "p",
          text: "O plano é construído uma vez por mês. O plano é verificado uma vez por semana. A verificação é a parte que a maioria pula, e a pulada é o que mata o sistema. Uma verificação semanal leva de quinze a vinte minutos: abra o plano, registre as despesas da semana, olhe o saldo restante em cada categoria e pergunte se alguma categoria está caminhando para um estouro. Se sim, decida agora de onde virá o dinheiro. A decisão tomada cedo é a decisão que funciona.",
        },
        {
          kind: "p",
          text: "A outra metade do ritmo é a reconstrução mensal. Reserve um bloco no calendário de 60 a 90 minutos por volta do dia 25 de cada mês, quando a maioria das contas do mês seguinte está visível. Reconstrua o plano de cima a baixo. Ajuste as categorias, as metas dos Sinking Funds, o tamanho da reserva, as prioridades das metas. A reconstrução é onde o plano fica mais afiado a cada mês. Também é onde a visão anual começa a parecer realidade e não aspiração.",
        },
        {
          kind: "h2",
          id: "sinking-funds",
          text: "Por que o base zero combina tão bem com Sinking Funds",
        },
        {
          kind: "p",
          text: "Os Sinking Funds são a arma secreta do orçamento base zero. A maioria pensa num orçamento como uma ferramenta para os próximos trinta dias: quanto para aluguel, quanto para mercado, quanto para transporte. Um Sinking Fund é uma ferramenta para os próximos doze meses: converte gastos irregulares previsíveis em contribuições mensais pequenas, de modo que o gasto deixa de ser surpresa e vira uma linha do orçamento.",
        },
        {
          kind: "p",
          text: "A forma de configurá-los dentro de um orçamento base zero é criar uma categoria separada para cada gasto irregular, decidir seu custo total anual, dividir por doze e alocar esse valor todo mês. Seguros duas vezes ao ano, R$ 600 cada. Presentes em novembro e dezembro, R$ 800 no total. IPVA em março, R$ 400. Assinaturas anuais em janeiro, R$ 600. Férias no verão, R$ 3.000. As alocações mensais somam aproximadamente R$ 480. Esse é o custo, em fatias mensais, de um ano sem gastos surpresa. É um número pequeno, e esse é o ponto: os Sinking Funds fazem os gastos grandes parecerem pequenos.",
        },
        {
          kind: "p",
          text: "O efeito combinado do orçamento base zero mais os Sinking Funds é eliminar as duas fontes mais comuns de estresse orçamentário: o gasto grande surpresa e a sensação crescente de que o mês vai ficar apertado. O Sinking Fund cuida do primeiro. O acompanhamento por categorias cuida do segundo. O orçamento deixa de ser algo que você sobrevive e vira algo que você mantém. Nosso [guia mais profundo sobre Sinking Funds](/pt/blog/sinking-funds) percorre a mecânica em detalhe, incluindo como dimensioná-los e como priorizar quando não sobra espaço no orçamento para todos.",
        },
        {
          kind: "h2",
          id: "para-quem",
          text: "Para quem é?",
        },
        {
          kind: "p",
          text: "O orçamento base zero é perfeito para pessoas que amam detalhe, estrutura e planejamento financeiro ativo. É a metodologia central por trás de ferramentas como YNAB.",
        },
        {
          kind: "p",
          text: "Mais especificamente, o método tende a encaixar com pessoas que querem uma resposta clara e por escrito para a pergunta «o que faço com o próximo real?». Se você alguma vez fechou o app do banco se sentindo um pouco perdido, o método é para você. Também encaixa com pessoas que estão passando de um orçamento de sobrevivência para um orçamento de planejamento, porque força a diferença entre uma conta e uma meta a vir à tona. Uma conta é um valor fixo com data fixa. Uma meta é um valor flexível com data-alvo. Tratá-las igual é uma das razões mais comuns pelas quais os orçamentos falham.",
        },
        {
          kind: "h2",
          id: "nao-para-quem",
          text: "Para quem talvez não sirva",
        },
        {
          kind: "p",
          text: "Se planejar cada real parece restritivo demais ou esmagador, comece com a bem mais leve [regra 50/30/20](/pt/blog/50-30-20-rule). O orçamento base zero é um ótimo destino, mas não é uma linha de largada obrigatória.",
        },
        {
          kind: "p",
          text: "O outro grupo que pode ter dificuldade com o base zero é qualquer pessoa cuja renda seja tão instável que o plano mensal é construído sobre chutes. Se o salário varia mais que 40% de um mês para o outro, uma estrutura diferente (primeiro um Sinking Fund grande, depois o orçamento) costuma funcionar melhor. O [guia para orçamentar com renda baixa](/pt/blog/budgeting-on-a-low-income) cobre esse caso em detalhe. A boa notícia é que o orçamento base zero fica mais fácil quanto mais você usa, então até um usuário de encaixe baixo pode se graduar nele quando a renda estabilizar.",
        },
        {
          kind: "h2",
          id: "categorias-comuns",
          text: "Categorias comuns e como dimensioná-las",
        },
        {
          kind: "p",
          text: "A maioria dos orçamentos base zero compartilha um conjunto parecido de categorias. Os nomes exatos importam menos que a forma. A forma costuma ser: moradia e serviços (cerca de 30% a 40% da renda), alimentação e casa (10% a 15%), transporte (5% a 10%), seguros e serviço mínimo de dívida (5% a 10%), poupança e Sinking Funds (10% a 20%), gasto flexível (10% a 20%) e uma reserva discricionária (5% a 10%). As porcentagens exatas variam, mas a estrutura se mantém. Um orçamento com categorias demais esconde excessos. Um orçamento com categorias de mais cria fadiga de decisão. O ponto ideal costuma ficar entre 8 e 14 categorias.",
        },
        {
          kind: "p",
          text: "O tamanho de cada Sinking Fund depende do gasto que ele cobre. Pegue o custo anual total e divida por doze. Um seguro de R$ 1.200 vira R$ 100 por mês. Férias de R$ 3.000 viram R$ 250 por mês. Uma revisão do carro de R$ 800 vira R$ 65 por mês. Essas alocações parecem pequenas, que é o ponto. O ponto dos Sinking Funds é fazer os gastos grandes previsíveis parecerem alocações mensais pequenas. Quanto mais tempo você mantiver o sistema, mais natural isso fica, e menos o seu ano financeiro tem um único mês que te surpreenda.",
        },
        {
          kind: "h2",
          id: "erros-comuns",
          text: "Erros comuns e como evitá-los",
        },
        {
          kind: "ol",
          items: [
            "**Orçar por baixo as categorias elásticas.** A razão mais comum pela qual um orçamento base zero morre no primeiro mês. Use a média de três meses, não o número esperançoso. Se a média é R$ 800 para mercado, planeje R$ 800.",
            "**Pular a verificação semanal.** A verificação é o que mantém o plano honesto. Sem ela, o plano é uma lista de desejos. Com ela, o plano é um contrato que você mantém consigo mesmo.",
            "**Esquecer os irregulares.** Seguros, presentes, viagens, escola, médico. Os irregulares são onde se escondem as surpresas. A forma de eliminar a surpresa é alocar para eles todo mês, mesmo em quantidades pequenas.",
            "**Tratar o estouro como fracasso.** Estouro é dado. Mova dinheiro de outra categoria, ajuste o plano e continue. A regra de «rolar com os socos» é a que separa um orçamento base zero de longo prazo de um de três meses.",
            "**Construir um plano uma vez e nunca revisitar.** Um orçamento é um documento vivo. Se ele não muda, a vida para a qual foi desenhado mudou, e o orçamento não está mais em sintonia com a realidade. A reconstrução mensal é o que mantém essa sintonia.",
            "**Levar a meta a zero agressivamente.** Um orçamento que chega a zero é um orçamento sem reserva. Deixe uma pequena linha de «pronto para alocar» ou discricionária, mesmo que sejam apenas R$ 50. A reserva é o que absorve as surpresas que as categorias não captaram.",
          ],
        },
        {
          kind: "h2",
          id: "comparar-metodos",
          text: "Como o base zero se compara a outros métodos",
        },
        {
          kind: "p",
          text: "O orçamento base zero é um entre vários métodos de orçamento bem conhecidos. As diferenças importam porque determinam quanto tempo e quanta estrutura o método te pede.",
        },
        {
          kind: "p",
          text: "A [regra 50/30/20](/pt/blog/50-30-20-rule) divide a renda em três baldes percentuais: 50% para necessidades, 30% para desejos, 20% para futuro (poupança e dívida). É o método mais leve e o mais fácil de manter. A contrapartida é que as categorias dentro de cada balde continuam sendo decisão sua, o que significa que um estouro pode se esconder dentro do balde de desejos por muito tempo antes de se tornar visível. O orçamento base zero conserta isso dando a cada real uma categoria específica.",
        },
        {
          kind: "p",
          text: "O método dos envelopes (também chamado cash stuffing) é a versão em dinheiro do orçamento base zero. Cada categoria tem um envelope, e quando o envelope fica vazio, a categoria pausa pelo mês. A disciplina é a mesma do base zero; a diferença é que o dinheiro está em envelopes físicos em vez de em um app de acompanhamento. O método dos envelopes funciona bem para pessoas que gastam mais livremente quando tocam num cartão. O orçamento base zero funciona bem para pessoas que querem a flexibilidade dos pagamentos com cartão mas a disciplina do método dos envelopes. A maioria dos apps modernos de base zero, incluindo o Savlo, deixa você recriar a lógica dos envelopes digitalmente como «Spaces».",
        },
        {
          kind: "p",
          text: "O método percentual é parecido com o 50/30/20 mas com baldes customizados. Algumas pessoas usam 70/20/10 (gasto, poupança, caridade). Outras usam 60/30/10 (gasto, futuro, reserva). A vantagem é a flexibilidade. A desvantagem é que os baldes podem virar caixas de mistura que escondem o mesmo problema que o 50/30/20 esconde. O orçamento base zero leva a estrutura um nível mais fundo, de modo que o balde de gasto deixa de ser um número único e vira um conjunto de categorias com nome.",
        },
        {
          kind: "p",
          text: "O método pague-se primeiro (também chamado orçamento reverso) é o oposto do base zero. Você decide primeiro o número de poupança ou investimento, automatiza, e deixa o resto da renda fluir para o gasto sem um plano detalhado. É o método mais fácil de manter e o mais difícil de manter honesto. O orçamento base zero dá mais trabalho, mas te dá uma imagem muito mais clara de para onde o dinheiro vai.",
        },
        {
          kind: "p",
          text: "O método certo é o que encaixa na sua vida e na sua energia. O método mais leve que você ainda estará usando daqui a doze meses é o certo para você. A maioria das pessoas que experimentam o orçamento base zero uma vez nunca voltam para um método mais leve, porque a visibilidade e o controle são difíceis de largar. Mas um método mais leve usado por uma década é melhor que um método mais pesado usado por um mês.",
        },
        {
          kind: "h2",
          id: "primeiro-mes",
          text: "Um primeiro mês realista no base zero",
        },
        {
          kind: "p",
          text: "O primeiro mês com um orçamento base zero raramente é tranquilo. O plano leva mais tempo do que você esperava para construir, as categorias não estão totalmente certas e os números mudam à medida que o mês avança. O plano é para mudar. O erro é tratar o primeiro mês como um fracasso se ele não chega a zero no dia um. O primeiro mês realista é mais um rascunho do que uma versão final: te ensina quais deveriam ser as categorias, quais deveriam ser as metas dos Sinking Funds e como as categorias elásticas realmente se comportam. O segundo mês é quando o plano começa a parecer com o que você queria ter escrito desde o começo.",
        },
        {
          kind: "p",
          text: "Algumas dicas práticas para o primeiro mês. Primeiro, construa o plano no papel ou numa planilha antes de movê-lo para um app. O atrito de escrever à mão captura muitos erros que o app teria aceitado. Segundo, peça para outra pessoa olhar o plano, de preferência alguém que também gerencie um orçamento doméstico. Ela vai enxergar as lacunas que você não vê. Terceiro, não ajuste o plano nas primeiras três semanas. Deixe as categorias aguentarem ou estourarem. Os dados das primeiras três semanas são o que torna o plano do segundo mês preciso. Quarto, marque uma data para reconstruir. A reconstrução é a parte do mês que de fato fecha o ciclo.",
        },
        {
          kind: "p",
          text: "O primeiro mês realista é o mês em que você aprende que o orçamento é uma ferramenta para aprender, não uma ferramenta para controlar. Os dados que você coleta no mês um são o que faz o mês doze ser quase sem esforço. A maioria das pessoas que fica com o orçamento base zero por um ano dizem a mesma coisa: o orçamento deixou de ser algo que tinham que manter e virou algo de que não abririam mão.",
        },
        {
          kind: "h2",
          id: "seis-meses",
          text: "O que muda depois de seis meses de base zero",
        },
        {
          kind: "p",
          text: "No sexto mês, o plano geralmente já se estabilizou num ritmo. As categorias estão perto da forma final. As metas dos Sinking Funds estão perto da forma final. A reserva (a linha de «pronto para alocar») começa a parecer confortável. Os gastos surpresa já não surpreendem. A carga mental do orçamento caiu pela metade, porque o sistema já está na memória muscular.",
        },
        {
          kind: "p",
          text: "A virada que costuma acontecer por volta do mês seis é de «estou seguindo um plano» para «o plano está me seguindo». As categorias deixaram de ser uma restrição. São uma descrição da vida que você está vivendo. Aparece uma nova categoria de gasto (academia, atividade de um filho) e o sistema absorve sem drama. Uma categoria antiga encolhe (você não vai mais ao escritório) e o sistema absorve isso também. O plano está vivo. O plano é seu.",
        },
        {
          kind: "p",
          text: "A outra virada é a relação com o estouro. Nos primeiros meses, um estouro parecia um fracasso. No sexto mês, um estouro parece uma pergunta: qual categoria tem superávit este mês e eu posso mover dinheiro dali? Os dados deixaram de ser um veredicto e viraram uma ferramenta. O plano continua chegando a zero. O mês continua. A calma que o sistema deveria produzir começa a parecer realmente calma.",
        },
        {
          kind: "p",
          text: "A virada por volta do mês seis é também quando a maioria começa a se perguntar o que acontece se continuar. A resposta, para a maioria, é que o orçamento fica mais afiado a cada ano, os Sinking Funds cobrem mais e mais do ano, e a reserva de «pronto para alocar» cresce o suficiente para absorver um único mês ruim sem quebrar o plano. Esse é o arco longo do orçamento base zero: não um projeto de um mês, mas um upgrade plurianual da forma como você pensa sobre dinheiro.",
        },
        {
          kind: "h2",
          id: "revisao-anual",
          text: "A revisão anual que mantém o sistema honesto",
        },
        {
          kind: "p",
          text: "Uma vez por ano, o orçamento merece um olhar mais fundo do que a reconstrução mensal. A revisão anual é onde os dados dos últimos doze meses viram o plano dos próximos doze. A maioria faz no fim de dezembro ou começo de janeiro, quando o ano está fresco e o próximo está tomando forma. A revisão tem três partes.",
        },
        {
          kind: "p",
          text: "Primeiro, olhe as categorias que estouraram de forma consistente. Uma categoria que estoura todo mês não é um problema de excesso. É um problema de dimensionamento. A solução é aumentar a categoria, ou perguntar se a categoria tem a forma certa. Às vezes a solução correta é dividir uma categoria em duas. Uma categoria de «sair para comer» que estoura todo mês talvez seja na verdade uma de «sair para comer» e uma de «social». A divisão não reduz o gasto, mas torna o gasto honesto.",
        },
        {
          kind: "p",
          text: "Segundo, olhe as categorias que tiveram superávit de forma consistente. Uma categoria com três meses seguidos de superávit está sobre-financiada ou não é mais relevante. A solução é reduzi-la e mover o dinheiro liberado para uma meta, um Sinking Fund ou um pagamento de dívida. A revisão anual é o momento em que a forma do orçamento se atualiza com a forma da vida.",
        },
        {
          kind: "p",
          text: "Terceiro, olhe as metas. Quais Sinking Funds cresceram como você queria? Quais metas foram financiadas tarde? Quais metas não são mais relevantes? A revisão anual é o momento certo para aposentar uma meta que não é mais prioridade e adicionar uma nova que surgiu. Um orçamento é para acompanhar a vida, não a vida de três anos atrás.",
        },
        {
          kind: "h2",
          id: "rastreamento",
          text: "Dicas de rastreamento que tornam o base zero sustentável",
        },
        {
          kind: "p",
          text: "O maior determinante de se um orçamento base zero sobrevive é a facilidade de registrar uma transação. O atrito do passo de rastreamento é o que mata o sistema. Se registrar um café de R$ 8 leva mais que cinco segundos, o registro vai ser pulado. A solução é escolher um método de rastreamento que tenha o menor atrito possível.",
        },
        {
          kind: "p",
          text: "Os métodos de rastreamento mais sustentáveis, em ordem de atrito. Primeiro, um app com entrada por voz. Você abre o app, diz a despesa e o app registra. O tempo total está mais perto de dois segundos que de cinco. O custo é que o reconhecimento de voz nem sempre é perfeito, e a entrada às vezes vai precisar de uma edição rápida. Segundo, um widget de adição rápida na tela inicial do celular. Toque, digite o valor, escolha uma categoria, pronto. Tempo total: cinco segundos. Terceiro, um app de notas. Anote a despesa numa lista corrida e depois transfira para o orçamento uma vez por semana. O atrito é menor no momento, mas a transferência semanal é seu próprio tipo de trabalho.",
        },
        {
          kind: "p",
          text: "Seja qual for o método que você escolher, a regra é a mesma: registre a despesa no momento em que ela acontece, não na manhã seguinte, não no fim de semana seguinte. Quanto maior o vão entre o gasto e o registro, mais entradas você vai esquecer, e menos útil o orçamento fica. Um café de R$ 8 registrado é dado. Um café de R$ 8 esquecido é dinheiro que desaparece. A primeira versão do orçamento alimenta o sistema. A segunda alimenta a ilusão de que você sabe para onde o dinheiro vai.",
        },
        {
          kind: "h2",
          id: "aprofundando",
          text: "Um olhar mais profundo sobre as quatro regras na prática",
        },
        {
          kind: "p",
          text: "Uma coisa é conhecer as quatro regras do orçamento base zero. Outra é ver como elas se desenrolam ao longo de um ano de decisões reais. As quatro regras são: dê um trabalho a cada real, aceite suas despesas verdadeiras, role com os socos e envelheça seu dinheiro. A maioria das pessoas que mantêm o sistema depois do terceiro mês relatam que cada uma dessas regras aparece num ritmo diferente: a primeira é diária, a segunda é mensal, a terceira é semanal e a quarta é o arco longo que só fica visível depois de vários meses.",
        },
        {
          kind: "p",
          text: "A primeira regra, dê um trabalho a cada real, é a que move o ritual de planejamento. Cada real na conta tem uma categoria, e cada categoria tem um saldo. Quando chega uma transação, o saldo da categoria desce. Quando chega renda, as categorias se reabastecem. O trabalho acontece no começo do mês, quando o plano é reconstruído, e em qualquer momento que um novo real chega. A regra não é um evento único. É uma decisão contínua. Quanto mais vezes você toma a decisão, menos esforço ela exige. O plano vira memória muscular.",
        },
        {
          kind: "p",
          text: "A segunda regra, aceite suas despesas verdadeiras, é a que mais demora para parecer natural. O instinto é orçar só as contas que caem neste mês. A prática do orçamento base zero é orçar as contas que caem neste ano, distribuídas de forma uniforme entre os meses. A mudança é pequena no papel (algumas dezenas de reais por categoria por mês) e enorme na vida (sem mais gastos surpresa, sem mais taxas anuais que parecem emergências). O Sinking Fund é a forma estrutural desta regra. É onde a regra mora no orçamento.",
        },
        {
          kind: "p",
          text: "A terceira regra, role com os socos, é a que mais resistência gera nos primeiros meses e na qual mais se apoia no sexto mês. O instinto é tratar um estouro como um fracasso moral. A prática do orçamento base zero é tratar um estouro como dado. A categoria que estourou agora é uma fonte de informação. Ou foi dimensionada pequena demais (e a solução é redimensionar no mês que vem), ou o gasto foi um evento único (e a solução é mover dinheiro de uma categoria com superávit). A regra é a diferença entre um orçamento que sobrevive ao contato com a realidade e um orçamento que é abandonado no mês três.",
        },
        {
          kind: "p",
          text: "As quatro regras não são uma lista para memorizar. São uma descrição do comportamento que o sistema recompensa. No primeiro mês, você as segue com esforço. No sexto mês, você as segue por hábito. No décimo segundo mês, você para de notá-las, porque elas são o modo como o orçamento funciona. O sistema deixou de ser algo que você faz. É a forma como você pensa sobre dinheiro. Esse é o arco longo do orçamento base zero: um projeto de um mês que vira um upgrade plurianual.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          id: "perguntas",
          text: "Perguntas frequentes",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Um orçamento base zero significa que preciso gastar cada real?",
              a: "Não. O «zero» no nome se refere ao saldo não alocado, não à quantia gasta. A meta é atribuir cada real a um trabalho. O trabalho pode ser uma categoria de gasto, um Sinking Fund, uma meta de poupança ou um pagamento de dívida. A maioria dos meses termina com os reais alocados em sua maior parte gastos, mas alguns trabalhos (como a poupança) são desenhados para fazer o saldo crescer, não para diminuí-lo.",
            },
            {
              q: "Quanto tempo leva para manter um orçamento base zero por mês?",
              a: "O primeiro mês costuma levar entre sessenta e noventa minutos. No terceiro mês, a maioria consegue reconstruir o plano em trinta. A verificação semanal é de quinze a vinte minutos. A revisão anual, que compara o plano com o ano real, leva cerca de uma hora. O investimento total de tempo por ano é de aproximadamente quinze a vinte horas, menos do que a maioria gasta com serviços de streaming.",
            },
            {
              q: "Qual a diferença entre o orçamento base zero e a regra 50/30/20?",
              a: "A regra 50/30/20 divide a renda em três baldes percentuais (necessidades, desejos, futuro). É um bom ponto de partida. O orçamento base zero vai um nível mais fundo: atribui cada real a uma categoria ou meta específica dentro desses baldes. Se 50/30/20 é um mapa de alto nível, o base zero são as instruções curva a curva.",
            },
            {
              q: "E se eu não conseguir chegar a zero porque minhas despesas excedem a renda?",
              a: "Isso é um descompasso estrutural, não uma falha de orçamento. O primeiro movimento é olhar as categorias fixas maiores (moradia, transporte, mínimos de dívida) e ver se alguma pode ser renegociada. O segundo movimento é adicionar renda. O terceiro é pedir ajuda. O orçamento não conserta um descompasso estrutural, mas pode mostrá-lo com clareza, que é o primeiro passo para fechá-lo.",
            },
            {
              q: "O orçamento base zero é bom para casais?",
              a: "Sim, com um ajuste. A maioria dos casais mantém um pequeno conjunto de categorias conjuntas (moradia, mercado, poupança) e um pequeno conjunto de categorias pessoais (gasto pessoal, metas individuais). As categorias conjuntas são base zero juntas. As categorias pessoais são base zero individualmente. A conversa sobre quem financia o quê acontece uma vez por mês, durante a reconstrução.",
            },
            {
              q: "Posso usar o orçamento base zero sem um app?",
              a: "Sim. Uma planilha em branco com colunas para categoria, planejado, real e diferença é suficiente para rodar o método. Um caderno de papel também funciona. O app é útil para o rastreamento contínuo de despesas pequenas, mas a parte de planejamento do orçamento base zero pode ser feita em qualquer lugar, e muita gente mantém o método inteiro funcionando numa única página de um caderno por anos. A ferramenta certa é aquela com a qual você ainda vai estar usando no mês que vem.",
            },
          ],
        },
        {
          kind: "h2",
          id: "conclusao",
          text: "Um plano calmo e completo ao qual você pode voltar",
        },
        {
          kind: "p",
          text: "O orçamento base zero é uma forma de dar um trabalho a cada real, aceitar as despesas verdadeiras que aparecem algumas vezes por ano, rolar com os socos quando uma categoria estoura e envelhecer seu dinheiro para que a distância entre ganhar e gastar se amplie. O método não é para todos. Recompensa pessoas que gostam de estrutura e consistência, e é mais difícil de sustentar quando a renda é muito irregular. Para a maioria, vira o orçamento mais calmo que já mantiveram, e o mais fácil para o qual voltar depois de um mês ruim.",
        },
        {
          kind: "p",
          text: "Se você quer testar o método sem se comprometer com um novo app, rode em uma planilha por um mês. Se você quer uma ferramenta que respeite sua privacidade, não peça credenciais bancárias e funcione com as mesmas quatro regras, o Savlo está disponível no Android e em breve no iOS. Foi construído ao redor dos mesmos princípios: atribua cada real, aceite as despesas verdadeiras, role com os socos e envelheça seu dinheiro. O resto deste blog aprofunda ideias relacionadas, desde a [filosofia de orçamento mais ampla](/pt/blog/how-to-budget-money) até a [mecânica prática dos Sinking Funds](/pt/blog/sinking-funds), se você quiser continuar.",
        },
      ],
    },
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
  {
    slug: "how-to-budget-money",
    title:
      "Como fazer um orçamento de dinheiro: um guia calmo e completo para iniciantes",
    description:
      "Um guia claro e sem julgamentos para aprender a orçar do zero. Conheça os quatro números que movem qualquer orçamento, três estilos que realmente funcionam e como registrar gastos sem se esgotar.",
    category: fromEnglish("how-to-budget-money").category,
    date: fromEnglish("how-to-budget-money").date,
    dateModified: fromEnglish("how-to-budget-money").dateModified,
    keywords: [
      "como fazer um orçamento de dinheiro",
      "orçamento para iniciantes",
      "como fazer um orçamento",
      "orçamento mensal",
      "gestão de dinheiro iniciantes",
      "planejador de orçamento",
      "regra 50 30 20",
      "orçamento base zero",
      "como registrar gastos",
      "métodos de orçamento",
    ],
    readingTime: 20,
    summary: [
      "Fazer um orçamento não é castigo nem teste de força de vontade. É um plano curto que você assina com você mesmo antes de gastar, e a diferença entre dirigir com mapa ou apenas pelo retrovisor.",
      "Este guia percorre, em ordem, como pensar o dinheiro sem se assustar, como construir um orçamento que você vai realmente manter, como registrar gastos sem que isso tome o seu dia, e como se recuperar quando a vida quebra o plano.",
    ],
    sections: [
      {
        heading: "O que orçar realmente significa",
        body: [
          "Um orçamento útil não é uma planilha perfeita nem uma sequência a manter. É uma promessa curta e escrita que você faz a si mesmo sobre como vai usar o dinheiro no próximo mês.",
          "Os orçamentos que falham quase sempre o fazem por três razões: tentam registrar cada centavo, são construídos sobre o salário bruto em vez do líquido, ou só são revisados no fim do mês, quando o trem já partiu. Nenhum desses problemas fala de você.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Fazer um orçamento de dinheiro é uma das habilidades mais práticas que existem. Não é uma dieta financeira, não é um teste de força de vontade e não precisa virar um ritual de domingo à noite com planilhas. É um plano curto, honesto e fácil de ajustar, que muda a forma como você olha para o que entra e o que sai da sua conta todos os meses. A diferença entre orçar e não orçar é a diferença entre dirigir com mapa ou apenas pelo retrovisor. Os dois te levam a algum lugar, mas só um deles deixa você escolher o destino.",
        },
        {
          kind: "p",
          text: "Este guia foi escrito para quem nunca orçou, para quem já tentou e desistiu, e para quem mantém um orçamento antigo que já não representa a vida atual. Você vai encontrar aqui os quatro números que movem qualquer orçamento, três estilos que funcionam, um passo a passo de sete passos para começar do zero, e um sistema de acompanhamento que cabe em uma tarde por semana. Em vez de jargão, usamos exemplos concretos. Em vez de promessas grandiosas, mostramos o que realmente acontece na maioria dos meses: você vai estourar alguma categoria, e tudo bem. O plano existe justamente para te ajudar a voltar.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "O Savlo está disponível no Android e em breve chega ao iOS. Você pode aplicar tudo deste guia em uma planilha, em um caderno ou em qualquer app que respeite sua privacidade. Quando decidir experimentar o Savlo, ele foi pensado exatamente para ser esse tipo de companheiro: simples, calmo e sem cobrança de credenciais bancárias.",
        },
        {
          kind: "h2",
          text: "O que orçar realmente significa",
          id: "o-que-orcar-realmente-significa",
        },
        {
          kind: "p",
          text: "Orçar é tomar uma decisão consciente antes de gastar. Não é cortar, não é punir e não é viver no medo do próximo boleto. É simplesmente dizer, com clareza, para onde o dinheiro vai trabalhar este mês, em vez de descobrir no extrato do cartão.",
        },
        {
          kind: "p",
          text: "Quando o orçamento é bem-feito, ele funciona como uma promessa que você assina com você mesmo. Se a promessa for vaga, do tipo “vou gastar menos”, ela quebra. Se for específica, do tipo “vou reservar seiscentos reais para emergência e quatrocentos para lazer”, ela tem chance de sobreviver. Um orçamento é um acordo entre a sua vida atual e a vida que você quer construir nos próximos doze meses.",
        },
        {
          kind: "p",
          text: "Por isso um bom orçamento não começa em uma planilha. Começa em uma conversa honesta sobre o que te preocupa: a fatura do cartão que nunca cabe no salário, a sensação de não saber para onde foi o dinheiro, o medo de não ter como lidar com um imprevisto. A planilha é só a forma de registrar essa conversa de maneira útil.",
        },
        {
          kind: "h3",
          text: "Por que a maioria dos orçamentos falha",
          id: "por-que-orcamentos-falham",
        },
        {
          kind: "p",
          text: "Os orçamentos costumam falhar por três razões, e nenhuma delas tem a ver com a sua disciplina. A primeira é a tentativa de registrar cada centavo. A segunda é construir o plano em cima do salário bruto, em vez do líquido. A terceira é revisar tudo só no fim do mês, quando o estrago já aconteceu. Quando o orçamento nasce cansado, ele morre cansado.",
        },
        {
          kind: "p",
          text: "Há também um componente emocional. A maioria das pessoas foi ensinada a ver dinheiro como um tema de força de vontade. Quando o orçamento aperta, a leitura automática é “eu fracassei”. Mas isso confunde a ferramenta com o operador. Um martelo não é responsável pelo prego torto, e um orçamento não é responsável pelo seu cansaço. Ele é um mapa, não um juiz.",
        },
        {
          kind: "p",
          text: "O objetivo deste guia é te entregar um mapa simples. Se você seguir os passos, vai ter um plano que cabe em uma folha de papel e que funciona em meses bons e em meses ruins. Se algo der errado, a gente também mostra como voltar.",
        },
        {
          kind: "h2",
          text: "Os quatro números que movem qualquer orçamento",
          id: "quatro-numeros",
        },
        {
          kind: "p",
          text: "Todo orçamento, do mais detalhado ao mais simples, sai dos mesmos quatro números. Quando você aprende a enxergar esses números na sua vida, já entende mais sobre o seu dinheiro do que a maioria das pessoas. Eles são: receita líquida, gastos fixos, gastos variáveis e taxa de poupança.",
        },
        {
          kind: "h3",
          text: "Receita líquida",
          id: "receita-liquida",
        },
        {
          kind: "p",
          text: "É o dinheiro que cai de fato na sua conta, depois dos impostos e das contribuições obrigatórias. A armadilha clássica é orçar com o salário bruto, que é o número que aparece no contrato, mas que nunca aparece no banco. Orçar com o bruto cria uma diferença silenciosa de dez a vinte por cento entre o que você acha que tem e o que de fato entra. Essa diferença é, sozinha, a maior responsável pela sensação de que o dinheiro evapora.",
        },
        {
          kind: "h3",
          text: "Gastos fixos",
          id: "gastos-fixos",
        },
        {
          kind: "p",
          text: "São as despesas que se repetem todo mês, com valor parecido: aluguel ou financiamento, condomínio, contas de luz, água e internet, parcelas de financiamento, mensalidades, assinaturas. Liste tudo o que é pago por débito automático, boleto com código de barras ou cartão de crédito com data fixa. Some. Esse é o seu ponto de partida. Os gastos fixos definem o que sobra e, portanto, o que dá para direcionar.",
        },
        {
          kind: "h3",
          text: "Gastos variáveis",
          id: "gastos-variaveis",
        },
        {
          kind: "p",
          text: "Aqui mora a flexibilidade. Mercado, transporte, lazer, roupas, saídas, presentes,delivery. São os gastos que mudam de valor de um mês para o outro e que, ao mesmo tempo, são onde mora a maior parte da ansiedade financeira. A razão é simples: como o valor varia, a sensação de controle também varia. Um bom orçamento trata os gastos variáveis com duas perguntas: qual é o valor médio e qual é o teto confortável.",
        },
        {
          kind: "h3",
          text: "Taxa de poupança",
          id: "taxa-de-poupanca",
        },
        {
          kind: "p",
          text: "É a parte da receita líquida que sobra depois dos gastos fixos e variáveis. No começo, ela pode ser negativa. Isso não é fracasso, é diagnóstico. Uma taxa de poupança negativa te diz que o problema não é poupar, é ajustar uma das três outras variáveis. Pode ser cortar um gasto fixo, reduzir um gasto variável ou aumentar a receita. O importante é olhar o número de frente. Orçar é, em grande parte, decidir uma taxa de poupança que te faça dormir tranquilo.",
        },
        {
          kind: "h2",
          text: "Três estilos de orçamento que funcionam",
          id: "tres-estilos",
        },
        {
          kind: "p",
          text: "Não existe um único método certo. Existem métodos diferentes para temperamentos e ritmos de vida diferentes. Apresentamos três que sobreviveram ao teste do tempo, e indicamos quando cada um costuma funcionar melhor.",
        },
        {
          kind: "h3",
          text: "Regra 50/30/20",
          id: "regra-50-30-20",
        },
        {
          kind: "p",
          text: "A regra 50/30/20 reparte a receita líquida em três fatias simples: cinquenta por cento para necessidades, trinta por cento para desejos e vinte por cento para poupança e para acelerar o pagamento de dívidas acima do mínimo. A beleza da regra é a sua proporção. Em vez de chutar valores por categoria, você decide prioridades. Funciona especialmente bem para quem está começando e quer um ponto de partida sem travar na frente da planilha.",
        },
        {
          kind: "p",
          text: "Onde a regra pode apertar é quando a fatia de necessidades está acima de cinquenta por cento. Aí a proporção trava e a poupança some. Nesse cenário, em vez de abandonar o método, o caminho útil é olhar a fatia de necessidades: geralmente é um aluguel acima do orçamento, um financiamento de carro pesado ou parcelas que ocupam demais. Cortar um gasto fixo libera mais do que cortar vinte cafés por mês. Por isso, entender os [gastos fixos e variáveis](#gastos-fixos) é a base de qualquer plano.",
        },
        {
          kind: "h3",
          text: "Orçamento base zero",
          id: "orcamento-base-zero",
        },
        {
          kind: "p",
          text: "O orçamento base zero atribui uma tarefa para cada unidade monetária antes do mês começar. Quando o mês começa, não sobra nada sem destino. Se sobrar, esse excedente vai para um objetivo: aumentar a reserva, acelerar uma dívida, ou guardar para uma meta específica. Esse método é ideal para quem se incomoda com a sensação de dinheiro que simplesmente evapora. É também o método preferido de pessoas que gostam de ver o todo do mês, em vez de improvisar no caminho.",
        },
        {
          kind: "p",
          text: "A desvantagem é o tempo investido no início de cada mês. Para a maioria das pessoas, vale a pena uma hora de planejamento para ganhar doze horas de paz. Se você se identifica com essa lógica, vale ler em mais detalhe o nosso [guia de orçamento base zero](/pt/blog/zero-based-budgeting).",
        },
        {
          kind: "h3",
          text: "Método de envelopes e Spaces",
          id: "metodo-envelopes",
        },
        {
          kind: "p",
          text: "O método de envelopes separa o dinheiro em categorias físicas: um envelope para mercado, outro para transporte, outro para lazer. Quando o envelope esvazia, a categoria pausa até o mês seguinte. A versão digital, chamada de Spaces, faz a mesma coisa sem o dinheiro vivo: cada categoria tem o seu saldo virtual, e o app cuida da parte chata. O Savlo aplica exatamente essa ideia, com Spaces que se preenchem no início do mês e se esvaziam com o passar dos dias. Se você se interessar, vale explorar como [funcionam os Spaces no Savlo](/pt/blog/sinking-funds), que são uma forma de envelope estendida para metas maiores como seguros anuais ou viagens.",
        },
        {
          kind: "h2",
          text: "Sete passos para construir um orçamento de dinheiro do zero",
          id: "sete-passos",
        },
        {
          kind: "p",
          text: "Chegou a hora de colocar a mão na massa. Os passos abaixo funcionam tanto para quem nunca orçou quanto para quem está reconstruindo o orçamento depois de um período turbulento. Reserve entre sessenta e noventa minutos em um momento tranquilo, com café, calculadora e o extrato dos últimos três meses à disposição. A ideia não é buscar precisão cirúrgica, e sim clareza.",
        },
        {
          kind: "ol",
          items: [
            "**Reúna os extratos dos últimos três meses.** Imprima ou abra no celular os extratos da conta principal e do cartão de crédito. Três meses é o mínimo para enxergar sazonalidades, como contas que vêm a cada dois meses ou gastos de estação.",
            "**Calcule a sua receita líquida real.** Some todos os depósitos que caíram nos últimos três meses e divida por três. Use a média dos últimos meses como base. Se a sua renda é variável, use o mês mais baixo dos últimos seis, não a média. O objetivo é não orçar com otimismo.",
            "**Liste os gastos fixos.** Some aluguel, contas, parcelas, mensalidades, assinaturas, transporte fixo. Esse valor é o que sai antes mesmo de o mês começar. É o seu custo de existir. Ele define a fatia que sobra para o resto.",
            "**Liste os gastos variáveis médios.** Olhe para o extrato e agrupe em três a seis categorias amplas: mercado, transporte, lazer, saúde, pessoais, outros. Some cada categoria. Você vai descobrir onde a maior parte da variável vai. Não se assuste com o que aparecer.",
            "**Defina uma taxa de poupança possível.** Pegue a receita líquida, subtraia os fixos, subtraia os variáveis médios, e veja o que sobra. Se sobrar algo, é o quanto você pode guardar ou usar para acelerar dívidas. Se não sobrar, volte para os fixos e veja o que pode ser renegociado, ou para os variáveis e veja o que pode ser comprimido sem sofrimento.",
            "**Atribua cada real a um destino.** Distribua a sobra entre reserva de emergência, pagamento antecipado de dívidas, metas de médio prazo e uma categoria de prazer garantido. A categoria de prazer é tão importante quanto as outras. Um orçamento sem diversão quebra na primeira semana.",
            "**Marque uma revisão semanal de vinte minutos.** Todo domingo, ou em um dia fixo, abra o plano, veja o que mudou, ajuste o que precisa, siga em frente. A revisão semanal é o que separa um orçamento que dura um mês de um orçamento que dura anos.",
          ],
        },
        {
          kind: "callout",
          tone: "info",
          text: "Se você nunca passou por esse processo antes, o simples fato de completar os três primeiros passos já te coloca em uma posição melhor do que a maioria. A maior parte do ganho está no início, quando o dinheiro deixa de ser abstrato.",
        },
        {
          kind: "h2",
          text: "Como registrar gastos sem se esgotar",
          id: "como-registrar-gastos",
        },
        {
          kind: "p",
          text: "Depois de construir o plano, a segunda parte da vida do orçamento é o registro. É aqui que muita gente trava, porque transformar a teoria em prática exige um método que não vire mais uma obrigação. A boa notícia é que existem três caminhos hoje, e você pode combinar dois deles sem culpa. O importante não é a perfeição, é a constância.",
        },
        {
          kind: "h3",
          text: "Registro por voz",
          id: "registro-por-voz",
        },
        {
          kind: "p",
          text: "O registro por voz é a forma mais rápida de capturar um gasto no momento. Em vez de abrir o app, procurar a categoria certa e digitar o valor, você diz uma frase curta como “almoço trinta e dois reais no cartão” e a movimentação aparece pronta. Esse caminho é especialmente útil para quem tem uma rotina corrida, comanda o orçamento de cabeça enquanto caminha ou dirige, e não quer perder a chance de registrar enquanto a memória está fresca. Para quem trabalha por fora ou tem renda variável, [registrar gastos por voz](/pt/blog/voice-expense-tracking) reduz o atrito a ponto de virar hábito.",
        },
        {
          kind: "h3",
          text: "Registro manual",
          id: "registro-manual",
        },
        {
          kind: "p",
          text: "O registro manual, feito com calma à noite ou na revisão semanal, é a forma mais antiga e ainda uma das mais sólidas. A vantagem é a consciência: digitar cada gasto te obriga a olhar para ele, e olhar já é metade do trabalho. A desvantagem é o tempo e o esquecimento. Por isso, o registro manual funciona melhor como complemento, não como método único. Reserve a voz para o que acontece fora de casa e o manual para a revisão semanal.",
        },
        {
          kind: "h3",
          text: "Importação de CSV",
          id: "importacao-csv",
        },
        {
          kind: "p",
          text: "A importação de CSV fica no meio termo entre o automático e o manual. Você entra no site do seu banco, baixa o arquivo de movimentações e sobe no app. É um processo que leva alguns minutos e que não compartilha credenciais com agregadores, nem permite sincronização contínua. É uma forma útil para quem quer ter a visão completa do mês, sem confiar a leitura do extrato a um terceiro. É também a postura padrão de privacidade do Savlo.",
        },
        {
          kind: "h2",
          text: "Como lidar com renda variável",
          id: "renda-variavel",
        },
        {
          kind: "p",
          text: "Se você é freelancer, autônomo, trabalha com comissões, dirige um aplicativo ou tem uma renda que muda todo mês, o orçamento clássico não vai te servir diretamente. A armadilha é orçar com a média e, nos meses ruins, descobrir que a média não estava lá. A solução é construir o orçamento pelo piso, não pelo teto.",
        },
        {
          kind: "p",
          text: "Defina um valor-base mensal, que é o mínimo que você recebe de forma consistente nos últimos seis meses, e construa o orçamento inteiro em torno desse valor. Tudo o que entrar a mais vira uma decisão consciente: vai para a reserva, acelera uma dívida ou financia um objetivo. Com o tempo, você vai perceber que os meses altos financiam os meses baixos, e o estresse mensal deixa de existir.",
        },
        {
          kind: "p",
          text: "Uma técnica útil é abrir um Space específico para a renda variável, onde você deposita o excedente dos meses bons e usa para cobrir os meses fracos. Isso transforma a irregularidade em um problema de fluxo de caixa, em vez de um problema emocional. Se você recebe em reais mas gasta em parte com compromissos que sobem todo ano, é só aplicar o piso mais recente, com revisão trimestral. A flexibilidade está no método, não na disciplina.",
        },
        {
          kind: "h2",
          text: "O reset de sete dias",
          id: "reset-sete-dias",
        },
        {
          kind: "p",
          text: "Você vai estourar o orçamento. Não é uma possibilidade, é uma certeza. Toda pessoa que mantém um orçamento há mais de um ano já estourou, várias vezes. A diferença entre quem mantém o sistema por décadas e quem abandona em três meses é o que acontece depois do estouro.",
        },
        {
          kind: "p",
          text: "Construa um reset de sete dias. No dia em que notar o excesso, espere uma semana. Sente-se por vinte minutos com o plano e o extrato, e responda a três perguntas com calma: o que aconteceu, qual categoria absorveu o impacto, e qual mudança pequena teria evitado isso no mês seguinte. A regra de ouro é não tomar nenhuma decisão financeira nas vinte e quatro horas depois de perceber o estouro. Espere, processe, ajuste.",
        },
        {
          kind: "p",
          text: "Esse pequeno intervalo transforma a reação em revisão. Em vez de cortar tudo por raiva e abandonar o plano por cansaço, você ajusta uma ou duas coisas. As pessoas que mantêm o orçamento por anos não são as que nunca erram. São as que, em média, se recuperam em uma semana e seguem em frente.",
        },
        {
          kind: "h2",
          text: "Reserva de emergência versus Sinking Funds",
          id: "reserva-vs-sinking",
        },
        {
          kind: "p",
          text: "A reserva de emergência e os Sinking Funds são as duas redes de proteção que sustentam o orçamento em meses ruins. A confusão entre os dois é uma das causas mais comuns de orçamento que parece funcionar no papel, mas falha na vida real.",
        },
        {
          kind: "p",
          text: "A reserva de emergência cobre o imprevisível: perda de emprego, evento médico, reparo urgente, troca de equipamento. A meta clássica é de três a seis meses de gastos fixos, em uma conta de alta liquidez, separada do dinheiro do dia a dia. Ela é o seu seguro contra a vida dando errado de surpresa.",
        },
        {
          kind: "p",
          text: "Os Sinking Funds transformam o previsível em rotina. Seguro do carro, IPTU, presentes de fim de ano, férias, matrículas escolares, franquias médicas conhecidas: tudo o que você sabe que vai acontecer, mas que, se não for planejado, parece um imprevisto. A ideia é dividir o valor total pelo número de meses que faltam e reservar uma fração por mês. Quando o evento chega, o dinheiro já está lá, esperando.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "A ordem importa. Construa primeiro a reserva mínima de emergência, equivalente a um mês de fixos. Depois, abra Sinking Funds para os eventos previsíveis dos próximos doze meses. Por último, amplie a reserva para o alvo de três a seis meses. Esse caminho evita o erro clássico de tentar encher a reserva enorme enquanto o seguro do carro vence e leva o cartão junto.",
        },
        {
          kind: "h2",
          text: "A psicologia por trás de um orçamento que dura",
          id: "psicologia",
        },
        {
          kind: "p",
          text: "Um orçamento dura quando ele respeita a sua vida emocional. Não é a planilha que quebra: é a relação com a planilha. Se o sistema envergonha, a resposta natural é evitá-lo. Se o sistema incentiva pequenos ajustes, ele vira rotina. A diferença mora em três hábitos:",
        },
        {
          kind: "p",
          text: "O primeiro hábito é separar a pessoa do número. O saldo da conta não é um boletim escolar. Um mês ruim não é prova de incompetência. Ver o orçamento como um espelho, e não como um juiz, muda a forma como você reage a um estouro. Você olha para o número e pergunta o que ele está te ensinando, em vez de o que ele está te cobrando.",
        },
        {
          kind: "p",
          text: "O segundo hábito é celebrar o progresso discreto. Completar três meses com o plano funcionando, cortar uma assinatura que ninguém usava, juntar a primeira reserva, são vitórias reais. Mas a cabeça tende a ignorá-las porque são pequenas. Anotar, mesmo que em uma linha no fim do mês, ajuda o cérebro a registrar o que está funcionando. O que é reconhecido, é repetido.",
        },
        {
          kind: "p",
          text: "O terceiro hábito é conviver com a imperfeição. Um orçamento perfeito no papel, mas que gera estresse constante, vai ser abandonado. Um orçamento com cinco por cento de gordura, que te deixa dormir tranquilo, vai ser mantido. Otimize para constância, não para precisão. A melhor ferramenta de orçamento é aquela que você ainda está usando no ano que vem.",
        },
        {
          kind: "h2",
          text: "Oito erros comuns de orçamento que custam caro",
          id: "oito-erros",
        },
        {
          kind: "p",
          text: "Erros de orçamento não são sinais de incompetência, são sinais de método. Quase todos já cometemos alguns deles. Reconhecer o erro é a metade do conserto. A outra metade é trocar por um hábito mais simples. A lista abaixo cobre os mais comuns, em ordem de impacto.",
        },
        {
          kind: "ol",
          items: [
            "**Orçar com o salário bruto.** Use sempre o líquido, ou o piso confiável nos últimos seis meses para renda variável.",
            "**Tentar registrar cada centavo.** O objetivo do registro é clareza para a próxima decisão, não onisciência. Três a seis categorias amplas bastam.",
            "**Confundir o cartão de crédito com a sua renda.** O cartão é uma ferramenta de prazo, não de renda. Pagar o total da fatura todo mês é a única forma de ele trabalhar a seu favor.",
            "**Não separar reserva de emergência de Sinking Funds.** Os dois têm funções diferentes e precisam de espaços diferentes no orçamento.",
            "**Pular a revisão semanal.** A revisão é o que transforma um plano em hábito. Sem ela, o orçamento vira uma promessa esquecida.",
            "**Cortar lazer por completo.** Um orçamento sem diversão quebra em algumas semanas. Mantenha uma categoria de prazer garantido, mesmo que pequena.",
            "**Mudar tudo ao mesmo tempo quando estoura.** Trocar várias variáveis de uma vez gera cansaço e sensação de fracasso. Ajuste uma coisa por vez.",
            "**Esconder o orçamento do parceiro ou da família.** Um orçamento pessoal funciona para gastos pessoais. Quando a vida é compartilhada, o plano precisa ser compartilhado também, ainda que cada um mantenha o seu espaço.",
          ],
        },
        {
          kind: "h2",
          text: "Ferramentas que ajudam a manter o plano",
          id: "ferramentas",
        },
        {
          kind: "p",
          text: "A ferramenta certa não é a que tem mais funções, é a que você realmente usa. Existem três caminhos clássicos. A planilha, com toda a flexibilidade do mundo e zero ajuda. O caderno, com toda a simplicidade e a vantagem de te obrigar a pensar. E o app, que automatiza a parte chata e te lembra de revisar.",
        },
        {
          kind: "p",
          text: "Se você optar por um app, vale procurar por três qualidades: privacidade por padrão, sem vinculação obrigatória de conta bancária, e foco em registro simples. Muitos aplicativos hoje pedem credenciais bancárias para sincronizar tudo automaticamente. Essa escolha tem custo: você entrega a leitura do seu extrato a terceiros e abre espaço para vazamentos e vendas de dados. Para quem prefere manter esse limite, o caminho é registrar à mão, importar CSV do banco ou usar voz local para categorizar.",
        },
        {
          kind: "p",
          text: "Se você está começando agora e não quer tomar nenhuma decisão sobre ferramenta, faça o seguinte: pegue uma folha A4, divida em três colunas, escreva receita, fixos e variáveis com lápis, e revise no domingo. Em três meses, se o método continuar, vale migrar para uma ferramenta que te ajude a não perder o hábito. Não invente ferramenta antes de ter hábito.",
        },
        {
          kind: "h2",
          text: "Como manter a constância por mais de um ano",
          id: "manter-constancia",
        },
        {
          kind: "p",
          text: "A maioria das pessoas abandona o orçamento entre o segundo e o quarto mês. A razão não é falha de caráter, é a forma como o plano foi montado. Planas muito rígidos demais morrem de rigidez. Planos frouxos demais morrem de irrelevância. A constância mora no meio termo, em quatro compromissos simples.",
        },
        {
          kind: "p",
          text: "O primeiro é revisar todo domingo, por vinte minutos. Não precisa ser nada sofisticado. Olhe os números, ajuste o que precisa, siga em frente. A revisão semanal é o que faz o plano continuar sendo seu, e não um documento que você escreveu em janeiro e nunca mais abriu.",
        },
        {
          kind: "p",
          text: "O segundo é não mexer no plano por raiva. Quando o mês é ruim, a tentação é cortar tudo de uma vez. Não faça isso. Espere sete dias, revise com calma, ajuste uma coisa. Decisões tomadas com raiva quase sempre precisam ser desfeitas com arrependimento.",
        },
        {
          kind: "p",
          text: "O terceiro é deixar o plano visível. Pode ser no celular, pode ser em um papel colado na geladeira, pode ser no app de notas. O que não pode acontecer é o plano virar um arquivo no fundo da pasta. O que está visível é revisado. O que está escondido é esquecido.",
        },
        {
          kind: "p",
          text: "O quarto é lembrar que o orçamento é um meio, não um fim. O fim é dormir tranquilo, ter uma reserva para imprevistos, e poder dizer sim para o que importa. Quando o plano começa a atrapalhar isso, alguma coisa está errada no plano, e não na sua vida. Volte, ajuste, siga em frente.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Perguntas frequentes sobre orçamento de dinheiro",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Quanto dinheiro eu preciso para começar um orçamento?",
              a: "Nenhum valor mínimo. Um orçamento começa com o que você já tem. O que ele pede é honestidade, não abundância. Se hoje a sua renda é apertada, o orçamento vai te mostrar onde o pouco que entra está indo, e esse já é um ganho enorme.",
            },
            {
              q: "Com que frequência eu preciso revisar o orçamento?",
              a: "Uma vez por semana, por vinte minutos, é o suficiente para a maioria das pessoas. A revisão semanal é o que transforma um plano em hábito. Se um mês for muito instável, revise duas vezes. Em meses calmos, quinzenalmente pode bastar.",
            },
            {
              q: "Devo orçar com salário bruto ou líquido?",
              a: "Sempre com o líquido. O líquido é o que cai de fato na sua conta. Orçar com o bruto cria uma diferença silenciosa de dez a vinte por cento entre o que você acha que tem e o que de fato entra. Para renda variável, use o mês mais baixo dos últimos seis meses como base.",
            },
            {
              q: "E se eu estourar o orçamento?",
              a: "Trate o estouro como um sinal do plano, não como sinal de fracasso pessoal. Espere sete dias, revise com calma, ajuste uma ou duas variáveis, e siga em frente. As pessoas que mantêm o orçamento por anos não são as que nunca estouram. São as que, em média, se recuperam em uma semana.",
            },
            {
              q: "Qual o melhor método de orçamento para iniciantes?",
              a: "A regra 50/30/20 é o ponto de partida mais simples, porque trabalha com proporções, não com valores. Para quem prefere ver o todo do mês, o orçamento base zero é mais completo, mas exige uma hora de planejamento no início de cada mês. Para quem se incomoda com a sensação de dinheiro que evapora, o método de envelopes, ou Spaces, funciona especialmente bem.",
            },
            {
              q: "Preciso de um aplicativo para manter o orçamento?",
              a: "Não. Você pode usar planilha, caderno ou qualquer outro método. Se decidir usar um app, prefira os que não pedem credenciais bancárias, que respeitam a sua privacidade, e que facilitam o registro à mão, por voz ou via CSV. A ferramenta certa é a que você vai realmente usar daqui a um ano.",
            },
            {
              q: "Como começo a construir a reserva de emergência?",
              a: "Comece pequeno. O objetivo da primeira meta é um mês de gastos fixos, e não seis. Quando esse primeiro mês estiver na conta, o seu emocional já muda. A partir dali, amplie a reserva até três a seis meses em incrementos que cabem no orçamento. O importante é começar, não terminar de uma vez.",
            },
            {
              q: "Orçamento funciona para quem tem renda variável?",
              a: "Funciona, e talvez funcione ainda melhor, porque te obriga a usar o piso em vez da média. Defina um valor-base mensal, que é o mínimo que você recebe de forma consistente, e construa o plano em torno desse valor. Tudo o que entrar a mais vira decisão consciente: vai para a reserva, acelera uma dívida, ou financia um objetivo.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Conclusão: um orçamento simples vale mais do que um plano perfeito",
          id: "conclusao",
        },
        {
          kind: "p",
          text: "Um orçamento de dinheiro não precisa ser complexo para funcionar. Ele precisa ser honesto, caber na sua vida e ter espaço para ajustes. Quando o plano é simples, ele vira hábito. Quando vira hábito, ele te devolve uma coisa rara: a sensação de que o dinheiro está trabalhando a seu favor, e não contra você.",
        },
        {
          kind: "p",
          text: "Comece pelos quatro números. Escolha um estilo. Monte os sete passos. Reserve vinte minutos no domingo. Quando o primeiro mês fechar, ajuste duas coisas. Quando o segundo mês fechar, ajuste mais uma. Em seis meses, você vai olhar para trás e perceber que o plano atual não se parece em nada com aquele rascunho tímido do primeiro dia. E tudo bem. Esse é o ponto: o orçamento cresce com você, não a sua obrigação com ele.",
        },
        {
          kind: "p",
          text: "Se você quer aplicar o que viu aqui em uma ferramenta que respeita a sua privacidade, o Savlo está disponível no Android e em breve chega ao iOS. Ele foi pensado exatamente para ser esse tipo de companheiro: simples, calmo, sem cobrança de credenciais bancárias, com Spaces, registro por voz e importação de CSV, para você colocar a teoria em prática sem se perder no processo. A melhor ferramenta de orçamento é aquela que você ainda está usando no ano que vem.",
        },
      ],
    },
  },
  {
    slug: "budgeting-on-a-low-income",
    title:
      "Como fazer um orçamento com renda baixa: um guia realista, passo a passo, que de verdade funciona",
    description:
      "Um guia sem julgamentos, passo a passo, para orçar com renda baixa. Aprenda a construir um pequeno colchão, travar os inegociáveis e estancar o sangramento quando as contas não fecham.",
    category: fromEnglish("budgeting-on-a-low-income").category,
    date: fromEnglish("budgeting-on-a-low-income").date,
    dateModified: fromEnglish("budgeting-on-a-low-income").dateModified,
    keywords: [
      "orçamento com renda baixa",
      "orçamento com pouco dinheiro",
      "como fazer orçamento com renda baixa",
      "orçamento quando está quebrado",
      "orçamento com dinheiro apertado",
      "gestão financeira renda baixa",
      "orçamento apertado",
      "orçamento com renda pequena",
      "sem margem de poupança",
      "sobreviver com renda baixa",
      "dinheiro com orçamento apertado",
    ],
    readingTime: 20,
    summary: [
      "Fazer um orçamento com renda baixa tem ofício próprio. A maioria dos conselhos assume uma margem que nem sempre existe, e por isso soa como porta fechada na cara.",
      "Este guia propõe sete passos realistas, sem culpa, para cuidar do que você tem, construir o menor colchão possível e estancar o sangramento quando as contas não fecham. Sete passos, sem vergonha, e alguns hábitos que cabem em um orçamento apertado.",
    ],
    sections: [
      {
        heading: "O que significa realmente orçar com renda baixa",
        body: [
          "«Renda baixa» não é um número único. Pode significar viver paycheck a paycheck com um salário estável que simplesmente não estica. Pode significar trabalho eventual em que o mês passado foi bom e este não. Pode significar estar entre contratos, sustentar filhos com uma renda, ou ganhar em uma moeda que não bate com o custo de vida da sua cidade. A forma muda, mas a experiência vivida é parecida: cada real tem um destino antes de chegar, e a maioria desses destinos é inegociável.",
        ],
      },
    ],
    rich: {
      blocks: [
        {
          kind: "p",
          text: "Fazer um orçamento com renda baixa tem ofício próprio. Os conselhos que circulam por aí costumam assumir uma margem: corte os cafés, construa uma reserva de emergência, automatize suas economias. Quando a margem não existe, esses conselhos não parecem úteis. Parecem uma porta fechada na cara. Este guia é para os meses em que a matemática está apertada, em que o salário acaba antes de o mês terminar, e em que «simplesmente orce melhor» é a última coisa que você precisa ouvir.",
        },
        {
          kind: "p",
          text: "O objetivo aqui não é romantizar a escassez nem fingir que um ano de 40 mil é a mesma coisa que um de 90 mil. O objetivo é te dar um jeito realista e sem julgamento de cuidar do que você tem, construir o menor colchão possível e estancar o sangramento quando as contas não fecham. Sete passos, sem culpa, e alguns hábitos que de fato cabem em um orçamento apertado.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "O Savlo está disponível no Android e em breve chega ao iOS. Tudo o que este guia cobre funciona em um caderno, uma planilha ou um app simples. Se você quer uma ferramenta que respeita a sua privacidade, não pede credenciais bancárias e funciona em rotinas apertadas, o Savlo foi pensado com isso em mente. Você consegue aplicar cada passo daqui sem ele também.",
        },
        {
          kind: "h2",
          text: "O que significa de fato orçar com renda baixa",
          id: "o-que-significa-de-fato",
        },
        {
          kind: "p",
          text: "«Renda baixa» não é um número único. Pode significar viver paycheck a paycheck com um salário estável que simplesmente não estica. Pode significar trabalho por projeto em que o mês passado foi bom e este não. Pode significar estar entre contratos, sustentar filhos com uma renda, ou ganhar em uma moeda que não bate com o custo de vida da sua cidade. Também pode significar um lar com entradas irregulares e uma longa lista de saídas previsíveis. A forma muda, mas a experiência vivida é parecida: cada real tem um destino antes de chegar, e a maioria desses destinos é inegociável.",
        },
        {
          kind: "p",
          text: "Quando o dinheiro está apertado, o orçamento deixa de ser um exercício de planejamento e vira uma ferramenta de sobrevivência. Isso não é uma falha da sua disciplina nem da sua inteligência. É a resposta natural a um ambiente restrito. Um bom orçamento nesse contexto faz três coisas ao mesmo tempo: diz o que é seguro gastar, evita que pequenas surpresas virem grandes crises, e deixa uma fresta de espaço para algo que seja seu. O resto deste guia mostra como montar isso, um passo de cada vez.",
        },
        {
          kind: "h3",
          text: "Renda baixa não é uma coisa só",
          id: "renda-baixa-nao-e-uma-coisa",
        },
        {
          kind: "p",
          text: "O conselho que serve para um freelancer em uma cidade cara nem sempre serve para uma pessoa com trabalho de meio período em uma cidade menor, e vice-versa. O que se compartilha é a estrutura: uma renda pequena e previsível, uma lista de gastos fixos e uma corda bamba entre os dois. Quando você aceita que o objetivo não é otimizar para a riqueza, e sim para a estabilidade, o orçamento vira uma ferramenta diferente. Vira um jeito de dar a cada real um destino claro para que nada se perca no tipo de estresse que custa mais dinheiro do que economiza.",
        },
        {
          kind: "h2",
          text: "Por que a maioria dos conselhos de orçamento falha quando o dinheiro está apertado",
          id: "por-que-falha",
        },
        {
          kind: "p",
          text: "A maior parte do conteúdo de finanças pessoais é escrita para pessoas com margem. Assume que você consegue redirecionar algumas centenas de reais por mês para investir, que consegue pular alguns gastos não essenciais, que consegue absorver um imprevisto sem perder o sono. Quando essas condições não se cumprem, o mesmo conselho soa como idioma estrangeiro. Também pode soar como culpa, especialmente quando quem escreve não reconhece a distância entre a sua realidade e o exemplo.",
        },
        {
          kind: "p",
          text: "O segundo motivo pelo qual o conselho falha é tratar a disciplina como o gargalo. Disciplina raramente é o gargalo. O gargalo é estrutural: a renda não fecha com os gastos, os gastos não se alinham com os meses, e não há folga para absorver um imprevisto de 200 reais. Um bom orçamento não conserta um déficit estrutural. O que ele pode fazer é tornar o déficit visível, que é o primeiro passo para tomar uma decisão diferente. Às vezes a decisão é renegociar um gasto fixo. Às vezes é mudar de emprego. Às vezes é pedir ajuda. O orçamento é o mapa, não o resgate.",
        },
        {
          kind: "h3",
          text: "O mito de «corte os cafés»",
          id: "mito-dos-cafes",
        },
        {
          kind: "p",
          text: "Cortar pequenos gastos discricionários é uma boa prática quando você tem folga. Com uma renda apertada, a matemática não fecha. A distância entre um mês apertado e um mês sobrevivível raramente são alguns cafés. Em geral é um aumento de aluguel, uma conta médica, um turno perdido, ou um gasto relacionado aos filhos que não existia no mês anterior. Cortar o pequeno ajuda, mas não é a alavanca. A alavanca está nos custos fixos, nas fontes de renda e no modo como os dois se encadeiam ao longo do mês. É aí que este guia coloca a sua energia.",
        },
        {
          kind: "h2",
          text: "Os quatro números, ajustados para meses apertados",
          id: "quatro-numeros-ajustados",
        },
        {
          kind: "p",
          text: "Todo orçamento, independentemente da renda, se constrói sobre os mesmos quatro números: renda líquida, gastos fixos, gastos variáveis e taxa de poupança. O formato desses números muda quando o dinheiro está apertado, mas continuam sendo a espinha dorsal. A renda líquida é o valor mensal realista mais baixo com o qual você pode contar, depois dos impostos e das deduções obrigatórias. Os gastos fixos são as contas que chegam independentemente do que aconteça: aluguel, serviços, transporte, pagamentos mínimos de dívidas, custos fixos relacionados aos filhos. Os gastos variáveis são a parte flexível: mercado, itens domésticos, cuidado pessoal, transporte ocasional. A taxa de poupança em um orçamento apertado não é uma meta agressiva de investimento. É o que sobrar depois das outras três, mesmo que o número comece em zero.",
        },
        {
          kind: "p",
          text: "O que muda quando o dinheiro está apertado é a ordem de prioridade. Em vez de «poupe primeiro, depois todo o resto», a ordem vira «inegociáveis primeiro, depois pequenas reservas, depois gasto discricionário». Essa ordem de prioridade é a espinha dorsal dos sete passos abaixo. Você pode ler mais sobre os quatro números no guia mais amplo de [como fazer um orçamento de dinheiro](/pt/blog/how-to-budget-money); esta versão apenas os afina para os meses apertados.",
        },
        {
          kind: "h2",
          text: "Sete passos para orçar com renda baixa",
          id: "sete-passos",
        },
        {
          kind: "p",
          text: "Esses sete passos assumem que a sua renda é irregular, sua margem é fina e seu tempo é limitado. Foram pensados para levar cerca de uma hora na primeira vez e vinte minutos por semana depois. Não exigem um app, uma planilha nem uma mentalidade especial. Exigem honestidade e um pedaço de papel.",
        },
        {
          kind: "h3",
          text: "Passo 1: Mapeie cada real que entra",
          id: "passo-1-mapear",
        },
        {
          kind: "p",
          text: "Abra os extratos dos últimos três meses e anote cada depósito. Some tudo, divida por três e esse é o seu rendimento líquido mensal médio. Agora olhe para o mais baixo dos três meses, não para a média. Essa é a sua renda de planejamento. Orce a partir do mês mais baixo, e não do mês típico. Quando você orça a partir da média, os meses ruins te quebram. Quando você orça a partir do piso, os meses bons viram colchão. Essa única mudança protege mais orçamentos apertados do que qualquer outro hábito.",
        },
        {
          kind: "p",
          text: "Para tornar isso concreto, pegue um exemplo real. Se os últimos três meses de depósitos são 1.400, 1.250 e 1.520, a média é 1.390. O mais baixo é 1.250. Monte o orçamento a partir de 1.250. Os 140 reais de diferença entre a média e o piso não são um valor pequeno em uma renda apertada. Muitas vezes são a diferença entre uma conta paga e uma multa por atraso. Se a renda é irregular, como 1.800 um mês e 1.100 no outro, o padrão é ainda mais importante. Use o mês mais baixo realista dos últimos seis como renda de planejamento. Se dois meses seguidos ficarem abaixo disso, trate a média desses dois como o novo piso. O orçamento é um documento vivo, não uma regra fixa.",
        },
        {
          kind: "h3",
          text: "Passo 2: Trave os inegociáveis",
          id: "passo-2-inegociaveis",
        },
        {
          kind: "p",
          text: "Os inegociáveis são as contas que precisam ser pagas para que o básico da vida siga funcionando: aluguel ou financiamento, serviços, pagamentos mínimos de dívidas, transporte para o trabalho, custos fixos relacionados aos filhos, medicamentos. Some tudo. Subtraia essa soma da sua renda de planejamento. O número que sobra, se sobrar algo, é o ponto de partida para todo o resto. Se o número for negativo, você tem um déficit estrutural. O primeiro movimento não é otimizar a compra do mercado. O primeiro movimento é olhar para os próprios inegociáveis: qual pode ser renegociado, qual pode ser reduzido, qual está te mantendo em um lugar ruim.",
        },
        {
          kind: "h3",
          text: "Passo 3: Encontre o seu dinheiro «elástico»",
          id: "passo-3-elastico",
        },
        {
          kind: "p",
          text: "Dinheiro elástico é o gasto que pode encolher sem quebrar o básico. Geralmente mora nas compras da casa, itens domésticos, extras de transporte, entretenimento e cuidado pessoal. Olhe os últimos três meses e identifique as categorias elásticas. Escolha as duas ou três em que uma mudança pequena pode poupar alguns reais por semana. Não cem reais por mês. Alguns reais por semana. O ponto deste passo não é transformar a sua vida. É liberar uma quantia pequena e real de dinheiro que vira a semente do próximo passo.",
        },
        {
          kind: "h3",
          text: "Passo 4: Construa um colchão inicial de 100",
          id: "passo-4-colchao",
        },
        {
          kind: "p",
          text: "Uma reserva de emergência tradicional é de três a seis meses de gastos. Esse é o objetivo certo a longo prazo, mas não é o objetivo certo para um mês apertado. Em uma renda apertada, o objetivo certo é 100. Cem reais são suficientes para cobrir um imprevisto pequeno, como uma coparticipação de receita, uma multa de trânsito ou uma conta de serviço que chega em duplicidade. É pequeno o suficiente para ser construído em algumas semanas, e pequeno o suficiente para que você não precise escolher entre ele e uma refeição. Quando você tiver 100, você para de pagar surpresas com taxas de cheque especial. Só isso já vale o esforço.",
        },
        {
          kind: "h3",
          text: "Passo 5: Use o método do calendário de contas",
          id: "passo-5-calendario",
        },
        {
          kind: "p",
          text: "A maioria dos orçamentos apertados quebra por causa do calendário, e não do valor. O aluguel vence no dia 1, o salário cai no dia 5, o serviço vence no dia 10. Quando o calendário não encaixa, alguma coisa é paga com atraso. A solução é trocar o orçamento por categorias pelo orçamento por datas. Pegue uma folha em branco e desenhe um calendário. Marque cada data de renda. Marque cada data de vencimento. Combine as rendas com os vencimentos em ordem, e não por categoria. Quando o calendário funciona, o orçamento funciona. Quando não funciona, o orçamento é uma lista de desejos. O app do Savlo usa um ritmo parecido: ver o que vence antes de pagar.",
        },
        {
          kind: "p",
          text: "Para tornar isso concreto, imagine que o aluguel é 700 no dia 1, uma conta de serviço é 90 no dia 10, um plano de telefone é 45 no dia 15, e um salário de 1.250 cai no dia 5 e no dia 20. No dia 5, 700 do primeiro salário vão para o aluguel. No dia 10, os 90 do segundo salário (que chega no dia 20) precisam vir de algum lugar. O calendário mostra esse problema antes que ele vire uma fatura perdida. A solução é separar um pequeno colchão de dinheiro no dia 5 que cubra a conta do dia 10, ou ligar para a companhia e pedir um adiamento do vencimento para o dia 20. Qualquer uma das duas saídas é mais barata do que uma multa por atraso. O método do calendário transforma a matemática de algo abstrato em uma única página que dá para ler em um minuto.",
        },
        {
          kind: "h3",
          text: "Passo 6: Abra um Sinking Fund minúsculo",
          id: "passo-6-sinking",
        },
        {
          kind: "p",
          text: "Sinking Funds soam como luxo, mas em uma renda apertada são uma habilidade de sobrevivência. Um Sinking Fund é uma pequena reserva que você constrói para uma despesa futura conhecida: um prêmio anual de seguro, a volta às aulas, um presente de fim de ano, a vistoria do carro. A maioria das despesas anuais está entre 50 e 500. Divida esse valor por doze e separe esse pequeno valor por mês. Quando a despesa chega, o dinheiro já está lá. Se quiser uma explicação mais longa, o [guia de Sinking Funds](/pt/blog/sinking-funds) percorre a matemática. Em uma renda apertada, a regra é simples: 5 por semana para uma despesa previsível é o bastante para começar.",
        },
        {
          kind: "h3",
          text: "Passo 7: Some pequenos impulsos de renda",
          id: "passo-7-impulsos",
        },
        {
          kind: "p",
          text: "Orçar com renda baixa esbarra em um muro. O muro é a renda. Cortar o dinheiro elástico tem um piso, e quando você chega nele, nenhuma planilha ajuda. O próximo passo é somar renda, e não cortar gastos. Os pequenos impulsos de renda não significam largar o seu trabalho principal. Significam colocar vinte reais no seu bolso neste mês com algo que você já sabe fazer: vender algo, pegar um turno extra, escrever por encomenda, passear com cachorros, fazer um pequeno serviço para um vizinho. Faça uma lista de três coisas que você poderia fazer nas próximas duas semanas que somem entre 20 e 100 reais à sua renda. Faça uma delas na próxima semana. Encadeie os acertos. O efeito composto de pequenas quantias é o que transforma um orçamento apertado em um orçamento vivível.",
        },
        {
          kind: "p",
          text: "Os impulsos mais fáceis são os que usam uma hora que você já tem. Uma tarde de organizar uma gaveta e listar cinco coisas em um marketplace local costuma render entre 40 e 150 reais em uma semana. Um sábado de manhã ajudando um vizinho a mudar um sofá rende 30 em dinheiro e um favor para o futuro. Algumas horas traduzindo um documento curto, passeando com três cachorros ou montando um móvel para alguém que prefere pagar a fazer são mais 50. Nenhum desses é escalável, e esse é o ponto. Em uma renda apertada, o objetivo é somar uma quantia pequena e real neste mês, e não montar um negócio paralelo. Trate cada impulso como um evento único, e deixe o orçamento se beneficiar dele sem redesenhar o plano em torno dele.",
        },
        {
          kind: "callout",
          tone: "info",
          text: "Os sete passos parecem longos. Na prática, da primeira vez que você os percorre, levam cerca de uma hora. Depois, a checagem semanal são vinte minutos. O passo mais difícil é o primeiro, porque é no primeiro que a verdade aparece. A boa notícia é que cada passo depois desse fica mais fácil. A outra boa notícia é que nenhum dos passos exige um app, uma assinatura ou um temperamento especial. Exigem um papel, uma hora honesta e a disposição de voltar no próximo domingo.",
        },
        {
          kind: "h2",
          text: "Lidando com a vergonha e a ansiedade em relação ao dinheiro",
          id: "vergonha-e-ansiedade",
        },
        {
          kind: "p",
          text: "Dinheiro em uma renda apertada não é um problema de matemática. Também é emocional. Os sentimentos que vêm ao abrir o saldo e ver 17 reais até sexta são reais, e não são sinais de fraqueza. São sinais de que você se importa. O problema é que a vergonha faz você evitar exatamente o que ajudaria: olhar para os números. Se você está há semanas sem abrir o app do banco, não está sozinho, e não é um fracasso. Você é uma pessoa com um sistema nervoso que está fazendo o seu trabalho ao te proteger de um estressor.",
        },
        {
          kind: "p",
          text: "A cura não é motivação. A cura é a pequenez. Abra o app por trinta segundos e olhe o saldo. Feche o app. Essa é uma interação completa de orçamento para um dia apertado. No dia seguinte, faça o mesmo. No dia seguinte, olhe também uma conta. Em uma semana, você olhou os números quatro vezes e a vergonha perdeu a maior parte do poder. A versão longa dessa ideia está no guia de [ansiedade financeira](/pt/blog/financial-anxiety), que aprofunda a ciência da evitação e o que ajuda.",
        },
        {
          kind: "h3",
          text: "A carga mental das pequenas quantias",
          id: "carga-mental",
        },
        {
          kind: "p",
          text: "Pessoas com mais dinheiro muitas vezes não percebem quanto pensamento cabe em cada pequena quantia em um orçamento apertado. Os 4 reais de diferença entre dois supermercados. Os 30 centavos de uma sacola extra. Se pega o ônibus duas vezes nesta semana ou se vai a pé. Essa carga mental é real, e é uma das razões pelas quais os orçamentos em renda apertada são exaustivos. A saída não é tomar as pequenas decisões toda vez. A saída é criar as regras uma vez e depois segui-las por padrão. Compre no mesmo mercado. Use dinheiro vivo para o gasto variável. Defina um teto semanal discricionário e pare de registrar depois disso. O objetivo é que as pequenas decisões deixem de parecer decisões.",
        },
        {
          kind: "h3",
          text: "Registrando despesas em trinta segundos",
          id: "registrar-em-30-segundos",
        },
        {
          kind: "p",
          text: "Em uma renda apertada, o tempo que você gasta registrando o orçamento frequentemente é mais caro do que o custo de uma despesa não registrada. A regra é simples: registre por trinta segundos, não por dez minutos. A maioria das despesas em uma renda apertada vem de um de três lugares: mercado, transporte e pessoal. Quando você gasta, registre uma única linha com o valor, a categoria e o dia. É isso. Um registro por voz que faz a mesma coisa em três segundos é ainda melhor. O app do Savlo foi pensado para esse ritmo: uma frase curta e o lançamento está no calendário, sem vinculação bancária e sem atrito. O ponto é fazer do registro um hábito que você consegue manter numa terça cansativa às 9 da noite, e não um projeto que exige uma hora de foco.",
        },
        {
          kind: "p",
          text: "A outra metade da regra dos trinta segundos é parar de registrar quando o tempo deixa de compensar. Se um café de 4 reais não vai mudar o orçamento, registre em dois segundos e siga em frente. Se acabou de acontecer um reparo de carro de 400 reais, registre com cuidado e pause o gasto discricionário da semana. Registrar é uma ferramenta, não uma religião. A boa versão de registrar é aquela que cabe em uma vida normal sem tomá-la por completo.",
        },
        {
          kind: "h3",
          text: "Um exemplo resolvido: o mês de 1.250",
          id: "exemplo-resolvido",
        },
        {
          kind: "p",
          text: "Para juntar os sete passos, pegue um único mês como exemplo. Renda do mês: 1.250 líquidos, com a segunda metade caindo no dia 20. Inegociáveis: 700 de aluguel no dia 1, 90 de serviço no dia 10, 45 de telefone no dia 15, 60 de pagamento mínimo de dívida no dia 22, 120 de transporte, 80 de mercado, 30 de cuidado pessoal. Isso dá 1.125 de gasto fixo e previsível. O colchão do mês anterior é 100. O primeiro salário do dia 5 cobre o aluguel e devolve o colchão para 100 depois da fatura do dia 10. O segundo salário do dia 20 cobre o plano de telefone, o pagamento mínimo da dívida, o transporte e o mercado, e sobram 25. Esses 25 vão para um Sinking Fund da próxima despesa previsível. A matemática está apertada, mas funciona. O mesmo formato funciona para um mês de 2.200, um mês de 900 ou um mês de 3.400. Os sete passos não mudam com o tamanho do número.",
        },
        {
          kind: "h3",
          text: "Quando chega o mês bom",
          id: "quando-chega-mes-bom",
        },
        {
          kind: "p",
          text: "Em uma renda apertada, os meses bons são mais raros do que os meses ruins, e a tentação é gastá-los. Resista. Os primeiros 50 de qualquer mês bom vão para o colchão até que ele chegue a 100. Os próximos 50 vão para o próximo Sinking Fund pequeno. Os próximos 50 vão para a próxima dívida da lista. Quando o mês bom tem algumas centenas a mais, o orçamento tem uma base real, e o próximo mês ruim deixa de ser uma crise. O mês bom não é uma autorização para subir o padrão de vida. É uma autorização para reforçar o piso.",
        },
        {
          kind: "h2",
          text: "Sete erros que pioram um mês apertado",
          id: "sete-erros",
        },
        {
          kind: "ol",
          items: [
            "**Pular refeições para economizar.** Funciona por uma semana, depois cobra em energia, foco e contas de saúde. Comida é um custo fixo, não elástico. Encontre outra categoria elástica.",
            "**Empréstimos de dia de pagamento ou adiantamentos em dinheiro.** Parecem uma ponte, mas os juros se acumulam. Se um empréstimo de dia de pagamento é a única opção, esse é um sinal para pedir ajuda, e não para tomar o empréstimo. A maioria das cidades tem assistência de emergência para serviços e alternativas de pequeno valor através de organizações sem fins lucrativos.",
            "**Ignorar uma conta por medo.** Multas por atraso, perda de serviço e cobranças judiciais são mais caras do que uma ligação. Ligue para a empresa, peça um plano de pagamento, peça uma extensão por dificuldade. A pior resposta é «não», e a melhor é «podemos parcelar em três vezes».",
            "**Usar crédito para a compra do mercado.** A conta do mercado é a parte mais previsível do orçamento. Se está indo para o crédito, o orçamento tem um problema estrutural, e não de disciplina.",
            "**Tentar pagar todas as dívidas ao mesmo tempo.** Em uma renda apertada, pagar um extra em cinco dívidas ao mesmo tempo é o mesmo que pagar extra em zero. Pague o mínimo em todas para proteger o crédito e a sanidade, e depois meta cada real extra no saldo mais pequeno. A matemática está no [guia para sair das dívidas](/pt/blog/how-to-get-out-of-debt), e a ordem importa ainda mais quando a renda é apertada.",
            "**Tentar poupar de forma agressiva quando não há margem.** Poupar 50 reais por mês quando a matemática já está apertada só cria uma nova crise. Construa primeiro o colchão de 100. Depois fale em poupar mais.",
            "**Comparar o seu orçamento com o dos outros.** O orçamento «médio» que você vê por aí foi feito para uma renda «média». O seu foi feito para a sua renda real. Não são o mesmo exercício.",
            "**Abandonar o orçamento depois de um mês ruim.** O ponto de um orçamento com renda apertada não é a perfeição. O ponto é voltar no próximo domingo e tentar de novo. Esse é todo o trabalho. Se você volta, o orçamento está funcionando.",
          ],
        },
        {
          kind: "h2",
          text: "Ferramentas que ajudam quando o dinheiro está apertado",
          id: "ferramentas-que-ajudam",
        },
        {
          kind: "p",
          text: "A melhor ferramenta é aquela que você vai usar de verdade. Em uma renda apertada, o custo de uma assinatura raramente é o fator decisivo. O fator decisivo é se a ferramenta respeita o seu tempo e a sua realidade. Para a maioria, a ferramenta certa é uma de três: um papel dividido em inegociáveis, elástico e uma pequena reserva; uma planilha simples com três colunas que se atualiza por semana; ou um app que prioriza a privacidade e permite registrar gastos por voz, em poucos segundos, sem vincular uma conta bancária. O Savlo foi pensado para o terceiro caminho. Funciona no Android hoje e em breve chega ao iOS, e funciona sem pedir credenciais bancárias, o que importa quando a confiança é o fator decisivo.",
        },
        {
          kind: "p",
          text: "Se você prefere o caminho manual, basta uma checagem semanal curta. Abra o app de notas do celular. Anote o que entrou, o que saiu e o que sobrou. Esse é um orçamento completo. Se você quer uma forma mais estruturada, o calendário de contas do passo cinco dá tudo o que você precisa em uma única página. O ponto não é o formato. O ponto é o hábito. Escolha uma ferramenta que não some atrito e use-a todo domingo.",
        },
        {
          kind: "h2",
          text: "Quando pedir ajuda além do orçamento",
          id: "pedir-ajuda",
        },
        {
          kind: "p",
          text: "Um orçamento é uma ferramenta, não um resgate. Existem meses em que a matemática simplesmente não fecha, e a resposta certa é pedir ajuda. A maioria das cidades tem assistência de emergência para serviços, comida, aluguel e medicamentos. As organizações não são caridades que você precise merecer. São serviços públicos pensados exatamente para essa situação. Se você está no Brasil, o Centro de Referência de Assistência Social (CRAS) do seu município pode te orientar sobre programas locais. Em muitos outros países existem linhas equivalentes. O orçamento te dá a dignidade de saber o que está acontecendo. A ajuda te dá o tempo de tomar a próxima decisão.",
        },
        {
          kind: "p",
          text: "Um segundo tipo de ajuda é a biblioteca pública. A maioria das bibliotecas oferece acesso gratuito a coaching financeiro, oficinas gratuitas sobre orçamento e dívidas, impressão gratuita de formulários, internet gratuita para busca de emprego e espaço de reunião gratuito para organizar a comunidade. A biblioteca é um espaço público tranquilo onde você pode sentar com seus extratos e trabalhar os sete passos deste guia sem que ninguém pergunte o que você está fazendo ali. Se a matemática está apertada, a biblioteca é um dos poucos recursos públicos que escala para o que você precisar.",
        },
        {
          kind: "divider",
        },
        {
          kind: "h2",
          text: "Perguntas frequentes sobre orçar com renda baixa",
          id: "faq",
        },
        {
          kind: "faq",
          items: [
            {
              q: "Dá realmente para orçar quando o dinheiro está apertado?",
              a: "Sim, mas o objetivo é diferente. O objetivo de um orçamento com renda apertada não é poupar de forma agressiva. É evitar surpresas, proteger uma pequena reserva e estancar o sangramento quando chega uma conta pequena no momento errado. Um orçamento que evita uma taxa de cheque especial de 35 reais está fazendo o seu trabalho, mesmo que não se pareça com o que mostram os blogs de dinheiro.",
            },
            {
              q: "Qual é a menor quantia que eu deveria tentar poupar primeiro?",
              a: "Cem. Um colchão de 100 é suficiente para absorver uma surpresa pequena, e pequeno o bastante para ser construído em algumas semanas. Quando você o tiver, amplie. O ponto é começar com um número alcançável, e não com um que mantenha o objetivo na prateleira.",
            },
            {
              q: "Como faço um orçamento se minha renda muda todo mês?",
              a: "Orce a partir do mês mais baixo dos últimos seis, e não da média. Quando os meses bons chegarem, trate o extra como colchão, e não como uma melhoria do plano. O plano é feito para sobreviver ao mês ruim. O mês bom é um presente para o plano.",
            },
            {
              q: "E se todas as categorias forem inegociáveis?",
              a: "Nesse caso o orçamento tem um problema estrutural, e não de categoria. O próximo passo é olhar para a renda, e não para o gasto. Renegocie um gasto fixo, peça um aumento, pegue uma renda extra pequena, ou peça ajuda. O orçamento pode mostrar a distância. Não pode fechá-la.",
            },
            {
              q: "Como eu paro de sentir vergonha dos meus gastos?",
              a: "A vergonha geralmente mora na evasão. Abra o app por trinta segundos. Olhe o saldo. Feche o app. Faça isso por uma semana. A vergonha perde a maior parte do poder no momento em que olhar se torna um hábito. Você pode ler mais sobre isso na peça de [disforia com o dinheiro](/pt/blog/money-dysmorphia), que aprofunda o lado emocional.",
            },
            {
              q: "Tudo bem usar um app de orçamento quando o dinheiro está apertado?",
              a: "Sim, desde que o app não some atrito. Um app simples que permita registrar um café de 4 reais em dois segundos vale mais do que um app sofisticado que você abre duas vezes por ano. Se um app gratuito sem vinculação bancária e sem assinatura funciona, esse é o app certo. O Savlo é uma dessas opções, mas não é a única. Que priorize a privacidade importa aqui porque você também está protegendo os poucos reais que tem.",
            },
            {
              q: "Como faço um orçamento se além disso tenho dívidas em uma renda apertada?",
              a: "Pague o mínimo em cada dívida para manter as contas em dia, e depois meta cada real extra no saldo mais pequeno. Quando o saldo mais pequeno for embora, passe esse pagamento para o próximo. A mecânica é a mesma do [guia para sair das dívidas](/pt/blog/how-to-get-out-of-debt), e a ordem de prioridade importa ainda mais quando a renda é apertada.",
            },
            {
              q: "E se eu tiver que escolher entre pagar uma conta e comprar comida?",
              a: "Ligue primeiro para a conta. A maioria das empresas tem uma linha de dificuldade. Elas pausam o serviço por um mês, dividem um pagamento, ou te indicam um programa de assistência. Comida é inegociável, e uma única ligação frequentemente compra o tempo para você resolver a comida. Se não resolver, esse é o sinal de que a assistência pública de alimentos e os bancos de comida locais são a resposta certa. Eles existem exatamente para essa situação.",
            },
          ],
        },
        {
          kind: "h2",
          text: "Um orçamento pequeno e honesto vale mais que um perfeito",
          id: "conclusao",
        },
        {
          kind: "p",
          text: "Um orçamento com renda apertada não é um espetáculo. É um hábito de manutenção. O trabalho é evitar que as pequenas surpresas virem grandes crises, manter uma pequena reserva de dinheiro e se manter perto o bastante dos números para tomar uma decisão em calma quando algo quebra. Um orçamento pequeno e honesto ao qual você volta no próximo domingo vale mais que um perfeito que você abandona em três semanas.",
        },
        {
          kind: "p",
          text: "Se você está começando do zero, percorra os sete passos em ordem. Construa o colchão de 100. Abra um Sinking Fund pequeno. Some um pequeno impulso de renda. Depois de um mês, a matemática ainda não está confortável, mas a rotina sim. A rotina é o que faz o próximo mês ser mais fácil. Em seis meses, a rotina é o que torna o próximo ano possível.",
        },
        {
          kind: "p",
          text: "A parte mais difícil de um orçamento com renda apertada não é a matemática. É a solidão de fazer. A maioria das conversas sobre orçamento assume uma margem que você não tem, e a maior parte do conteúdo sobre orçamento é escrita para pessoas que podem absorver um imprevisto. Você não está atrasado, e não está falhando. Você está rodando uma versão mais exigente do mesmo exercício, com menos margem de erro e um colchão menor para a surpresa. Um orçamento que cabe nessa realidade é uma das ferramentas mais úteis que você pode construir, e vale a hora que leva para começar. Se você quer uma ferramenta que respeita a sua privacidade, não pede credenciais bancárias e funciona em rotinas apertadas, o Savlo está disponível no Android e em breve chega ao iOS. Foi pensado para o tipo de orçamento descrito neste guia: pequeno, honesto e fácil de voltar a ele. Tudo aqui funciona sem ele. Se você quer um companheiro para a rotina, o Savlo é uma das opções mais tranquilas do mercado.",
        },
      ],
    },
  },
]

export function getPortuguesePostBySlug(
  slug: string,
): PortugueseBlogPost | undefined {
  return portuguesePosts.find((post) => post.slug === slug)
}
