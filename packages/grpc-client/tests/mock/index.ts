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
        call.write(call.request);
        call.write(call.request);
        call.end();
      },
    }
  });
  return server;
}
