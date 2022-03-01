import { CRUDService, ReadRequest, Sort, Sort_SortOrder } from "@restorecommerce/rc-grpc-clients";

export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** Filters the fields based on the operation specified */
export type FilterOperation = 'lt' | 'lte' | 'gt' | 'gte' | 'eq' | 'isEmpty';

export type FilterType = 'string' | 'boolean' | 'number' | 'date';

/** Filter options */
export interface FilterOptions {
  /** Field names based on which the filtering needs to be done */
  field: string;
  /** Filter Operation options */
  operation: FilterOperation;
  /** Field value */
  value: string;
  /** Value type (optional, default is STRING) */
  type?: Maybe<FilterType>;
}

/** Sorts the fields in either Ascending or Descending order */
export type SortOrder = 'asc' | 'desc';

/** For sorting based on fileds */
export interface SortOptions {
  /** Field names to be sorted on */
  field: string;
  /** Sorting Options */
  order?: Maybe<SortOrder>;
}

// export enum FilterValueType {
//   STRING = 0,
//   NUMBER = 1,
//   BOOLEAN = 2,
//   DATE = 3,
//   ARRAY = 4,
// };

export enum OperatorType {
  and = 0,
  or = 1,
};

export interface Filter {
  field: string;
  operation: FilterOperation;
  value: string;
  type?: FilterType; // defaults to string data type if not provided
  filters?: FilterOp [];
}

export interface FilterOp {
  filter?: Filter[];
  operator?: OperatorType;
}

export type ReadResourcesInputType = {
  limit?: Maybe<number>;
  offset?: Maybe<number>;
  filters?: Maybe<Array<FilterOp>>;
  sort?: Maybe<SortOptions>;
  /** A role scope */
  scope?: Maybe<{
    entity?: Maybe<string>;
    instance?: Maybe<string>;
  }>;
};

export type CreateResourcesInputType<T> = {
  items: Array<T>;
};

export type UpdateResourcesInputType<T> = {
  items: Array<T>;
};

export type DeleteResourcesInputType = {
  ids: Array<string>;
  collection?: boolean;
};

export type BaseOutputType<T> = {
  details: {
    items: Maybe<T>;
  };
  /** Objects with status returned for GraphQL operations */
  operationStatus: {
    /** Status code */
    code: number;
    /** Status message description */
    message: Maybe<string>;
  };
};

interface Status {
  id: string,
  code: number,
  message: string
}

export type DeleteOutputType = {
  status: Status[];
  /** Objects with status returned for GraphQL operations */
  operationStatus: {
    /** Status code */
    code: number;
    /** Status message description */
    message: Maybe<string>;
  };
};

export type ResolveCRUDReadResourcesArgsInput = Maybe<RequireFields<ReadResourcesInputType, never>> | undefined;

export interface ResolveCRUDReadResourcesArgs<TGqlType, TGrpcType> {
  service: CRUDService<TGrpcType>;
  input: ResolveCRUDReadResourcesArgsInput;
  mapResponseItem?: (item: TGrpcType) => TGqlType;
}

export async function resolveCRUDReadResources<TGqlType = unknown, TGrpcType = unknown>({ service, input, mapResponseItem }: ResolveCRUDReadResourcesArgs<TGqlType, TGrpcType>): Promise<BaseOutputType<Array<TGqlType>>> {
  try {
    const readRequest = convertReadResouecesInputToReadRequest(input);
    const result = await service.Read(readRequest);
    const payload: TGqlType[] = mapResponseItem ?
          result.items.map((_item) => mapResponseItem(_item.payload)) :
          result.items as unknown as TGqlType[];

    return {
      details: {
        items: payload
      },
      operationStatus: {
        code: 200,
        message: 'success'
      }
    }
  } catch (error: any) {
    return {
      details: {
        items: []
      },
      operationStatus: {
        code: error.code,
        message: error.message
      }
    }
  }
}

