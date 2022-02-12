"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
let momentHandlebarsExtension = (hbs, opts) => {
    // Output point in time relative to current point in time
    // for example: '1h ago'
    hbs.registerHelper('ago', (value, options) => {
        let v = value;
        if (options.isSeconds) {
            // the given property represents seconds since UNIX epoch, so we
            // multiply by 1000 to get the date in milliseconds since UNIX epoch
            v *= 1000;
        }
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return moment_timezone_1.default.tz(v, tz).locale(opts.locale).fromNow();
    });
    // Date format short
    hbs.registerHelper('df', (value, options) => {
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return moment_timezone_1.default.tz(value, tz).locale(opts.locale).format('L');
    });
    // Date format Long
    hbs.registerHelper('dfl', (value, options) => {
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return moment_timezone_1.default.tz(value, tz).locale(opts.locale).format('LL');
    });
    // Time format
    hbs.registerHelper('tf', (value, options) => {
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return moment_timezone_1.default.tz(value, tz).locale(opts.locale).format('LT');
    });
    // Date-Time format
    hbs.registerHelper('dtf', (value, options) => {
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return moment_timezone_1.default.tz(value, tz).locale(opts.locale).format('LLL');
    });
    // Date-Time format with given format
    hbs.registerHelper('dff', (value, options) => {
        const format = options.hash.format || '';
        const tz = options.hash.timezone || moment_timezone_1.default.tz.guess();
        return (0, moment_timezone_1.default)(value).tz(tz).format(format);
    });
    // Duration formatting
    // Warning, localization should not be used with this:
    // While the pattern `D` yields the number of days
    // `dddd` would yield to a name of a weekday which is
    // of course not applicapble for a duration.
    //
    // A format can be a template string with this syntax:
    // '[it\'s] D [days and] h [hours]'
    hbs.registerHelper('duf', (value, options) => {
        const format = options.hash.format || '';
        const dur = moment_timezone_1.default.duration(value);
        // eslint-disable-next-line
        return (0, moment_timezone_1.default)(dur._data).format(format);
    });
};
module.exports = momentHandlebarsExtension;
