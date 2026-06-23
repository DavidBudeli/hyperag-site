"use client";

import { motion } from "framer-motion";
import { Building2, Command, Eclipse, Hexagon, Component, Workflow } from "lucide-react";

const logos = [
  { icon: Building2, name: "Coca-Cola" },
  { icon: Command, name: "McDonald's" },
  { icon: Eclipse, name: "Manchester City" },
  { icon: Hexagon, name: "Lenovo" },
  { icon: Component, name: "Samsung" },
  { icon: Workflow, name: "Red Bull" },
  { icon: Building2, name: "Coca-Cola" },
  { icon: Command, name: "McDonald's" },
  { icon: Eclipse, name: "Manchester City" },
  { icon: Hexagon, name: "Lenovo" },
  { icon: Component, name: "Samsung" },
  { icon: Workflow, name: "Red Bull" },
];

export function LogoCarousel() {
  return (
    <section className="py-12 border-y border-white/5 bg-navy-950 overflow-hidden">
      <div className="container-page mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Marcas e projetos que já impactamos
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
              <logo.icon className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
