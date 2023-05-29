/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "grpc.reflection.v1alpha";

/** / The message sent by the client when calling ServerReflectionInfo method. */
export interface ServerReflectionRequest {
  host: string;
  /** / Find a proto file by the file name. */
  fileByFilename?:
    | string
    | undefined;
  /**
   * / Find the proto file that declares the given fully-qualified symbol name.
   * / This field should be a fully-qualified symbol name
   * / (e.g. <package>.<service>[.<method>] or <package>.<type>).
   */
  fileContainingSymbol?:
    | string
    | undefined;
  /**
   * / Find the proto file which defines an extension extending the given
   * / message type with the given field number.
   */
  fileContainingExtension?:
    | ExtensionRequest
    | undefined;
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
  allExtensionNumbersOfType?:
    | string
    | undefined;
  /**
   * / List the full names of registered services. The content will not be
   * / checked.
   */
  listServices?: string | undefined;
}

/**
 * / The type name and extension number sent by the client when requesting
 * / file_containing_extension.
 */
export interface ExtensionRequest {
  /** / Fully-qualified type name. The format should be <package>.<type> */
  containingType: string;
  extensionNumber: number;
}

/** / The message sent by the server to answer ServerReflectionInfo method. */
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
  fileDescriptorResponse?:
    | FileDescriptorResponse
    | undefined;
  /** / This message is used to answer all_extension_numbers_of_type requst. */
  allExtensionNumbersResponse?:
    | ExtensionNumberResponse
    | undefined;
  /** / This message is used to answer list_services request. */
  listServicesResponse?:
    | ListServiceResponse
    | undefined;
  /** / This message is used when an error occurs. */
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

/** / A list of ServiceResponse sent by the server answering list_services request. */
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
   * Added a label to map for the service name, since the same service name
   * could be used across multiple services.
   */
  label: string;
}

/** / The error code and error message sent by the server when an error occurs. */
export interface ErrorResponse {
  /** / This field uses the error codes defined in grpc::StatusCode. */
  errorCode: number;
  errorMessage: string;
}

function createBaseServerReflectionRequest(): ServerReflectionRequest {
  return {
    host: "",
    fileByFilename: undefined,
    fileContainingSymbol: undefined,
    fileContainingExtension: undefined,
    allExtensionNumbersOfType: undefined,
    listServices: undefined,
  };
}

export const ServerReflectionRequest = {
  encode(message: ServerReflectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerReflectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerReflectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileByFilename = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileContainingSymbol = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fileContainingExtension = ExtensionRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.allExtensionNumbersOfType = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.listServices = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerReflectionRequest {
    return {
      host: isSet(object.host) ? String(object.host) : "",
      fileByFilename: isSet(object.fileByFilename) ? String(object.fileByFilename) : undefined,
      fileContainingSymbol: isSet(object.fileContainingSymbol) ? String(object.fileContainingSymbol) : undefined,
      fileContainingExtension: isSet(object.fileContainingExtension)
        ? ExtensionRequest.fromJSON(object.fileContainingExtension)
        : undefined,
      allExtensionNumbersOfType: isSet(object.allExtensionNumbersOfType)
        ? String(object.allExtensionNumbersOfType)
        : undefined,
      listServices: isSet(object.listServices) ? String(object.listServices) : undefined,
    };
  },

  toJSON(message: ServerReflectionRequest): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.fileByFilename !== undefined && (obj.fileByFilename = message.fileByFilename);
    message.fileContainingSymbol !== undefined && (obj.fileContainingSymbol = message.fileContainingSymbol);
    message.fileContainingExtension !== undefined && (obj.fileContainingExtension = message.fileContainingExtension
      ? ExtensionRequest.toJSON(message.fileContainingExtension)
      : undefined);
    message.allExtensionNumbersOfType !== undefined &&
      (obj.allExtensionNumbersOfType = message.allExtensionNumbersOfType);
    message.listServices !== undefined && (obj.listServices = message.listServices);
    return obj;
  },

  create(base?: DeepPartial<ServerReflectionRequest>): ServerReflectionRequest {
    return ServerReflectionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServerReflectionRequest>): ServerReflectionRequest {
    const message = createBaseServerReflectionRequest();
    message.host = object.host ?? "";
    message.fileByFilename = object.fileByFilename ?? undefined;
    message.fileContainingSymbol = object.fileContainingSymbol ?? undefined;
    message.fileContainingExtension =
      (object.fileContainingExtension !== undefined && object.fileContainingExtension !== null)
        ? ExtensionRequest.fromPartial(object.fileContainingExtension)
        : undefined;
    message.allExtensionNumbersOfType = object.allExtensionNumbersOfType ?? undefined;
    message.listServices = object.listServices ?? undefined;
    return message;
  },
};

