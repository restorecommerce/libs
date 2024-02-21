const tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
const doubleStache = /\{\{\s*(.*?)\s*\}\}/g;
let localizationHandlebarsExtension = (hbs, opts) => {
    hbs.registerHelper('t', (key, hash = {}) => {
        const locale = opts.locale;
        let result = opts.texts[key] || key;
        result = (typeof result === 'object') ? result[locale] : result;
        if (!result)
            return 'Missing translation for ' + key;
        const data = hash.data.root;
        return result.replace(doubleStache, (i, match) => {
            return data[match] ? data[match] : ('{{' + match + '}}');
        }).replace(tripleStache, (i, match) => {
            // TODO: escaping
            return data[match] ? data[match] : ('{{{' + match + '}}}');
        });
    });
};
module.exports = localizationHandlebarsExtension;
//# sourceMappingURL=l10n-helpers.js.map