import { createLogger, RestoreLoggerOptions, globalLoggerCtxKey } from '../src/index';
import { AsyncLocalStorage } from 'async_hooks';
import { it, describe } from 'vitest';

/*
Define a key in the AsyncLocalStorage that the logger should pick up
*/
const loggerCtx = new AsyncLocalStorage<Map<string, string>>();
const store = new Map<string, string>();
(global as any)[globalLoggerCtxKey] = loggerCtx;
(global as any)[globalLoggerCtxKey].enterWith(store);
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
    stringifyMeta: true,
    level: "silly",
    clientOpts: {
      node: "http://localhost:9200"
    },
    dataStream: true,
    source: "logger-test"
  },
  fieldOptions: {
    maskFields: ['password'],
    bufferFields: [{
      fieldPath: 'test.data'
    }]
  }
};

describe('a logger', () => {
  it('can be instantiated', () => {
    try {
      const logger = createLogger(opts);
      const esTransport = logger.transports[1] as any;
      esTransport.bulkWriter.stop(); // TODO: does not work, fix in Winston ES
    } catch (err) {
      throw 'Nope';
    }
  });

  describe('it should log', () => {
    const logger = createLogger(opts);
    const esTransport = logger.transports[1] as any;

    it('a simple message', () => {
      logger.info('Simple message');
    });
    it('a message and an object', () => {
      logger.info('Message with an object', { test: 'testMessage' });
    });
    it('an Object', () => {
      logger.info({ test: 'test' });
    });
    it('log with level, a message and objects', () => {
      logger.log('debug', 'Message with multiple objects',
        { test: 'test' },
        { test2: 'test2' });
    });
    it('an error with stack trace', () => {
      logger.error('Generic Error!');
    });
    it('a circular object', () => {
      const obj: any = { name: "Bob" };
      obj.child = obj;
      logger.info(obj);
    });
    it('should mask configured password field', () => {
      logger.log('debug', 'Message with password field in object masked',
        { login_name: 'test', password: 'Test1234' },
        { login_name: 'test2', password: 'Test1234' });
    });
    it('should skip logging buffer fields', () => {
      logger.log('debug', 'Message with buffer fields skipped in object',
        {
          login_name: 'test', test: {
            data: { value: Buffer.from('Test1234') }
          }
        },
        {
          login_name: 'test2', test: {
            data: { value: Buffer.from('Test1234') }
          }
        });
    });
    esTransport.bulkWriter.stop();
  });
});