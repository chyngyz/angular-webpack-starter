'use strict';

var DEV_SERVER_PORT = 3000;

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:' + DEV_SERVER_PORT + '/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    contentBase: './src',
    port: DEV_SERVER_PORT,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/, loader: 'ng-annotate?add=true&map=false!babel', exclude: '/node_modules/'
      },
      {
        test: /\.html$/, loader: 'raw', exclude: '/node_modules/'
      },
      {
        test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'
      },
      {
        test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap', exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/, loader: 'file'
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg)$/, loader: "url?limit=10000"
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,  loader: "file"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      moment: 'moment'
    }),
    new HtmlWebpackPlugin({
      ngApp: 'app',
      title: 'Angular + Webpack',
      mobile: true,
      template: './index.ejs',
      favicon: 'favicon.ico',
      baseHref: '/',
      inject: false,
      devServer: 'http://localhost:' + DEV_SERVER_PORT
    })
  ]
};
