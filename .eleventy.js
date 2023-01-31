const Card = require('./src/_includes/components/Card');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");

  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addShortcode("Card", Card);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Rome",
    }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("randomItem", (arr) => {
      arr.sort(() => {
        return 0.5 - Math.random();
      });
      return arr.slice(0, 1);
    });
    return {
      dir: {
        input: "src",
        includes: '_includes',
        output: "public",
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk'
    };
  };