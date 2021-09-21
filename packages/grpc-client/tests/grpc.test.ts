import { GrpcClient } from '../src/index';
import { createMockServer } from './mock/index'
import { randomBytes } from 'crypto';
import { Observable } from 'rxjs';
import { createLogger } from '@restorecommerce/logger';
import { Readable, Transform } from 'stream';

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
  const grpcClient = new GrpcClient({
    address: ADDRESS,
    proto: {
      protoRoot: './tests/protos',
      protoPath: './echo/echo.proto',
      services: {
        echo: {
          packageName: 'echo',
          serviceName: 'EchoService',
        }
      }
    },
    omittedFields: {
      EchoRequest: ['message', 'test']
    }
  }, logger);

  // observable config set to true
  const observableGrpcClient = new GrpcClient({
    address: ADDRESS,
    proto: {
      protoRoot: './tests/protos',
      protoPath: './echo/echo.proto',
      services: {
        echo: {
          packageName: 'echo',
          serviceName: 'EchoService',
        }
      }
    },
    omittedFields: {
      EchoRequest: ['message', 'test']
    },
    observable: true,
  }, logger);

  it('should send a unary request and receive response', async () => {
    const data = 'Test String message';

    const result = await grpcClient.echo.echoUnary({
      message: data,
      test: marshallProtobufAny({ testAny: 'testMessage' })
    });

    expect(result).toHaveProperty('message');
    expect(result.message).toEqual(data);
    const decodedAnyData = JSON.parse(result.test.value.toString());
    expect(decodedAnyData.testAny).toEqual('testMessage');
  });

  it('should send a client-stream request and receive response', async (done) => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex'));
    const transformBuffObj = () => {
      return new Transform({
        objectMode: true,
        transform: (chunk, _, done) => {
          const data = {
            message: chunk,
          };
          done(null, data);
        }
      });
    };
    const clientStream = Readable.from(buffer.toString());
    const result = await grpcClient.echo.echoClientStream(clientStream.pipe(transformBuffObj()));

    expect(result).toHaveProperty('message');
    expect(result.message).toEqual(buffer.toString('utf-8'));
    done();
  });

  it('should send request and receive a server-stream response', async (done) => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex'));
    const result = await grpcClient.echo.echoServerStream({
      message: buffer
    });
    let response = '';
    result.on('data', (data) => {
      response += data.message;
    });

    await new Promise((resolve, reject) => {
      result.on('end', () => {
        resolve(0);
      });
    });
    expect(response).toEqual(buffer.toString('utf-8'));
    done();
  });

  it('should send observable client-stream request and receive response', async () => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex'));

    const result = await observableGrpcClient.echo.echoClientStream(bufferToObservable(buffer));

    expect(result).toHaveProperty('message');
    expect(result.message).toEqual(buffer.toString('utf-8'));
  });

  it('should send request and receive a observable server-stream response', async (done) => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex'));

    const result = await observableGrpcClient.echo.echoServerStream({
      message: buffer
    });

    let response = '';
    result.subscribe(data => {
      expect(data).toHaveProperty('message');
      response += data.message;
    }, undefined, () => {
      expect(response).toEqual(buffer.toString('utf-8'));
      done();
    });
  });

  it('should send and receive a bidi-stream request', async (done) => {
    const buffer = Buffer.from(randomBytes(1 << 16).toString('hex'));

    const result = await grpcClient.echo.echoBidiStream(bufferToObservable(buffer));

    let response = '';
    result.subscribe(data => {
      expect(data).toHaveProperty('message');
      response += data.message;
    }, undefined, () => {
      expect(response).toEqual(buffer.toString('utf-8'));
      done();
    })
  });
});
