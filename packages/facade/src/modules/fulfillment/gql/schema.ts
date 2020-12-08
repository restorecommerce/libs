import { registerTypings } from "./types";
import { getAndGenerateSchema, ServiceConfig } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { namespace } from "../interfaces";

registerTypings();

export const schema = (cfg: ServiceConfig) => getAndGenerateSchema(metaService, namespace, 'Fulfillment', cfg, ['getAllFulfillments', 'getLabels', 'trackFulfillment']);
