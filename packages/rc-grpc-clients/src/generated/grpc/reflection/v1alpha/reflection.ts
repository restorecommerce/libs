/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * / The message sent by the client when calling ServerReflectionInfo method.
 */
export interface ServerReflectionRequest {
  host: string;
  /**
   * / Find a proto file by the file name.
   */
  fileByFilename: string | undefined;
  /**
   * / Find the proto file that declares the given fully-qualified symbol name.
   * / This field should be a fully-qualified symbol name
   * / (e.g. <package>.<service>[.<method>] or <package>.<type>).
   */
  fileContainingSymbol: string | undefined;
  /**
   * / Find the proto file which defines an extension extending the given
   * / message type with the given field number.
   */
  fileContainingExtension?: ExtensionRequest | undefined;
  /**
   * / Finds the tag numbers used by all known extensions of extendee_type, and
   * / appends them to ExtensionNumberResponse in an undefined order.
   * / Its corresponding method is best-effort: it's not guaranteed that the
   * / reflection service will implement this method, and it's not guaranteed
   * / that this method will provide all extensions. Returns
   * / StatusCode::UNIMPLEMENTED if it's not implemented.
   * / This field should be a fully-qualified type name. The format is
   * / <package>.<type>
   */
  allExtensionNumbersOfType: string | undefined;
  /**
   * / List the full names of registered services. The content will not be
   * / checked.
   */
  listServices: string | undefined;
}

/**
 * / The type name and extension number sent by the client when requesting
 * / file_containing_extension.
 */
export interface ExtensionRequest {
  /**
   * / Fully-qualified type name. The format should be <package>.<type>
   */
  containingType: string;
  extensionNumber: number;
}

/**
 * / The message sent by the server to answer ServerReflectionInfo method.
 */
export interface ServerReflectionResponse {
  validHost: string;
  originalRequest?: ServerReflectionRequest;
  /**
   * / This message is used to answer file_by_filename, file_containing_symbol,
   * / file_containing_extension requests with transitive dependencies. As
   * / the repeated label is not allowed in oneof fields, we use a
   * / FileDescriptorResponse message to encapsulate the repeated fields.
   * / The reflection service is allowed to avoid sending FileDescriptorProtos
   * / that were previously sent in response to earlier requests in the stream.
   */
  fileDescriptorResponse?: FileDescriptorResponse | undefined;
  /**
   * / This message is used to answer all_extension_numbers_of_type requst.
   */
  allExtensionNumbersResponse?: ExtensionNumberResponse | undefined;
  /**
   * / This message is used to answer list_services request.
   */
  listServicesResponse?: ListServiceResponse | undefined;
  /**
   * / This message is used when an error occurs.
   */
  errorResponse?: ErrorResponse | undefined;
}

/**
 * / Serialized FileDescriptorProto messages sent by the server answering
 * / a file_by_filename, file_containing_symbol, or file_containing_extension
 * / request.
 */
export interface FileDescriptorResponse {
  /**
   * / Serialized FileDescriptorProto messages. We avoid taking a dependency on
   * / descriptor.proto, which uses proto2 only features, by making them opaque
   * / bytes instead.
   */
  fileDescriptorProto: Buffer[];
}

/**
 * / A list of extension numbers sent by the server answering
 * / all_extension_numbers_of_type request.
 */
export interface ExtensionNumberResponse {
  /**
   * / Full name of the base type, including the package name. The format
   * / is <package>.<type>
   */
  baseTypeName: string;
  extensionNumber: number[];
}

/**
 * / A list of ServiceResponse sent by the server answering list_services request.
 */
export interface ListServiceResponse {
  /**
   * / The information of each service may be expanded in the future, so we use
   * / ServiceResponse message to encapsulate it.
   */
  service: ServiceResponse[];
}

/**
 * / The information of a single service used by ListServiceResponse to answer
 * / list_services request.
 */
export interface ServiceResponse {
  /**
   * / Full name of a registered service, including its package name. The format
   * / is <package>.<service>
   */
  name: string;
  /**
   *  Added a label to map for the service name, since the same service name
   *  could be used across multiple services.
   */
  label: string;
}

/**
 * / The error code and error message sent by the server when an error occurs.
 */
