import hbs from 'handlebars';
import moment from 'moment-timezone';

const  momentHandlebarsExtension = (opts: any) => {
  // Date-Time format with given format
  hbs.registerHelper('dff', (value: any, options: any) => {
    const format = options.hash.format ?? '';
    const tz = options.hash.timezone ?? moment.tz.guess();
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
    const format = options.hash.format ?? '';
    const dur: any = moment.duration(value);
     
    return moment(dur._data).format(format);
  });
};

export { momentHandlebarsExtension };
