export const siteConfig = {
  name: "Nexa Nairobi",
  title: "Nexa Nairobi — Software Engineering Studio",
  description:
    "A software engineering studio designing and building production-ready web applications, backend systems, and digital products.",
  url: "https://nexa-nairobi.vercel.app",
  company: {
    email: "wangolotony4@gmail.com",
    phone: "+254 111 414 441",
    location: "Nairobi, Kenya",
    linkedin: "https://linkedin.com/in/tony-wangolo-545b23285",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    lines: ["CRAFT", "ENGINEERING", "DELIVERY"],
    tagline: "Engineered in Nairobi. Built for the world.",
  },
  about: {
    kicker: "Nairobi · Software Studio",
    statement: [
      "We build software",
      "from a city that never",
      "stands still.",
    ],
    body: "Nairobi moves fast — markets shift overnight, infrastructure scales in years, ambition outpaces bandwidth. That rhythm shapes how we engineer: systems that survive real conditions, products that ship under pressure, code that holds when it matters.",
    closing:
      "Nexa Nairobi is a founder-led studio. Small by design. Focused on craft over volume. We don't sell the city — we build from it.",
  },
  pillars: {
    craft: {
      title: "Craft",
      lead: "Every line of code is a decision.",
      body: "We treat interfaces as architecture and backends as infrastructure. No template thinking. No decoration without purpose. What we ship has to work beautifully under load — and still be maintainable six months later.",
      image: "/images/developer.jpg",
      imagePosition: "50% 40%",
    },
    delivery: {
      title: "Delivery",
      lead: "Ideas mean nothing until they ship.",
      body: "Production is the only benchmark. We move from architecture to deployment with discipline — clear milestones, tested releases, and systems designed to evolve. The studio exists to close the gap between vision and reality.",
      image: "/images/nairobi-expressway.jpg",
      imagePosition: "50% 45%",
    },
  },
  engineering: {
    kicker: "Philosophy",
    headline: "Structure over spectacle.",
    statement:
      "World-class software does not depend on geography. It depends on clarity — in architecture, in communication, and in the discipline to ship.",
    principles: [
      {
        title: "Architecture first",
        detail: "Systems designed before screens. Boundaries defined. Data flows mapped.",
      },
      {
        title: "Ship with evidence",
        detail: "Every release tested. Every decision traceable. No guesswork in production.",
      },
      {
        title: "Build to evolve",
        detail: "Modular by default. Refactor-friendly. Ready for what comes next.",
      },
    ],
    code: `// Nexa — layered by design
const platform = {
  client:   "React · Next.js",
  api:      "REST · typed contracts",
  services: "domain logic · isolated",
  data:     "PostgreSQL · migrations",
};

export async function ship(feature: Feature) {
  await validate(feature);
  await deploy(feature);
  return measure(feature);
}`,
  },
  contact: {
    headline: "Start a project.",
    subline: "Tell us what you're building. We'll tell you how we'd engineer it.",
  },
} as const;
