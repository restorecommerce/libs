import { type AdapterPayload } from 'oidc-provider';
import { customAlphabet } from 'nanoid';
import { type Any } from '@restorecommerce/rc-grpc-clients';

export const epochTime = (date = Date.now()) => Math.floor(date / 1000);

export const unmarshallProtobufAny = (msg: Any): AdapterPayload | undefined => {
  if(msg?.value) {
    return JSON.parse(msg.value.toString());
  }
};

export const marshallProtobufAny = (payload: AdapterPayload): Any => {
  return {
    typeUrl: '',
    value: Buffer.from(JSON.stringify(payload))
  };
};

const generate = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-', 21);

export const nanoid = (): string => {
  return generate();
};
