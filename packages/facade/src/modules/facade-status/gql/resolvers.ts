import { type Resolvers  } from './schema.generated.js';

export const resolvers: Resolvers = {
  Query: {

    status: async (_: any, __: any, ctx: any) => ({
      running: ctx.facade.listening
    })
  }
};
