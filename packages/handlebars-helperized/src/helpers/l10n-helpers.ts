const tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
const doubleStache = /\{\{\s*(.*?)\s*\}\}/g;

const localizationHandlebarsExtension = (hbs: any, opts: any) => {
  hbs.registerHelper('t', (key: string, hash = {} as any) => {
    const locale = opts.locale;
    let result = opts.texts[key] ?? key;
    result = (typeof result === 'object') ? result[locale] : result;
    if (!result) return `Missing translation for ${key}`;
    return result.replace(doubleStache, (i: any, match: any) => {
      console.log(hash.hash[match], hash.data.root[match]);
      return hash.hash[match] ?? hash.data.root[match] ?? `{{${match}}}`;
    }).replace(tripleStache, (i: any, match: any) => {
      // TODO: escaping
      console.log(hash.hash[match], hash.data.root[match]);
      return hash.hash[match] ?? hash.data.root[match] ?? `{{{${match}}}}`;
    });
  });
};

export { localizationHandlebarsExtension };
