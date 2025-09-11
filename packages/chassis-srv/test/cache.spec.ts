import * as should from 'should';
import * as config from '../src/config/index.js';
import { createLogger } from '@restorecommerce/logger';
import * as cache from '../src/cache/index.js';
import { it, describe, beforeEach } from 'vitest';

/* global describe it beforeEach */

describe('cache', () => {
  let logger: any;
  beforeEach(async () => {
    await config.load(process.cwd() + '/test');
    const cfg = await config.get();
    logger = createLogger(cfg.get('logger'));
  });
  describe('get', () => {
    it('should return one store with the config for one store',
      async () => {
        const cfg = await config.get();
        const c = await cache.get(cfg.get('cache:one'), logger);
        should.exist(c);
        should.exist(c.get);

        await c.set('test', 'testvalue');
        const res = await c.get('test');
        res.should.equal('testvalue');
      });
    // it('should return one multiCaching store with the config for many stores',
    //   async () => {
    //     const cfg = await config.get();
    //     const c = await cache.get(cfg.get('cache:many'), logger);
    //     should.exist(c);
    //     should.exist(c.get);

    //     await c.set('test', 'testvalue');
    //     const res = await c.get('test');
    //     res.should.equal('testvalue');
    //   });
  });
});
