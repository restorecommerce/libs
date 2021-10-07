import { cfg } from '../config';
import logger from '../logger';
import * as crypto from 'crypto';
import * as Redis from 'ioredis';
import * as _ from 'lodash';

let attempted = false;
let redisInstance;
let ttl: number | undefined;
let cacheEnabled = true;
let redisSubjectInstance;

/**
 * Initialize ACS Cache
 */
export const initializeCache = async () => {
  if (attempted || !cacheEnabled) {
    return;
  }

  attempted = true;

  let redis;

  try {
    redis = await import('redis');
  } catch (e) {
  }

  if (redis) {
    const redisConfig = cfg.get('authorization:cache');
    const redisSubConfig = cfg.get('redis');
    if (redisConfig) {
      redisConfig.db = cfg.get('authorization:cache:db-index');
      redisInstance = redis.createClient(redisConfig);
      ttl = cfg.get('authorization:cache:ttl');
    }
    if (redisSubConfig) {
      // init redis subject instance
      redisSubConfig.db = redisSubConfig['db-indexes']['db-subject'];
      redisSubjectInstance = redis.createClient(redisSubConfig);
    }
  }
};

/**
 * Find the object in cache. If not found, compute it using the filler function
 *
 * @param keyData The data to base the cache key on
 * @param filler The function to execute if key is not found in cache
 * @param prefix The prefix to apply to the object key in the cache
 */
export const getOrFill = async <T, M>(keyData: T, filler: (data: T) => Promise<M>,
  useCache: boolean, prefix?: string): Promise<M | undefined> => {
  if (!redisInstance || !cacheEnabled) {
    return filler(keyData);
  }

  const inputHash = crypto.createHash('md5').update(JSON.stringify(keyData)).digest().toString('base64');
  let redisKey = `${inputHash}`;

  if (prefix) {
    redisKey = `${prefix}:` + redisKey;
  }

  return new Promise((resolve, reject) => {
    redisInstance.get(redisKey, async (err, reply) => {
      if (err) {
        logger.error('Failed fetching key from ACS cache: ', err);
        return;
      }

      if (reply && useCache) {
        const response = JSON.parse(reply);
        let evaluation_cacheable = response.evaluation_cacheable;
        if (response && !_.isEmpty(response.policy_sets)) {
          const policies = response.policy_sets[0].policies;
          if (policies && policies.length > 0) {
            for (let policy of policies) {
              for (let rule of policy.rules) {
                if (!rule.evaluation_cacheable || (rule.evaluation_cacheable === false)) {
                  evaluation_cacheable = rule.evaluation_cacheable;
                  break;
                } else if (rule.evaluation_cacheable) {
                  evaluation_cacheable = rule.evaluation_cacheable;
                }
              }
            }
          }
        }
        if (evaluation_cacheable) {
          logger.debug('Found key in cache: ' + redisKey);
          return resolve(response);
        }
      }

      if (!useCache) {
        return filler(keyData).then((data) => {
          // when useCache is false, dont store in cache
          resolve(data);
        }).catch(reject);
      }

      logger.debug('Filling cache key: ' + redisKey);

      return filler(keyData).then((data) => {
        if (data) {
          if (ttl) {
            redisInstance.setex(redisKey, ttl, JSON.stringify(data));
          } else {
            redisInstance.set(redisKey, JSON.stringify(data));
          }
        }

        resolve(data);
      }).catch(reject);
    });
  });
};

/**
 * Find the object in cache.
 *
 * @param key The key to be looked up in cache
 * @param filler The function to execute if key is not found in cache
 * @param prefix The prefix to apply to the object key in the cache
 */
export const get = async (key: string): Promise<any> => {
  if (!redisSubjectInstance) {
    return;
  }
  return new Promise((resolve, reject) => {
    redisSubjectInstance.get(key, async (err, reply) => {
      if (err) {
        reject(err);
        return;
      }

      if (reply) {
        logger.debug('Found key in cache: ' + key);
        resolve(JSON.parse(reply));
        return;
      }
      if (!err && !reply) {
        logger.info('Key does not exist', { key });
        resolve(0);
      }
    });
  });
};

/**
 * Flush the ACS cache
 *
 * @param prefix An optional prefix to flush instead of entire cache
 */
export const flushCache = async (prefix?: string) => {
  let ioredisInstance;
  const redisConfig = cfg.get('authorization:cache');
  if (redisConfig) {
    redisConfig.db = cfg.get('authorization:cache:db-index');
    ioredisInstance = new Redis(redisConfig);
  }
  if (!ioredisInstance || !cacheEnabled) {
    return;
  }

  if (prefix != undefined) {
    let stream = ioredisInstance.scanStream({ match: `acs:${prefix}:*`, count: 100 });
    let pipeline = ioredisInstance.pipeline();
    let localKeys = [];

    stream.on('data', (resultKeys) => {
      logger.info('Data Received:', localKeys.length);
      for (let i = 0; i < resultKeys.length; i++) {
        localKeys.push(resultKeys[i]);
        pipeline.del(resultKeys[i]);
      } if (localKeys.length > 100) {
        pipeline.exec(() => { logger.info('one batch delete complete'); });
        localKeys = [];
        pipeline = ioredisInstance.pipeline();
      }
    });
    stream.on('end', () => {
      pipeline.exec(() => { logger.info('final batch delete complete'); });
      return;
    });
    stream.on('error', (err) => {
      logger.error('error', err);
      return;
    });
    return;
  }

  logger.debug('Flushing ACS cache');

  return new Promise((resolve, reject) => {
    redisInstance.flushdb(async (err, reply) => {
      if (err) {
        logger.error('Failed flushing ACS cache: ', err);
        return reject();
      }

      if (reply) {
        logger.debug('Flushed ACS cache');
        return resolve(0);
      }
    });
  });
};

/**
 * Enable / Disable ACS Caching
 *
 * @param enabled Whether to enable or disable the cache
 */
export const setCacheStatus = (enabled: boolean) => {
  cacheEnabled = enabled;

  if (enabled) {
    logger.debug('ACS Cache Enabled');
    initializeCache();
  } else {
    logger.debug('ACS Cache Disabled');
  }
};
