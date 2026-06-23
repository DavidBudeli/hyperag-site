"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Target, Activity } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function WhyHyperAg({ dictionary }: { dictionary: Dictionary }) {
  const points = [
    { title: dictionary.why.points.positioning.title, desc: dictionary.why.points.positioning.desc },
    { title: dictionary.why.points.performance.title, desc: dictionary.why.points.performance.desc },
    { title: dictionary.why.points.branding.title, desc: dictionary.why.points.branding.desc },
    { title: dictionary.why.points.techEnabled.title, desc: dictionary.why.points.techEnabled.desc },
    { title: dictionary.why.points.growth.title, desc: dictionary.why.points.growth.desc },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950 border-y border-white/5">
      <div className="container-page mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
              {dictionary.why.title}
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10">
              {dictionary.why.description}
            </p>
            
            <div className="flex flex-col gap-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{point.title}</h4>
                    <p className="text-sm text-neutral-400">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Growth Dashboard */}
          <div className="relative h-[650px] rounded-3xl border border-white/10 bg-navy-900 glass-surface overflow-hidden flex flex-col p-6 shadow-2xl">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-techBlue/10 via-transparent to-transparent opacity-50 pointer-events-none" />
             
             {/* Dashboard Header */}
             <div className="relative z-10 flex justify-between items-center mb-6 border-b border-white/5 pb-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                 <Activity className="w-4 h-4 text-accent" />
                 Live Analytics
               </span>
             </div>

             <div className="relative z-10 flex-1 flex flex-col gap-4">
                
                {/* Main Metrics Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-neutral-400 mb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-semibold uppercase">ROAS Global</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">5.4x</span>
                      <span className="text-xs text-emerald-500 font-medium">+1.2x</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-neutral-400 mb-3">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold uppercase">Leads Qualificados</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">1,204</span>
                      <span className="text-xs text-emerald-500 font-medium">+15%</span>
                    </div>
                  </motion.div>
                </div>

                {/* Main Metrics Row 2 */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5"
                  >
                    <div className="text-xs text-neutral-500 font-semibold mb-1 uppercase">Custo de Aquisição (CAC)</div>
                    <div className="text-xl font-bold text-white mb-1">R$ 142</div>
                    <div className="text-xs text-emerald-500">-12% YoY</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5"
                  >
                    <div className="text-xs text-neutral-500 font-semibold mb-1 uppercase">Lifetime Value (LTV)</div>
                    <div className="text-xl font-bold text-white mb-1">R$ 8.5K</div>
                    <div className="text-xs text-emerald-500">+34% YoY</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5"
                  >
                    <div className="text-xs text-neutral-500 font-semibold mb-1 uppercase">Taxa de Conversão</div>
                    <div className="text-xl font-bold text-white mb-1">4.8%</div>
                    <div className="text-xs text-emerald-500">+0.8% YoY</div>
                  </motion.div>
                </div>

                {/* Animated Chart */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col justify-end gap-2 mt-2">
                  <div className="flex justify-between items-center mb-auto">
                    <div className="text-xs text-neutral-400 font-semibold uppercase">Crescimento de Receita (Q1-Q4)</div>
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  
                  <div className="flex items-end justify-between h-32 gap-3">
                    {[30, 45, 60, 40, 80, 100].map((height, i) => (
                      <div key={i} className="w-full flex flex-col justify-end h-full gap-2 group">
                        <motion.div
                          initial={{ height: "0%" }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.6 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                          className={`w-full rounded-sm ${i === 5 ? 'bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 'bg-techBlue/30 hover:bg-techBlue/50'} transition-colors relative`}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-white text-[10px] px-2 py-1 rounded">
                            {height}%
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
