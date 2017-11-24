var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './Src/app.js',
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
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  }
}