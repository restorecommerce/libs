import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metaPackageIoRestorecommerceAddress } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { registerPackages } from "../../../gql/protos";
import { metaPackageIoRestorecommerceCountry } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { metaPackageIoRestorecommerceTimezone } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { metaPackageIoRestorecommerceContact_point_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { metaPackageIoRestorecommerceCustomer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { metaPackageIoRestorecommerceContact_point } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { metaPackageIoRestorecommerceLocale } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { metaPackageIoRestorecommerceLocation } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { metaPackageIoRestorecommerceOrganization } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { metaPackageIoRestorecommerceTax } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { metaPackageIoRestorecommerceTax_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";

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
    metaPackageIoRestorecommerceTax
  );
}
