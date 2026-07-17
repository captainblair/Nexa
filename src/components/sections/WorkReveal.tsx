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
import { projects } from "@/lib/data/content";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

function CaseStudy({
  project,
  index,
  reversed,
}: {
  project: (typeof projects)[number];
  index: number;
  reversed: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const disableMotion = prefersReducedMotion || isMobile;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={sectionRef}
      id={index === 0 ? "work" : undefined}
      data-nav-theme={index % 2 === 0 ? "light" : "dark"}
      aria-labelledby={`project-${project.slug}`}
      className={`relative min-h-[100svh] overflow-x-clip ${
        index % 2 === 0 ? "bg-paper" : "bg-charcoal"
      }`}
    >
      <div
        className={`mx-auto flex w-full min-h-[100svh] max-w-[1400px] flex-col justify-center gap-12 px-5 py-32 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:px-10 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          style={{
            scale: disableMotion ? 1 : imageScale,
            y: disableMotion ? 0 : imageY,
          }}
          className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:min-h-[70vh]"
        >
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: project.imagePosition ?? "50% 50%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className={`absolute inset-0 ${
              index % 2 === 0 ? "bg-ink/5" : "bg-charcoal/30"
            }`}
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span
              className={`editorial-index ${
                index % 2 === 0 ? "text-ink/20" : "text-white/25"
              }`}
            >
              {number}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <p
              className={`mt-6 text-xs uppercase tracking-[0.3em] ${
                index % 2 === 0 ? "text-stone" : "text-white/50"
              }`}
            >
              {project.subtitle} · {project.year}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              id={`project-${project.slug}`}
              className={`editorial-pillar mt-4 ${
                index % 2 === 0 ? "text-ink" : "text-white"
              }`}
            >
              {project.title}
            </h3>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 max-w-md">
            <p
              className={`editorial-body ${
                index % 2 === 0 ? "text-ink/75" : "text-white/65"
              }`}
            >
              {project.story}
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className={`text-sm uppercase tracking-[0.15em] ${
                    index % 2 === 0 ? "text-ink/50" : "text-white/40"
                  }`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          {(project.liveUrl || project.repoUrl) && (
            <Reveal delay={0.28} className="mt-12 flex gap-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`editorial-link ${
                    index % 2 === 0 ? "text-ink" : "text-white"
                  }`}
                >
                  View live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`editorial-link ${
                    index % 2 === 0 ? "text-ink/60" : "text-white/50"
                  }`}
                >
                  Source
                </a>
              )}
            </Reveal>
          )}
        </div>
      </div>
    </article>
  );
}

export function WorkReveal() {
  return (
    <div aria-label="Selected work">
      {projects.map((project, index) => (
        <CaseStudy
          key={project.slug}
          project={project}
          index={index}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  );
}
