import * as numbro from 'numbro';
// @ts-expect-error no types
import allLanguages from 'numbro/dist/languages.min.js';

Object.values(allLanguages).forEach((data) => {
  numbro.registerLanguage(data);
});

const numbroHandlebarsExtension = (hbs: any, opts: any) => {
  const locale = opts.locale.replace('_', '-');

  // For numeric values without decimals
  hbs.registerHelper('nfn', (value: any, hash: any) => {
    numbro.setLanguage(locale);
    return numbro(value).format({
      thousandSeparated: true,
      mantissa: 0
    });
  });

  // For currency based numeric values
  hbs.registerHelper('nfc', (value: any, hash: any) => {
    const lhash = hash.hash;
    numbro.setLanguage(locale);
    // Don't use formatCurrency as it does not allow control over the currency
    // symbol in confunction with locales

    let formatted = numbro(value).format({
      mantissa: 2,
      thousandSeparated: true
    });

    const cs = lhash.cs;
    if (cs === undefined) return formatted;

    if (lhash.csPos === 'postfix') {
      formatted += cs;
    } else {
      formatted = cs + formatted;
    }
    return formatted;
  });

  // For byte based numeric values
  hbs.registerHelper('nfb', (value: any, hash: any) => {
    numbro.setLanguage(locale);
    return numbro(value).format({
      output: 'byte',
      base: 'binary'
    });
  });
};

export { numbroHandlebarsExtension };
