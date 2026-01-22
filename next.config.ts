// I did this since we are doing a redirect from '/' to '/application' until we start the main website

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/event-registrar",
        permanent: true,
      },
      {
        source: "/application",
        destination: "/event-registrar",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/event-registrar",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/event-registrar",
        permanent: true,
      },
      {
        source: "/ctrl-labs",
        destination: "/event-registrar",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/event-registrar",
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


