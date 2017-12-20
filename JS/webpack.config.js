var path = require('path');
require('babel-polyfill');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './Src/app.js'],
  output: {
    path: path.resolve(__dirname, 'Dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-ie']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      cache: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}