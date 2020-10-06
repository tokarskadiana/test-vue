require("dotenv").config({ path: __dirname + "/.env" });

const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const { mode, CONNECTOR_URL } = env;

  return {
    mode: mode,
    entry: "./src/main.ts",
    output: {
      filename:
        mode === "development" ? "[name].js" : "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    devtool: mode === "development" ? "inline-source-map" : "source-map",
    devServer:
      mode === "development"
        ? {
            contentBase: "./dist",
            hot: true,
            port: 8081,
            historyApiFallback: true,
          }
        : undefined,
    optimization:
      mode === "production"
        ? {
            moduleIds: "hashed",
          }
        : undefined,
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/,
          use: [
            mode === "development"
              ? "vue-style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
          // if we end up have bigger images and need to not inline them, refer to https://vue-svg-loader.js.org/faq.html#how-to-use-both-inline-and-external-svgs
          options: {
            svgo: {
              plugins: [{ removeDimensions: true, removeViewBox: false }],
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Test",
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "style.[contenthash].css",
      }),
      new webpack.DefinePlugin({
        CONNECTOR_URL: JSON.stringify(CONNECTOR_URL),
        ENV: JSON.stringify(mode),
        DEV_API_KEY: JSON.stringify(process.env.DEV_API_KEY),
      }),
    ],
  };
};
