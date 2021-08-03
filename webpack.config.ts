import * as path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import template from "html-webpack-template";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import { GraphQLCodegenWebpackPlugin } from 'graphql-codegen-webpack-plugin'
import { GraphqlSchemaCreator } from "./src/api/interop/GraphqlSchemaCreator";

const config = {
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

  devtool: "eval",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({})],
    alias: {
      fs: "memfs",
      [require.resolve("type-graphql/dist/helpers/loadResolversFromGlob.js")]:
        false,
    },
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
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template,
      title: "Client-side GraphQL",
      appMountId: "app",
    }),
    new GraphqlSchemaCreator(),
    new GraphQLCodegenWebpackPlugin({
      configPath: path.resolve(__dirname, './codegen.json'),
    }),
  ],
};

export default config;
