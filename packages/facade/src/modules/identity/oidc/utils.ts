import { Any } from '@restorecommerce/rc-grpc-clients';
import { AdapterPayload } from 'oidc-provider';
import { customAlphabet } from 'nanoid';

export const epochTime = (date = Date.now()) => Math.floor(date / 1000);

export const unmarshallProtobufAny = (msg: Any): AdapterPayload => {
  return JSON.parse(msg.value.toString());
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
