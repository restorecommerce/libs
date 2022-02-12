declare class Renderer {
    /**
    @param {String} template the template
    @param {String} layout the optional layout
    @param {String} style the style
    @param {Object} opts handlebars options
    @param {Array} customHelpersList contains a list of custom helpers (optional)
    */
    hbs: any;
    style: string;
    template: any;
    constructor(template: string, layout: string, style: string, opts: object, customHelpersList: any);
    /**
    @param {Object} context: required data for the placeholders
    @return {String} html
    */
    render(context: Object): any;
}
export default Renderer;
