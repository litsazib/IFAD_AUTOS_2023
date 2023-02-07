/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

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




