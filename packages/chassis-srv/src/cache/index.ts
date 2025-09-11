import * as _ from 'lodash';
import { createCache } from 'cache-manager';
import { Keyv } from 'keyv';
import { LRUCache } from 'lru-cache';
import { Logger } from 'winston';
import { ObjectEncodingOptions } from 'fs';

/**
 * A key, value map containing cache providers.
 * Cache providers are registered with the register function.
 */
const providers: Record<string, any> = {};

/**
 * Register a cache provider.
 * Providers need to be compatible to the node-cache-manager module.
 * https://github.com/BryanDonovan/node-cache-manager
 * @param  {string} name     cache provider identifier
 * @param  {constructor} provider cache store constructor
 */
export const register = (name: string, provider: any): void => {
  providers[name] = provider;
};

// register defaults
// add memory provider by default, since it is included with the cache-manager.
register('memory', (config: any, logger: any) => {
  const options = {
    max: config?.max || 500,
    dispose: config?.dispose,
    allowStale: config?.allowStale,
    ttl: config?.ttl || 5000,
  };
  const lruCache = new LRUCache(options);
  const keyv = new Keyv({ store: lruCache });
  const cache = createCache({ stores: [keyv] });
  return cache;
});

/**
 * Get a new cache instance.
 * @param {Object} config Cache configuration
 * @param [Logger] logger
 * @return Cache instance
 */
export const get = (config: any, logger: Logger): any => {
  if (_.isNil(config)) {
    throw new Error('missing argument config');
  }

  const providerName = config[0].provider;
  const provider = providers[providerName];
  const cache = provider(config, logger);
  return cache;
};
