"use client";

import { Reveal, RevealLine } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export function AboutEditorial() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      data-nav-theme="light"
      aria-labelledby="about-statement"
      className="relative min-h-[100svh] bg-paper px-6 py-32 md:py-40 lg:px-10"
    >
      <div className="mx-auto flex min-h-[70svh] max-w-[1200px] flex-col justify-center">
        <Reveal>
          <p className="editorial-kicker text-stone">{about.kicker}</p>
        </Reveal>

        <h2 id="about-statement" className="editorial-display mt-10 text-ink">
          {about.statement.map((line, index) => (
            <RevealLine key={line} index={index} className="block">
              {line}
            </RevealLine>
          ))}
        </h2>

        <Reveal delay={0.2} className="mt-16 max-w-2xl">
          <p className="editorial-body text-ink/85">{about.body}</p>
        </Reveal>

        <Reveal delay={0.35} className="mt-10 max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone">
            {about.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
