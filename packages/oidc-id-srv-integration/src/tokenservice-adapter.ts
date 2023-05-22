import { AdapterConstructor, Adapter, AdapterPayload } from 'oidc-provider';
import { RedisClientType } from 'redis';
import { cfg } from './config';
import * as _ from 'lodash';
import { TokenServiceClient } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/token';

const unmarshallProtobufAny = (msg: any): any => JSON.parse(msg.value.toString());
const marshallProtobufAny = (msg: any): any => {
  if (msg) {
    return {
      type_url: '',
      value: Buffer.from(JSON.stringify(msg))
    };
  }
};

const epochTime = () =>  {
  return Math.floor(Date.now() / 1000);
};

const delegate = (type: string) => ['AccessToken', 'RefreshToken'].includes(type);

export function createIdentityServiceAdapterClass(tokenService: TokenServiceClient, logger: any, redisClient: RedisClientType<any, any>): AdapterConstructor {
  return class IdentityServiceAdapter implements Adapter {

    constructor(public type: string) { }

    private key(id: string) {
      return `${this.type}:${id}`;
    }

    async upsert(id: any, payload: AdapterPayload, expiresIn: number) {
      const key = this.key(id);

      if (this.type === 'Session' && payload.uid) {
        await redisClient.set(payload.uid, JSON.stringify({ id, expiresIn: expiresIn * 1000 }));
      }

      const { grantId, userCode } = payload;
      if (grantId) {
        let grant: any = await redisClient.get(grantId);
        if (grant) {
          grant = JSON.parse(grant);
        }
        if (!grant) {
          await redisClient.set(grantId, JSON.stringify([key]));
        } else {
          grant.push(key);
        }
      }

      if (userCode) {
        throw 'UNSUPPORTED';
      }

      if (delegate(this.type)) {
        logger.debug('Invoking token service upsert', { type: this.type });
        await tokenService.upsert({
          expires_in: expiresIn,
          id,
          payload: marshallProtobufAny(payload),
          type: this.type
        });
      } else {
        logger.debug('Stored token in Redis cache', { type: this.type });
        await redisClient.set(key, JSON.stringify({ payload, expiresIn: expiresIn * 1000 }));
      }
    }

    async find(id: any) {
      const findReq = {
        id,
        type: this.type,
        subject: { token: id }
      };
      if (delegate(this.type)) {
        logger.debug('Invoking token service find', { type: this.type });
        const response = await tokenService.find(findReq);
        let tokenResponse;
        if (!_.isEmpty(response?.value)) {
          tokenResponse = unmarshallProtobufAny(response);
          tokenResponse.clientId = cfg.get('oidc:client_id');
        }
        return tokenResponse;
      } else {
        logger.debug('Token cache read for token type', { type: this.type });
        let token = await redisClient.get(this.key(id));
        if (token) {
          token = JSON.parse(token);
        }
        return token;
      }
    }

    async findByUid(uid: any) {
      const id = await redisClient.get(uid);
      return id ? this.find(id) : undefined;
    }

    async findByUserCode(userCode: any) {
      throw 'UNSUPPORTED';
    }

    async destroy(id: any) {
      const destroyReq = {
        id,
        type: this.type,
        subject: { token: id }
      };
      Object.assign(destroyReq, { subject: { token: id } });

      if (delegate(this.type)) {
        logger.debug('Invoking token service destory', { type: this.type });
        await tokenService.destroy(destroyReq);
      } else {
        logger.debug('Redis Cache token delete', { type: this.type });
        await redisClient.del(this.key(id));
      }
    }

    async revokeByGrantId(grantId: any) { // eslint-disable-line class-methods-use-this
      const revokeReq = {
        grant_id: grantId,
        subject: { token: grantId }
      };
      let grant: any = await redisClient.get(grantId);
      if (grant) {
        grant = JSON.parse(grant);
        logger.debug('Redis cache token delete by grant', { id: grantId });
        grant.forEach(async (token: string) => await redisClient.del(token));
        await redisClient.del(grantId);
      }
      if (delegate(this.type)) {
        logger.debug('Invoking token service revokeByGrantId', { type: this.type });
        await tokenService.revokeByGrantId(revokeReq);
      }
    }

    async consume(id: any) {
      await tokenService.consume({ id });
      if (delegate(this.type)) {
        logger.debug('Invoking token service consume', { type: this.type });
        await tokenService.consume({
          id,
          type: this.type,
          subject: { token: id }
        });
      } else {
        logger.debug('Updating token cache token consumed date', { type: this.type });
        let payload: any = await redisClient.get(this.key(id));
        if (payload) {
          payload = JSON.parse(payload);
          payload.consumed = epochTime();
        }
      }
    }
  };
}
