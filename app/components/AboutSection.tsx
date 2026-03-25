"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  // Parallax setup with fluid physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Extremely smooth spring physics for the parallax
  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax layers mapped to smoothed values
  const x1 = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const y1 = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const x2 = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const y2 = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  const x3 = useTransform(smoothX, [-0.5, 0.5], [-55, 55]);
  const y3 = useTransform(smoothY, [-0.5, 0.5], [-55, 55]);

  // Premium easing curve (Custom cubic bezier)
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="w-full mt-24 px-6 md:px-0 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="flex flex-col gap-8 pr-0 lg:pr-10"
        >
          <div>
            <h4 className="text-dash-accent font-semibold tracking-widest text-sm uppercase mb-3">Our Vision</h4>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Future of Comfort.
              </span>
            </h2>
            <p className="text-dash-muted text-lg font-light leading-relaxed max-w-lg mb-6">
              At Aura Studio, we transcend traditional furniture design. By blending 
              advanced ergonomics with antigravity-inspired minimalism, we create luxury 
              pieces that effortlessly harmonize with next-generation smart homes.
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-lg">
              Every curve, material, and embedded technology is curated to elevate 
              your living space into a sanctuary of architectural brilliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            {[
              { stat: "25+", label: "Design Awards" },
              { stat: "10k", label: "Curated Pieces" },
              { stat: "0 G", label: "Visual Weight" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: premiumEase }}
              >
                <p className="font-semibold text-3xl text-white mb-2">{item.stat}</p>
                <p className="text-[10px] text-dash-accent uppercase tracking-[0.2em]">{item.label}</p>
              </motion.div>
            ))}
          </div>
          
          <button className="flex items-center gap-2 text-white/80 hover:text-dash-accent transition-colors w-max uppercase tracking-widest text-xs font-semibold mt-4 group">
            Discover Our Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>

        {/* Right Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: premiumEase }}
          className="relative h-[650px] w-full flex items-center justify-center -translate-x-4 lg:translate-x-0 group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-dash-accent/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-1000 opacity-40 group-hover:opacity-80" />
          
          {/* Back Layer: Architectural Setting */}
          <motion.div 
            style={{ x: x1, y: y1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-4 right-0 w-[75%] h-[75%] rounded-[2rem] overflow-hidden glass-panel-heavy shadow-2xl z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-overlay" />
            <Image
              src="/images/luxury_interior_architecture.png"
              alt="Luxury Interior"
              fill
              className="object-cover rounded-[2rem] scale-105"
            />
          </motion.div>

          {/* Middle Layer: Signature Piece (Sofa) */}
          <motion.div
            style={{ x: x2, y: y2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="absolute bottom-12 left-4 w-[65%] h-[50%] rounded-[2rem] overflow-hidden glass-panel shadow-[0_30px_50px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center p-8 backdrop-blur-xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dash-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
            <Image
              src="/images/premium_sofa_isolated_1774363654311.png"
              alt="Aero Minimalist Sofa"
              fill
              className="object-cover w-full h-full rounded-[2rem] group-hover:scale-[1.03] transition-transform duration-1000 ease-out relative z-10"
            />
          </motion.div>

          {/* Front Layer: Accent Piece (Lamp) */}
          <motion.div
            style={{ x: x3, y: y3 }}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            className="absolute top-[20%] left-[-2%] lg:left-[-10%] w-[35%] h-[35%] rounded-[2rem] overflow-hidden glass-panel-heavy shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 flex items-center justify-center p-6 border border-white/5"
          >
             <div className="absolute inset-0 bg-dash-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none rounded-[2rem] blur-xl" />
             <Image
              src="/images/smart_lamp_isolated_1774363690784.png"
              alt="Lumina Lamp"
              fill
              className="object-cover w-full h-full rounded-[2rem] group-hover:scale-110 transition-transform duration-1000 ease-out relative z-10"
            />
          </motion.div>
          
        </motion.div>
        
      </div>
    </section>
  );
}
