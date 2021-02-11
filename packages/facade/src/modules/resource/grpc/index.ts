import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata as addressMetaService,
  protobufPackage as addressProtobufPackage,
  Service as addressService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import {
  protoMetadata as countryMetaService,
  protobufPackage as countryProtobufPackage,
  Service as countryService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import {
  protoMetadata as timezoneMetaService,
  protobufPackage as timezoneProtobufPackage,
  Service as timezoneService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import {
  protoMetadata as contact_point_typeMetaService,
  protobufPackage as contact_point_typeProtobufPackage,
  Service as contact_point_typeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import {
  protoMetadata as customerMetaService,
  protobufPackage as customerProtobufPackage,
  Service as customerService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import {
  protoMetadata as contact_pointMetaService,
  protobufPackage as contact_pointProtobufPackage,
  Service as contact_pointService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import {
  protoMetadata as localeMetaService,
  protobufPackage as localeProtobufPackage,
  Service as localeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import {
  protoMetadata as locationMetaService,
  protobufPackage as locationProtobufPackage,
  Service as locationService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import {
  protoMetadata as organizationMetaService,
  protobufPackage as organizationProtobufPackage,
  Service as organizationService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import {
  protoMetadata as taxMetaService,
  protobufPackage as taxProtobufPackage,
  Service as taxService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import {
  protoMetadata as tax_typeMetaService,
  protobufPackage as tax_typeProtobufPackage,
  Service as tax_typeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import {
  protoMetadata as commandMetaService,
  protobufPackage as commandProtobufPackage,
  Service as commandService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class ResourceSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  address = getGRPCService<addressService>(this, addressProtobufPackage, addressMetaService.fileDescriptor.service![0]);
  country = getGRPCService<countryService>(this, countryProtobufPackage, countryMetaService.fileDescriptor.service![0]);
  timezone = getGRPCService<timezoneService>(this, timezoneProtobufPackage, timezoneMetaService.fileDescriptor.service![0]);
  contact_point_type = getGRPCService<contact_point_typeService>(this, contact_point_typeProtobufPackage, contact_point_typeMetaService.fileDescriptor.service![0]);
  customer = getGRPCService<customerService>(this, customerProtobufPackage, customerMetaService.fileDescriptor.service![0]);
  contact_point = getGRPCService<contact_pointService>(this, contact_pointProtobufPackage, contact_pointMetaService.fileDescriptor.service![0]);
  locale = getGRPCService<localeService>(this, localeProtobufPackage, localeMetaService.fileDescriptor.service![0]);
  location = getGRPCService<locationService>(this, locationProtobufPackage, locationMetaService.fileDescriptor.service![0]);
  organization = getGRPCService<organizationService>(this, organizationProtobufPackage, organizationMetaService.fileDescriptor.service![0]);
  tax = getGRPCService<taxService>(this, taxProtobufPackage, taxMetaService.fileDescriptor.service![0]);
  tax_type = getGRPCService<tax_typeService>(this, tax_typeProtobufPackage, tax_typeMetaService.fileDescriptor.service![0]);
  command: any = getGRPCService<commandService>(this, commandProtobufPackage, commandMetaService.fileDescriptor.service![0]);
}
