"use client";

import { useRef, useEffect, useState } from "react";
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
  review: { id: number; name: string; role: string; rating: number; date: string; text: string }; 
  index: number; 
  total: number;
  progress: MotionValue<number>;
}) {
  const usableProgress = 0.85; 

  // Math-based distance tracking perfectly replaces hardcoded arrays.
  const calcDistance = (v: number) => {
    const rawProgress = Math.min(v / usableProgress, 1.0); 
    const activeScrollIndex = rawProgress * (total - 1);
    let distance = activeScrollIndex - index;
    
    // Add a generous pause (deadzone) where the card stays completely centered and 100% visible
    const PAUSE_ZONE = 0.2; 
    if (Math.abs(distance) < PAUSE_ZONE) {
      distance = 0;
    } else if (distance > 0) {
      distance -= PAUSE_ZONE;
    } else {
      distance += PAUSE_ZONE;
    }
    return distance; // Negative = future, 0 = active, Positive = past
  };

  const y = useTransform(progress, (v) => {
    const d = calcDistance(v);
    if (d === 0) return 0; // Perfectly centered
    if (d > 0) return -40 * d; // Moves up smoothly to look stacked behind
    return 150 * -d; // Enters gracefully from below
  });

  const scale = useTransform(progress, (v) => {
    const d = calcDistance(v);
    if (d === 0) return 1;
    if (d > 0) return Math.max(0.85, 1 - (0.05 * d)); // Shrinks in the background
    return Math.max(0.9, 1 - (0.1 * -d)); // Enters slightly scaled down
  });

  const opacity = useTransform(progress, (v) => {
    const d = calcDistance(v);
    if (d === 0) return 1;
    if (d > 0) return Math.max(0, 1 - (d * 0.8)); // Fades as it moves back
    return Math.max(0, 1 + (d * 1.5)); // Fades in quickly as it comes up
  });

  const filter = useTransform(progress, (v) => {
    const d = calcDistance(v);
    if (d === 0) return "brightness(100%)";
    if (d > 0) return `brightness(${Math.max(30, 100 - (d * 50))}%)`; // Dims natively
    return "brightness(100%)";
  });

  return (
    <motion.div 
      style={{ y, scale, filter, opacity, transformOrigin: "top center", zIndex: index }}
      // Highly adaptive styling guaranteeing it will not clip past the screen boundaries
      className="absolute top-0 w-full h-auto glass-panel-heavy bg-[#030305]/95 backdrop-blur-3xl rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex flex-col justify-between group"
    >
      <div className="flex justify-between items-start mb-6 md:mb-10">
        <div className="flex items-center bg-dash-accent/10 px-4 py-2 rounded-full border border-dash-accent/20">
          <div className="flex gap-1">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-dash-accent fill-dash-accent" />
            ))}
          </div>
          <span className="text-dash-accent text-[10px] md:text-xs font-bold tracking-widest ml-3 mt-0.5">VERIFIED</span>
        </div>
        <span className="text-[10px] md:text-sm font-medium text-dash-muted uppercase tracking-widest">{review.date}</span>
      </div>
      
      {/* Dynamic font sizing ensures massive text easily fits standard visibilities */}
      <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed tracking-tight mb-8 md:mb-10">
        &quot;{review.text}&quot;
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 font-bold tracking-widest text-base md:text-xl shrink-0 group-hover:bg-dash-accent/10 group-hover:text-dash-accent transition-colors duration-500">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm md:text-lg font-medium text-white group-hover:text-dash-accent transition-colors duration-500">
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

function ReviewSectionInner({ scrollContainer }: { scrollContainer: HTMLElement }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollContainer);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      style={{ height: `${reviews.length * 150 + 50}vh` }}
      className="relative w-full mt-24 md:mt-32 bg-black/40 rounded-[3.5rem] border border-white/5 mx-auto max-w-[1600px]"
    >
      <div className="sticky top-0 h-[70vh] w-full flex flex-col items-center justify-center px-4 md:px-8">
        
        <div className="w-full max-w-5xl text-center mb-10 md:mb-16 relative z-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-dash-accent font-semibold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-5">Client Experience</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Immersive Feedback.</h2>
          </motion.div>
        </div>

        {/* Center alignment logic ensures bounding stays perfect regardless of screen size */}
        <div className="relative w-full max-w-4xl min-h-[350px] md:min-h-[400px] h-auto flex justify-center z-10 perspective-[1000px]">
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

export default function ReviewSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section style={{ height: `${reviews.length * 150 + 50}vh` }} className="relative w-full mt-24 md:mt-32" />;
  }

  const scrollContainer = document.getElementById("main-scroll-container");
  if (!scrollContainer) {
    return <section style={{ height: `${reviews.length * 150 + 50}vh` }} className="relative w-full mt-24 md:mt-32" />;
  }

  return <ReviewSectionInner scrollContainer={scrollContainer} />;
}
