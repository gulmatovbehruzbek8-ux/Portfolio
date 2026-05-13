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
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
              Let&apos;s connect.
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed italic">
              &quot;Open to robotics collaborations, STEM projects, and new ideas. Based in Khiva, Uzbekistan — response within 48 hours.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-3xl border-white/10 space-y-6"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Send a Message</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="text-green-500" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Message Sent!</h4>
                    <p className="text-text-secondary text-sm">Thank you, Behruzbek will get back to you soon.</p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary text-xs font-bold uppercase tracking-widest hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we collaborate?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs italic ml-1">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <SendHorizontal size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass p-8 md:p-10 rounded-3xl border-white/10 space-y-8">
                <h3 className="text-xl font-heading font-bold">Channels</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personal.email}`}
                    className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
                  >
                    <Mail className="text-primary mb-3" size={24} />
                    <span className="text-[10px] font-mono text-text-secondary group-hover:text-primary transition-colors break-all">
                      {personal.email}
                    </span>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/Behruzbek7090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/5 transition-all duration-300 text-center"
                  >
                    <TelegramIcon className="text-[#22D3EE] mb-3 w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-[#22D3EE] transition-colors">
                      Telegram
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    <GitHubIcon className="text-white mb-3 w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/5 transition-all duration-300 text-center"
                  >
                    <LinkedInIcon className="text-[#0077B5] mb-3 w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-[#0077B5] transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col items-center space-y-2">
                  <p className="text-xs text-text-muted uppercase tracking-[0.2em]">
                    Located in
                  </p>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <span>{personal.location}</span>
                    <ExternalLink size={14} className="text-text-muted" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
