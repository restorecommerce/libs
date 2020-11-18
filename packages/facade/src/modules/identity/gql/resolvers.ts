import { Resolvers  } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    async identity(_, {input}, ctx) {
      return {
        message: `Echo: ${input?.echo ?? '-'}`
      };
    }
  }
}
