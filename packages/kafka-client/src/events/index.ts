import { isNullish, isString } from 'remeda';
import { createLogger, Logger } from '@restorecommerce/logger';
import * as kafka from './provider/kafka/index.js';
import * as local from './provider/local/index.js';
import { EventProvider, Topic } from './interface.js';

type EventProvicerClass = new (config: any, logger: Logger, ...args: any[]) => EventProvider;

/**
 * A key, value map containing event providers.
 * Event providers are registered with the register function.
 */
const eventProviders = {} as Record<string, EventProvicerClass>;

/**
 * Register a event provider.
 *
 * @param  {string} name     Event provider identifier
 * @param  {constructor} provider Event provider constructor function
 */
export const registerEventProvider = (name: string, provider: EventProvicerClass): void => {
  eventProviders[name] = provider;
};

registerEventProvider(kafka.Name, kafka.Kafka);
registerEventProvider(local.Name, local.Local);

/**
 * Events manages an event provider.
 */
export class Events {
  config: any;
  logger?: Logger;
  provider: EventProvider;
  /**
   * @param [Object] config Event configuration.
   * @param [Logger] logger
   */
  constructor(config?: any, logger?: Logger) {
    // config
    if (isNullish(config)) {
      throw new Error('missing argument config');
    }
    this.config = config;

    const loggerCfg = this.config?.logger;
    if (loggerCfg) {
      loggerCfg.esTransformer = (msg: any) => {
        msg.fields = JSON.stringify(msg.fields);
        return msg;
      };
    }

    // logger
    if (isNullish(logger)) {
      if (isNullish(this.config.logger)) {
        this.logger = createLogger();
      } else {
        this.logger = createLogger(loggerCfg);
      }
    } else {
      this.logger = logger;
    }

    // provider
    const providerName = this.config.provider;
    if (isNullish(providerName)) {
      this.logger?.error('config does not have event provider name', this.config);
      throw new Error('config does not have event provider name');
    }
    const Provider = eventProviders[providerName];
    if (isNullish(Provider)) {
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
  async stop(): Promise<void> {
    return await this.provider.stop();
  }

  async delete(topics: string[]): Promise<void> {
    return await this.provider.delete(topics);
  }

  async deleteAll(): Promise<void> {
    return await this.provider.deleteAll();
  }

  /**
   * Returns a topic from the provider.
   *
   * @param  {string} name Topic name
   * @return {Topic}      Topic
   */
  topic(name: string, manualOffsetCommit?: boolean): Promise<Topic> {
    if (isNullish(name)) {
      throw new Error('missing argument name');
    }
    if (!isString(name)) {
      throw new Error('argument name is not type of string');
    }
    return this.provider.topic(name, this.config, manualOffsetCommit || false);
  }
}
