import { protoMetadata as metaPackageIoRestorecommerceInvoicing } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceInvoicing
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
