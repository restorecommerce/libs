import { type Logger, createLogger } from '@restorecommerce/logger';
import * as _ from 'lodash';
import { EventEmitter } from 'events';
import { BindConfig, grpcServer } from './transport/provider/grpc';

const transports: Record<string, any> = {};

/**
 * register transport provider
 *
 * @param  {string} name     transport provider identifier
 * @param  {constructor} provider transport provider constructor function
 */
export const registerTransport = (name: string, provider: any): void => {
  transports[name] = provider;
};

// register included providers
registerTransport('grpc', grpcServer);

/**
 * Initializes all configured transports.
 * @param  {object} config Configuration
 * @param  {object} logger
 * @return {object} Transport
 */
const setupTransport = (config: any, logger: Logger): any => {
  const transport = {};
  logger.debug('available transport providers',
    Object.keys(transports).join(','));
  for (let i = 0; i < config.length; i += 1) {
    const transportCfg = config[i];
    const providerName = transportCfg.provider;
    if (_.isNil(providerName)) {
      throw new Error('transport configuration without a provider');
    }
    const transportName = transportCfg.name;
    if (_.isNil(providerName)) {
      throw new Error('transport configuration without a name');
    }
    const TransportProvider = transports[providerName];
    if (_.isNil(TransportProvider)) {
      throw new Error(`transport provider ${providerName} does not exist`);
    }
    const provider = new TransportProvider(transportCfg, logger);
    transport[transportName] = provider;
  }
  logger.debug('using transports', Object.keys(transport).join(','));
  return transport;
};

/**
 * Server is a microservice server chassis.
 * It enables business logic to be accessed over transports and listen to events.
 * Default event providers: 'kafka'
 * Default transports: 'grpc'
 * @class
 */
export class Server extends EventEmitter {

  config: any;
  logger: Logger;
  middleware: any;
  transport: any;

  /**
   * @constructor
   * @param {object} config Server config.
   * @param {Logger} logger
   */
  constructor(config?: any, logger?: Logger) {
    super();
    if (_.isNil(config)) {
      throw new Error('mising argument config');
    }
    this.config = config;

    // logger
    if (_.isNil(logger)) {
      if (_.isNil(this.config.logger)) {
        this.logger = createLogger();
      } else {
        const loggerCfg = this.config.logger;
        this.logger = createLogger(loggerCfg);
      }
    } else {
      this.logger = logger;
    }

    // services
    this.logger.debug('setting up service endpoints');

    // transports
    this.logger.debug('setting up transports');
    try {
      this.transport = setupTransport(this.config.transports, this.logger);
    } catch (error) {
      this.logger.error('setupTransports', { code: error.code, message: error.message, stack: error.stack });
      throw error;
    }
  }

  /**
   * bind connects the service to configured transports.
   *
   * @param  {string} name Service name.
   * @param  {BindConfig} bindConfig A business logic service.
   */
  async bind(name: string, bindConfig: BindConfig<any>): Promise<void> {
    if (_.isNil(name)) {
      throw new Error('missing argument name');
    }
    if (!_.isString(name)) {
      throw new Error('argument name is not of type string');
    }
    if (_.isNil(bindConfig)) {
      throw new Error('missing argument bindConfig');
    }

    this.logger.debug('binding endpoints to transports');

    const transportNames = Object.keys(this.transport);
    const transport = this.transport;
    for (let i = 0; i < transportNames.length; i += 1) {
      const transportName = transportNames[i];
      const provider = transport[transportName];
      await provider.bind(bindConfig);
      this.emit('bound', name, bindConfig, provider);
    }
  }

  /**
   * start launches the server by starting transports and listening to events.
   */
  async start(): Promise<any> {
    const transportNames = Object.keys(this.transport);
    for (let i = 0; i < transportNames.length; i += 1) {
      const name = transportNames[i];
      const provider = this.transport[name];
      await provider.start();
      this.logger.info(`transport ${name} started`);
    }
    this.emit('serving', this.transport);
  }

  /**
   * Shuts down all transport provider servers.
   */
  async stop(): Promise<any> {
    const transportNames = _.keys(this.transport);
    for (let i = 0; i < transportNames.length; i += 1) {
      const name = transportNames[i];
      if (this.transport[name].end) {
        await this.transport[name].end();
      }
    }
    this.emit('stopped', this.transport);
  }
}
