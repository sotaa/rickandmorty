/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "www.kindpng.com",
        pathname: "/picc/**",
      },
    ],
  },
};

module.exports = nextConfig;
