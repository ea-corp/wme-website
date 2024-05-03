/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/remote-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
