/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // 1. Force Webpack to disable splitting vendor chunks entirely
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
      
      // 2. Force a single unique filename hash for every bundle piece
      config.output.styleChunksFilename = 'static/chunks/[name].[contenthash:8].css';
      config.output.chunkFilename = 'static/chunks/[name].[contenthash:8].js';
    }
    return config;
  },
}

module.exports = nextConfig;
