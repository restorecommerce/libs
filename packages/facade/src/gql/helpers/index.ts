import { CRUDService } from '@restorecommerce/rc-grpc-clients';
import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql';
import { resolveCRUDReadResources, ResolveCRUDReadResourcesArgsInput } from './resolver';
import { createSchemaCreateResourcesField, createSchemaDeleteResourcesField, createSchemaReadResourcesField, createSchemaUpdateResourcesField } from './schema';



