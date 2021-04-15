import { cfg } from './config';
import * as Redis from 'ioredis';

export const getRedisInstance = (dbIndex?: number): Redis.Redis => {
  if (!dbIndex) {
    dbIndex = 0;
  }
  const redisCfg = cfg.get('redis');
  redisCfg.db = dbIndex;
  const clientInstance = new Redis.default(redisCfg);
  return clientInstance;
};