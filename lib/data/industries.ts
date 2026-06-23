export type Industry = {
  id: string;
  name: {
    "pt-BR": string;
    "en-US": string;
  };
  pain: {
    "pt-BR": string;
    "en-US": string;
  };
  solution: {
    "pt-BR": string;
    "en-US": string;
  };
  result: {
    "pt-BR": string;
    "en-US": string;
  };
  icon: string; // We'll use lucide-react icon names or custom mapping
};

export const industries: Industry[] = [
  {
    id: "clinics",
    name: { "pt-BR": "Clínicas & Saúde", "en-US": "Healthcare & Clinics" },
    pain: { 
      "pt-BR": "Custo de aquisição alto e agendas com buracos.", 
      "en-US": "High acquisition costs and empty schedule slots." 
    },
    solution: { 
      "pt-BR": "Funil de captação direto para WhatsApp com IA de triagem.", 
      "en-US": "Direct-to-WhatsApp funnel with AI triage." 
    },
    result: { 
      "pt-BR": "+40% no volume de pacientes particulares.", 
      "en-US": "+40% in private patient volume." 
    },
    icon: "Stethoscope"
  },
  {
    id: "law",
    name: { "pt-BR": "Escritórios de Advocacia", "en-US": "Law Firms" },
    pain: { 
      "pt-BR": "Dificuldade em captar clientes corporativos de alto valor (High-Ticket).", 
      "en-US": "Difficulty in acquiring high-value corporate clients." 
    },
    solution: { 
      "pt-BR": "Account-Based Marketing (ABM) e produção de conteúdo de autoridade.", 
      "en-US": "Account-Based Marketing (ABM) and authority content production." 
    },
    result: { 
      "pt-BR": "Aumento no LTV e previsibilidade de contratos.", 
      "en-US": "Increased LTV and contract predictability." 
    },
    icon: "Scale"
  },
  {
    id: "ecommerce",
    name: { "pt-BR": "E-commerce", "en-US": "E-commerce" },
    pain: { 
      "pt-BR": "Margens esmagadas por ROAS baixo e abandono de carrinho.", 
      "en-US": "Margins crushed by low ROAS and cart abandonment." 
    },
    solution: { 
      "pt-BR": "Otimização de conversão (CRO), retenção (CRM) e escala no Meta/TikTok Ads.", 
      "en-US": "Conversion Rate Optimization (CRO), retention (CRM), and scaling on Meta/TikTok Ads." 
    },
    result: { 
      "pt-BR": "Escala sustentável com ROAS médio de 5x+.", 
      "en-US": "Sustainable scale with an average 5x+ ROAS." 
    },
    icon: "ShoppingCart"
  },
  {
    id: "construction",
    name: { "pt-BR": "Construção Civil & Real Estate", "en-US": "Construction & Real Estate" },
    pain: { 
      "pt-BR": "Ciclos de vendas longos e leads desqualificados.", 
      "en-US": "Long sales cycles and unqualified leads." 
    },
    solution: { 
      "pt-BR": "Arquitetura de branding imobiliário e captação qualificada via Google Search.", 
      "en-US": "Real estate branding architecture and qualified capture via Google Search." 
    },
    result: { 
      "pt-BR": "Redução do ciclo de venda e aumento do VGV.", 
      "en-US": "Reduced sales cycle and increased gross sales volume." 
    },
    icon: "Building2"
  },
  {
    id: "franchises",
    name: { "pt-BR": "Franquias", "en-US": "Franchises" },
    pain: { 
      "pt-BR": "Dificuldade em padronizar o marketing local e captar novos franqueados.", 
      "en-US": "Difficulty standardizing local marketing and acquiring new franchisees." 
    },
    solution: { 
      "pt-BR": "Estrutura de mídia centralizada para expansão da marca.", 
      "en-US": "Centralized media structure for brand expansion." 
    },
    result: { 
      "pt-BR": "Expansão acelerada de novas unidades.", 
      "en-US": "Accelerated expansion of new units." 
    },
    icon: "Store"
  }
];
