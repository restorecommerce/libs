import { GraphQLInputObjectType, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import * as _ from 'lodash';
import { resolveNested } from '../utils';
import { InputAttribute } from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { ProductCategoryType } from './ProductCategoryType';
import { MetaType } from './MetaType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Product prototype ID'
  },
  name: {
    type: GraphQLString,
    description: 'Name of the product prototype'
  },
  description: {
    type: GraphQLString,
    description: 'Description of the product prototype'
  },
  category_id: {
    type: GraphQLString,
    description: 'Product Category ID to which this product category is linked'
  }
};

export const ProductPrototypeType = new GraphQLObjectType({
  name: 'ProductPrototypeType',
  description: 'ProductPrototypeType proto description',
  fields: () => (_.merge({}, fields, {
    productCategory: {
      type: ProductCategoryType,
      description: 'Product category to which this location is linked',
      resolve: ({ category_id }, args, ctx) => resolveNested(ctx,
        'product_category', category_id)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});

export const ProductPrototypeInputType = new GraphQLInputObjectType({
  name: 'ProductPrototypeInputType',
  description: 'ProductPrototypeInputType proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const outputProductPrototypeType = new GraphQLObjectType({
  name: 'outputProductPrototypeType',
  description: 'ProductCategory output description',
  fields: () => ({
    details: {
      type: new GraphQLList(ProductPrototypeType),
    },
    error: {
      type: ErrorListType,
    }
  }),
});

export const ProductPrototypeUpdateInputType = new GraphQLInputObjectType({
  name: 'ProductPrototypeUpdateInputType',
  fields: () => (_.merge({}, fields, {
  })),
});
