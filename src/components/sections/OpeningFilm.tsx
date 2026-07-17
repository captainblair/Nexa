"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { heroVideo } from "@/lib/data/content";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { siteConfig } from "@/lib/data/site";

export function OpeningFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const disableMotion = prefersReducedMotion || isMobile;
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [0.45, 0.72]);

  return (
    <section
      id="opening"
      ref={sectionRef}
      aria-label="Opening"
      data-nav-theme="dark"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ scale: disableMotion ? 1 : videoScale }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroVideo.poster}
          className="h-full w-full object-cover"
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        style={{ opacity: disableMotion ? 0.55 : overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/80"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: disableMotion ? 0 : contentY }}
        className="relative z-10 px-6 py-32 text-center"
      >
        <p className="mb-8 text-xs font-normal uppercase tracking-[0.35em] text-white/70">
          {siteConfig.name}
        </p>

        <h1>
          {siteConfig.hero.lines.map((line, index) => (
            <motion.span
              key={line}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.25 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="studio-hero-line block text-white"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {siteConfig.hero.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
}
