/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.etsii.us.es',
      },
      {
        hostname: 'www.us.es',
      },
      {
        hostname: 'astelus.com',
      }
    ]
  }
}

export default nextConfig
