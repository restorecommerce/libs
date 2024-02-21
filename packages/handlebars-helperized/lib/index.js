"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const juice_1 = __importDefault(require("juice"));
const defaults_1 = __importDefault(require("lodash/defaults"));
const defaultOpts = {
    locale: 'en_US',
    texts: {}
};
// Initializes and configures a custom handlebars instance
const init = (options, customHelpersList) => {
    // default values if nothing given
    const opts = (0, defaults_1.default)(options, defaultOpts);
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
    constructor(template, layout, style, opts, customHelpersList) {
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
    render(context) {
        let html = this.template(context);
        if (this.style) {
            html = juice_1.default.inlineContent(html, this.style, {
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
exports.Renderer = Renderer;
//# sourceMappingURL=index.js.map