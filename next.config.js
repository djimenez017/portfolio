// /** @type {import('next').NextConfig} */
// const nextConfig = {  reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias.canvas = false;
//     return config;
//   },
//   images: {
//     domains: ["cdn.hashnode.com"],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
};
