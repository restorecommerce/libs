import { addResolversToSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

export const ExampleSchema = addResolversToSchema({
  schema,
  resolvers
});
