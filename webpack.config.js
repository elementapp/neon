const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.jsx']),
    new HtmlWebpackPlugin({title: 'test'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    modules: [
      'node_modules',
      path.resolve(__dirname, "client")
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

