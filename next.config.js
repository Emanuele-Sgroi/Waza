/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://xsgames.co/', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
