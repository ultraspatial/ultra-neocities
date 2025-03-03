export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles", "styles");
    
  // Create a collection for blog posts
  eleventyConfig.addCollection("writing", function (collection) {
    return collection.getFilteredByGlob("writing/*.md").reverse(); // Reverse to show newest first
  });
};
