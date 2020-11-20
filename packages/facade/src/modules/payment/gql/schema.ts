import { registerTypings } from "./types";
import { generateSchema, getGQLSchemas, registerResolverSchema } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { mutations, queries } from "./utils";

registerTypings();

const namespace = 'payment';

const schemas = getGQLSchemas(metaService);

Object.keys(schemas).forEach(key => {
  registerResolverSchema(namespace, key, schemas[key], !queries.has(key) && mutations.has(key))
})

export const schema = () => generateSchema(namespace, 'Payment');
