const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html', favicon: './public/favicon.png' }),
    new CleanWebpackPlugin(['build']),
  ],
};
