module.exports = options => {
  return {
    entry: "./50_cent/public/js/app.js",
    output: {
      filename: "bundle.js"
    },
    mode: "development",
    devServer: {
      disableHostCheck: true
    }
  };
};
