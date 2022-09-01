const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域，参考尚品汇P17
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target:'http://localhost:3000'
  //     }
  //   },
  // }
})