export interface ErrorResponse {
  /**
   * / This field uses the error codes defined in grpc::StatusCode.
   */
  errorCode: number;
  errorMessage: string;
}

const baseServerReflectionRequest: object = {
  host: "",
};

const baseExtensionRequest: object = {
  containingType: "",
  extensionNumber: 0,
};

const baseServerReflectionResponse: object = {
  validHost: "",
};

const baseFileDescriptorResponse: object = {
};

const baseExtensionNumberResponse: object = {
  baseTypeName: "",
  extensionNumber: 0,
};

const baseListServiceResponse: object = {
};

const baseServiceResponse: object = {
  name: "",
  label: "",
};

const baseErrorResponse: object = {
  errorCode: 0,
  errorMessage: "",
};

export interface ServerReflection {

  /**
   * / The reflection service is structured as a bidirectional stream, ensuring
   * / all related requests go to a single server.
   */
  ServerReflectionInfo(request: Observable<ServerReflectionRequest>): Observable<ServerReflectionResponse>;

}

export const protobufPackage = 'grpc.reflection.v1alpha'

export const ServerReflectionRequest = {
  encode(message: ServerReflectionRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.host);
    if (message.fileByFilename !== undefined) {
      writer.uint32(26).string(message.fileByFilename);
    }
    if (message.fileContainingSymbol !== undefined) {
      writer.uint32(34).string(message.fileContainingSymbol);
    }
    if (message.fileContainingExtension !== undefined) {
      ExtensionRequest.encode(message.fileContainingExtension, writer.uint32(42).fork()).ldelim();
    }
    if (message.allExtensionNumbersOfType !== undefined) {
      writer.uint32(50).string(message.allExtensionNumbersOfType);
    }
    if (message.listServices !== undefined) {
      writer.uint32(58).string(message.listServices);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ServerReflectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerReflectionRequest } as ServerReflectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 3:
          message.fileByFilename = reader.string();
          break;
        case 4:
          message.fileContainingSymbol = reader.string();
          break;
        case 5:
          message.fileContainingExtension = ExtensionRequest.decode(reader, reader.uint32());
          break;
        case 6:
          message.allExtensionNumbersOfType = reader.string();
          break;
        case 7:
          message.listServices = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServerReflectionRequest {
    const message = { ...baseServerReflectionRequest } as ServerReflectionRequest;
    if (object.host !== undefined && object.host !== null) {
      message.host = String(object.host);
    } else {
      message.host = "";
    }
    if (object.fileByFilename !== undefined && object.fileByFilename !== null) {
      message.fileByFilename = String(object.fileByFilename);
    } else {
      message.fileByFilename = undefined;
    }
    if (object.fileContainingSymbol !== undefined && object.fileContainingSymbol !== null) {
      message.fileContainingSymbol = String(object.fileContainingSymbol);
    } else {
      message.fileContainingSymbol = undefined;
    }
    if (object.fileContainingExtension !== undefined && object.fileContainingExtension !== null) {
      message.fileContainingExtension = ExtensionRequest.fromJSON(object.fileContainingExtension);
    } else {
      message.fileContainingExtension = undefined;
    }
    if (object.allExtensionNumbersOfType !== undefined && object.allExtensionNumbersOfType !== null) {
      message.allExtensionNumbersOfType = String(object.allExtensionNumbersOfType);
    } else {
      message.allExtensionNumbersOfType = undefined;
    }
    if (object.listServices !== undefined && object.listServices !== null) {
      message.listServices = String(object.listServices);
    } else {
      message.listServices = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServerReflectionRequest>): ServerReflectionRequest {
    const message = { ...baseServerReflectionRequest } as ServerReflectionRequest;
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    } else {
      message.host = "";
    }
    if (object.fileByFilename !== undefined && object.fileByFilename !== null) {
      message.fileByFilename = object.fileByFilename;
    } else {
      message.fileByFilename = undefined;
    }
    if (object.fileContainingSymbol !== undefined && object.fileContainingSymbol !== null) {
      message.fileContainingSymbol = object.fileContainingSymbol;
    } else {
      message.fileContainingSymbol = undefined;
    }
    if (object.fileContainingExtension !== undefined && object.fileContainingExtension !== null) {
      message.fileContainingExtension = ExtensionRequest.fromPartial(object.fileContainingExtension);
    } else {
      message.fileContainingExtension = undefined;
    }
    if (object.allExtensionNumbersOfType !== undefined && object.allExtensionNumbersOfType !== null) {
      message.allExtensionNumbersOfType = object.allExtensionNumbersOfType;
    } else {
      message.allExtensionNumbersOfType = undefined;
    }
    if (object.listServices !== undefined && object.listServices !== null) {
      message.listServices = object.listServices;
    } else {
      message.listServices = undefined;
    }
    return message;
  },
  toJSON(message: ServerReflectionRequest): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.fileByFilename !== undefined && (obj.fileByFilename = message.fileByFilename);
    message.fileContainingSymbol !== undefined && (obj.fileContainingSymbol = message.fileContainingSymbol);
    message.fileContainingExtension !== undefined && (obj.fileContainingExtension = message.fileContainingExtension ? ExtensionRequest.toJSON(message.fileContainingExtension) : undefined);
    message.allExtensionNumbersOfType !== undefined && (obj.allExtensionNumbersOfType = message.allExtensionNumbersOfType);
    message.listServices !== undefined && (obj.listServices = message.listServices);
    return obj;
  },
};

