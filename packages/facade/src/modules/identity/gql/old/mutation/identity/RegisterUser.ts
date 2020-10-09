import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { errors } from '../../config';
import { ErrorType } from '../../types/ErrorType';
import { UserInputType } from '../../types/UserType';
import { getRepository } from '../../iam/repository';
import logger from '../../logger';
import tryRequest from '../../iam/resolver';
import { EndpointHandler } from '../../EndpointHandler';
import { cfg } from '../../config';
import * as uuid from 'uuid';
import { toStruct } from '@restorecommerce/grpc-client';
import { UnauthenticatedContext } from '../../iam/interfaces';
import { ContactPointUserInputType } from '../../types/ContactPointType';
import { AddressUserInputType } from '../../types/AddressType';

export const organizationInputType = new GraphQLInputObjectType({
  name: 'orgInputType',
  description: 'Org data',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    address: {
      type: AddressUserInputType
    }
  })
});

export default mutationWithClientMutationId({
  name: 'RegisterUser',
  inputFields: {
    user: {
      type: UserInputType
    },
    organization: {
      type: organizationInputType
    },
    contact_points: {
      type: new GraphQLList(ContactPointUserInputType)
    }
  },
  mutateAndGetPayload: async ({ user, organization, contact_points }, ctx: UnauthenticatedContext) => {
    // `register` is not authenticated, as it is performed by an external user
    if (!ctx || !ctx.session) {
      ctx.session = {
        data: {
          unauthenticated: true
        }
      };
    }
    return tryRequest('create', {
      type: 'user',
      instance: user,
      fields: Object.keys(user)
    }, ctx, async () => {
      const repository = getRepository();
      try {
        if (!user.user_type) {
          throw new Error(`Please specify one of the user types
                       (Individual User or Organizational User or Guest user`);
        }
        const endpointHandler = new EndpointHandler('organization');
        const output = {
          status: '',
          error: {
            code: '',
            message: ''
          }
        };
        const organizationService = endpointHandler.getResourceService();
        const urns = cfg.get('authorization:urns');
        // generate a userID
        user.id = uuid.v4().replace(/-/g, '');
        let orgID;
        let orgMeta;
        let userMeta;
        let contactPointIDs = [];

        // to create address and contact_point resources
        const addressEPHandler = new EndpointHandler('address');
        const addressService = addressEPHandler.getResourceService();
        const cpEPHandler = new EndpointHandler('contact_point');
        const cpService = cpEPHandler.getResourceService();
        if (user.user_type === 'ORG_USER') {
          orgID = uuid.v4().replace(/-/g, '');
          // By default the created org itself is the owner when registering the user
          orgMeta = {
            owner: [
              {
                id: urns.ownerIndicatoryEntity,
                value: urns.orgScope
              },
              {
                id: urns.ownerInstance,
                value: orgID
              }
            ]
          };
          if (!organization) {
            throw new Error('Organization details are required');
          }
          if (!organization.name) {
            throw new Error('Please specify an Organization name');
          }
          if (!organization.address) {
            throw new Error('Please specify an Organization address');
          }
          const orgAddress = EndpointHandler.convertToObject(organization.address);
          orgAddress.id = uuid.v4().replace(/-/g, '');
          orgAddress.meta = orgMeta;
          const orgAddressResult = await addressService.create({ items: orgAddress });
          logger.info('Organizational Address resource created:', { address: orgAddressResult });
          if (orgAddressResult && orgAddressResult.error) {
            output.error.code = orgAddressResult.error.code;
            const message = orgAddressResult.error.message;
            const details = orgAddressResult.error.details;
            output.error.message = `${message} : ${details}`;
            logger.info('Error creating address resource:',
              { message: orgAddressResult.error });
            return output;
          }

          const orgResult = await organizationService.create({
            items: [{
              id: orgID,
              name: organization.name,
              address_id: orgAddress.id,
              meta: orgMeta
            }]
          });
          
          logger.info(`Organization ${organization.name} has been created`);
          if (orgResult && orgResult.error) {
            output.error.code = orgResult.error.code;
            const message = orgAddressResult.error.message;
            const details = orgAddressResult.error.details;
            output.error.message = `${message} : ${details}`;
            logger.info('Error creating Organization:', orgResult.error.message);
            return output;
          }
        }

        // By default make the user himself as admin for the org when he registers and add that
        // orgs scopeProductUpdateInputType by default
        const roleEP = new EndpointHandler('role');
        const roleService = roleEP.getResourceService();
        let roleResult = await roleService.read({
          filter: toStruct({
            name: {
              $eq: 'Admin'
            }
          })
        });
        let adminRoleID: string;
        let normalRoleID: string;
        if (roleResult.data && roleResult.data.items && roleResult.data.items.length > 0) {
          adminRoleID = roleResult.data.items[0].id;
        } else {
          logger.error('Admin role not found in the database');
          throw 'SYSTEM_ERROR';
        }

        // User
        roleResult = await roleService.read({
          filter: toStruct({
            name: {
              $eq: 'User'
            }
          })
        });
        if (roleResult.data && roleResult.data.items && roleResult.data.items.length > 0) {
          normalRoleID = roleResult.data.items[0].id;
        } else {
          logger.error('Admin role not found in the database');
          throw 'SYSTEM_ERROR';
        }

        let role_associations = [];
        if (user.user_type === 'ORG_USER') {
          role_associations = [
            {
              role: adminRoleID,
              attributes: [
                {
                  id: urns.roleScopingEntity,
                  value: urns.orgScope
                },
                {
                  id: urns.roleScopingInstance,
                  value: orgID
                }
              ]
            },
            {
              role: normalRoleID,
              attributes: [
                {
                  id: urns.roleScopingEntity,
                  value: urns.orgScope
                },
                {
                  id: urns.roleScopingInstance,
                  value: orgID
                }
              ]
            }
          ];
          user.default_scope = orgID;
        } else if (user.user_type === 'INDIVIDUAL_USER' || user.user_type === 'GUEST') {
          role_associations = [
            {
              role: adminRoleID,
              attributes: [
                {
                  id: urns.roleScopingEntity,
                  value: urns.user
                },
                {
                  id: urns.roleScopingInstance,
                  value: user.id
                }
              ]
            },
            {
              role: normalRoleID,
              attributes: [
                {
                  id: urns.roleScopingEntity,
                  value: urns.user
                },
                {
                  id: urns.roleScopingInstance,
                  value: user.id
                }
              ]
            }
          ];
          userMeta = {
            owner: [
              {
                id: urns.ownerIndicatoryEntity,
                value: urns.user
              },
              {
                id: urns.ownerInstance,
                value: user.id
              }
            ]
          };
          user.default_scope = user.id;
        }

        // For guest everything is same as normal user, except he would not get
        // and email and he will always be in deactivated state in our database
        if (user.user_type === 'GUEST') {
          user.guest = true;
        }

        user.role_associations = role_associations;
        const regResult = await repository.register(user);
        endpointHandler.handleCreateResourcesErrors(regResult, output);

        if (!contact_points || contact_points.length === 0) {
          output.error.code = errors['INVALID_CONTACT_POINT'].code;
          output.error.message = errors['INVALID_CONTACT_POINT'].message;
          return output;
        }
        for (let contactPoint of contact_points) {
          if (!contactPoint.address) {
            output.error.code = errors['INVALID_ADDRESS'].code;
            output.error.message = errors['INVALID_ADDRESS'].message;
            return output;
          } else {
            const address = EndpointHandler.convertToObject(contactPoint.address);
            address.id = uuid.v4().replace(/-/g, '');
            if (user.user_type === 'ORG_USER') {
              address.meta = orgMeta;
            } else if (user.user_type === 'INDIVIDUAL_USER' || user.user_type === 'GUEST') {
              address.meta = userMeta;
            }
            const addressResult = await addressService.create({ items: address });
            logger.info('Address resource created:', { address: addressResult });
            if (addressResult && addressResult.error) {
              output.error.code = addressResult.error.code;
              const message = addressResult.error.message;
              const details = addressResult.error.details;
              output.error.message = `${message} : ${details}`;
              logger.info('Error creating address resource:',
                { message: addressResult.error });
              return output;
            }
            delete contactPoint.address;
            contactPoint = EndpointHandler.convertToObject(contactPoint);
            contactPoint.physical_address_id = address.id;
            if (user.user_type === 'ORG_USER') {
              contactPoint.meta = orgMeta;
            } else if (user.user_type === 'INDIVIDUAL_USER' || user.user_type === 'GUEST') {
              contactPoint.meta = userMeta;
            }

            // create contact point
            const cpResult = await cpService.create({ items: contactPoint });
            logger.info('Contact_point created:', { contact_point: cpResult });
            if (cpResult && cpResult.error) {
              output.error.code = cpResult.error.code;
              const message = cpResult.error.message;
              const details = cpResult.error.details;
              output.error.message = `${message} : ${details}`;
              logger.info('Error creating Contact_Point resource:',
                { message: cpResult.error });
              return output;
            }
            if (cpResult && cpResult.data && cpResult.data.items) {
              for (let cpObj of cpResult.data.items) {
                contactPointIDs.push(cpObj.id);
              }
            }
          }
        }

        // create a customer associated with this user account
        let customerObj;
        if (user.user_type === 'ORG_USER') {
          // update Organization for address_id and contact_point_id
          let orgObj;
          const orgResult = await organizationService.read({
            filter: toStruct({
              id: {
                $eq: orgID
              }
            })
          });
          if (orgResult.data && orgResult.data.items && orgResult.data.items.length > 0) {
            orgObj = orgResult.data.items[0];
          } else {
            logger.error('No such Organization exists');
            throw 'SYSTEM_ERROR';
          }
          // orgObj.address_id = address.id;
          orgObj.contact_point_ids = contactPointIDs;
          const orgUpdate = await organizationService.update({
            items: [orgObj]
          });
          logger.info('Organization updated for address and contact point:', { orgUpdate });
          customerObj = {
            items: [{
              org_user: {
                user_id: user.id,
                organization_id: orgID
              },
              meta: orgMeta
            }]
          };
        } else if (user.user_type === 'INDIVIDUAL_USER' || user.user_type === 'GUEST') {
          customerObj = {
            items: [{
              individual_user: {
                user_id: user.id,
                contact_point_ids: contactPointIDs
              },
              meta: userMeta
            }]
          };
        }

        const customerEPHandler = new EndpointHandler('customer');
        const customerService = customerEPHandler.getResourceService();
        const customerResult = await customerService.create(customerObj);
        if (customerResult && customerResult.error) {
          output.error.code = customerResult.error.code;
          const message = customerResult.error.message;
          const details = customerResult.error.details;
          output.error.message = `${message} : ${details}`;
          logger.info('Error creating Customer resource:', { message: customerResult.error });
          return output;
        }
        logger.info('Customer resource created:', { customer: customerResult });
      } catch (err) {
        logger.error(err);
        return {
          error: errors[err] || errors.SYSTEM_ERROR
        };
      }

      return {
        status: `User ${user.name} registered successfully`
      };
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
