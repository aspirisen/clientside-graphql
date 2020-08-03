import * as path from "path";
import * as webpack from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import template from "html-webpack-template";

const config: webpack.Configuration = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: ["./bootstrap"],

  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
  },

  devtool: "#eval",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({})],
  },

  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "./public"),
    historyApiFallback: true,
    port: 4000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template,
      title: "Client-side GraphQL",
      appMountId: "app",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

export default config;
