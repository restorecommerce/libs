import { Provider } from 'nconf';
import type { ServiceImplementation } from 'nice-grpc';
import type { CompatServiceDefinition } from 'nice-grpc/lib/service-definitions';
import { RedisClientType as RedisClient, createClient } from 'redis';
import { Logger } from 'winston';
import {
  Server,
  OffsetStore,
  database,
  buildReflectionService,
  Health,
  DatabaseProvider,
  CommandInterface,
} from '@restorecommerce/chassis-srv';
import {
  Events,
  Topic,
  registerProtoMeta
} from '@restorecommerce/kafka-client';
import { Arango } from '@restorecommerce/chassis-srv/lib/database/provider/arango/base';
import { createLogger } from '@restorecommerce/logger';
import { BindConfig } from '@restorecommerce/chassis-srv/lib/microservice/transport/provider/grpc/index';
import {
  ProtoMetadata,
  protoMetadata as CommandInterfaceMeta,
  CommandInterfaceServiceDefinition,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/commandinterface';
import { HealthDefinition } from '@restorecommerce/rc-grpc-clients/dist/generated-server/grpc/health/v1/health';
import { ServerReflectionService } from 'nice-grpc-server-reflection';
import { ServiceBase } from './ServiceBase';
import { createServiceConfig } from '@restorecommerce/service-config';

export type ServiceConfig = Provider;
export type ReflectionService = ServiceImplementation<any>;
export interface ServiceBindConfig<T extends CompatServiceDefinition> extends BindConfig<T> {
  name: string;
  meta: ProtoMetadata;
}

export abstract class WorkerBase {
  private _cfg: ServiceConfig;
  private _logger: Logger;
  private _server: Server;
  private _db: DatabaseProvider;
  private _events: Events;
  private _redisClient: RedisClient;
  private _offsetStore: OffsetStore;
  private _reflectionService: ReflectionService;
  private _commandInterface: CommandInterface;

  get cfg() {
    return this._cfg;
  }

  protected set cfg(value: ServiceConfig) {
    this._cfg = value;
  }

  get logger() {
    return this._logger;
  }

  protected set logger(value: Logger) {
    this._logger = value;
  }

  get server() {
    return this._server;
  }

  protected set server(value: Server) {
    this._server = value;
  }

  get db() {
    return this._db;
  }

  protected set db(value: DatabaseProvider) {
    this._db = value;
  }

  get offsetStore() {
    return this._offsetStore;
  }

  protected set offsetStore(value: OffsetStore) {
    this._offsetStore = value;
  }

  get events() {
    return this._events;
  }

  protected set events(value: Events) {
    this._events = value;
  }

  get redisClient() {
    return this._redisClient;
  }

  protected set redisClient(value: RedisClient) {
    this._redisClient = value;
  }

  get commandInterface() {
    return this._commandInterface;
  }

  protected set commandInterface(value: CommandInterface) {
    this._commandInterface = value;
  }

  get reflectionService() {
    return this._reflectionService;
  }

  protected set reflectionService(value: ReflectionService) {
    this._reflectionService = value;
  }

  protected readonly services = new Map<string, ServiceImplementation<any> | ServiceBase<any, any> | CommandInterface>();
  protected readonly topics = new Map<string, Topic>();
  protected readonly serviceActions = new Map<string, ((msg: any, context: any, config: any, eventName: string) => Promise<void>)>();
  protected readonly jobService = {
    handleQueuedJob: (msg: any, context: any, config: any, eventName: string) => {
      return this.serviceActions.get(msg?.type)(msg?.data?.payload, context, config, msg?.type).then(
        () => this.logger?.info(`Job ${msg?.type} done.`),
        (err: any) => this.logger?.error(`Job ${msg?.type} failed: ${err}`)
      );
    }
  };

  /**
   * Override this factory function and return a list of ServiceBindConfig[].
   * Each ServiceBindConfig expects a ServiceBase implementation,
   * a ServiceDefinition and a ProtoMetadata.
   * Worker.start() binds all configured services to the server instance.
   */
  protected abstract initServices(): Promise<ServiceBindConfig<any>[]>;

  protected async bindServices(configs: ServiceBindConfig<any>[]) {
    this.logger?.debug('bind Services', configs);
    const serviceNames = this.cfg.get('serviceNames');
    configs.map(
      config => {
        this.services.set(serviceNames?.[config.name] ?? config.name, config.implementation);
      }
    );
    await Promise.all(
      configs.map(
        config => this.server.bind(
          serviceNames?.[config.name] ?? config.name,
          config,
        )
      )
    );
  }

  protected async bindCommandInterface(configs: ServiceBindConfig<any>[]) {
    this.logger?.debug('bind CommandInterface');
    this.commandInterface = [...this.services.values()].find(
      service => service instanceof CommandInterface
    ) as CommandInterface;

    if (this.commandInterface) {
      return;
    }

    const serviceName = this.cfg.get('serviceNames:cis');
    if (!serviceName) {
      this.logger?.warn(
        'CommandInterface not initialized',
        'serviceNames:cis for CommandInterface not set!',
      );
      return;
    }

    this.commandInterface = new CommandInterface(
      this.server,
      this.cfg,
      this.logger,
      this.events,
      this.redisClient,
    );
    this.services.set(serviceName, this.commandInterface);
    configs.push(
      {
        name: serviceName,
        service: CommandInterfaceServiceDefinition,
        implementation: this.commandInterface,
        meta: CommandInterfaceMeta,
      } as ServiceBindConfig<CommandInterfaceServiceDefinition>
    );
    await this.server.bind(
      serviceName,
      {
        service: CommandInterfaceServiceDefinition,
        implementation: this.commandInterface,
      } as BindConfig<CommandInterfaceServiceDefinition>
    );
  }

  protected bindRefelctions(configs: ServiceBindConfig<any>[]) {
    this.logger?.debug('bind ReflectionService');
    const serviceName = this.cfg.get('serviceNames:reflection');
    if (!serviceName) {
      this.logger?.warn(
        'ReflectionService not initialized',
        'serviceNames:reflection for ReflectionService not set!',
      );
      return;
    }

    const metas = configs.map(config => config.meta);
    registerProtoMeta(
      ...metas
    );

    this.reflectionService = buildReflectionService(
      metas.map(
        meta => ({
          descriptor: meta.fileDescriptor as any
        })
      )
    );

    this.services.set(serviceName, this.reflectionService);
    return this.server.bind(
      serviceName,
      {
        service: ServerReflectionService,
        implementation: this.reflectionService,
      }
    );
  }

  protected async bindHealthCheck() {
    this.logger?.debug('bind HealthCheckService');
    const name = this.cfg.get('serviceNames:health');

    if (!name) {
      this.logger?.warn(
        'HealthCheckService not initialized',
        'serviceNames:health for HealthCheckService not set!',
      );
      return;
    }

    if (!this.commandInterface) {
      this.logger?.warn(
        'HealthCheckService not initialized',
        'CommandInterface missing!',
      );
      return;
    }

    await this.server.bind(
      name,
      {
        service: HealthDefinition,
        implementation: new Health(
          this.commandInterface,
          {
            logger: this.logger,
            cfg: this.cfg,
            dependencies: [],
            readiness: async () => !!await (this.db as Arango).db.version()
          }
        )
      } as BindConfig<HealthDefinition>
    );
  }

  protected bindHandler(serviceName: string, functionName: string) {
    serviceName = this.cfg.get(`serviceNames:${serviceName}`) ?? serviceName;
    this.logger?.debug(`Bind event to handler: ${serviceName}.${functionName}`);
    return (msg: any, context: any, config: any, eventName: string): Promise<any> => {
      return this.services.get(serviceName)?.[functionName]?.(msg, context).then(
        () => this.logger?.debug(`Event ${eventName} handled.`),
        (err: any) => this.logger?.error(`Error while handling event ${eventName}: ${err}`),
      ) ?? this.logger?.warn(
        `Event ${eventName} was not bound to handler: ${serviceName}.${functionName} does not exist!.`
      );
    };
  }

  protected async bindEvents() {
    this.logger?.debug('bind Events');
    const serviceNames = this.cfg.get('serviceNames');
    const kafkaCfg = this.cfg.get('events:kafka');
    this.events = new Events(kafkaCfg, this.logger);
    await this.events.start();
    this.offsetStore = new OffsetStore(this.events, this.cfg, this.logger);

    await Promise.all(Object.entries(kafkaCfg.topics).map(async ([key, value]: any[]) => {
      const topicName = value.topic;
      const topic = await this.events.topic(topicName);
      const offsetValue: number = await this.offsetStore.getOffset(topicName);
      this.logger?.info('subscribing to topic with offset value', topicName, offsetValue);
      Object.entries(value.events as { [key: string]: string } ?? {}).forEach(
        ([eventName, handler]) => {
          const i = handler.lastIndexOf('.');
          const name = handler.slice(0, i);
          const serviceName = serviceNames?.[name] ?? name;
          const functionName = handler.slice(i+1);
          this.serviceActions.set(eventName, this.bindHandler(serviceName, functionName));
          topic.on(
            eventName as string,
            this.serviceActions.get(eventName),
            { startingOffset: offsetValue }
          );
        }
      );
      this.topics.set(key, topic);
    }));
  }

  public async start(
    cfg?: ServiceConfig,
    logger?: Logger,
  ): Promise<any> {
    this.cfg = cfg = cfg ?? createServiceConfig(process.cwd());
    const logger_cfg = cfg.get('logger');

    if (logger) {
      this.logger = logger;
    }
    else if (logger_cfg) {
      logger_cfg.esTransformer = (msg: any) => {
        msg.fields = JSON.stringify(msg.fields);
        return msg;
      };
      this.logger = logger = createLogger(logger_cfg);
    }

    this.server = new Server(this.cfg.get('server'), this.logger);
    this.db = await database.get(this.cfg.get('database:main'), this.logger);
    const redisConfig = this.cfg.get('redis');
    redisConfig.db = this.cfg.get('redis:db-indexes:db-subject');
    this.redisClient = createClient(redisConfig);

    await this.bindEvents();
    const serviceConfigs = await this.initServices();
    await this.bindServices(serviceConfigs);
    await this.bindCommandInterface(serviceConfigs);
    await this.bindHealthCheck();
    await this.bindRefelctions(serviceConfigs);

    // start server
    await this.server.start();
    this.logger?.info('Server started successfully');
  }

  async stop(): Promise<any> {
    this.logger?.info('Shutting down');
    await Promise.allSettled([
      this.server?.stop(),
      this.events?.stop(),
      this.offsetStore?.stop(),
    ]);
  }
}
