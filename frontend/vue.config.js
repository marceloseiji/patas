const path = require("path");

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  outputDir: path.resolve(__dirname, "../backend/public"),
};
