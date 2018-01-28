const path = require('path')
const webpack = require('webpack');
const config = require('./webpack.config.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const crypto = require('crypto');

const current_date = (new Date()).valueOf().toString();
const random = Math.random().toString();
const hash = crypto.createHash('sha1').update(current_date + random).digest('hex');

console.log(hash)

config.bail = true;
config.profile = false;
config.devtool = '#source-map';

config.entry = {
  index: [
    path.join(process.cwd(), './src/index.js')
  ],
  vendor: [
    'redux',
    'react-redux',
    'react-router-dom'
  ]
}

config.output.filename = '[name].js'

config.module.rules = config.module.rules.concat([
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      //resolve-url-loader may be chained before sass-loader if necessary
      use: ['css-loader', 'postcss-loader', 'sass-loader']
    })
  }, {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({ 
      fallback: 'style-loader', 
      use: ['css-loader', 'postcss-loader']
    })
  }, {
    test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
    loader : 'url-loader?prefix=font/&limit=10000'
  }, {
    test: /\.(jpe?g|png|gif|svg)$/i, 
    loader: "file-loader?name=images/[name].[ext]"
  }
]);

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].css'),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.CommonsChunkPlugin({name: 'vendor',  filename: 'vendor.js'}),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    beautify: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告
      warnings: false,
      screw_ie8: true,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
  }),
  //new webpack.DllPlugin({
    //path: path.join(process.cwd(), '.', '[name]-manifest.json'),
    //libraryTarget: 'commonjs2',
    //name: '[name]_library'
  //}),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new HtmlWebpackPlugin({
    title: 'camera_sell',
    hash: hash,
    inject: false,
    filename: path.join(process.cwd(), './build/index.html'),
    template: path.join(process.cwd(), './template/index.html')
  })
]);

module.exports = config;
