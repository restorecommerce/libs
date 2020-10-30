import { metaItem, metaOrder, Order } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { metaMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { GraphQLList, GraphQLObjectType, GraphQLScalarType } from "graphql";
import { getGQLObject, registerTyping } from "../src/gql/protos";

describe("proto-meta", () => {
  it('should fail to register typing with unregistered dependencies', () => {
    try {
      expect(registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'})).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typing '.io.restorecommerce.meta.Meta' not registered for key 'meta' in object`));
    }
  });

  it('should register typing', () => {
    registerTyping('.io.restorecommerce.attribute.Attribute', metaAttribute, {name: 'Attribute'});
    registerTyping('.io.restorecommerce.meta.Meta', metaMeta, {name: 'Meta'});
    registerTyping('.io.restorecommerce.order.Item', metaItem, {name: 'Item'});
    registerTyping('.io.restorecommerce.order.Items', metaItem, {name: 'Items'});
    registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'});
  });

  it('should fail to register typing twice', () => {
    try {
      expect(registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'})).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typings for object are already registered`))
    }
  });

  it('should produce correct GQL Objects', () => {
    const obj = getGQLObject('.io.restorecommerce.order.Order');

    expect(obj).toBeTruthy();
    expect(obj.name).toEqual('Order');

    const fields = obj.getFields();

    for (let key of ['id', 'name', 'description', 'status', 'shippingContactPointId', 'billingContactPointId']) {
      expect(fields[key].type).toBeInstanceOf(GraphQLScalarType);
      expect((fields[key].type as GraphQLScalarType).name).toEqual('String')
    }

    expect(fields.totalPrice.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.totalPrice.type as GraphQLScalarType).name).toEqual('Float')

    expect(fields.totalWeightInKg.type).toBeInstanceOf(GraphQLScalarType);
    expect((fields.totalWeightInKg.type as GraphQLScalarType).name).toEqual('Float')

    expect(fields.items.type).toBeInstanceOf(GraphQLList);
    expect((fields.items.type as GraphQLList<any>).ofType).toBeInstanceOf(GraphQLObjectType);
    expect((fields.items.type as GraphQLList<any>).ofType).toEqual(getGQLObject('.io.restorecommerce.order.Items'))

    expect(fields.meta.type).toEqual(getGQLObject('.io.restorecommerce.meta.Meta'));
  });
});
