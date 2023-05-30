const nextConfig = {
  env: {
    API_URL: "https://multikartapi.onrender.com/graphql",
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
};
// VixmQbsGemPYMV2U0ONjZz3zrIpZuvFiI1QDpkc2K18