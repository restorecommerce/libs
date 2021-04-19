import { GrpcMockServer } from './server'


export function createMockServer(address: string) {
  const server = new GrpcMockServer(address);
  server.addService({
    protoRoot: './tests/protos',
    protoPath: 'echo.proto',
    packageName: "echo",
    serviceName: "EchoService",
    implementations: {
      echoUnary: (call: any, callback: any) => {
        callback(null, call.request);
      },
      echoServerStream: (call: any, callback: any) => {
        const chunkSize = 1 << 10;

        for (let i = 0; i < Math.ceil(call.request.message.length / chunkSize); i++) {
          call.write({
            message: call.request.message.substr(i * chunkSize, chunkSize)
          });
        }

        call.end();
      },
      echoClientStream: (call: any, callback: any) => {
        let result = '';

        call.on('data', (data) => {
          result += data.message;
        });

        call.on('end', () => {
          callback(null, {message: result});
        });
      },
      echoBidiStream: (call: any, callback: any) => {
        call.on('data', call.write);
        call.on('end', call.end);
      },
    }
  });
  return server;
}
