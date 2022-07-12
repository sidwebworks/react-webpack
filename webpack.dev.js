const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || '3000',
    static: path.resolve(__dirname, 'public'),
    compress: true,
    hot: true,
    liveReload: true,
  },
});
