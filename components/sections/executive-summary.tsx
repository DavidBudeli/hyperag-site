"use client";

import type { Dictionary } from "@/lib/dictionaries";

export function ExecutiveSummary({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      <div className="container-page mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
            {dictionary.executiveSummary.title}
          </h2>
          
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight text-balance">
            {dictionary.executiveSummary.highlight}
          </p>
          
          <div className="h-px w-24 bg-accent/30 mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed text-balance">
            {dictionary.executiveSummary.description}
          </p>

        </div>
      </div>
    </section>
  );
}
