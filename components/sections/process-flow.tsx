"use client";

import { motion } from "framer-motion";
import { Search, Map, LayoutTemplate, Rocket, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function ProcessFlow({ dictionary }: { dictionary: Dictionary }) {
  const steps = [
    {
      icon: Search,
      title: dictionary.process.steps.diag.title,
      description: dictionary.process.steps.diag.desc,
    },
    {
      icon: Map,
      title: dictionary.process.steps.strat.title,
      description: dictionary.process.steps.strat.desc,
    },
    {
      icon: LayoutTemplate,
      title: dictionary.process.steps.dev.title,
      description: dictionary.process.steps.dev.desc,
    },
    {
      icon: Rocket,
      title: dictionary.process.steps.auto.title,
      description: dictionary.process.steps.auto.desc,
    },
    {
      icon: TrendingUp,
      title: dictionary.process.steps.scale.title,
      description: dictionary.process.steps.scale.desc,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container-page mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.process.title}
          </h2>
          <p className="text-lg text-neutral-400">
            {dictionary.process.description}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-accent/50 group-hover:shadow-glow-orange transition-all duration-300">
                  <step.icon className="w-6 h-6 text-neutral-400 group-hover:text-accent transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
