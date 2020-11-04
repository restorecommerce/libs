import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaPackageIoRestorecommerceOrder } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { registerEnumTyping, registerTyping } from "../../../gql/protos";

export function registerTypings() {
  [
    metaPackageGoogleProtobufEmpty,
    metaPackageGoogleProtobufStruct,
    metaPackageGoogleProtobufAny,
    metaPackageIoRestorecommerceAttribute,
    metaPackageIoRestorecommerceMeta,
    metaPackageIoRestorecommerceAuth,
    metaPackageIoRestorecommerceResourcebase,
    metaPackageIoRestorecommerceOrder
  ].forEach(m => {
    for (let key in m) {
      const val = m[key];
      if (val[0] === 'message') {
        registerTyping(val[1], val[3], {name: key}, {name: 'I' + key});
      } else if (val[0] === 'enum') {
        registerEnumTyping(val[1], val[2], {name: key});
      }
    }
  });
}
