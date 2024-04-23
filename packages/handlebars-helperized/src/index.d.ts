// TODO Fix when exported with types or as ESM
import numbro from 'numbro/numbro';

declare module 'handlebars-layouts' {
  export = {} as any;
};

declare module 'numbro' {
  export = numbro;
};

declare module 'numbro/dist/languages.min.js';
