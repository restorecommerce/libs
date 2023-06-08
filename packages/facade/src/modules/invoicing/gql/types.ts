import { protoMetadata as metaPackageIoRestorecommerceInvoicing } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceInvoicing
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
