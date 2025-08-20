import hbs from 'handlebars';

const customHandlebarsExtensions = (opts: any) => {
  // increment a given numerical string by one
  hbs.registerHelper('increment', (value: any, hash: any) => {
    const toIncrement = parseInt(value, 10);
    if (isNaN(toIncrement)) return '0';
    return toIncrement + 1;
  });

  /**
   * Throws back an error to the caller of the render request!
   * eg:
   * {{#if some.data.expected.to.exist }}
   *  <p>{{ some.data.expected.to.exist }}</p>
   * {{else}}
   *  {{throw 'Important data missing, abort rendering!'}}
   * {{/if}}
   */
  hbs.registerHelper('throw', (value: any, hash: any) => {
    throw new class extends Error {
      public details = hash;
    } (value);
  });
};

export { customHandlebarsExtensions };
