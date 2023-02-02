const Card = require('./src/_includes/components/Card');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md').sort((a, b) => {
      if (a.data.title > b.data.title) return -1;
      else if (a.data.title < b.data.title) return 1;
      else return 0;
    });
  })

  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Rome",
    }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
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