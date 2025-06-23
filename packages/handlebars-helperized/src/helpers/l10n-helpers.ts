const tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
const doubleStache = /\{\{\s*(.*?)\s*\}\}/g;

const localizationHandlebarsExtension = (hbs: any, opts: any) => {
  hbs.registerHelper('t', (key: string, hash?: any) => {
    const locale = opts.locale;
    let result = opts.texts[key] ?? key;
    result = (typeof result === 'object') ? result[locale] : result;
    hash = hash?.hash ?? hash;
    if (!result) return `Missing translation for ${key}`;
    return result.replace(doubleStache, (i: any, match: any) => {
      return hash?.[match]?.value ?? hash?.[match]?.default ?? hash?.[match] ?? `{{${match}}}`;
    }).replace(tripleStache, (i: any, match: any) => {
      // TODO: escaping
      return hash?.[match]?.value ?? hash?.[match]?.default ?? hash?.[match] ?? `{{{${match}}}}`;
    });
  });
};

export { localizationHandlebarsExtension };
