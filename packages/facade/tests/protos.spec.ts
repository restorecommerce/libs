import {
  FulfillmentResults,
  metaPackageIoRestorecommerceOrder,
  metaService,
  Order, OrderDataList, OrderList
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import {
  metaPackageIoRestorecommerceMeta
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import {
  metaPackageIoRestorecommerceAttribute
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { GraphQLList, GraphQLObjectType, GraphQLScalarType } from "graphql";
import { getProtoFunction, getProtoFunctions, getTyping, registerPackages } from "../src/gql/protos";
import { DeleteRequest, Empty, ReadRequest } from "@restorecommerce/rc-grpc-clients";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";

describe("proto-meta", () => {
  it('should register typings', () => {
    registerPackages(
      metaPackageGoogleProtobufEmpty,
      metaPackageGoogleProtobufStruct,
      metaPackageGoogleProtobufAny,
      metaPackageIoRestorecommerceAttribute,
      metaPackageIoRestorecommerceMeta,
      metaPackageIoRestorecommerceAuth,
      metaPackageIoRestorecommerceResourcebase,
      metaPackageIoRestorecommerceOrder
    );
  });

  it('should fail to register typing twice', () => {
    try {
      expect(registerPackages(metaPackageIoRestorecommerceOrder)).toBeFalsy();
    } catch (e) {
      expect(e).toEqual(new Error(`Typings for object are already registered`))
    }
  });

  it('should produce correct GQL Objects', () => {
    const obj = getTyping('.io.restorecommerce.order.Order');

    expect(obj).toBeTruthy();

    const output = obj.output;

    expect(output).toBeInstanceOf(GraphQLObjectType)
    expect(output.name).toEqual('Order');

    const fields = (output as GraphQLObjectType).getFields();

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
    expect((fields.items.type as GraphQLList<any>).ofType).toEqual(getTyping('.io.restorecommerce.order.Items').output)

    expect(fields.meta.type).toEqual(getTyping('.io.restorecommerce.meta.Meta').output);
  });

  it('should produce a correct GQL function', () => {
    const fn = getProtoFunction(metaService, 'TriggerFulfillment');
    expect(fn).toBeTruthy();
    expect(fn.type).toEqual('unary');
    expect(fn.serialize).toEqual(OrderDataList.encode);
    expect(fn.deserialize).toEqual(FulfillmentResults.decode);
  });

  it('should produce correct GQL function list', () => {
    const fns = getProtoFunctions(metaService);

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
