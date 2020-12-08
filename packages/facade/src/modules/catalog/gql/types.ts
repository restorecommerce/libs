import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metaPackageIoRestorecommerceProduct } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { metaPackageIoRestorecommerceProduct_prototype } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { metaPackageIoRestorecommerceProduct_category } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { metaPackageIoRestorecommercePrice_group } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { metaPackageIoRestorecommerceManufacturer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { metaPackageIoRestorecommerceImage } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/image";
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
