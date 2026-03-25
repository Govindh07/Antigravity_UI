"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCard } from "./ProductCards";
import { products } from "../data/products";

const categories = ["All", "Sofas", "Chairs", "Tables", "Lighting", "Decor"];

export default function ShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // We only have 4 mock products directly matching above.
  // In a real app we would filter them based on category.

  return (
    <section className="w-full mt-32 px-6 md:px-0">
      
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-dash-accent font-semibold tracking-widest text-sm uppercase mb-3">Signature Collection</h4>
          <h2 className="text-4xl font-medium tracking-tight">Curated Essentials.</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                activeCategory === cat ? "text-white" : "text-dash-muted hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-dash-accent/20 border border-dash-accent/50 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Mapping the new 4 products instead of reusing hero products */}
        {products.slice(4).map((product) => (
          <motion.div key={product.id} variants={itemVariants} className="h-[430px]">
             <ProductCard product={product} layout="vertical" />
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}
