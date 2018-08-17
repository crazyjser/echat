const path = require('path')
module.exports = {
  baseUrl: '/echat/',
  outputDir: 'echat',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
  }
} 