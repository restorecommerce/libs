import { IndexingSrvGrpcClient } from "./grpc";
import { SubSpaceServiceConfig } from '../../gql/protos';
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface IndexingConfig {
  config: SubSpaceServiceConfig;
}

export interface IndexingContext extends FacadeContext {
  indexing: {
    client: IndexingSrvGrpcClient;
  }
}

export type IndexingModule = FacadeModule<IndexingContext>;

export const namespace = 'indexing';
