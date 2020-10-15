import { buildFederatedSchema } from '@apollo/federation';
import { Resolvers  } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    async getAllTimezones(_, {input}, ctx) {
      return {
        payload: [],
        status: {
          code: 1,
          key: 'ok',
        }

      }
    }
  }
}
