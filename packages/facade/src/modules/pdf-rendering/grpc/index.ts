import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type PdfRenderingServiceClient,
  PdfRenderingServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/pdf_rendering.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class PdfRenderingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly pdf_rendering: PdfRenderingServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.pdf_rendering = this.createClient(cfg, PdfRenderingServiceDefinition, this.channel);
  }

}
