import { Channel, createClient, GrpcClientConfig } from '@restorecommerce/grpc-client';
import {
  DeleteRequest,
  ReadRequest,
  Sort,
  Sort_SortOrder,
  FieldFilter
} from './generated/io/restorecommerce/resource_base';
import { CommandInterfaceServiceClient, CommandInterfaceServiceDefinition } from './generated/io/restorecommerce/commandinterface';
import { createChannel } from 'nice-grpc';

export { DeleteRequest, ReadRequest, Sort, Sort_SortOrder, FieldFilter };

export class RestoreCommerceGrpcClient {

  protected channel: Channel;

  readonly command: CommandInterfaceServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    this.channel = createChannel(address);
    this.command = createClient(cfg, CommandInterfaceServiceDefinition, this.channel);
  }

  protected createClient = createClient;

}
