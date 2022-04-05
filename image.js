const Image = require('@11ty/eleventy-img');

module.exports = function imageSyncShortcode(props) {

  const {
    alt,
    decoding,
    height,
    loading,
    url,
    sizes,
    width,
  } = props;

  const image_attributes = {
    alt,
    sizes,
    loading: loading ?? 'lazy',
    decoding: decoding ?? 'async',
  }

  const options = {
    widths: [320, 700],
    formats: ['avif', 'webp', 'jpeg'],
    outputDir: './dist/img/'
  }

  Image(url, options);

  let metadata = Image.statsByDimensionsSync(url, width, height, options);

  return Image.generateHTML(metadata, image_attributes);
}
