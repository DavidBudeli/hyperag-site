"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

export function AuthorityProof({ dictionary }: { dictionary: Dictionary }) {
  const logos = [
    { name: "Acme Corp", icon: "🏢" },
    { name: "GlobalTech", icon: "🌐" },
    { name: "InnovateAI", icon: "🧠" },
    { name: "NextScale", icon: "⚡" },
    { name: "FinFlow", icon: "💸" },
  ];

  return (
    <section className="relative overflow-hidden py-16 border-y border-white/5 bg-navy/50">
      <div className="container-page mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
              {dictionary.authority.eyebrow}
            </h3>
            <p className="text-2xl md:text-3xl font-medium text-white tracking-tight">
              {dictionary.authority.title}
            </p>
          </div>

          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">50+</span>
              <span className="text-sm font-medium text-neutral-400">{dictionary.authority.stats.projects}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">10</span>
              <span className="text-sm font-medium text-neutral-400">{dictionary.authority.stats.years}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">12</span>
              <span className="text-sm font-medium text-neutral-400">{dictionary.authority.stats.countries}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-lg font-bold text-white/80">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
