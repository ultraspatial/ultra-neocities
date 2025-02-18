export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles", "styles");
    eleventyConfig.addPassthroughCopy("assets", "assets");
    eleventyConfig.addPassthroughCopy("writing", "writing");
    eleventyConfig.addPassthroughCopy("page", "page");
};