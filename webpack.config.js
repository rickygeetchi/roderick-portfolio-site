const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [ 
        {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    //    {
    //         test: /\.(png|jp(e*)g|svg|gif)$/,
    //         use: ['file-loader'],
    //       }, 
          {
            test: /\.css$/i,
            // exclude: path.resolve(__dirname, 'node_modules'),
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          }
   
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
}
};