import hbs from 'handlebars';

const listHandlebarsExtensions = (opts: any) => {
  hbs.registerHelper('join', (value: any, hash: any) => {
    const { delimiter, filter } = hash?.hash ?? {};
    if (Array.isArray(value)) {
      return (filter ? value.filter(Boolean) : value).join(delimiter);
    }
    return value;
  });
};

// TODO: sum, mean, prod, filter...

export { listHandlebarsExtensions };