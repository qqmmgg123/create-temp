const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

config.devtool = 'eval';

config.entry = {
  index: [
    path.join(process.cwd(), './src/index.js'),
    hotMiddlewareScript
  ]
}

config.output.filename = '[name].js'

config.module.rules = [...config.module.rules, {
  test: /\.scss$/,
  use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
    fallback: 'style-loader',
    //resolve-url-loader may be chained before sass-loader if necessary
    use: ['css-loader', 'postcss-loader', 'sass-loader']
  }))
}, {
  test: /\.css$/,
  use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ 
    fallback: 'style-loader', 
    use: 'css-loader'
  }))
}, {
  test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
  loader : 'url-loader?prefix=font/&limit=10000'
}, {
  test: /\.(jpe?g|png|gif|svg)$/i, 
  loader: "file-loader?name=images/[name].[ext]"
}];

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: 'http://127.0.0.1:3000' }),
  new ExtractTextPlugin('[name].css')
];

module.exports = config;
