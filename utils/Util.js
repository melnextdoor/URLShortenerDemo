function validateUrl(value) {
  var urlPattern = new RegExp('.*');

      return !!urlPattern.test(value);
}

module.exports = { validateUrl };