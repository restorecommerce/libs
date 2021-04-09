import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas,  } from "../../../gql/protos";
import { namespace, SchedulingServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: SchedulingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Scheduling');
