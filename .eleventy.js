require('dotenv').config();
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (config) {
  config.addFilter('console', function (value) {
    return console.log(value);
  });
  config.addFilter('slug', function (str) {
    return str
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  });

  config.addPlugin(svgContents);


  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
