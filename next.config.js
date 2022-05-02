/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/ssgDemo/:id',
        headers: [
          {
            key: 'x-demo',
            value: ':id',
          },
          {
            key: 'Cache-Control',
            value: 'max-age: 100',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
