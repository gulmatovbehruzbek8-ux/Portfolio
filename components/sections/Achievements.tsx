"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, type Achievement } from "@/lib/constants/achievements";
import Image from "next/image";
import { Trophy, Award, Sparkles, X, ExternalLink, CheckCircle2 } from "lucide-react";

export const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState<Achievement | null>(null);

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
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            Click any credential card to inspect official scores, verification details, and telemetry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative glass-card rounded-3xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02]"
            >
              {/* Shimmer Sweep Animation */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent z-10 pointer-events-none" />

              <div className="p-7 space-y-4 relative z-20">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.image ? (
                <div className="relative h-44 bg-[#07090E] border-t border-white/[0.08] overflow-hidden flex items-center justify-center">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={
                      item.image.includes("KhanteMUN") || item.image.includes("edexcel")
                        ? "object-contain p-3 group-hover:scale-105 transition-all duration-500"
                        : item.image.includes("startupfest")
                        ? "object-cover object-top group-hover:scale-105 transition-all duration-500"
                        : "object-cover group-hover:scale-105 transition-all duration-500"
                    }
                  />
                  {!item.image.includes("KhanteMUN") && !item.image.includes("edexcel") && !item.image.includes("startupfest") && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent pointer-events-none" />
                  )}
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

      {/* Credential Inspection Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0E1118] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center space-x-3.5 pr-12">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {selectedItem.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      {selectedItem.badge || "Official Distinction"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              {/* Certificate Image Preview if Available */}
              {selectedItem.image && (
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#090C12]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Detailed Breakdown for Specific Credentials */}
              {selectedItem.title.includes("IELTS") && (
                <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs">
                  <div className="flex justify-between items-center text-muted-foreground pb-2 border-b border-white/[0.06]">
                    <span>EXAM TELEMETRY: IELTS ACADEMIC</span>
                    <span className="text-emerald-400 font-bold">VERIFIED</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-center">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Reading</span>
                      <span className="text-lg font-bold text-emerald-400">9.0</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Listening</span>
                      <span className="text-lg font-bold text-cyan-400">8.5</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Writing</span>
                      <span className="text-lg font-bold text-white">7.0</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Speaking</span>
                      <span className="text-lg font-bold text-white">6.5</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground/80 pt-1">
                    <span>Overall Band: <strong className="text-amber-400">8.0 (C1/C2)</strong></span>
                    <span>Centre: UZ004 &bull; Oct 2026</span>
                  </div>
                </div>
              )}

              {selectedItem.title.includes("Edexcel") && (
                <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs">
                  <div className="flex justify-between items-center text-muted-foreground pb-2 border-b border-white/[0.06]">
                    <span>PEARSON EDEXCEL INTERNATIONAL GCSE</span>
                    <span className="text-emerald-400 font-bold">TRIPLE 9</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Comp Science</span>
                      <span className="text-lg font-bold text-emerald-400">Grade 9</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Physics</span>
                      <span className="text-lg font-bold text-cyan-400">Grade 9</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] text-muted-foreground uppercase">Mathematics</span>
                      <span className="text-lg font-bold text-amber-400">Grade 9</span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


