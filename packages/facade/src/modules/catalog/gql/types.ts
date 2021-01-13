import { metadata as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metadata as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metadata as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metadata as metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metadata as metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metadata as metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metadata as metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metadata as metaPackageIoRestorecommerceProduct } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { metadata as metaPackageIoRestorecommerceProduct_prototype } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { metadata as metaPackageIoRestorecommerceProduct_category } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { metadata as metaPackageIoRestorecommercePrice_group } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { metadata as metaPackageIoRestorecommerceManufacturer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { metadata as metaPackageIoRestorecommerceImage } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/image";
import { registerPackages } from "../../../gql/protos";

export function registerTypings() {
  registerPackages(
    metaPackageGoogleProtobufEmpty,
    metaPackageGoogleProtobufStruct,
    metaPackageGoogleProtobufAny,
    metaPackageIoRestorecommerceAttribute,
    metaPackageIoRestorecommerceMeta,
    metaPackageIoRestorecommerceAuth,
    metaPackageIoRestorecommerceResourcebase,
    metaPackageIoRestorecommerceImage,
    metaPackageIoRestorecommerceProduct,
    metaPackageIoRestorecommerceProduct_prototype,
    metaPackageIoRestorecommerceProduct_category,
    metaPackageIoRestorecommercePrice_group,
    metaPackageIoRestorecommerceManufacturer
  );
}
