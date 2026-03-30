import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["mongodb", "bcrypt"],

  images: {
    unoptimized: true, // ✅ allow any external image URL
  },
};

export default nextConfig;
