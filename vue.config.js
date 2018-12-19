module.exports = {
  devServer: {
    open: true,
    hot: true,
    proxy: {
      "/by": {
        target: "http://111.230.245.235:7778/", // 接口域名
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/by": ""
        }
      }
    }
  }
};
