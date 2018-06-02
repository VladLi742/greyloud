const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.js$/,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            beautify: false,
            comments: false,
          },
        },
      }),
    ],
  },
});
