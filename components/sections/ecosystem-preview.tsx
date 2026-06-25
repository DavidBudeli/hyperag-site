"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

function EcosystemLogo({ basePath, alt }: { basePath: string, alt: string }) {
  const exts = ['.svg', '.png', '.webp', '.jpg', '.jpeg'];
  const [extIdx, setExtIdx] = useState(0);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (extIdx < exts.length - 1) {
      setExtIdx(prev => prev + 1);
    } else {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
        <span className="text-xl font-bold tracking-tight text-white uppercase">{alt.substring(5, 7)}</span>
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
      <Image 
        src={`${basePath}${exts[extIdx]}`}
        alt={alt}
        fill
        className="object-contain"
        onError={handleError}
      />
    </div>
  );
}

export function EcosystemPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 md:py-32 relative bg-navy-950 border-y border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-techBlue/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container-page mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.ecosystem.title}
          </h2>
          <p className="text-lg text-neutral-400">
            {dictionary.ecosystem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          
          {/* Connection Line */}
          <div className="absolute top-[100px] left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          {/* HyperAg (Marketing) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-white/5 bg-navy-900/80 relative z-10 hover:bg-white/5 transition-all duration-500 group hover:shadow-[0_0_60px_rgba(255,107,0,0.15)] hover:border-accent/30"
          >
            <EcosystemLogo basePath="/logos/ecosystem/hyperag" alt="HyperAg" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">HyperAg</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {dictionary.ecosystem.hyperag}
            </p>
          </motion.div>

          {/* HyperPag (Payments) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-white/5 relative z-10 hover:bg-white/5 transition-all duration-500 group bg-navy-900/80 hover:shadow-[0_0_60px_rgba(16,185,129,0.15)] hover:border-emerald-500/30"
          >
            <EcosystemLogo basePath="/logos/ecosystem/hyperpag" alt="HyperPag" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-500 transition-colors">HyperPag</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {dictionary.ecosystem.hyperpag}
            </p>
          </motion.div>

          {/* HyperGalaxy (Tech/Software) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-surface rounded-3xl p-8 border border-white/5 relative z-10 hover:bg-white/5 transition-all duration-500 group bg-navy-900/80 hover:shadow-[0_0_60px_rgba(168,85,247,0.15)] hover:border-purple-500/30"
          >
            <EcosystemLogo basePath="/logos/ecosystem/hypergalaxy" alt="HyperGalaxy" />
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
