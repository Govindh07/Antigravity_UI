"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full h-full rounded-[2rem] overflow-hidden group glass-panel"
    >
      <Image
        src="/images/luxury_living_room_1774363635231.png"
        alt="Luxury Living Room"
        fill
        className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        priority
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-dash-accent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-sm font-medium tracking-wider uppercase text-dash-accent">New Collection</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light mb-4 leading-tight tracking-tight">
            Elevate Your <br />
            <span className="font-semibold text-glow">Living Space.</span>
          </h1>
          <p className="text-dash-muted max-w-md text-lg mb-8 font-light">
            Discover our premium selection of anti-gravity inspired furniture design. Minimalist, futuristic, and luxuriously comfortable.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-dash-accent text-black font-semibold rounded-full hover:bg-dash-accent-hover transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </div>

      {/* Floating mini status badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-8 right-8 glass-panel-heavy px-4 py-2 rounded-full flex items-center gap-3"
      >
        <span className="text-xs font-medium text-white/80">Premium Quality</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dash-accent">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
}
