"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/constants/skills";
import { Cpu, Terminal, Compass, Layers, CheckCircle } from "lucide-react";

export const Skills = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" /> TECHNICAL STACK
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
            Specialized Skills &amp; Tooling
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-7 rounded-3xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-3xl mb-5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] w-fit group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-5 group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs font-mono text-muted-foreground hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

