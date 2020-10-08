import { RestoreCommerceContext } from '../iam/interfaces';
import {
  GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLObjectType,
  GraphQLString, GraphQLEnumType
} from 'graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { outputAddressType } from '../types/AddressType';
import { outputTypeOfContactPointType } from '../types/TypeOfContactPointType';
import { outputLocaleType } from '../types/LocaleType';
import { outputLocationType } from '../types/LocationType';
import { outputCountryType } from '../types/CountryType';
import { outputContactPointsType } from '../types/ContactPointType';
import { outputOrganizationType } from '../types/OrganizationType';
import { ScopeInputType } from '../types/ScopeType';
import { outputTaxType } from '../types/TaxType';
import { outputTypeOfTaxType } from '../types/TypeOfTaxType';
import { outputJobList } from '../types/JobType';

import { inputFilterType } from '../types/FilterOptsType';
import { sortEnum, sortType } from '../types/SortType';
import { jobsFilterType } from '../types/JobsFilterType';

import { EndpointHandler } from '../EndpointHandler';
import { cfg } from '../config';
import { outputUsersType, ResponseSafeUserType } from '../types/UserType';
import { outputCommandType } from '../types/CommandType';
import { outputRoleType } from '../types/RoleType';

import { outputRuleType } from '../types/RuleType';
import { outputPolicyType } from '../types/PolicyType';
import { outputPolicySetType } from '../types/PolicySetType';

import * as _ from 'lodash';
import * as Long from 'long';

import tryRequest from '../iam/resolver';

import { queryServices, } from '../utils';
import { SearchResultType } from '../types/SearchType';
import { ErrorType, ErrorListType } from '../types/ErrorType';
import { trackFulfillment } from './trackFulfillment';

import { getLabel } from './getLabel';
import { FulfillmentData } from '../types/FulfillmentType';
import { getAllFulfillments } from './getAllFulfillments';
import { labelType } from '../types/LabelType';
import { TracklabelType } from '../types/LabelType';

import { getAllPermissions } from './getAllPermissions';
import { fullTextSearch } from './fullTextSearch';
import { outputTimezoneType } from '../types/TimezoneType';
import { getAllScheduledJobs } from './getAllScheduledJobs';
import { outputOrderType } from '../types/OrderType';
import { outputPriceGroupType } from '../types/PriceGroupType';
import { outputProductCategoryType } from '../types/ProductCategoryType';
import { outputProductPrototypeType } from '../types/ProductPrototypeType';
import { outputProductType } from '../types/ProductType';
import { outputManufacturerType } from '../types/ManufacturerType';
import { outputCustomerType } from '../types/CustomerType';

import { outputFileType } from '../types/FileType';
import { outputFileListType } from '../types/FileListType';
import { getFile } from './getFile';
import { getFileList } from './getFileList';
import { outputFulfillmentCourierType } from '../types/TypeOfFulfillmentCourierType';

const inputArguments = {
  limit: { type: GraphQLInt },
  offset: { type: GraphQLInt },
  filter: { type: new GraphQLList(inputFilterType) },
  sort: { type: sortType },
  scope: { type: ScopeInputType }
};

const inputUserRole = new GraphQLInputObjectType({
  name: 'inputUserRole',
  description: 'Used to filter a user by a role association',
  fields: () => ({
    role: {
      type: GraphQLString,
      description: 'A user role'
    },
    organizations: {
      type: new GraphQLList(GraphQLString),
      description: 'Organizations linked to the role'
    }
  })
});

const statusEnum = new GraphQLEnumType({
  name: 'status',
  description: 'status of fulfillments',
  values: {
    Created: { value: 'Created' },
    InProgress: { value: 'InProgress' },
    Fulfilled: { value: 'Fulfilled' }
  }
});
const trackArgs = {
  orderId: {
    type: GraphQLString,
  }
};

const allFulfillments = {
  OrderStatus: { type: statusEnum }
};


const BucketEnum = new GraphQLEnumType({
  name: 'BucketNames',
  description: 'BucketNames',
  values: {
    usercontent: {
      value: 'usercontent'
    },
    invoices:
    {
      value: 'invoices'
    }
  }
});
const fileTypeArgs = {
  key: {
    type: GraphQLString,
    description: 'File Key Name',
  },
  bucket: {
    type: BucketEnum,
    description: 'Bucket name',
  }
};

