"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/constants/skills";

export const Skills = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-16 text-accent-gold"
        >
          Specialized Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#161922] border border-white/5 p-8 rounded-2xl hover:border-accent-gold/20 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)] transition-all group"
            >
              <div className="text-4xl mb-6">{group.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-6 group-hover:text-accent-gold transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary whitespace-nowrap"
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
