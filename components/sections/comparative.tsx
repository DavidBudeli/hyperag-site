"use client";

import { Check, X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function Comparative({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 relative bg-navy-950 border-y border-white/5">
      <div className="container-page mx-auto px-4">
        
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.comparative.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {dictionary.comparative.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-white/10 text-neutral-400 font-medium w-1/3"></th>
                <th className="p-4 border-b border-white/10 text-neutral-500 font-medium w-1/3 text-center">
                  {dictionary.comparative.traditional}
                </th>
                <th className="p-4 border-b border-white/10 text-accent font-bold w-1/3 text-center">
                  {dictionary.comparative.hyperag}
                </th>
              </tr>
            </thead>
            <tbody>
              {dictionary.comparative.points.map((point, i) => (
                <tr key={i} className="group hover:bg-white/5 transition-colors">
                  <td className="p-4 border-b border-white/10 text-white font-medium">
                    {point.label}
                  </td>
                  <td className="p-4 border-b border-white/10 text-neutral-400 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-red-500/70" />
                      {point.trad}
                    </div>
                  </td>
                  <td className="p-4 border-b border-white/10 text-white font-semibold text-center bg-accent/5 group-hover:bg-accent/10 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      {point.hyper}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
