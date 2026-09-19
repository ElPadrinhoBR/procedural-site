import type { Dict } from './pt'

/**
 * Diccionario en espanol. Declarado como `Dict`: debe replicar exactamente la
 * estructura del portugues, y cualquier clave faltante rompe el build.
 */
export const es: Dict = {
  locale: 'es',
  label: 'Español',
  short: 'ES',

  nav: {
    home: 'Inicio',
    solutions: 'Soluciones',
    method: 'Método',
    insights: 'Insights',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Hable con un especialista',
  },

  ui: {
    skipToContent: 'Ir al contenido',
    menu: 'Menú',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    language: 'Idioma',
    learnMore: 'Saber más',
    readArticle: 'Leer artículo',
    comingSoon: 'Próximamente',
    inDevelopment: 'En desarrollo',
    talkToSpecialist: 'Hable con un especialista',
    knowProcedural: 'Conozca Procedural',
    backToTop: 'Volver arriba',
    backToInsights: 'Volver a Insights',
    readingTime: 'Tiempo de lectura',
    minRead: 'min de lectura',
    pageLabel: 'Página',
    sectionLabel: 'Sección',
    formOriginNote: 'Este contacto se envía indicando la página y el idioma de origen.',
  },

  seo: {
    home: {
      title: 'Procedural | Gestión ágil, Gobernanza y Personas',
      description:
        'Transformamos gestión, personas y procesos en capacidad real de ejecución. Gestión ágil, gobernanza, procesos, indicadores y liderazgo con método y resultado.',
    },
    solutions: {
      title: 'Soluciones | Procedural — Gestión ágil',
      description:
        'Consultoría en gestión, agilidad, gobernanza y gestión de TI, procesos, indicadores y desarrollo de líderes y equipos.',
    },
    method: {
      title: 'Método | Procedural — Procedural Way',
      description:
        'Conozca el Procedural Way: los cinco pilares y las seis etapas que usamos para transformar estrategia en ejecución.',
    },
    insights: {
      title: 'Insights | Procedural — Gestión ágil',
      description: 'Artículos sobre gestión ágil, gobernanza, procesos e indicadores. Contenido práctico, sin pruebas sociales inventadas.',
    },
    insightsAgility: {
      title: 'La agilidad no es velocidad: es capacidad de ajustar el rumbo | Procedural Insights',
      description: 'Por qué el ritmo sostenible y la dirección estratégica importan más que la prisa: visibilidad del flujo, decisión por evidencias y priorización rigurosa.',
    },
    insightsGovernance: {
      title: 'Gobernanza que decide, no que documenta | Procedural Insights',
      description: 'Los cuatro pilares de una gobernanza orientada a la acción: responsabilidad, transparencia, riesgos y foros de decisión.',
    },
    insightsMetrics: {
      title: 'Menos indicadores, mejores decisiones | Procedural Insights',
      description: 'Lead Time, Cycle Time, Throughput y WIP: cómo elegir los pocos indicadores que realmente reducen la incertidumbre.',
    },
    about: {
      title: 'Nosotros | Procedural — Gestión ágil',
      description:
        'Quién es Procedural, cómo pensamos la gestión, cuáles son nuestros principios y hacia dónde vamos.',
    },
    contact: {
      title: 'Contacto | Procedural — Gestión ágil',
      description:
        'Hable con Procedural: diagnóstico inicial, dudas sobre servicios o propuesta de trabajo para su organización.',
    },
  },

  hero: {
    eyebrow: 'Consultoría en gestión ágil, gobernanza y personas',
    title: 'Gestión que transforma estrategia en ejecución.',
    subtitle:
      'Procedural conecta personas, procesos, tecnología y gobernanza para construir organizaciones más ágiles, eficientes y preparadas para evolucionar.',
    ctaPrimary: 'Conozca Procedural',
    ctaSecondary: 'Hable con un especialista',
    quote: 'Agilidad no es correr más. Es saber dónde invertir energía.',
  },

  positioning: {
    title: 'Método + Personas + Procesos + Tecnología + Gobernanza + Resultado',
    lead: 'Procedural actúa en la intersección de disciplinas que, aisladas, no sostienen resultados.',
    chips: [
      'Gestión ágil',
      'Gobernanza',
      'Gestión de Personas',
      'Gestión de TI',
      'Procesos',
      'Liderazgo',
      'Estrategia',
      'Indicadores',
      'Mejora Continua',
      'Cultura Organizacional',
      'Transformación Digital',
    ],
  },

  audience: {
    eyebrow: 'Público',
    title: 'Con quién trabajamos',
    lead: 'Hablamos el idioma de quien decide, ejecuta y responde por resultados — sin jerga innecesaria.',
    items: [
      'CEOs',
      'Gerentes',
      'Coordinadores',
      'Gerentes de TI',
      'Líderes de equipo',
      'Product Owners',
      'Scrum Masters',
      'Profesionales de RR. HH.',
      'Emprendedores',
      'Pequeñas y medianas empresas en crecimiento',
      'Empresas en transformación digital',
    ],
  },

  way: {
    eyebrow: 'Nuestra filosofía',
    title: 'Procedural Way',
    lead: 'La forma en que analizamos problemas y construimos soluciones. Cinco pilares que funcionan como un sistema, no como una lista de buenas prácticas.',
    items: [
      {
        icon: 'users',
        title: 'Personas',
        text: 'Desarrollar líderes, equipos y entornos capaces de generar colaboración y responsabilidad.',
      },
      {
        icon: 'flow',
        title: 'Procesos',
        text: 'Eliminar desperdicios, cuellos de botella, retrabajo y procesos que no generan valor.',
      },
      {
        icon: 'repeat',
        title: 'Agilidad',
        text: 'Crear capacidad de adaptación sin perder la dirección estratégica.',
      },
      {
        icon: 'shield',
        title: 'Gobernanza',
        text: 'Crear claridad sobre responsabilidades, riesgos, decisiones, indicadores y prioridades.',
      },
      {
        icon: 'target',
        title: 'Resultado',
        text: 'Conectar la ejecución operativa con los objetivos reales del negocio.',
      },
    ],
    systemTitle: 'Un sistema conectado',
    systemText:
      'Cada pilar sostiene al otro: sin personas, el proceso no funciona; sin proceso, la agilidad se vuelve improvisación; sin gobernanza, la decisión pierde criterio; sin resultado, el resto es discurso.',
    stats: [
      { value: 5, label: 'pilares integrados' },
      { value: 6, label: 'etapas de ejecución' },
      { value: 4, label: 'dimensiones de gobernanza' },
    ],
  },

  problem: {
    eyebrow: 'El problema',
    title: 'Dónde se atasca la mayoría de las organizaciones',
    lead: 'Antes de hablar de método, hay que nombrar lo que realmente impide la ejecución.',
    items: [
      {
        icon: 'alert',
        title: 'Estrategia que no baja a lo operativo',
        text: 'Dirección definida en el liderazgo y ejecución desconectada del día a día.',
      },
      {
        icon: 'compass',
        title: 'Prioridades que cambian cada semana',
        text: 'Todo es urgente, nada es prioridad y el equipo pierde el foco.',
      },
      {
        icon: 'flow',
        title: 'Procesos con retrabajo y cuellos de botella',
        text: 'Etapas que no generan valor consumen tiempo, capacidad y confianza.',
      },
      {
        icon: 'chart',
        title: 'Decisiones sin datos',
        text: 'Sin indicadores confiables, la gestión queda rehén de la percepción.',
      },
      {
        icon: 'users',
        title: 'Roles y responsabilidades difusos',
        text: 'Nadie sabe exactamente quién decide qué — y el problema regresa.',
      },
      {
        icon: 'layers',
        title: 'Tecnología que no acompaña la gestión',
        text: 'Una herramienta sin proceso solo digitaliza el desorden.',
      },
    ],
  },

  approach: {
    eyebrow: 'Cómo trabajamos',
    title: 'La agilidad es una capacidad organizacional',
    lead: 'No vendemos agilidad como moda. Construimos la capacidad de la organización para entender, decidir, ejecutar, medir, aprender y evolucionar.',
    flow: [
      {
        icon: 'search',
        title: 'Entender',
        text: 'Diagnóstico de la realidad: procesos, personas, tecnología y gobernanza.',
      },
      {
        icon: 'compass',
        title: 'Decidir',
        text: 'Prioridades claras, con criterios explícitos y responsables definidos.',
      },
      {
        icon: 'gauge',
        title: 'Ejecutar',
        text: 'Ritmo de trabajo, flujo previsible y menos retrabajo.',
      },
      {
        icon: 'chart',
        title: 'Medir',
        text: 'Indicadores que muestran si la ejecución está generando resultado.',
      },
      {
        icon: 'book',
        title: 'Aprender',
        text: 'Retrospectivas y mejora continua con base en lo que muestran los datos.',
      },
      {
        icon: 'repeat',
        title: 'Evolucionar',
        text: 'Capacidad interna instalada para sostener la evolución sin dependencia.',
      },
    ],
    note: 'En todas las etapas el método se transfiere a la organización. El objetivo es que siga evolucionando sin depender de la consultoría.',
  },

  services: {
    eyebrow: 'Soluciones',
    title: 'Cómo puede ayudar Procedural',
    lead: 'Actuamos de forma combinada, según el momento de la organización. Lo que aún no está listo, lo decimos con claridad.',
    items: [
      {
        icon: 'compass',
        title: 'Consultoría en gestión y organización',
        text: 'Diagnóstico y estructuración de la gestión: roles, flujos, rituales de decisión y prioridades.',
      },
      {
        icon: 'repeat',
        title: 'Gestión ágil',
        text: 'Agilidad con dirección estratégica, sin reducir el trabajo a un conjunto de ceremonias.',
      },
      {
        icon: 'shield',
        title: 'Gobernanza y Gestión de TI',
        text: 'Claridad sobre responsabilidades, riesgos, decisiones, indicadores y prioridades.',
      },
      {
        icon: 'users',
        title: 'Gestión de Personas y Liderazgo',
        text: 'Desarrollo de líderes y equipos capaces de generar colaboración y responsabilidad.',
      },
      {
        icon: 'flow',
        title: 'Procesos y Mejora Continua',
        text: 'Eliminación de desperdicios, cuellos de botella y retrabajo; estandarización que libera capacidad.',
      },
      {
        icon: 'chart',
        title: 'Indicadores y Gestión de Proyectos',
        text: 'Paneles de gestión, metas y seguimiento de la ejecución con criterios claros.',
      },
    ],
    note: 'Las nuevas líneas — capacitaciones, talleres, mentorías y productos digitales de gestión — se presentan solo cuando están listas para aplicar. Hable con nosotros para entender qué ya es posible en su escenario.',
  },

  differential: {
    eyebrow: 'Diferenciales',
    title: 'Qué cambia cuando el método se aplica bien',
    items: [
      {
        icon: 'eye',
        title: 'Claridad antes que herramienta',
        text: 'Ninguna solución tecnológica resuelve un proceso mal diseñado.',
      },
      {
        icon: 'shield',
        title: 'Gobernanza sin burocracia',
        text: 'Controles que ayudan a decidir, no que bloquean la operación.',
      },
      {
        icon: 'users',
        title: 'Procesos que permiten mejores personas',
        text: 'Menos improvisación, más espacio para el trabajo que exige criterio.',
      },
      {
        icon: 'message',
        title: 'Lenguaje accesible',
        text: 'Explicamos la gestión sin jerga, para que el liderazgo comprenda y el equipo ejecute.',
      },
      {
        icon: 'book',
        title: 'Transferencia de método',
        text: 'La organización aprende a hacerlo, en lugar de solo recibir un informe.',
      },
      {
        icon: 'target',
        title: 'Foco en resultado, no en moda',
        text: 'Cada decisión de método se evalúa por su impacto real en el negocio.',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Seis etapas, un ciclo continuo',
    lead: 'El mismo razonamiento se aplica a un proyecto, a un área o a toda la organización — cambiando solo la profundidad.',
    steps: [
      {
        title: 'Diagnóstico',
        text: 'Entender contexto, flujo de valor, restricciones, personas y tecnología involucradas.',
      },
      {
        title: 'Priorización',
        text: 'Separar lo que ataca la causa del problema de lo que solo distrae a la organización.',
      },
      {
        title: 'Diseño de la solución',
        text: 'Modelar procesos, roles, rituales, gobernanza e indicadores.',
      },
      {
        title: 'Implementación',
        text: 'Poner en práctica en ciclos cortos, con seguimiento cercano y ajustes.',
      },
      {
        title: 'Medición',
        text: 'Acompañar indicadores de ejecución y de resultado, con lectura honesta de los datos.',
      },
      {
        title: 'Evolución',
        text: 'Institucionalizar la mejora continua y la capacidad interna de decisión.',
      },
    ],
    cycleTitle: 'El ciclo no termina en la entrega',
    cycleText:
      'Cada etapa alimenta la siguiente: medir genera aprendizaje, aprender redefine prioridades. Ese ciclo convierte un proyecto en capacidad permanente.',
    systemNote: 'Las etapas forman un sistema. Ninguna funciona aislada como solución.',
    deliverablesTitle: 'Qué queda en la organización',
    deliverables: [
      'Diagnóstico documentado y prioridades acordadas',
      'Procesos y roles definidos, con responsables claros',
      'Rituales de gestión y gobernanza en funcionamiento',
      'Panel de indicadores con lectura compartida',
      'Equipo capacitado para sostener el método',
      'Plan de evolución con próximos pasos objetivos',
    ],
  },

  indicators: {
    eyebrow: 'Indicadores',
    title: 'Qué empieza a medirse',
    lead: 'Gestión sin medición es opinión. Estos son los temas que suelen ordenar la conversación de resultado.',
    items: [
      'Previsibilidad de entrega',
      'Tiempo de ciclo',
      'Tasa de retrabajo',
      'Cuellos de botella y colas de trabajo',
      'Adherencia al plan',
      'Costo del proceso',
      'Calidad percibida',
      'Capacidad y carga del equipo',
      'Riesgos y dependencias',
      'Satisfacción y compromiso',
      'Progreso de las iniciativas estratégicas',
    ],
    note: 'Cada organización tiene su conjunto relevante. El punto es elegir pocos indicadores y usarlos para decidir — no para decorar informes.',
  },

  governance: {
    eyebrow: 'Gobernanza',
    title: 'Gobernanza sin burocracia',
    lead: 'Gobernanza es claridad sobre quién decide, con base en qué y con qué riesgo asumido.',
    items: [
      {
        icon: 'users',
        title: 'Responsabilidades',
        text: 'Quién responde por cada decisión y por cada entrega.',
      },
      {
        icon: 'alert',
        title: 'Riesgos',
        text: 'Riesgos identificados, priorizados y tratados antes de convertirse en crisis.',
      },
      {
        icon: 'clipboard',
        title: 'Decisiones',
        text: 'Foros definidos, criterios explícitos y registro de lo decidido.',
      },
      {
        icon: 'chart',
        title: 'Indicadores y prioridades',
        text: 'Una única lectura de desempeño para liderazgo y equipos.',
      },
    ],
    note: 'Gobernanza ligera: menos comité decorativo, más decisión en el momento correcto.',
  },

  people: {
    eyebrow: 'Personas',
    title: 'Procesos que permiten mejores personas',
    lead: 'Ningún método se sostiene sin líderes y equipos capaces de generar colaboración y responsabilidad.',
    items: [
      'Desarrollo de líderes',
      'Roles y expectativas claras',
      'Cultura de responsabilidad',
      'Colaboración entre áreas',
      'Feedback y aprendizaje',
      'Seguridad para exponer problemas',
      'Reconocimiento por resultado',
      'Equipos con autonomía y dirección',
    ],
    quote: 'Transformando complejidad en claridad.',
  },

  insights: {
    eyebrow: 'Insights',
    title: 'Procedural Insights',
    lead: 'Artículos prácticos sobre gestión, gobernanza, procesos, indicadores y liderazgo — poco volumen, con sustancia.',
    items: [
      {
        category: 'Gestión ágil',
        title: 'La agilidad no es velocidad: es capacidad de ajustar el rumbo',
        summary:
          'Cómo diferenciar ritmo de trabajo de prisa — y por qué la dirección estratégica importa más que las ceremonias.',
        slug: 'agilidade-ajustar-rota',
        readingMinutes: 4,
      },
      {
        category: 'Gobernanza',
        title: 'Gobernanza que decide, no que documenta',
        summary:
          'Una mirada práctica sobre foros de decisión, criterios y registro, sin convertir la gobernanza en burocracia.',
        slug: 'governanca-que-decide',
        readingMinutes: 4,
      },
      {
        category: 'Procesos e Indicadores',
        title: 'Menos indicadores, mejores decisiones',
        summary:
          'Por qué los paneles enormes no ayudan a decidir y cómo elegir los pocos indicadores que realmente importan.',
        slug: 'menos-indicadores-melhores-decisoes',
        readingMinutes: 3,
      },
    ],
    cta: '¿Quiere saber cuándo publicamos?',
  },

  articles: {
    agility: {
      slug: 'agilidade-ajustar-rota',
      category: 'Gestión ágil',
      title: 'La agilidad no es velocidad: es capacidad de ajustar el rumbo',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'Muchas organizaciones confunden agilidad con aceleración sin límites. El resultado recurrente es agotamiento, entregas sin valor y retrabajo constante.',
      lead: 'La verdadera agilidad organizacional no es hacer lo mismo en menos tiempo; es acortar el ciclo entre decisión, ejecución y lectura del impacto real.',
      errorTitle: 'El error común: confundir prisa con ritmo sostenible',
      errorText:
        'Cuando una empresa implementa agilidad enfocándose solo en velocidad, suele caer en tres problemas estructurales.',
      problems: [
        {
          strong: 'Acumulación de Work in Progress (WIP):',
          text: 'múltiples iniciativas iniciadas a la vez, pocas concluidas con calidad.',
        },
        {
          strong: 'Ceremonias sin propósito:',
          text: 'reuniones de alineación que se vuelven rituales burocráticos.',
        },
        {
          strong: 'Miopía estratégica:',
          text: 'equipos ocupados entregando tareas desconectadas de metas reales.',
        },
      ],
      pillarsTitle: 'Los tres pilares de la agilidad estratégica',
      pillars: [
        {
          title: '01. Visibilidad del flujo',
          text: 'Transparencia para identificar cuellos de botella antes de que afecten plazos y costos.',
        },
        {
          title: '02. Redirección basada en evidencias',
          text: 'Cambiar de rumbo exige datos operativos y de mercado.',
        },
        {
          title: '03. Priorización rigurosa',
          text: 'Limitar el trabajo en curso reduce el Lead Time y aumenta la previsibilidad.',
        },
      ],
      quote: 'Agilidad no es correr más. Es saber dónde invertir energía.',
    },
    governance: {
      slug: 'governanca-que-decide',
      category: 'Gobernanza',
      title: 'Gobernanza que decide, no que documenta',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'El mito corporativo dice que gobernanza solo crea comités y aprobaciones lentas. Así, se vuelve un freno a la innovación.',
      lead: 'Una gobernanza madura no controla cada movimiento: crea claridad de decisión, visibilidad de riesgos y alineación de prioridades.',
      pillarsTitle: 'Los cuatro pilares de una gobernanza orientada a la acción',
      pillars: [
        {
          title: '01. Responsabilidad',
          text: 'Claridad sobre quién decide y quién ejecuta; límites exactos de la autonomía.',
        },
        {
          title: '02. Transparencia',
          text: 'Acceso a datos reales del flujo sin informes manuales.',
        },
        {
          title: '03. Gestión de riesgos',
          text: 'Conocer riesgos y crear mitigación práctica antes del impacto.',
        },
        {
          title: '04. Foros de decisión',
          text: 'Reuniones para deliberar y resolver, nunca para repetir estado.',
        },
      ],
      quote: 'Gobernanza sin burocracia: control que genera claridad, no freno.',
    },
    metrics: {
      slug: 'menos-indicadores-melhores-decisoes',
      category: 'Procesos e Indicadores',
      title: 'Menos indicadores, mejores decisiones',
      readingMinutes: 3,
      source: 'Procedural Insights',
      intro:
        'Seguir decenas de métricas diluye lo importante. Se mide mucho, se decide poco.',
      lead: 'Un indicador sirve para reducir incertidumbre al decidir, no para llenar informes.',
      pillarsTitle: 'Métricas esenciales para la gestión del flujo',
      pillars: [
        { title: 'Lead Time', text: 'Tiempo total desde el pedido inicial hasta la entrega efectiva.' },
        { title: 'Cycle Time', text: 'Tiempo de trabajo activo dedicado a concluir una demanda específica.' },
        { title: 'Throughput', text: 'Volumen de entregas de valor concluidas en un período determinado.' },
        { title: 'WIP (Work in Progress)', text: 'Cantidad de tareas iniciadas a la vez que exigen atención.' },
      ],
      quote:
        'Si un indicador cambia de nivel y ninguna decisión se desencadena como consecuencia, ese indicador probablemente es prescindible.',
    },
  },

  about: {
    eyebrow: 'Nosotros',
    title: 'Gestión como práctica, no como discurso',
    lead: 'Procedural es una empresa de gestión ágil, gobernanza, gestión de personas y desarrollo organizacional.',
    paragraphs: [
      'Nacimos de la práctica: trabajo de gestión realizado dentro de organizaciones reales, con restricciones reales, plazos reales y personas reales.',
      'Actuamos en la intersección entre método, personas, procesos, tecnología, gobernanza y resultado. No tratamos la agilidad como moda ni reducimos la gestión a una herramienta.',
      'Nuestra postura es de consultoría madura con identidad joven y moderna: desde el pequeño negocio en crecimiento hasta la organización mediana y grande.',
    ],
    valuesTitle: 'Principios',
    values: [
      {
        icon: 'eye',
        title: 'Claridad',
        text: 'Si no está claro, no está resuelto.',
      },
      {
        icon: 'search',
        title: 'Diagnóstico antes que opinión',
        text: 'Entender la realidad concreta antes de proponer una solución.',
      },
      {
        icon: 'shield',
        title: 'Responsabilidad',
        text: 'Compromiso con el resultado, no con el discurso.',
      },
      {
        icon: 'repeat',
        title: 'Evolución continua',
        text: 'Mejora como rutina, no como proyecto aislado.',
      },
    ],
    note: 'Estamos construyendo nuestra base de casos, certificaciones y números. Mientras no exista información verificable, no se publicará aqué.',
  },

  founder: {
    eyebrow: 'Liderazgo',
    title: 'Quién conduce',
    name: 'Roberto Mendonça',
    role: 'Fundador de Procedural',
    paragraphs: [
      'Roberto conduce Procedural con la premisa de que la gestión es práctica: método aplicado, decisión con datos y desarrollo de las personas que sostienen la operación.',
      'Actúa en la interfaz entre estrategia, procesos, tecnología y liderazgo, apoyando a organizaciones que necesitan ganar previsibilidad y capacidad de ejecución.',
    ],
    focusTitle: 'Temas de actuación',
    focus: [
      'Gestión ágil con dirección estratégica',
      'Gobernanza y gestión de TI',
      'Procesos y mejora continua',
      'Indicadores y gestión de proyectos',
      'Desarrollo de líderes y equipos',
    ],
  },

  cta: {
    title: 'Entendamos su escenario',
    text: 'Una conversación inicial es suficiente para identificar dónde están los cuellos de botella y qué camino tiene sentido para su organización.',
    primary: 'Hable con un especialista',
    secondary: 'Conozca las soluciones',
    note: 'Respondemos al correo informado.',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hable con Procedural',
    lead: 'Cuéntenos el contexto de su organización. Si lo prefiere, escriba directamente al correo de abajo.',
    emailLabel: 'Correo',
    email: 'santigarudananda@gmail.com',
    subjectsTitle: 'Sobre qué podemos conversar',
    subjects: [
      'Diagnóstico inicial de gestión, procesos e indicadores',
      'Gobernanza, roles y rituales de decisión',
      'Gestión ágil con dirección estratégica',
      'Desarrollo de líderes y equipos',
      'Propuesta de trabajo para un área o proyecto específico',
    ],
    form: {
      title: 'Enviar mensaje',
      name: 'Nombre',
      namePlaceholder: 'Cómo podemos llamarle',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de la organización',
      role: 'Cargo',
      rolePlaceholder: 'Ej.: Director, Gerente de TI, Coordinador',
      email: 'Correo electrónico',
      emailPlaceholder: 'nombre@empresa.com',
      phone: 'Teléfono / WhatsApp',
      phonePlaceholder: 'Opcional',
      teamSize: 'Tamaño del equipo',
      teamSizeOptions: [
        '1 a 10 personas',
        '11 a 50 personas',
        '51 a 200 personas',
        '201 a 1000 personas',
        'Más de 1000 personas',
        'Prefiero no informar',
      ],
      challenge: 'Principal desafío',
      challengeOptions: [
        'Gestión ágil',
        'Gobernanza',
        'Procesos y mejora continua',
        'Indicadores y gestión de proyectos',
        'Gestión de personas y liderazgo',
        'Gestión de TI',
        'Otro tema',
      ],
      message: 'Mensaje',
      messagePlaceholder: 'Describa brevemente el escenario, el desafío y lo que espera resolver.',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado con éxito. Responderemos al correo informado.',
      error: 'No fue posible enviar ahora. Intente de nuevo en unos instantes o escriba a santigarudananda@gmail.com.',
      errorName: 'Informe su nombre.',
      errorEmail: 'Informe un correo válido.',
      errorMessage: 'Escriba un mensaje de al menos 20 caracteres.',
      required: 'Campo obligatorio',
      optional: 'opcional',
      privacy: 'Usamos los datos enviados solo para responder a este contacto.',
      selectPlaceholder: 'Seleccione',
    },
  },

  footer: {
    tagline: 'Transformamos gestión, personas y procesos en capacidad real de ejecución.',
    navTitle: 'Navegación',
    solutionsTitle: 'Soluciones',
    contactTitle: 'Contacto',
    solutionsLinks: [
      'Consultoría en gestión',
      'Gestión ágil',
      'Gobernanza y Gestión de TI',
      'Gestión de Personas y Liderazgo',
      'Procesos y Mejora Continua',
    ],
    languages: 'Idiomas',
    rights: 'Todos los derechos reservados.',
    note: 'Sitio institucional en evolución: nuevas soluciones y contenidos se publican a medida que están listos para aplicar.',
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'La dirección a la que accedió no existe o fue movida. Puede volver al inicio o hablar con Procedural.',
  },

  pages: {
    home: {
      label: 'Inicio',
    },
    solutions: {
      label: 'Soluciones',
      title: 'Lo que resolvemos con usted',
      lead: 'La línea de trabajo nace del diagnóstico — no de un paquete cerrado. Abajo, lo que hacemos y para qué problema existe cada frente.',
    },
    method: {
      label: 'Método',
      title: 'El Procedural Way aplicado',
      lead: 'Filosofía, pilares y etapas. Todo descrito de forma directa para que usted evalúe si el razonamiento tiene sentido en su escenario.',
    },
    insights: {
      label: 'Insights',
      title: 'Biblioteca en construcción',
      lead: 'Preferimos publicar poco y con sustancia antes que llenar páginas con contenido genérico.',
    },
    about: {
      label: 'Nosotros',
      title: 'Quiénes somos y cómo pensamos',
      lead: 'Posicionamiento, principios y la dirección que estamos construyendo para los próximos años.',
    },
    contact: {
      label: 'Contacto',
      title: 'Hable con Procedural',
      lead: 'Podemos empezar con una conversación objetiva sobre su contexto y sus cuellos de botella actuales.',
    },
  },
}
