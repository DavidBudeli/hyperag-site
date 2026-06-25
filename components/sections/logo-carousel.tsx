"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type LogoProps = {
  name: string;
  basePath: string;
  invertOnDark?: boolean;
};

const clients: LogoProps[] = [
  { name: "Coca-Cola", basePath: "/logos/clients/coca-cola", invertOnDark: true },
  { name: "McDonald's", basePath: "/logos/clients/mcdonalds", invertOnDark: true },
  { name: "Manchester City", basePath: "/logos/clients/manchester-city", invertOnDark: true },
  { name: "Lenovo", basePath: "/logos/clients/lenovo", invertOnDark: true },
  { name: "Red Bull", basePath: "/logos/clients/red-bull", invertOnDark: true },
  // Duplicate for seamless loop
  { name: "Coca-Cola", basePath: "/logos/clients/coca-cola", invertOnDark: true },
  { name: "McDonald's", basePath: "/logos/clients/mcdonalds", invertOnDark: true },
  { name: "Manchester City", basePath: "/logos/clients/manchester-city", invertOnDark: true },
  { name: "Lenovo", basePath: "/logos/clients/lenovo", invertOnDark: true },
  { name: "Red Bull", basePath: "/logos/clients/red-bull", invertOnDark: true },
];

function ClientLogo({ logo }: { logo: LogoProps }) {
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
      <div className="flex items-center justify-center h-12 px-6">
        <span className="text-xl md:text-2xl font-bold tracking-tight text-neutral-500 uppercase transition-colors duration-300">
          {logo.name}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-12 w-40 flex items-center justify-center group cursor-pointer">
      <Image
        src={`${logo.basePath}${exts[extIdx]}`}
        alt={logo.name}
        fill
        className={`object-contain transition-all duration-500 ease-out 
          ${logo.invertOnDark ? 'invert grayscale opacity-50 hover:opacity-100 hover:grayscale-0' : 'grayscale opacity-50 hover:opacity-100 hover:grayscale-0'}
        `}
        onError={handleError}
      />
    </div>
  );
}

export function LogoCarousel() {
  return (
    <section className="py-16 border-y border-white/5 bg-navy-950 overflow-hidden relative">
      <div className="container-page mx-auto px-4 mb-12">
        <p className="text-center text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Marcas e projetos globais
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        
        {/* Left/Right Fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8 hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, // Lento e premium
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {clients.map((logo, i) => (
            <ClientLogo key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
