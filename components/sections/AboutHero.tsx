"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src="/images/School.jpg"
        alt="Presidential School in Khiva"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-6 h-full flex items-end pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/30 text-xs font-bold text-accent-gold uppercase tracking-widest mb-4 backdrop-blur-md">
            Academic Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white drop-shadow-2xl">
            Education. Leadership. Future.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
