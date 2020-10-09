import {
  GraphQLInputObjectType, GraphQLObjectType,
  GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLBoolean
} from 'graphql';
import * as _ from 'lodash';
import { InputAttribute } from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { resolveNested } from '../utils';
import { ProductPrototypeType } from './ProductPrototypeType';
import { ManufacturerType } from './ManufacturerType';
import { ImageInputType, ImageOutputType } from './ImageType';
import { MetaType } from './MetaType';
import { ProductCategoryType } from './ProductCategoryType';
import { outputTypeOfTaxType } from './TypeOfTaxType';

const commonFields = {
  id: {
    type: GraphQLString,
    description: 'Product/variant ID'
  },
  name: {
    type: GraphQLString,
    description: 'Product/variant name'
  },
  description: {
    type: GraphQLString,
    description: 'Product/variant description'
  },
};


const VariantAttributeInputType = new GraphQLInputObjectType({
  name: 'VariantAttributeInputType',
  fields: {
    key: {
      type: GraphQLString,
      description: 'Variant attribute key'
    },
    values: {
      type: new GraphQLList(GraphQLString),
      description: 'Variant attribute values'
    }
  }
});

const variantInputFields = new GraphQLInputObjectType({
  name: 'variantInputFields',
  fields: () => (_.merge({}, commonFields,
    {
      stock_level: {
        type: GraphQLInt,
        description: 'Product variant stock level'
      },
      price: {
        type: GraphQLFloat,
        description: 'Product variant price'
      },
      sale: {
        type: GraphQLBoolean,
        description: 'flag to indicate if this product variant is on Sale'
      },
      sale_price: {
        type: GraphQLFloat,
        description: 'Product variant sale price'
      },
      stock_keeping_unit: {
        type: GraphQLString,
        description: 'Product variant Stock Keeping Unit'
      },
      image: {
        type: new GraphQLList(ImageInputType)
      },
      attributes: {
        type: new GraphQLList(VariantAttributeInputType)
      }
    }))
});

const IdentifierInputType = new GraphQLInputObjectType({
  name: 'IdentifierInputType',
  fields: {
    id: {
      type: GraphQLString,
      description: 'ID contained'
    }
  }
});

const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInputType',
  fields: () => (_.merge({}, commonFields, {
    manufacturer_id: {
      type: GraphQLString,
      description: 'Product manufacturer'
    },
    taric_code: {
      type: GraphQLString,
      description: 'Product TARIC code'
    },
    prototype: {
      type: IdentifierInputType,
      description: 'Product prototype identifier'
    },
    category: {
      type: IdentifierInputType,
      description: 'Product category identifier'
    },
    tax_type_id: {
      type: new GraphQLList(GraphQLString)
    },
    variants: {
      type: new GraphQLList(variantInputFields)
    },
    image: {
      type: new GraphQLList(ImageInputType)
    }
  }))
});

const BundleProductInputType = new GraphQLInputObjectType({
  name: 'BundleProductInputType',
  fields: () => ({
    product_id: {
      type: GraphQLString,
      description: 'Product identifier'
    },
    quantity: {
      type: GraphQLInt,
      description: 'Bundle quantity'
    }
  })
});

const BundleInputType = new GraphQLInputObjectType({
  name: 'BundleInputType',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Bundle identifier'
    },
    name: {
      type: GraphQLString,
      description: 'Bundle name'
    },
    description: {
      type: GraphQLString,
      description: 'Bundle description'
    },
    product: {
      type: GraphQLList(BundleProductInputType),
      description: 'List of products bundled together'
    },
    price: {
      type: GraphQLFloat,
      description: 'Bundle price'
    },
    image: {
      type: new GraphQLList(ImageInputType)
    }
  })
});


