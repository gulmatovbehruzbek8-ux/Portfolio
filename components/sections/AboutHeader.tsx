"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import Image from "next/image";
import { MapPin, GraduationCap, Award, Compass, Cpu, Sparkles } from "lucide-react";

export const AboutHeader = () => {
  return (
    <section className="pt-28 pb-16 overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto"
        >
          {/* Portrait Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl overflow-hidden border border-white/20 p-1.5 bg-[#0e121b]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0B0B0F]">
                <Image 
                  src="/images/portrait.JPG" 
                  alt={personal.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Titles & Roles */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>{personal.grade} &bull; Presidential School Scholar</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
              {personal.name}
            </h1>
            <p className="text-lg md:text-xl font-medium text-primary">
              {personal.role}
            </p>
          </div>

          {/* Institution Badge */}
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full glass-card border border-white/10 shadow-lg">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20">
              <Image 
                src="/images/entrance.jpg" 
                alt="School Entrance" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              {personal.school}
            </span>
          </div>

          {/* Bio text */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {personal.bio}
          </p>

          {/* Location & Specs */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-primary" /> {personal.location}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> {personal.grade}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Award className="w-3.5 h-3.5 text-amber-400" /> 3&times; Regional Gold
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> IELTS 8.0 &bull; IGCSE 9s
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

