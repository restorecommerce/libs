import { createLogger, RestoreLoggerOptions, globalLoggerCtxKey } from '../src/index';
import { AsyncLocalStorage } from 'async_hooks';

/*
Define a key in the AsyncLocalStorage that the logger should pick up
*/
const loggerCtx = new AsyncLocalStorage<Map<string, string>>();
const store = new Map<string, string>();
global[globalLoggerCtxKey] = loggerCtx;
global[globalLoggerCtxKey].enterWith(store);
store.set('requestId', '12345678');

const opts: RestoreLoggerOptions = {
  sourcePointer: false,
  loggerName: 'test',
  console: {
    handleExceptions: false,
    level: 'silly',
    colorize: true,
    prettyPrint: true
  },
  elasticsearch: {
    level: "silly",
    clientOpts: {
      node: "http://localhost:9200"
    },
    dataStream: true,
    source: "logger-test"
  }
};

describe('a logger', () => {
  it('can be instantiated', (done) => {
    try {
      let logger = createLogger(opts);
      done();
    } catch (err) {
      throw 'Nope';
    }
  });

  describe('it should log', () => {
    let logger = createLogger(opts);
    it('a simple message', (done) => {
      logger.info('Simple message');
      done();
    });
    it('a message and an object', (done) => {
      logger.info('Message with an object', { test: 'testMessage' });
      done();
    });
    it('an Object', (done) => {
      logger.info({ test: 'test' });
      done();
    });
    it('log with level, a message and object', (done) => {
      logger.log('debug', 'Message with multiple objects',
        { test: 'test' },
        { test2: 'test2' });
      done();
    });
    it('an error with stack trace', (done) => {
      logger.error('Generic Error!');
      done();
    });
  });
});
