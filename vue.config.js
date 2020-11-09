module.exports = {
  publicPath: "/coursetable-vue/",
  outputDir: "docs",
  chainWebpack: (config) => {
    config.externals({
      moment: "moment",
    });
  },
};
