export * from '@restorecommerce/grpc-client';
import { GrpcClient, GrpcServiceMethods } from '@restorecommerce/grpc-client';
import { Writer, Reader } from 'protobufjs/minimal';
import { DeleteRequest, ReadRequest } from "./generated/io/restorecommerce/resource_base";
import { CommandRequest, Service as CommandInterfaceService } from "./generated/io/restorecommerce/commandinterface";
import { Empty } from "./generated/google/protobuf/empty";
import { Any } from './generated/google/protobuf/any';

interface ResourceType<T extends Object> {
  encode(message: T, writer: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number): T;
}

export interface CRUDUService<T extends object> extends Record<string, any> {
  Create(request: T): Promise<T>;
  Read(request: ReadRequest): Promise<T>;
  Update(request: T): Promise<T>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Upsert(request: T): Promise<T>;
}

export class RestoreCommerceGrpcClient extends GrpcClient {

  command = this.createService<CommandInterfaceService>({
    packageName: 'io.restorecommerce.commandinterface',
    serviceName: 'Service',
    methods: {
      Command: {
        type: 'unary',
        serialize: CommandRequest.encode,
        deserialize: Any.decode
      }
    }
  });

  protected createCRUDUMethods<TType extends object>(type: ResourceType<TType>): GrpcServiceMethods<CRUDUService<TType>> {
    return {
      Create: {
        type: 'unary',
        serialize: type.encode as any, // TODO Unwrapping of TType not working correctly
        deserialize: type.decode
      },
      Delete: {
        type: 'unary',
        serialize: DeleteRequest.encode,
        deserialize: Empty.decode
      },
      Upsert: {
        type: 'unary',
        serialize: type.encode as any,
        deserialize: type.decode
      },
      Read: {
        type: 'unary',
        serialize: ReadRequest.encode,
        deserialize: type.decode
      },
      Update: {
        type: 'unary',
        serialize: type.encode as any,
        deserialize: type.decode
      },
    };
  }
}
