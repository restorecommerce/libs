import { protoMetadata as metaPackageIoRestorecommerceOstorage } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceOstorage
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
