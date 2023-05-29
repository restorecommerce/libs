import { cfg } from './config';
import { createClient, RedisClientType } from 'redis';

export const getRedisInstance = (dbIndex?: number): RedisClientType<any, any> => {
  if (!dbIndex) {
    dbIndex = 0;
  }
  const redisCfg = cfg.get('redis');
  redisCfg.database = dbIndex;
  const clientInstance = createClient(redisCfg);
  clientInstance.on('error', (err) => console.log('Redis Client Error in oidc store', err));
  clientInstance.connect().then((val) => console.log('Redis client connection successful for oidc'));
  return clientInstance as RedisClientType;
};