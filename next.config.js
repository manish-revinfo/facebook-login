<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:3000/:path*',
      },
    ]
  },
}

module.exports = nextConfig
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:3000/:path*',
      },
    ]
  },
}

module.exports = nextConfig
>>>>>>> 5ee25769d9154a23704763a9e462d1888afd19cd
