import { InvoicingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface InvoicingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface InvoicingConfig {
  config: InvoicingServiceConfig;
}

export interface InvoicingContext extends FacadeContext {
  invoicing: {
    client: InvoicingSrvGrpcClient;
  }
}

export type InvoicingModule = FacadeModule<InvoicingContext>;

export const namespace = 'invoicing';
