export type TRequest = CreateRequest | DeleteRequest | UpdateRequest | UpsertRequest | ReadRequest;
export interface ServiceCall<TRequest> {
  request: TRequest;
}

export type SortType = 'ASCENDING' | 'DESCENDING' | 'UNSORTED' | 2 | 1 | 0;

export interface ReadRequest {
  search?: string; // fulltext search
  sort?: { field: string; order: SortType }[];
  limit?: number;
  offset?: number;
  field?: { name: string; include: boolean }[];
  filter?: any;
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