export function convertReadResouecesInputToReadRequest(input?: Maybe<ReadResourcesInputType>): ReadRequest {
  const readRequest: ReadRequest = ReadRequest.fromPartial({});

  if (!input) {
    return readRequest;
  }


  if (typeof input.limit === 'number') {
    readRequest.limit = input.limit;
  }

  if (typeof input.offset === 'number') {
    readRequest.offset = input.offset;
  }

  if (input.filters) {
    const length = input.filters.length;
    const buildFilter = ({field, operation, value, type}: FilterOptions) => {
      let filterValue: any = value;

      if (!!type && type !== 'string') {
        if (type == 'date') {
          filterValue = (new Date(value)).getTime();
        } else if (type === 'number' && isFinite(Number(value))) {
          filterValue = Number(value);
        } else if (type === 'boolean') {
          filterValue = (value === 'true');
        }
        // else if (type === FilterFieldValueEnumType.Array) {
        //   filterValue = JSON.parse(value);
        // }
      }

      const operations = ['gt', 'lt', 'lte', 'gte', 'eq', 'isEmpty', 'in', 'iLike'];
      if (operations.find((op) => {
        return op === operation;
      }) == null) {
        throw new Error('Invalid operation ' + operation);
      }

      if (operation == 'isEmpty') {
        filterValue = '';
      }
      return {[field]: {['$' + operation]: filterValue}};
    };

    // if (length > 0) {
    //   if (length === 1) {
    //     readRequest.filters = buildFilter(input.filters[0].filter[0]) as any;
    //   } else {
    //     readRequest.filters = {
    //       $and: input.filters.reduce((convertedFilters, filter) => {
    //         return [
    //           ...convertedFilters,
    //           buildFilter(filter[0])
    //         ]
    //       }, [] as any[])
    //     } as any;
    //   }
    // }
    if (input.sort && (input.sort.field || input.sort.order)) {
      const field = input.sort.field;

      let order: Sort_SortOrder;
      switch (input.sort.order) {
        case 'asc': {
          order = Sort_SortOrder.ASCENDING;
        }
        case 'desc': {
          order = Sort_SortOrder.DESCENDING;
        }
        default: {
          order = Sort_SortOrder.UNSORTED;
        }
      }

      const sort: Sort = {
        field,
        order
      }

      readRequest.sort = [sort];
    }
  }
  return readRequest;
}

export type ResolveCRUDCreateResourcesArgsInput<TGqlType> = CreateResourcesInputType<TGqlType>;

export interface ResolveCRUDCreateResourcesArgs<TGqlType, TGrpcType> {
  service: CRUDService<TGrpcType>;
  input: CreateResourcesInputType<TGqlType>;
  mapRequestItem?: (item: TGqlType) => TGrpcType;
  mapResponseItem?: (item: TGrpcType) => TGqlType;
}

export async function resolveCRUDCreateResources<TGqlType, TGrpcType>({service, input, mapRequestItem, mapResponseItem}: ResolveCRUDCreateResourcesArgs<TGqlType, TGrpcType>): Promise<BaseOutputType<Array<TGqlType>>> {
  try {
    const items: TGrpcType[] = mapRequestItem ?
          input.items.map((_item) => mapRequestItem(_item)) :
          input.items as unknown as TGrpcType[];;

    const result = await service.Create({
      items,
      totalCount: items.length
    });

    const payload: TGqlType[] = mapResponseItem ?
          result.items.map((_item) => mapResponseItem(_item.payload)) :
          result.items as unknown as TGqlType[];

    return {
      details: {
        items: payload
      },
      operationStatus: {
        code: 200,
        message: 'success'
      }
    };
  } catch (error: any) {
    return {
      details: {
        items: []
      },
      operationStatus: {
        code: error.code,
        message: error.message
      }
    }
  }
}


export interface ResolveCRUDDeleteResourcesArgs< TGrpcType> {
  service: CRUDService<TGrpcType>;
  input: DeleteResourcesInputType;
}

export async function resolveCRUDDeleteResources<TGrpcType>({service, input}: ResolveCRUDDeleteResourcesArgs<TGrpcType>): Promise<DeleteOutputType> {

  try {
    const deleteResponse = await service.Delete({
      ids: input.ids,
      collection: input.collection ?? false
    });
    return deleteResponse;
  } catch (error: any) {
    return {
      status: [],
      operationStatus: {
        code: error.code,
        message: error.message
      }
    }
  }
}

export interface ResolveCRUDUpdateResourcesArgs<TGqlType, TGrpcType> {
  service: CRUDService<TGrpcType>;
  input: UpdateResourcesInputType<TGqlType>;
  mapRequestItem?: (item: TGqlType) => TGrpcType;
  mapResponseItem?: (item: TGrpcType) => TGqlType;
}

