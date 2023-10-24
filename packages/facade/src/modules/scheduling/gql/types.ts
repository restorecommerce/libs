import { protoMetadata as metaPackageIoRestorecommerceScheduling } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceScheduling
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
