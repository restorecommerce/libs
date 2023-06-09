import { type Any } from '@restorecommerce/rc-grpc-clients';
import { type AdapterPayload } from 'oidc-provider';

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
