import {
  GraphQLInputObjectType, GraphQLObjectType,
  GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat
} from 'graphql';
import * as _ from 'lodash';
import { InputAttribute } from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';
import { resolveNested } from '../utils';
import { ContactPointType } from './ContactPointType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Order ID',
  },
  name: {
    type: GraphQLString,
    description: 'Order name',
  },
  description: {
    type: GraphQLString,
    description: 'Order description',
  },
  shipping_contact_point_id: {
    type: GraphQLString,
    description: 'Shipping Contact Point'
  },
  billing_contact_point_id: {
    type: GraphQLString,
    description: 'Billing Contact Point'
  }
};

const item = new GraphQLInputObjectType({
  name: 'Item',
  description: 'Item',
  fields: () => ({
    product_variant_bundle_id: {
      type: GraphQLString,
      description: 'Product or Bundle or Variant ID'
    },
    quantity: {
      type: GraphQLInt,
      description: 'Product or Bundle or Variant Identifier'
    }
  })
});

export const Items = new GraphQLInputObjectType({
  name: 'Items',
  description: 'Item Description',
  fields: () => ({
    item: {
      type: item,
      description: 'Item'
    }
  })
});

export const OrderInputType = new GraphQLInputObjectType({
  name: 'OrderInputType',
  description: 'Order proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    items: {
      type: new GraphQLList(Items)
    }
  })),
});

export const outputOrderType = new GraphQLObjectType({
  name: 'outputOrderType',
  description: 'Order output description',
  fields: () => ({
    details: {
      type: new GraphQLList(OrderType),
    },
    error: {
      type: ErrorListType,
    }
  }),
});

const outputItemType = new GraphQLObjectType({
  name: 'outputItemType',
  description: 'Item description',
  fields: () => ({
    product_variant_bundle_id: {
      type: GraphQLString,
      description: 'Product or Variant or Bundle ID'
    },
    product_name: {
      type: GraphQLString,
      description: 'Product name'
    },
    product_description: {
      type: GraphQLString,
      description: 'Product description'
    },
    manufacturer_name: {
      type: GraphQLString,
      description: 'Manufacturer name'
    },
    manufacturer_description: {
      type: GraphQLString,
      description: 'Manufacturer description'
    },
    prototype_name: {
      type: GraphQLString,
      description: 'Prototype name'
    },
    prototype_description: {
      type: GraphQLString,
      description: 'Prototype description'
    },
    quantity: {
      type: GraphQLInt,
      description: 'Quantity'
    },
    vat: {
      type: GraphQLInt,
      description: 'Vat'
    },
    price: {
      type: GraphQLFloat,
      description: 'price of item'
    },
    item_type: {
      type: GraphQLString,
      description: 'type of selected item if its product, bundle or variant'
    },
    taric_code: {
      type: GraphQLFloat,
      description: 'Taric code'
    },
    stock_keeping_unit: {
      type: GraphQLString,
      description: 'stock keeping unit'
    },
    weight_in_kg: {
      type: GraphQLFloat,
      description: 'Item weight in kg'
    },
    length_in_cm: {
      type: GraphQLInt,
      description: 'Item length'
    },
    width_in_cm: {
      type: GraphQLInt,
      description: 'Item width'
    },
    height_in_cm: {
      type: GraphQLInt,
      description: 'Item height'
    }
  })
});

const outputItemsType = new GraphQLObjectType({
  name: 'outputItemsType',
  description: 'Items',
  fields: () => ({
    item: {
      type: outputItemType,
      description: 'Item description'
    },
    quantity_price: {
      type: GraphQLString,
      description: 'Quantity price'
    }
  })
});

export const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  description: 'Order proto description',
  fields: () => (_.merge({}, fields, {
    contactPoint: {
      type: ContactPointType,
      description: 'Product category to which this location is linked',
      resolve: ({ contact_point_id }, args, ctx) => resolveNested(ctx,
        'contact_point', contact_point_id)
    },
    items: {
      type: new GraphQLList(outputItemsType),
      description: 'List of Items'
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});

export const OrderUpdateInputType = new GraphQLInputObjectType({
  name: 'OrderUpdateInputType',
  fields: () => (_.merge({}, fields)),
});
