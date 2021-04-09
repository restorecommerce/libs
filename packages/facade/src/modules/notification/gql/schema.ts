import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, NotificationServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: NotificationServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Notification');
