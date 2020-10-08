import { GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull } from "graphql";
import { FilterOptionsInputType } from "./FilterType";
import { ScopeInputType } from "./ScopeType";
import { SortInputType } from "./SortType";

export const QueryAllInputType  = new GraphQLInputObjectType({
  name: 'QueryAllInputType',
  fields: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    filter: { type: new GraphQLList(new GraphQLNonNull(FilterOptionsInputType)) },
    sort: { type: SortInputType },
    scope: { type: ScopeInputType }
  }
})
