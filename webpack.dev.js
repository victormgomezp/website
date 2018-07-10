const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common,{
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});