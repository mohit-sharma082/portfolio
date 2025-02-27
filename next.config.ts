import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This tells Next.js to export a static site
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;
