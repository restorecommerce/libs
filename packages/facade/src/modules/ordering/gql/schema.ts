import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { registerTypings } from "./types";
import { getGQLSchemas } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { mutations, queries } from "./utils";

registerTypings();

const config: any = {
  query: new GraphQLObjectType({
    name: 'Query',
    fields: getGQLSchemas(metaService, (key: any) => queries.has(key))
  })
};

if (mutations.size > 0) {
  config.mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: getGQLSchemas(metaService, (key: any) => mutations.has(key))
  })
}

export const schema = new GraphQLSchema(config);
