"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function AssessmentCTA({ dictionary, locale }: { dictionary: Dictionary, locale: string }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-page mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-accent/20 to-techBlue/20 rounded-[3rem] p-1 border border-white/10">
          <div className="bg-navy-950 rounded-[2.8rem] p-12 md:p-20 text-center relative overflow-hidden">
            
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                <ClipboardCheck className="w-8 h-8 text-accent" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 max-w-2xl">
                {dictionary.assessment.title}
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl">
                {dictionary.assessment.description}
              </p>
              
              <Link 
                href={`/${locale}/book`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-black font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-glow-orange"
              >
                {dictionary.assessment.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
