import juice from 'juice';
import { defaults } from 'lodash-es';
// the basic building block is the handlebars rendering engine
import hbs from 'handlebars';
import { localizationHandlebarsExtension } from './helpers/l10n-helpers.js';
import { numberHandlebarsExtension } from './helpers/number-helpers.js';
import { momentHandlebarsExtension } from './helpers/moment-helpers.js';
import { customHandlebarsExtensions } from './helpers/custom-helpers.js';
// @ts-expect-error no types
import handlebarsLayouts from 'handlebars-layouts';

const defaultOpts = {
  locale: 'en_US',
  texts: {}
};

// Initializes and configures a custom handlebars instance
const init = async (options: object | undefined, customHelpersList: any): Promise<(typeof hbs)> => {
  // default values if nothing given
  const opts = defaults(options, defaultOpts);
  // more functionality directly added via custom plugins from ./lib
  localizationHandlebarsExtension(hbs, opts); // localization
  numberHandlebarsExtension(hbs, opts); // numbers & currencies
  momentHandlebarsExtension(hbs, opts); // dates, times & durations
  customHandlebarsExtensions(hbs, opts); // everything else

  // add custom helpers from rendering-srv
  for (const customHelper of (customHelpersList || [])) {
    const filePath = customHelper;
    // require(filePath)(hbs, opts);

    // check for double default
    const fileImport = await import(filePath);
    if (fileImport?.default?.default) {
      await new Promise((r) => (async () => fileImport.default.default(hbs, opts))().catch(err => {
        console.log(`Error importing file ${filePath}`, { code: err.code, message: err.message, stack: err.stack });
      }).then(r));
    } else {
      await new Promise((r) => (async () => fileImport.default(hbs, opts))().catch(err => {
        console.log(`Error importing file ${filePath}`, { code: err.code, message: err.message, stack: err.stack });
      }).then(r));
    }
  }
  // extend rendering with layout functionality
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

  protected loadingHbs: Promise<any>;
  protected template: HandlebarsTemplateDelegate<any>;

  constructor(
    template: string,
    layout?: string,
    protected style?: string,
    opts?: object,
    customHelpersList?: any
  ) {
    this.loadingHbs = init(
      opts, customHelpersList
    ).then((hbs) => {
      if (layout) {
        hbs.registerPartial('layout', layout);
      }
      if (template) {
        this.template = hbs.compile(template);
      }
      else {
        throw new Error('Template not provided!');
      }
    });
  }

  /**
   * Wait for the renderer to initialize
   */
  async waitLoad(): Promise<void> {
    return await this.loadingHbs;
  }

  /**
  @param {Object} context: required data for the placeholders
  @return {String} html
  */
  render(context: object): string {
    if (!this.template) {
      throw new Error('Template not provided!');
    }
    let html = this.template(context);

    if (html && this.style) {
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
