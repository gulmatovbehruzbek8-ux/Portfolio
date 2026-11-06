"use client";

import { Hero } from "@/components/sections/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { personal } from "@/lib/constants/personal";
import { projects } from "@/lib/constants/projects";
import { 
  Trophy, 
  Cpu, 
  Award, 
  Code2, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Compass,
  Layers,
  Activity as ActivityIcon
} from "lucide-react";
import { GitHubIcon } from "@/components/shared/Icons";

export default function Home() {
  const highlights = [
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "3× Regional Gold",
      desc: "Line Tracking Robot Champion",
      meta: "Khorezm Region",
      badge: "Competition",
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: "7-Sensor Array",
      desc: "Custom Hardware & Wiring Design",
      meta: "Analog & Digital Integration",
      badge: "Engineering",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: "Presidential Scholar",
      desc: "Presidential School in Khiva",
      meta: "Top 1% Academic Selection",
      badge: "9th Grade",
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "AI & Algorithms",
      desc: "Competitive Python Toolkit",
      meta: "Olympiad Problem Solving",
      badge: "Software",
    },
  ];

  return (
    <div className="flex flex-col space-y-24 md:space-y-32 pb-24">
      {/* 1. Master Hero */}
      <Hero />

      {/* 2. Key Engineering Highlights Bar */}
      <section className="container mx-auto px-6 relative z-10 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-muted-foreground/70">
                {item.meta}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Featured Robotics Engineering Spotlight */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/[0.08] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                <Zap className="w-3.5 h-3.5" />
                <span>FLAGSHIP HARDWARE SYSTEM</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
                Line Tracking Robot <br className="hidden sm:inline" />
                <span className="text-gradient-primary">3× Regional Gold Champion</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl">
                A high-speed autonomous navigation vehicle engineered with 7 precision optical sensors for real-time edge calibration and microsecond loop control. Led the full physical circuit design, motor driver routing, and sensor wiring.
              </p>

              {/* Hardware Spec Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="block text-[10px] font-mono text-muted-foreground uppercase">Sensor Bank</span>
                  <span className="font-semibold text-xs text-white">7 High-Precision IRs</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="block text-[10px] font-mono text-muted-foreground uppercase">Role</span>
                  <span className="font-semibold text-xs text-white">Co-Developer (Hardware)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-mono text-muted-foreground uppercase">Track Record</span>
                  <span className="font-semibold text-xs text-amber-400">100% Win Rate 🥇</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold text-xs rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <span>View Project Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 glass-pill text-white font-semibold text-xs rounded-xl hover:scale-105"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>Hardware Repository</span>
                </a>
              </div>
            </div>

            {/* Right Schematic Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#090C12] border border-white/10 p-6 space-y-5 font-mono text-xs shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <ActivityIcon className="w-4 h-4 text-emerald-400" /> CALIBRATION TELEMETRY
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>SENSOR ARRAY [S1 - S7]</span>
                    <span className="text-white font-mono font-bold">1110111 (LOCKED)</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-cyan-400 h-full w-[94%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Loop Frequency: 2.4 kHz</span>
                    <span>Deviation: &plusmn;0.04 mm</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <span className="text-[10px] text-muted-foreground uppercase">Chassis Platform</span>
                  <p className="text-xs text-white font-sans">
                    Custom lightweight chassis with balanced center of gravity for maximum velocity through 90&deg; hairpins.
                  </p>
                </div>

                <div className="pt-2 text-[10px] text-muted-foreground/60 border-t border-white/[0.06] flex items-center justify-between">
                  <span>DEPLOYMENT: KHOREZM REGIONAL</span>
                  <span className="text-amber-400 font-bold">GOLD × 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated Works & Research Section */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              PORTFOLIO CATALOG
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
              Selected Projects &amp; Software
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-muted-foreground hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {proj.role}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.03] border border-white/[0.06] text-muted-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-muted-foreground hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
                <Link
                  href="/projects"
                  className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Direct Connect & Call to Action Banner */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#101420] to-[#0A0D14] border border-white/[0.1] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              COLLABORATION &bull; RESEARCH &bull; STEM
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
              Have a challenge or robotics idea to build?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
              Open to robotics collaborations, STEM projects, and ambitious engineering challenges. Based in Khiva, Uzbekistan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-primary text-white font-semibold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(79,140,255,0.3)] hover:scale-105"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 glass-pill text-white font-semibold text-xs rounded-xl hover:scale-105"
              >
                Read Background &amp; Honors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

