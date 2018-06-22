import { truncate } from "fs";

export interface Resource {
  id: string;
  created: number;
  modified: number;
  [key: string]: any;
}

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
  items: Resource[];
}

export interface UpsertRequest extends UpdateRequest { }

export interface CreateRequest {
  items: { id?: string, [key: string]: any }[];
}

export interface DB {
  insert(collection: string, documents: Resource[]): Promise<Resource[]>;
  find(collection: string, flter: any, { limit, offset, sort, fields}: { limit?: number, offset?: number, sort?: any, fields?: any}): Promise<Resource[]>;
  update(collection: string, filter: { id: string }, document: { id?: string, [key: string]: any}): Promise<Resource[]>;
  truncate(collection: string): Promise<void>;
  upsert(collection: string, documents: Resource[]): Promise<Resource[]>;
  delete(collection: string, filter: any): Promise<void>;
}
