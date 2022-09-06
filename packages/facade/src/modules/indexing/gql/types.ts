import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search';
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  protoMetadata
];

