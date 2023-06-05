import { Any } from '@restorecommerce/rc-grpc-clients';
import {TokenServiceImplementation} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/token'
import { LRUCache } from 'lru-cache';
import { AdapterPayload } from 'oidc-provider';
import { epochTime, marshallProtobufAny, unmarshallProtobufAny } from './utils';

export interface FindRequest {
  type: string;
  id: string;
}

export interface DestroyRequest {
  type: string;
  id: string;
}

export interface ConsumeRequest {
  type: string;
  id: string;
}

export interface UpsertRequest {
  type: string;
  id: string;
  payload: Any;
  expiresIn: number;
}

export interface RevokeByGrantIdRequest {
  grantId: string;
}

// export interface TokenService {
//   consume(args: ConsumeRequest): Promise<void>;
//   destroy(args: DestroyRequest): Promise<void>;
//   find(args: FindRequest): Promise<Any | undefined>;
//   upsert(args: UpsertRequest): Promise<void>;
//   revokeByGrantId(args: RevokeByGrantIdRequest): Promise<void>;
// }

export class TokenServiceStub implements TokenServiceImplementation {
  tokenStorage = new LRUCache<string, AdapterPayload>({ max: 1000 });
  grantIdStorage = new LRUCache<string, string[]>({ max: 1000 });

  private key(type: string, id: string) {
    return `${type}:${id}`;
  }
  async consume({ type, id }: ConsumeRequest): Promise<Any> {
    console.log('[ids] consume', ...arguments);
    const payload = this.tokenStorage.get(this.key(type, id));
    if (payload) {
      payload.consumed = epochTime();
    }
    return {
      typeUrl: '',
      value: Buffer.from('{}')
    };
  }
  async destroy({ type, id }: DestroyRequest): Promise<Any> {
    console.log('[ids] destroy', ...arguments);
    this.tokenStorage.delete(this.key(type, id));
    return {
      typeUrl: '',
      value: Buffer.from('{}')
    };

  }
  async find({ type, id }: FindRequest): Promise<Any | undefined> {
    console.log('[ids] find', ...arguments);
    const payload = this.tokenStorage.get(this.key(type, id));
    if (payload) {
      return marshallProtobufAny(payload);
    }
    return undefined;
  }
  async upsert({ type, id, expiresIn, payload: payloadBuffer }: UpsertRequest): Promise<Any> {
    console.log('[ids] upsert', ...arguments);
    const payload = unmarshallProtobufAny(payloadBuffer);

    const key = this.key(type, id);

    const { grantId } = payload;
    if (grantId) {
      const grant = this.grantIdStorage.get(grantId);
      if (!grant) {
        this.grantIdStorage.set(grantId, [key]);
      } else {
        grant.push(key);
      }
    }
    this.tokenStorage.set(key, payload, { ttl: expiresIn * 1000 });
    return {
      typeUrl: '',
      value: Buffer.from('{}')
    };
  }
  async revokeByGrantId({ grantId }: RevokeByGrantIdRequest): Promise<Any> {
    console.log('[ids] revokeByGrantId', ...arguments);
    const grant = this.grantIdStorage.get(grantId);
    if (grant) {
      grant.forEach((token: string) => this.tokenStorage.delete(token));
      this.grantIdStorage.delete(grantId);
    }
    return {
      typeUrl: '',
      value: Buffer.from('{}')
    };
  }

}
