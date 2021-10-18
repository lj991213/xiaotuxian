const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 使用vuecli的style-resoures-loader插件来完成自动注入到每个less文件或者vue组件中style标签中。
        // 拼接使用绝对路径
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
}
