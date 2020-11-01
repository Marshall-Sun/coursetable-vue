module.exports = {
  publicPath: "/coursetable-vue/",
  outputDir: "docs",
  chainWebpack: config => {
    config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
};
