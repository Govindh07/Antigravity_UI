"use client";

import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden bg-dash-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-dash-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] bg-dash-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Main floating container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-[1600px] h-[90vh] rounded-[2.5rem] relative z-10 flex overflow-hidden shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
