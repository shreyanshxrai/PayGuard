import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: ":path*",
        destination: "https://payguard-iy1w.onrender.com/:path*",
      },
    ];
  },
};
export default nextConfig;
