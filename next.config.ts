// I did this since we are doing a redirect from '/' to '/application' until we start the main website

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/application',
      //   permanent: true, 
      // },
      // {
      //   source: '/contact',
      //   destination: '/application',
      //   permanent: true,
      // }
    ]
  },
}

export default nextConfig;



