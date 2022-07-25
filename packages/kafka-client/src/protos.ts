import { Writer, Reader } from 'protobufjs';

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type MessageType<T = any> = {
  encode(message: T, writer?: Writer): Writer;
  decode(input: Reader | Uint8Array, length?: number): T;
  fromPartial(input: DeepPartial<T>): T;
};

export interface ProtoMetadata {
  references: {
    [key: string]: MessageType;
  };
}

const objectRegistry = new Map<string, MessageType>();

export const registerProtoMeta = (...protoMeta: ProtoMetadata[]) => {
  protoMeta.forEach(proto => {
    Object.entries(proto.references).forEach(([reference, message]) => {
      objectRegistry.set(reference, message);
    });
  });
};

const getMessage = (messageObject: string): MessageType => {
  if (!messageObject.startsWith('.')) {
    messageObject = '.' + messageObject;
  }

  if (!objectRegistry.has(messageObject)) {
    throw new Error('Proto registry does not contain message definition for: ' + messageObject);
  }

  return objectRegistry.get(messageObject);
};

export const encodeMessage = <T = any>(message: T, messageObject: string): Uint8Array => {
  return getMessage(messageObject).encode(getMessage(messageObject).fromPartial(message)).finish();
};

export const decodeMessage = <T = any>(message: Reader | Uint8Array, messageObject: string): T => {
  return getMessage(messageObject).decode(message);
};
