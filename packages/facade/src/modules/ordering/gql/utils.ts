import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from 'path';
import { getWhitelistBlacklistConfig } from "../../../gql/protos";

// TODO Configurable config
const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));

export const {mutations, queries} = getWhitelistBlacklistConfig(metaService, ['Read'], serviceConfig.get('ordering'))

