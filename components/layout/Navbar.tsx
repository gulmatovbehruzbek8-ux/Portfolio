"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants/navigation";
import { personal } from "@/lib/constants/personal";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-3 md:pt-4 px-4 md:px-8">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 md:px-6 py-3 flex items-center justify-between",
          isScrolled
            ? "glass-card border-white/10 shadow-2xl bg-[#0B0B0F]/90 backdrop-blur-xl"
            : "bg-[#0B0B0F]/75 backdrop-blur-xl border border-white/10 shadow-lg"
        )}
      >
        {/* Logo / Monogram */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/40 p-[1px] shadow-sm">
            <div className="w-full h-full bg-[#0B0B0F] rounded-[11px] flex items-center justify-center transition-all group-hover:bg-transparent">
              <span className="font-heading font-extrabold text-xs tracking-wider text-white">BG</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-heading font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              {personal.name}
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-widest hidden sm:inline-block">
              ROBOTICS &bull; AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Telemetry & Quick CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-muted-foreground px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KHIVA, UZ</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1 text-xs font-semibold px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(79,140,255,0.3)] hover:scale-105"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground hover:bg-white/[0.08] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-card border border-white/10 p-5 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">📍 Presidential School in Khiva</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

