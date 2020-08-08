// vue.config.js
module.exports = {
  // options...
  devServer: {
    proxy: {
      '/chatbotserver': {
        target: 'https://sleepy-headland-26569.herokuapp.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/chatbotserver': ''
        }
      }
    }
  }
}
