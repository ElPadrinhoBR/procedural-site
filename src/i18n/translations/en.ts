import type { Dict } from './pt'

/**
 * English dictionary. Declared as `Dict`, so it must mirror the Portuguese
 * structure exactly — a missing or extra key fails the build.
 */
export const en: Dict = {
  locale: 'en',
  label: 'English',
  short: 'EN',

  nav: {
    home: 'Home',
    solutions: 'Solutions',
    method: 'Method',
    insights: 'Insights',
    about: 'About',
    contact: 'Contact',
    cta: 'Talk to a specialist',
  },

  ui: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    language: 'Language',
    learnMore: 'Learn more',
    readArticle: 'Read article',
    comingSoon: 'Coming soon',
    inDevelopment: 'In development',
    talkToSpecialist: 'Talk to a specialist',
    knowProcedural: 'Get to know Procedural',
    backToTop: 'Back to top',
    backToInsights: 'Back to Insights',
    readingTime: 'Reading time',
    minRead: 'min read',
    pageLabel: 'Page',
    sectionLabel: 'Section',
    formOriginNote: 'This message is sent with the page and language it came from.',
  },

  seo: {
    home: {
      title: 'Procedural | Agile Management, Governance and People',
      description:
        'We turn management, people and processes into real execution capability. Agile management, governance, processes, metrics and leadership with method and results.',
    },
    solutions: {
      title: 'Solutions | Procedural — Agile Management',
      description:
        'Consulting in management, agile delivery, IT governance, processes, metrics and leadership development.',
    },
    method: {
      title: 'Method | Procedural — The Procedural Way',
      description:
        'The Procedural Way: five pillars and six stages we use to turn strategy into execution.',
    },
    insights: {
      title: 'Insights | Procedural — Agile Management',
      description: 'Articles on agile management, governance, processes and metrics. Practical content, no invented social proof.',
    },
    insightsAgility: {
      title: 'Agility is not speed: it is the ability to change course | Procedural Insights',
      description: 'Why sustainable pace and strategic direction matter more than hurry: flow visibility, evidence-based decisions and rigorous prioritisation.',
    },
    insightsGovernance: {
      title: 'Governance that decides, not one that documents | Procedural Insights',
      description: 'The four pillars of action-oriented governance: accountability, transparency, risks and decision forums.',
    },
    insightsMetrics: {
      title: 'Fewer metrics, better decisions | Procedural Insights',
      description: 'Lead Time, Cycle Time, Throughput and WIP: how to choose the few metrics that truly reduce uncertainty.',
    },
    about: {
      title: 'About | Procedural — Agile Management',
      description:
        'Who Procedural is, how we think about management, our principles and where we are heading.',
    },
    contact: {
      title: 'Contact | Procedural — Agile Management',
      description:
        'Talk to Procedural: initial diagnosis, questions about our services or a proposal for your organisation.',
    },
  },

  hero: {
    eyebrow: 'Consulting in agile management, governance and people',
    title: 'Management that turns strategy into execution.',
    subtitle:
      'Procedural connects people, processes, technology and governance to build organisations that are more agile, more efficient and ready to evolve.',
    ctaPrimary: 'Get to know Procedural',
    ctaSecondary: 'Talk to a specialist',
    quote: 'Agility is not about running faster. It is about knowing where to invest energy.',
  },

  positioning: {
    title: 'Method + People + Processes + Technology + Governance + Results',
    lead: 'Procedural works at the intersection of disciplines that, on their own, cannot sustain results.',
    chips: [
      'Agile Management',
      'Governance',
      'People Management',
      'IT Management',
      'Processes',
      'Leadership',
      'Strategy',
      'Metrics',
      'Continuous Improvement',
      'Organisational Culture',
      'Digital Transformation',
    ],
  },

  audience: {
    eyebrow: 'Audience',
    title: 'Who we work with',
    lead: 'We speak the language of people who decide, execute and answer for results — without unnecessary jargon.',
    items: [
      'CEOs',
      'Managers',
      'Coordinators',
      'IT Managers',
      'Team leaders',
      'Product Owners',
      'Scrum Masters',
      'HR professionals',
      'Entrepreneurs',
      'Small and mid-sized companies scaling up',
      'Companies going through digital transformation',
    ],
  },

  way: {
    eyebrow: 'Our philosophy',
    title: 'The Procedural Way',
    lead: 'How we analyse problems and build solutions. Five pillars that work as a system, not as a checklist of best practices.',
    items: [
      {
        icon: 'users',
        title: 'People',
        text: 'Develop leaders, teams and environments able to generate collaboration and accountability.',
      },
      {
        icon: 'flow',
        title: 'Processes',
        text: 'Remove waste, bottlenecks, rework and processes that do not create value.',
      },
      {
        icon: 'repeat',
        title: 'Agility',
        text: 'Build the capacity to adapt without losing strategic direction.',
      },
      {
        icon: 'shield',
        title: 'Governance',
        text: 'Create clarity on responsibilities, risks, decisions, metrics and priorities.',
      },
      {
        icon: 'target',
        title: 'Results',
        text: 'Connect operational execution to the real objectives of the business.',
      },
    ],
    systemTitle: 'A connected system',
    systemText:
      'Each pillar holds the others up: without people, processes do not run; without processes, agility becomes improvisation; without governance, decisions lose criteria; without results, the rest is talk.',
    stats: [
      { value: 5, label: 'integrated pillars' },
      { value: 6, label: 'execution stages' },
      { value: 4, label: 'governance dimensions' },
    ],
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Where most organisations get stuck',
    lead: 'Before talking about method, we need to name what actually blocks execution.',
    items: [
      {
        icon: 'alert',
        title: 'Strategy that never reaches operations',
        text: 'Direction defined by leadership, execution disconnected from the daily work.',
      },
      {
        icon: 'compass',
        title: 'Priorities that change every week',
        text: 'Everything is urgent, nothing is a priority, and the team loses focus.',
      },
      {
        icon: 'flow',
        title: 'Processes full of rework and bottlenecks',
        text: 'Steps that create no value consume time, capacity and trust.',
      },
      {
        icon: 'chart',
        title: 'Decisions without data',
        text: 'Without reliable metrics, management becomes hostage to perception.',
      },
      {
        icon: 'users',
        title: 'Blurred roles and responsibilities',
        text: 'Nobody knows exactly who decides what — and the problem comes back.',
      },
      {
        icon: 'layers',
        title: 'Technology that does not follow management',
        text: 'A tool without a process only digitises disorganisation.',
      },
    ],
  },

  approach: {
    eyebrow: 'How we work',
    title: 'Agility is an organisational capability',
    lead: 'We do not sell agility as a trend. We build the organisation’s ability to understand, decide, execute, measure, learn and evolve.',
    flow: [
      {
        icon: 'search',
        title: 'Understand',
        text: 'Diagnose reality: processes, people, technology and governance.',
      },
      {
        icon: 'compass',
        title: 'Decide',
        text: 'Clear priorities, explicit criteria and named owners.',
      },
      {
        icon: 'gauge',
        title: 'Execute',
        text: 'Working rhythm, predictable flow and less rework.',
      },
      {
        icon: 'chart',
        title: 'Measure',
        text: 'Metrics that show whether execution is producing results.',
      },
      {
        icon: 'book',
        title: 'Learn',
        text: 'Retrospectives and continuous improvement based on what the data shows.',
      },
      {
        icon: 'repeat',
        title: 'Evolve',
        text: 'Internal capability installed to sustain evolution without dependency.',
      },
    ],
    note: 'At every stage the method is transferred to the organisation. The goal is for it to keep evolving without depending on consulting.',
  },

  services: {
    eyebrow: 'Solutions',
    title: 'How Procedural can help',
    lead: 'We work in combination, according to the organisation’s moment. What is not ready yet, we say clearly.',
    items: [
      {
        icon: 'compass',
        title: 'Management and organisational consulting',
        text: 'Diagnosis and structuring of management: roles, flows, decision rituals and priorities.',
      },
      {
        icon: 'repeat',
        title: 'Agile Management',
        text: 'Agility with strategic direction, without reducing the work to a set of ceremonies.',
      },
      {
        icon: 'shield',
        title: 'Governance and IT Management',
        text: 'Clarity on responsibilities, risks, decisions, metrics and priorities.',
      },
      {
        icon: 'users',
        title: 'People Management and Leadership',
        text: 'Development of leaders and teams able to generate collaboration and accountability.',
      },
      {
        icon: 'flow',
        title: 'Processes and Continuous Improvement',
        text: 'Removing waste, bottlenecks and rework; standardisation that releases capacity.',
      },
      {
        icon: 'chart',
        title: 'Metrics and Project Management',
        text: 'Management dashboards, goals and execution tracking with clear criteria.',
      },
    ],
    note: 'Emerging fronts — training, workshops, mentoring and digital management products — are presented only once they are ready to apply. Talk to us to understand what is already possible for your scenario.',
  },

  differential: {
    eyebrow: 'Differentiators',
    title: 'What changes when the method is applied well',
    items: [
      {
        icon: 'eye',
        title: 'Clarity before tools',
        text: 'No technology solves a badly designed process.',
      },
      {
        icon: 'shield',
        title: 'Governance without bureaucracy',
        text: 'Controls that help people decide, instead of blocking the operation.',
      },
      {
        icon: 'users',
        title: 'Processes that allow better people',
        text: 'Less improvisation, more room for work that requires judgement.',
      },
      {
        icon: 'message',
        title: 'Accessible language',
        text: 'We explain management without jargon, so leadership understands and teams execute.',
      },
      {
        icon: 'book',
        title: 'Transfer of method',
        text: 'The organisation learns how to do it, instead of just receiving a report.',
      },
      {
        icon: 'target',
        title: 'Focus on results, not on trends',
        text: 'Every method decision is evaluated by its real impact on the business.',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'Six stages, one continuous cycle',
    lead: 'The same reasoning applies to a project, a department or the whole organisation — only the depth changes.',
    steps: [
      {
        title: 'Diagnosis',
        text: 'Understand context, value flow, constraints, people and technology involved.',
      },
      {
        title: 'Prioritisation',
        text: 'Separate what attacks the root cause from what only distracts the organisation.',
      },
      {
        title: 'Solution design',
        text: 'Model processes, roles, rituals, governance and metrics.',
      },
      {
        title: 'Implementation',
        text: 'Put it into practice in short cycles, with close follow-up and adjustments.',
      },
      {
        title: 'Measurement',
        text: 'Track execution and outcome metrics, with an honest reading of the data.',
      },
      {
        title: 'Evolution',
        text: 'Institutionalise continuous improvement and the internal ability to decide.',
      },
    ],
    cycleTitle: 'The cycle does not end at delivery',
    cycleText:
      'Each stage feeds the next: measuring generates learning, learning redefines priorities. That cycle turns a project into permanent capability.',
    systemNote: 'The stages form a system. None of them works in isolation as a solution.',
    deliverablesTitle: 'What stays with the organisation',
    deliverables: [
      'Documented diagnosis and agreed priorities',
      'Processes and roles defined, with clear owners',
      'Management and governance rituals in operation',
      'Metrics dashboard with shared reading',
      'Team trained to sustain the method',
      'Evolution plan with objective next steps',
    ],
  },

  indicators: {
    eyebrow: 'Metrics',
    title: 'What starts being measured',
    lead: 'Management without measurement is opinion. These are the topics that usually organise the conversation about results.',
    items: [
      'Delivery predictability',
      'Cycle time',
      'Rework rate',
      'Bottlenecks and work queues',
      'Adherence to plan',
      'Process cost',
      'Perceived quality',
      'Team capacity and load',
      'Risks and dependencies',
      'Satisfaction and engagement',
      'Progress of strategic initiatives',
    ],
    note: 'Every organisation has its own relevant set. The point is to choose a few metrics and use them to decide — not to decorate a report.',
  },

  governance: {
    eyebrow: 'Governance',
    title: 'Governance without bureaucracy',
    lead: 'Governance is clarity about who decides, based on what, and with which risk accepted.',
    items: [
      {
        icon: 'users',
        title: 'Responsibilities',
        text: 'Who answers for each decision and each delivery.',
      },
      {
        icon: 'alert',
        title: 'Risks',
        text: 'Risks identified, prioritised and treated before they become a crisis.',
      },
      {
        icon: 'clipboard',
        title: 'Decisions',
        text: 'Defined forums, explicit criteria and a record of what was decided.',
      },
      {
        icon: 'chart',
        title: 'Metrics and priorities',
        text: 'A single performance reading for leadership and teams.',
      },
    ],
    note: 'Light governance: fewer decorative committees, more decisions at the right time.',
  },

  people: {
    eyebrow: 'People',
    title: 'Processes that allow better people',
    lead: 'No method survives without leaders and teams able to generate collaboration and accountability.',
    items: [
      'Leadership development',
      'Clear roles and expectations',
      'A culture of accountability',
      'Collaboration across departments',
      'Feedback and learning',
      'Safety to raise problems',
      'Recognition for results',
      'Teams with autonomy and direction',
    ],
    quote: 'Turning complexity into clarity.',
  },

  insights: {
    eyebrow: 'Insights',
    title: 'Procedural Insights',
    lead: 'Practical articles on management, governance, processes, metrics and leadership — little volume, with substance.',
    items: [
      {
        category: 'Agile Management',
        title: 'Agility is not speed: it is the ability to change course',
        summary:
          'How to tell working rhythm apart from hurry — and why strategic direction matters more than ceremonies.',
        slug: 'agilidade-ajustar-rota',
        readingMinutes: 4,
      },
      {
        category: 'Governance',
        title: 'Governance that decides, not one that documents',
        summary:
          'A practical take on decision forums, criteria and records, without turning governance into bureaucracy.',
        slug: 'governanca-que-decide',
        readingMinutes: 4,
      },
      {
        category: 'Processes and Metrics',
        title: 'Fewer metrics, better decisions',
        summary:
          'Why huge dashboards do not help you decide and how to choose the few metrics that truly matter.',
        slug: 'menos-indicadores-melhores-decisoes',
        readingMinutes: 3,
      },
    ],
    cta: 'Want to know when we publish?',
  },

  articles: {
    agility: {
      slug: 'agilidade-ajustar-rota',
      category: 'Agile Management',
      title: 'Agility is not speed: it is the ability to change course',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'Many organisations confuse agility with unrestricted acceleration. The recurring result of this misreading is team burnout, more deliveries with no value and constant rework.',
      lead: 'True organisational agility is not about doing the same work in less time; it is about shortening the cycle between decision, execution and reading the real business impact.',
      errorTitle: 'The common mistake: confusing hurry with sustainable pace',
      errorText:
        'When a company tries to implement agility by focusing only on delivery speed, it often runs into three structural problems.',
      problems: [
        {
          strong: 'Accumulated Work in Progress (WIP):',
          text: 'many initiatives started at once, but few finished with quality.',
        },
        {
          strong: 'Purposeless ceremonies:',
          text: 'alignment meetings that become bureaucratic status rituals.',
        },
        {
          strong: 'Strategic myopia:',
          text: 'extremely busy teams delivering tasks disconnected from real goals.',
        },
      ],
      pillarsTitle: 'The three pillars of strategic agility',
      pillars: [
        {
          title: '01. Workflow visibility',
          text: 'Flow transparency reveals bottlenecks, dependencies and waste before they hit deadlines and costs.',
        },
        {
          title: '02. Evidence-based redirection',
          text: 'Changing course requires operational and market data. Redirection must be clean and grounded.',
        },
        {
          title: '03. Rigorous prioritisation and sustainable pace',
          text: 'Limiting work in progress reduces cycle (Lead Time) and increases delivery predictability.',
        },
      ],
      quote: 'Agility is not about running faster. It is about knowing where to invest energy.',
    },
    governance: {
      slug: 'governanca-que-decide',
      category: 'Governance',
      title: 'Governance that decides, not one that documents',
      readingMinutes: 4,
      source: 'Procedural Insights',
      intro:
        'There is a corporate myth that governance only exists to create committees, slow approvals and reports nobody reads. Built that way, governance becomes a bottleneck that paralyses innovation.',
      lead: 'Mature governance does not exist to control every move, but to create decision clarity, risk visibility and priority alignment.',
      pillarsTitle: 'The four pillars of action-oriented governance',
      pillars: [
        {
          title: '01. Accountability',
          text: 'Clarity on who decides and who executes. Governance sets the exact boundaries of autonomy.',
        },
        {
          title: '02. Transparency',
          text: 'Access to real, up-to-date workflow data without the need for manual reports.',
        },
        {
          title: '03. Risk management',
          text: 'Knowing the risks taken and building practical mitigation plans before the impact.',
        },
        {
          title: '04. Decision forums',
          text: 'Structured meetings to solve problems and deliberate — never to repeat status.',
        },
      ],
      quote: 'Governance without bureaucracy: control should create clarity and safety, not block execution.',
    },
    metrics: {
      slug: 'menos-indicadores-melhores-decisoes',
      category: 'Processes and Metrics',
      title: 'Fewer metrics, better decisions',
      readingMinutes: 3,
      source: 'Procedural Insights',
      intro:
        'When an organisation tries to track dozens of metrics at once, the ability to see what truly matters gets diluted. A lot is measured, but little is decided from data.',
      lead: 'The purpose of a metric is not to fill reports or prove busyness, but to reduce uncertainty when making strategic and operational decisions.',
      pillarsTitle: 'Essential metrics for flow management',
      pillars: [
        { title: 'Lead Time', text: 'Total time from the initial request to the actual delivery.' },
        { title: 'Cycle Time', text: 'Active working time spent to complete a specific demand.' },
        { title: 'Throughput', text: 'Volume of valuable deliveries completed in a given period.' },
        { title: 'WIP (Work in Progress)', text: 'Number of tasks started at once that demand attention.' },
      ],
      quote:
        'If a metric changes level and no decision follows, that metric is probably dispensable.',
    },
  },

  about: {
    eyebrow: 'About',
    title: 'Management as practice, not as speech',
    lead: 'Procedural is a company specialised in agile management, governance, people management and organisational development.',
    paragraphs: [
      'We were born from practice: management work done inside real organisations, with real constraints, real deadlines and real people.',
      'We work at the intersection of method, people, processes, technology, governance and results. We do not treat agility as a trend, and we do not reduce management to a tool.',
      'Our stance is that of mature consulting with a young, modern identity: from the small business scaling up to mid-sized and large organisations.',
    ],
    valuesTitle: 'Principles',
    values: [
      {
        icon: 'eye',
        title: 'Clarity',
        text: 'If it is not clear, it is not solved.',
      },
      {
        icon: 'search',
        title: 'Diagnosis before opinion',
        text: 'Understanding the actual reality before proposing a solution.',
      },
      {
        icon: 'shield',
        title: 'Accountability',
        text: 'Commitment to results, not to the speech.',
      },
      {
        icon: 'repeat',
        title: 'Continuous evolution',
        text: 'Improvement as routine, not as an isolated project.',
      },
    ],
    note: 'We are building our base of cases, certifications and numbers. Until there is verifiable information, it will not be published here.',
  },

  founder: {
    eyebrow: 'Leadership',
    title: 'Who leads the work',
    name: 'Roberto Mendonça',
    role: 'Founder of Procedural',
    paragraphs: [
      'Roberto leads Procedural from the premise that management is practice: applied method, decisions based on data and development of the people who sustain the operation.',
      'He works at the interface between strategy, processes, technology and leadership, supporting organisations that need to gain predictability and execution capability.',
    ],
    focusTitle: 'Areas of work',
    focus: [
      'Agile management with strategic direction',
      'Governance and IT management',
      'Processes and continuous improvement',
      'Metrics and project management',
      'Leadership and team development',
    ],
  },

  cta: {
    title: 'Let us understand your scenario',
    text: 'An initial conversation is enough to identify where the bottlenecks are and which path makes sense for your organisation.',
    primary: 'Talk to a specialist',
    secondary: 'See our solutions',
    note: 'We reply to the email you provide.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Talk to Procedural',
    lead: 'Tell us about your organisation. If you prefer, write directly to the email below.',
    emailLabel: 'Email',
    email: 'santigarudananda@gmail.com',
    subjectsTitle: 'What we can talk about',
    subjects: [
      'Initial diagnosis of management, processes and metrics',
      'Governance, roles and decision rituals',
      'Agile management with strategic direction',
      'Leadership and team development',
      'Work proposal for a specific department or project',
    ],
    form: {
      title: 'Send a message',
      name: 'Name',
      namePlaceholder: 'How should we call you',
      company: 'Company',
      companyPlaceholder: 'Organisation name',
      role: 'Role',
      rolePlaceholder: 'E.g. Director, IT Manager, Coordinator',
      email: 'Email',
      emailPlaceholder: 'name@company.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: 'Optional',
      teamSize: 'Team size',
      teamSizeOptions: [
        '1 to 10 people',
        '11 to 50 people',
        '51 to 200 people',
        '201 to 1000 people',
        'More than 1000 people',
        'Prefer not to say',
      ],
      challenge: 'Main challenge',
      challengeOptions: [
        'Agile management',
        'Governance',
        'Processes and continuous improvement',
        'Metrics and project management',
        'People management and leadership',
        'IT management',
        'Something else',
      ],
      message: 'Message',
      messagePlaceholder: 'Briefly describe the scenario, the challenge and what you expect to solve.',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully. We will reply to the email you provided.',
      error: 'We could not send it right now. Please try again shortly or write to santigarudananda@gmail.com.',
      errorName: 'Please enter your name.',
      errorEmail: 'Please enter a valid email.',
      errorMessage: 'Please write a message with at least 20 characters.',
      required: 'Required field',
      optional: 'optional',
      privacy: 'We use the information you send only to reply to this contact.',
      selectPlaceholder: 'Select',
    },
  },

  footer: {
    tagline: 'We turn management, people and processes into real execution capability.',
    navTitle: 'Navigation',
    solutionsTitle: 'Solutions',
    contactTitle: 'Contact',
    solutionsLinks: [
      'Management consulting',
      'Agile Management',
      'Governance and IT Management',
      'People Management and Leadership',
      'Processes and Continuous Improvement',
    ],
    languages: 'Languages',
    rights: 'All rights reserved.',
    note: 'Institutional site under evolution: new solutions and content are published as they become ready to apply.',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address you accessed does not exist or has moved. You can go back to the home page or talk to Procedural.',
  },

  pages: {
    home: {
      label: 'Home',
    },
    solutions: {
      label: 'Solutions',
      title: 'What we solve with you',
      lead: 'The work front comes from the diagnosis — not from a fixed package. Below, what we do and which problem each front exists for.',
    },
    method: {
      label: 'Method',
      title: 'The Procedural Way in practice',
      lead: 'Philosophy, pillars and stages. Everything described directly, so you can judge whether the reasoning fits your scenario.',
    },
    insights: {
      label: 'Insights',
      title: 'A library under construction',
      lead: 'We prefer to publish little and with substance rather than filling pages with generic content.',
    },
    about: {
      label: 'About',
      title: 'Who we are and how we think',
      lead: 'Positioning, principles and the direction we are building for the coming years.',
    },
    contact: {
      label: 'Contact',
      title: 'Talk to Procedural',
      lead: 'We can start with an objective conversation about your context and your current bottlenecks.',
    },
  },
}