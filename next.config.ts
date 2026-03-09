import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blackcoffer_homepage",
  assetPrefix: "/blackcoffer_homepage/",
  images: {
    unoptimized: true
  }
  /* config options here */
};

export default nextConfig;
