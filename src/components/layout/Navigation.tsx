"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type NavTheme = "dark" | "light";

export function Navigation() {
  const [navTheme, setNavTheme] = useState<NavTheme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const isMobile = useIsMobile();
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const onLight = navTheme === "light";
  const compact = !atTop || isMobile;

  useEffect(() => {
    const sections = document.querySelectorAll("[data-nav-theme]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const theme = visible[0].target.getAttribute("data-nav-theme");
          if (theme === "dark" || theme === "light") {
            setNavTheme(theme);
          }
        }
      },
      { threshold: [0, 0.15, 0.35, 0.55], rootMargin: "-72px 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 24);

      if (menuOpen || isMobile) {
        setNavHidden(false);
        lastScrollY.current = y;
        return;
      }

      if (y < 120) {
        setNavHidden(false);
      } else if (y > lastScrollY.current + 10) {
        setNavHidden(true);
      } else if (y < lastScrollY.current - 10) {
        setNavHidden(false);
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen, isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = cn(
    "studio-nav-link transition-opacity hover:opacity-60",
    onLight || menuOpen ? "text-ink" : "text-white",
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full max-w-full transition-[transform,background-color,padding] duration-300",
          navHidden && !menuOpen && !isMobile && "-translate-y-full",
          onLight || menuOpen
            ? "border-b border-ink/10 bg-paper/95 backdrop-blur-md"
            : atTop
              ? "bg-transparent"
              : "bg-charcoal/90 backdrop-blur-md",
          compact ? "py-3" : "py-6 md:py-8",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-10"
        >
          <Link
            href="#opening"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "shrink-0 transition-opacity hover:opacity-80",
              onLight || menuOpen ? "brightness-0" : "",
            )}
            aria-label={siteConfig.name}
          >
            <Logo
              variant="mark"
              priority
              className={
                compact
                  ? "max-h-11 md:max-h-12"
                  : "max-h-14 md:max-h-20 lg:max-h-24"
              }
            />
          </Link>

          <ul className="hidden items-center gap-12 md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "studio-nav-link shrink-0 md:hidden",
              onLight || menuOpen ? "text-ink" : "text-white",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {!prefersReducedMotion && atTop && !onLight && !menuOpen && !isMobile && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 hidden h-px w-full max-w-[1200px] origin-left bg-white/15 lg:px-10"
            aria-hidden="true"
          />
        )}
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-end bg-paper px-6 pb-16 pt-28 md:hidden"
        >
          <ul className="space-y-8">
            {siteConfig.nav.map((item, index) => (
              <motion.li
                key={item.href}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="editorial-pillar text-4xl text-ink"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
