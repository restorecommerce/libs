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
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
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

export const subServices: SubService[] = [
  {
    name: 'address',
    service: metaPackageIoRestorecommerceAddress.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'country',
    service: metaPackageIoRestorecommerceCountry.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'timezone',
    service: metaPackageIoRestorecommerceTimezone.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'contact_point_type',
    service: metaPackageIoRestorecommerceContact_point_type.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'customer',
    service: metaPackageIoRestorecommerceCustomer.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'contact_point',
    service: metaPackageIoRestorecommerceContact_point.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'locale',
    service: metaPackageIoRestorecommerceLocale.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'location',
    service: metaPackageIoRestorecommerceLocation.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'organization',
    service: metaPackageIoRestorecommerceOrganization.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'tax',
    service: metaPackageIoRestorecommerceTax.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'tax_type',
    service: metaPackageIoRestorecommerceTax_type.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'command',
    service: metaPackageIoRestorecommerceCommand.fileDescriptor.service![0],
    queries: ['Read']
  },
];
