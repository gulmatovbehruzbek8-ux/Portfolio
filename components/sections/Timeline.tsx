"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/constants/timeline";

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
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-16 text-accent-gold"
        >
          The Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-gold/30 md:-translate-x-1/2"
          />

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-gold border-4 border-[#0B0B0F] md:-translate-x-1/2 z-10 transition-transform group-hover:scale-125" />

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="bg-[#161922] border border-white/5 p-6 rounded-2xl hover:border-accent-gold/20 transition-all duration-300">
                    <span className="text-accent-gold font-mono text-sm font-bold tracking-widest">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-heading font-bold mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
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
