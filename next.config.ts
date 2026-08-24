import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [75, 95],
    formats: ["image/webp"],
  },
};

export default nextConfig;
