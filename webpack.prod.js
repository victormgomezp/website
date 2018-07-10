var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common,{
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: false,
        output: {
          comments: false
        }
      }),
      new OptimizeCssAssetsPlugin(),
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
});