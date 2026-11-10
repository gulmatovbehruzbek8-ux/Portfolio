"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { activities } from "@/lib/constants/activities";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Trophy, CheckCircle2, RefreshCw, Users, Globe2, Compass, X, Maximize2 } from "lucide-react";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = value < 10 ? 1000 : 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const ActivityImage = ({
  image,
  title,
  onImageClick,
}: {
  image: string | string[];
  title: string;
  onImageClick?: (src: string) => void;
}) => {
  if (Array.isArray(image)) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full p-2">
        <div
          onClick={() => onImageClick?.(image[0])}
          className="relative row-span-2 rounded-2xl overflow-hidden cursor-pointer group/img"
        >
          <Image src={image[0]} alt={title} fill className="object-cover group-hover/img:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 flex items-center justify-center transition-all">
            <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        </div>
        <div
          onClick={() => onImageClick?.(image[1])}
          className="relative rounded-2xl overflow-hidden cursor-pointer group/img"
        >
          <Image src={image[1]} alt={title} fill className="object-cover group-hover/img:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 flex items-center justify-center transition-all">
            <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        </div>
        <div
          onClick={() => onImageClick?.(image[2] || image[0])}
          className="relative rounded-2xl overflow-hidden cursor-pointer group/img"
        >
          <Image src={image[2] || image[0]} alt={title} fill className="object-cover group-hover/img:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 flex items-center justify-center transition-all">
            <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onImageClick?.(image)}
      className="relative w-full h-full cursor-pointer group/img flex items-center justify-center bg-[#07090E]"
    >
      <Image 
        src={image} 
        alt={title} 
        fill 
        className={image.includes("KhanteMUN") || image.includes("edexcel")
          ? "object-contain p-4 group-hover/img:scale-105 transition-transform duration-700"
          : "object-cover group-hover/img:scale-105 transition-transform duration-700"}
      />
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 flex items-center justify-center transition-all">
        <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export const ActivitiesList = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 20 50 L 30 40 L 70 40 L 80 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M 50 0 L 50 20 L 40 30 L 40 70 L 50 80 L 50 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="20" cy="50" r="1.5" fill="currentColor" className="text-primary" />
              <circle cx="80" cy="50" r="1.5" fill="currentColor" className="text-primary" />
              <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-primary" />
              <circle cx="50" cy="80" r="1.5" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <Compass className="w-4 h-4" /> LEADERSHIP &bull; MENTORSHIP &bull; CREATIVE
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Activities &amp; Leadership
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building clubs, organizing regional conferences, and mentoring younger students in engineering and creative visual arts.
          </p>
        </motion.div>

        <div className="space-y-24">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
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
                  <ActivityImage image={activity.image} title={activity.title} onImageClick={setActivePhoto} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                    {activity.role}
                  </span>
                  <span className={cn(
                    "px-3 py-1 rounded-full border text-xs font-mono font-medium uppercase tracking-wider flex items-center gap-1",
                    activity.status === "Completed" 
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                      : "bg-amber-400/10 border-amber-400/20 text-amber-400"
                  )}>
                    {activity.status === "Completed" ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <RefreshCw className="w-3.5 h-3.5" />
                    )}
                    {activity.status}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white">
                  {activity.title}
                </h2>

                {activity.achievement && (
                  <div className="text-lg font-bold text-amber-400">
                    {activity.stats ? (
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-amber-400" />
                        <Counter value={activity.stats.value} suffix={activity.stats.suffix} />
                        <span>{activity.stats.label}</span>
                      </div>
                    ) : (
                      activity.achievement
                    )}
                  </div>
                )}

                <p className="text-base text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>

                {activity.team && (
                  <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span className="text-white font-medium">Team:</span> {activity.team}
                  </p>
                )}

                {activity.scale && (
                  <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-white font-medium">Scale:</span> {activity.scale}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-3">
                  {activity.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-md text-xs font-mono text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-3xl overflow-hidden border border-white/15 bg-[#090C12] shadow-2xl flex flex-col cursor-default"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 z-10 bg-[#0B0B0F]/80 backdrop-blur">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  High-Resolution Asset Preview
                </span>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
                <Image
                  src={activePhoto}
                  alt="Full-resolution view"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

