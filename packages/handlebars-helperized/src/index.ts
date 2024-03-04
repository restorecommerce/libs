import juice from 'juice';
import defaults from 'lodash/defaults';
// the basic building block is the handlebars rendering engine
import hbs from 'handlebars';
import { localizationHandlebarsExtension } from './helpers/l10n-helpers';
import { numbroHandlebarsExtension } from './helpers/numbro-helpers';
import { momentHandlebarsExtension } from './helpers/moment-helpers';
import { customHandlebarsExtensions } from './helpers/custom-helpers';

const defaultOpts = {
  locale: 'en_US',
  texts: {}
};

// Initializes and configures a custom handlebars instance
const init = (options: object | undefined, customHelpersList: any) => {
  // default values if nothing given
  const opts = defaults(options, defaultOpts);
  // more functionality directly added via custom plugins from ./lib
  localizationHandlebarsExtension(hbs, opts); // localization
  numbroHandlebarsExtension(hbs, opts); // numbers & currencies
  momentHandlebarsExtension(hbs, opts); // dates, times & durations
  customHandlebarsExtensions(hbs, opts); // everything else

  // add custom helpers from rendering-srv
  customHelpersList?.forEach(async (customHelper) => {
    const filePath = customHelper;
    // require(filePath)(hbs, opts);

    // check for double default
    let fileImport = await import(filePath);
    if (fileImport?.default?.default) {
      (async () => (await import(filePath)).default.default(hbs, opts))().catch(err => {
        console.log(`Error importing file ${filePath}`, { code: err.code, message: err.message, stack: err.stack });
      });
    } else {
      (async () => (await import(filePath)).default(hbs, opts))().catch(err => {
        console.log(`Error importing file ${filePath}`, { code: err.code, message: err.message, stack: err.stack });
      });
    }
  });
  // extend rendering with layout functionality
  const handlebarsLayouts = require('handlebars-layouts');
  handlebarsLayouts.register(hbs);
  return hbs;
};

class Renderer {
  /**
  @param {String} template the template
  @param {String} layout the optional layout
  @param {String} style the style
  @param {Object} opts handlebars options
  @param {Array} customHelpersList contains a list of custom helpers (optional)
  */

  hbs: any;
  style: string | undefined;
  template: any;

  constructor(template: string, layout?: string | undefined, style?: string | undefined, opts?: object | undefined, customHelpersList?: any) {
    this.hbs = init(opts, customHelpersList);
    this.style = style;
    if (layout) {
      this.hbs.registerPartial('layout', layout);
    }
    this.template = this.hbs.compile(template);
  }

  /**
  @param {Object} context: required data for the placeholders
  @return {String} html
  */
  render(context: Object) {
    let html = this.template(context);

    if (this.style) {
      html = juice.inlineContent(html, this.style, {
        inlinePseudoElements: true,
        preserveImportant: true,
        preserveMediaQueries: true,
        preserveFontFaces: true,
        applyWidthAttributes: true,
        applyHeightAttributes: true,
        insertPreservedExtraCss: true,
        extraCss: this.style // to enable inlining of media queries
      });
    }

    return html;
  }
}

export { Renderer };
