/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Any } from '../../google/protobuf/any';
import { Writer, Reader } from 'protobufjs/minimal';


export interface SearchRequest {
  collection: string;
  text: string;
  acl: string[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface SearchResponse {
  data: Any[];
}

const baseSearchRequest: object = {
  collection: "",
  text: "",
  acl: "",
};

const baseSearchResponse: object = {
};

/**
 *  Service provides the CRUD operations
 */
export interface Service {

  Search(request: SearchRequest): Promise<SearchResponse>;

}

export const SearchRequest = {
  encode(message: SearchRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.collection);
    writer.uint32(18).string(message.text);
    for (const v of message.acl) {
      writer.uint32(26).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SearchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchRequest } as SearchRequest;
    message.acl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.acl.push(reader.string());
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const SearchResponse = {
  encode(message: SearchResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.data) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SearchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchResponse } as SearchResponse;
    message.data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
