"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const terminalContent = [
    `> ${personal.name}`,
    `> Role: ${personal.role}`,
    `> School: ${personal.school}`,
    `> Status: Building. Learning. Competing.`,
    `> Interests: Robotics / Physics / AI / Code`,
    `> Latest: Line Tracking Robot — 3x Regional Gold 🥇`,
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalContent.length) {
        const line = terminalContent[currentLine];
        if (currentChar < line.length) {
          setLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLine]) newLines[currentLine] = "";
            newLines[currentLine] = line.slice(0, currentChar + 1);
            return newLines;
          });
          currentChar++;
        } else {
          currentLine++;
          currentChar = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-[#161922] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-sm md:text-base">
      <div className="bg-[#111218] px-4 py-2 border-b border-white/10 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-xs text-muted-foreground uppercase tracking-widest">bash — 80x24</span>
      </div>
      <div className="p-6 space-y-2 min-h-[240px]">
        {lines.map((line, i) => (
          <div key={i} className={cn(i === 0 ? "text-primary" : "text-text-secondary")}>
            {line}
            {i === lines.length - 1 && i < terminalContent.length - 1 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const tags = ["Robotics", "Physics", "AI", "Engineering", "Python", "JavaScript"];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#232633_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Based in Khiva, Uzbekistan</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
            {personal.headline.split("engineer").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-primary">engineer</span>}
              </span>
            ))}
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            {personal.tagline}
            <br />
            <span className="text-base mt-4 block">
              {personal.bio}
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105">
              View Projects
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center"
        >
          <Terminal />
          
          <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-md">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-4 py-2 bg-[#161922] border border-white/10 rounded-full text-xs font-medium text-muted-foreground"
                whileHover={{ y: -5, borderColor: "rgba(79, 140, 255, 0.5)", color: "#F5F7FA" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
