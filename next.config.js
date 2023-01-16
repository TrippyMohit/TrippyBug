/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true, //added
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [
      "secure.gravatar.com",
      "cms.trippybug.com",
      "minio-s3.dev.demo22.co",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "graph.facebook.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/community",
        destination: "/community/posts",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/profile",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/categories/trending",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
