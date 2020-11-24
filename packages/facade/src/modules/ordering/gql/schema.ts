import { registerTypings } from "./types";
import { getAndGenerateSchema } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { namespace } from "../interfaces";

registerTypings();

export const schema = () => getAndGenerateSchema(metaService, namespace, 'Ordering');
