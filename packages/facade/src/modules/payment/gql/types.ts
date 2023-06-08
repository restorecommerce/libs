import { protoMetadata as metaPackageIoRestorecommercePayment } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommercePayment
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