export const ExtensionRequest = {
  encode(message: ExtensionRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.containingType);
    writer.uint32(16).int32(message.extensionNumber);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExtensionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtensionRequest } as ExtensionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containingType = reader.string();
          break;
        case 2:
          message.extensionNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRequest {
    const message = { ...baseExtensionRequest } as ExtensionRequest;
    if (object.containingType !== undefined && object.containingType !== null) {
      message.containingType = String(object.containingType);
    } else {
      message.containingType = "";
    }
    if (object.extensionNumber !== undefined && object.extensionNumber !== null) {
      message.extensionNumber = Number(object.extensionNumber);
    } else {
      message.extensionNumber = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtensionRequest>): ExtensionRequest {
    const message = { ...baseExtensionRequest } as ExtensionRequest;
    if (object.containingType !== undefined && object.containingType !== null) {
      message.containingType = object.containingType;
    } else {
      message.containingType = "";
    }
    if (object.extensionNumber !== undefined && object.extensionNumber !== null) {
      message.extensionNumber = object.extensionNumber;
    } else {
      message.extensionNumber = 0;
    }
    return message;
  },
  toJSON(message: ExtensionRequest): unknown {
    const obj: any = {};
    message.containingType !== undefined && (obj.containingType = message.containingType);
    message.extensionNumber !== undefined && (obj.extensionNumber = message.extensionNumber);
    return obj;
  },
};

