/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Prevents image-optimization chunk conflicts
  },
  webpack: (config, { isServer }) => {
    // Force Webpack to completely disable splitting vendor chunks
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
