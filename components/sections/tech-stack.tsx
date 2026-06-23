"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

export function TechStack({ dictionary }: { dictionary: Dictionary }) {
  const techs = [
    "Google Ads", "Meta Ads", "TikTok Ads", "Google Analytics",
    "Search Console", "Figma", "Next.js", "React",
    "OpenAI", "Anthropic", "n8n", "Supabase"
  ];

  return (
    <section className="py-24 relative border-y border-white/5 bg-navy-950">
      <div className="container-page mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          {dictionary.tech.title}
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-16">
          {dictionary.tech.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <div 
              key={i} 
              className="px-6 py-3 rounded-full border border-white/10 bg-navy-900/50 glass-surface text-neutral-300 font-medium hover:text-white hover:border-white/30 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
