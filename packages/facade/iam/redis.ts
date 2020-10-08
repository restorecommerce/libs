import { cfg } from '../config';
import * as redis from 'redis';
import { JwtMeta } from '@restorecommerce/iam-authn';

export class RedisWhitelist {
  constructor(private redis: redis.RedisClient, private prefix = 'jwt:user') { }

  private makePrefixedKey(userID: string, meta: JwtMeta) {
    return `${this.prefix}:${userID}:${meta.jti}`;
  }

  verify(subjectId: string, meta: JwtMeta): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.redis.sismember(subjectId, meta.jti, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result === 1);
      });
    });
  }

  add(userID: string, meta: JwtMeta): Promise<void> {
    const secsSinceEpoch = Math.floor(Date.now() / 1000);
    const metaKey = this.makePrefixedKey(userID, meta);
    const exp = meta.exp - secsSinceEpoch;

    return new Promise<void>((resolve, reject) => {
      this.redis.setex(metaKey, exp, '', (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  remove(userID: string, meta: JwtMeta): Promise<number> {
    const metaKey = this.makePrefixedKey(userID, meta);
    return new Promise<number | undefined>((resolve, reject) => {
      this.redis.del(metaKey, (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  clear(userID: string): Promise<number> {
    const wildcard = `${this.prefix}:${userID}:*`;
    return this.clearWildcard(wildcard);

  }

  flush(): Promise<number> {
    const wildcard = `${this.prefix}:*`;
    return this.clearWildcard(wildcard);
  }

  private async clearWildcard(wildcard: string): Promise<number> {
    const keys = await new Promise<string[]>((resolve, reject) => {
      let foundKeys: string[] = [];

      const scan = () => {
        this.redis.scan('0', 'MATCH', wildcard, 'COUNT', '500', (err, [cursor, keys]) => {
          if (err) {
            reject(err);
          }
          foundKeys = [...foundKeys, ...keys];
          if (cursor === '0') {
            resolve(foundKeys);
          } else {
            scan();
          }
          return;
        });
      };
      scan();
    });

    return new Promise<number | undefined>((resolve, reject) => {
      for (let key of keys) {
        this.redis.del(key, (err, res) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      }
    });
  }
}

let instance: RedisWhitelist;
export const getRedisCache = () => {
  if (!instance) {
    const redisCfg = cfg.get('redis');
    redisCfg.db = cfg.get('redis:db-indexes:db-sessionStore');
    instance = new RedisWhitelist(redis.createClient(redisCfg));
  }

  return instance;
};
