import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Providers } from "@/components/layout/Providers";
import { siteConfig } from "@/lib/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          href="/videos/nairobi-hero-mobile.mp4"
          as="fetch"
          type="video/mp4"
          media="(max-width: 767px)"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/videos/nairobi-hero.mp4"
          as="fetch"
          type="video/mp4"
          media="(min-width: 768px)"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full w-full overflow-x-clip bg-paper text-ink">
        <Navigation />
        <Providers>
          <main className="w-full overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
