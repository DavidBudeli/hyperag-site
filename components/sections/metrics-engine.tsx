"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Zap, Clock, CheckCircle } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function MetricsEngine({ dictionary }: { dictionary: Dictionary }) {
  const metrics = [
    { label: dictionary.metrics.leads, value: "100k+", icon: Users },
    { label: dictionary.metrics.revenue, value: "$50M+", icon: DollarSign },
    { label: dictionary.metrics.automations, value: "500+", icon: Zap },
    { label: dictionary.metrics.hours, value: "10k+", icon: Clock },
    { label: dictionary.metrics.projects, value: "150+", icon: CheckCircle },
  ];

  return (
    <section className="py-24 relative bg-navy-950 border-y border-white/5">
      <div className="container-page mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.metrics.title}
          </h2>
          <p className="text-lg text-neutral-400">
            {dictionary.metrics.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, i) => (
            <div key={i} className="glass-surface rounded-2xl p-6 text-center border border-white/10 flex flex-col items-center group hover:border-accent/30 transition-colors">
              <metric.icon className="w-8 h-8 text-neutral-500 mb-4 group-hover:text-accent transition-colors" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-neutral-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
