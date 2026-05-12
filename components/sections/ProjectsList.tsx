"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHubIcon } from "@/components/shared/Icons";

export const ProjectsList = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
            Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Things I have built — hardware, software, and everything in between.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex flex-col gap-12 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#161922]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
                    {project.role}
                  </span>
                  <span className={cn(
                    "px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider",
                    project.status === "Completed" 
                      ? "bg-green-500/10 border-green-500/20 text-green-500" 
                      : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
                  )}>
                    {project.status === "Completed" ? "✅" : "🔄"} {project.status}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {project.title}
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-text-muted">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 group"
                  >
                    <GitHubIcon className="w-5 h-5 text-white" />
                    <span className="font-bold text-sm">View on GitHub</span>
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
