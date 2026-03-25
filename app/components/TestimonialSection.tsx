"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    quote: "Aura Studio completely redefined our penthouse. The antigravity-inspired pieces don't just fill a room; they elevate the entire architectural experience.",
    initials: "ER",
    name: "Elena Rostova",
    role: "Architectural Digest",
    positionClasses: "top-[5%] right-[5%] lg:w-[480px]",
    baseZ: 20,
    delay: 0.3
  },
  {
    id: 2,
    quote: "The seamless blend of smart home integration and minimalist luxury is unmatched. Absolute ergonomic perfection.",
    initials: "MS",
    name: "Marcus Sterling",
    role: "Tech Entrepreneur",
    positionClasses: "top-[40%] right-[18%] lg:w-[420px]",
    baseZ: 30,
    delay: 0.5
  },
  {
    id: 3,
    quote: "A masterclass in restraint and gravity-defying aesthetics. These aren't just furniture pieces, they are livable sculptures.",
    initials: "VW",
    name: "Valerie Wei",
    role: "Interior Designer",
    positionClasses: "bottom-[5%] right-[2%] lg:w-[450px]",
    baseZ: 40,
    delay: 0.7
  }
];

export default function TestimonialSection() {
  const premiumEase = [0.16, 1, 0.3, 1] as const;
  const [activeId, setActiveId] = useState<number | null>(null);
  const [prevId, setPrevId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    if (activeId === id) return;
    setPrevId(activeId);
    setActiveId(id);
  };

  return (
    <section className="w-full mt-32 px-6 md:px-0 relative mb-20">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: premiumEase }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h4 className="text-dash-accent font-semibold tracking-widest text-sm uppercase mb-3">Client Dialogue</h4>
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Editorial Perspectives.</h2>
      </motion.div>

      {/* Asymmetric Editorial Composition */}
      <div className="relative w-full h-auto min-h-[750px] flex flex-col lg:block">
        
        {/* Main Background Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: premiumEase }}
          className="relative w-full lg:w-[65%] h-[500px] lg:h-[750px] rounded-[2rem] overflow-hidden glass-panel z-0"
        >
          {/* Subtle vignette/overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-dash-accent/5 z-10 opacity-50 pointer-events-none" />
          
          <Image 
            src="/images/luxury_living_room_1774363635231.png"
            alt="Editorial Interior"
            fill
            className="object-cover object-left"
          />
          
          {/* Faint Typography Watermark */}
          <div className="absolute top-12 left-12 z-20 overflow-hidden mix-blend-overlay pointer-events-none opacity-20">
             <h1 className="text-[120px] font-bold tracking-tighter text-white leading-none">AURA</h1>
          </div>
        </motion.div>

        {/* Stacked Review Cards */}
        {reviews.map((review) => {
          const isFront = activeId === review.id;
          const isBehind = prevId === review.id;
          
          return (
            <motion.div
              key={review.id}
              onClick={() => handleCardClick(review.id)}
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={
                isFront ? { 
                  y: [null, -60, -10], 
                  x: [null, -20, 0],
                  scale: [null, 1.06, 1.04], 
                  rotateZ: [null, 2, 0],
                  zIndex: 50,
                  opacity: 1,
                  boxShadow: "0 50px 100px rgba(0,0,0,0.9)" 
                } : isBehind ? {
                  y: [null, 40, 0],
                  x: [null, 20, 0],
                  scale: [null, 0.95, 0.98],
                  rotateZ: [null, -2, 0],
                  zIndex: 10,
                  opacity: 0.8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                } : {
                  y: 0,
                  x: 0,
                  scale: 1,
                  rotateZ: 0,
                  zIndex: review.baseZ,
                  opacity: 0.9,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.7)"
                }
              }
              transition={{ 
                duration: 0.9, 
                times: [0, 0.4, 1], 
                ease: "easeInOut" 
              }}
              className={`lg:absolute w-full p-8 lg:p-10 rounded-[2rem] glass-panel-heavy border backdrop-blur-3xl mt-6 lg:mt-0 cursor-pointer transition-colors duration-500 group ${review.positionClasses} ${isFront ? 'border-white/20 bg-white/10' : 'border-white/5 bg-black/40 hover:bg-white/5'}`}
            >
               <div className="absolute top-6 right-8 text-[10px] font-medium tracking-widest text-white/30 uppercase pointer-events-none transition-opacity duration-300">
                  {isFront ? "Viewing" : "Click to view"}
               </div>
               
               <Quote className={`w-5 h-5 lg:w-6 lg:h-6 mb-4 lg:mb-6 transition-all duration-500 ${isFront ? 'text-dash-accent opacity-100 scale-110' : 'text-dash-accent opacity-60 group-hover:opacity-80'}`} />
               
               <p className="text-lg lg:text-xl text-white/90 font-light leading-relaxed mb-6 lg:mb-8">
                "{review.quote}"
               </p>
               
               <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center tracking-widest text-xs lg:text-sm font-medium transition-colors duration-500 ${isFront ? 'bg-dash-accent/20 border border-dash-accent/50 text-dash-accent' : 'bg-white/5 border border-white/10 text-white/60'}`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className={`font-medium text-sm lg:text-base transition-colors duration-500 ${isFront ? 'text-white' : 'text-white/80'}`}>{review.name}</p>
                    <p className="text-dash-muted text-[10px] lg:text-xs uppercase tracking-widest mt-0.5">{review.role}</p>
                  </div>
               </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