function createBaseExtensionRequest(): ExtensionRequest {
  return { containingType: "", extensionNumber: 0 };
}

export const ExtensionRequest = {
  encode(message: ExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containingType !== "") {
      writer.uint32(10).string(message.containingType);
    }
    if (message.extensionNumber !== 0) {
      writer.uint32(16).int32(message.extensionNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.containingType = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.extensionNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionRequest {
    return {
      containingType: isSet(object.containingType) ? String(object.containingType) : "",
      extensionNumber: isSet(object.extensionNumber) ? Number(object.extensionNumber) : 0,
    };
  },

  toJSON(message: ExtensionRequest): unknown {
    const obj: any = {};
    message.containingType !== undefined && (obj.containingType = message.containingType);
    message.extensionNumber !== undefined && (obj.extensionNumber = Math.round(message.extensionNumber));
    return obj;
  },

  create(base?: DeepPartial<ExtensionRequest>): ExtensionRequest {
    return ExtensionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtensionRequest>): ExtensionRequest {
    const message = createBaseExtensionRequest();
    message.containingType = object.containingType ?? "";
    message.extensionNumber = object.extensionNumber ?? 0;
    return message;
  },
};

function createBaseServerReflectionResponse(): ServerReflectionResponse {
  return {
    validHost: "",
    originalRequest: undefined,
    fileDescriptorResponse: undefined,
    allExtensionNumbersResponse: undefined,
    listServicesResponse: undefined,
    errorResponse: undefined,
  };
}

export const ServerReflectionResponse = {
  encode(message: ServerReflectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validHost !== "") {
      writer.uint32(10).string(message.validHost);
    }
    if (message.originalRequest !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerReflectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerReflectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validHost = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.originalRequest = ServerReflectionRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileDescriptorResponse = FileDescriptorResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allExtensionNumbersResponse = ExtensionNumberResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.listServicesResponse = ListServiceResponse.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.errorResponse = ErrorResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerReflectionResponse {
    return {
      validHost: isSet(object.validHost) ? String(object.validHost) : "",
      originalRequest: isSet(object.originalRequest)
        ? ServerReflectionRequest.fromJSON(object.originalRequest)
        : undefined,
      fileDescriptorResponse: isSet(object.fileDescriptorResponse)
        ? FileDescriptorResponse.fromJSON(object.fileDescriptorResponse)
        : undefined,
      allExtensionNumbersResponse: isSet(object.allExtensionNumbersResponse)
        ? ExtensionNumberResponse.fromJSON(object.allExtensionNumbersResponse)
        : undefined,
      listServicesResponse: isSet(object.listServicesResponse)
        ? ListServiceResponse.fromJSON(object.listServicesResponse)
        : undefined,
      errorResponse: isSet(object.errorResponse) ? ErrorResponse.fromJSON(object.errorResponse) : undefined,
    };
  },

  toJSON(message: ServerReflectionResponse): unknown {
    const obj: any = {};
    message.validHost !== undefined && (obj.validHost = message.validHost);
    message.originalRequest !== undefined && (obj.originalRequest = message.originalRequest
      ? ServerReflectionRequest.toJSON(message.originalRequest)
      : undefined);
    message.fileDescriptorResponse !== undefined && (obj.fileDescriptorResponse = message.fileDescriptorResponse
      ? FileDescriptorResponse.toJSON(message.fileDescriptorResponse)
      : undefined);
    message.allExtensionNumbersResponse !== undefined &&
      (obj.allExtensionNumbersResponse = message.allExtensionNumbersResponse
        ? ExtensionNumberResponse.toJSON(message.allExtensionNumbersResponse)
        : undefined);
    message.listServicesResponse !== undefined && (obj.listServicesResponse = message.listServicesResponse
      ? ListServiceResponse.toJSON(message.listServicesResponse)
      : undefined);
    message.errorResponse !== undefined &&
      (obj.errorResponse = message.errorResponse ? ErrorResponse.toJSON(message.errorResponse) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ServerReflectionResponse>): ServerReflectionResponse {
    return ServerReflectionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServerReflectionResponse>): ServerReflectionResponse {
    const message = createBaseServerReflectionResponse();
    message.validHost = object.validHost ?? "";
    message.originalRequest = (object.originalRequest !== undefined && object.originalRequest !== null)
      ? ServerReflectionRequest.fromPartial(object.originalRequest)
      : undefined;
    message.fileDescriptorResponse =
      (object.fileDescriptorResponse !== undefined && object.fileDescriptorResponse !== null)
        ? FileDescriptorResponse.fromPartial(object.fileDescriptorResponse)
        : undefined;
    message.allExtensionNumbersResponse =
      (object.allExtensionNumbersResponse !== undefined && object.allExtensionNumbersResponse !== null)
        ? ExtensionNumberResponse.fromPartial(object.allExtensionNumbersResponse)
        : undefined;
    message.listServicesResponse = (object.listServicesResponse !== undefined && object.listServicesResponse !== null)
      ? ListServiceResponse.fromPartial(object.listServicesResponse)
      : undefined;
    message.errorResponse = (object.errorResponse !== undefined && object.errorResponse !== null)
      ? ErrorResponse.fromPartial(object.errorResponse)
      : undefined;
    return message;
  },
};

function createBaseFileDescriptorResponse(): FileDescriptorResponse {
  return { fileDescriptorProto: [] };
}

export const FileDescriptorResponse = {
  encode(message: FileDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fileDescriptorProto) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileDescriptorProto.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorResponse {
    return {
      fileDescriptorProto: Array.isArray(object?.fileDescriptorProto)
        ? object.fileDescriptorProto.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: FileDescriptorResponse): unknown {
    const obj: any = {};
    if (message.fileDescriptorProto) {
      obj.fileDescriptorProto = message.fileDescriptorProto.map((e) =>
        base64FromBytes(e !== undefined ? e : Buffer.alloc(0))
      );
    } else {
      obj.fileDescriptorProto = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FileDescriptorResponse>): FileDescriptorResponse {
    return FileDescriptorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileDescriptorResponse>): FileDescriptorResponse {
    const message = createBaseFileDescriptorResponse();
    message.fileDescriptorProto = object.fileDescriptorProto?.map((e) => e) || [];
    return message;
  },
};

function createBaseExtensionNumberResponse(): ExtensionNumberResponse {
  return { baseTypeName: "", extensionNumber: [] };
}

export const ExtensionNumberResponse = {
  encode(message: ExtensionNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseTypeName !== "") {
      writer.uint32(10).string(message.baseTypeName);
    }
    writer.uint32(18).fork();
    for (const v of message.extensionNumber) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionNumberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseTypeName = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.extensionNumber.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extensionNumber.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionNumberResponse {
    return {
      baseTypeName: isSet(object.baseTypeName) ? String(object.baseTypeName) : "",
      extensionNumber: Array.isArray(object?.extensionNumber) ? object.extensionNumber.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: ExtensionNumberResponse): unknown {
    const obj: any = {};
    message.baseTypeName !== undefined && (obj.baseTypeName = message.baseTypeName);
    if (message.extensionNumber) {
      obj.extensionNumber = message.extensionNumber.map((e) => Math.round(e));
    } else {
      obj.extensionNumber = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionNumberResponse>): ExtensionNumberResponse {
    return ExtensionNumberResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtensionNumberResponse>): ExtensionNumberResponse {
    const message = createBaseExtensionNumberResponse();
    message.baseTypeName = object.baseTypeName ?? "";
    message.extensionNumber = object.extensionNumber?.map((e) => e) || [];
    return message;
  },
};

function createBaseListServiceResponse(): ListServiceResponse {
  return { service: [] };
}

export const ListServiceResponse = {
  encode(message: ListServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.service) {
      ServiceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service.push(ServiceResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListServiceResponse {
    return {
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListServiceResponse): unknown {
    const obj: any = {};
    if (message.service) {
      obj.service = message.service.map((e) => e ? ServiceResponse.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListServiceResponse>): ListServiceResponse {
    return ListServiceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListServiceResponse>): ListServiceResponse {
    const message = createBaseListServiceResponse();
    message.service = object.service?.map((e) => ServiceResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServiceResponse(): ServiceResponse {
  return { name: "", label: "" };
}

export const ServiceResponse = {
  encode(message: ServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.label = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      label: isSet(object.label) ? String(object.label) : "",
    };
  },

  toJSON(message: ServiceResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  create(base?: DeepPartial<ServiceResponse>): ServiceResponse {
    return ServiceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServiceResponse>): ServiceResponse {
    const message = createBaseServiceResponse();
    message.name = object.name ?? "";
    message.label = object.label ?? "";
    return message;
  },
};

function createBaseErrorResponse(): ErrorResponse {
  return { errorCode: 0, errorMessage: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorCode !== 0) {
      writer.uint32(8).int32(message.errorCode);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.errorCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      errorCode: isSet(object.errorCode) ? Number(object.errorCode) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.errorCode !== undefined && (obj.errorCode = Math.round(message.errorCode));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  create(base?: DeepPartial<ErrorResponse>): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ErrorResponse>): ErrorResponse {
    const message = createBaseErrorResponse();
    message.errorCode = object.errorCode ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

export type ServerReflectionDefinition = typeof ServerReflectionDefinition;
export const ServerReflectionDefinition = {
  name: "ServerReflection",
  fullName: "grpc.reflection.v1alpha.ServerReflection",
  methods: {
    /**
     * / The reflection service is structured as a bidirectional stream, ensuring
     * / all related requests go to a single server.
     */
    serverReflectionInfo: {
      name: "ServerReflectionInfo",
      requestType: ServerReflectionRequest,
      requestStream: true,
      responseType: ServerReflectionResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface ServerReflectionServiceImplementation<CallContextExt = {}> {
  /**
   * / The reflection service is structured as a bidirectional stream, ensuring
   * / all related requests go to a single server.
   */
  serverReflectionInfo(
    request: AsyncIterable<ServerReflectionRequest>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ServerReflectionResponse>>;
}

export interface ServerReflectionClient<CallOptionsExt = {}> {
  /**
   * / The reflection service is structured as a bidirectional stream, ensuring
   * / all related requests go to a single server.
   */
  serverReflectionInfo(
    request: AsyncIterable<DeepPartial<ServerReflectionRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<ServerReflectionResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "grpc/reflection/v1alpha/reflection.proto",
    "package": "grpc.reflection.v1alpha",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "ServerReflectionRequest",
      "field": [{
        "name": "host",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "host",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "file_by_filename",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fileByFilename",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "file_containing_symbol",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fileContainingSymbol",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "file_containing_extension",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ExtensionRequest",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fileContainingExtension",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "all_extension_numbers_of_type",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "allExtensionNumbersOfType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "list_services",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "listServices",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "message_request", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExtensionRequest",
      "field": [{
        "name": "containing_type",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "containingType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension_number",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extensionNumber",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServerReflectionResponse",
      "field": [{
        "name": "valid_host",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "validHost",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "original_request",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ServerReflectionRequest",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "originalRequest",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "file_descriptor_response",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.FileDescriptorResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fileDescriptorResponse",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "all_extension_numbers_response",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ExtensionNumberResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "allExtensionNumbersResponse",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "list_services_response",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ListServiceResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "listServicesResponse",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "error_response",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ErrorResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "errorResponse",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "message_response", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileDescriptorResponse",
      "field": [{
        "name": "file_descriptor_proto",
        "number": 1,
        "label": 3,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fileDescriptorProto",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExtensionNumberResponse",
      "field": [{
        "name": "base_type_name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "baseTypeName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension_number",
        "number": 2,
        "label": 3,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extensionNumber",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ListServiceResponse",
      "field": [{
        "name": "service",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".grpc.reflection.v1alpha.ServiceResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "service",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServiceResponse",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "label",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "label",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ErrorResponse",
      "field": [{
        "name": "error_code",
        "number": 1,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "errorCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "error_message",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "errorMessage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "ServerReflection",
      "method": [{
        "name": "ServerReflectionInfo",
        "inputType": ".grpc.reflection.v1alpha.ServerReflectionRequest",
        "outputType": ".grpc.reflection.v1alpha.ServerReflectionResponse",
        "options": undefined,
        "clientStreaming": true,
        "serverStreaming": true,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0, 2, 0],
        "span": [38, 2, 39, 48],
        "leadingComments":
          "/ The reflection service is structured as a bidirectional stream, ensuring\n/ all related requests go to a single server.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [43, 0, 75, 1],
        "leadingComments": "/ The message sent by the client when calling ServerReflectionInfo method.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 8, 0],
        "span": [48, 2, 74, 3],
        "leadingComments":
          "/ To use reflection service, the client should set one of the following\n/ fields in message_request. The server distinguishes requests by their\n/ defined field and then handles them using corresponding methods.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [50, 4, 32],
        "leadingComments": "/ Find a proto file by the file name.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [55, 4, 38],
        "leadingComments":
          "/ Find the proto file that declares the given fully-qualified symbol name.\n/ This field should be a fully-qualified symbol name\n/ (e.g. <package>.<service>[.<method>] or <package>.<type>).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 3],
        "span": [59, 4, 51],
        "leadingComments":
          "/ Find the proto file which defines an extension extending the given\n/ message type with the given field number.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [69, 4, 45],
        "leadingComments":
          "/ Finds the tag numbers used by all known extensions of extendee_type, and\n/ appends them to ExtensionNumberResponse in an undefined order.\n/ Its corresponding method is best-effort: it's not guaranteed that the\n/ reflection service will implement this method, and it's not guaranteed\n/ that this method will provide all extensions. Returns\n/ StatusCode::UNIMPLEMENTED if it's not implemented.\n/ This field should be a fully-qualified type name. The format is\n/ <package>.<type>\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [73, 4, 29],
        "leadingComments": "/ List the full names of registered services. The content will not be\n/ checked.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [79, 0, 83, 1],
        "leadingComments":
          "/ The type name and extension number sent by the client when requesting\n/ file_containing_extension.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [81, 2, 29],
        "leadingComments": "/ Fully-qualified type name. The format should be <package>.<type>\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [86, 0, 109, 1],
        "leadingComments": "/ The message sent by the server to answer ServerReflectionInfo method.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 8, 0],
        "span": [91, 2, 108, 3],
        "leadingComments":
          "/ The server set one of the following fields accroding to the message_request\n/ in the request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 2],
        "span": [98, 4, 56],
        "leadingComments":
          "/ This message is used to answer file_by_filename, file_containing_symbol,\n/ file_containing_extension requests with transitive dependencies. As\n/ the repeated label is not allowed in oneof fields, we use a\n/ FileDescriptorResponse message to encapsulate the repeated fields.\n/ The reflection service is allowed to avoid sending FileDescriptorProtos\n/ that were previously sent in response to earlier requests in the stream.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 3],
        "span": [101, 4, 63],
        "leadingComments": "/ This message is used to answer all_extension_numbers_of_type requst.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 4],
        "span": [104, 4, 51],
        "leadingComments": "/ This message is used to answer list_services request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 5],
        "span": [107, 4, 37],
        "leadingComments": "/ This message is used when an error occurs.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [114, 0, 119, 1],
        "leadingComments":
          "/ Serialized FileDescriptorProto messages sent by the server answering\n/ a file_by_filename, file_containing_symbol, or file_containing_extension\n/ request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 0],
        "span": [118, 2, 43],
        "leadingComments":
          "/ Serialized FileDescriptorProto messages. We avoid taking a dependency on\n/ descriptor.proto, which uses proto2 only features, by making them opaque\n/ bytes instead.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [123, 0, 128, 1],
        "leadingComments":
          "/ A list of extension numbers sent by the server answering\n/ all_extension_numbers_of_type request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 0],
        "span": [126, 2, 28],
        "leadingComments":
          "/ Full name of the base type, including the package name. The format\n/ is <package>.<type>\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [131, 0, 135, 1],
        "leadingComments": "/ A list of ServiceResponse sent by the server answering list_services request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 0],
        "span": [134, 2, 39],
        "leadingComments":
          "/ The information of each service may be expanded in the future, so we use\n/ ServiceResponse message to encapsulate it.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [139, 0, 146, 1],
        "leadingComments":
          "/ The information of a single service used by ListServiceResponse to answer\n/ list_services request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 0],
        "span": [142, 2, 18],
        "leadingComments":
          "/ Full name of a registered service, including its package name. The format\n/ is <package>.<service>\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 1],
        "span": [145, 2, 19],
        "leadingComments":
          " Added a label to map for the service name, since the same service name\n could be used across multiple services.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7],
        "span": [149, 0, 153, 1],
        "leadingComments": "/ The error code and error message sent by the server when an error occurs.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 0],
        "span": [151, 2, 23],
        "leadingComments": "/ This field uses the error codes defined in grpc::StatusCode.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".grpc.reflection.v1alpha.ServerReflectionRequest": ServerReflectionRequest,
    ".grpc.reflection.v1alpha.ExtensionRequest": ExtensionRequest,
    ".grpc.reflection.v1alpha.ServerReflectionResponse": ServerReflectionResponse,
    ".grpc.reflection.v1alpha.FileDescriptorResponse": FileDescriptorResponse,
    ".grpc.reflection.v1alpha.ExtensionNumberResponse": ExtensionNumberResponse,
    ".grpc.reflection.v1alpha.ListServiceResponse": ListServiceResponse,
    ".grpc.reflection.v1alpha.ServiceResponse": ServiceResponse,
    ".grpc.reflection.v1alpha.ErrorResponse": ErrorResponse,
  },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
