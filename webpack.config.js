var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');
const publicPath = '/wp-content/themes/the-fastest';
const pathToTheme = path.resolve(__dirname, './'+publicPath);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: pathToTheme+'/src/js/index.js',
    blog: pathToTheme+'/src/js/blog.js',
    above: pathToTheme+'/src/js/above.js',
    landing: pathToTheme+'/src/js/landing.js'
  },
  output: {
    path: pathToTheme+'/public/',
    publicPath: publicPath+'/public/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)$/, use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
              loader: "css-loader" // translates CSS into CommonJS
          }, 
          {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }, //css only files
        { 
          test: /\.(png|svg|jpg|gif)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' } 
          }
        }, //for images
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            },{
                loader: 'expose-loader',
                options: '$'
            }]
        },
        { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
      
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    }
  },
  plugins: [
    new ManifestPlugin({
      publicPath: ''
    })
  ]
};