const image = require("./image");

module.exports = function (config) {
  config.addNunjucksShortcode("image", image);
  return {
    dir: {
      output: "dist",
    }
  }
}
