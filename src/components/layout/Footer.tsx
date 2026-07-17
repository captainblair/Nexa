import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.25em] text-stone">
          © {year} {siteConfig.name}
        </p>

        <div className="flex flex-wrap gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-stone transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
