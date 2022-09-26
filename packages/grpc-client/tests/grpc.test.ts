import { createChannel, createClient } from '../src/index';
import { createMockServer } from './mock/index'
import { randomBytes } from 'crypto';
import { Observable } from 'rxjs';
import { createLogger } from '@restorecommerce/logger';
import {
  EchoServiceDefinition,
  EchoServiceClient,
  DeepPartial
} from './generated/echo/echo';

const ADDRESS = '127.0.0.1:50001';
const mockServer = createMockServer(ADDRESS)

beforeAll(async () => {
  try {
    await mockServer.start();
  } catch (ex) {
    console.log(ex);
  }
});

afterAll(async () => {
  return await mockServer.stop();
});

const chunkSize = 1 << 10;

function bufferToObservable(buffer: Buffer): Observable<any> {
  return new Observable<any>((subscriber) => {
    for (let i = 0; i < Math.ceil(buffer.length / chunkSize); i++) {
      subscriber.next({
        message: buffer.slice(i * chunkSize, (i + 1) * chunkSize)
      })
    }
    subscriber.complete();
  });
}

/**
 * Marshall any payload to google.protobuf.Any
 */
export const marshallProtobufAny = (data: any): any => {
  return {
    type_url: '',
    value: Buffer.from(JSON.stringify(data))
  };
};

const toAsync = async function* <T>(requests: DeepPartial<T>[]): AsyncIterable<DeepPartial<T>> {
  for (const request of requests) {
    yield request;
  }
};

describe('grpc client', () => {
  const loggerConfig = {
    console: {
      handleExceptions: false,
      level: 'debug',
      colorize: true,
      prettyPrint: true
    }
  };
  const logger = createLogger(loggerConfig);
  const channel = createChannel(ADDRESS);
  const grpcClient: EchoServiceClient = createClient({
    omittedFields: {
      EchoRequest: ['message', 'test']
    },
    logger
  }, EchoServiceDefinition, channel);

  it('should send a unary request and receive response', async () => {
    const data = 'Test String message';

    const result = await grpcClient.echoUnary({
      message: data,
      test: marshallProtobufAny({ testAny: 'testMessage' })
    });

    expect(result).toHaveProperty('message');
    expect(result.message).toEqual(data);
    const decodedAnyData = JSON.parse(result.test!.value.toString());
    expect(decodedAnyData.testAny).toEqual('testMessage');
    return Promise.resolve({});
  });

  it('should send a client-stream request and receive response', async () => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex')).toString();
    const result = await grpcClient.echoClientStream(toAsync([{
      message: buffer
    }]));

    expect(result).toHaveProperty('message');
    expect(result.message).toEqual(buffer);
    return Promise.resolve({});
  });

  it('should send request and receive a server-stream response', async () => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex')).toString();
    const result = grpcClient.echoServerStream({
      message: buffer
    });

    let response = '';
    for await (const data of result) {
      response += data.message;
    }

    expect(response).toEqual(buffer);
    return Promise.resolve({});
  });

  it('should send and receive a bidi-stream request', async () => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex')).toString();

    const result = grpcClient.echoBidiStream(toAsync([{
      message: buffer
    }]));

    let response = '';
    for await (const data of result) {
      response += data.message;
    }

    expect(response).toEqual(buffer);
  });
});
