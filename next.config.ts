// // // I did this since we are doing a redirect from '/' to '/application' until we start the main website

import type { NextConfig } from "next";

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
