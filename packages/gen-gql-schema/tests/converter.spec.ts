import { getGQLObject, registerTyping } from "../src/protos";
import { Item, Order } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { Meta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { Attribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { GraphQLList, GraphQLObjectType, GraphQLScalarType } from "graphql";

describe("converter", () => {
  it('should fail to register typing with unregistered dependencies', () => {
    try {
      expect(registerTyping(Meta, {
        owner: Attribute
      }, {
        name: 'Meta'
      })).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typing not registered for key 'owner' in object`))
    }
  });

  it('should register typing', () => {
    registerTyping(Attribute, {}, {
      name: 'Attribute'
    });

    registerTyping(Meta, {
      owner: Attribute
    }, {
      name: 'Meta'
    });

    registerTyping(Item, {}, {
      name: 'Item'
    })

    registerTyping(Order, {
      items: Item,
      meta: Meta
    }, {
      name: 'Order'
    })
  });

  it('should fail to register typing twice', () => {
    try {
      expect(registerTyping(Order, {
        items: Item,
        meta: Meta
      }, {
        name: 'Order'
      })).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typings for object are already registered`))
    }
  });

  it('should produce correct GQL Objects', () => {
    const obj = getGQLObject(Order);

    expect(obj).toBeTruthy();
    expect(obj.name).toEqual('Order');

    const fields = obj.getFields();

    expect(fields.id.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.id.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.name.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.name.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.description.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.description.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.status.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.status.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.totalPrice.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.totalPrice.type as GraphQLScalarType).name).toEqual('Float')

    expect(fields.shippingContactPointId.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.shippingContactPointId.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.billingContactPointId.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.billingContactPointId.type as GraphQLScalarType).name).toEqual('String')

    expect(fields.totalWeightInKg.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.totalWeightInKg.type as GraphQLScalarType).name).toEqual('Float')

    expect(fields.items.type).toBeInstanceOf(GraphQLList);
    expect((fields.items.type as GraphQLList<any>).ofType).toBeInstanceOf(GraphQLObjectType);
    expect((fields.items.type as GraphQLList<any>).ofType).toEqual(getGQLObject(Item))

    expect(fields.meta.type).toEqual(getGQLObject(Meta));
  });
});
