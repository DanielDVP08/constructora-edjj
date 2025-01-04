/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/jjconstructorastorage/**",
      },
    ],
  },
};

// module.exports = {
//     images: {
//         // domains: ['res.cloudinary.com'],
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'res.cloudinary.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }

export default nextConfig;
