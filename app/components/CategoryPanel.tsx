"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Info } from "lucide-react";

const categories = [
  { id: "sofas", name: "Sofas", count: "12 items" },
  { id: "chairs", name: "Chairs & Seating", count: "24 items" },
  { id: "tables", name: "Tables & Desks", count: "18 items" },
  { id: "lighting", name: "Lighting", count: "8 items" },
];

export default function CategoryPanel() {
  const [activeId, setActiveId] = useState("sofas");

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-panel rounded-[2rem] p-6 h-full flex flex-col relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-medium tracking-wide">Categories</h2>
        <button className="text-dash-muted hover:text-white transition-colors">
          <Info size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-2 flex-1 relative z-10">
        {categories.map((cat) => {
          const isActive = activeId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`relative flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-300 ${
                isActive ? "text-black" : "text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-white rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className="font-medium text-left">{cat.name}</span>
                <span className={`text-xs ${isActive ? "text-black/60" : "text-dash-muted"}`}>
                  {cat.count}
                </span>
              </div>
              
              <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isActive ? "bg-black/10 text-black" : "bg-dash-panel text-white"
              }`}>
                <ChevronRight size={16} />
              </div>
            </button>
          );
        })}
      </div>

      <motion.button 
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.98 }}
        className="relative z-20 w-full mt-auto bg-white/5 border border-white/10 transition-colors py-[14px] rounded-2xl font-semibold text-sm text-white text-center tracking-widest uppercase shadow-lg backdrop-blur-md"
      >
        View All Filters
      </motion.button>

      {/* Ambient glow for the panel */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-dash-accent/10 rounded-full blur-[60px] pointer-events-none" />
    </motion.div>
  );
}
