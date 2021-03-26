import { Logger } from 'winston';
import { Adapter, AdapterConstructor, AdapterPayload } from 'oidc-provider';
import { marshallProtobufAny, unmarshallProtobufAny } from './utils';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth';
import { InMemoryAdapter } from './in-memory-adapter';
import { Service as tokenService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";

const delegateToRemoteService = (type: string) => ['AccessToken', 'RefreshToken'].includes(type);


export function createIdentityServiceAdapterClass(remoteTokenService: tokenService, logger: Logger, localTokenServiceFactory?: (type: string) => Adapter): AdapterConstructor {
  return class IdentityServiceAdapter implements Adapter {

    private localTokenService: Adapter;

    constructor(public type: string) {
      this.localTokenService = localTokenServiceFactory ? localTokenServiceFactory(type) : new InMemoryAdapter(type);
    }

    async consume(id: string): Promise<undefined | void> {
      logger.verbose(`Consuming ${this.type} token ${id}`);
      if (delegateToRemoteService(this.type)) {
        try {
          await remoteTokenService.consume({
            id,
            type: this.type,
            subject: undefined
          });
        } catch (error) {
          logger.error(`Error consuming ${this.type} token ${id}`, error);
        }
      } else {
        await this.localTokenService.consume(id);
      }
    }

    async destroy(id: string): Promise<void | undefined> {
      logger.verbose(`Destroying ${this.type} token ${id}`);
      if (delegateToRemoteService(this.type)) {
        try {
          await remoteTokenService.destroy({
            id,
            type: this.type,
            subject: Subject.fromPartial({token: id})
          });
        } catch (error) {
          logger.error(`Error destroying ${this.type} token ${id}`, error);
        }
      } else {
        await this.localTokenService.destroy(id);
      }
    }

    async find(id: string): Promise<void | undefined | AdapterPayload> {
      logger.verbose(`Finding ${this.type} token ${id}`);
      if (delegateToRemoteService(this.type)) {
        try {
          let result = await remoteTokenService.find({
            id,
            type: this.type,
            subject: Subject.fromPartial({token: id})
          });
          return result ? unmarshallProtobufAny(result) : undefined;
        } catch (error) {
          logger.error(`Error finding ${this.type} token ${id}`, error);
          return undefined;
        }
      } else {
        return await this.localTokenService.find(id);
      }
    }

    async findByUid(uid: string): Promise<void | undefined | AdapterPayload> {
      logger.verbose(`Finding by Uid ${uid}`);
      return await this.localTokenService.findByUid(uid);
    }

    // Not needed. DeviceFlow only
    async findByUserCode(userCode: string): Promise<void | undefined | AdapterPayload> {
      logger.error('Finding br UserCode is unsupported', this.type, ...arguments);
      throw new Error('UNSUPPORTED');
    }

    async upsert(id: string, payload: AdapterPayload, expiresIn: number): Promise<undefined | void> {
      logger.error(`Upserting ${this.type} token ${id}`, payload);

      if (delegateToRemoteService(this.type)) {
        try {
          await remoteTokenService.upsert({
            expiresIn,
            id,
            payload: marshallProtobufAny(payload),
            type: this.type,
            subject: undefined
          });
        } catch (error) {
          logger.error(`Error upserting ${this.type} token ${id}`, error);
        }
      } else {
        return this.localTokenService.upsert(id, payload, expiresIn * 1000);
      }
    }

    async revokeByGrantId(grantId: string): Promise<void | undefined> {
      logger.error(`Revoking grant id ${this.type} token ${grantId}`);
      await this.localTokenService.revokeByGrantId(grantId);

      if (delegateToRemoteService(this.type)) {
        try {
          await remoteTokenService.revokeByGrantId({
            grantId,
            subject: Subject.fromPartial({token: grantId})
          });
        } catch (error) {
          logger.error(`Error revoking grant id ${grantId}`, error);
        }
      }
    }
  }
}
