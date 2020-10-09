import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";
import { outputTimezoneType } from "./types/TimezoneType";
// import { inputFilterType } from "../../types/FilterOptsType";
// import { ScopeInputType } from "../../types/ScopeType";
// import { sortType } from "../../types/SortType";

const inputArguments = {
  limit: { type: GraphQLInt },
  // offset: { type: GraphQLInt },
  // filter: { type: new GraphQLList(inputFilterType) },
  // sort: { type: sortType },
  // scope: { type: ScopeInputType }
};

export const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root of all queries',
  fields: {
    getAllTimezones: {
      type: outputTimezoneType,
      args: inputArguments,
      resolve() {
        
      }
    },

  }
});

export const schema = new GraphQLSchema({
  query
})