export const MainProductInputType = new GraphQLInputObjectType({
  name: 'MainProductInputType',
  description: 'Product proto description',
  fields: () => (_.merge({}, {
    id: {
      type: GraphQLString,
      description: 'Product or Bundle ID'
    },
    product: {
      type: ProductInputType,
      description: 'Product description'
    },
    bundle: {
      type: BundleInputType,
      description: 'Bundle description'
    },
    active: {
      type: GraphQLBoolean,
      description: 'Status if Bundle or Product is active'
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  }))
});

const VariantAttributeOutputType = new GraphQLObjectType({
  name: 'VariantAttributeOutputType',
  fields: {
    key: {
      type: GraphQLString,
      description: 'Variant attribute key'
    },
    values: {
      type: new GraphQLList(GraphQLString),
      description: 'Variant attribute values'
    }
  }
});



const variantOutputFields = new GraphQLObjectType({
  name: 'variantOutputFields',
  fields: () => (_.merge({}, commonFields,
    {
      stock_level: {
        type: GraphQLInt,
        description: 'Product variant stock level'
      },
      price: {
        type: GraphQLFloat,
        description: 'Product variant price'
      },
      sale: {
        type: GraphQLBoolean,
        description: 'flag to indicate if this product variant is on sale'
      },
      sale_price: {
        type: GraphQLFloat,
        description: 'Product variant sale price'
      },
      stock_keeping_unit: {
        type: GraphQLString,
        description: 'Product variant Stock Keeping Unit'
      },
      attributes: {
        type: new GraphQLList(VariantAttributeOutputType)
      },
      image: {
        type: new GraphQLList(ImageOutputType)
      }
    }))
});

const IdentifierOutputType = new GraphQLObjectType({
  name: 'IdentifierOutputType',
  fields: {
    id: {
      type: GraphQLString,
      description: 'ID contained'
    }
  }
});

const ProductOutputType = new GraphQLObjectType({
  name: 'ProductOutputType',
  fields: () => (_.merge({}, commonFields, {
    taric_code: {
      type: GraphQLString,
      description: 'Product TARIC code'
    },
    variants: {
      type: new GraphQLList(variantOutputFields)
    },
    // we have different type for ImageInputType and ImageOutputType, so
    // image is not put under common fields
    image: {
      type: new GraphQLList(ImageOutputType)
    },
    manufacturer: {
      type: ManufacturerType,
      description: 'Manufacturer to which this product is linked',
      resolve: ({ manufacturer_id }, args, ctx) => resolveNested(ctx, 'manufacturer', manufacturer_id)
    },
    prototype: {
      type: IdentifierOutputType
    },
    category: {
      type: IdentifierOutputType
    },
    productPrototype: {
      type: ProductPrototypeType,
      description: 'Product prototype to which this product is linked',
      resolve: ({ prototype }, args, ctx) => resolveNested(ctx, 'product_prototype', prototype.id)
    },
    productCategory: {
      type: ProductCategoryType,
      description: 'Product category to which this product is linked',
      resolve: ({ category }, args, ctx) => resolveNested(ctx, 'product_category', category.id)
    },
    taxType: {
      type: new GraphQLList(outputTypeOfTaxType),
      description: 'Tax types for this product',
      resolve: ({ tax_type_id }, args, ctx) => resolveNested(ctx, 'tax_type', tax_type_id)
    }
  }))
});

const BundleProductOutputType = new GraphQLObjectType({
  name: 'BundleProductOutputType',
  fields: () => ({
    product_id: {
      type: GraphQLString,
      description: 'Product identifier'
    },
    product: {
      type: ProductPrototypeType,
      description: 'Product details to the bundle it is linked to',
      resolve: ({ product_id }, args, ctx) => resolveNested(ctx, 'product', product_id)
    },
    quantity: {
      type: GraphQLInt,
      description: 'Bundle Quantity'
    }
  })
});

const BundleOutputType = new GraphQLObjectType({
  name: 'BundleOutputType',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Bundle identifier'
    },
    name: {
      type: GraphQLString,
      description: 'Bundle name'
    },
    description: {
      type: GraphQLString,
      description: 'Bundle description'
    },
    product: {
      type: GraphQLList(BundleProductOutputType),
      description: 'List of products bundled together'
    },
    price: {
      type: GraphQLFloat,
      description: 'Bundle price'
    },
    image: {
      type: new GraphQLList(ImageOutputType)
    }
  })
});

export const MainProductOutputType = new GraphQLObjectType({
  name: 'MainProductOutputType',
  description: 'Main Product output description',
  fields: () => (_.merge({}, {
    id: {
      type: GraphQLString,
      description: 'Product or Bundle ID'
    },
    product: {
      type: ProductOutputType,
      description: 'Product description'
    },
    bundle: {
      type: BundleOutputType,
      description: 'Bundle description'
    },
    active: {
      type: GraphQLBoolean,
      description: 'Status if Bundle or Product is active'
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});


export const outputProductType = new GraphQLObjectType({
  name: 'outputProductType',
  description: 'Order output description',
  fields: () => ({
    details: {
      type: new GraphQLList(MainProductOutputType),
    },
    error: {
      type: ErrorListType,
    }
  })
});

export const ProductUpdateInputType = new GraphQLInputObjectType({
  name: 'MainProductUpdateType',
  description: 'Product proto description',
  fields: () => (_.merge({}, {
    id: {
      type: GraphQLString,
      description: 'Product or Bundle ID'
    },
    product: {
      type: ProductInputType,
      description: 'Product description'
    },
    bundle: {
      type: BundleInputType,
      description: 'Bundle description'
    },
    active: {
      type: GraphQLBoolean,
      description: 'Status if Bundle or Product is active'
    }
  }))
});
