import hbs from 'handlebars';

const numberHandlebarsExtension = (opts: any) => {
  const locale = opts?.locale?.replace('_', '-') ?? 'en';

  // For real numeric values (all Intl.NumberFormatOptions available)
  hbs.registerHelper('nf', (value: number, hash: any) => {
    return new Intl.NumberFormat(
      locale,
      {
        minimumFractionDigits: hash?.hash?.decimals,
        maximumFractionDigits: hash?.hash?.decimals,
        ...hash?.hash
      }
    ).format(value);
  });

  // For real numeric values with 2 fix decimals (no options!)
  const nf2 = new Intl.NumberFormat(
    locale,
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
  hbs.registerHelper('nf2', (value: number) => {
    return nf2.format(value);
  });

  // For real numeric values with 3 fix decimals (no options!)
  const nf3 = new Intl.NumberFormat(
    locale,
    {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }
  );
  hbs.registerHelper('nf3', (value: number) => {
    return nf3.format(value);
  });

  // For natural numeric values without decimals  (no options!)
  const nfn = new Intl.NumberFormat(
    locale,
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );
  hbs.registerHelper('nfn', (value: number) => {
    return nfn.format(value);
  });

  // For currency denoting numeric values (all Intl.NumberFormatOptions available)
  hbs.registerHelper('nfc', (value: number, hash: any) => {
    const { cc } = hash?.hash ?? {};
    return new Intl.NumberFormat(
      locale,
      {
        style: 'currency',
        currency: cc ?? 'USD',
        ...hash?.hash,
      }
    ).format(value);
  });

  // For byte based numeric values  (no options!)
  const nfb = new Intl.NumberFormat(
    locale,
    {
      style: 'unit',
      unit: 'byte',
    }
  );
  hbs.registerHelper('nfb', (value: number) => {
    return nfb.format(value);
  });
};

export { numberHandlebarsExtension };
