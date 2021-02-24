import { InvoicingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface InvoicingConfig {
  config: ServiceConfig;
}

export interface InvoicingContext extends FacadeContext {
  invoicing: {
    client: InvoicingSrvGrpcClient;
  }
}

export type InvoicingModule = FacadeModule<InvoicingContext>;

export const namespace = 'invoicing';
