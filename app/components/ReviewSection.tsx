"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Sara Chen", role: "Executive Architect", rating: 5, date: "2 weeks ago", text: "The Zero-G minimal frame is astounding. It seamlessly blends structural integrity with an aesthetic that completely defies gravity." },
  { id: 2, name: "Arthur Dubois", role: "Interior Designer", rating: 5, date: "1 month ago", text: "Incredible craftsmanship. The warm lighting integration across the base is genius. It completely transformed my client's formal living space." },
  { id: 3, name: "Maya Patel", role: "Tech Founder", rating: 5, date: "3 months ago", text: "Worth every penny. The delivery and white-glove setup was flawless, and the modular expansion capability fits perfectly with my smart home ecosystem." },
  { id: 4, name: "Liam Vance", role: "Creative Director", rating: 5, date: "4 months ago", text: "A masterpiece of modern engineering. It doesn't just fill a room—it redefines the space entirely. The materials are absolutely uncompromising." },
];

function StackedCard({ 
  review, 
  index, 
  total, 
  progress 
}: { 
  review: any; 
  index: number; 
  total: number;
  progress: MotionValue<number>;
}) {
  // Hardcoded highly-tuned animation curves for 4 cards over a 400vh scroll
  // The scroll timeline is 0.0 to 1.0
  const enterStart = [0, 0.15, 0.45, 0.75][index] || 0;
  const enterEnd = [0, 0.35, 0.65, 0.90][index] || 0;

  // The cards slide up from offscreen bottom to their staggered final Y
  const finalY = index * 45; 
  const y = index === 0 ? 0 : useTransform(progress, [enterStart, enterEnd], [800, finalY]);

  // A card shrinks and dims when the NEXT card completes its entry
  const shrinkStart = [0.15, 0.45, 0.75, 1.0][index] || 0;
  const shrinkEnd = [0.35, 0.65, 0.90, 1.0][index] || 0;
  
  const targetScale = 1 - ((total - index) * 0.04);
  const scale = index === total - 1 ? 1 : useTransform(progress, [shrinkStart, shrinkEnd], [1, targetScale]);
  
  const targetBrightness = index === total - 1 ? "brightness(100%)" : "brightness(35%)";
  const filter = index === total - 1 ? "brightness(100%)" : useTransform(progress, [shrinkStart, shrinkEnd], ["brightness(100%)", targetBrightness]);

  return (
    <motion.div 
      style={{ y, scale, filter, transformOrigin: "top center", zIndex: index }}
      className="absolute top-0 left-0 w-full h-[450px] glass-panel-heavy bg-[#030305]/80 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex flex-col justify-between group"
    >
      <div className="flex justify-between items-start mb-8 md:mb-12">
        <div className="flex items-center bg-dash-accent/10 px-4 py-2 rounded-full border border-dash-accent/20">
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-dash-accent fill-dash-accent" />
            ))}
          </div>
          <span className="text-dash-accent text-[10px] md:text-xs font-bold tracking-widest ml-3 mt-0.5">VERIFIED</span>
        </div>
        <span className="text-xs md:text-sm font-medium text-dash-muted uppercase tracking-widest">{review.date}</span>
      </div>
      
      <p className="text-xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed tracking-tight mb-8 md:mb-12 line-clamp-4">
        "{review.text}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 font-bold tracking-widest text-lg md:text-xl shrink-0 group-hover:bg-dash-accent/10 group-hover:text-dash-accent transition-colors duration-500">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="text-base md:text-lg font-medium text-white group-hover:text-dash-accent transition-colors duration-500">
              {review.name}
            </div>
            <div className="text-[10px] md:text-xs text-dash-muted uppercase tracking-widest mt-1 font-semibold">
              {review.role}
            </div>
          </div>
      </div>
    </motion.div>
  );
}

export default function ReviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // The entire section is 400vh tall to create the scroll duration
    <section ref={containerRef} className="relative w-full h-[350vh] mt-32 md:mt-48 bg-black/40 rounded-[3.5rem] border border-white/5 mx-auto max-w-[1600px]">
      
      {/* The sticky viewport frame that stays locked while you scroll the 350vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        <div className="w-full max-w-6xl text-center mb-16 relative z-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-dash-accent font-semibold tracking-widest text-xs md:text-sm uppercase mb-4 md:mb-6">Client Experience</h4>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight">Immersive Feedback.</h2>
          </motion.div>
        </div>

        {/* The absolute positioned card container */}
        <div className="relative w-full max-w-5xl h-[450px] mx-auto z-10 perspective-[1000px]">
          {reviews.map((review, i) => (
            <StackedCard 
              key={review.id} 
              index={i} 
              total={reviews.length} 
              review={review} 
              progress={scrollYProgress} 
            />
          ))}
        </div>

      </div>
      
    </section>
  );
}
