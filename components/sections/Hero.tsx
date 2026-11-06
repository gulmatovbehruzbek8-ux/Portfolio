"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import Link from "next/link";
import { ArrowRight, Cpu, Sparkles, Trophy, Award, Terminal, Compass, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/shared/Icons";

const SystemTelemetryCard = () => {
  return (
    <div className="w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Top Status Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            SYSTEM ONLINE &bull; READY
          </span>
        </div>
        <span className="text-[11px] font-mono text-muted-foreground/80 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
          NODE: KHIVA-01
        </span>
      </div>

      {/* Main Spec Grid */}
      <div className="py-6 space-y-4 font-mono text-xs">
        <div className="flex items-start justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/30 transition-all">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Lead Specialty</span>
            <p className="text-sm font-sans font-semibold text-white flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-primary" /> Robotics & Hardware Systems
            </p>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
            Active
          </span>
        </div>

        <div className="flex items-start justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-accent-gold/30 transition-all">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Flagship Achievement</span>
            <p className="text-sm font-sans font-semibold text-white flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-[#EAB308]" /> 3&times; Regional Gold Medalist
            </p>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20">
            Gold 🥇
          </span>
        </div>

        <div className="flex items-start justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Institution</span>
            <p className="text-sm font-sans font-semibold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-cyan-400" /> {personal.school}
            </p>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">
            {personal.grade}
          </span>
        </div>
      </div>

      {/* Diagnostic Pulse Row */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-primary" />
          <span>7-Sensor Hardware Architecture</span>
        </span>
        <span className="text-white font-semibold">100% Calibrated</span>
      </div>

      {/* Ambient background decoration */}
      <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export const Hero = () => {
  const techPills = [
    "Robotics Engineering",
    "Sensor Integration",
    "Circuit Design",
    "Python & AI",
    "Physics Olympiad",
    "Arduino & C++",
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambience & Engineering Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Status Telemetry Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              {personal.school} &bull; {personal.grade}
            </span>
          </div>

          {/* Master Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] text-white">
              Engineering the future with{" "}
              <span className="text-gradient-primary">Robotics &amp; AI</span>.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-xl font-normal leading-relaxed">
              {personal.headline}
            </p>
          </div>

          {/* Subtext Bio */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            {personal.bio}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-7 py-3.5 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_25px_rgba(79,140,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 glass-pill text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            <Link
              href="/about"
              className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-mono text-muted-foreground hover:text-white transition-colors"
            >
              <span>The Journey</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            </Link>
          </div>

          {/* Pill tags */}
          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-muted-foreground/60 mr-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary/70" /> Core Focus:
            </span>
            {techPills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.02] border border-white/[0.05] text-muted-foreground/80 hover:text-white hover:border-white/20 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: High-End System Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
        >
          <SystemTelemetryCard />
        </motion.div>
      </div>
    </section>
  );
};

