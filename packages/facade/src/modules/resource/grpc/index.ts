import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService as addressMetaService,
  protobufPackage as addressProtobufPackage,
  Service as addressService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import {
  metaService as countryMetaService,
  protobufPackage as countryProtobufPackage,
  Service as countryService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import {
  metaService as timezoneMetaService,
  protobufPackage as timezoneProtobufPackage,
  Service as timezoneService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import {
  metaService as contact_point_typeMetaService,
  protobufPackage as contact_point_typeProtobufPackage,
  Service as contact_point_typeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import {
  metaService as customerMetaService,
  protobufPackage as customerProtobufPackage,
  Service as customerService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import {
  metaService as contact_pointMetaService,
  protobufPackage as contact_pointProtobufPackage,
  Service as contact_pointService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import {
  metaService as localeMetaService,
  protobufPackage as localeProtobufPackage,
  Service as localeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import {
  metaService as locationMetaService,
  protobufPackage as locationProtobufPackage,
  Service as locationService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import {
  metaService as organizationMetaService,
  protobufPackage as organizationProtobufPackage,
  Service as organizationService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import {
  metaService as taxMetaService,
  protobufPackage as taxProtobufPackage,
  Service as taxService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import {
  metaService as tax_typeMetaService,
  protobufPackage as tax_typeProtobufPackage,
  Service as tax_typeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class ResourceSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  address = getGRPCService<addressService>(this, addressProtobufPackage, 'Service', addressMetaService);
  country = getGRPCService<countryService>(this, countryProtobufPackage, 'Service', countryMetaService);
  timezone = getGRPCService<timezoneService>(this, timezoneProtobufPackage, 'Service', timezoneMetaService);
  contact_point_type = getGRPCService<contact_point_typeService>(this, contact_point_typeProtobufPackage, 'Service', contact_point_typeMetaService);
  customer = getGRPCService<customerService>(this, customerProtobufPackage, 'Service', customerMetaService);
  contact_point = getGRPCService<contact_pointService>(this, contact_pointProtobufPackage, 'Service', contact_pointMetaService);
  locale = getGRPCService<localeService>(this, localeProtobufPackage, 'Service', localeMetaService);
  location = getGRPCService<locationService>(this, locationProtobufPackage, 'Service', locationMetaService);
  organization = getGRPCService<organizationService>(this, organizationProtobufPackage, 'Service', organizationMetaService);
  tax = getGRPCService<taxService>(this, taxProtobufPackage, 'Service', taxMetaService);
  tax_type = getGRPCService<tax_typeService>(this, tax_typeProtobufPackage, 'Service', tax_typeMetaService);
}
