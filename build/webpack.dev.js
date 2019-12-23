const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackBase = require('./webpack.base')

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'), // 已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, '../dist'), // 打包后的文件存放的地方
    filename: '[name]_[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port: 3333,
    hot: true,
    stats: 'errors-only'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackConfig
