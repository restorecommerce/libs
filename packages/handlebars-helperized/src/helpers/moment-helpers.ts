import moment from 'moment-timezone';

let  momentHandlebarsExtension = (hbs: any, opts: any) => {
  // Output point in time relative to current point in time
  // for example: '1h ago'
  hbs.registerHelper('ago', (value: any, options: any) => {
    let v = value;
    if (options.isSeconds) {
      // the given property represents seconds since UNIX epoch, so we
      // multiply by 1000 to get the date in milliseconds since UNIX epoch
      v *= 1000;
    }
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(v).tz(tz).locale(opts.locale).fromNow();
  });

  // Date format short
  hbs.registerHelper('df', (value: any, options: any) => {
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(value).tz(tz).locale(opts.locale).format('L');
  });

  // Date format Long
  hbs.registerHelper('dfl', (value: any, options: any) => {
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(value).tz(tz).locale(opts.locale).format('LL');
  });

  // Time format
  hbs.registerHelper('tf', (value: any, options: any) => {
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(value).tz(tz).locale(opts.locale).format('LT');
  });

  // Date-Time format
  hbs.registerHelper('dtf', (value: any, options: any) => {
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(value).tz(tz).locale(opts.locale).format('LLL');
  });

  // Date-Time format with given format
  hbs.registerHelper('dff', (value: any, options: any) => {
    const format = options.hash.format || '';
    const tz = options.hash.timezone || moment.tz.guess();
    return moment(value).tz(tz).format(format);
  });

  // Duration formatting
  // Warning, localization should not be used with this:
  // While the pattern `D` yields the number of days
  // `dddd` would yield to a name of a weekday which is
  // of course not applicapble for a duration.
  //
  // A format can be a template string with this syntax:
  // '[it\'s] D [days and] h [hours]'
  hbs.registerHelper('duf', (value: any, options: any) => {
    const format = options.hash.format || '';
    const dur: any = moment.duration(value);
    // eslint-disable-next-line
    return moment(dur._data).format(format);
  });
};

export { momentHandlebarsExtension };
