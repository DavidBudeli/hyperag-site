export type Insight = {
  id: string;
  slug: string;
  title: string;
  category: "Engineering" | "Growth" | "AI & Automation" | "Strategy";
  date: string;
  author: string;
  excerpt: string;
  content: string; // Markdown or rich text representation
  readTime: string;
};

export const insights: Insight[] = [
  {
    id: "insight-1",
    slug: "building-ai-agents-n8n",
    title: "Building Autonomous AI Agents with n8n and OpenAI",
    category: "AI & Automation",
    date: "2026-06-10",
    author: "HyperAg Engineering",
    excerpt: "A deep dive into constructing reliable, autonomous AI agents that can handle complex B2B workflows using n8n.",
    readTime: "8 min read",
    content: "Content placeholder. In a real environment, this would be fetched from Sanity/Strapi and rendered using MDX or Portable Text.",
  },
  {
    id: "insight-2",
    slug: "nextjs-15-enterprise-architecture",
    title: "Next.js 15: Enterprise Architecture Guide",
    category: "Engineering",
    date: "2026-06-05",
    author: "HyperAg Engineering",
    excerpt: "How we structure high-performance Next.js 15 applications for global scale, from state management to Edge caching.",
    readTime: "12 min read",
    content: "Content placeholder. In a real environment, this would be fetched from Sanity/Strapi and rendered using MDX or Portable Text.",
  },
  {
    id: "insight-3",
    slug: "b2b-growth-infrastructure",
    title: "The Anatomy of a B2B Growth Infrastructure",
    category: "Strategy",
    date: "2026-05-28",
    author: "HyperAg Growth",
    excerpt: "Why traditional marketing fails B2B companies, and how engineering a custom growth infrastructure changes the game.",
    readTime: "6 min read",
    content: "Content placeholder. In a real environment, this would be fetched from Sanity/Strapi and rendered using MDX or Portable Text.",
  }
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find(i => i.slug === slug);
}
