/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'autoscms.ifadgroup.com',
        port: '8081',
        pathname: '/storage/content-item/**'
      },
      ],
  },

};




