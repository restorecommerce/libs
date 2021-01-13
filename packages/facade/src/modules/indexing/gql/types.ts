import { metadata as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metadata as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metadata as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metadata as metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metadata as metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metadata as metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metadata as metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metadata as metaPackageIoRestorecommerceSearch } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search";
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
    metaPackageIoRestorecommerceSearch
  );
}
