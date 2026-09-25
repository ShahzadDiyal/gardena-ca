/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true
      },
      {
        source: '/service-areas',
        destination: '/',
        permanent: true
      },
      {
        source: '/locations',
        destination: '/contact/',
        permanent: true
      },
      {
        source: '/emergency',
        destination: '/emergency-water-main-repair/',
        permanent: true
      },
      {
        source: '/leak-detection',
        destination: '/underground-water-leak-detection/',
        permanent: true
      },
      {
        source: '/trenchless',
        destination: '/trenchless-water-line-replacement/',
        permanent: true
      },
      {
        source: '/galvanized',
        destination: '/galvanized-pipe-replacement/',
        permanent: true
      },
      {
        source: '/pressure',
        destination: '/low-water-pressure-repair/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;

