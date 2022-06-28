import { cfg } from '../config';
import logger from '../logger';
import * as crypto from 'crypto';
import { createClient, RedisClientType } from 'redis';
import * as _ from 'lodash';

let attempted = false;
let redisInstance: RedisClientType<any, any>;
let ttl: number | undefined;
let cacheEnabled = true;
let redisSubjectInstance: RedisClientType<any, any>;

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
      redisConfig.database = cfg.get('authorization:cache:db-index');
      redisInstance = createClient(redisConfig);
      redisInstance.on('error', (err) => logger.error('Redis Client Error in ACS cache',  { code: err.code, message: err.message, stack: err.stack }));
      await redisInstance.connect();
      ttl = cfg.get('authorization:cache:ttl');
    }
    if (redisSubConfig) {
      // init redis subject instance
      redisSubConfig.database = redisSubConfig['db-indexes']['db-subject'];
      redisSubjectInstance = createClient(redisSubConfig);
      redisSubjectInstance.on('error', (err) => logger.error('Redis Client Error in ACS cache',  { code: err.code, message: err.message, stack: err.stack }));
      await redisSubjectInstance.connect();
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
  let redisKeyResponse = await redisInstance.get(redisKey);
  if (redisKeyResponse && useCache) {
    const response = JSON.parse(redisKeyResponse);
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
      return response;
    }
  }

  if (!useCache) {
    // when useCache is false, dont store in cache
    return await filler(keyData);
  }

  logger.debug('Filling cache key: ' + redisKey);
  const acsResponse = await filler(keyData);
  if (acsResponse) {
    if (ttl) {
      await redisInstance.setEx(redisKey, ttl, JSON.stringify(acsResponse));
    } else {
      await redisInstance.set(redisKey, JSON.stringify(acsResponse));
    }
  }
  return acsResponse;
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
  const redisResponse = await redisSubjectInstance.get(key);
  if (!redisResponse) {
    logger.info('Key does not exist', { key });
    return;
  }
  if (redisResponse) {
    logger.debug('Found key in cache: ' + key);
    return JSON.parse(redisResponse);
  }
};

/**
 * Flush the ACS cache
 *
 * @param prefix An optional prefix to flush instead of entire cache
 */
export const flushCache = async (prefix?: string) => {
  if (!redisInstance || !cacheEnabled) {
    logger.info('Redis client not initialized in acs-client');
    return;
  }

  if (prefix != undefined) {
    let flushPattern = `acs:${prefix}:*`;
    logger.debug(`Flushing cache with pattern ${flushPattern}`);
    let scanIterator;
    try {
      scanIterator = redisInstance.scanIterator({ MATCH: flushPattern, COUNT: 100 });
      for await (const key of scanIterator) {
        await redisInstance.del(key);
      }
      logger.debug(`Successfully flushed cache pattern ${flushPattern}`);
      return;
    } catch (err) {
      logger.error('Error flushing ACS cache',  { code: err.code, message: err.message, stack: err.stack });
      return;
    }
  }
  logger.debug('Flushing ACS cache');
  const reply = await redisInstance.flushDb();
  if (reply) {
    logger.debug('Flushed ACS cache');
  }
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