export const ServerReflectionResponse = {
  encode(message: ServerReflectionResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validHost);
    if (message.originalRequest !== undefined && message.originalRequest !== undefined) {
      ServerReflectionRequest.encode(message.originalRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.fileDescriptorResponse !== undefined) {
      FileDescriptorResponse.encode(message.fileDescriptorResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.allExtensionNumbersResponse !== undefined) {
      ExtensionNumberResponse.encode(message.allExtensionNumbersResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.listServicesResponse !== undefined) {
      ListServiceResponse.encode(message.listServicesResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.errorResponse !== undefined) {
      ErrorResponse.encode(message.errorResponse, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ServerReflectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerReflectionResponse } as ServerReflectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validHost = reader.string();
          break;
        case 2:
          message.originalRequest = ServerReflectionRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.fileDescriptorResponse = FileDescriptorResponse.decode(reader, reader.uint32());
          break;
        case 5:
          message.allExtensionNumbersResponse = ExtensionNumberResponse.decode(reader, reader.uint32());
          break;
        case 6:
          message.listServicesResponse = ListServiceResponse.decode(reader, reader.uint32());
          break;
        case 7:
          message.errorResponse = ErrorResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServerReflectionResponse {
    const message = { ...baseServerReflectionResponse } as ServerReflectionResponse;
    if (object.validHost !== undefined && object.validHost !== null) {
      message.validHost = String(object.validHost);
    } else {
      message.validHost = "";
    }
    if (object.originalRequest !== undefined && object.originalRequest !== null) {
      message.originalRequest = ServerReflectionRequest.fromJSON(object.originalRequest);
    } else {
      message.originalRequest = undefined;
    }
    if (object.fileDescriptorResponse !== undefined && object.fileDescriptorResponse !== null) {
      message.fileDescriptorResponse = FileDescriptorResponse.fromJSON(object.fileDescriptorResponse);
    } else {
      message.fileDescriptorResponse = undefined;
    }
    if (object.allExtensionNumbersResponse !== undefined && object.allExtensionNumbersResponse !== null) {
      message.allExtensionNumbersResponse = ExtensionNumberResponse.fromJSON(object.allExtensionNumbersResponse);
    } else {
      message.allExtensionNumbersResponse = undefined;
    }
    if (object.listServicesResponse !== undefined && object.listServicesResponse !== null) {
      message.listServicesResponse = ListServiceResponse.fromJSON(object.listServicesResponse);
    } else {
      message.listServicesResponse = undefined;
    }
    if (object.errorResponse !== undefined && object.errorResponse !== null) {
      message.errorResponse = ErrorResponse.fromJSON(object.errorResponse);
    } else {
      message.errorResponse = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServerReflectionResponse>): ServerReflectionResponse {
    const message = { ...baseServerReflectionResponse } as ServerReflectionResponse;
    if (object.validHost !== undefined && object.validHost !== null) {
      message.validHost = object.validHost;
    } else {
      message.validHost = "";
    }
    if (object.originalRequest !== undefined && object.originalRequest !== null) {
      message.originalRequest = ServerReflectionRequest.fromPartial(object.originalRequest);
    } else {
      message.originalRequest = undefined;
    }
    if (object.fileDescriptorResponse !== undefined && object.fileDescriptorResponse !== null) {
      message.fileDescriptorResponse = FileDescriptorResponse.fromPartial(object.fileDescriptorResponse);
    } else {
      message.fileDescriptorResponse = undefined;
    }
    if (object.allExtensionNumbersResponse !== undefined && object.allExtensionNumbersResponse !== null) {
      message.allExtensionNumbersResponse = ExtensionNumberResponse.fromPartial(object.allExtensionNumbersResponse);
    } else {
      message.allExtensionNumbersResponse = undefined;
    }
    if (object.listServicesResponse !== undefined && object.listServicesResponse !== null) {
      message.listServicesResponse = ListServiceResponse.fromPartial(object.listServicesResponse);
    } else {
      message.listServicesResponse = undefined;
    }
    if (object.errorResponse !== undefined && object.errorResponse !== null) {
      message.errorResponse = ErrorResponse.fromPartial(object.errorResponse);
    } else {
      message.errorResponse = undefined;
    }
    return message;
  },
  toJSON(message: ServerReflectionResponse): unknown {
    const obj: any = {};
    message.validHost !== undefined && (obj.validHost = message.validHost);
    message.originalRequest !== undefined && (obj.originalRequest = message.originalRequest ? ServerReflectionRequest.toJSON(message.originalRequest) : undefined);
    message.fileDescriptorResponse !== undefined && (obj.fileDescriptorResponse = message.fileDescriptorResponse ? FileDescriptorResponse.toJSON(message.fileDescriptorResponse) : undefined);
    message.allExtensionNumbersResponse !== undefined && (obj.allExtensionNumbersResponse = message.allExtensionNumbersResponse ? ExtensionNumberResponse.toJSON(message.allExtensionNumbersResponse) : undefined);
    message.listServicesResponse !== undefined && (obj.listServicesResponse = message.listServicesResponse ? ListServiceResponse.toJSON(message.listServicesResponse) : undefined);
    message.errorResponse !== undefined && (obj.errorResponse = message.errorResponse ? ErrorResponse.toJSON(message.errorResponse) : undefined);
    return obj;
  },
};

export const FileDescriptorResponse = {
  encode(message: FileDescriptorResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.fileDescriptorProto) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FileDescriptorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorResponse } as FileDescriptorResponse;
    message.fileDescriptorProto = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileDescriptorProto.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorResponse {
    const message = { ...baseFileDescriptorResponse } as FileDescriptorResponse;
    message.fileDescriptorProto = [];
    if (object.fileDescriptorProto !== undefined && object.fileDescriptorProto !== null) {
      for (const e of object.fileDescriptorProto) {
        message.fileDescriptorProto.push(Buffer.from(bytesFromBase64(e)));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FileDescriptorResponse>): FileDescriptorResponse {
    const message = { ...baseFileDescriptorResponse } as FileDescriptorResponse;
    message.fileDescriptorProto = [];
    if (object.fileDescriptorProto !== undefined && object.fileDescriptorProto !== null) {
      for (const e of object.fileDescriptorProto) {
        message.fileDescriptorProto.push(e);
      }
    }
    return message;
  },
  toJSON(message: FileDescriptorResponse): unknown {
    const obj: any = {};
    if (message.fileDescriptorProto) {
      obj.fileDescriptorProto = message.fileDescriptorProto.map(e => base64FromBytes(e !== undefined ? e : new Buffer(0)));
    } else {
      obj.fileDescriptorProto = [];
    }
    return obj;
  },
};

export const ExtensionNumberResponse = {
  encode(message: ExtensionNumberResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.baseTypeName);
    writer.uint32(18).fork();
    for (const v of message.extensionNumber) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExtensionNumberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtensionNumberResponse } as ExtensionNumberResponse;
    message.extensionNumber = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseTypeName = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extensionNumber.push(reader.int32());
            }
          } else {
            message.extensionNumber.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionNumberResponse {
    const message = { ...baseExtensionNumberResponse } as ExtensionNumberResponse;
    message.extensionNumber = [];
    if (object.baseTypeName !== undefined && object.baseTypeName !== null) {
      message.baseTypeName = String(object.baseTypeName);
    } else {
      message.baseTypeName = "";
    }
    if (object.extensionNumber !== undefined && object.extensionNumber !== null) {
      for (const e of object.extensionNumber) {
        message.extensionNumber.push(Number(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtensionNumberResponse>): ExtensionNumberResponse {
    const message = { ...baseExtensionNumberResponse } as ExtensionNumberResponse;
    message.extensionNumber = [];
    if (object.baseTypeName !== undefined && object.baseTypeName !== null) {
      message.baseTypeName = object.baseTypeName;
    } else {
      message.baseTypeName = "";
    }
    if (object.extensionNumber !== undefined && object.extensionNumber !== null) {
      for (const e of object.extensionNumber) {
        message.extensionNumber.push(e);
      }
    }
    return message;
  },
  toJSON(message: ExtensionNumberResponse): unknown {
    const obj: any = {};
    message.baseTypeName !== undefined && (obj.baseTypeName = message.baseTypeName);
    if (message.extensionNumber) {
      obj.extensionNumber = message.extensionNumber.map(e => e);
    } else {
      obj.extensionNumber = [];
    }
    return obj;
  },
};

export const ListServiceResponse = {
  encode(message: ListServiceResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.service) {
      ServiceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListServiceResponse } as ListServiceResponse;
    message.service = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service.push(ServiceResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListServiceResponse {
    const message = { ...baseListServiceResponse } as ListServiceResponse;
    message.service = [];
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(ServiceResponse.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListServiceResponse>): ListServiceResponse {
    const message = { ...baseListServiceResponse } as ListServiceResponse;
    message.service = [];
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(ServiceResponse.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListServiceResponse): unknown {
    const obj: any = {};
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceResponse.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    return obj;
  },
};

export const ServiceResponse = {
  encode(message: ServiceResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.label);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServiceResponse } as ServiceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceResponse {
    const message = { ...baseServiceResponse } as ServiceResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceResponse>): ServiceResponse {
    const message = { ...baseServiceResponse } as ServiceResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    return message;
  },
  toJSON(message: ServiceResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },
};

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.errorCode);
    writer.uint32(18).string(message.errorMessage);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ErrorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseErrorResponse } as ErrorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorCode = reader.int32();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorResponse {
    const message = { ...baseErrorResponse } as ErrorResponse;
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = Number(object.errorCode);
    } else {
      message.errorCode = 0;
    }
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = String(object.errorMessage);
    } else {
      message.errorMessage = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ErrorResponse>): ErrorResponse {
    const message = { ...baseErrorResponse } as ErrorResponse;
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = object.errorCode;
    } else {
      message.errorCode = 0;
    }
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = object.errorMessage;
    } else {
      message.errorMessage = "";
    }
    return message;
  },
  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.errorCode !== undefined && (obj.errorCode = message.errorCode);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;