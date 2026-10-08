/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: '/services/land-valuation-bangalore',
        destination: '/services/property-valuation-bangalore',
        permanent: true,
      },
      {
        source: '/services/business-valuation-bangalore',
        destination: '/services/property-valuation-bangalore',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
