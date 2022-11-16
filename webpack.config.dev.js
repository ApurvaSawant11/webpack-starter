const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  mode: "development",
});
