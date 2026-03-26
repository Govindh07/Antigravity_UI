"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sliders } from "lucide-react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full flex flex-col xl:flex-row items-center gap-4 relative z-20"
    >
      {/* Title / Filter Trigger */}
      <div className="glass-panel flex items-center justify-between xl:justify-center px-6 py-4 rounded-2xl shrink-0 w-full xl:w-auto h-16">
        <div className="flex items-center gap-3">
          <Sliders size={18} className="text-dash-accent" />
          <span className="font-semibold tracking-wide uppercase text-sm">Categories</span>
        </div>
      </div>

      {/* Horizontal List */}
      <div className="glass-panel rounded-2xl p-2 flex-1 w-full overflow-x-auto no-scrollbar flex items-center gap-2 h-16">
        {categories.map((cat) => {
          const isActive = activeId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`relative flex items-center justify-between h-full px-5 py-2 rounded-xl transition-all duration-300 whitespace-nowrap group shrink-0 ${
                isActive ? "text-black" : "text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBgH"
                  className="absolute inset-0 bg-white rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-3">
                <span className={`font-medium ${isActive ? "text-black" : "text-white/90 group-hover:text-white"}`}>
                  {cat.name}
                </span>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${isActive ? "bg-black/10 text-black/80" : "bg-white/10 text-dash-muted"}`}>
                  {cat.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* View All */}
      <motion.button 
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.98 }}
        className="glass-panel rounded-2xl px-6 py-4 shrink-0 font-medium text-sm text-white tracking-widest uppercase flex items-center gap-2 w-full xl:w-auto justify-center h-16 transition-colors"
      >
        View All
        <ChevronRight size={16} className="text-dash-accent" />
      </motion.button>
    </motion.div>
  );
}
