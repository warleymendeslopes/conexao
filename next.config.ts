import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    CERTIFIER: process.env.CERTIFIER,
  },
  images: {
    disableStaticImages: true,
    domains: [
      'storage.googleapis.com',
      'thispersondoesnotexist.com',
      'novo-site-unica.s3.amazonaws.com',
    ],
  },
};

export default nextConfig;
