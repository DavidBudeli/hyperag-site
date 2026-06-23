export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  title: string;
  excerpt: string;
  metrics: {
    label: string;
    value: string;
  }[];
  content: {
    problem: string;
    solution: string;
    implementation: string;
    result: string;
  };
  techStack: string[];
  imageUrl?: string;
};

export const cases: CaseStudy[] = [
  {
    id: "case-1",
    slug: "fintech-automation",
    client: "Global Fintech",
    industry: "Financial Services",
    title: "Scaling Revenue Operations with AI Automation",
    excerpt: "How we implemented a custom revenue automation system that saved 400+ hours monthly and accelerated lead-to-close times by 60%.",
    metrics: [
      { label: "Hours Saved", value: "400+" },
      { label: "Pipeline Velocity", value: "+60%" },
      { label: "ROI", value: "3.5x" }
    ],
    content: {
      problem: "The client was manually processing hundreds of high-ticket leads using disjointed CRMs and spreadsheets, leading to a 48-hour response time and significant lead leakage.",
      solution: "We designed a unified Growth Infrastructure integrating their CRM with an autonomous AI triage agent that pre-qualifies and routes leads instantly.",
      implementation: "Using Next.js for the internal dashboard, Supabase for realtime data sync, and n8n + OpenAI for the autonomous workflows, we deployed the entire system in 8 weeks.",
      result: "Lead response time dropped from 48 hours to 2 minutes. The sales team closed 60% faster, directly increasing quarterly revenue by over 30%."
    },
    techStack: ["Next.js", "Supabase", "n8n", "OpenAI"],
  },
  {
    id: "case-2",
    slug: "enterprise-ecommerce",
    client: "Retail Enterprise",
    industry: "E-commerce",
    title: "Headless Migration and Performance Engineering",
    excerpt: "Migrating a legacy monolith to a modern headless architecture, resulting in sub-second page loads and a massive conversion bump.",
    metrics: [
      { label: "Load Time", value: "<1s" },
      { label: "Conversion Rate", value: "+45%" },
      { label: "Organic Traffic", value: "+120%" }
    ],
    content: {
      problem: "The enterprise e-commerce platform was struggling with slow load times (average 6s) on mobile, severely impacting their ROAS on Meta and Google Ads.",
      solution: "We engineered a fully headless storefront focusing on edge computing, SSR caching, and a highly optimized critical rendering path.",
      implementation: "Built on Next.js App Router, integrated with Shopify Headless API, and deployed on Vercel edge networks. We also overhauled their tracking ecosystem for precise attribution.",
      result: "The platform now loads in under 1 second globally. This technical upgrade alone increased the final conversion rate by 45% and improved organic SEO traffic by 120%."
    },
    techStack: ["Next.js", "Shopify API", "Vercel", "TailwindCSS"],
  }
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find(c => c.slug === slug);
}
