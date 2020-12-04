import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { metaService as addressMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { metaService as countryMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { metaService as timezoneMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { metaService as contact_point_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { metaService as customerMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { metaService as contact_pointMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { metaService as localeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { metaService as locationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { metaService as organizationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { metaService as taxMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { metaService as tax_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { namespace } from "../interfaces";
import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from "path";

registerTypings();

const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));

[
  [addressMetaService, 'address'],
  [countryMetaService, 'country'],
  [timezoneMetaService, 'timezone'],
  [contact_point_typeMetaService, 'contact_point_type'],
  [customerMetaService, 'customer'],
  [contact_pointMetaService, 'contact_point'],
  [localeMetaService, 'locale'],
  [locationMetaService, 'location'],
  [organizationMetaService, 'organization'],
  [taxMetaService, 'tax'],
  [tax_typeMetaService, 'tax_type'],
].forEach(([service, subspace]: any) => {
  const {mutations, queries} = getWhitelistBlacklistConfig(service, [], serviceConfig.get(namespace))

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key], !queries.has(key) && mutations.has(key), subspace)
  })
});

export const schema = () => generateSchema(namespace, 'Resource');
