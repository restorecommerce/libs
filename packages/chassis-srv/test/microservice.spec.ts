import * as should from 'should';
import {forEach} from 'remeda';
import { createLogger } from '@restorecommerce/logger';
import * as chassis from '../src/index.js';
import { createClient } from '@restorecommerce/grpc-client';
import { TestDefinition, TestClient } from '@restorecommerce/rc-grpc-clients/dist/generated/test/test.js';
import { TestServiceImplementation, TestDefinition as ServerTestDefinition } from '@restorecommerce/rc-grpc-clients/dist/generated-server/test/test.js';
import { BindConfig } from '../src/microservice/transport/provider/grpc/index.js';
import {
  StreamDefinition,
  StreamServiceImplementation,
  StreamClient
} from '@restorecommerce/rc-grpc-clients/dist/generated/test/test.js';
import { Channel, createChannel } from 'nice-grpc';
import { DeepPartial } from '@restorecommerce/rc-grpc-clients/dist/generated/grpc/reflection/v1/reflection.js';
import { it, describe, beforeAll, afterAll } from 'vitest';

const config = chassis.config;
const Server = chassis.Server;
const grpc = chassis.grpc;

const status = {
  code: 200,
  message: 'success'
};

export const testService: TestServiceImplementation = {
  test: async (request) => {
    request!.value!.should.be.equal('hello');
    return {
      result: 'welcome',
      status
    };
  },
  create: async (request) => {
    return {
      items: request!.items!.map(item => ({
        payload: item,
        status
      })),
      total_count: request!.items!.length,
      operation_status: status
    };
  },
  throw: async () => {
    throw new Error('forced error');
  },
  notFound: async () => ({
    status: {
      code: 404,
      message: 'test not found'
    }
  }),
  notImplemented: async () => ({}),
  read: async () => ({
    items: [],
    total_count: 0,
  })
};

const streamService: StreamServiceImplementation = {
  requestStream: async (request) => {
    let result = '';
    for await (const item of request) {
      result += item.value;
    }
    result.should.equal('ping');
    return {
      result: 'pong',
      status
    };
  },
  async* responseStream(request) {
    should.exist(request);
    should.exist(request?.value);
    request!.value!.should.equal('ping');
    for (let i = 0; i < 3; i += 1) {
      yield {result: `${i}`};
    }
  },
  async* biStream(request) {
    for await (const item of request) {
      should.exist(item);
      should.exist(item.value);
      item!.value!.should.equal('ping');
    }
    yield {result: 'pong'};
  }
};

const toAsync = async function* <T>(requests: DeepPartial<T>[]): AsyncIterable<DeepPartial<T>> {
  for (const request of requests) {
    yield request;
  }
};

describe('microservice.Server', () => {
  let server: chassis.Server;
  describe('constructing the sever', () => {
    it('should return a server when provided with correct config',
      async () => {
        await config.load(process.cwd() + '/test');
        const cfg = await config.get();
        const logger = createLogger(cfg.get('logger'));
        server = new Server(cfg.get('server'), logger);
        should.exist(server);
        should.exist(server.logger);
        should.exist(server.logger.log);
        const levels = [
          'error'
        ];
        forEach(levels, (level) => {
          should.exist(server.logger[level]);
        });
        should.exist(server.transport);
        should.exist(server.transport.grpcTest);
        server.transport.grpcTest.should.be.an.instanceof(grpc.Server);
      });
  });
  describe('calling bind', () => {
    it('should wrap a service and create endpoints for each object function',
      async () => {
        await server.bind('test', {
          service: ServerTestDefinition,
          implementation: testService
        } as BindConfig<ServerTestDefinition>);
        await server.bind('stream', {
          service: StreamDefinition,
          implementation: streamService
        } as BindConfig<StreamDefinition>);
      });
  });
  describe('calling start', () => {
    it('should expose the created endpoints via transports',
      async () => {
        await config.load(process.cwd() + '/test');
        const cfg = await config.get();
        const logger = createLogger(cfg.get('logger'));
        let serving = false;
        server.on('serving', () => {
          serving = !serving;
        });
        await server.start();
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 1000);
        });
        serving.should.equal(true);
        const testChannel = createChannel(cfg.get('client:test:address'));
        const testClient: TestClient = createClient({
          ...cfg.get('client:test'),
          logger
        }, TestDefinition, testChannel);
        should.exist(testClient);
        // --- 'test' endpoint ---
        const testResult = await testClient.test({value: 'hello'});
        should.exist(testResult.status);
        testResult.status!.code!.should.equal(200);
        testResult.status!.message!.should.equal('success');
        should.exist(testResult.result);
        testResult.result!.should.be.equal('welcome');

        // --- 'testCreate' endpoint ---
        const msg: any = {
          testKey: 'testVal'
        };
        const msgBuffer: any = Buffer.from(JSON.stringify(msg));
        const createResult = await testClient.create({
          items: [{
            value: 'helloWorld123',
            data: {value: msgBuffer}
          }]
        });
        should.exist(createResult.operationStatus);
        createResult.operationStatus!.code!.should.equal(200);
        createResult.operationStatus!.message!.should.equal('success');
        should.exist(createResult.items);
        // verify decoded google.protobuf.any buffered response
        createResult.items![0].payload!.value!.should.equal('helloWorld123');
        const decodedBuffResp = JSON.parse(createResult.items![0].payload!.data!.value!.toString());
        decodedBuffResp.testKey.should.equal('testVal');

        // --- 'throw' endpoint ---
        const throwResult = await testClient.throw({value: 'hello'});
        should.exist(throwResult.status);
        throwResult.status!.code!.should.equal(500);
        throwResult.status!.message!.should.equal('forced error');
        should.not.exist(throwResult.result);

        // --- 'notFound' endpoint ---
        const notFoundResult = await testClient.notFound({value: 'hello'});
        should.exist(notFoundResult.status);
        notFoundResult.status!.code!.should.equal(404);
        notFoundResult.status!.message!.should.equal('test not found');
        should.not.exist(notFoundResult.result);

        // 'requestStream'
        const streamChannel = createChannel(cfg.get('client:stream:address'));
        const streamClient: StreamClient = createClient({
          ...cfg.get('client:stream'),
          logger
        }, StreamDefinition, streamChannel);
        const streamResult = await streamClient.requestStream(toAsync([{
          value: 'ping'
        }]));
        should.exist(streamResult.status);
        streamResult.status!.code!.should.equal(200);
        streamResult.status!.message!.should.equal('success');
        should.exist(streamResult);
        should.exist(streamResult.result);
        streamResult.result!.should.be.equal('pong');

        // 'responseStream'
        const responseStreamRequest = streamClient.responseStream({
          value: 'ping'
        });
        let concatDataResp = [];
        for await (const response of responseStreamRequest) {
          concatDataResp.push(response.result!);
        }
        concatDataResp.should.deepEqual(['0', '1', '2']);

        // 'biStream'
        const biStreamRequest = await streamClient.biStream(toAsync([{
          value: 'ping'
        }]));
        for await (const response of biStreamRequest) {
          response.result!.should.be.equal('pong');
        }
      });
  });

  describe('connecting with multiple clients', () => {
    it('should be possible', async () => {
      const numClients = 3;
      const clients: TestClient[] = [];
      const cfg = await chassis.config.get();
      for (let i = 0; i < numClients; i += 1) {
        const channel = createChannel(cfg.get('client:test:address'));
        const client = createClient({
          ...cfg.get('client:test'),
          logger: createLogger(cfg.get('logger'))
        }, TestDefinition, channel);
        clients.push(client);
      }

      const reqs = [];
      for (let i = 0; i < numClients; i += 1) {
        reqs.push(clients[i].test({
          value: 'hello',
        }));
      }

      const resps = await Promise.all(reqs);
      for (let i = 0; i < resps.length; i += 1) {
        const response: any = await resps[i];
        should.exist(response.status);
        response.status!.code!.should.equal(200);
        response.status!.message!.should.equal('success');
        should.exist(response.result);
        response.result!.should.be.equal('welcome');
      }
    });
  });
  describe('calling end', () => {
    it('should stop the server and no longer provide endpoints',
      async () => {
        await server.stop();
      });
  });
});

