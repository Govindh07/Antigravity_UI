import { ArrowRight, MessageCircle, Share2, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-32 px-6 md:px-0 pt-16 border-t border-white/5 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          {/* Elegant Brand Logo */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex items-center justify-center w-10 h-10 group">
              <div className="absolute inset-0 bg-dash-accent/10 rounded-full blur-md group-hover:bg-dash-accent/30 scale-75 group-hover:scale-125 transition-all duration-700" />
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                <path d="M8 28V14C8 9.58172 11.5817 6 16 6C20.4183 6 24 9.58172 24 14V28" stroke="#d4af37" strokeWidth="2" strokeLinecap="square" />
                <path d="M8 18H24" stroke="#d4af37" strokeWidth="2" />
                <path d="M12 28V18" stroke="#d4af37" strokeWidth="2" />
                <path d="M20 28V18" stroke="#d4af37" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] tracking-[0.3em] font-medium text-white font-sans uppercase">Aura</span>
              <span className="text-[7px] tracking-[0.3em] text-dash-accent/80 uppercase mt-0.5">Studio</span>
            </div>
          </div>
          <p className="text-sm text-dash-muted font-light leading-relaxed max-w-sm mb-8">
            Elevating living spaces with antigravity-inspired luxury furniture. 
            Designed for the future of comfort, engineered for timeless elegance.
          </p>
          <div className="flex gap-4">
            {[MessageCircle, Share2, Globe, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full glass-panel-heavy flex items-center justify-center text-white/60 hover:text-dash-accent hover:bg-white/10 transition-all">
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2">Explore</h5>
          {["Collections", "Design Philosophy", "Sustainability", "Journal", "Showrooms"].map(link => (
            <a key={link} href="#" className="text-sm text-dash-muted hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2">Newsletter</h5>
          <p className="text-sm text-dash-muted font-light mb-2">Subscribe for exclusive releases and design insights.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-dash-panel border border-dash-panel-border rounded-full py-3 px-5 text-sm outline-none placeholder:text-dash-muted text-white group-hover:border-white/20 transition-colors focus:border-dash-accent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dash-accent flex items-center justify-center text-black hover:bg-white transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-between items-center pt-8 border-t border-white/5 text-xs text-dash-muted">
        <p>&copy; 2026 Aura Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
