// import { GraphQLSchema, printSchema } from 'graphql';
// import gqlTag from 'graphql-tag';
// import QueryType from './query';
// import MutationType from './mutation';
// import { buildFederatedSchema } from '@apollo/federation';
// import { mergeSchemas } from 'graphql-tools';


// import { Resolvers } from './todo/generated/index';

// const resolvers: Resolvers = {
//   RootQuery: {
//     getAllUsers: async ({}, arg, ctx) => {


//     }
//   }
//   Mutation: {
//     registerUser: async ({}, {input}, ctx) => {

//     }
//   }

// };


// const schema = new GraphQLSchema({
//   query: QueryType,
//   mutation: MutationType
// });

// const federatedSchema = buildFederatedSchema([{
//   typeDefs: gqlTag(printSchema(schema))
// }]);

// export default mergeSchemas({
//   schemas: [
//     federatedSchema,
//     schema
//   ]
// });
