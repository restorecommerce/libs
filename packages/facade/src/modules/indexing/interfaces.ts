import { type IndexingSrvGrpcClient } from './grpc/index.js';
import { type SubSpaceServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface IndexingConfig {
  config: SubSpaceServiceConfig;
}

export interface IndexingContext extends FacadeContext {
  indexing: {
    client: IndexingSrvGrpcClient;
  };
}

export type IndexingModule = FacadeModule<IndexingContext>;

export const namespace = 'indexing';
