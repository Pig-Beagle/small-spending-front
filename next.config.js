/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.boringavatars.com',
        pathname: '/beam/20/**',
      },
    ],
  },
}

module.exports = nextConfig
