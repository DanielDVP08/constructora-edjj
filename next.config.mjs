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
