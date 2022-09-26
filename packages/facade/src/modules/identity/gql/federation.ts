import { schema } from "./schema";
import { IdentityServiceConfig, namespace } from "../interfaces";
import { buildFederatedSubscriptionSchema } from '../../../gql/protos';
import { subServices } from "./types";

export const FederatedResourceSchema = (cfg: IdentityServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
