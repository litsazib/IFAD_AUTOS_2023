/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

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
