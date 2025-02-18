export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles", "styles");
    eleventyConfig.addPassthroughCopy("assets", "assets");
};