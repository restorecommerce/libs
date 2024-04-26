import { type PdfRenderingSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface PdfRenderingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface PdfRenderingConfig {
  config: PdfRenderingServiceConfig;
}

export interface PdfRenderingContext extends FacadeContext {
  pdfRendering: {
    client: PdfRenderingSrvGrpcClient;
  };
}

export type PdfRenderingModule = FacadeModule<PdfRenderingContext>;

export const namespace = 'pdfRendering';
