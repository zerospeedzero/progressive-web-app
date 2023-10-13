/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   basePath: "",
// };

// module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  basePath: "",
  reactStrictMode: true,
  images: { unoptimized: true,
    domains: [
      'lh3.googleusercontent.com', 'gateway.ipfscdn.io'
    ],    
  },
});
