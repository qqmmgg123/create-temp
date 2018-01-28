const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV

const env = {
  production: typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production',
  development: typeof NODE_ENV === 'undefined' || NODE_ENV === 'development'
};

Object.assign(env, {
  build: env.production
});

let src = './src';
let out  = './build/dist';

let buildList = [
  'index'
];

let entryOpts = {};

buildList.forEach(function(item) {
  entryOpts[item] = `${src}/${item}.js`;
});

module.exports = {
  //入口文件输出配置
  entry: entryOpts,

  output: {
    path: path.join(process.cwd(), out),
    publicPath: '/dist/'
  },

  module: {
    //加载器配置
    rules: [
      { 
        test: /\.js[x]?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, { 
        test: /\.es6$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  //其它解决方案配置
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(process.cwd(), src)
    }
  },

  externals: {
    'moment': 'moment',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'immutable': 'Immutable',
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    })
  ],

  target: 'web'
};
