import { type ServiceConfig } from '@restorecommerce/service-config';
import { type Logger } from '@restorecommerce/logger';
import {
  Client,
  GrpcClientConfig,
  createChannel,
  createClient,
} from '@restorecommerce/grpc-client';
import { CompatServiceDefinition } from 'nice-grpc';

export type CRUDServiceDefinition = CompatServiceDefinition & {
  methods: {
    create: any;
    read: any;
    update: any;
    upsert: any;
    delete: any;
  };
};

export class ClientRegister {
  protected static readonly GLOBAL_REGISTER = new Map<string, Client<any>>();

  constructor(
    protected readonly cfg: ServiceConfig,
    protected readonly logger: Logger,
    protected readonly register = ClientRegister.GLOBAL_REGISTER,
  ) {}

  public get<T extends CRUDServiceDefinition>(
    definition: T
  ): Client<T> {
    if (this.register.has(definition.fullName.toString())) {
      return this.register.get(definition.fullName.toString());
    }

    const config = this.cfg.get(
      `client:${definition.name}`
    ) ?? Object.values(
      this.cfg.get(`client`) ?? []
    )?.find(
      (client: any) => (
        client.fullName === definition.fullName
        || client.name === definition.name
      )
    );

    if (!config) {
      throw new Error(`Config for ${definition.fullName.toString()} is missing!`);
    }

    const client = createClient(
      {
        ...config,
        logger: this.logger,
      } as GrpcClientConfig,
      definition,
      createChannel(config.address)
    );

    this.register.set(definition.fullName.toString(), client);
    return client;
  }
}