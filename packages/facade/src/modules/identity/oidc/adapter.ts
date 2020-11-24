import { Logger } from '@restorecommerce/logger';
import { TokenService } from '@restorecommerce/rc-grpc-clients';
import LRU from 'lru-cache';
import { Adapter, AdapterConstructor, AdapterPayload } from 'oidc-provider';
import { epochTime, marshallProtobufAny, unmarshallProtobufAny } from './utils';

// const delegate = (type: string) => ['AccessToken', 'RefreshToken'].includes(type);
const delegate = (type: string) => ['dsa'].includes(type);

export function createIdentityServiceAdapterClass(tokenService: TokenService, logger: Logger): AdapterConstructor {
  return class IdentityServiceAdapter implements Adapter {

    tokenStorage = new LRU<string, AdapterPayload>({});
    sessionStorage = new LRU<string, string>({});
    grantIdStorage = new LRU<string, string[]>({});

    constructor(public type: string) { }

    private key(id: string) {
      return `${this.type}:${id}`;
    }

    async consume(id: string): Promise<undefined | void> {
      console.log('[facade] consume', this.type, ...arguments);
      if (delegate(this.type)) {
        await tokenService.consume({
          id,
          type: this.type,
          subject: undefined
        });
      } else {
        const payload = this.tokenStorage.get(this.key(id));
        if (payload) {
          payload.consumed = epochTime();
        }
      }
    }

    async destroy(id: string): Promise<void | undefined> {
      console.log('[facade] destroy', this.type, ...arguments);
      if (delegate(this.type)) {
        await tokenService.destroy({
          id,
          type: this.type,
          subject: undefined
        });
      } else {
        this.tokenStorage.del(this.key(id));
      }
    }

    async find(id: string): Promise<void | undefined | AdapterPayload> {
      console.log('[facade] find', this.type, ...arguments);
      let result;
      if (delegate(this.type)) {
        result = await tokenService.find({
          id,
          type: this.type,
        });
        if (result) {
          result = unmarshallProtobufAny(result);
        }
        result = undefined;
      } else {
        result = this.tokenStorage.get(this.key(id));
      }
      // console.log('[facade] find result', this.type, result);
      return result;
    }

    async findByUid(uid: string): Promise<void | undefined | AdapterPayload> {
      console.log('[facade] findByUid', this.type, ...arguments);
      const id = this.sessionStorage.get(uid);
      return id ? this.find(id) : undefined;
    }

    // Not needed. DeviceFlow only
    async findByUserCode(userCode: string): Promise<void | undefined | AdapterPayload> {
      console.log('[facade] findByUserCode', this.type, ...arguments);
      throw 'UNSUPPORTED';
    }

    async upsert(id: string, payload: AdapterPayload, expiresIn: number): Promise<undefined | void> {
      console.log('[facade] upsert', this.type, ...arguments);
      const key = this.key(id);

      if (this.type === 'Session' && payload.uid) {
        this.sessionStorage.set(payload.uid, id, expiresIn * 1000);
      }

      const { grantId, userCode } = payload;
      if (grantId) {
        const grant = this.grantIdStorage.get(grantId);
        if (!grant) {
          this.grantIdStorage.set(grantId, [key]);
        } else {
          grant.push(key);
        }
      }

      if (userCode) {
        throw 'UNSUPPORTED';
      }

      if (delegate(this.type)) {
        await tokenService.upsert({
          expiresIn,
          id,
          payload: marshallProtobufAny(payload),
          type: this.type,
          subject: undefined
        });
      } else {
        this.tokenStorage.set(key, payload, expiresIn * 1000);
      }
    }

    async revokeByGrantId(grantId: string): Promise<void | undefined> {
      console.log('[facade] revokeByGrantId', this.type, ...arguments);
      const grant = this.grantIdStorage.get(grantId);
      if (grant) {
        grant.forEach((token: string) => this.tokenStorage.del(token));
        this.grantIdStorage.del(grantId);
      }
      if (delegate(this.type)) {
        await tokenService.revokeByGrantId({
          grantId,
        });
      }
    }
  }
}
