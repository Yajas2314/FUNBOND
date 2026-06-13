/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This explicitly forces Webpack to clear asset conflicts
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.output.styleChunksFilename = 'static/chunks/[name].[contenthash:8].css';
      config.output.chunkFilename = 'static/chunks/[name].[contenthash:8].js';
    }
    return config;
  },
};

module.exports = nextConfig;
