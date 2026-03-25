"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Check, Heart } from "lucide-react";
import { useState } from "react";

export const products = [
  {
    id: 1,
    name: "Aero Minimalist Sofa",
    price: "$2,499",
    image: "/images/premium_sofa_isolated_1774363654311.png",
    status: "Best Seller",
    type: "sofa",
    colSpan: "col-span-2"
  },
  {
    id: 2,
    name: "Lumina Smart Lamp",
    price: "$450",
    image: "/images/smart_lamp_isolated_1774363690784.png",
    status: "New",
    type: "lighting",
    colSpan: "col-span-1"
  },
  {
    id: 3,
    name: "Orbit Lounge Chair",
    price: "$1,299",
    image: "/images/modern_chair_isolated_1774363672251.png",
    status: "",
    type: "chair",
    colSpan: "col-span-1"
  },
  {
    id: 4,
    name: "Vortex Coffee Table",
    price: "$890",
    image: "/images/designer_table_isolated_1774363709138.png",
    status: "Limited",
    type: "table",
    colSpan: "col-span-1"
  }
];

export function ProductCard({ 
  product, 
  className = "",
  layout = "vertical",
  isAccordionMode = false,
  isExpanded = true
}: { 
  product: any, 
  className?: string,
  layout?: "vertical" | "horizontal",
  isAccordionMode?: boolean,
  isExpanded?: boolean
}) {
  const [isAdded, setIsAdded] = useState(false);
  const isHorizontal = layout === "horizontal";

  if (!product) return null;

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-panel-heavy rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer flex h-full ${
        isHorizontal ? "flex-row items-center gap-6" : "flex-col"
      } ${className}`}
    >
      {isAccordionMode && !isExpanded ? (
        <div className="flex flex-col h-full justify-between items-center relative z-10 w-full">
           <div className="absolute inset-0 bg-dash-accent/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           <div className="relative w-full flex-1 rounded-[1.5rem] overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover h-full w-full opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                priority
              />
           </div>
           <div className="relative w-full text-center flex-none">
              <h3 className="font-medium text-sm text-white mb-1 truncate px-2">{product.name}</h3>
              <p className="text-[10px] text-dash-accent font-semibold uppercase tracking-widest">{product.type}</p>
           </div>
        </div>
      ) : isHorizontal ? (
        <>
          {/* Horizontal Layout: Details Left, Image Right */}
          <div className="flex-1 flex flex-col h-full justify-between relative z-10">
            <div>
              {product.status && (
                <span className="inline-block px-3 py-1 pb-[6px] text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white rounded-full mb-4">
                  {product.status}
                </span>
              )}
              <h3 className="font-medium text-xl mb-1 group-hover:text-glow transition-all">{product.name}</h3>
              <p className="text-sm text-dash-muted mb-4 capitalize">{product.type}</p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <span className="font-semibold text-dash-accent text-2xl">{product.price}</span>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsAdded(!isAdded); }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
                  isAdded ? "bg-white text-black" : "bg-dash-panel border border-dash-panel-border text-white hover:bg-white/10 hover:border-white/30"
                }`}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {isAdded ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check size={20} strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div key="plus" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Plus size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
          
          <div className="relative w-[50%] h-[95%] my-auto flex items-center justify-center z-10 rounded-[1.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-dash-accent/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </>
      ) : (
        <>
          {/* Premium Vertical Showcase Layout */}
          
          {/* Top-anchored floating badges */}
          <div className="absolute top-5 right-5 z-20">
             <button className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-red-400 transition-colors">
               <Heart size={14} className="text-white hover:text-red-400" />
             </button>
          </div>
          {product.status && (
             <div className="absolute top-5 left-5 z-20">
                <span className="px-3 py-1 pb-[6px] text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md text-white border border-white/10 rounded-full">
                  {product.status}
                </span>
             </div>
          )}

          {/* Full-bleed top image */}
          <div className="relative -mt-6 -mx-6 mb-6 h-[220px] flex-none z-10 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-dash-panel via-transparent to-transparent z-10 pointer-events-none opacity-80" />
             <Image
               src={product.image}
               alt={product.name}
               fill
               className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
               priority
             />
          </div>

          <div className="relative z-10 w-full mt-auto flex flex-col gap-6">
             <div className="flex justify-between items-start w-full gap-4">
               <div className="flex flex-col">
                 <h3 className="font-medium text-lg leading-tight mb-1 group-hover:text-glow transition-all">{product.name}</h3>
                 <p className="text-[10px] text-dash-muted uppercase tracking-widest">{product.type}</p>
               </div>
               <span className="font-semibold text-dash-accent text-xl mt-0.5">{product.price}</span>
             </div>
             
             {/* Full width Add to Cart Button */}
             <button 
                onClick={(e) => { e.stopPropagation(); setIsAdded(!isAdded); }}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all shadow-lg text-xs font-bold uppercase tracking-widest border ${
                  isAdded 
                    ? "bg-dash-accent text-black border-dash-accent" 
                    : "bg-white/5 border-white/10 text-white hover:bg-white/15"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isAdded ? (
                    <motion.div key="check" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                      <Check size={16} strokeWidth={2.5} /> <span>Added</span>
                    </motion.div>
                  ) : (
                    <motion.div key="plus" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                      <Plus size={16} /> <span>Add to Cart</span>
                    </motion.div>
                  )}
                </AnimatePresence>
             </button>
          </div>
        </>
      )}
      
      {/* Hover ambient lighting at bottom */}
      <div className="absolute -bottom-10 -left-10 w-full h-20 bg-dash-accent/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}

export default function ProductList() {
  return null;
}
