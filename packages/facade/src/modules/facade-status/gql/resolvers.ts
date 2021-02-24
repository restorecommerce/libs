import { Resolvers  } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {

    async status(_, __, ctx) {
      return {
        running: ctx.facade.listening
      }
    }
  }
}
