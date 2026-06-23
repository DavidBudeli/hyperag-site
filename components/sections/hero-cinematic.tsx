"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3, LineChart, Target, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";

type HeroCinematicProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function HeroCinematic({ dictionary, locale }: HeroCinematicProps) {
  const hero = dictionary.hero;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleMouseMove = (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-navy-950 perspective-[2000px]">
      
      {/* Motion Design UX Background - Real Client Experience UI Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Floating UI Card 1: Revenue Chart */}
        <motion.div
          animate={{
            y: [-10, 20, -10],
            rotateY: [10, 15, 10],
            rotateX: [5, 10, 5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] md:left-[10%] w-72 h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-2xl opacity-40"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-neutral-300">
              <LineChart className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase">Revenue Growth</span>
            </div>
            <span className="text-emerald-400 text-sm font-bold">+124%</span>
          </div>
          <div className="flex items-end justify-between h-20 gap-2 mt-4">
            {[30, 45, 60, 40, 80, 100].map((h, i) => (
              <div key={i} className={`w-full rounded-sm ${i === 5 ? 'bg-accent' : 'bg-techBlue/50'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>

        {/* Floating UI Card 2: User Funnel */}
        <motion.div
          animate={{
            y: [20, -15, 20],
            rotateY: [-10, -5, -10],
            rotateZ: [-5, -2, -5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[5%] md:right-[15%] w-64 h-56 bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl opacity-40 flex flex-col"
        >
          <div className="flex items-center gap-2 text-neutral-300 mb-4">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase">Conversion Funnel</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-8 bg-white/10 rounded-full flex items-center px-4"><div className="text-[10px] text-white/50">Impressions (1.2M)</div></div>
            <div className="w-[80%] mx-auto h-8 bg-techBlue/30 rounded-full flex items-center px-4"><div className="text-[10px] text-white/70">Clicks (84K)</div></div>
            <div className="w-[50%] mx-auto h-8 bg-accent/40 rounded-full flex items-center px-4"><div className="text-[10px] text-white">Leads (12K)</div></div>
          </div>
        </motion.div>

        {/* Floating UI Card 3: Active Users */}
        <motion.div
          animate={{
            x: [-15, 15, -15],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[15%] md:left-[25%] w-48 bg-navy-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl opacity-30"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Active Users</div>
              <div className="text-xl text-white font-bold">42,890</div>
            </div>
          </div>
        </motion.div>

        {/* Overlays to blend the UI elements into the background */}
        <div className="absolute inset-0 bg-navy-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 z-10" />
        
        {/* Soft center glow to highlight text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-techBlue/10 blur-[150px] rounded-full z-10" />
      </div>

      <div className="container-page relative z-30 mx-auto px-4 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8 text-sm text-neutral-300 backdrop-blur-md shadow-xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          {hero.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white text-balance leading-[1.05]"
        >
          {hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-400 text-balance leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 h-14 px-8 rounded-full font-bold transition-transform hover:scale-105 w-full sm:w-auto">
            <Link href={`/${locale}/book`}>
              {hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-14 px-8 rounded-full font-medium backdrop-blur-md transition-colors w-full sm:w-auto">
            <Link href={`/${locale}#capabilities`}>
              <Terminal className="mr-2 h-5 w-5" />
              {hero.ctaSecondary}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
