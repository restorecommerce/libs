import juice from 'juice';
import defaults from 'lodash/defaults';

const defaultOpts = {
  locale: 'en_US',
  texts: {}
};

// Initializes and configures a custom handlebars instance
const init = (options: object | undefined, customHelpersList: any) => {
  // default values if nothing given
  const opts = defaults(options, defaultOpts);
  // the basic building block is the handlebars rendering engine
  const hbs = require('handlebars');
  // more functionality directly added via custom plugins from ./lib
  require('./helpers/l10n-helpers.js')(hbs, opts); // localization
  require('./helpers/numbro-helpers.js')(hbs, opts); // numbers & currencies
  require('./helpers/moment-helpers.js')(hbs, opts); // dates, times & durations
  require('./helpers/custom-helpers.js')(hbs, opts); // everything else

  // add custom helpers from rendering-srv
  if (customHelpersList) {
    for (let customHelper of customHelpersList) {
      const filePath = customHelper;
      require(filePath)(hbs, opts);
    }
  }
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

export default Renderer;
