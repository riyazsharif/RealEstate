/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: false,
      stream: require.resolve("stream-browserify"),
      path: false,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
