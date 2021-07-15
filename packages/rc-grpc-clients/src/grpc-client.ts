import { GrpcClient, GrpcServiceMethods } from '@restorecommerce/grpc-client';
import { Writer, Reader } from 'protobufjs/minimal';
import { DeleteRequest, ReadRequest, Sort, Sort_SortOrder, FieldFilter } from "./generated/io/restorecommerce/resource_base";
import { CommandRequest, Service as CommandInterfaceService } from "./generated/io/restorecommerce/commandinterface";
import { Empty } from "./generated/google/protobuf/empty";
import { Any } from './generated/google/protobuf/any';

export { DeleteRequest, ReadRequest, Sort, Sort_SortOrder, FieldFilter };

interface ResourceList<TResourceType> {
  items: TResourceType[];
  totalCount: number;
}

interface TResourceResponseType<TResourceType> {
  payload: TResourceType;
  status: {
    id: string,
    code: number,
    message: string
  }
}

interface ResourceListResponse<TResourceResponseType> {
  items: TResourceResponseType[];
  totalCount: number;
  operation_status: {
    code: number,
    message: string
  }
}

interface ResourceEncoder<TType> {
  encode(message: TType, writer: Writer): Writer;
  decode(input: Uint8Array | Reader, length?: number): TType;
}

type ExtractResourceType<TResourceList> = TResourceList extends ResourceList<infer TResourceType> ? TResourceType : never;

export interface CRUDService<T> extends Record<string, any> {
  Create(request: ResourceList<T>): Promise<ResourceListResponse<T>>;
  Read(request: ReadRequest): Promise<ResourceListResponse<T>>;
  Update(request: ResourceList<T>): Promise<ResourceListResponse<T>>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Upsert(request: ResourceList<T>): Promise<ResourceListResponse<T>>;
}

export function isCRUDService<TType extends object = any>(service: CRUDService<TType>): service is CRUDService<TType> {
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

  protected createCRUDMethods<TResourceListType extends ResourceList<any>, TResourceEncoder extends ResourceEncoder<TResourceListType>>(type: TResourceEncoder): GrpcServiceMethods<CRUDService<ExtractResourceType<TResourceListType>>> {
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
