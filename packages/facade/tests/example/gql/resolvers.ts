import { Resolvers  } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    async example(_, {input}, ctx) {
      return {
        message: `Context: ${ctx.example}. Echo: ${input.echo ?? '-'}`
      };
    }
  }
}
