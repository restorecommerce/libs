import { Resolvers } from './schema/schema.generated';
import { schema } from './schema2/index';

export {schema};

const resolvers: Resolvers = {
  RootQuery: {
    getAllTimezones: async ({}, {input}, ctx) => {
      // input.
      return null;
      // ctx.grpc.resources.timezone.Read({
      // })
    }
  },
  Mutation: {
  }

};