export async function resolveCRUDUpdateResources<TGqlType, TGrpcType>({service, input, mapRequestItem, mapResponseItem}: ResolveCRUDUpdateResourcesArgs<TGqlType, TGrpcType>): Promise<BaseOutputType<Array<TGqlType>>> {
  try {
    const items: TGrpcType[] = mapRequestItem ?
          input.items.map((_item) => mapRequestItem(_item)) :
          input.items as unknown as TGrpcType[];;

    const result = await service.Update({
      items,
      totalCount: items.length
    });

    const payload: TGqlType[] = mapResponseItem ?
          result.items.map((_item) => mapResponseItem(_item.payload)) :
          result.items as unknown as TGqlType[];

    return {
      details: {
        items: payload
      },
      operationStatus: {
        code: 200,
        message: 'success'
      }
    };
  } catch (error: any) {
    return {
      details: {
        items: []
      },
      operationStatus: {
        code: error.code,
        message: error.message
      }
    }
  }
}


// export interface CreateTestArgs<TContext, TGrpcType, TGqlType, TCreateKey extends string> {
//   resourceName: string;
//   service: (ctx: TContext) => CRUDService<TGrpcType>
//   create: {
//     fn: TCreateKey;
//     mapRequestItem?: (item: TGqlType) => TGrpcType;
//     mapResponseItem?: (item: TGrpcType) => TGqlType;
//   },
//   read: {
//     fn: string;
//     mapResponseItem?: (item: TGrpcType) => TGqlType;
//   },
//   update: {
//     mapRequestItem?: (item: TGqlType) => TGrpcType;
//     mapResponseItem?: (item: TGrpcType) => TGqlType;
//     fn: string;
//   },
//   delete: {
//     fn: string;
//   }
// }

// export interface CreateTestResult<TContext, TReadKey extends string> {
//   Query: {
//     [key: TReadKey]: (parent: any, {input}: {input: ResolveCRUDReadResourcesArgsInput}, ctx: TContext) => any;
//   },
//   // mutation: {
//   //   [key: TCreateKey]: (parent: any, {input}: {input: ResolveCRUDReadResourcesArgsInput}, ctx: TContext) => any;
//   //   [key: TCreateKey]: (parent: any, {input}: {input: ResolveCRUDReadResourcesArgsInput}, ctx: TContext) => any;
//   //   [key: TCreateKey]: (parent: any, {input}: {input: ResolveCRUDReadResourcesArgsInput}, ctx: TContext) => any;

//   // }

// }

// export function createTest<
//   TContext,
//   TGqlType,
//   TGrpcType,
//   TCreateKey extends string
// >(args: CreateTestArgs<TContext, TGrpcType, TGqlType, TCreateKey>): CreateTestResult<TContext, ''> {
//   return {
//     Query: {
//       [args.read.fn]: async (parent, {input}: {input: ResolveCRUDReadResourcesArgsInput}, ctx: TContext) => {
//         return await resolveCRUDReadResources<TGqlType, TGrpcType>({
//           service: args.service(ctx),
//           input,
//           mapResponseItem: args.read.mapResponseItem
//         });
//       },
//     },
//     // Mutation: {
//     //   [args.create.fn]: async (parent: any, {input}: {input: CreateResourcesInputType<TGqlType>}, ctx: TContext) => {
//     //     return await resolveCRUDCreateResources({
//     //       service: args.service(ctx),
//     //       input,
//     //       mapRequestItem: args.create.mapRequestItem,
//     //       mapResponseItem: args.create.mapResponseItem
//     //     });
//     //   },
//     //   [args.update.fn]: async (parent: any, {input}: {input: UpdateResourcesInputType<TGqlType>}, ctx: TContext) => {
//     //     return await resolveCRUDUpdateResources({
//     //       service: args.service(ctx),
//     //       input,
//     //       mapRequestItem: args.create.mapRequestItem,
//     //       mapResponseItem: args.update.mapResponseItem
//     //     });
//     //   },
//     //   [args.delete.fn]: async (parent: any, {input}: {input: DeleteResourcesInputType}, ctx: TContext) => {
//     //     return await resolveCRUDDeleteResources({
//     //       service: args.service(ctx),
//     //       input,
//     //     });
//     //   }
//     // }
//   }
// }
