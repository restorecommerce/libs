import { protoMetadata as metaPackageIoRestorecommerceFulfillment } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment.js';
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentCourier } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier.js';
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentProduct } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_product.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceFulfillment,
  metaPackageIoRestorecommerceFulfillmentCourier,
  metaPackageIoRestorecommerceFulfillmentProduct
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
