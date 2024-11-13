import { protoMetadata as metaPackageIoRestorecommerceAddress } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address.js';
import { protoMetadata as metaPackageIoRestorecommerceCountry } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country.js';
import { protoMetadata as metaPackageIoRestorecommerceTimezone } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone.js';
import { protoMetadata as metaPackageIoRestorecommerceContactPointType } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type.js';
import { protoMetadata as metaPackageIoRestorecommerceCustomer } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer.js';
import { protoMetadata as metaPackageIoRestorecommerceContactPoint } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point.js';
import { protoMetadata as metaPackageIoRestorecommerceCredential } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/credential.js';
import { protoMetadata as metaPackageIoRestorecommerceLocale } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale.js';
import { protoMetadata as metaPackageIoRestorecommerceLocation } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location.js';
import { protoMetadata as metaPackageIoRestorecommerceOrganization } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization.js';
import { protoMetadata as metaPackageIoRestorecommerceShop } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/shop.js';
import { protoMetadata as metaPackageIoRestorecommerceTax } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax.js';
import { protoMetadata as metaPackageIoRestorecommerceTaxType } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type.js';
import { protoMetadata as metaPackageIoRestorecommerceUnitCode } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/unit_code.js';
import { protoMetadata as metaPackageIoRestorecommerceTemplate } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/template.js';
import { protoMetadata as metaPackageIoRestorecommerceSetting } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/setting.js';
import { protoMetadata as metaPackageIoRestorecommerceCommand } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command.js';
import { protoMetadata as metaPackageIoRestorecommerceCurrency } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/currency.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceAddress,
  metaPackageIoRestorecommerceCountry,
  metaPackageIoRestorecommerceTimezone,
  metaPackageIoRestorecommerceContactPointType,
  metaPackageIoRestorecommerceCustomer,
  metaPackageIoRestorecommerceContactPoint,
  metaPackageIoRestorecommerceCredential,
  metaPackageIoRestorecommerceLocale,
  metaPackageIoRestorecommerceLocation,
  metaPackageIoRestorecommerceOrganization,
  metaPackageIoRestorecommerceShop,
  metaPackageIoRestorecommerceTaxType,
  metaPackageIoRestorecommerceTax,
  metaPackageIoRestorecommerceUnitCode,
  metaPackageIoRestorecommerceTemplate,
  metaPackageIoRestorecommerceSetting,
  metaPackageIoRestorecommerceCommand,
  metaPackageIoRestorecommerceCurrency
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
