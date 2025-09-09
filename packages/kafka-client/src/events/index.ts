import * as _ from 'lodash';
import { createLogger, Logger } from '@restorecommerce/logger';
import * as kafka from './provider/kafka/index.js';
import * as local from './provider/local/index.js';
import { Topic } from './provider/kafka/index.js';

/**
 * A key, value map containing event providers.
 * Event providers are registered with the register function.
 */
const eventProviders: any = {};

/**
 * Register a event provider.
 *
 * @param  {string} name     Event provider identifier
 * @param  {constructor} provider Event provider constructor function
 */
export const registerEventProvider = (name: string, provider: any): void => {
  eventProviders[name] = provider;
};

registerEventProvider(kafka.Name, kafka.Kafka);
registerEventProvider(local.Name, local.Local);

/**
 * Events manages an event provider.
 */
export class Events {
  config: any;
  logger: Logger;
  provider: any;
  /**
   * @param [Object] config Event configuration.
   * @param [Logger] logger
   */
  constructor(config?: any, logger?: Logger) {
    // config
    if (_.isNil(config)) {
      throw new Error('missing argument config');
    }
    this.config = config;

    const loggerCfg = this.config.logger;
    if (loggerCfg) {
      loggerCfg.esTransformer = (msg: any) => {
        msg.fields = JSON.stringify(msg.fields);
        return msg;
      };
    }

    // logger
    if (_.isNil(logger)) {
      if (_.isNil(this.config.logger)) {
        this.logger = createLogger();
      } else {
        this.logger = createLogger(loggerCfg);
      }
    } else {
      this.logger = logger;
    }

    // provider
    const providerName = this.config.provider;
    if (_.isNil(providerName)) {
      this.logger.error('config does not have event provider name', this.config);
      throw new Error('config does not have event provider name');
    }
    const Provider = eventProviders[providerName];
    if (_.isNil(Provider)) {
      throw new Error(`events provider ${providerName} is not registered`);
    }
    this.provider = new Provider(this.config, this.logger);
  }

  /**
   * Start the provider.
   * Allows sending and receiving events after this call.
   * Suspends the function until the provider is started.
   */
  async start(): Promise<void> {
    return await this.provider.start();
  }

  /**
   * Stop the provider.
   * No events will be received or can be send after this call.
   * Suspends the function until the provider is stopped.
   */
  async stop(): Promise<any> {
    return await this.provider.stop();
  }

  /**
   * Returns a topic from the provider.
   *
   * @param  {string} name Topic name
   * @return {Topic}      Topic
   */
  topic(name: string, manualOffsetCommit?: boolean): Promise<Topic> {
    if (_.isNil(name)) {
      throw new Error('missing argument name');
    }
    if (!_.isString(name)) {
      throw new Error('argument name is not of type string');
    }
    // topic() api called inside Local / Kafka class - which then
    // invokes the actual topic constructor
    return this.provider.topic(name, this.config, manualOffsetCommit || false);
  }
}
