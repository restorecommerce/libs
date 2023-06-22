/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "grpc.reflection.v1alpha";

/** / The message sent by the client when calling ServerReflectionInfo method. */
export interface ServerReflectionRequest {
  host: string;
  /** / Find a proto file by the file name. */
  file_by_filename?:
    | string
    | undefined;
  /**
   * / Find the proto file that declares the given fully-qualified symbol name.
   * / This field should be a fully-qualified symbol name
   * / (e.g. <package>.<service>[.<method>] or <package>.<type>).
   */
  file_containing_symbol?:
    | string
    | undefined;
  /**
   * / Find the proto file which defines an extension extending the given
   * / message type with the given field number.
   */
  file_containing_extension?:
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
  all_extension_numbers_of_type?:
    | string
    | undefined;
  /**
   * / List the full names of registered services. The content will not be
   * / checked.
   */
  list_services?: string | undefined;
}

/**
 * / The type name and extension number sent by the client when requesting
 * / file_containing_extension.
 */
export interface ExtensionRequest {
  /** / Fully-qualified type name. The format should be <package>.<type> */
  containing_type: string;
  extension_number: number;
}

/** / The message sent by the server to answer ServerReflectionInfo method. */
export interface ServerReflectionResponse {
  valid_host: string;
  original_request?: ServerReflectionRequest;
  /**
   * / This message is used to answer file_by_filename, file_containing_symbol,
   * / file_containing_extension requests with transitive dependencies. As
   * / the repeated label is not allowed in oneof fields, we use a
   * / FileDescriptorResponse message to encapsulate the repeated fields.
   * / The reflection service is allowed to avoid sending FileDescriptorProtos
   * / that were previously sent in response to earlier requests in the stream.
   */
  file_descriptor_response?:
    | FileDescriptorResponse
    | undefined;
  /** / This message is used to answer all_extension_numbers_of_type requst. */
  all_extension_numbers_response?:
    | ExtensionNumberResponse
    | undefined;
  /** / This message is used to answer list_services request. */
  list_services_response?:
    | ListServiceResponse
    | undefined;
  /** / This message is used when an error occurs. */
  error_response?: ErrorResponse | undefined;
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
  file_descriptor_proto: Buffer[];
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
  base_type_name: string;
  extension_number: number[];
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
  error_code: number;
  error_message: string;
}

function createBaseServerReflectionRequest(): ServerReflectionRequest {
  return {
    host: "",
    file_by_filename: undefined,
    file_containing_symbol: undefined,
    file_containing_extension: undefined,
    all_extension_numbers_of_type: undefined,
    list_services: undefined,
  };
}

export const ServerReflectionRequest = {
  encode(message: ServerReflectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.file_by_filename !== undefined) {
      writer.uint32(26).string(message.file_by_filename);
    }
    if (message.file_containing_symbol !== undefined) {
      writer.uint32(34).string(message.file_containing_symbol);
    }
    if (message.file_containing_extension !== undefined) {
      ExtensionRequest.encode(message.file_containing_extension, writer.uint32(42).fork()).ldelim();
    }
    if (message.all_extension_numbers_of_type !== undefined) {
      writer.uint32(50).string(message.all_extension_numbers_of_type);
    }
    if (message.list_services !== undefined) {
      writer.uint32(58).string(message.list_services);
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

          message.file_by_filename = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.file_containing_symbol = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.file_containing_extension = ExtensionRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.all_extension_numbers_of_type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.list_services = reader.string();
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
      file_by_filename: isSet(object.file_by_filename) ? String(object.file_by_filename) : undefined,
      file_containing_symbol: isSet(object.file_containing_symbol) ? String(object.file_containing_symbol) : undefined,
      file_containing_extension: isSet(object.file_containing_extension)
        ? ExtensionRequest.fromJSON(object.file_containing_extension)
        : undefined,
      all_extension_numbers_of_type: isSet(object.all_extension_numbers_of_type)
        ? String(object.all_extension_numbers_of_type)
        : undefined,
      list_services: isSet(object.list_services) ? String(object.list_services) : undefined,
    };
  },

  toJSON(message: ServerReflectionRequest): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.file_by_filename !== undefined && (obj.file_by_filename = message.file_by_filename);
    message.file_containing_symbol !== undefined && (obj.file_containing_symbol = message.file_containing_symbol);
    message.file_containing_extension !== undefined &&
      (obj.file_containing_extension = message.file_containing_extension
        ? ExtensionRequest.toJSON(message.file_containing_extension)
        : undefined);
    message.all_extension_numbers_of_type !== undefined &&
      (obj.all_extension_numbers_of_type = message.all_extension_numbers_of_type);
    message.list_services !== undefined && (obj.list_services = message.list_services);
    return obj;
  },

  create(base?: DeepPartial<ServerReflectionRequest>): ServerReflectionRequest {
    return ServerReflectionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServerReflectionRequest>): ServerReflectionRequest {
    const message = createBaseServerReflectionRequest();
    message.host = object.host ?? "";
    message.file_by_filename = object.file_by_filename ?? undefined;
    message.file_containing_symbol = object.file_containing_symbol ?? undefined;
    message.file_containing_extension =
      (object.file_containing_extension !== undefined && object.file_containing_extension !== null)
        ? ExtensionRequest.fromPartial(object.file_containing_extension)
        : undefined;
    message.all_extension_numbers_of_type = object.all_extension_numbers_of_type ?? undefined;
    message.list_services = object.list_services ?? undefined;
    return message;
  },
};

