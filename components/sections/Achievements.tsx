"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/constants/achievements";
import Image from "next/image";

export const Achievements = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-16 text-accent-gold"
        >
          Honors & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#161922] border border-white/5 rounded-2xl overflow-hidden"
            >
              {/* Shimmer Sweep Animation */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent-gold/5 to-transparent z-10" />

              <div className="p-8 space-y-4 relative z-20">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold leading-tight group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.image ? (
                <div className="relative h-32 bg-[#111218] border-t border-white/5">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ) : (
                <div className="h-24 bg-[#111218] border-t border-white/5 flex items-center justify-center text-xs text-text-muted italic">
                  Photo Placeholder
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
