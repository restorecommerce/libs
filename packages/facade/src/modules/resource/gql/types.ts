import { metadata as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metadata as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metadata as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metadata as metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metadata as metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metadata as metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metadata as metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metadata as metaPackageIoRestorecommerceAddress } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { metadata as metaPackageIoRestorecommerceCountry } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { metadata as metaPackageIoRestorecommerceTimezone } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { metadata as metaPackageIoRestorecommerceContact_point_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { metadata as metaPackageIoRestorecommerceCustomer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { metadata as metaPackageIoRestorecommerceContact_point } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { metadata as metaPackageIoRestorecommerceLocale } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { metadata as metaPackageIoRestorecommerceLocation } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { metadata as metaPackageIoRestorecommerceOrganization } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { metadata as metaPackageIoRestorecommerceTax } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { metadata as metaPackageIoRestorecommerceTax_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { metadata as metaPackageIoRestorecommerceCommand } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command";
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
    metaPackageIoRestorecommerceAddress,
    metaPackageIoRestorecommerceCountry,
    metaPackageIoRestorecommerceTimezone,
    metaPackageIoRestorecommerceContact_point_type,
    metaPackageIoRestorecommerceCustomer,
    metaPackageIoRestorecommerceContact_point,
    metaPackageIoRestorecommerceLocale,
    metaPackageIoRestorecommerceLocation,
    metaPackageIoRestorecommerceOrganization,
    metaPackageIoRestorecommerceTax_type,
    metaPackageIoRestorecommerceTax,
    metaPackageIoRestorecommerceCommand
  );
}
