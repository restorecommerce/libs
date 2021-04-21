module.exports = function loudHandlebarsExtensions(hbs, opts) {
  hbs.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
  });
};
