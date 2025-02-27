const tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
const doubleStache = /\{\{\s*(.*?)\s*\}\}/g;

const localizationHandlebarsExtension = (hbs: any, opts: any) => {
  hbs.registerHelper('t', (key: string, hash = {} as any) => {
    const locale = opts.locale;
    let result = opts.texts[key] ?? key;
    result = (typeof result === 'object') ? result[locale] : result;
    if (!result) return `Missing translation for ${key}`;
    return result.replace(doubleStache, (i: any, match: any) => {
      return hash.hash[match] ?? `{{${match}}}`;
    }).replace(tripleStache, (i: any, match: any) => {
      // TODO: escaping
      return hash.hash[match] ?? `{{{${match}}}}`;
    });
  });
};

export { localizationHandlebarsExtension };
