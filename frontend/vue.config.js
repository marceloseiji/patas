const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/public"),
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
      },
    },
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
};
