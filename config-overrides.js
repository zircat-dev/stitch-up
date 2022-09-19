const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["@features"]: path.resolve(__dirname, "./src/features"),
    ["@components"]: path.resolve(__dirname, "./src/components"),
    ["@common"]: path.resolve(__dirname, "./src/common"),
    ["@hooks"]: path.resolve(__dirname, "./src/hooks"),
    ["@utils"]: path.resolve(__dirname, "./src/utils"),
  })
);
