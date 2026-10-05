// Redirects are active by default. Set PREVIEW_MODE=true to disable them
// so the design team can preview the full application.

import type { NextConfig } from "next";

const isPreviewMode = process.env.PREVIEW_MODE === "true";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    if (isPreviewMode) {
      return [];
    }

    return [
      {
        source: "/",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/application",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/ctrl-labs",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/thegrandfinale",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/thegrandfinale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
