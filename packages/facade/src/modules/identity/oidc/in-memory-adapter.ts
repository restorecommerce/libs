import { Adapter, AdapterPayload } from 'oidc-provider';
import LRU from 'lru-cache';
import { epochTime } from './utils';

export class InMemoryAdapter implements Adapter {

  constructor(private type: string) {}

  private tokenStorage = new LRU<string, AdapterPayload>({max: 1000});
  private sessionStorage = new LRU<string, string>({max: 1000});
  private grantIdStorage = new LRU<string, string[]>({max: 1000});

  private key(id: string) {
    return `${this.type}:${id}`;
  }

  async upsert(id: string, payload: AdapterPayload, expiresIn: number): Promise<void | undefined> {
    const key = this.key(id);

    if (this.type === 'Session' && payload.uid) {
      this.sessionStorage.set(payload.uid, id, {
        ttl: expiresIn * 1000
      });
    }

    const { grantId, userCode } = payload;
    if (grantId) {
      this.grantIdStorage.set(grantId, [key]);
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
    this.tokenStorage.set(key, payload, {
      ttl: expiresIn * 1000
    });
  }

  findByUserCode(userCode: string): Promise<void | AdapterPayload | undefined> {
    throw new Error('UNSUPPORTED');
  }

  async find(id: string): Promise<void | AdapterPayload | undefined> {
    return this.tokenStorage.get(this.key(id));

  }
  async findByUid(uid: string): Promise<void | AdapterPayload | undefined> {
    const id = await this.sessionStorage.get(uid);
    return id ? this.find(id) : undefined;
  }
  async consume(id: string): Promise<void | undefined> {
    const payload = this.tokenStorage.get(this.key(id));
    if (payload) {
      payload.consumed = epochTime();
    }
  }
  async destroy(id: string): Promise<void | undefined> {
    this.tokenStorage.del(this.key(id));
  }
  async revokeByGrantId(grantId: string): Promise<void | undefined> {
    const grant = this.grantIdStorage.get(grantId);
    if (grant) {
      grant.forEach((token: string) => this.tokenStorage.del(token));
      this.grantIdStorage.del(grantId);
    }
  }
}
