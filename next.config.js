module.exports = {
  exportTrailingSlash: true
};

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);
