import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // WebP: compresión rápida y buen manejo del canal alfa del logo transparente.
  images: { formats: ["image/webp"] },
};

export default nextConfig;
