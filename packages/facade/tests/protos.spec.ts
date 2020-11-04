import {
  FulfillmentResults,
  metaItem,
  metaOrder,
  metaService,
  Order, OrderDataList, OrderList
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { metaMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { GraphQLList, GraphQLObjectType, GraphQLScalarType } from "graphql";
import { getGQLFunction, getGQLFunctions, getGQLTyping, registerTyping } from "../src/gql/protos";
import { DeleteRequest, Empty, ReadRequest } from "@restorecommerce/rc-grpc-clients";

describe("proto-meta", () => {
  it('should register typing', () => {
    registerTyping('.io.restorecommerce.attribute.Attribute', metaAttribute, {name: 'Attribute'}, {name: 'IAttribute'});
    registerTyping('.io.restorecommerce.meta.Meta', metaMeta, {name: 'Meta'}, {name: 'IMeta'});
    registerTyping('.io.restorecommerce.order.Item', metaItem, {name: 'Item'}, {name: 'IItem'});
    registerTyping('.io.restorecommerce.order.Items', metaItem, {name: 'Items'}, {name: 'IItems'});
    registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'}, {name: 'IOrder'});
  });

  it('should fail to register typing twice', () => {
    try {
      expect(registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'}, {name: 'IOrder'})).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typings for object are already registered`))
    }
  });

  it('should produce correct GQL Objects', () => {
    const obj = getGQLTyping('.io.restorecommerce.order.Order');

    expect(obj).toBeTruthy();
    expect(obj).toBeInstanceOf(GraphQLObjectType)
    expect(obj.name).toEqual('Order');

    const fields = (obj as GraphQLObjectType).getFields();

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
    expect((fields.items.type as GraphQLList<any>).ofType).toEqual(getGQLTyping('.io.restorecommerce.order.Items'))

    expect(fields.meta.type).toEqual(getGQLTyping('.io.restorecommerce.meta.Meta'));
  });

  it('should produce a correct GQL function', () => {
    const fn = getGQLFunction(metaService, 'TriggerFulfillment');
    expect(fn).toBeTruthy();
    expect(fn.type).toEqual('unary');
    expect(fn.serialize).toEqual(OrderDataList.encode);
    expect(fn.deserialize).toEqual(FulfillmentResults.decode);
  });

  it('should produce correct GQL function list', () => {
    const fns = getGQLFunctions(metaService);

    expect(fns.Read).toBeTruthy();
    expect(fns.Read.type).toEqual('unary');
    expect(fns.Read.serialize).toEqual(ReadRequest.encode);
    expect(fns.Read.deserialize).toEqual(OrderList.decode);

    expect(fns.Create).toBeTruthy();
    expect(fns.Create.type).toEqual('unary');
    expect(fns.Create.serialize).toEqual(OrderList.encode);
    expect(fns.Create.deserialize).toEqual(OrderList.decode);

    expect(fns.Delete).toBeTruthy();
    expect(fns.Delete.type).toEqual('unary');
    expect(fns.Delete.serialize).toEqual(DeleteRequest.encode);
    expect(fns.Delete.deserialize).toEqual(Empty.decode);

    expect(fns.Update).toBeTruthy();
    expect(fns.Update.type).toEqual('unary');
    expect(fns.Update.serialize).toEqual(OrderList.encode);
    expect(fns.Update.deserialize).toEqual(OrderList.decode);

    expect(fns.Upsert).toBeTruthy();
    expect(fns.Upsert.type).toEqual('unary');
    expect(fns.Upsert.serialize).toEqual(OrderList.encode);
    expect(fns.Upsert.deserialize).toEqual(OrderList.decode);

    expect(fns.TriggerFulfillment).toBeTruthy();
    expect(fns.TriggerFulfillment.type).toEqual('unary');
    expect(fns.TriggerFulfillment.serialize).toEqual(OrderDataList.encode);
    expect(fns.TriggerFulfillment.deserialize).toEqual(FulfillmentResults.decode);
  });
});
