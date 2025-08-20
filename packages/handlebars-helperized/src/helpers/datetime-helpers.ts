import hbs from 'handlebars';

export type DateTimeHandlebarOptions = {
  locale?: string,
}

export type DateTimeFormatHash = {
  hash?: {
    timezone?: string,
  } & Intl.DateTimeFormatOptions
};

class AgoRangeFormat {
  constructor(
    public readonly name: Intl.RelativeTimeFormatUnit,
    public readonly factor: number,
    public readonly range: number,
  ) {}
};

const AgoRangeFormats: AgoRangeFormat[] = [
  new AgoRangeFormat('second', 1, 1.5),
  new AgoRangeFormat('seconds', 1, 60),
  new AgoRangeFormat('minute', 60, 1.5),
  new AgoRangeFormat('minutes', 60, 60),
  new AgoRangeFormat('hour', 60*60, 1.5),
  new AgoRangeFormat('hours', 60*60, 24),
  new AgoRangeFormat('day', 60*60*24, 1.5),
  new AgoRangeFormat('days', 60*60*24, 7),
  new AgoRangeFormat('week', 60*60*24*7, 1.5),
  new AgoRangeFormat('weeks', 60*60*24*7, 4),
  new AgoRangeFormat('month', 60*60*24*30, 1.5),
  new AgoRangeFormat('months', 60*60*24*30, 12),
  new AgoRangeFormat('year', 60*60*24*30*12, 1.5),
  new AgoRangeFormat('years', 60*60*24*30*12, Number.MAX_VALUE),
];

const datetimeHandlebarsExtensions = (opts?: DateTimeHandlebarOptions) => {
  const locale = opts?.locale?.replace('_', '-') ?? 'en-US';
  

  /**
   * Output point in time relative to current point in time
   * for example: '1h ago'
   * 
   * in hash:
   * @param inSeconds (boolean) set true if 'value' and 'since' are expected seconds
   * @param since (number | string | Date) ago since (default=now)
   */
  hbs.registerHelper('ago', (
    value: number | string | Date,
    options?: {
      hash?: {
        inSeconds?: boolean,
        since?: number | string | Date,
      }
    },
  ) => {
    const {
      inSeconds,
    } = options?.hash ?? {};
    
    const since = options?.hash?.since ? new Date(options?.hash?.since).getTime() : Date.now();
    const then = value ? new Date(value).getTime() : Date.now();
    const delta = (since - then) * (inSeconds ? 1 : 0.001);
    const arf = AgoRangeFormats.find( // first match wins
      (arf) => Math.abs(delta / arf.factor) < arf.range
    );
    value = Math.floor(delta / (arf.factor ?? 1))
    
    return new Intl.RelativeTimeFormat(
      locale,
      {
        numeric: 'always',
        ...options?.hash
      }
    ).format(value, arf?.name ?? 'seconds');
  });

  // Date format basic (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('df', (value: number | Date, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: options?.hash?.timezone,
        ...options?.hash,
      }
    ).format(new Date(value ?? null));
  });

  // Date format Short (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('dfs', (value: number | Date, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        dateStyle: 'short',
        timeZone: options?.hash?.timezone, // resolves if undefined
        ...options?.hash,
      }
    ).format(value);
  });

  // Date format Long (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('dfl', (value: number | Date, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        dateStyle: 'long',
        timeZone: options?.hash?.timezone, // resolves if undefined
        ...options?.hash,
      }
    ).format(value);
  });

  // Time format (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('tf', (value: any, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        timeStyle: 'short',
        timeZone: options?.hash?.timezone, // resolves if undefined
        ...options?.hash,
      }
    ).format(value);
  });

  // Time format Long (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('tfl', (value: any, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        timeStyle: 'long',
        timeZone: options?.hash?.timezone, // resolves if undefined
        ...options?.hash,
      }
    ).format(value);
  });

  // Date-Time format (all Intl.DateTimeFormatOptions avaliable)
  hbs.registerHelper('dtf', (value: any, options: DateTimeFormatHash) => {
    return new Intl.DateTimeFormat(
      locale,
      {
        dateStyle: 'long',
        timeStyle: 'short',
        timeZone: options?.hash?.timezone, // resolves if undefined
        ...options?.hash,
      }
    ).format(value);
  });

  // Duration formatting
  // TODO waiting for Node 2025
  hbs.registerHelper('duf', (value: any, options: any) => {
    // return new Intl.DurationFormat(locale, options.hash).format(value)
    return 'Not yet supported';
  });
};

export { datetimeHandlebarsExtensions };
