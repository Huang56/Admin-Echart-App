const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {  //代理配置
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/style/admin.scss'),
      ]
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".less$"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src")
      }
    }
  }
}
