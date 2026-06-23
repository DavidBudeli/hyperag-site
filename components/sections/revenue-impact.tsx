"use client";

import { motion } from "framer-motion";
import { Users2, DollarSign, ArrowDownRight, Settings2 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function RevenueImpact({ dictionary }: { dictionary: Dictionary }) {
  const metrics = [
    { label: dictionary.revenueImpact.leads, icon: Users2, color: "text-blue-500" },
    { label: dictionary.revenueImpact.revenue, icon: DollarSign, color: "text-emerald-500" },
    { label: dictionary.revenueImpact.cost, icon: ArrowDownRight, color: "text-orange-500" },
    { label: dictionary.revenueImpact.ops, icon: Settings2, color: "text-purple-500" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-techBlue/10 via-transparent to-transparent opacity-30 pointer-events-none" />
      
      <div className="container-page mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.revenueImpact.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {dictionary.revenueImpact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <div key={i} className="p-8 rounded-3xl bg-navy-950 border border-white/10 text-center hover:border-white/30 transition-colors flex flex-col items-center group">
              <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${m.color}`}>
                <m.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {m.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
