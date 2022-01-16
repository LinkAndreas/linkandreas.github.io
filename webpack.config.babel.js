import { resolve, join } from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CnameWebpackPlugin from "cname-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export const entry = resolve(__dirname, "src", "index.js");

export const output = {
  filename: "main.js",
  path: resolve(__dirname, "dist"),
};

export const devServer = {
  static: join(__dirname, "dist"),
  compress: true,
  port: 3000,
  open: true
};

export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      loader: "url-loader",
      options: { limit: 10000 },
    },
    {
      test: /\.md$/,
      use: "raw-loader",
    },
  ],
};

export const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "src", "index.html"),
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: "assets/articles/09_03_2021/images" }],
  }),
  new CnameWebpackPlugin({
    domain: "www.linkandreas.de",
  }),
];
