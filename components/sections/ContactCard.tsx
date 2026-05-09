"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import { Mail, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/Icons";

export const ContactCard = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Shifting Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(79, 140, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(201, 168, 76, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(79, 140, 255, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass p-12 md:p-16 rounded-[2.5rem] border-white/10 shadow-2xl space-y-10 text-center"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
                Let&apos;s connect.
              </h1>
              <p className="text-lg text-text-secondary">
                Open to collaborations, questions, and new ideas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`mailto:${personal.email}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-primary" size={24} />
                </div>
                <span className="text-[10px] md:text-xs font-mono text-text-secondary group-hover:text-primary transition-colors break-all">
                  {personal.email}
                </span>
                <div className="mt-2 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GitHubIcon className="text-white w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">
                  GitHub
                </span>
                <div className="mt-2 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="text-[#0077B5] w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-text-secondary group-hover:text-[#0077B5] transition-colors">
                  LinkedIn
                </span>
                <div className="mt-2 h-0.5 w-0 bg-[#0077B5] group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
              <p className="text-xs text-text-muted uppercase tracking-[0.2em]">
                Located in
              </p>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span>{personal.location}</span>
                <ExternalLink size={14} className="text-text-muted" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
