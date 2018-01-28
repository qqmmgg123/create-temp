const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const fs = require('fs');

// webpack配置
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.development');
const compiler = webpack(webpackConfig);
const koaWebpack = require('koa-webpack');

const middleware = koaWebpack({
  compiler: compiler,
  hot: {
    log: console.log,
    action: 'reload'
  },
  dev: {
    stats: {colors: true}
  }
});

app.use(middleware);
app.use(serve('./build'));

app.listen(3000)

