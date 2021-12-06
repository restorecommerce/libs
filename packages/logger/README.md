# @restorecommerce/logger

[![Version][version]](https://www.npmjs.com/package/@restorecommerce/logger)[![Build Status][build]](https://travis-ci.org/restorecommerce/logger?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/logger)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/logger?branch=master)

[version]: http://img.shields.io/npm/v/@restorecommerce/logger.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/logger/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/logger.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/logger/master.svg?style=flat-square

Opinionated wrapper and configurator for the
[winston](https://github.com/winstonjs/winston) logging toolkit.

The following transports are supported:

- [Elasticsearch transport](https://github.com/vanthome/winston-elasticsearch) using a local transformer function and ES data streams.
- [index template](elasticsearch-index-template.json) which is applied automatically.
- Console (Winston built-in transport).
- File (Winston built-in transport).

These transports can be added and configured with a corresponding property in
the options hash:

```json
{
  "loggerName": "somelogger",        // Optional name
  "sourcePointer": true,             // Whether the source file and line where the log statement was issued should be logged [default: `false`]
  "esTransformer": function()  //
  "console": {
    "handleExceptions": false,
    "level": "silly",
    "colorize": true,
    "prettyPrint": true
  },
  "file": {
    ...
  },
  "elasticsearch": {
    ...
  }
}
```

The logger returns a Winston logger instance which has methods that correspond
to the following levels:

- silly
- verbose
- debug
- info
- warn
- error
- log (generic)

In addition there is a generic `log()` function.

## Features

- Source pointer logging -- show the source code file and line where the log statement was issued.
- Implicit Request ID logging based on [cls-rtracer](https://github.com/puzpuzpuz/cls-rtracer).
- Logger `AsyncLocalStorage` logger context to log implicit context information.
- Supports local transformer function for the `fields`.

An example how to use the `AsyncLocalStorage` logger context can be found [here](test/test.js#L4-L11).

### Console logger

A custom format is defined that outputs the rid (request-id) if it is set
and the contents of the `AsyncLocalStorage` context.

### Elastichsearch logger

The following changes and transformations are applied to log messages:

- Adds a `@timestamp` field with the current date/ time
- Adds a `host` property with the current host name
- Adds a `rid` request-id
- Grabs all key/ values from the the current `AsyncLocalStorage` and merges them to the logged message

This module also comes with a suitable
[index pattern](kibana/Logs-Index-Pattern.ndjson) that can be imported in Kibana.

## Usage

### Instantiation

```js
let logger = createLogger(opts);
```

### Logging

Logging in general:

```js
logger.<level>('Textual message');

// or

logger.log(<level>, 'Textual message');
```

The parameters for the log statements are built like this:

```js
logger.info('Textual message');

// or

logger.info({ key: 'value' });

// or

logger.info('Textual message', { key: 'value' });
```

No other variants are supported.

See [test.ts](test/test.ts) and the
[Winston documentation](https://github.com/winstonjs/winston).
