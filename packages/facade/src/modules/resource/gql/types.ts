import { protoMetadata as metaPackageIoRestorecommerceAddress } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { protoMetadata as metaPackageIoRestorecommerceCountry } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { protoMetadata as metaPackageIoRestorecommerceTimezone } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { protoMetadata as metaPackageIoRestorecommerceContact_point_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { protoMetadata as metaPackageIoRestorecommerceCustomer } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { protoMetadata as metaPackageIoRestorecommerceContact_point } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { protoMetadata as metaPackageIoRestorecommerceLocale } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { protoMetadata as metaPackageIoRestorecommerceLocation } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { protoMetadata as metaPackageIoRestorecommerceOrganization } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { protoMetadata as metaPackageIoRestorecommerceTax } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { protoMetadata as metaPackageIoRestorecommerceTax_type } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { protoMetadata as metaPackageIoRestorecommerceCommand } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command";
import { protoMetadata as metaPackageIoRestorecommerceCode } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/code";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
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
  metaPackageIoRestorecommerceCommand,
  metaPackageIoRestorecommerceCode
];
