const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const stylus = require('./webpack/stylus');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATHS.source + '/pages/index/index.js'
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/pages/index/index.pug'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
       })
    ],
  },
    pug(),
    images(),
    fonts()
]);

module.exports = function(env) {
  if (env ===  'prodaction') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ])
  }
  if (env === 'development'){
    return merge([
      common,
      devserver(),
      stylus(),
      css()
    ])
  }
};