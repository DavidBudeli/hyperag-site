export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    aiAutomation: string;
    engineering: string;
    growth: string;
    cases: string;
    insights: string;
    book: string;
    language: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  executiveSummary: {
    title: string;
    highlight: string;
    description: string;
  };
  authority: {
    eyebrow: string;
    title: string;
    stats: {
      projects: string;
      years: string;
      countries: string;
    };
  };
  why: {
    title: string;
    description: string;
    points: {
      positioning: { title: string; desc: string };
      performance: { title: string; desc: string };
      branding: { title: string; desc: string };
      techEnabled: { title: string; desc: string };
      growth: { title: string; desc: string };
    };
  };
  capabilities: {
    title: string;
    description: string;
    items: {
      performance: { title: string; desc: string };
      brandStrategy: { title: string; desc: string };
      cro: { title: string; desc: string };
      leadGen: { title: string; desc: string };
      content: { title: string; desc: string };
    };
  };
  creativeProduction: {
    title: string;
    description: string;
    items: {
      video: { title: string; desc: string };
      photo: { title: string; desc: string };
      brand: { title: string; desc: string };
      social: { title: string; desc: string };
    };
  };
  industries: {
    title: string;
    description: string;
  };
  revenueImpact: {
    title: string;
    description: string;
    leads: string;
    revenue: string;
    cost: string;
    ops: string;
  };
  process: {
    title: string;
    description: string;
    steps: {
      diag: { title: string; desc: string };
      strat: { title: string; desc: string };
      dev: { title: string; desc: string };
      auto: { title: string; desc: string };
      scale: { title: string; desc: string };
    };
  };
  comparative: {
    title: string;
    description: string;
    traditional: string;
    hyperag: string;
    points: { label: string; trad: string; hyper: string }[];
  };
  trustLayer: {
    title: string;
    description: string;
    items: {
      methodology: string;
      partners: string;
      certifications: string;
      compliance: string;
    };
  };
  metrics: {
    title: string;
    description: string;
    leads: string;
    revenue: string;
    automations: string;
    hours: string;
    projects: string;
  };
  tech: {
    title: string;
    description: string;
  };
  ecosystem: {
    title: string;
    description: string;
    hyperag: string;
    hyperpag: string;
    hypergalaxy: string;
  };
  cases: {
    title: string;
    description: string;
    cta: string;
  };
  assessment: {
    title: string;
    description: string;
    cta: string;
  };
  book: {
    title: string;
    description: string;
    whatsapp: string;
    form: {
      name: string;
      email: string;
      company: string;
      submit: string;
    };
  };
  solutions: {
    ai: { title: string; description: string };
    engineering: { title: string; description: string };
    growth: { title: string; description: string };
  };
  cta: {
    whatsappUrl: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const dictionaries: Record<"pt-BR" | "en-US", Dictionary> = {
  "pt-BR": {
    meta: {
      title: "HyperAg | Global Growth & Branding Partner",
      description: "Agência global de marketing, branding e growth habilitada por tecnologia.",
      keywords: ["HyperAg", "Growth", "Branding", "Marketing", "Performance", "Conversão"],
    },
    nav: {
      aiAutomation: "IA & Automação",
      engineering: "Engenharia",
      growth: "Growth & Mídia",
      cases: "Cases",
      insights: "Insights",
      book: "Agendar Diagnóstico",
      language: "Idioma",
      menu: "Menu",
      close: "Fechar",
    },
    hero: {
      badge: "GLOBAL GROWTH PARTNER",
      title: "Crescimento, performance e marcas inesquecíveis.",
      description: "Somos uma agência global de branding e aquisição de clientes, unindo criatividade de ponta a infraestruturas de performance habilitadas por tecnologia.",
      ctaPrimary: "Descobrir Potencial",
      ctaSecondary: "Explorar Soluções",
    },
    executiveSummary: {
      title: "Nossa Visão",
      highlight: "Não somos apenas uma agência. Somos seus parceiros estratégicos de crescimento.",
      description: "A HyperAg nasceu para preencher a lacuna entre o branding de alto nível e a performance orientada por dados. Entendemos que tecnologia é o meio, mas o objetivo final é sempre escalar a receita da sua empresa e posicionar sua marca como líder global.",
    },
    authority: {
      eyebrow: "Confiança Global",
      title: "Marcas globais escalam conosco.",
      stats: {
        projects: "Campanhas Executadas",
        years: "Anos no Mercado",
        countries: "Países de Atuação",
      },
    },
    why: {
      title: "Por que a HyperAg?",
      description: "Nossa abordagem mistura criatividade premiada com arquitetura de conversão.",
      points: {
        positioning: { title: "Posicionamento Premium", desc: "Construímos marcas que não competem por preço, mas por valor percebido." },
        performance: { title: "Performance Extrema", desc: "Gestão de mídia orientada a ROI, CAC e LTV." },
        branding: { title: "Branding Baseado em Dados", desc: "Decisões criativas validadas por inteligência de mercado." },
        techEnabled: { title: "Tecnologia como Diferencial", desc: "Utilizamos IA e automação para escalar a distribuição criativa." },
        growth: { title: "Crescimento Estruturado", desc: "Funis de geração de demanda que não dependem de sorte." },
      },
    },
    capabilities: {
      title: "Nossas Soluções",
      description: "O ecossistema completo para dominar sua fatia de mercado.",
      items: {
        performance: { title: "Performance & Mídia", desc: "Aquisição de clientes em escala no Google, Meta e TikTok." },
        brandStrategy: { title: "Estratégia de Marca", desc: "Posicionamento, identidade verbal e visual." },
        cro: { title: "Otimização de Conversão (CRO)", desc: "Engenharia de landing pages e funis de alta conversão." },
        leadGen: { title: "Geração de Leads B2B", desc: "Sistemas de captação de contas high-ticket." },
        content: { title: "Content Marketing", desc: "Distribuição de autoridade em múltiplos canais." },
      },
    },
    creativeProduction: {
      title: "Produção Criativa & Audiovisual",
      description: "A excelência estética que separa marcas comuns de líderes absolutos.",
      items: {
        video: { title: "Video Production", desc: "Comerciais cinematográficos e narrativas visuais que capturam a atenção." },
        photo: { title: "Commercial Photography", desc: "Direção de arte e fotografia de alto nível para campanhas." },
        brand: { title: "Brand Content", desc: "Conteúdos editoriais que educam e encantam sua audiência." },
        social: { title: "Social Creative", desc: "Criativos dinâmicos projetados especificamente para conversão." },
      },
    },
    industries: {
      title: "Indústrias que Atendemos",
      description: "Experiência profunda na resolução de desafios específicos de cada setor.",
    },
    revenueImpact: {
      title: "Impacto Financeiro Direto",
      description: "Nós não vendemos serviços. Nós vendemos crescimento de faturamento.",
      leads: "Geração de Leads B2B/B2C",
      revenue: "Aumento de Faturamento",
      cost: "Redução de Custo de Aquisição",
      ops: "Ganho de Eficiência em Marketing",
    },
    process: {
      title: "Framework de Crescimento",
      description: "Como transformamos marcas em máquinas de receita.",
      steps: {
        diag: { title: "Auditoria", desc: "Análise de mercado, competidores e funil atual." },
        strat: { title: "Planejamento", desc: "Design do posicionamento e arquitetura de mídia." },
        dev: { title: "Produção", desc: "Criação de identidade, assets e infraestrutura de tracking." },
        auto: { title: "Distribuição", desc: "Lançamento das campanhas em multicanais." },
        scale: { title: "Escala & Otimização", desc: "Testes A/B, CRO e aumento progressivo de verba." },
      },
    },
    comparative: {
      title: "Por que empresas escolhem a HyperAg",
      description: "A diferença entre um serviço tradicional e uma parceria estratégica.",
      traditional: "Agências Tradicionais",
      hyperag: "HyperAg",
      points: [
        { label: "Foco Principal", trad: "Métricas de Vaidade", hyper: "Geração de Receita" },
        { label: "Execução", trad: "Lenta e Burocrática", hyper: "Ágil e Habilitada por Tecnologia" },
        { label: "Design", trad: "Templates Genéricos", hyper: "Direção Cinematográfica" },
        { label: "Dados", trad: "Relatórios Básicos", hyper: "Tracking Avançado e Modelagem" },
        { label: "Solução", trad: "Serviços Isolados", hyper: "Ecossistema Completo" },
      ]
    },
    trustLayer: {
      title: "Base de Confiança",
      description: "Metodologias aprovadas pelas maiores plataformas corporativas.",
      items: {
        methodology: "Frameworks Ágeis",
        partners: "Parceiros Tecnológicos",
        certifications: "Google & Meta Partners",
        compliance: "Segurança de Dados B2B",
      },
    },
    metrics: {
      title: "Track Record",
      description: "Números que refletem a consistência das nossas campanhas.",
      leads: "Leads Qualificados",
      revenue: "Faturamento Gerado",
      automations: "Contas Gerenciadas",
      hours: "ROAS Médio",
      projects: "Campanhas Lançadas",
    },
    tech: {
      title: "Stack de Growth",
      description: "A tecnologia é o nosso diferencial competitivo de execução e escala.",
    },
    ecosystem: {
      title: "Ecossistema Hyper",
      description: "Posicionamento claro para dominar todos os aspectos da sua operação.",
      hyperag: "Marketing, Growth, Mídia e Branding Global",
      hyperpag: "Infraestrutura de Pagamentos Transfronteiriços",
      hypergalaxy: "Tecnologia, IA, Automação e Engenharia de Software",
    },
    cases: {
      title: "Impacto no Mundo Real",
      description: "Como estruturamos tecnologia e marketing para escalar grandes negócios.",
      cta: "Ver Cases de Sucesso",
    },
    assessment: {
      title: "Descubra o Potencial de Crescimento da sua Empresa",
      description: "Faça nosso diagnóstico de maturidade digital e receba um plano de ação executivo elaborado pelos nossos estrategistas.",
      cta: "Iniciar Diagnóstico",
    },
    book: {
      title: "Pronto para dominar seu mercado?",
      description: "Preencha o formulário para agendar uma reunião estratégica com nossa diretoria.",
      whatsapp: "Ou fale com um estrategista agora:",
      form: {
        name: "Seu Nome",
        email: "E-mail Corporativo",
        company: "Sua Empresa",
        submit: "Solicitar Reunião Estratégica",
      },
    },
    solutions: {
      ai: { title: "IA & Automação", description: "Transforme operações lentas em processos autônomos instantâneos." },
      engineering: { title: "Engenharia de Software", description: "Sistemas web velozes, seguros e prontos para escalar globalmente." },
      growth: { title: "Growth & Media", description: "Aquisição de clientes impulsionada por dados e arquitetura de performance." },
    },
    cta: {
      whatsappUrl: "https://wa.me/message/NLLC6MHPC2Z4P1",
    },
    footer: {
      tagline: "Crescimento, performance e marcas inesquecíveis.",
      rights: "Todos os direitos reservados.",
    },
  },
  "en-US": {
    meta: {
      title: "HyperAg | Global Growth & Branding Partner",
      description: "Global marketing, branding, and growth agency enabled by technology.",
      keywords: ["HyperAg", "Growth", "Branding", "Marketing", "Performance", "Conversion"],
    },
    nav: {
      aiAutomation: "AI & Automation",
      engineering: "Engineering",
      growth: "Growth & Media",
      cases: "Cases",
      insights: "Insights",
      book: "Book Diagnostic",
      language: "Language",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      badge: "GLOBAL GROWTH PARTNER",
      title: "Growth, performance, and unforgettable brands.",
      description: "We are a global branding and customer acquisition agency, uniting cutting-edge creativity with tech-enabled performance infrastructures.",
      ctaPrimary: "Discover Potential",
      ctaSecondary: "Explore Solutions",
    },
    executiveSummary: {
      title: "Our Vision",
      highlight: "We are not just an agency. We are your strategic growth partners.",
      description: "HyperAg was born to bridge the gap between high-level branding and data-driven performance. We understand that technology is the means, but the ultimate goal is always to scale your revenue and position your brand as a global leader.",
    },
    authority: {
      eyebrow: "Global Trust",
      title: "Global brands scale with us.",
      stats: {
        projects: "Campaigns Executed",
        years: "Years in Market",
        countries: "Countries Reached",
      },
    },
    why: {
      title: "Why HyperAg?",
      description: "Our approach blends award-winning creativity with conversion architecture.",
      points: {
        positioning: { title: "Premium Positioning", desc: "We build brands that don't compete on price, but on perceived value." },
        performance: { title: "Extreme Performance", desc: "Media management driven by ROI, CAC, and LTV." },
        branding: { title: "Data-Driven Branding", desc: "Creative decisions validated by market intelligence." },
        techEnabled: { title: "Tech-Enabled", desc: "We use AI and automation to scale creative distribution." },
        growth: { title: "Structured Growth", desc: "Demand generation funnels that don't rely on luck." },
      },
    },
    capabilities: {
      title: "Our Solutions",
      description: "The complete ecosystem to dominate your market share.",
      items: {
        performance: { title: "Performance & Media", desc: "Customer acquisition at scale across Google, Meta, and TikTok." },
        brandStrategy: { title: "Brand Strategy", desc: "Positioning, verbal and visual identity." },
        cro: { title: "Conversion Rate Optimization (CRO)", desc: "Engineering of high-conversion landing pages and funnels." },
        leadGen: { title: "B2B Lead Generation", desc: "High-ticket account acquisition systems." },
        content: { title: "Content Marketing", desc: "Authority distribution across multiple channels." },
      },
    },
    creativeProduction: {
      title: "Creative & Audiovisual Production",
      description: "The aesthetic excellence that separates average brands from absolute leaders.",
      items: {
        video: { title: "Video Production", desc: "Cinematic commercials and visual narratives that capture attention." },
        photo: { title: "Commercial Photography", desc: "High-end art direction and photography for campaigns." },
        brand: { title: "Brand Content", desc: "Editorial content that educates and delights your audience." },
        social: { title: "Social Creative", desc: "Dynamic creatives designed specifically for conversion." },
      },
    },
    industries: {
      title: "Industries We Serve",
      description: "Deep expertise in solving specific challenges across verticals.",
    },
    revenueImpact: {
      title: "Direct Financial Impact",
      description: "We don't sell services. We sell revenue growth.",
      leads: "B2B/B2C Lead Generation",
      revenue: "Revenue Increase",
      cost: "Acquisition Cost Reduction",
      ops: "Marketing Efficiency Gain",
    },
    process: {
      title: "Growth Framework",
      description: "How we turn brands into revenue machines.",
      steps: {
        diag: { title: "Audit", desc: "Analysis of market, competitors, and current funnel." },
        strat: { title: "Planning", desc: "Positioning design and media architecture." },
        dev: { title: "Production", desc: "Creation of identity, assets, and tracking infrastructure." },
        auto: { title: "Distribution", desc: "Multi-channel campaign launch." },
        scale: { title: "Scale & Optimize", desc: "A/B testing, CRO, and budget scaling." },
      },
    },
    comparative: {
      title: "Why companies choose HyperAg",
      description: "The difference between a traditional service and a strategic partnership.",
      traditional: "Traditional Agencies",
      hyperag: "HyperAg",
      points: [
        { label: "Main Focus", trad: "Vanity Metrics", hyper: "Revenue Generation" },
        { label: "Execution", trad: "Slow & Bureaucratic", hyper: "Agile & Tech-Enabled" },
        { label: "Design", trad: "Generic Templates", hyper: "Cinematic Direction" },
        { label: "Data", trad: "Basic Reports", hyper: "Advanced Tracking & Modeling" },
        { label: "Solution", trad: "Isolated Services", hyper: "Complete Ecosystem" },
      ]
    },
    trustLayer: {
      title: "Trust Layer",
      description: "Methodologies approved by the largest corporate platforms.",
      items: {
        methodology: "Agile Frameworks",
        partners: "Tech Partners",
        certifications: "Google & Meta Partners",
        compliance: "B2B Data Security",
      },
    },
    metrics: {
      title: "Track Record",
      description: "Numbers that reflect the consistency of our campaigns.",
      leads: "Qualified Leads",
      revenue: "Revenue Generated",
      automations: "Managed Accounts",
      hours: "Average ROAS",
      projects: "Campaigns Launched",
    },
    tech: {
      title: "Growth Stack",
      description: "Technology is our competitive advantage for execution and scale.",
    },
    ecosystem: {
      title: "Hyper Ecosystem",
      description: "Clear positioning to dominate every aspect of your operation.",
      hyperag: "Global Marketing, Growth, Media, and Branding",
      hyperpag: "Cross-border Payment Infrastructure",
      hypergalaxy: "Technology, AI, Automation, and Software Engineering",
    },
    cases: {
      title: "Real World Impact",
      description: "How we structure technology and marketing to scale great businesses.",
      cta: "View Success Cases",
    },
    assessment: {
      title: "Discover Your Company's Growth Potential",
      description: "Take our digital maturity diagnostic and receive an executive action plan crafted by our strategists.",
      cta: "Start Diagnostic",
    },
    book: {
      title: "Ready to dominate your market?",
      description: "Fill out the form to schedule a strategic meeting with our board.",
      whatsapp: "Or talk to a strategist now:",
      form: {
        name: "Your Name",
        email: "Corporate E-mail",
        company: "Your Company",
        submit: "Request Strategic Meeting",
      },
    },
    solutions: {
      ai: { title: "AI & Automation", description: "Transform slow operations into instant autonomous processes." },
      engineering: { title: "Software Engineering", description: "Fast, secure, and globally scalable web systems." },
      growth: { title: "Growth & Media", description: "Customer acquisition powered by data and performance architecture." },
    },
    cta: {
      whatsappUrl: "https://wa.me/message/NLLC6MHPC2Z4P1",
    },
    footer: {
      tagline: "Growth, performance, and unforgettable brands.",
      rights: "All rights reserved.",
    },
  },
};
