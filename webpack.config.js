module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'https://multikart-graphql-dun.vercel.app/server.js',
          secure: false,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        // Other loaders...
      ],
    },
  };