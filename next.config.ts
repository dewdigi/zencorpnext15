import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.envato.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // Add Contentful's image domain
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;
