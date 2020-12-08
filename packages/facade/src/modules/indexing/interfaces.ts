import { IndexingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface IndexingConfig {
  config: ServiceConfig;
}

export interface IndexingContext extends FacadeContext {
  indexing: {
    client: IndexingSrvGrpcClient;
  }
}

export type IndexingModule = FacadeModule<IndexingContext>;

export const namespace = 'indexing';
