import { protoMetadata as metaPackageIoRestorecommerceOrdering } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceOrdering
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
