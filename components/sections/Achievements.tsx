"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/constants/achievements";
import Image from "next/image";
import { Trophy, Award, Sparkles } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" /> HONORS &amp; RECOGNITION
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
            Awards &amp; Distinctions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Shimmer Sweep Animation */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent z-10 pointer-events-none" />

              <div className="p-7 space-y-4 relative z-20">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.image ? (
                <div className="relative h-36 bg-[#0B0B0F] border-t border-white/[0.08] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="h-20 bg-white/[0.01] border-t border-white/[0.05] flex items-center justify-center text-[11px] font-mono text-muted-foreground/60 italic">
                  Verified Distinction
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

