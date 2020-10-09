import { addResolveFunctionsToSchema } from "apollo-server-koa";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

export const ExampleSchema = addResolveFunctionsToSchema({ schema, resolvers });
