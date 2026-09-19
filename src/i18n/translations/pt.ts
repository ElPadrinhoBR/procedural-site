import type { FeatureItem } from '../types'

/**
 * Dicionario em portugues (idioma base).
 * A estrutura deste objeto define o contrato de tipos das demais linguas:
 * se uma traducao esquecer uma chave, o build aponta o erro.
 */
export const pt = {
  locale: 'pt-BR',
  label: 'Português',
  short: 'PT',

  nav: {
    home: 'Início',
    solutions: 'Soluções',
    method: 'Método',
    insights: 'Insights',
    about: 'Sobre',
    contact: 'Contato',
    cta: 'Fale com um especialista',
  },

  ui: {
    skipToContent: 'Ir para o conteúdo',
    menu: 'Menu',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    language: 'Idioma',
    learnMore: 'Saiba mais',
    readArticle: 'Ler artigo',
    comingSoon: 'Em breve',
    inDevelopment: 'Em desenvolvimento',
    talkToSpecialist: 'Fale com um especialista',
    knowProcedural: 'Conheça a Procedural',
    backToTop: 'Voltar ao topo',
    backToInsights: 'Voltar para Insights',
    readingTime: 'Tempo de leitura',
    minRead: 'min de leitura',
    pageLabel: 'Página',
    sectionLabel: 'Seção',
    formOriginNote: 'Este contato será enviado com a indicação da página e do idioma de origem.',
  },

  seo: {
    home: {
      title: 'Procedural | Gestão Ágil, Governança e Gestão de Pessoas',
      description:
        'Transformamos gestão, pessoas e processos em capacidade real de execução. Gestão ágil, governança, processos, indicadores e liderança com método e resultado.',
    },
    solutions: {
      title: 'Soluções | Procedural — Gestão Ágil',
      description:
        'Consultoria em gestão, gestão ágil, governança e gestão de TI, processos, indicadores e desenvolvimento de líderes e equipes.',
    },
    method: {
      title: 'Método | Procedural — Procedural Way',
      description:
        'Conheça o Procedural Way: os cinco pilares e as seis etapas que usamos para transformar estratégia em execução.',
    },
    insights: {
      title: 'Insights | Procedural — Gestão Ágil',
      description: 'Artigos sobre gestão ágil, governança, processos e indicadores. Conteúdo prático, sem prova social inventada.',
    },
    insightsAgility: {
      title: 'Agilidade não é velocidade: é capacidade de ajustar rota | Procedural Insights',
      description: 'Por que ritmo sustentável e direção estratégica importam mais que pressa: visibilidade do fluxo, decisão por evidências e priorização rigorosa.',
    },
    insightsGovernance: {
      title: 'Governança que decide, não que documenta | Procedural Insights',
      description: 'Os quatro pilares de uma governança orientada à ação: responsabilidade, transparência, riscos e fóruns de decisão.',
    },
    insightsMetrics: {
      title: 'Menos indicadores, melhores decisões | Procedural Insights',
      description: 'Lead Time, Cycle Time, Throughput e WIP: como escolher os poucos indicadores que realmente reduzem a incerteza.',
    },
    about: {
      title: 'Sobre | Procedural — Gestão Ágil',
      description:
        'Quem é a Procedural, como pensamos gestão, quais são nossos princípios e qual é a nossa direção.',
    },
    contact: {
      title: 'Contato | Procedural — Gestão Ágil',
      description:
        'Fale com a Procedural: diagnóstico inicial, dúvidas sobre serviços ou proposta de trabalho para a sua organização.',
    },
  },

  hero: {
    eyebrow: 'Consultoria em gestão ágil, governança e pessoas',
    title: 'Gestão que transforma estratégia em execução.',
    subtitle:
      'A Procedural conecta pessoas, processos, tecnologia e governança para construir organizações mais ágeis, eficientes e preparadas para evoluir.',
    ctaPrimary: 'Conheça a Procedural',
    ctaSecondary: 'Fale com um especialista',
    quote: 'Agilidade não é correr mais. É saber onde investir energia.',
  },

  positioning: {
    title: 'Método + Pessoas + Processos + Tecnologia + Governança + Resultado',
    lead: 'A Procedural atua na interseção entre disciplinas que, isoladas, não sustentam resultado.',
    chips: [
      'Gestão Ágil',
      'Governança',
      'Gestão de Pessoas',
      'Gestão de TI',
      'Processos',
      'Liderança',
      'Estratégia',
      'Indicadores',
      'Melhoria Contínua',
      'Cultura Organizacional',
      'Transformação Digital',
    ],
  },

  audience: {
    eyebrow: 'Público',
    title: 'Para quem trabalhamos',
    lead: 'Falamos a língua de quem decide, executa e responde por resultado — sem jargão desnecessário.',
    items: [
      'CEOs',
      'Gestores',
      'Coordenadores',
      'Gerentes de TI',
      'Líderes de equipes',
      'Product Owners',
      'Scrum Masters',
      'Profissionais de RH',
      'Empreendedores',
      'Pequenas e médias empresas em crescimento',
      'Empresas em transformação digital',
    ],
  },

  way: {
    eyebrow: 'Nossa filosofia',
    title: 'Procedural Way',
    lead: 'A forma como analisamos problemas e construímos soluções. Cinco pilares que funcionam como um sistema, não como uma lista de boas práticas.',
    items: [
      {
        icon: 'users',
        title: 'Pessoas',
        text: 'Desenvolver líderes, equipes e ambientes capazes de gerar colaboração e responsabilidade.',
      },
      {
        icon: 'flow',
        title: 'Processos',
        text: 'Eliminar desperdícios, gargalos, retrabalho e processos que não geram valor.',
      },
      {
        icon: 'repeat',
        title: 'Agilidade',
        text: 'Criar capacidade de adaptação sem perder direção estratégica.',
      },
      {
        icon: 'shield',
        title: 'Governança',
        text: 'Criar clareza sobre responsabilidades, riscos, decisões, indicadores e prioridades.',
      },
      {
        icon: 'target',
        title: 'Resultado',
        text: 'Conectar a execução operacional aos objetivos reais do negócio.',
      },
    ] as FeatureItem[],
    systemTitle: 'Um sistema conectado',
    systemText:
      'Cada pilar sustenta o outro: sem pessoas, processo não roda; sem processo, agilidade vira improviso; sem governança, a decisão perde critério; sem resultado, o resto é discurso.',
    stats: [
      { value: 5, label: 'pilares integrados' },
      { value: 6, label: 'etapas de execução' },
      { value: 4, label: 'dimensões de governança' },
    ],
  },

  problem: {
    eyebrow: 'O problema',
    title: 'Onde a maioria das organizações trava',
    lead: 'Antes de falar de método, é preciso nomear o que realmente impede a execução.',
    items: [
      {
        icon: 'alert',
        title: 'Estratégia que não desce para o operacional',
        text: 'Direção definida na liderança e execução desconectada no dia a dia.',
      },
      {
        icon: 'compass',
        title: 'Prioridades que mudam toda semana',
        text: 'Tudo é urgente, nada é prioridade e o time perde foco.',
      },
      {
        icon: 'flow',
        title: 'Processos com retrabalho e gargalos',
        text: 'Etapas que não geram valor consomem tempo, capacidade e confiança.',
      },
      {
        icon: 'chart',
        title: 'Decisões sem dados',
        text: 'Sem indicadores confiáveis, a gestão fica refém da percepção.',
      },
      {
        icon: 'users',
        title: 'Papéis e responsabilidades difusos',
        text: 'Ninguém sabe exatamente quem decide o quê — e o problema retorna.',
      },
      {
        icon: 'layers',
        title: 'Tecnologia que não acompanha a gestão',
        text: 'Ferramenta sem processo apenas digitaliza a desorganização.',
      },
    ] as FeatureItem[],
  },

  approach: {
    eyebrow: 'Como trabalhamos',
    title: 'Agilidade é uma capacidade organizacional',
    lead: 'Não vendemos agilidade como moda. Construímos a capacidade de a organização entender, decidir, executar, medir, aprender e evoluir.',
    flow: [
      {
        icon: 'search',
        title: 'Entender',
        text: 'Diagnóstico da realidade: processos, pessoas, tecnologia e governança.',
      },
      {
        icon: 'compass',
        title: 'Decidir',
        text: 'Prioridades claras, com critérios explícitos e responsáveis definidos.',
      },
      {
        icon: 'gauge',
        title: 'Executar',
        text: 'Ritmo de trabalho, fluxo previsível e menos retrabalho.',
      },
      {
        icon: 'chart',
        title: 'Medir',
        text: 'Indicadores que mostram se a execução está gerando resultado.',
      },
      {
        icon: 'book',
        title: 'Aprender',
        text: 'Retrospectivas e melhoria contínua com base no que os dados mostram.',
      },
      {
        icon: 'repeat',
        title: 'Evoluir',
        text: 'Capacidade interna instalada para sustentar a evolução sem dependência.',
      },
    ],
    note: 'Em todas as etapas, o método é transferido para a organização. O objetivo é que ela siga evoluindo sem depender de consultoria.',
  },

  services: {
    eyebrow: 'Soluções',
    title: 'Como a Procedural pode ajudar',
    lead: 'Atuamos de forma combinada, conforme o momento da organização. O que ainda não está pronto, dizemos com clareza.',
    items: [
      {
        icon: 'compass',
        title: 'Consultoria em gestão e organização',
        text: 'Diagnóstico e estruturação de gestão: papéis, fluxos, rituais de decisão e prioridades.',
      },
      {
        icon: 'repeat',
        title: 'Gestão Ágil',
        text: 'Agilidade com direção estratégica, sem reduzir o trabalho a um conjunto de cerimônias.',
      },
      {
        icon: 'shield',
        title: 'Governança e Gestão de TI',
        text: 'Clareza sobre responsabilidades, riscos, decisões, indicadores e prioridades.',
      },
      {
        icon: 'users',
        title: 'Gestão de Pessoas e Liderança',
        text: 'Desenvolvimento de líderes e equipes capazes de gerar colaboração e responsabilidade.',
      },
      {
        icon: 'flow',
        title: 'Processos e Melhoria Contínua',
        text: 'Eliminação de desperdícios, gargalos e retrabalho; padronização que libera capacidade.',
      },
      {
        icon: 'chart',
        title: 'Indicadores e Gestão de Projetos',
        text: 'Painéis de gestão, metas e acompanhamento de execução com critérios claros.',
      },
    ] as FeatureItem[],
    note: 'Frentes em desenvolvimento — treinamentos, workshops, mentorias e produtos digitais de gestão — são apresentadas apenas quando estiverem prontas para aplicação. Fale conosco para entender o que já é possível no seu cenário.',
  },

  differential: {
    eyebrow: 'Diferenciais',
    title: 'O que muda quando o método é bem aplicado',
    items: [
      {
        icon: 'eye',
        title: 'Clareza antes de ferramenta',
        text: 'Nenhuma solução tecnológica resolve um processo mal desenhado.',
      },
      {
        icon: 'shield',
        title: 'Governança sem burocracia',
        text: 'Controles que ajudam a decidir, não que travam a operação.',
      },
      {
        icon: 'users',
        title: 'Processos que permitem pessoas melhores',
        text: 'Menos improviso, mais espaço para o trabalho que exige julgamento.',
      },
      {
        icon: 'message',
        title: 'Linguagem acessível',
        text: 'Explicamos gestão sem jargão, para que a liderança compre e o time execute.',
      },
      {
        icon: 'book',
        title: 'Transferência de método',
        text: 'A organização aprende a fazer, em vez de apenas receber um relatório.',
      },
      {
        icon: 'target',
        title: 'Foco em resultado, não em moda',
        text: 'Cada decisão de método é avaliada pelo impacto real no negócio.',
      },
    ] as FeatureItem[],
  },

  method: {
    eyebrow: 'Método',
    title: 'Seis etapas, um ciclo contínuo',
    lead: 'O mesmo raciocínio se aplica a um projeto, a uma área ou à organização inteira — mudando apenas a profundidade.',
    steps: [
      {
        title: 'Diagnóstico',
        text: 'Entender contexto, fluxo de valor, restrições, pessoas e tecnologia envolvidos.',
      },
      {
        title: 'Priorização',
        text: 'Separar o que ataca a causa do problema do que apenas distrai a organização.',
      },
      {
        title: 'Desenho de solução',
        text: 'Modelar processos, papéis, rituais, governança e indicadores.',
      },
      {
        title: 'Implantação',
        text: 'Colocar em prática em ciclos curtos, com acompanhamento próximo e ajustes.',
      },
      {
        title: 'Medição',
        text: 'Acompanhar indicadores de execução e de resultado, com leitura honesta dos dados.',
      },
      {
        title: 'Evolução',
        text: 'Institucionalizar a melhoria contínua e a capacidade interna de decisão.',
      },
    ],
    cycleTitle: 'O ciclo não termina na entrega',
    cycleText:
      'Cada etapa alimenta a próxima: medir gera aprendizado, aprender redefine prioridades. É esse ciclo que transforma projeto em capacidade permanente.',
    systemNote: 'As etapas formam um sistema. Nenhuma delas funciona isolada como solução.',
    deliverablesTitle: 'O que fica com a organização',
    deliverables: [
      'Diagnóstico documentado e prioridades acordadas',
      'Processos e papéis definidos, com responsáveis claros',
      'Rituais de gestão e governança em funcionamento',
      'Painel de indicadores com leitura compartilhada',
      'Time treinado para sustentar o método',
      'Plano de evolução com próximos passos objetivos',
    ],
  },

  indicators: {
    eyebrow: 'Indicadores',
    title: 'O que passa a ser medido',
    lead: 'Gestão sem medição é opinião. Estes são os temas que costumam organizar a conversa de resultado.',
    items: [
      'Previsibilidade de entrega',
      'Tempo de ciclo',
      'Taxa de retrabalho',
      'Gargalos e filas de trabalho',
      'Aderência ao plano',
      'Custo de processo',
      'Qualidade percebida',
      'Capacidade e carga do time',
      'Riscos e dependências',
      'Satisfação e engajamento',
      'Progresso das iniciativas estratégicas',
    ],
    note: 'Cada organização tem seu conjunto relevante. O ponto é escolher poucos indicadores e usá-los para decidir — não para decorar relatório.',
  },

  governance: {
    eyebrow: 'Governança',
    title: 'Governança sem burocracia',
    lead: 'Governança é clareza sobre quem decide, com base em quê e com qual risco assumido.',
    items: [
      {
        icon: 'users',
        title: 'Responsabilidades',
        text: 'Quem responde por cada decisão e por cada entrega.',
      },
      {
        icon: 'alert',
        title: 'Riscos',
        text: 'Riscos identificados, priorizados e tratados antes de virarem crise.',
      },
      {
        icon: 'clipboard',
        title: 'Decisões',
        text: 'Fóruns definidos, critérios explícitos e registro do que foi decidido.',
      },
      {
        icon: 'chart',
        title: 'Indicadores e prioridades',
        text: 'Uma única leitura de performance para liderança e times.',
      },
    ] as FeatureItem[],
    note: 'Governança leve: menos comitê decorativo, mais decisão no tempo certo.',
  },

  people: {
    eyebrow: 'Pessoas',
    title: 'Processos que permitem pessoas melhores',
    lead: 'Nenhum método se sustenta sem líderes e equipes capazes de gerar colaboração e responsabilidade.',
    items: [
      'Desenvolvimento de líderes',
      'Papéis e expectativas claras',
      'Cultura de responsabilidade',
      'Colaboração entre áreas',
      'Feedback e aprendizagem',
      'Segurança para expor problemas',
      'Reconhecimento por resultado',
      'Times com autonomia e direção',
    ],
    quote: 'Transformando complexidade em clareza.',
  },

  insights: {
    eyebrow: 'Insights',
    title: 'Insights Procedural',
    lead: 'Artigos práticos sobre gestão, governança, processos, indicadores e liderança — pouco volume, com substância.',
    items: [
      {
        category: 'Gestão Ágil',
        title: 'Agilidade não é velocidade: é capacidade de ajustar rota',
        summary:
          'Como diferenciar ritmo de trabalho de pressa — e por que direção estratégica importa mais que cerimônias.',
        slug: 'agilidade-ajustar-rota',
        readingMinutes: 4,
      },
      {
        category: 'Governança',
        title: 'Governança que decide, não que documenta',
        summary:
          'Um recorte prático sobre fóruns de decisão, critérios e registro, sem transformar governança em burocracia.',
        slug: 'governanca-que-decide',
        readingMinutes: 4,
      },
      {
        category: 'Processos e Indicadores',
        title: 'Menos indicadores, melhores decisões',
        summary:
          'Por que painéis enormes não ajudam a decidir e como escolher os poucos indicadores que realmente importam.',
        slug: 'menos-indicadores-melhores-decisoes',
        readingMinutes: 3,
      },
    ],
    cta: 'Quer saber quando publicarmos?',
  },

  articles: {
    agility: {
      slug: 'agilidade-ajustar-rota',
      category: 'Gestão Ágil',
      title: 'Agilidade não é velocidade: é capacidade de ajustar rota',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'Muitas organizações confundem agilidade com aceleração irrestrita. O resultado recorrente dessa interpretação equivocada é o esgotamento das equipes, a multiplicação de entregas sem valor e o retrabalho constante.',
      lead: 'A verdadeira agilidade organizacional não consiste em fazer o mesmo trabalho em menos tempo; consiste em encurtar o ciclo entre a tomada de decisão, a execução e a leitura do impacto real no negócio.',
      errorTitle: 'O erro comum: confundir pressa com ritmo sustentável',
      errorText:
        'Quando uma empresa tenta implementar agilidade focando apenas na velocidade de entrega, ela frequentemente incorre em três problemas estruturais.',
      problems: [
        {
          strong: 'Acúmulo de Work in Progress (WIP):',
          text: 'múltiplas iniciativas iniciadas simultaneamente, mas poucas concluídas com qualidade.',
        },
        {
          strong: 'Cerimônias sem propósito:',
          text: 'reuniões de alinhamento que se tornam rituais burocráticos de status.',
        },
        {
          strong: 'Miopia estratégica:',
          text: 'equipes extremamente ocupadas entregando tarefas desconectadas das metas reais.',
        },
      ],
      pillarsTitle: 'Os três pilares da agilidade estratégica',
      pillars: [
        {
          title: '01. Visibilidade do fluxo de trabalho',
          text: 'A transparência do fluxo permite identificar gargalos, dependências e desperdícios antes que afetem prazos e custos.',
        },
        {
          title: '02. Capacidade de redirecionamento baseado em evidências',
          text: 'Mudar de rota exige dados operacionais e de mercado. A reorientação deve ser limpa e fundamentada.',
        },
        {
          title: '03. Priorização rigorosa e ritmo sustentável',
          text: 'Limitar o trabalho em curso reduz o tempo de ciclo (Lead Time) e aumenta a previsibilidade das entregas.',
        },
      ],
      quote: 'Agilidade não é correr mais. É saber onde investir energia.',
    },
    governance: {
      slug: 'governanca-que-decide',
      category: 'Governança',
      title: 'Governança que decide, não que documenta',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'Existe um mito corporativo de que governança serve apenas para criar comitês, aprovações lentas e relatórios que ninguém lê. Quando estruturada dessa forma, a governança transforma-se num gargalo que paralisa a inovação.',
      lead: 'Uma governança madura não existe para controlar cada movimento, mas para criar clareza de decisão, visibilidade de riscos e alinhamento de prioridades.',
      pillarsTitle: 'Os quatro pilares de uma governança orientada à ação',
      pillars: [
        {
          title: '01. Responsabilidade',
          text: 'Clareza sobre quem decide e quem executa. A governança estabelece os limites exatos da autonomia.',
        },
        {
          title: '02. Transparência',
          text: 'Acesso a dados reais e atualizados do fluxo de trabalho sem necessidade de relatórios manuais.',
        },
        {
          title: '03. Gestão de riscos',
          text: 'Conhecer os riscos assumidos e criar planos de mitigação práticos antes do impacto.',
        },
        {
          title: '04. Fóruns de decisão',
          text: 'Reuniões estruturadas para resolver problemas e deliberar, nunca para repassar status.',
        },
      ],
      quote: 'Governança sem burocracia: controle deve gerar clareza e segurança, não impedir a execução.',
    },
    metrics: {
      slug: 'menos-indicadores-melhores-decisoes',
      category: 'Processos e Indicadores',
      title: 'Menos indicadores, melhores decisões',
      readingMinutes: 3,
      source: 'Procedural Insights',
      intro:
        'Quando uma organização tenta acompanhar dezenas de métricas simultaneamente, a capacidade de identificar o que realmente importa é diluída. Mede-se muito, mas decide-se pouco com base nos dados.',
      lead: 'O objetivo de um indicador não é preencher relatórios nem comprovar ocupação, mas sim reduzir a incerteza no momento de tomar decisões estratégicas e operacionais.',
      pillarsTitle: 'Métricas essenciais para a gestão de fluxo',
      pillars: [
        { title: 'Lead Time', text: 'Tempo total decorrido desde o pedido inicial até a entrega efetiva.' },
        { title: 'Cycle Time', text: 'Tempo de trabalho ativo gasto para concluir uma demanda específica.' },
        { title: 'Throughput', text: 'Volume de entregas de valor concluídas num determinado período.' },
        { title: 'WIP (Work in Progress)', text: 'Quantidade de tarefas iniciadas simultaneamente que exigem atenção.' },
      ],
      quote:
        'Se um indicador muda de patamar e nenhuma decisão é desencadeada como consequência, esse indicador provavelmente é dispensável.',
    },
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Gestão como prática, não como discurso',
    lead: 'A Procedural é uma empresa de gestão ágil, governança, gestão de pessoas e desenvolvimento organizacional.',
    paragraphs: [
      'Nascemos da prática: trabalho de gestão feito dentro de organizações reais, com restrições reais, prazos reais e pessoas reais.',
      'Atuamos na interseção entre método, pessoas, processos, tecnologia, governança e resultado. Não tratamos agilidade como moda, e não reduzimos gestão a ferramenta.',
      'Nossa postura é de consultoria madura com identidade jovem e moderna: do pequeno negócio em crescimento à organização de médio e grande porte.',
    ],
    valuesTitle: 'Princípios',
    values: [
      {
        icon: 'eye',
        title: 'Clareza',
        text: 'Se não está claro, não está resolvido.',
      },
      {
        icon: 'search',
        title: 'Diagnóstico antes de opinião',
        text: 'Entender a realidade concreta antes de propor solução.',
      },
      {
        icon: 'shield',
        title: 'Responsabilidade',
        text: 'Compromisso com o resultado, não com o discurso.',
      },
      {
        icon: 'repeat',
        title: 'Evolução contínua',
        text: 'Melhoria como rotina, não como projeto isolado.',
      },
    ] as FeatureItem[],
    note: 'Estamos construindo nossa base de cases, certificações e números. Enquanto não houver informação verificável, ela não será publicada aqui.',
  },

  founder: {
    eyebrow: 'Liderança',
    title: 'Quem conduz',
    name: 'Roberto Mendonça',
    role: 'Fundador da Procedural',
    paragraphs: [
      'Roberto conduz a Procedural com a premissa de que gestão é prática: método aplicado, decisão com dados e desenvolvimento das pessoas que sustentam a operação.',
      'Atua na interface entre estratégia, processos, tecnologia e liderança, apoiando organizações que precisam ganhar previsibilidade e capacidade de execução.',
    ],
    focusTitle: 'Temas de atuação',
    focus: [
      'Gestão ágil com direção estratégica',
      'Governança e gestão de TI',
      'Processos e melhoria contínua',
      'Indicadores e gestão de projetos',
      'Desenvolvimento de líderes e times',
    ],
  },

  cta: {
    title: 'Vamos entender o seu cenário',
    text: 'Uma conversa inicial é suficiente para identificar onde estão os gargalos e qual caminho faz sentido para a sua organização.',
    primary: 'Fale com um especialista',
    secondary: 'Conheça as soluções',
    note: 'Retornamos pelo e-mail informado.',
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Fale com a Procedural',
    lead: 'Conte o contexto da sua organização. Se preferir, escreva direto para o e-mail abaixo.',
    emailLabel: 'E-mail',
    email: 'santigarudananda@gmail.com',
    subjectsTitle: 'Sobre o que podemos conversar',
    subjects: [
      'Diagnóstico inicial de gestão, processos e indicadores',
      'Governança, papéis e rituais de decisão',
      'Gestão ágil com direção estratégica',
      'Desenvolvimento de líderes e equipes',
      'Proposta de trabalho para uma área ou projeto específico',
    ],
    form: {
      title: 'Enviar mensagem',
      name: 'Nome',
      namePlaceholder: 'Como podemos te chamar',
      company: 'Empresa',
      companyPlaceholder: 'Nome da organização',
      role: 'Cargo',
      rolePlaceholder: 'Ex.: Diretor, Gerente de TI, Coordenador',
      email: 'E-mail',
      emailPlaceholder: 'nome@empresa.com',
      phone: 'Telefone / WhatsApp',
      phonePlaceholder: 'Opcional',
      teamSize: 'Tamanho da equipe',
      teamSizeOptions: [
        '1 a 10 pessoas',
        '11 a 50 pessoas',
        '51 a 200 pessoas',
        '201 a 1000 pessoas',
        'Mais de 1000 pessoas',
        'Prefiro não informar',
      ],
      challenge: 'Principal desafio',
      challengeOptions: [
        'Gestão ágil',
        'Governança',
        'Processos e melhoria contínua',
        'Indicadores e gestão de projetos',
        'Gestão de pessoas e liderança',
        'Gestão de TI',
        'Outro assunto',
      ],
      message: 'Mensagem',
      messagePlaceholder: 'Descreva brevemente o cenário, o desafio e o que você espera resolver.',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso. Retornamos pelo e-mail informado.',
      error:
        'Não foi possível enviar agora. Tente novamente em alguns instantes ou escreva para santigarudananda@gmail.com.',
      errorName: 'Informe seu nome.',
      errorEmail: 'Informe um e-mail válido.',
      errorMessage: 'Escreva uma mensagem com pelo menos 20 caracteres.',
      required: 'Campo obrigatório',
      optional: 'opcional',
      privacy: 'Usamos os dados enviados apenas para responder a este contato.',
      selectPlaceholder: 'Selecione',
    },
  },

  footer: {
    tagline: 'Transformamos gestão, pessoas e processos em capacidade real de execução.',
    navTitle: 'Navegação',
    solutionsTitle: 'Soluções',
    contactTitle: 'Contato',
    solutionsLinks: [
      'Consultoria em gestão',
      'Gestão Ágil',
      'Governança e Gestão de TI',
      'Gestão de Pessoas e Liderança',
      'Processos e Melhoria Contínua',
    ],
    languages: 'Idiomas',
    rights: 'Todos os direitos reservados.',
    note: 'Site institucional em evolução: novas soluções e conteúdos são publicados conforme ficam prontos para aplicação.',
  },

  notFound: {
    title: 'Página não encontrada',
    text: 'O endereço acessado não existe ou foi movido. Você pode voltar ao início ou falar com a Procedural.',
  },

  pages: {
    home: {
      label: 'Início',
    },
    solutions: {
      label: 'Soluções',
      title: 'O que resolvemos com você',
      lead: 'A frente de trabalho nasce do diagnóstico — não de um pacote fechado. Abaixo, o que fazemos e para que tipo de problema cada frente existe.',
    },
    method: {
      label: 'Método',
      title: 'O Procedural Way aplicado',
      lead: 'Filosofia, pilares e etapas. Tudo descrito de forma direta para você avaliar se o raciocínio faz sentido para o seu cenário.',
    },
    insights: {
      label: 'Insights',
      title: 'Biblioteca em construção',
      lead: 'Preferimos publicar pouco e com substância a preencher páginas com conteúdo genérico.',
    },
    about: {
      label: 'Sobre',
      title: 'Quem somos e como pensamos',
      lead: 'Posicionamento, princípios e a direção que estamos construindo para os próximos anos.',
    },
    contact: {
      label: 'Contato',
      title: 'Fale com a Procedural',
      lead: 'Podemos começar por uma conversa objetiva sobre o seu contexto e os seus gargalos atuais.',
    },
  },
}

/**
 * Contrato de tipos das linguas. EN e ES sao declarados como `Dict`, entao
 * qualquer chave ausente ou extra quebra o `npm run build`.
 */
export type Dict = typeof pt
