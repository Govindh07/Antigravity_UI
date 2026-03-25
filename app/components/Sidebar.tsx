"use client";

import { Home, Search, ShoppingBag, Heart, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Search", active: false },
  { icon: ShoppingBag, label: "Cart", active: false },
  { icon: Heart, label: "Wishlist", active: false },
];

export default function Sidebar() {
  return (
    <div className="w-[80px] h-full flex flex-col items-center py-8 bg-[#0a0a0c] shrink-0 z-20">
      {/* Elegant Brand Logo */}
      <div className="flex flex-col items-center gap-2 mb-10 pt-2 cursor-pointer group relative">
        <div className="relative flex items-center justify-center w-12 h-12">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-dash-accent/10 rounded-full blur-md group-hover:bg-dash-accent/30 scale-75 group-hover:scale-125 transition-all duration-700" />
          
          {/* Abstract 'A' / Minimalist Chair SVG */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            <path d="M8 28V14C8 9.58172 11.5817 6 16 6C20.4183 6 24 9.58172 24 14V28" stroke="#d4af37" strokeWidth="2" strokeLinecap="square" />
            <path d="M8 18H24" stroke="#d4af37" strokeWidth="2" />
            <path d="M12 28V18" stroke="#d4af37" strokeWidth="2" />
            <path d="M20 28V18" stroke="#d4af37" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="flex flex-col items-center mt-1">
          <span className="text-[10px] tracking-[0.3em] font-medium text-white font-sans uppercase">
            Aura
          </span>
          <span className="text-[6px] tracking-[0.3em] text-dash-accent/80 uppercase mt-1">
            Studio
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-8 w-full mt-4">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-3 rounded-xl transition-colors ${
              item.active ? "text-dash-accent bg-white/5" : "text-dash-muted hover:text-white"
            }`}
          >
            <item.icon size={22} strokeWidth={1.5} />
            {item.active && (
              <motion.div
                layoutId="activeNav"
                className="absolute left-0 w-1 h-8 bg-dash-accent rounded-r-md top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Bottom Area */}
      <div className="flex flex-col items-center gap-6 mt-auto pb-6">
        <button className="text-dash-muted hover:text-white transition-colors p-3">
          <Settings size={22} strokeWidth={1.5} />
        </button>
        <div className="w-10 h-10 rounded-full bg-dash-panel border border-dash-panel-border flex items-center justify-center overflow-hidden">
          <User size={20} className="text-dash-muted" />
        </div>
      </div>
    </div>
  );
}
