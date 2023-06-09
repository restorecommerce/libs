import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  protoMetadata
];


export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