function createBaseExtensionRequest(): ExtensionRequest {
  return { containing_type: "", extension_number: 0 };
}

export const ExtensionRequest = {
  encode(message: ExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containing_type !== "") {
      writer.uint32(10).string(message.containing_type);
    }
    if (message.extension_number !== 0) {
      writer.uint32(16).int32(message.extension_number);
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

          message.containing_type = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.extension_number = reader.int32();
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
      containing_type: isSet(object.containing_type) ? String(object.containing_type) : "",
      extension_number: isSet(object.extension_number) ? Number(object.extension_number) : 0,
    };
  },

  toJSON(message: ExtensionRequest): unknown {
    const obj: any = {};
    message.containing_type !== undefined && (obj.containing_type = message.containing_type);
    message.extension_number !== undefined && (obj.extension_number = Math.round(message.extension_number));
    return obj;
  },

  create(base?: DeepPartial<ExtensionRequest>): ExtensionRequest {
    return ExtensionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtensionRequest>): ExtensionRequest {
    const message = createBaseExtensionRequest();
    message.containing_type = object.containing_type ?? "";
    message.extension_number = object.extension_number ?? 0;
    return message;
  },
};

function createBaseServerReflectionResponse(): ServerReflectionResponse {
  return {
    valid_host: "",
    original_request: undefined,
    file_descriptor_response: undefined,
    all_extension_numbers_response: undefined,
    list_services_response: undefined,
    error_response: undefined,
  };
}

export const ServerReflectionResponse = {
  encode(message: ServerReflectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid_host !== "") {
      writer.uint32(10).string(message.valid_host);
    }
    if (message.original_request !== undefined) {
      ServerReflectionRequest.encode(message.original_request, writer.uint32(18).fork()).ldelim();
    }
    if (message.file_descriptor_response !== undefined) {
      FileDescriptorResponse.encode(message.file_descriptor_response, writer.uint32(34).fork()).ldelim();
    }
    if (message.all_extension_numbers_response !== undefined) {
      ExtensionNumberResponse.encode(message.all_extension_numbers_response, writer.uint32(42).fork()).ldelim();
    }
    if (message.list_services_response !== undefined) {
      ListServiceResponse.encode(message.list_services_response, writer.uint32(50).fork()).ldelim();
    }
    if (message.error_response !== undefined) {
      ErrorResponse.encode(message.error_response, writer.uint32(58).fork()).ldelim();
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

          message.valid_host = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.original_request = ServerReflectionRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.file_descriptor_response = FileDescriptorResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.all_extension_numbers_response = ExtensionNumberResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.list_services_response = ListServiceResponse.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error_response = ErrorResponse.decode(reader, reader.uint32());
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
      valid_host: isSet(object.valid_host) ? String(object.valid_host) : "",
      original_request: isSet(object.original_request)
        ? ServerReflectionRequest.fromJSON(object.original_request)
        : undefined,
      file_descriptor_response: isSet(object.file_descriptor_response)
        ? FileDescriptorResponse.fromJSON(object.file_descriptor_response)
        : undefined,
      all_extension_numbers_response: isSet(object.all_extension_numbers_response)
        ? ExtensionNumberResponse.fromJSON(object.all_extension_numbers_response)
        : undefined,
      list_services_response: isSet(object.list_services_response)
        ? ListServiceResponse.fromJSON(object.list_services_response)
        : undefined,
      error_response: isSet(object.error_response) ? ErrorResponse.fromJSON(object.error_response) : undefined,
    };
  },

  toJSON(message: ServerReflectionResponse): unknown {
    const obj: any = {};
    message.valid_host !== undefined && (obj.valid_host = message.valid_host);
    message.original_request !== undefined && (obj.original_request = message.original_request
      ? ServerReflectionRequest.toJSON(message.original_request)
      : undefined);
    message.file_descriptor_response !== undefined && (obj.file_descriptor_response = message.file_descriptor_response
      ? FileDescriptorResponse.toJSON(message.file_descriptor_response)
      : undefined);
    message.all_extension_numbers_response !== undefined &&
      (obj.all_extension_numbers_response = message.all_extension_numbers_response
        ? ExtensionNumberResponse.toJSON(message.all_extension_numbers_response)
        : undefined);
    message.list_services_response !== undefined && (obj.list_services_response = message.list_services_response
      ? ListServiceResponse.toJSON(message.list_services_response)
      : undefined);
    message.error_response !== undefined &&
      (obj.error_response = message.error_response ? ErrorResponse.toJSON(message.error_response) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ServerReflectionResponse>): ServerReflectionResponse {
    return ServerReflectionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServerReflectionResponse>): ServerReflectionResponse {
    const message = createBaseServerReflectionResponse();
    message.valid_host = object.valid_host ?? "";
    message.original_request = (object.original_request !== undefined && object.original_request !== null)
      ? ServerReflectionRequest.fromPartial(object.original_request)
      : undefined;
    message.file_descriptor_response =
      (object.file_descriptor_response !== undefined && object.file_descriptor_response !== null)
        ? FileDescriptorResponse.fromPartial(object.file_descriptor_response)
        : undefined;
    message.all_extension_numbers_response =
      (object.all_extension_numbers_response !== undefined && object.all_extension_numbers_response !== null)
        ? ExtensionNumberResponse.fromPartial(object.all_extension_numbers_response)
        : undefined;
    message.list_services_response =
      (object.list_services_response !== undefined && object.list_services_response !== null)
        ? ListServiceResponse.fromPartial(object.list_services_response)
        : undefined;
    message.error_response = (object.error_response !== undefined && object.error_response !== null)
      ? ErrorResponse.fromPartial(object.error_response)
      : undefined;
    return message;
  },
};

