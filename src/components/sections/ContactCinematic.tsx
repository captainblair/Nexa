"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { siteConfig } from "@/lib/data/site";

export function ContactCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const disableMotion = prefersReducedMotion || isMobile;
  const { contact, company } = siteConfig;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, -20]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-nav-theme="dark"
      aria-labelledby="contact-headline"
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ scale: disableMotion ? 1 : imageScale }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src="/images/nairobi-skyline.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          style={{ objectPosition: "50% 30%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/70" />
      </motion.div>

      <motion.div
        style={{ y: disableMotion ? 0 : headlineY }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 py-32 text-center sm:px-6 lg:px-10"
      >
        <Reveal>
          <h2
            id="contact-headline"
            className="editorial-display text-white"
          >
            {contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 max-w-lg">
          <p className="text-lg text-white/55 md:text-xl">{contact.subline}</p>
        </Reveal>

        <Reveal delay={0.22} className="mt-16">
          <a
            href={`mailto:${company.email}`}
            className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-2xl text-white transition-colors hover:border-white md:text-4xl"
          >
            {company.email}
            <ArrowUpRight
              className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-8"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal delay={0.32} className="mt-20 flex flex-col items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/35">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-white/60"
          >
            {company.phone}
          </a>
          <span>{company.location}</span>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/60"
          >
            LinkedIn
          </a>
        </Reveal>
      </motion.div>
    </section>
  );
}
