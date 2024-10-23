
const customHandlebarsExtensions = (hbs: any, opts: any) => {
  // increment a given numerical string by one
  hbs.registerHelper('increment', (value: any, hash: any) => {
    const toIncrement = parseInt(value, 10);
    if (isNaN(toIncrement)) return '0';
    return toIncrement + 1;
  });
};

export { customHandlebarsExtensions };
