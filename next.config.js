/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // ANTrepreneur Pitch 1 (QR)
        source: "/links/pitch-QM53c",
        destination: "https://twitter.com/jesuisapp",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
