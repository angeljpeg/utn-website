import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
