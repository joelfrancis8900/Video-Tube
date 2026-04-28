import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mxmkdcjzqvzyckrcmohh.supabase.co",
      },
    ],
  },
};

export default nextConfig;