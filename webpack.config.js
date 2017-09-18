var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');
const publicPath = '/wp-content/themes/the-fastest/';
const pathToTheme = path.resolve(__dirname, './'+publicPath);

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: pathToTheme+'/src/js/index.js',
    blog: pathToTheme+'/src/js/blog.js',
    above: pathToTheme+'/src/js/above.js',
    vendor: ['jquery','chart.js', 'bootstrap/js/dist/util', 'bootstrap/js/dist/dropdown', 'bootstrap/js/dist/collapse', 'bootstrap/js/dist/carousel', 'bootstrap-slider']
  },
  output: {
    path: pathToTheme+'/public/',
    publicPath: publicPath+'/public/'
  },
  module: {
    rules: [
      //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader?sourceMap",
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
              sourceMap: true
            }
          }, {
            loader: 'sass-loader', // compiles SASS to CSS
            options: { sourceMap: true }
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
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!bootstrap/js/dist/button",
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip"
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.js" }),
    new ManifestPlugin()
  ]
};