const fileListArgs = {
  bucket: {
    type: BucketEnum,
    description: 'Bucket name',
  }
};

const userInputArguments = _.merge({}, inputArguments, {
  role_association: {
    type: inputUserRole
  }
});

export const outputPermissionsType = new GraphQLObjectType({
  name: 'outputPermissionsType',
  description: 'Permissions output',
  fields: () => ({
    details: {
      type: GraphQLJSON,
    },
    error: {
      type: ErrorType,
    },
  }),
});


const query = async (resourceName: string, root: any, args: any, ctx: RestoreCommerceContext, queryFn?: Function) => {
  const endpointHandler = new EndpointHandler(resourceName);
  args = endpointHandler.processInputOptions(args); // preprocess input arguments

  if (!queryFn) {
    queryFn = async (queryArgs: any) => {
      let output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };
      return endpointHandler.resolveInputArguments(output, queryArgs);
    };
  }

  return tryRequest('', {
    entity: resourceName,
    args
  }, ctx, queryFn);
};

const scheduledJobsInputArgs = {
  filter: {
    type: jobsFilterType,
  },
  limit: {
    type: GraphQLInt
  },
  sort: {
    type: sortEnum
  }
};


const textSearchInputArgs = {
  collection: {
    type: GraphQLString,
    description: 'Name of the indexed collection',
  },
  text: {
    type: GraphQLString,
    description: 'Input text.',
  },
};

