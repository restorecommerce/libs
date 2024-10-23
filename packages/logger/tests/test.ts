import { createLogger, RestoreLoggerOptions, globalLoggerCtxKey } from '../src/index';
import { AsyncLocalStorage } from 'async_hooks';

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
  it('can be instantiated', (done) => {
    try {
      let logger = createLogger(opts);
      let esTransport = logger.transports[1] as any;
      esTransport.bulkWriter.stop(); // TODO: does not work, fix in Winston ES
      done();
    } catch (err) {
      throw 'Nope';
    }
  });

  describe('it should log', () => {
    let logger = createLogger(opts);
    let esTransport = logger.transports[1] as any;

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
    it('log with level, a message and objects', (done) => {
      logger.log('debug', 'Message with multiple objects',
        { test: 'test' },
        { test2: 'test2' });
      done();
    });
    it('an error with stack trace', (done) => {
      logger.error('Generic Error!');
      done();
    });
    it('a circular object', (done) => {
      const obj: any = { name: "Bob" };
      obj.child = obj;
      logger.info(obj);
      done();
    });
    it('should mask configured password field', (done) => {
      logger.log('debug', 'Message with password field in object masked',
        { login_name: 'test', password: 'Test1234' },
        { login_name: 'test2', password: 'Test1234' });
      done();
    });
    it('should skip logging buffer fields', (done) => {
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
      done();
    });
    esTransport.bulkWriter.stop();
  });
});
