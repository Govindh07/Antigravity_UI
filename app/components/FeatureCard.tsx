"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeatureCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glass-panel-heavy rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-dash-accent/10 blur-[40px] rounded-full group-hover:bg-dash-accent/20 transition-all duration-700 pointer-events-none" />

      <div className="flex justify-between items-start mb-12 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-dash-panel flex items-center justify-center border border-dash-panel-border group-hover:border-dash-accent/50 transition-colors duration-500">
          <Sparkles className="text-dash-accent" size={20} />
        </div>
        
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
          <ArrowRight size={16} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-medium mb-2">Design Services</h3>
        <p className="text-sm text-dash-muted leading-relaxed">
          Book a free consultation with our interior design experts. Let's build your dream space.
        </p>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-dash-accent/0 via-dash-accent to-dash-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
