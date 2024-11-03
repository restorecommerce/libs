import { createServiceConfig, ServiceConfig } from '../src/index'
import { it, describe, beforeAll, expect } from 'vitest';

describe('the configuration', () => {
  it('should use the provided logger', () => {
    const logger = {
      messages: [] as any[],
      verbose(message: any) {
        this.messages.push(message);
      },
    };

    const cfg = createServiceConfig(__dirname, { logger });

    expect(cfg.get('test')).toBe('test');
    expect(logger.messages.length).toBe(2);
    expect(logger.messages[0]).toBe(`Supervisor uses configuration file: ${__dirname}/cfg/config_development.json`);
    expect(logger.messages[1]).toBe(`Supervisor uses configuration file: ${__dirname}/cfg/config.json`);
  });
});

describe('', () => {

  let cfg: ServiceConfig;

  beforeAll(() => {
    cfg = createServiceConfig(__dirname);
  })

  it('should return config values from the default configuration file', () => {
    expect(cfg.get('test')).toBe('test');
  });
  it('should return boolean config properties', () => {
    expect(cfg.get('boolProp')).toBe(true);
  });
  it('should return number config properties', () => {
    expect(cfg.get('numberProp')).toBe(8);
  });
  it('should return obj config properties overridden by environment variables', () => {
    expect(cfg.get('obj:objectParamA')).toBe('envparam');
  });
});
