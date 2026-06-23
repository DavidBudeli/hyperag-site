"use client";

import { ShieldCheck, Network, Award, FileLock2 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function TrustLayer({ dictionary }: { dictionary: Dictionary }) {
  const items = [
    { label: dictionary.trustLayer.items.methodology, icon: ShieldCheck },
    { label: dictionary.trustLayer.items.partners, icon: Network },
    { label: dictionary.trustLayer.items.certifications, icon: Award },
    { label: dictionary.trustLayer.items.compliance, icon: FileLock2 },
  ];

  return (
    <section className="py-24 relative">
      <div className="container-page mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          {dictionary.trustLayer.title}
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-16">
          {dictionary.trustLayer.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-900 border border-white/10">
              <item.icon className="w-8 h-8 text-neutral-500 mb-4" />
              <span className="text-sm font-semibold text-white text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
