import { protoMetadata as metaPackageIoRestorecommerceProduct } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { protoMetadata as metaPackageIoRestorecommerceProduct_prototype } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { protoMetadata as metaPackageIoRestorecommerceProduct_category } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { protoMetadata as metaPackageIoRestorecommercePrice_group } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { protoMetadata as metaPackageIoRestorecommerceManufacturer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceProduct,
    metaPackageIoRestorecommerceProduct_prototype,
    metaPackageIoRestorecommerceProduct_category,
    metaPackageIoRestorecommercePrice_group,
    metaPackageIoRestorecommerceManufacturer
  );
}

export const subServices: SubService[] = [
  {
    name: 'product',
    service: metaPackageIoRestorecommerceProduct.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'product_prototype',
    service: metaPackageIoRestorecommerceProduct_prototype.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'product_category',
    service: metaPackageIoRestorecommerceProduct_category.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'price_group',
    service: metaPackageIoRestorecommercePrice_group.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'manufacturer',
    service: metaPackageIoRestorecommerceManufacturer.fileDescriptor.service![0],
    queries: ['Read']
  },
];
