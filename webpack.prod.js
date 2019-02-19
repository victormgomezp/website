const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common,{
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[chunkhash].css",
      chunkFilename: "[name].[chunkhash].css"
    }),
  ]
});