/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
   
   
}

module.exports = nextConfig
