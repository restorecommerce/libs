const numberHandlebarsExtension = (hbs: any, opts: any) => {
  const locale = opts.locale.replace('_', '-');

  // For numeric values without decimals
  hbs.registerHelper('nfn', (value: any, hash: any) => {
    return new Intl.NumberFormat(locale).format(value);
  });

  // For currency denoting numeric values
  hbs.registerHelper('nfc', (value: any, hash: any) => {
    const lhash = hash.hash;
    const cc = lhash.cc;
    return new Intl.NumberFormat(locale, { style: 'currency', currency: cc }).format(value);
  });

  // For byte based numeric values
  hbs.registerHelper('nfb', (value: any, hash: any) => {
    return new Intl.NumberFormat(locale, { style: 'unit', unit: 'byte' }).format(value);
  });
};

export { numberHandlebarsExtension };
