"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site";

function ArchitectureDiagram() {
  const layers = [
    { label: "Client", detail: "React · Next.js" },
    { label: "API", detail: "REST · Contracts" },
    { label: "Services", detail: "Domain Logic" },
    { label: "Data", detail: "PostgreSQL" },
  ];

  return (
    <div className="relative space-y-3" aria-hidden="true">
      {layers.map((layer, index) => (
        <div
          key={layer.label}
          className={cn(
            "flex items-center gap-4 border border-ink/10 bg-paper px-4 py-4 transition-colors hover:border-ink/25 hover:bg-paper-muted sm:gap-6 sm:px-6 sm:py-5",
            index === 1 && "md:ml-3",
            index === 2 && "md:ml-6",
            index === 3 && "md:ml-9",
          )}
        >
          <span className="w-16 shrink-0 text-xs uppercase tracking-[0.15em] text-stone sm:w-24 sm:tracking-[0.2em]">
            {layer.label}
          </span>
          <span className="hidden h-px flex-1 bg-ink/10 sm:block" />
          <span className="min-w-0 truncate font-mono text-xs text-ink/70 sm:text-sm">
            {layer.detail}
          </span>
        </div>
      ))}
    </div>
  );
}

export function EngineeringPhilosophy() {
  const { engineering } = siteConfig;

  return (
    <section
      id="engineering"
      data-nav-theme="light"
      aria-labelledby="engineering-headline"
      className="relative min-h-[100svh] bg-paper px-6 py-32 md:py-40 lg:px-10"
    >
      <div className="mx-auto flex min-h-[80svh] max-w-[1200px] flex-col justify-center">
        <Reveal>
          <span className="editorial-index text-ink/15">02</span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            id="engineering-headline"
            className="editorial-pillar mt-4 text-ink"
          >
            Engineering
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal delay={0.1}>
              <p className="text-xl font-light leading-relaxed text-ink md:text-2xl">
                {engineering.headline}
              </p>
            </Reveal>

            <Reveal delay={0.16} className="mt-8 max-w-md">
              <p className="editorial-body text-ink/75">{engineering.statement}</p>
            </Reveal>

            <div className="mt-16 space-y-10">
              {engineering.principles.map((principle, index) => (
                <Reveal key={principle.title} delay={0.12 + index * 0.08}>
                  <div className="border-t border-ink/10 pt-8">
                    <h3 className="text-lg font-medium tracking-tight text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-stone">
                      {principle.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.14}>
              <ArchitectureDiagram />
            </Reveal>

            <Reveal delay={0.22} className="mt-10">
              <div className="overflow-hidden rounded-sm border border-ink/10 bg-charcoal">
                <div className="border-b border-white/10 px-4 py-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    platform.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-white/75">
                  <code>{engineering.code}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
