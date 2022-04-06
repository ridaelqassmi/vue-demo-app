const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/vue-demo-app/',
  devServer: {
    // This will forward any request that does not match a static file to localhost:8080
    proxy: 'http://localhost:8080'
}
   
})
