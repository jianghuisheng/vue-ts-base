const path = require('path')
const resolve = function(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')) /* 别名配置 */
    config.optimization.runtimeChunk('single')
  },
  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    host: 'localhost',
    port: '10000',
    hot: true,
    /* 自动打开浏览器 */
    open: true,
    overlay: {
      warning: false,
      error: true,
    },
    /* 跨域代理 */
    // proxy: {
    //   '/item': {
    //     /* 目标代理服务器地址 */
    //     target: 'http://localhost:80', //localhost:80/api/item/category/list
    //     // target: "http://192.168.1.102:8888", //
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/item': '/api/item',
    //     },
    //   },
    //   '/upfile': {
    //     /* 目标代理服务器地址 */
    //     target: 'http://localhost:80', //localhost:80/api/item/category/list
    //     // target: "http://192.168.1.102:8888", //
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/upfile': '/api/upfile',
    //     },
    //   },
    //   '/upload': {
    //     target: 'http://localhost:8082', //localhost:80/api/item/category/list
    //     // target: "http://192.168.1.102:8888", //
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/upload': '/upload',
    //     },
    //   },
    // },
  },
}
