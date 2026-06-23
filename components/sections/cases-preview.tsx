"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Presentation } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { cases } from "@/lib/data/cases";
import type { Locale } from "@/lib/i18n";
import Image from "next/image";

export function CasesPreview({ dictionary, locale }: { dictionary: Dictionary, locale: Locale }) {
  // Take top 2 cases
  const topCases = cases.slice(0, 2);

  return (
    <section className="py-32 relative bg-navy-950 border-y border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-techBlue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-page mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              <Presentation className="w-4 h-4" />
              Executive Case Studies
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              {dictionary.cases.title}
            </h2>
            <p className="text-xl text-neutral-400">
              {dictionary.cases.description}
            </p>
          </div>
          <Link 
            href={`/${locale}/cases`}
            className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 transition-colors font-medium backdrop-blur-md"
          >
            {dictionary.cases.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {topCases.map((c, i) => (
            <Link key={i} href={`/${locale}/cases/${c.slug}`} className="group block relative">
              
              {/* Card Container */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-[600px] rounded-[2.5rem] border border-white/10 bg-navy-900 overflow-hidden relative flex flex-col"
              >
                
                {/* Visual Background (Image/Video Mockup) */}
                <div className="absolute inset-0 z-0 bg-navy-950">
                  <Image 
                    src={i === 0 ? "/images/cases/case1.jpg" : "/images/cases/case2.jpg"} 
                    alt={c.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
                </div>

                {/* Top Tags */}
                <div className="relative z-20 flex justify-between items-center p-8">
                  <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase text-white">
                    {c.industry}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 mt-auto p-8 flex flex-col gap-6">
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-neutral-300 text-lg line-clamp-2 max-w-md">
                      {c.excerpt}
                    </p>
                  </div>

                  {/* Floating Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {c.metrics.map((m, idx) => (
                      <div key={idx} className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <BarChart3 className="w-3 h-3 text-accent" />
                          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{m.label}</div>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-white">{m.value}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
