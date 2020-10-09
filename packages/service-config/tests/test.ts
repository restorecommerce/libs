import { createServiceConfig, ServiceConfig } from '../src/index'

describe('the configuration', () => {
  it('should use the provided logger', (done) => {
    const logger = {
      messages: [],
      verbose(message) {
        this.messages.push(message);
      },
    };

    const cfg = createServiceConfig(__dirname, { logger });

    expect(cfg.get('test')).toBe('test');
    expect(logger.messages.length).toBe(2);
    expect(logger.messages[0]).toBe(`Supervisor uses configuration file: ${__dirname}/cfg/config_development.json`);
    expect(logger.messages[1]).toBe(`Supervisor uses configuration file: ${__dirname}/cfg/config.json`);
    done();
  });
});

describe('', () => {

  let cfg: ServiceConfig;

  beforeAll(() => {
    cfg = createServiceConfig(__dirname);
  })

  it('should return config values from the default configuration file', (done) => {
    expect(cfg.get('test')).toBe('test');
    done();
  });
  it('should return boolean config properties', (done) => {
    expect(cfg.get('boolProp')).toBe(true);
    done();
  });
  it('should return number config properties', (done) => {
    expect(cfg.get('numberProp')).toBe(8);
    done();
  });
  it('should return obj config properties overridden by environment variables', (done) => {
    expect(cfg.get('obj:objectParamA')).toBe('envparam');
    done();
  });
});
