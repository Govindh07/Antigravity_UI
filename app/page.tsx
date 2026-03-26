import DashboardLayout from "./components/DashboardLayout";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import CategoryPanel from "./components/CategoryPanel";
import { ProductCard } from "./components/ProductCards";
import { products } from "./data/products";

// New Phase 2 Components
import AboutSection from "./components/AboutSection";
import ShowcaseSection from "./components/ShowcaseSection";
import TestimonialSection from "./components/TestimonialSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import InteractiveProductStrip from "./components/InteractiveProductStrip";

export default function Home() {
  return (
    <DashboardLayout>
      <Sidebar />
      <div id="main-scroll-container" className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto overflow-x-hidden relative scroll-smooth">
        
        {/* Main Dashboard Hero Grid Container */}
        <div className="flex flex-col gap-24 w-full max-w-[1400px] mx-auto pb-10">
          
          {/* Phase 1: Dashboard Top Grid */}
          <div className="flex flex-col gap-6 w-full">
            {/* Top: Full-Width Hero */}
            <div className="w-full">
              <HeroSection />
            </div>
            
            {/* Category Panel Below Hero */}
            <div className="w-full">
              <CategoryPanel />
            </div>

            {/* Bottom Strip: Interactive Accordion (Spans full width) */}
            <div className="w-full mt-4">
              <InteractiveProductStrip />
            </div>
          </div>

          {/* Phase 2: Expanded Homepage Sections */}
          <AboutSection />
          <ShowcaseSection />
          
          <div className="flex flex-col gap-8 w-full">
            <TestimonialSection />
            <ReviewSection />
          </div>

          <Footer />

        </div>
      </div>
    </DashboardLayout>
  );
}