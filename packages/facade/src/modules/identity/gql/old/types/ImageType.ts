import {
  GraphQLInputObjectType, GraphQLString,
  GraphQLObjectType, GraphQLFloat
} from 'graphql';
import * as _ from 'lodash';


const fields = {
  id: {
    type: GraphQLString,
    description: 'Product Category ID',
  },
  caption: {
    type: GraphQLString,
    description: 'Name of the product category'
  },
  length: {
    type: GraphQLFloat,
    description: 'Description of the product category'
  },
  filename: {
    type: GraphQLString,
    description: 'Price Group ID to which this product category is linked'
  },
  content_type: {
    type: GraphQLString,
    description: 'Price Group ID to which this product category is linked'
  },
  url: {
    type: GraphQLString,
    description: 'Price Group ID to which this product category is linked'
  },
  width: {
    type: GraphQLFloat,
    description: 'Price Group ID to which this product category is linked'
  },
  height: {
    type: GraphQLFloat,
    description: 'Price Group ID to which this product category is linked'
  }
};


export const ImageInputType = new GraphQLInputObjectType({
  name: 'ImageInputType',
  description: 'Image description',
  fields: () => (_.merge({}, fields, {
  })),
});

export const ImageOutputType = new GraphQLObjectType({
  name: 'ImageOutputType',
  description: 'Image description',
  fields: () => (_.merge({}, fields, {
  })),
});
