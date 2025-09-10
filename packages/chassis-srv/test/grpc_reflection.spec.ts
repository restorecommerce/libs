import * as should from 'should';
import { createLogger } from '@restorecommerce/logger';
import * as chassis from '../src';
import { Server, buildReflectionService } from '../src';
import { createClient } from '@restorecommerce/grpc-client';
import {
  protoMetadata
} from '@restorecommerce/rc-grpc-clients/dist/generated/test/test';
import { ServerReflectionService } from 'nice-grpc-server-reflection';
import { Channel, createChannel } from 'nice-grpc';
import {
  ServerReflectionDefinition,
  ServerReflectionClient,
  DeepPartial,
} from '@restorecommerce/rc-grpc-clients/dist/generated/grpc/reflection/v1alpha/reflection';

const toAsync = async function* <T>(requests: DeepPartial<T>[]): AsyncIterable<DeepPartial<T>> {
  for (const request of requests) {
    yield request;
  }
};

describe('binding the grpc.ServerReflection service', () => {
  let server: Server;
  before(async () => {
    await chassis.config.load(process.cwd() + '/test');
    const cfg = await chassis.config.get();
    const logger = createLogger(cfg.get('logger'));
    server = new Server(cfg.get('server'), logger);

    const reflectionService = buildReflectionService([
      {
        descriptor: protoMetadata.fileDescriptor
      }
    ]);

    await server.bind('reflection', {
      service: ServerReflectionService,
      implementation: reflectionService
    });

    await server.start();
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  });

  after(async function end() {
    this.timeout(4000);
    await server.stop();
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
  });
  describe('calling endpoint ServerReflectionInfo', () => {
    let client: ServerReflectionClient;
    let channel: Channel;
    beforeEach(async () => {
      const cfg = await chassis.config.get();
      const logger = createLogger(cfg.get('logger'));
      channel = createChannel(cfg.get('client:reflection:address'));
      client = createClient({
        ...cfg.get('client:reflection'),
        logger
      }, ServerReflectionDefinition, channel);
    });
    afterEach(async () => {
      await channel.close();
    });
    describe('with fileByFilename request', () => {
      it('should return file by file name response',
        async () => {
          const request = client.serverReflectionInfo(toAsync([{
            fileByFilename: 'test/test.proto'
          }]));

          for await (const data of request) {
            should.exist(data.fileDescriptorResponse);
            should.exist(data.fileDescriptorResponse.fileDescriptorProto);
            data.fileDescriptorResponse.fileDescriptorProto.should.be.length(1);
          }
        });
    });
    describe('with fileContainingSymbol request', () => {
      it('should return file containing path / symbol response',
        async () => {
          const request = client.serverReflectionInfo(toAsync([{
            fileContainingSymbol: 'test.Test'
          }]));

          for await (const data of request) {
            should.exist(data);
            should.exist(data.fileDescriptorResponse);
            should.exist(data.fileDescriptorResponse.fileDescriptorProto);
            data.fileDescriptorResponse.fileDescriptorProto.should.be.length(1);
          }
        });
    });
    describe('with allExtensionNumbersOfType request', () => {
      it('should get allExtensionsNumbers response',
        async () => {
          const request = client.serverReflectionInfo(toAsync([{
            allExtensionNumbersOfType: 'test.ExtendMe'
          }]));

          for await (const data of request) {
            should.exist(data);
            should.exist(data.allExtensionNumbersResponse);
            should.exist(data.allExtensionNumbersResponse.baseTypeName);
            data.allExtensionNumbersResponse.baseTypeName.should.equal('test.ExtendMe');
          }
        });
    });
    describe('with listServices request', () => {
      it('should list all exposed services',
        async () => {
          const request = client.serverReflectionInfo(toAsync([{
            listServices: ''
          }]));

          for await (const data of request) {
            should.exist(data);
            should.exist(data.listServicesResponse);
            should.exist(data.listServicesResponse.service);
            data.listServicesResponse.service.should.be.length(1);
          }
        });
    });
  });
});
