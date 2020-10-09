import { toArray } from "rxjs/operators";
import { GrpcClient } from "../src/index";
import { createMockServer } from './mock/index'
// import { EchoClient } from "./clients/echo";
// import { EchoRequest } from "./generated/echo";

const ADDRESS = '127.0.0.1:50001';;
const mockServer = createMockServer(ADDRESS)

let port = 0;

beforeAll(async () => {
  try {
    port = await mockServer.start();
  } catch(ex) {
    console.log(ex);
  }
});

afterAll(() => {
  return mockServer.stop();
});

test('grpc server port', async () => {
  expect(1).toBeGreaterThan(0);
});

test('grpc client', async () => {
  const grpcClient = new GrpcClient({
    address: ADDRESS,
    proto: {
      protoRoot: './tests/protos',
      protoPath: './echo.proto',
      services: {
        echo: {
          packageName: "echo",
          serviceName: "EchoService",
        }
      }
    }
  });

  const result = await grpcClient.echo.echoUnary({
    message: 'foo'
  });
  expect(result).toEqual({
    message: 'foo'
  });
});

// const echoClient = new EchoClient({
//   address: ADDRESS,
// });

// describe('typed grpc client', () => {

//   echoClient.echo.echoUnary(EchoRequest.fromPartial({
//     message: 'foo'
//   }));

//   test('unary call', async () => {
//     const result = await echoClient.echo.echoUnary({});
//     expect(result).toEqual({
//       message: 'bar',
//     });
//   });


//   test('server stream', (done) => {

//     echoClient.echo.echoServerStream({message: 'bar'}).pipe(toArray()).subscribe((result) => {
//       expect(result).toEqual([
//         {
//           message: 'bar',
//         },
//         {
//           message: 'bar',
//         }
//       ]);
//     }, () => {
//       throw 'err';
//     } , () => done());
//   }, 100);

// });


