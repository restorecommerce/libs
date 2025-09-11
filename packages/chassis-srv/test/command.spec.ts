// microservice chassis
import { CommandInterface, database, Server } from '../src/index.js';
import * as should from 'should';
import { createClient as createGrpcClient } from '@restorecommerce/grpc-client';
import { Events, registerProtoMeta } from '@restorecommerce/kafka-client';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import { createClient } from 'redis';
import {
  CommandInterfaceServiceDefinition,
  CommandInterfaceServiceClient
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/commandinterface.js';
import {
  protoMetadata
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/test/test.js'
import { BindConfig } from '../src/microservice/transport/provider/grpc/index.js';
import { Channel, createChannel } from 'nice-grpc';
import { it, describe, beforeAll, afterAll, beforeEach } from 'vitest';

/**
 *
 * @param msg google.protobuf.Any
 * @returns Arbitrary JSON
 */
const decodeMsg = (msg: any): any => {
  const decoded = Buffer.from(msg.value).toString();
  return JSON.parse(decoded);
};

/**
 *
 * @param msg Arbitrary JSON
 * @returns google.protobuf.Any formatted message
 */
const encodeMsg = (msg: any): any => {

  const stringified = JSON.stringify(msg);
  const encoded = Buffer.from(stringified);
  const ret = {
    type_url: 'payload',
    value: encoded
  };
  return ret;
};

// register Test proto for emitting TestEvent
registerProtoMeta(protoMetadata);

/*
 * Note: Running Kafka and ArangoDB instances are required.
 */
describe('CommandInterfaceService', () => {
  let db: any;
  let server: Server;
  let events: Events;
  const testEvent = {
    value: 'a test event',
    count: 0,
  };
  let cfg;
  let testTopic;
  let commandTopic;
  let validate;
  let redisClient;
  let channel: Channel;
  let grpcClient: CommandInterfaceServiceClient;
  const eventListener = async (msg: any,
    context: any, config: any, eventName: string): Promise<any> => {
    await validate(msg, eventName);
  };
  beforeAll(async function setup() {
    cfg = createServiceConfig(process.cwd() + '/test');
    const logger = createLogger(cfg.get('logger'));

    events = new Events(cfg.get('events:kafka'), logger);
    await events.start();

    testTopic = await events.topic(cfg.get('events:kafka:topics:test.resource:topic'));
    commandTopic = await events.topic(cfg.get('events:kafka:topics:command:topic'));
    // subscribe all response events
    for (let eventName of cfg.get('events:kafka:topics:command:events')) {
      await commandTopic.on(eventName, eventListener);
    }

    server = new Server(cfg.get('server'), logger);
    db = await database.get(cfg.get('database:arango'), logger);
    await db.truncate();

    const config = cfg.get();
    delete config.database.nedb;  // not supported in default implementation

    // init redis client for subject index
    const redisConfig = cfg.get('redis');
    redisConfig.db = cfg.get('redis:db-indexes:db-subject');
    redisClient = createClient(redisConfig);
    await redisClient.connect();

    const cis = new CommandInterface(server, cfg, logger, events, redisClient);
    await server.bind('commandinterface', {
      service: CommandInterfaceServiceDefinition,
      implementation: cis
    } as BindConfig<CommandInterfaceServiceDefinition>);
    await server.start();

    channel = createChannel(cfg.get('client:commandinterface:address'));
    grpcClient = createGrpcClient({
      ...cfg.get('client:commandinterface'),
      logger
    }, CommandInterfaceServiceDefinition, channel);
  }, 30000);
  afterAll(async function teardown() {
    await server.stop();
    await events.stop();
  }, 30000);
  describe('check', () => {
    it('should return the status', async () => {
      let cmdPayload = encodeMsg({
        service: 'commandinterface'
      });

      const msg = {
        name: 'health_check',
        payload: cmdPayload
      };

      // check commandinterface service, should serve
      let resp = await grpcClient.command(msg);
      should.exist(resp);
      should.not.exist((resp as any).error);
      let data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.equal('SERVING');

      // should not serve if service does not exist
      cmdPayload = encodeMsg({
        service: 'does_not_exist'
      });
      // check none existing service, should throw error
      resp = await grpcClient.command({
        name: 'health_check',
        payload: cmdPayload
      });
      should.exist(resp);
      data = decodeMsg(resp);
      should.not.exist((resp as any).error); // no exception thrown
      should.exist(data.error);  // tolerant error handling
      data.error.code.should.equal(404);
      data.error.message.should.equal('Service does_not_exist does not exist');
      // should check all binded services if no service is specified
      cmdPayload = encodeMsg({
        service: ''
      });
      // check server, should serve
      resp = await grpcClient.command({
        name: 'health_check',
        payload: cmdPayload
      });
      should.not.exist((resp as any).error);
      should.exist(resp);
      data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.equal('SERVING');
    });
  });
  describe('reconfigure', () => {
    it('should return an error since it is not implemented', async () => {
      const resp = await grpcClient.command({
        name: 'reconfigure'
      });
      const decodedResp = decodeMsg(resp);
      should.exist(decodedResp.error);
      decodedResp.error.code.should.equal(501);
      decodedResp.error.message.should.equal('reconfigure is not implemented');
    });
  });
  describe('reset', () => {
    const docID = 'test/value';
    beforeAll(async () => {
      await db.insert('tests', {
        id: docID,
        value: 101,
      });
    });
    it('should clean the database', async () => {
      validate = (msg: any, eventName: string): void => {
        eventName.should.equal('resetResponse');
        should.exist(msg.services);
        msg.services.should.containEql('commandinterface');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.not.exist(payload.error);
      };
      const offset = await commandTopic.$offset(BigInt(-1));
      const resp = await grpcClient.command({
        name: 'reset'
      });
      await commandTopic.$wait(offset);

      const decodedResp = decodeMsg(resp);
      should.not.exist(decodedResp.error);
      should.exist(decodedResp.status);
      decodedResp.status.should.equal('Reset concluded successfully');

      const result = await db.findByID('tests', docID);
      result.should.be.length(0);
    });

  });

  describe('restore', () => {
    beforeAll(async function prepareKafka() {
      for (let i = 0; i < 100; i += 1) {
        testEvent.count = i;
        await testTopic.emit('testCreated', testEvent);
      }
    }, 30000);
    beforeEach(async () => {
      await db.truncate('tests');
    });
    it('should re-read all data from specified offset', async function restore() {
      validate = async (msg: any, eventName: string) => {
        eventName.should.equal('restoreResponse');
        should.exist(msg.services);
        msg.services.should.containEql('commandinterface');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.not.exist(payload.error);
        // restore conclusion is checked asynchronously, since it can take a variable
        // and potentially large amount of time
        const result = await db.find('tests', {}, {
          sort: {
            count: 1
          }
        });
        for (let i = 0; i < 100; i++) {
          result[i].count.should.equal(i);
        }
      };

      // waiting for restore conclusion
      const offset: bigint = await commandTopic.$offset(BigInt(-1));
      const resourceOffset: bigint = await testTopic.$offset(BigInt(-1));

      const cmdPayload = encodeMsg({
        data: [
          {
            entity: 'test',
            base_offset: Number(resourceOffset - BigInt(100)),
            ignore_offset: []
          }
        ]
      });

      const resp = await grpcClient.command({
        name: 'restore',
        payload: cmdPayload
      });
      should.not.exist((resp as any).error);

      await commandTopic.$wait(offset);
    }, 30000);
  });
  describe('version', () => {
    it('should return the version of the package and nodejs', async () => {
      validate = (msg: any, eventName: string): void => {
        eventName.should.equal('versionResponse');
        should.exist(msg.services);
        msg.services.should.containEql('commandinterface');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.exist(payload.version);
        payload.version.should.equal(process.env.npm_package_version);
        should.exist(payload.nodejs);
        payload.nodejs.should.equal(process.version);
      };
      const offset = await commandTopic.$offset(BigInt(-1));
      const resp = await grpcClient.command({
        name: 'version',
      });
      await commandTopic.$wait(offset);
      const data = decodeMsg(resp);
      should.exist(data.version);
      data.version.should.equal(process.env.npm_package_version);
      should.exist(data.nodejs);
      data.nodejs.should.equal(process.version);
    });
  });
  describe('setApiKey', () => {
    it('should set the provided authentication api key on configuration', async () => {
      validate = (msg: any, eventName: string): void => {
        eventName.should.equal('setApiKeyResponse');
        should.exist(msg.services);
        msg.services.should.containEql('commandinterface');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.exist(payload.status);
        payload.status.should.equal('ApiKey set successfully');
      };
      const offset = await commandTopic.$offset(BigInt(-1));
      const apiKeyPayload = encodeMsg({
        authentication: {
          apiKey: 'test-api-key-value'
        }
      });
      const resp = await grpcClient.command({
        name: 'set_api_key',
        payload: apiKeyPayload
      });
      await commandTopic.$wait(offset);
      const data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.equal('ApiKey set successfully');
    });
  });
  describe('configUpdate', () => {
    it('should update the provide configuration', async () => {
      validate = (msg: any, eventName: string): void => {
        eventName.should.equal('configUpdateResponse');
        should.exist(msg.services);
        msg.services.should.containEql('commandinterface');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.exist(payload.status);
        payload.status.should.equal('Configuration updated successfully');
      };
      const offset = await commandTopic.$offset(BigInt(-1));
      const configPayload = encodeMsg({
        authentication: {
        }
      });
      const resp = await grpcClient.command({
        name: 'config_update',
        payload: configPayload
      });
      await commandTopic.$wait(offset);
      const data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.equal('Configuration updated successfully');
    });
  });
  describe('flushCache', () => {
    it('should flush with given db_index and pattern', async () => {
      validate = (msg: any, eventName: string): void => {
        eventName.should.equal('flushCacheResponse');
        should.exist(msg.payload);
        const payload = decodeMsg(msg.payload);
        should.exist(payload.status);
        payload.status.should.startWith('Successfully flushed cache');
      };
      // store 120 keys to redis db index 3
      const redis = createClient({ database: 3 });
      await redis.connect();
      for (let i=0; i< 120; i++) {
        let key = 'user' + i;
        // set key and value as same
        redis.set(key, key);
      }
      redis.set('testKey', 'testValue');
      let allKeys = await redis.keys('*');
      const offset = await commandTopic.$offset(BigInt(-1));
      const flushCachePayload = encodeMsg({
        data:
        {
          db_index: 3,
          pattern: 'user'
        }
      });
      const resp = await grpcClient.command({
        name: 'flush_cache',
        payload: flushCachePayload
      });
      allKeys = await redis.keys('*');
      allKeys.length.should.equal(1);
      allKeys[0].should.equal('testKey');
      await commandTopic.$wait(offset);
      const data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.startWith('Successfully flushed cache');
    });
    it('flushdb should flush all keys in specific db_index when no pattern is specified', async () => {
      // store 3 keys to redis db index 3
      const redis = createClient({ database: 3 });
      await redis.connect();
      await redis.set('user1', 'user1');
      await redis.set('user2', 'user2');
      await redis.set('testKey2', 'testValue2');
      const flushCachePayload = encodeMsg({
        data:
        {
          db_index: 3 // No pattern is specified
        }
      });
      const resp = await grpcClient.command({
        name: 'flush_cache',
        payload: flushCachePayload
      });
      const keys = redis.keys('*');
      keys.should.be.empty();
      const data = decodeMsg(resp);
      should.exist(data.status);
      data.status.should.equal('Successfully flushed cache with DB index 3');
    });
  });
});
