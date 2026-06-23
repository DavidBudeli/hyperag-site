"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { useEffect, useState, useRef } from "react";

type HeroCinematicProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function HeroCinematic({ dictionary, locale }: HeroCinematicProps) {
  const hero = dictionary.hero;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Small parallax/glow effect if not reduced motion
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
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-navy-950">
      
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Video Player */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
            src="/videos/hero-bg.mp4"
          />
        )}

        {/* Animated Mesh Gradient Background (Always rendered as base) */}
        <div className="absolute inset-0 z-0 opacity-100">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-techBlue/40 blur-[120px] pointer-events-none mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/30 blur-[150px] pointer-events-none mix-blend-screen"
          />
          
          {/* Subtle Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        </div>

        {/* Overlays - Reduced opacity so the mesh gradient shines through beautifully */}
        <div className="absolute inset-0 bg-navy-950/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-overlay z-10 pointer-events-none" />
        
        {/* Mouse Interactive Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-techBlue/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-20 hidden md:block"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
      </div>

      <div className="container-page relative z-30 mx-auto px-4 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8 text-sm text-neutral-300 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          {hero.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white text-balance leading-[1.05]"
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
