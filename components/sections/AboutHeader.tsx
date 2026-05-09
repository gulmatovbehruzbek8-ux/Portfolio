"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import Image from "next/image";

export const AboutHeader = () => {
  return (
    <section className="pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-accent-gold/50 p-1 bg-[#161922]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0B0B0F]">
              <Image 
                src="/images/portrait.JPG" 
                alt={personal.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent-gold">
              {personal.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-text-secondary">
              {personal.role}
            </p>
          </div>

          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-accent-gold/5 border border-accent-gold/20 backdrop-blur-sm">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-accent-gold/10 flex items-center justify-center">
              <Image 
                src="/images/entrance.jpg" 
                alt="School Entrance" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-accent-gold tracking-wide">
              {personal.school}
            </span>
          </div>

          <p className="max-w-3xl text-lg text-text-secondary leading-relaxed">
            {personal.bio}
          </p>

          <div className="flex items-center space-x-2 text-muted-foreground text-sm uppercase tracking-widest">
            <span>{personal.location}</span>
            <span className="w-1 h-1 rounded-full bg-accent-gold" />
            <span>{personal.grade}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
