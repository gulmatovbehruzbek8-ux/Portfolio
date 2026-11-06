"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/constants/timeline";
import { Calendar, Compass, Milestone } from "lucide-react";

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-1.5">
            <Milestone className="w-4 h-4" /> CHRONOLOGY
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
            The Journey &amp; Milestones
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary/20 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glowing Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0F] md:-translate-x-1/2 z-10 transition-transform group-hover:scale-125 shadow-[0_0_12px_rgba(79,140,255,0.8)]" />

                <div className="w-full md:w-[46%] pl-12 md:pl-0">
                  <div className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center space-x-2 text-primary font-mono text-xs font-semibold tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
