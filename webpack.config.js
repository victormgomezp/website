var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');
const publicPath = '/wp-content/themes/the-fastest/';
const pathToTheme = path.resolve(__dirname, './'+publicPath);

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: pathToTheme+'/src/js/index.js',
    vendor: ['jquery','chart.js', 'bootstrap/js/dist/util', 'bootstrap/js/dist/collapse']
  },
  output: {
    filename: '[name].[chunkhash].js',
    //filename: '[name].js',
    path: pathToTheme+'/public/',
    publicPath: publicPath+'/public/',
    //sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles SASS to CSS
          }]
        })
      }, //css only files
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, //for images
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Collapse: "exports-loader?Navbar!bootstrap/js/dist/collapse"
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.js" }),
    new ManifestPlugin()
  ]
};