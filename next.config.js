/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 1. Completely disable the default vendor split chunk behavior
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
      
      // 2. Safe Webpack 5 compliant unique naming for JS chunks
      config.output.chunkFilename = 'static/chunks/[name].[contenthash:8].js';
    }
    return config;
  },
};

module.exports = nextConfig;
