export type TRequest = CreateRequest | DeleteRequest | UpdateRequest | UpsertRequest | ReadRequest;
export interface ServiceCall<TRequest> {
  request: TRequest;
}

export type SortType = 'ASCENDING' | 'DESCENDING' | 'UNSORTED' | 2 | 1 | 0;

export interface ReadRequest {
  search?: string; // fulltext search
  sort?: { field: string, order: SortType }[];
  limit?: number;
  offset?: number;
  field?: { name: string, include: number }[];
  filter?: any;
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
  meta: DocumentMetadata;
  [key: string]: any;
}

export interface DocumentMetadata {
  created?: number;
  modified?: number;
  modified_by?: string;
  owner: { owner_entity: string, owner_id: string }[];
}

export interface UpsertRequest extends UpdateRequest { }

export interface CreateRequest {
  items: BaseDocument[];
}

export interface DB {
  insert(collection: string, documents: BaseDocument[]): Promise<BaseDocument[]>;
  find(collection: string, filter: any, { limit, offset, sort, fields}?: { limit?: number, offset?: number, sort?: any, fields?: any}): Promise<BaseDocument[]>;
  update(collection: string, filter: { id: string }, document: { id?: string, [key: string]: any}): Promise<BaseDocument[]>;
  truncate(collection: string): Promise<void>;
  upsert(collection: string, documents: BaseDocument[]): Promise<BaseDocument[]>;
  delete(collection: string, filter: any): Promise<void>;
}
