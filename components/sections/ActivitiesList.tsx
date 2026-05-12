"use client";

import { motion, useInView } from "framer-motion";
import { activities } from "@/lib/constants/activities";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      // Faster duration for smaller values
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

const ActivityImage = ({ image, title }: { image: string | string[]; title: string }) => {
  if (Array.isArray(image)) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full p-2">
        <div className="relative row-span-2 rounded-xl overflow-hidden">
          <Image src={image[0]} alt={title} fill className="object-cover" />
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Image src={image[1]} alt={title} fill className="object-cover" />
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Image src={image[2] || image[0]} alt={title} fill className="object-cover" />
        </div>
      </div>
    );
  }

  return (
    <Image 
      src={image} 
      alt={title} 
      fill 
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  );
};

export const ActivitiesList = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 20 50 L 30 40 L 70 40 L 80 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
              <path d="M 50 0 L 50 20 L 40 30 L 40 70 L 50 80 L 50 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
              <circle cx="20" cy="50" r="1.5" fill="currentColor" className="text-accent-cyan" />
              <circle cx="80" cy="50" r="1.5" fill="currentColor" className="text-accent-cyan" />
              <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-accent-cyan" />
              <circle cx="50" cy="80" r="1.5" fill="currentColor" className="text-accent-cyan" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-accent-cyan/5 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent-cyan mb-4">
            Hands-on Engineering
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Building, teaching, and leading projects in robotics and media.
          </p>
        </motion.div>

        <div className="space-y-32">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
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
                  <ActivityImage image={activity.image} title={activity.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-bold text-accent-cyan uppercase tracking-wider">
                    {activity.role}
                  </span>
                  <span className={cn(
                    "px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider",
                    activity.status === "Completed" 
                      ? "bg-green-500/10 border-green-500/20 text-green-500" 
                      : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
                  )}>
                    {activity.status === "Completed" ? "✅" : "🔄"} {activity.status}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {activity.title}
                </h2>

                {activity.achievement && (
                  <div className="text-xl font-bold text-accent-cyan">
                    {activity.stats ? (
                      <div className="flex items-center space-x-2">
                        <span>🥇</span>
                        <Counter value={activity.stats.value} suffix={activity.stats.suffix} />
                        <span>{activity.stats.label}</span>
                      </div>
                    ) : (
                      activity.achievement
                    )}
                  </div>
                )}

                <p className="text-lg text-text-secondary leading-relaxed">
                  {activity.description}
                </p>

                {activity.team && (
                  <p className="text-sm text-text-muted">
                    <span className="text-accent-cyan font-bold">Team:</span> {activity.team}
                  </p>
                )}

                {activity.scale && (
                  <p className="text-sm text-text-muted">
                    <span className="text-accent-cyan font-bold">Scale:</span> {activity.scale}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {activity.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-text-muted">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
