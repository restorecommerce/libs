module.exports = function customHandlebarsExtensions(hbs, opts) {
  // increment a given numerical string by one
  hbs.registerHelper('increment', (value, hash) => {
    const toIncrement = parseInt(value, 10);
    if (isNaN(toIncrement)) return '0';
    return toIncrement + 1;
  });
};
