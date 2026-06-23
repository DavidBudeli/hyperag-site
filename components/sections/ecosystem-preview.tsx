"use client";

import { motion } from "framer-motion";
import { Megaphone, Box, CreditCard } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function EcosystemPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 md:py-32 relative bg-navy-950 border-y border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-techBlue/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container-page mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.ecosystem.title}
          </h2>
          <p className="text-lg text-neutral-400">
            {dictionary.ecosystem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />

          {/* HyperAg (Marketing) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-accent/50 bg-navy-900/80 relative z-10 hover:bg-accent/5 transition-all group shadow-[0_0_40px_rgba(255,107,0,0.1)] hover:shadow-[0_0_60px_rgba(255,107,0,0.2)]"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Megaphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">HyperAg</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {dictionary.ecosystem.hyperag}
            </p>
          </motion.div>

          {/* HyperPag (Payments) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-white/10 relative z-10 hover:bg-white/5 transition-all group bg-navy-900/80 hover:border-emerald-500/30"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-500 transition-colors">HyperPag</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {dictionary.ecosystem.hyperpag}
            </p>
          </motion.div>

          {/* HyperGalaxy (Tech/Software) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-white/10 relative z-10 hover:bg-white/5 transition-all group hover:border-purple-500/30 bg-navy-900/80"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Box className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-500 transition-colors">HyperGalaxy</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {dictionary.ecosystem.hypergalaxy}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
