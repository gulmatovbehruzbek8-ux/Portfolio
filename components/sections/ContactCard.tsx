"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/constants/personal";
import { Mail, ExternalLink, SendHorizontal, Loader2, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/Icons";
import { useState } from "react";

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.47-1-.6-1.33-.92-.27-2.31.28-.36 2.54-2.32 2.58-2.51.01-.02.01-.11-.05-.16-.06-.05-.14-.03-.21-.02-.09.01-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.91-1.27 4.85-2.11 5.82-2.52 2.76-1.17 3.33-1.37 3.7-.1.08.28.18.77.16 1.15z" />
  </svg>
);

export const ContactCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden relative">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="text-xs font-mono text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
              Let&apos;s build together.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Open to robotics collaborations, STEM projects, and ambitious engineering challenges. Based in Khiva, Uzbekistan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-7 sm:p-9 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
            >
              <h3 className="text-xl font-heading font-bold text-white">Send a Message</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-2xl flex flex-col items-center text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  <div className="text-sm font-semibold text-white">Message Dispatched!</div>
                  <div className="text-xs text-muted-foreground">Thank you for reaching out. I will respond to your transmission within 48 hours.</div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-[#090C12] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 text-white placeholder-muted-foreground/40 text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full bg-[#090C12] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 text-white placeholder-muted-foreground/40 text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we collaborate on robotics or software?"
                      className="w-full bg-[#090C12] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 text-white placeholder-muted-foreground/40 text-sm transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-xs bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl space-y-1.5">
                      <p className="text-rose-400">{error}</p>
                      <a
                        href={`mailto:${personal.email}?subject=Message%20from%20Portfolio`}
                        className="inline-block text-primary hover:underline font-mono text-[11px]"
                      >
                        Send message directly via email client &rarr;
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-semibold text-xs py-3.5 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 shadow-[0_0_20px_rgba(79,140,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Transmitting...</span>
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <SendHorizontal size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Social Links & Telemetry */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-4 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-primary">Direct Telemetry</span>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-white font-sans font-medium">{personal.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-muted-foreground">Response Window</span>
                    <span className="text-emerald-400 font-semibold">&lt; 48 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-primary font-semibold">Active &bull; Accepting Collaborations</span>
                  </div>
                </div>
              </div>

              {/* Channel Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="glass-card p-4 rounded-2xl border border-white/10 hover:border-primary/40 flex items-center space-x-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono text-muted-foreground uppercase">Email</span>
                    <span className="text-xs font-medium text-white truncate block">Direct Transmission</span>
                  </div>
                </a>

                <a
                  href="https://t.me/Behruzbek7090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-400/40 flex items-center space-x-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <TelegramIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono text-muted-foreground uppercase">Telegram</span>
                    <span className="text-xs font-medium text-white truncate block">@Behruzbek7090</span>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-2xl border border-white/10 hover:border-white/30 flex items-center space-x-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono text-muted-foreground uppercase">GitHub</span>
                    <span className="text-xs font-medium text-white truncate block">Repositories</span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-2xl border border-white/10 hover:border-blue-500/40 flex items-center space-x-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono text-muted-foreground uppercase">LinkedIn</span>
                    <span className="text-xs font-medium text-white truncate block">Professional</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
