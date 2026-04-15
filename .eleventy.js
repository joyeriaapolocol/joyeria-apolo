module.exports = function(eleventyConfig) {

  // COPIAR CSS
  eleventyConfig.addPassthroughCopy("css");

  // COPIAR IMÁGENES
  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
