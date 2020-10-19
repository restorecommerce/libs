import { createGenericReadResolver } from '../resolvers';
import { Resolvers } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    getAllTimezones: createGenericReadResolver(
      ctx => ctx.resources.client.timezone
    )
  }
}
