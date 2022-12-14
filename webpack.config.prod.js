const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
});
