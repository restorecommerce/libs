import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { QueryAllInputType } from "../shared/index";
import { OutputTimezoneType } from "./types/TimezoneType";

export const ResourcesQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    getAllTimezones: {
      type: OutputTimezoneType,
      args: {
        input: {
          type: QueryAllInputType,
        }
      },
    },
  }
});

export const ResourcesSchema = new GraphQLSchema({
  query: ResourcesQueryType,
});