describe('microservice.Client', () => {
  let channel: Channel;
  let client: TestClient;
  let server: chassis.Server;
  describe('constructing the client', () => {
    it('should create a client when providing correct configuration',
      async () => {
        await config.load(process.cwd() + '/test');
        const cfg = await chassis.config.get();
        channel = createChannel(cfg.get('client:test:address'));
        client = createClient({
          ...cfg.get('client:test'),
          logger: createLogger(cfg.get('logger'))
        }, TestDefinition, channel);
        should.exist(client);
      });
  });
  describe('with running server', () => {
    beforeAll(async () => {
      await config.load(process.cwd() + '/test');
      const cfg = await config.get();
      const logger = createLogger(cfg.get('logger'));
      server = new Server(cfg.get('server'), logger);
      await server.bind('test', {
        service: ServerTestDefinition,
        implementation: testService
      } as BindConfig<ServerTestDefinition>);
      await server.start();
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
    });
    afterAll(async () => {
      await server.stop();
    });
    describe('connect', () => {
      it('should return a service object with endpoint functions',
        async () => {
          should.exist(client);
          should.exist(client.test);
          should.exist(client.throw);
          should.exist(client.notImplemented);
          should.exist(client.notFound);

          // test
          let result = await client.test({
            value: 'hello',
          });
          should.exist(result);
          should.exist(result.status);
          result.status!.code!.should.equal(200);
          result.status!.message!.should.equal('success');
          should.exist(result.result);
          result.result!.should.equal('welcome');

          // test with timeout
          await config.load(process.cwd() + '/test');
          const cfg = await config.get();
          cfg.set('client:test:timeout', 5000);
          const channel = createChannel(cfg.get('client:test:address'));
          const newGrpcClient = createClient({
            ...cfg.get('client:test'),
            logger: createLogger(cfg.get('logger'))
          }, TestDefinition, channel);
          result = await newGrpcClient.test({
            value: 'hello',
          });
          should.exist(result);
          should.exist(result.status);
          result.status!.code!.should.equal(200);
          result.status!.message!.should.equal('success');
          should.exist(result.result);
          result.result!.should.equal('welcome');
        });
    });
    describe('end', () => {
      it('should disconnect from all endpoints', async () => {
        await channel.close();
      });
    });
  });
  describe('without a running server', () => {
    describe('connect', () => {
      it('Call should not be created from a closed channel ',
        async () => {
          should.exist(client);
          should.exist(client.test);
          should.exist(client.throw);
          should.exist(client.notImplemented);

          // test
          await config.load(process.cwd() + '/test');
          const cfg = await config.get();
          cfg.set('client:test:timeout', 1);
          const channel = createChannel(cfg.get('client:test:address'));
          const timeoutGrpcClient = createClient({
            ...cfg.get('client:test'),
            logger: createLogger(cfg.get('logger'))
          }, TestDefinition, channel);
          try {
            await timeoutGrpcClient.test({
              value: 'hello',
            });
          } catch (err) {
            should.exist(err);
            err.message!.should.equal('/test.Test/Test DEADLINE_EXCEEDED: Deadline exceeded');
          }
        });
    });
    describe('end', () => {
      it('should disconnect from all endpoints',
        async () => {
          await channel.close();
        });
    });
  });
});
