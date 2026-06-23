"use client";

import { useState } from "react";
import { industries } from "@/lib/data/industries";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Stethoscope, Scale, ShoppingCart, Building2, Store } from "lucide-react";
import type React from "react";

const IconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Scale,
  ShoppingCart,
  Building2,
  Store,
};

export function Industries({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeInd = industries.find(i => i.id === activeId) || industries[0];

  return (
    <section className="py-24 relative bg-navy-950 border-y border-white/5">
      <div className="container-page mx-auto px-4">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.industries.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {dictionary.industries.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industries.map((ind) => {
              const Icon = IconMap[ind.icon] || Store;
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                    isActive 
                      ? "bg-accent text-black font-bold shadow-glow-orange" 
                      : "bg-navy-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {ind.name[locale]}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <div className="p-8 md:p-12 rounded-3xl bg-navy-900 border border-white/10 h-full flex flex-col justify-center gap-8 glass-surface">
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">O Problema</h4>
                <p className="text-xl text-white font-medium leading-relaxed">
                  {activeInd.pain[locale]}
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <h4 className="text-sm uppercase tracking-wider text-techBlue font-semibold mb-2">A Solução</h4>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {activeInd.solution[locale]}
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <h4 className="text-sm uppercase tracking-wider text-emerald-500 font-semibold mb-2">O Resultado Médio</h4>
                <p className="text-2xl text-white font-bold tracking-tight">
                  {activeInd.result[locale]}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
