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
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/application",
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/ctrl-labs",
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/lostnfound",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/lostnfound",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
