import juice from 'juice';
// the basic building block is the handlebars rendering engine
import hbs from 'handlebars';
import { localizationHandlebarsExtension } from './helpers/l10n-helpers.js';
import { numberHandlebarsExtension } from './helpers/number-helpers.js';
import { datetimeHandlebarsExtensions } from './helpers/datetime-helpers.js';
import { momentHandlebarsExtension } from './helpers/moment-helpers.js'; // deprecated!
import { listHandlebarsExtensions } from './helpers/list-helpers.js';
import { customHandlebarsExtensions } from './helpers/custom-helpers.js';
// @ts-expect-error no types
import handlebarsLayouts from 'handlebars-layouts';

const defaultOpts = {
  locale: 'en-US',
  texts: {}
};

// Initializes and configures a custom handlebars instance
const init = async (options: object | undefined, customHelpersList: any): Promise<(typeof hbs)> => {
  // default values if nothing given
  const opts = {
    ...defaultOpts,
    ...options, 
  };
  // more functionality directly added via custom plugins from ./lib
  localizationHandlebarsExtension(opts); // localization
  numberHandlebarsExtension(opts); // numbers & currencies
  momentHandlebarsExtension(opts); // dates, times & durations  // deprecated!
  datetimeHandlebarsExtensions(opts); // dates, times & durations
  listHandlebarsExtensions(opts); // utillities for lists
  customHandlebarsExtensions(opts); // everything else

  // add custom helpers from rendering-srv
  for (const customHelper of (customHelpersList ?? [])) {
    const filePath = customHelper;
    // require(filePath)(hbs, opts);

    // check for double default
    try {
      const fileImport = await import(filePath);
      if (fileImport?.default?.default) {
        await fileImport.default.default(hbs, opts);
      }
      else {
        await fileImport.default(hbs, opts);
      }
    }
    catch (err: any) {
      const { code, message, stack } = err;
      console.log(`Error importing file ${filePath}`, { code, message, stack });
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
  async render(context: object): Promise<string> {
    await this.waitLoad();
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
