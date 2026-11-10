"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHubIcon } from "@/components/shared/Icons";
import { Cpu, ArrowUpRight, CheckCircle2, Clock, Terminal, ExternalLink } from "lucide-react";

export const ProjectsList = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <Cpu className="w-4 h-4" /> HARDWARE &bull; SOFTWARE &bull; SYSTEMS
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Engineering Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Autonomous robotics, sensor integrations, competitive algorithm toolkits, and hardware prototypes.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={cn(
                "glass-card p-6 md:p-10 rounded-3xl flex flex-col gap-10 items-center hover:border-primary/40 transition-all duration-300",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#090C12]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                    {project.role}
                  </span>
                  <span className={cn(
                    "px-3 py-1 rounded-full border text-xs font-mono font-medium uppercase tracking-wider flex items-center gap-1",
                    project.status === "Completed"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-amber-400/10 border-amber-400/20 text-amber-400"
                  )}>
                    {project.status === "Completed" ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                    {project.status}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white">
                  {project.title}
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-md text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-mono font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_15px_rgba(79,140,255,0.3)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-semibold text-white hover:bg-white/[0.08] hover:border-primary/40 transition-all hover:scale-105"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