export const outputServicesType = new GraphQLObjectType({
  name: 'outputServicesType',
  description: 'Service names',
  fields: () => ({
    details: {
      type: new GraphQLList(GraphQLString),
    },
    error: {
      type: ErrorListType,
    },
  }),
});

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root of all queries',
  fields: {
    getAllAddresses: {
      type: outputAddressType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('address', root, args, ctx);
      }
    },

    getAllContactPointTypes: {
      type: outputTypeOfContactPointType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('contact_point_type', root, args, ctx);
      }
    },

    getAllContactPoints: {
      type: outputContactPointsType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('contact_point', root, args, ctx, async (queryArgs) => {
          let output = {
            details: [],
            error: {
              code: [],
              message: []
            }
          };
          output = await new EndpointHandler('contact_point').resolveInputArguments(output, queryArgs);
          _.forEach(output.details, (item, i) => {
            if (item.phone_number) {
              output.details[i].phone_number = (item.phone_number as Long).toNumber();
            }
          });
          return output;
        });
      }
    },

    getAllCountries: {
      type: outputCountryType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('country', root, args, ctx);
      }
    },

    getAllMicroServices: {
      type: outputServicesType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        const reflectionCfg = cfg.get('client:reflection-srv');
        return tryRequest('read', { entity: 'reflection', args: {} }, ctx, async () => queryServices(_.keys(reflectionCfg), root, args, ctx));
      }
    },

    getAllLocales: {
      type: outputLocaleType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('locale', root, args, ctx);
      }
    },

    getAllTimezones: {
      type: outputTimezoneType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('timezone', root, args, ctx);
      }
    },

    getAllLocations: {
      type: outputLocationType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('location', root, args, ctx);
      }
    },

    getAllOrganizations: {
      type: outputOrganizationType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        const endpointHandler = new EndpointHandler('organization');
        return query('organization', root, args, ctx, async (queryArgs) => {
          let output = {
            details: [],
            error: {
              code: [],
              message: []
            }
          };
          const result = await endpointHandler.resolveInputArguments(output, queryArgs);
          for (let i = 0; i < result.details.length; i++) {
            const org = result.details[i];
            if (!_.isEmpty(org.accounts)) {
              const unmarshalledAccounts = [];
              for (let account of org.accounts) {
                const key = account.account.charAt(0).toUpperCase() + account.account.substr(1) + 'Account';
                const transferType = account.transferType;
                const unmarshalled = _.merge(account[account.account], { transferType, type: key });
                unmarshalledAccounts.push(unmarshalled);
              }
              org.accounts = unmarshalledAccounts;
            }
          }

          return result;
        });
      },
    },

    getAllTaxes: {
      type: outputTaxType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('tax', root, args, ctx);
      }
    },

    getAllTaxTypes: {
      type: outputTypeOfTaxType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('tax_type', root, args, ctx);
      }
    },

    // List all the current scheduled jobs
    getAllScheduledJobs: {
      type: outputJobList,
      args: scheduledJobsInputArgs,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        const _args = _.cloneDeep(args);
        return query('job', root, args, ctx, () => {
          return getAllScheduledJobs(_args);
        });

      }
    },

    // List all the available commands
    getAllCommands: {
      type: outputCommandType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('command', root, args, ctx);
      }
    },

    getAllRoles: {
      type: outputRoleType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('role', root, args, ctx);
      }
    },

    getAllUsers: {
      type: outputUsersType,
      args: userInputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        const gqlArguments = _.cloneDeep(args);

        return query('user', root, args, ctx, async (queryArgs: any) => {
          let output = {
            details: [],
            error: {
              code: [],
              message: []
            }
          };

          if (gqlArguments && gqlArguments.role_association && gqlArguments.role_association.role) {
            // user-specific
            const customQueries = queryArgs.custom_queries || [];
            let customArgs = queryArgs.custom_arguments || {};

            if (customArgs && !!customArgs.value) {
              customArgs = JSON.parse(customArgs.value.toString());
            }

            const urns = cfg.get('authorization:urns');
            _.merge(customArgs, {
              userRole: gqlArguments.role_association.role,
              scopingEntity: urns.organization,
              scopingInstances: gqlArguments.role_association.organizations
            });
            customQueries.push('filterByRoleAssociation');
            customArgs = { value: Buffer.from(JSON.stringify(customArgs)) };

            queryArgs.custom_arguments = customArgs;
            queryArgs.custom_queries = customQueries;
          }

          return new EndpointHandler('user').resolveInputArguments(output, queryArgs);
        });
      }
    },

    getAllPolicySets: {
      type: outputPolicySetType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('policy_set', root, args, ctx);
      }
    },

    getAllPolicies: {
      type: outputPolicyType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('policy', root, args, ctx);
      }
    },

    getAllRules: {
      type: outputRuleType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('rule', root, args, ctx);
      }
    },

    getAllPermissions: {
      type: outputPermissionsType,
      args: {},
      resolve: getAllPermissions
    },

    getAllOrders: {
      type: outputOrderType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('order', root, args, ctx);
      }
    },

    getAllManufactures: {
      type: outputManufacturerType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('manufacturer', root, args, ctx);
      }
    },

    getAllCustomers: {
      type: outputCustomerType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('customer', root, args, ctx);
      }
    },

    getAllPriceGroups: {
      type: outputPriceGroupType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('price_group', root, args, ctx);
      }
    },

    getAllProductCategories: {
      type: outputProductCategoryType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('product_category', root, args, ctx);
      }
    },

    getAllProductPrototype: {
      type: outputProductPrototypeType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('product_prototype', root, args, ctx);
      }
    },

    getAllProducts: {
      type: outputProductType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('product', root, args, ctx);
      }
    },
    getLabel: {
      type: labelType,
      args: trackArgs,
      resolve: getLabel
    },
    getAllFulfillments: {
      type: FulfillmentData,
      args: allFulfillments,
      resolve: getAllFulfillments
    },

    trackFulfillment: {
      type: TracklabelType,
      args: trackArgs,
      resolve: trackFulfillment
    },

    getAllFulfillmentCouriers: {
      type: outputFulfillmentCourierType,
      args: inputArguments,
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        return query('fulfillment_courier', root, args, ctx);
      }
    },

    fullTextSearch: {
      type: SearchResultType,
      args: textSearchInputArgs,
      resolve: fullTextSearch
    },

    getFileList: {
      type: outputFileListType,
      args: fileListArgs,
      resolve: getFileList
    },
    getFile: {
      type: outputFileType,
      args: fileTypeArgs,
      resolve: getFile
    },

    session: {
      type: ResponseSafeUserType,
      args: {},
      resolve: async (root, args, ctx: RestoreCommerceContext) => {
        // checking token & user session info
        return tryRequest('session', null, ctx, () => {
          return ctx.session ? ctx.session.data : null;
        });
      }
    }
  }
});
