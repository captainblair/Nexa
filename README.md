# Nexa Nairobi

Premium marketing site for **Nexa Nairobi** — a founder-led software engineering studio based in Nairobi, Kenya.

Engineered in Nairobi. Built for the world.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/) (smooth scroll on desktop)
- [GSAP](https://gsap.com/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── layout/       # Navigation, footer, smooth scroll
│   ├── motion/       # Scroll reveal utilities
│   └── sections/     # Hero, about, pillars, work, contact
└── lib/
    ├── data/         # Site copy & portfolio projects
    └── hooks/        # Shared hooks

public/
├── images/           # Photography & project screenshots
├── videos/           # Hero background video
└── logo.png
```

## Content

Edit portfolio projects and site copy in:

- `src/lib/data/content.ts` — projects, images, live URLs
- `src/lib/data/site.ts` — about, pillars, contact, navigation

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node.js host that supports Next.js:

1. Connect this repository
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: default (`.next`)

Set `siteConfig.url` in `src/lib/data/site.ts` to your production domain after deploy.

## License

Private — © Nexa Nairobi. All rights reserved.
