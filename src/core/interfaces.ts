import { Vertices, Collection } from '@restorecommerce/chassis-srv';

export type TRequest = CreateRequest | DeleteRequest | UpdateRequest | UpsertRequest | ReadRequest;
export interface ServiceCall<TRequest> {
  request: TRequest;
}

export type SortType = 'ASCENDING' | 'DESCENDING' | 'UNSORTED' | 2 | 1 | 0;

export enum FilterOperation {
  eq = 0,
  lt = 1,
  lte = 2,
  gt = 3,
  gte = 4,
  isEmpty = 5,
  iLike = 6,
  in = 7,
  neq = 8
};

export enum FilterValueType {
  STRING = 0,
  NUMBER = 1,
  BOOLEAN = 2,
  DATE = 3,
  ARRAY = 4,
};

export enum OperatorType {
  and = 0,
  or = 1,
};

export interface Filter {
  field: string;
  operation: FilterOperation;
  value: string;
  type?: FilterValueType; // defaults to string data type if not provided
  filters?: FilterOp [];
}

export interface FilterOp {
  filter?: Filter[];
  operator?: OperatorType;
}

export interface ReadRequest {
  search?: string; // fulltext search
  sort?: { field: string; order: SortType }[];
  limit?: number;
  offset?: number;
  field?: { name: string; include: boolean }[];
  filters?: FilterOp[];
  custom_queries?: string[];
  custom_arguments?: any;
}

export interface DeleteRequest {
  collection?: boolean;
  ids?: string[];
}

export interface UpdateRequest {
  items: BaseDocument[];
}

export interface BaseDocument {
  id?: string;
  meta?: DocumentMetadata;
  [key: string]: any;
}

export interface DocumentMetadata {
  created?: number;
  modified?: number;
  modified_by?: string;
  owner: { id: string; value: string }[];
}

export interface UpsertRequest extends UpdateRequest { }

export interface CreateRequest {
  items: BaseDocument[];
}

export interface TraversalOptions {
  include_vertex?: string[];
  exclude_vertex?: string[];
  include_edge?: string[];
  exclude_edge?: string[];
  direction?: string;
};

export interface GraphFilter {
  field: string;
  operation: FilterOperation;
  value: string;
  type?: FilterValueType; // defaults to string data type if not provided
  filters?: GraphFilters [];
}

export interface GraphFilters {
  entity?: string;
  edge?: string;
  filter?: GraphFilter[];
  operator?: OperatorType;
}

export interface TraversalRequest {
  vertices?: Vertices;
  collection?: Collection;
  opts?: TraversalOptions;
  path?: boolean;
  filters?: GraphFilters[];
}