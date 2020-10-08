import { GraphQLInputObjectType, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import * as _ from 'lodash';
import { InputAttribute } from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { resolveNested } from '../utils';
import { PriceGroupType } from './PriceGroupType';
import { ImageInputType } from './ImageType';
import { MetaType } from './MetaType';


export const ParentOutputType = new GraphQLObjectType({
  name: 'ParentOutputType',
  description: 'ParentOutputType proto description',
  fields: () => ({
    parent_id: {
      type: GraphQLString,
      description: 'Parent ID'
    }
  })
});

export const ParentInputType = new GraphQLInputObjectType({
  name: 'ParentInputType',
  description: 'ParentType proto description',
  fields: () => ({
    parent_id: {
      type: GraphQLString,
      description: 'Parent ID'
    }
  })
});

const fields = {
  id: {
    type: GraphQLString,
    description: 'Product Category ID',
  },
  name: {
    type: GraphQLString,
    description: 'Name of the product category'
  },
  description: {
    type: GraphQLString,
    description: 'Description of the product category'
  },
  price_group_id: {
    type: GraphQLString,
    description: 'Price Group ID to which this product category is linked'
  }
};

export const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategoryType',
  description: 'ProductCategory proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
    priceGroup: {
      type: PriceGroupType,
      description: 'Price Group to which this category is linked',
      resolve: ({ price_group_id }, args, ctx) => resolveNested(ctx, 'price_group', price_group_id)
    },
    parent: {
      type: ParentOutputType,
      description: 'Parent category of this product category'
    }
  }))
});
export const ProductCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryInputType',
  description: 'ProductCategory proto description',
  fields: () => (_.merge({}, fields, {
    image: {
      type: ImageInputType
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    parent: {
      type: ParentInputType,
      description: 'Parent category of this product category'
    }
  })),
});
export const outputProductCategoryType = new GraphQLObjectType({
  name: 'outputProductCategoryType',
  description: 'ProductCategory output description',
  fields: () => ({
    details: {
      type: new GraphQLList(ProductCategoryType),
    },
    error: {
      type: ErrorListType,
    }
  }),
});

export const ProductCategoryUpdateInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryUpdateInputType',
  fields: () => (_.merge({}, fields, {
    parent: {
      type: ParentInputType,
      description: 'Parent category of this product category'
    }
  })),
});
