import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { protoMetadata as addressMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { protoMetadata as countryMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { protoMetadata as timezoneMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { protoMetadata as contact_point_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { protoMetadata as customerMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { protoMetadata as contact_pointMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { protoMetadata as localeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { protoMetadata as locationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { protoMetadata as organizationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { protoMetadata as taxMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { protoMetadata as tax_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { protoMetadata as commandMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command";
import { namespace, ResourceServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: ResourceServiceConfig) => {
  const subServices = [
    [addressMetaService.fileDescriptor.service![0], 'address', ['Read']],
    [countryMetaService.fileDescriptor.service![0], 'country', ['Read']],
    [timezoneMetaService.fileDescriptor.service![0], 'timezone', ['Read']],
    [contact_point_typeMetaService.fileDescriptor.service![0], 'contact_point_type', ['Read']],
    [customerMetaService.fileDescriptor.service![0], 'customer', ['Read']],
    [contact_pointMetaService.fileDescriptor.service![0], 'contact_point', ['Read']],
    [localeMetaService.fileDescriptor.service![0], 'locale', ['Read']],
    [locationMetaService.fileDescriptor.service![0], 'location', ['Read']],
    [organizationMetaService.fileDescriptor.service![0], 'organization', ['Read']],
    [taxMetaService.fileDescriptor.service![0], 'tax', ['Read']],
    [tax_typeMetaService.fileDescriptor.service![0], 'tax_type', ['Read']],
    [commandMetaService.fileDescriptor.service![0], 'command', ['Read']],
  ];

  subServices.forEach(([service, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg)

    const schemas = getGQLSchemas(service);

    Object.keys(schemas).forEach(key => {
      registerResolverSchema(cfg.root ? subspace : namespace, key, schemas[key], !queries.has(key) && mutations.has(key), cfg.root ? undefined : subspace)
    })
  });

  if (cfg.root) {
    return generateSchema(subServices.map(srv => {
      const name = srv[1] as string;
      return {
        prefix: 'Resource' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'Resource', namespace}]);
}
