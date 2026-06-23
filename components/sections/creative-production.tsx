"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import { useState } from "react";

export function CreativeProduction({ dictionary }: { dictionary: Dictionary }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: dictionary.creativeProduction.items.video.title,
      description: dictionary.creativeProduction.items.video.desc,
      image: "/images/creative/creative1.jpg",
    },
    {
      title: dictionary.creativeProduction.items.photo.title,
      description: dictionary.creativeProduction.items.photo.desc,
      image: "/images/creative/creative2.jpg",
    },
    {
      title: dictionary.creativeProduction.items.brand.title,
      description: dictionary.creativeProduction.items.brand.desc,
      image: "/images/creative/creative1.jpg",
    },
    {
      title: dictionary.creativeProduction.items.social.title,
      description: dictionary.creativeProduction.items.social.desc,
      image: "/images/creative/creative2.jpg",
    },
  ];

  return (
    <section className="py-32 relative border-y border-white/5 bg-black">
      <div className="container-page mx-auto px-4">
        
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            {dictionary.creativeProduction.title}
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            {dictionary.creativeProduction.description}
          </p>
        </div>

        {/* Monks-style Accordion/Hover Cards */}
        <div className="flex flex-col md:flex-row h-[600px] gap-4 w-full">
          {items.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <motion.div 
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-3xl overflow-hidden cursor-pointer flex-1 transition-all duration-500 ease-out border border-white/10"
                animate={{
                  flex: isHovered ? 3 : isAnyHovered ? 1 : 1,
                }}
              >
                {/* Background Image / Video Fallback */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${isHovered ? 'bg-black/40' : 'bg-black/60'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent font-bold font-mono text-sm opacity-80">0{i + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      height: isHovered ? 'auto' : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-300 leading-relaxed max-w-sm mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