function createBaseFileDescriptorResponse(): FileDescriptorResponse {
  return { file_descriptor_proto: [] };
}

export const FileDescriptorResponse = {
  encode(message: FileDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.file_descriptor_proto) {
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

          message.file_descriptor_proto.push(reader.bytes() as Buffer);
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
      file_descriptor_proto: Array.isArray(object?.file_descriptor_proto)
        ? object.file_descriptor_proto.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: FileDescriptorResponse): unknown {
    const obj: any = {};
    if (message.file_descriptor_proto) {
      obj.file_descriptor_proto = message.file_descriptor_proto.map((e) =>
        base64FromBytes(e !== undefined ? e : Buffer.alloc(0))
      );
    } else {
      obj.file_descriptor_proto = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FileDescriptorResponse>): FileDescriptorResponse {
    return FileDescriptorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileDescriptorResponse>): FileDescriptorResponse {
    const message = createBaseFileDescriptorResponse();
    message.file_descriptor_proto = object.file_descriptor_proto?.map((e) => e) || [];
    return message;
  },
};

function createBaseExtensionNumberResponse(): ExtensionNumberResponse {
  return { base_type_name: "", extension_number: [] };
}

export const ExtensionNumberResponse = {
  encode(message: ExtensionNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_type_name !== "") {
      writer.uint32(10).string(message.base_type_name);
    }
    writer.uint32(18).fork();
    for (const v of message.extension_number) {
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

          message.base_type_name = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.extension_number.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extension_number.push(reader.int32());
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
      base_type_name: isSet(object.base_type_name) ? String(object.base_type_name) : "",
      extension_number: Array.isArray(object?.extension_number)
        ? object.extension_number.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: ExtensionNumberResponse): unknown {
    const obj: any = {};
    message.base_type_name !== undefined && (obj.base_type_name = message.base_type_name);
    if (message.extension_number) {
      obj.extension_number = message.extension_number.map((e) => Math.round(e));
    } else {
      obj.extension_number = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionNumberResponse>): ExtensionNumberResponse {
    return ExtensionNumberResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtensionNumberResponse>): ExtensionNumberResponse {
    const message = createBaseExtensionNumberResponse();
    message.base_type_name = object.base_type_name ?? "";
    message.extension_number = object.extension_number?.map((e) => e) || [];
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
  return { error_code: 0, error_message: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error_code !== 0) {
      writer.uint32(8).int32(message.error_code);
    }
    if (message.error_message !== "") {
      writer.uint32(18).string(message.error_message);
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

          message.error_code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error_message = reader.string();
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
      error_code: isSet(object.error_code) ? Number(object.error_code) : 0,
      error_message: isSet(object.error_message) ? String(object.error_message) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.error_code !== undefined && (obj.error_code = Math.round(message.error_code));
    message.error_message !== undefined && (obj.error_message = message.error_message);
    return obj;
  },

  create(base?: DeepPartial<ErrorResponse>): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ErrorResponse>): ErrorResponse {
    const message = createBaseErrorResponse();
    message.error_code = object.error_code ?? 0;
    message.error_message = object.error_message ?? "";
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
