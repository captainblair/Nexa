"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

type PillarMomentProps = {
  id: string;
  index: string;
  title: string;
  lead: string;
  body: string;
  image: string;
  imagePosition?: string;
};

export function PillarMoment({
  id,
  index,
  title,
  lead,
  body,
  image,
  imagePosition = "50% 50%",
}: PillarMomentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const disableMotion = prefersReducedMotion || isMobile;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id={id}
      ref={sectionRef}
      data-nav-theme="dark"
      aria-labelledby={`${id}-title`}
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ y: disableMotion ? 0 : imageY }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          style={{ objectPosition: imagePosition }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      </motion.div>

      <motion.div
        style={{ y: disableMotion ? 0 : textY }}
        className="relative z-10 flex min-h-[100svh] items-center px-5 py-32 sm:px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <Reveal>
            <span className="editorial-index text-white/30">{index}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              id={`${id}-title`}
              className="editorial-pillar mt-6 text-white"
            >
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 max-w-xl">
            <p className="text-xl font-light leading-relaxed text-white/90 md:text-2xl">
              {lead}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 max-w-lg">
            <p className="editorial-body text-white/60">{body}</p>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
