/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = nextConfig;
