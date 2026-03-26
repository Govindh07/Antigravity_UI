"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background text
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* 1. Far Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#000] z-0" />

      {/* 2. Huge Background Typography (Fading at the bottom) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 flex items-start pt-[8vh] md:pt-[10vh] justify-center z-0 pointer-events-none"
      >
        <span className="text-[28vw] md:text-[24vw] font-black tracking-tighter leading-[0.8] select-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/5 to-transparent">
          AURA
        </span>
      </motion.div>

      {/* 3. Central Subject Image (Middleground) overlapping the text */}
      <motion.div 
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 w-[85%] md:w-[75%] lg:w-[65%] max-w-4xl min-h-[40vh] md:min-h-[50vh] mt-[-10vh] md:mt-[-5vh] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10"
      >
        <Image
          src="/images/luxury_living_room_1774363635231.png"
          alt="Premium Space"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Cinematic Vignette inside the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* 4. Foreground Mist / Atmospheric Perspective */}
      {/* This creates the illusion of clouds/mist covering the bottom of the building in the reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
      
      {/* Volumetric glow / mist spots */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[70%] h-[60%] bg-white/5 blur-[120px] z-20 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[50%] bg-dash-accent/10 blur-[100px] z-20 rounded-full pointer-events-none" />

      {/* 5. Foreground Content (Text, CTA) */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-12 md:pb-16 text-center px-4 w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="relative max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 glass-panel-heavy px-4 py-1.5 rounded-full mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-dash-accent shadow-[0_0_8px_rgba(212,175,55,1)] animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-dash-accent/90">Curated Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-4 text-white drop-shadow-2xl tracking-tight leading-tight">
            Elevate Your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-dash-accent/90 to-dash-accent/70 text-glow">Living Space.</span>
          </h2>
          
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-8 drop-shadow-md">
            Discover our premium selection of anti-gravity inspired furniture design. 
            Minimalist, futuristic, and luxuriously comfortable.
          </p>
          
          <button className="group relative px-8 py-4 bg-white text-black font-semibold tracking-wide rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3">
            <span className="relative z-10">Explore Collection</span>
            <svg 
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-dash-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
