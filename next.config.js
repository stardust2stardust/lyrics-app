/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.genius.com",
      },
      {
        hostname: "images.rapgenius.com",
      },
      {
        hostname: "assets.genius.com",
      },
    ],
  },
};

module.exports = nextConfig;
