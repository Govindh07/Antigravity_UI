"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCards";
import { products } from "../data/products";

export default function InteractiveProductStrip() {
  const [activeId, setActiveId] = useState(products[0].id);

  const stripProducts = [products[0], products[1], products[2]];

  return (
    <div className="w-full h-auto md:h-[320px] flex flex-col md:flex-row gap-6">
      {stripProducts.map((product) => {
        const isActive = activeId === product.id;

        return (
          <motion.div
            key={product.id}
            layout
            onClick={() => setActiveId(product.id)}
            initial={false}
            animate={{ 
              flex: isActive ? 2.5 : 1,
              opacity: 1
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative h-full flex-none md:flex-auto min-h-[300px] cursor-pointer group ${isActive ? '' : 'hover:opacity-90 transition-opacity'}`}
          >
             {/* An invisible absolute layer over the card to intercept clicks without triggering inner card buttons unless active */}
             {!isActive && (
               <div className="absolute inset-0 z-50 rounded-[2rem]" />
             )}
             
             <motion.div layout className="w-full h-full">
               <ProductCard 
                  product={product} 
                  layout={isActive ? "horizontal" : "vertical"} 
                  className={`w-full h-full transition-all duration-500 ease-out`}
                  isAccordionMode={true}
                  isExpanded={isActive}
               />
             </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
