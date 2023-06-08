import { type InvoicingSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface InvoicingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface InvoicingConfig {
  config: InvoicingServiceConfig;
}

export interface InvoicingContext extends FacadeContext {
  invoicing: {
    client: InvoicingSrvGrpcClient;
  };
}

export type InvoicingModule = FacadeModule<InvoicingContext>;

export const namespace = 'invoicing';
