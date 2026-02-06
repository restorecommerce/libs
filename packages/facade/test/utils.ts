import { RedisClientType, createClient as RedisCreateClient } from 'redis';
import { GrpcMockServer } from '@alenon/grpc-mock-server';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import { rules } from './mocks.js';
import { type Any } from '@restorecommerce/rc-grpc-clients';
import { type AdapterPayload } from 'oidc-provider';

export const epochTime = (date = Date.now()) => Math.floor(date / 1000);

export const unmarshallProtobufAny = (msg: Any): AdapterPayload => {
  return JSON.parse(msg.value.toString());
};

export const marshallProtobufAny = (payload: AdapterPayload): Any => {
  return {
    typeUrl: '',
    value: Buffer.from(JSON.stringify(payload))
  };
};

export const cfg = createServiceConfig(process.cwd());
export const logger = createLogger(cfg.get('logger'));
export async function mockServices(configs: { [key: string]: any }) {
  return await Promise.all(Object.entries(configs).map(async ([a, config]) => {
    if (config?.mock) {
      config.mocks = [config?.mock];
    }

    if (!config?.mocks) {
      return;
    }

    const mockServer = new GrpcMockServer(
      config.address,
    );

    for (const [b, mock] of Object.entries<any>(config.mocks)) {
      const name = mock.name ?? b ?? a;
      if (!rules[name]) {
        throw new Error(`No mocking rules for ${name} in mocks.ts!`);
      }
      mockServer.addService(
        mock.protoPath,
        mock.packageName,
        mock.serviceName,
        rules[name],
        mock.protoLoadOptions,
      );
      logger.info(`Mock Service: ${name} added.`);
    }

    return await mockServer.start();
  }).filter(m => !!m)) as GrpcMockServer[];
};

let _redisClient: RedisClientType;
export async function getRedisInstance() {
  if (_redisClient) {
    return _redisClient;
  }
  const redisConfig = cfg.get('redis');
  redisConfig.database = cfg.get('redis:db-indexes:db-subject');
  _redisClient = RedisCreateClient(redisConfig);
  _redisClient.on('error', (err: any) => logger.error('Redis Client Error', err));
  await _redisClient.connect();
  return _redisClient;
}

export { GrpcMockServer } from '@alenon/grpc-mock-server';