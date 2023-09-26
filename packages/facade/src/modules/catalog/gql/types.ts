import { protoMetadata as metaPackageIoRestorecommerceProduct } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product.js';
import { protoMetadata as metaPackageIoRestorecommerceProduct_prototype } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype.js';
import { protoMetadata as metaPackageIoRestorecommerceProduct_category } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category.js';
import { protoMetadata as metaPackageIoRestorecommercePrice_group } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group.js';
import { protoMetadata as metaPackageIoRestorecommerceManufacturer } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer.js';
import { protoMetadata as metaPackageIoRestorecommerceCode } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/code.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceProduct,
  metaPackageIoRestorecommerceProduct_prototype,
  metaPackageIoRestorecommerceProduct_category,
  metaPackageIoRestorecommercePrice_group,
  metaPackageIoRestorecommerceManufacturer,
  metaPackageIoRestorecommerceCode
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
