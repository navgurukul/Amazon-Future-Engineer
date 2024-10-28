// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     basePath: "/amazon/makerspace-blr",
//     reactStrictMode: true,
//     swcMinify: true,
  
//     // Handle static assets for all public folders
//     async rewrites() {
//       return [
//         {
//           source: "/admin/:path*", // Admin assets
//           destination: "/amazon/makerspace-blr/admin/:path*",
//         },
//         {
//           source: "/assets/:path*", // Assets (e.g., videos)
//           destination: "/amazon/makerspace-blr/assets/:path*",
//         },
//         {
//           source: "/homepage/:path*", // Homepage-related assets
//           destination: "/amazon/makerspace-blr/homepage/:path*",
//         },
//         {
//           source: "/login/:path*", // Login assets
//           destination: "/amazon/makerspace-blr/login/:path*",
//         },
//         {
//           source: "/nanopage/:path*", // Nanopage assets
//           destination: "/amazon/makerspace-blr/nanopage/:path*",
//         },
//         {
//           source: "/symbols/:path*", // Symbols or icons
//           destination: "/amazon/makerspace-blr/symbols/:path*",
//         },
//         {
//           source: "/userDashboard/:path*", // User dashboard assets
//           destination: "/amazon/makerspace-blr/userDashboard/:path*",
//         },
//         {
//           source: "/:path*", // Root-level files (e.g., next.svg)
//           destination: "/amazon/makerspace-blr/:path*",
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/amazon/makerspace-blr",
  reactStrictMode: true,
  swcMinify: true,

  // Handle static assets for all public folders
  async rewrites() {
    return [
      {
        source: "/admin/:path*", // Admin assets
        destination: "/amazon/makerspace-blr/admin/:path*",
      },
      {
        source: "/assets/:path*", // Assets (e.g., videos)
        destination: "/amazon/makerspace-blr/assets/:path*",
      },
      {
        source: "/homepage/:path*", // Homepage-related assets
        destination: "/amazon/makerspace-blr/homepage/:path*",
      },
      {
        source: "/login/:path*", // Login assets
        destination: "/amazon/makerspace-blr/login/:path*",
      },
      {
        source: "/nanopage/:path*", // Nanopage assets
        destination: "/amazon/makerspace-blr/nanopage/:path*",
      },
      {
        source: "/symbols/:path*", // Symbols or icons
        destination: "/amazon/makerspace-blr/symbols/:path*",
      },
      {
        source: "/userDashboard/:path*", // User dashboard assets
        destination: "/amazon/makerspace-blr/userDashboard/:path*",
      },
      {
        source: "/:path*", // Root-level files (e.g., next.svg)
        destination: "/amazon/makerspace-blr/:path*",
      },
    ];
  },
};

export default nextConfig;