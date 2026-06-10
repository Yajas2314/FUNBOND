/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost', 'yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimization
  swcMinify: true,
  compress: true,

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '#contact',
        permanent: false,
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Webpack configuration for optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              filename: 'chunks/vendor.js',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // GSAP in separate chunk
            gsap: {
              filename: 'chunks/gsap.js',
              test: /[\\/]node_modules[\\/]gsap/,
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Framer Motion in separate chunk
            framer: {
              filename: 'chunks/framer-motion.js',
              test: /[\\/]node_modules[\\/]framer-motion/,
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Common chunk
            common: {
              filename: 'chunks/common.js',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  // Internationalization (optional)
  i18n: {
    locales: ['en-IN', 'en'],
    defaultLocale: 'en-IN',
  },
};

module.exports = nextConfig;
