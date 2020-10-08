import { addResolveFunctionsToSchema } from "apollo-server-koa";
import { ResourcesResolvers } from "./resolvers";
import { ResourcesSchema as RawResourcesSchema } from "./schema";

export const ResourcesSchema = addResolveFunctionsToSchema({ schema: RawResourcesSchema, resolvers: ResourcesResolvers });
