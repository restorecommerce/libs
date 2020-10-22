import { GrpcClient, GrpcServiceMethods } from '@restorecommerce/grpc-client';
import { Writer, Reader } from 'protobufjs/minimal';
import { DeleteRequest, ReadRequest } from "./generated/io/restorecommerce/resource_base";
import { CommandRequest, Service as CommandInterfaceService } from "./generated/io/restorecommerce/commandinterface";
import { Empty } from "./generated/google/protobuf/empty";
import { Any } from './generated/google/protobuf/any';
import { ApiKey, Subject } from './generated/io/restorecommerce/auth';

export { DeleteRequest, ReadRequest };

interface ResourceType<TType> {
  encode(message: List<TType>, writer: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number): List<TType>;
}
export interface List<T> {
  items: T[];
  totalCount: number;
}

export interface CruudService<T> extends Record<string, any> {
  Create(request: List<T>): Promise<List<T>>;
  Read(request: ReadRequest): Promise<List<T>>;
  Update(request: List<T>): Promise<List<T>>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Upsert(request: List<T>): Promise<List<T>>;
}

export function isCruudService<TType extends object = any>(service: CruudService<TType>): service is CruudService<TType> {
  return (
    service &&
    typeof service === 'object' &&
    typeof service['Create'] === 'function' &&
    typeof service['Read'] === 'function' &&
    typeof service['Update'] === 'function' &&
    typeof service['Upsert'] === 'function' &&
    typeof service['Delete'] === 'function'
  );
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

  protected createCRUDMethods<TType>(type: ResourceType<TType>): GrpcServiceMethods<CruudService<TType>> {
    return {
      Create: {
        type: 'unary',
        serialize: type.encode as any, // TODO Unwrapping of TType not working correctly
        deserialize: type.decode
      },
      Delete: {
        type: 'unary',
        serialize: DeleteRequest.encode as any,
        deserialize: Empty.decode
      },
      Upsert: {
        type: 'unary',
        serialize: type.encode as any,
        deserialize: type.decode
      },
      Read: {
        type: 'unary',
        serialize: ReadRequest.encode as any,
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
