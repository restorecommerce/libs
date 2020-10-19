import { CruudService, ReadRequest } from "@restorecommerce/rc-grpc-clients";
import { QueryAllInputType } from '../gql/schema.generated';
import { ResourcesContext } from '../interfaces';
import { OutputReadType, Resolver } from './interfaces';

export function createGenericReadResolver<
  TGrpcType = any,
  TGqlType = any,
  TReturnValue extends OutputReadType<TGqlType> = OutputReadType<TGqlType>,
>(
  clientCb: (ctx: ResourcesContext) => CruudService<TGrpcType>,
  mapItem?: (item: TGrpcType) => TGqlType,

): Resolver<OutputReadType<TGqlType>, any, ResourcesContext, QueryAllInputType> {
  return async (parent, input, ctx): Promise<TReturnValue> => {
    const client = clientCb(ctx);
    const readRequest: ReadRequest = ReadRequest.fromPartial({});

    // TODO Convert gql to grpc args
    if (input.limit) {
      readRequest.limit = input.limit;
    }

    const result = await client.Read(readRequest);

    mapItem = mapItem ?? ((item) => (item as unknown as TGqlType));
    const items: TGqlType[] = result.items.map(mapItem);

    return {
      payload: items,
      status: {
        code: 1,
        key: ''
      }
    } as any;

  }
}




// function processInputOptions(args: any): QueryArguments | UserQueryArguments {
//   let limit, offset, filter, sort;

//   if (args.limit) {
//     limit = args.limit;
//   }

//   if (this.resourceName == 'job') {
//     // marshall to `JobReadRequest`
//     filter = args.filter || {};
//     sort = args.sort || 'UNSORTED';

//     return {
//       filter, limit, sort
//     };
//   } else {
//     // generic database resource
//     if (args.offset) {
//       offset = args.offset;
//     }

//     if (args.filter) {
//       const length = args.filter.length;
//       const buildFilter = (field, operation, value, type) => {
//         if (!!type && type != 'string') {
//           if (type == 'date') {
//             value = (new Date(value)).getTime();
//           } else if (type == 'number' && !isNaN(Number(value))) {
//             value = Number(value);
//           } else if (type == 'boolean') {
//             value = (value === 'true');
//           }
//         }

//         const operations = ['gt', 'lt', 'lte', 'gte', 'eq', 'isEmpty'];
//         if (operations.find((op) => { return op === operation; }) == null) {
//           throw new Error('Invalid operation ' + operation);
//         }

//         if (operation == 'isEmpty') {
//           value = '';
//         }
//         return { [field]: { ['$' + operation]: value } };
//       };

//       if (length > 0) {
//         if (length === 1) {
//           const { field, operation, value, type } = args.filter[0];
//           args.filter = buildFilter(field, operation, value, type);
//         } else {

//           const baseFilter = { $and: [] };
//           for (let i = 0; i < length; i++) {
//             const { field, operation, value, type } = args.filter[i];
//             baseFilter.$and.push(buildFilter(field, operation, value, type));
//           }

//           args.filter = baseFilter;
//         }
//       }
//     }
//     filter = args.filter;

//     if (args.sort && (args.sort.field || args.sort.order)) {
//       sort = { field: args.sort.field, order: args.sort.order };
//     }
//   }

//   let queryArgs = {
//     limit, offset, filter, sort
//   };

//   if (args.user_role) {
//     _.merge(queryArgs, args.user_role);
//   }

//   return queryArgs;
// }
