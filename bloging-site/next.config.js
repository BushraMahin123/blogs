/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.slingacademy.com',
          port: '',
          pathname: '/public/sample-blog-posts/**',
        },
      ],
    },
  }