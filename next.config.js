/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    swcMinify: true,
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
