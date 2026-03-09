// I did this since we are doing a redirect from '/' to '/application' until we start the main website

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ibs2.0",
        permanent: true,
      },
      {
        source: "/application",
        destination: "/ibs2.0",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/ibs2.0",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/ibs2.0",
        permanent: true,
      },
      {
        source: "/ctrl-labs",
        destination: "/ibs2.0",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/ibs2.0",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   experimental: {
//     turbo: false,
//   },
// });


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async redirects() {
//     return [];
//   },
// };

// export default nextConfig;


