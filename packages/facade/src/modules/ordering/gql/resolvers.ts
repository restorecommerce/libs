import { Resolvers  } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    async ordering(_, {}, ctx) {
      return {};
    }
  }
}
