import {
  protoMetadata,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order.js';
import {
  User
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType } from 'graphql';
import { getTyping, registerPackagesRecursive } from '../src/gql/protos/index.js';
import { preProcessGQLInput, postProcessGQLOutput } from '../src/gql/protos/graphql.js';
import { it, describe, expect } from 'vitest';

describe('proto-meta', () => {
  it('should register typings', () => {
    registerPackagesRecursive(
      protoMetadata
    );
  });

  it('should produce correct GQL Objects', () => {
    const obj = getTyping('.io.restorecommerce.order.Order');
    expect(obj).toBeTruthy();

    const output = obj!.output;

    expect(output).toBeInstanceOf(GraphQLObjectType);
    expect(output.name).toEqual('IoRestorecommerceOrderOrder');

    const fields = (output as GraphQLObjectType).getFields();
    for (let key of ['id', 'customerId', 'notificationEmail']) {
      expect(fields[key].type).toBeInstanceOf(GraphQLScalarType);
      expect((fields[key].type as GraphQLScalarType).name).toEqual('String');
    }

    expect(fields.items.type).toBeInstanceOf(GraphQLList);
    expect((fields.items.type as GraphQLList<any>).ofType).toBeInstanceOf(GraphQLNonNull);
    expect(((fields.items.type as GraphQLList<any>).ofType as GraphQLNonNull<any>).ofType).toBeInstanceOf(GraphQLObjectType);
    expect(((fields.items.type as GraphQLList<any>).ofType as GraphQLNonNull<any>).ofType).toEqual(getTyping('.io.restorecommerce.order.Item')!.output);

    expect(fields.meta.type).toEqual(getTyping('.io.restorecommerce.meta.Meta')!.output);
  });

  it('should pre/post-process input/output correctly', async () =>{
    const model = getTyping('.io.restorecommerce.user.User');
    const input: User = {
      id: 'user_1_test',
      firstName: 'Markus',
      lastName: 'Muster',
      data: {
        typeUrl: 'to.neverland',
        value: {
          birthday: new Date('1987-06-05'),
        } as any
      },
      meta: {
        created: '2024-08-30' as any,
        createdBy: 'user',
        owners: [
          {
            id: 'some-type-identifier',
            value: 'user'
          }
        ],
        acls: null,
      }

    };

    const preProcessed = await preProcessGQLInput(input, model.input);
    const postProcessed = postProcessGQLOutput(preProcessed, model.output);

    expect(preProcessed.meta.created).toBeInstanceOf(Date);
    expect(preProcessed.data.value).toBeInstanceOf(Buffer);
    expect(postProcessed.data.value.birthday).toBeDefined();
  });
});
