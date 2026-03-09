import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

// Need to set basePath for gh-pages so assets are resolved properly
if (isGithubActions || process.env.NODE_ENV === "production") {
  // Found the correct repository name from .git/config
  const repo = "Training_Task_3";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
