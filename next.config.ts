import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so Render can host this as a free Static Site
  // (no always-on Node server / $7 Web Service).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
