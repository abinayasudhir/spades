const isDev = process.env.NODE_ENV !== "production";
const config = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/build`,
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: "elm-webpack-loader",
            options: {
              forceWatch: isDev,
              debug: isDev
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
