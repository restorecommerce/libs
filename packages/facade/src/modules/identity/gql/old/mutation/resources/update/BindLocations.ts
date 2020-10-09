import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { ErrorType } from '../../../types/ErrorType';

import tryRequest from '../../../iam/resolver';
import { bindHierarchicalResources } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'bindLocations',
  inputFields: {
    parent: {
      type: GraphQLString,
    },
    child: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({ parent, child }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', [{
      instance: { id: parent },
      type: 'location',
      fields: ['children_ids']
    }, {
      instance: { id: child },
      type: 'location',
      fields: ['parent_id']
    }], ctx, async () => bindHierarchicalResources('location', parent.id, child.id, ctx));
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error
    }
  }
});

