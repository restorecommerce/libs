import * as retry from 'retry';
import { isNullish, clone, isIncludedIn, filter, pick, keys } from 'remeda';
import { EventEmitter } from 'events';
import * as async from 'async';
import { Logger } from '@restorecommerce/logger';
import {
  Producer,
  Consumer,
  Admin,
  ProduceResult,
  type Message,
  noopDeserializer,
  noopSerializer,
  ProducerOptions,
  ConsumerOptions,
  AdminOptions
} from '@platformatic/kafka';
import { decodeMessage, encodeMessage } from '../../../protos.js';

/**
 * A Kafka topic.
 */
export class Topic {
  name: string;
  emitter: EventEmitter;
  provider: Kafka;
  subscribed: string[];
  waitQueue: any[];
  currentOffset: bigint;
  consumer: Consumer;
  config: any;
  // message sync throttling attributes
  asyncQueue: async.QueueObject<any>;
  drainEvent: (context: Message, done: (err: any) => void) => void;
  // default process one message at a time
  asyncLimit = 1;
  manualOffsetCommit: boolean;
  subscribedToTopic: boolean;

  /**
   * Kafka topic.
   * When the listener count for all events are zero, the consumer unsubscribes
   * from the topic.
   *
   * @constructor
   * @private
   * @param {string} name Topic name
   * @param provider
   * @param config
   */
  constructor(name: string, provider: Kafka, config: any, manualOffsetCommit = false) {
    this.name = name;
    this.emitter = new EventEmitter();
    this.provider = provider;
    this.subscribed = [];
    this.waitQueue = [];
    this.currentOffset = 0n;
    this.config = config;
    this.manualOffsetCommit = manualOffsetCommit;
  }

  async createIfNotExists(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.provider.admin.listTopics().then(topics => {
        if (topics.indexOf(this.name) < 0) {
          const operation = retry.operation();
          operation.attempt(async () => {
            this.provider.admin.createTopics({
              topics: [this.name]
            }).then(() => {
              this.provider.logger.info(`Topic ${this.name} created successfully`);
              resolve();
            }).catch((err: any) => {
              const { code, message, details, stack } = err;
              this.provider.logger.error(`Cannot create topic ${this.name}:`, { code, message, details, stack });
              operation.retry(err);
              const attemptNo = (operation.attempts as () => number)();
              this.provider.logger.info(`Retry creating the Topic, attempt no: ${attemptNo}`);
            });
          });
        } else {
          this.provider.logger.warn(`Topic ${this.name} already exists`);
          resolve();
        }
      });
    });
  }

  /**
   * Returns the number of listeners for the given event.
   *
   * @param  {string} eventName Name of the event
   * @return {number}           Number of listeners
   */
  listenerCount(eventName: string): number {
    if (isNullish(eventName)) {
      throw new Error('missing argument eventName');
    }
    const listeners = this.emitter.listeners(eventName);
    return listeners.length;
  }

  /**
   * Returns whether or not any listeners exist for event.
   *
   * @param  {string}  eventName [description]
   * @return {Boolean}           True when listeners exist, false if not.
   */
  hasListeners(eventName: string): boolean {
    if (isNullish(eventName)) {
      throw new Error('missing argument eventName');
    }
    const listeners = this.emitter.listeners(eventName);
    return listeners.length > 0;
  }

  /**
   * Remove the given listener from given event.
   * If no eventName is provided, all listeners from all events will be removed.
   * If no listener is provided, all listeners will be removed from the given event.
   *
   * @param  {string} eventName Name of the event
   * @param  {function|generator} listener  Event listener
   */
  async removeListener(eventName: string, listener: any): Promise<void> {
    this.provider.logger.verbose(`Removing listener from event ${eventName}`);
    this.emitter.removeListener(eventName, listener);
    if (this.listenerCount(eventName) === 0) {
      await this.$unsubscribe(eventName);
    }
  }

  /**
   * Remove all listeners from given event.
   * If no eventName is provided, all listeners from all events will be removed.
   *
   * @param  {string} eventName Name of the event
   */
  async removeAllListeners(eventName: string): Promise<void> {
    this.provider.logger.verbose(`Removing all listeners from event ${eventName}`);
    this.emitter.removeAllListeners(eventName);
    if (this.listenerCount(eventName) === 0) {
      await this.$unsubscribe(eventName);
    }
  }

  /**
   * Return the offset number of this topic.
   *
   * @param {bigint} time Use -1 for latest and 0 for earliest.
   * @return {bigint} offset number
   */
  async $offset(time: bigint = -1n): Promise<bigint> {
    await this.initConsumerIfNotExists();

    return new Promise<bigint>((resolve, reject) => {
      if (time < 0n) {
        this.consumer.listOffsets({
          topics: [this.name],
        }).then((r) => {
          resolve(r.get(this.name)[0]);
          return r.get(this.name)[0];
        }).catch((err: any) => {
          this.provider.logger.error('Error occurred retrieving topic offset:', { code: err.code, message: err.message, stack: err.stack });
          reject(err);
        });
      }

      return this.consumer.listOffsets({
        topics: [this.name],
        timestamp: time,
      }).then(r => {
        resolve(r.get(this.name)[0]);
        return r.get(this.name)[0];
      }).catch((err: any) => {
        this.provider.logger.error('Error occurred retrieving topic offset:', { code: err.code, message: err.message, stack: err.stack });
        reject(err);
      });
    });
  }

  /**
   * Suspend the calling function until the Kafka client received a message with the offset.
   * @param {bigint} offset Kafka message offset.
   * @return {Promise} Thunk will be resolved when a message is received
   * with the corresponding offset.
   */
  async $wait(offset: bigint): Promise<void> {
    return new Promise((cb) => {
      if (this.currentOffset >= offset) {
        cb();
        return;
      }
      this.waitQueue.push({ offset, cb });
    });
  }

  /**
   * Reset consumer, unsubscribes all the events on the topic and then
   * subcribes again for same set of events
   *
   * @param {string[]} eventNames list of event names
   * @param {bigint} offset The offset at which to restart from.
   */
  async $resetConsumer(eventNames: string[], offset: bigint): Promise<void> {
    this.provider.logger.info('Event Names for consumer reset', eventNames);
    if (eventNames && eventNames.length > 0) {
      // since the consumer is set to undefined only when there is no more subscription
      // need to unsubcribe all eventNames and then resubcribe at once
      const eventNamesList = clone(eventNames);
      // unsubscribe all events on consumer
      for (const eventName of eventNamesList) {
        await this.$unsubscribe(eventName);
        this.provider.logger.info(`Unsubscribed event ${eventName}`);
      }
      // subscribe all events on consumer
      for (const eventName of eventNamesList) {
        await this.$subscribe(eventName, offset);
        this.provider.logger.info(`Subscribed event ${eventName}`);
      }
    } else {
      this.provider.logger.warn('Event names empty for consumer reset');
    }
  }

  /**
   * Force a committed offset reset.
   *
   * @param {string} eventName
   * @param {bigint} offset The offset at which to restart from.
   */
  async $reset(eventName: string, offset: bigint): Promise<void> {
    if (this.subscribed.indexOf(eventName) > -1) {
      await this.$unsubscribe(eventName);
    }
    await this.$subscribe(eventName, offset);
  }

  /**
   * Unsubscribe from Kafka topic. Does not remove any listeners.
   */
  private async $unsubscribe(eventName: string): Promise<void> {
    if (!isIncludedIn(eventName, this.subscribed)) {
      return;
    }
    const index = this.subscribed.indexOf(eventName);
    this.subscribed.splice(index, 1);
  }

  /**
   * Filters subscribed messages among all received Kafka messages and then
   * invokes $receive(event, msg, context);
   * @return {function}
   */
  private makeDataHandler(context: Message): void {
    const eventName = context.key.toString();
    if (isIncludedIn(eventName, this.subscribed)) {
      const logger = this.provider.logger;
      try {
        this.$receive(eventName, context.value, context);
        // commit offset
        const offset = context.offset;
        this.filterWaitQueue(offset);
        this.currentOffset = offset;
        this.commit();
      } catch (error: any) {
        // do not commit offset
        logger.error(`topic ${context.topic} error`, { code: error.code, message: error.message, stack: error.stack });
        throw error;
      }
    }
  }

  private filterWaitQueue(offset: bigint | { offset: bigint }): void {
    if (typeof offset === 'object') {
      offset = offset.offset;
    }
    this.waitQueue = filter(this.waitQueue, (w) => {
      if (w.offset <= offset) {
        w.cb();
        return false;
      }
      return true;
    });
  }

  private async initConsumerIfNotExists(queue?: boolean): Promise<void> {
    if (!this.consumer) {
      this.consumer = await this.provider.newConsumer(this.provider.config.groupId + '_' + this.name);

      await this.consumer.connectToBrokers().then(() => {
        this.provider.logger.info(`Consumer for topic '${this.name}' connected`);
      }).catch((err: any) => {
        this.provider.logger.error(`Consumer for topic '${this.name}' connection error`, { code: err.code, message: err.message, stack: err.stack });
      });

      // On receiving the message on Kafka consumer put the message to async Queue.
      if (queue) {
        // start drain process
        this.drain();
      }
    }
  }

  /**
   * Subscribe to the kafka topic.
   *
   * @param eventName
   * @param offsetValue
   * @param queue
   **/
  private async $subscribe(eventName: string, offsetValue: bigint, queue?: boolean): Promise<void> {
    if (!this.subscribedToTopic) {
      this.subscribedToTopic = true;

      await this.initConsumerIfNotExists(queue);
      await this.consumer.consume({
        sessionTimeout: 10000,
        heartbeatInterval: 500,
        topics: [this.name],
        mode: 'manual',
        offsets: [{
          topic: this.name,
          partition: 0,
          offset: BigInt(offsetValue)
        }],
      }).then(stream => {
        this.provider.logger.info(`Consumer for topic '${this.name}' subscribed`);

        stream.on('data', (message) => {
          if (queue) {
            this.onMessageForQueue(message);
          } else {
            this.makeDataHandler(message);
          }
        });
      }).catch((err: any) => {
        this.provider.logger.error(`Consumer for topic '${this.name}' failed to run`, { code: err.code, message: err.message, stack: err.stack });
        throw err;
      });
    }

    this.subscribed.push(eventName);
  }

  private onMessageForQueue(context: Message): void {
    if (isIncludedIn(context.key.toString(), this.subscribed)) {
      this.asyncQueue.push(context);
    }
  }

  /**
   * main reg. function, pass it a function to receive messages
   * under flow control
   */
  private drain(): void {
    this.drainEvent = (context: Message, done: (err: any) => void) => {
      this.$receive(context.key.toString(), context.value, context);
    };
    this.startToReceiveMessages();
  }

  private startToReceiveMessages(): void {
    this.asyncQueue = async.queue((message: Message, done) => {
      if (this.drainEvent) {
        setImmediate(() => {
          this.drainEvent(message, (err) => {
            if (err) {
              done(err);
            }
          });
          this.filterWaitQueue(message.offset);
          done();
        });
      } else {
        this.provider.logger.error('No draining event was provided; discarding messages');
        done();
      }
    }, this.asyncLimit);

    (this.asyncQueue.drain as any)(() => {
      // commit state first, before resuming
      this.provider.logger.verbose('Committing offsets upon async queue drain');
      this.commit();
    });

    this.provider.logger.info('Async queue draining started.');
  }

  private commit(): any {
    // Check if manual offset commit is enabled
    if (!this.manualOffsetCommit) {
      this.commitCurrentOffsets().then(() => {
        this.provider.logger.verbose('Offsets committed successfully');
      }).catch(error => {
        this.provider.logger.warn('Failed to commit offsets, resuming anyway after:', error);
        // Fix for kafkaJS onCrash issue for KafkaJSNonRetriableError, to reset the consumers
        this.provider.logger.warn('Commit error name', { name: error.name });
        this.provider.logger.warn('Commit error message', { message: error.message });
        if ((error.name === 'KafkaJSNonRetriableError' || error.name === 'KafkaJSError') && error.message === 'The coordinator is not aware of this member') {
          this.provider.logger.info('Reset Consumer connection due to KafkaJSNonRetriableError');
          this.$resetConsumer(this.subscribed, this.currentOffset);
          this.provider.logger.info('Consumer connection reset successfully');
        }
      });
    }
  }

  async commitCurrentOffsets(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.consumer.commit({
        offsets: [{
          leaderEpoch: 0, // ?
          topic: this.name,
          offset: this.currentOffset,
          partition: 0 // ?
        }]
      }).then(resolve).catch((err: any) => {
        this.provider.logger.error('Error committing offset', { code: err.code, message: err.message, stack: err.stack });
        reject(err);
      });
    });
  }

  /**
   * Manually commit the current offset.
   */
  async commitOffset(): Promise<void> {
    try {
      // Commit the current offset
      await this.commitCurrentOffsets();
      this.provider.logger.verbose('Offset committed manually');
    } catch (error: any) {
      this.provider.logger.error('Failed to commit offset manually', { code: error.code, message: error.message, stack: error.stack });
      throw error;
    }
  }

  /**
   * Internal function for receiving event messages from Kafka and
   * forwarding them to local listeners.
   * @param {string} eventName
   * @param {Object} message
   * @param {Object} context
   */
  private $receive(eventName: string, message: any, context: Message): void {
    // Decode message here and get the auto completion here
    if (this.hasListeners(eventName)) {
      let decodedMsg = this.provider.decodeObject(
        this.config,
        eventName,
        message
      );
      if (decodedMsg) {
        decodedMsg = pick(decodedMsg, keys(decodedMsg)); // hack around messy protobuf.js object
        this.provider.logger.debug(`kafka received event with topic ${context.topic} and event name ${eventName} at offset ${context.offset.toString(10)}`, { decodedMsg });
        this.emitter.emit(
          eventName,
          decodedMsg,
          context,
          this.config,
          eventName
        );
      }
    }
  }

  /**
   * Listen to events.
   * When the topic is not subscribed to a Kafka topic, a connection to Kafka is
   * made and a group consumer subscribes to the Kafka topic with the name
   * of this topic.
   * NOTE When subscribing this call can take a bit. You can subscribe to a topic
   * preemptively by calling $subscribe.
   *
   * @param  {string} eventName Event name
   * @param  {function|generator} listener  Listener
   * @param opts
   */
  async on(eventName: string, listener: any, opts: SubscriptionOptions = {}): Promise<void> {
    let { startingOffset } = opts;
    const { queue, forceOffset } = opts;
    if (!(this.subscribed.includes(eventName))) {
      if (isNullish(startingOffset) || (this.config.latestOffset && !forceOffset)) {
        // override the startingOffset with the latestOffset from Kafka
        // if above config is set
        startingOffset = await this.$offset(-1n);
      }
      await this.$subscribe(eventName, BigInt(startingOffset), queue);
    }
    this.emitter.on(eventName, listener);
  }

  /**
   * Send event messages.
   *
   * @param  {string} eventName Event name
   * @param  {Object} message   Message
   */
  async emit(eventName: string, message: object): Promise<void> {
    await this.provider.$send(this.name, eventName, message);
  }
}

export interface KafkaProviderConfig {
  kafka: ProducerOptions<Buffer, Buffer, Buffer, Buffer>
    & ConsumerOptions<Buffer, Buffer, Buffer, Buffer>
    & AdminOptions;
  timeout: number;
  groupId: string;
}

/**
 * Events provider.
 */
export class Kafka {

  config: KafkaProviderConfig;
  topics: { [key: string]: Topic };
  logger: Logger;
  producer: Producer;
  admin: Admin;

  producerConnected: boolean;
  adminConnected: boolean;
  commonOptions: KafkaProviderConfig['kafka'];

  /**
   * Kafka is a provider for Events.
   *
   * @constructor
   * @see {@link Events}
   * @param {object} config
   * @param {object} logger
   */
  constructor(config: any, logger: Logger) {
    this.config = clone(config);
    this.topics = {};
    this.logger = logger;
  }

  /**
   * Start connects to kafka with a producer.
   * Suspends the calling function until the producer is connected.
   */
  async start(): Promise<void> {
    const operation = retry.operation({
      forever: true,
      maxTimeout: this.config?.timeout ?? 60000,
    });
    return new Promise<void>((resolveRetry) => {
      operation.attempt(async () => {
        try {
          this.commonOptions = {
            ...this.config.kafka,
            serializers: {
              key: noopSerializer,
              value: noopSerializer,
              headerKey: noopSerializer,
              headerValue: noopSerializer,
            },
            deserializers: {
              key: noopDeserializer,
              value: noopDeserializer,
              headerKey: noopDeserializer,
              headerValue: noopDeserializer,
            },
            retries: 100,
            retryDelay: 1000,
            autocommit: false
          };

          // These are kept from migration of KafkaJS to Platformic lib
          if ('brokers' in this.commonOptions) {
            this.commonOptions['bootstrapBrokers'] = this.commonOptions['brokers'] as string[];
          }

          this.logger.info(`[kafka-client] Connecting - attempt No: ${operation.attempts()}`);

          this.producer = new Producer(this.commonOptions);
          this.admin = new Admin(this.commonOptions);

          // waiting for producer to be ready
          await new Promise((resolveProducer, rejectProducer) => {
            this.producer.on('client:broker:connect', () => {
              this.producerConnected = true;
              this.logger.info('The Producer is ready.');
            });

            this.producer.on('client:broker:disconnect', (err: any) => {
              this.producerConnected = false;
              this.logger.warn('The Producer has disconnected:', err);
              rejectProducer(err);
            });

            this.producer.on('client:broker:failed', (err: any) => {
              this.logger.warn('The Producer connection failed:', err);
              rejectProducer(err);
            });

            this.producer.connectToBrokers().then(() => {
              resolveProducer(true);
            }).catch((err: any) => {
              rejectProducer(err);
              this.logger.warn('Producer connection error:', err);
            });
          }).then(() => {
            this.admin.on('client:broker:connect', () => {
              this.logger.info('The Admin is ready.');
              this.adminConnected = true;
            });

            this.admin.on('client:broker:disconnect', (err: any) => {
              this.logger.warn('The Admin connection failed:', err);
              this.adminConnected = false
            });

            this.admin.on('client:broker:failed', (err: any) => {
              this.logger.warn('The Admin connection failed:', err);
              throw err;
            });

            this.admin.connectToBrokers().then(() => {
              resolveRetry();
            }).catch(
              (err: any) => {
                this.logger.warn('Admin connection error:', err);
                throw err;
              }
            );
          });
        }
        catch (err: any) {
          operation.retry(err);
          const attemptNo = operation.attempts();
          this.producer?.close();
          this.logger.info(`Retry initialize the Producer, attempt No: ${attemptNo}`);
        }
      });
    });
  }

  /**
   * Encode the given message object using protobuf.js.
   *
   * @param  {Object} msg
   * @param  {string} messageObject
   * @return {Object} buffer
   */
  private static encodeObject(msg: object, messageObject: string): Uint8Array {
    return encodeMessage(msg, messageObject);
  }

  /**
   * Decode the given message using protobuf.js.
   * @param config
   * @param eventName
   * @param msg
   */
  decodeObject(config: any, eventName: string, msg: any): any {
    try {
      return decodeMessage(msg, config[eventName].messageObject);
    } catch (error: any) {
      this.logger.error(
        `error on decoding message with event ${eventName}`,
        { error }
      );
    }
  }

  /**
   * Send a message event to a Kafka topic.
   * A protobuf message is an instance of the google's protobuf generated class
   *
   * @param  {string} topicName
   * @param  {string} eventName
   * @param  {Object|Object[]} message
   */
  async $send(topicName: string, eventName: string, message: any): Promise<ProduceResult> {
    try {
      const messages = Array.isArray(message) ? message : [message];
      const config: any = this.config;
      const messageObject = config[eventName]?.messageObject;
      if (!messageObject) {
        throw new Error(`messageObject for event ${eventName} not configured!`);
      }
      const values: Message[] = messages?.map(
        msg => {
          const bufferObj = Kafka.encodeObject(msg, messageObject);
          return {
            topic: topicName,
            key: Buffer.from(eventName),
            value: Buffer.from(bufferObj),
            partition: 0,
            headers: {}
          } as Message;
        }
      )
      for (const msg of messages) {
        if (config[eventName]?.omittedFields) {
          const keys = config[eventName].omittedFields;
          this.omitFields(keys, msg, config[eventName].enableLogging);
        }
      }
      this.logger.debug(`Sending event ${eventName} to topic ${topicName}`, { messages });
      return await this.producer.send({
        messages: values
      }).then((data) => {
        for (let i = 0; i < messages.length; i++) {
          const msg = messages[i];
          this.logger.debug(`Sent event ${eventName} to topic ${topicName} at offset ${data.offsets[i].offset.toString(10)}`, msg);
        }
        return data;
      });
    } catch (error: any) {
      const { message, details, stack } = error;
      this.logger.error(`Error on sending event ${eventName} to topic ${topicName}`, { message, details, stack });
      throw error;
    }
  }

  private omitFields(keys: string | string[], msg: any, enableLogging?: boolean): void {
    const msgs = Array.isArray(msg) ? msg : [msg];
    for (const key of keys) {
      for (const msg of msgs) {
        if (typeof key === 'string') {
          if (enableLogging && msg[key] && msg[key].value) {
            msg[key] = msg[key].value.toString();
          } else if (enableLogging && msg[key] && Array.isArray(msg[key])) {
            for (const eachMsg of msg[key]) {
              msg[key] = eachMsg.value.toString();
            }
          } else {
            delete msg[key];
          }
        } else if (typeof key === 'object') {
          const prefixKey = Object.keys(key)[0];
          this.omitFields(key[prefixKey], msg[prefixKey], enableLogging);
        }
      }
    }
  }

  /**
   * Returns a Kafka topic.
   *
   * @param  {string} topicName Topic name
   * @param config
   * @return {Topic} Kafka topic
   */
  async topic(topicName: string, config: any): Promise<Topic> {
    if (this.topics[topicName]) {
      return this.topics[topicName];
    }
    this.topics[topicName] = new Topic(topicName, this, config);
    await this.topics[topicName].createIfNotExists();
    return this.topics[topicName];
  }

  /**
   * stops the connection to kafka.
   * The calling function is suspended until the producer and
   * all consumers from topics are disconnected.
   */
  async stop(): Promise<any> {
    this.logger.warn('Stopping Kafka. Ignore any following connection errors');

    const errors: any[] = [];
    if (this.producerConnected) {
      await this.producer.close().catch((err: any) => {
        this.logger.warn('Error occurred stopping Kafka producer:', err);
        errors.push(err);
      });
    }

    if (this.adminConnected) {
      await this.admin.close().catch((err: any) => {
        this.logger.warn('Error occurred stopping Kafka admin:', err);
        errors.push(err);
      });
    }

    const topicNames = keys(this.topics);
    for (let i = 0; i < topicNames.length; i += 1) {
      const topic: Topic = this.topics[topicNames[i]];
      const eventNames = topic.subscribed;
      for (let j = eventNames.length - 1; j >= 0; j -= 1) {
        const eventName = eventNames[j];
        // This closes both producer and consumer objects
        // via unsubscribe()
        await topic.removeAllListeners(eventName);
      }
    }

    if (errors.length > 0) {
      this.logger.error('Errors when stopping Kafka client:', errors);
      throw errors;
    }
  }

  async newConsumer(groupId: string): Promise<Consumer> {
    const consumer = new Consumer({
      groupId: groupId,
      ...this.commonOptions
    });

    consumer.on('client:broker:connect', (msg: any) => {
      this.logger.info('Consumer is ready.', msg);
    });

    consumer.on('client:broker:disconnect', (err: any) => {
      this.logger.warn('Consumer connection failed:', err);
    });

    consumer.on('client:broker:failed', (err: any) => {
      this.logger.warn('Consumer connection failed:', err);
    });

    consumer.on('client:broker:drain', (msg: any) => {
      this.logger.info('Consumer broker ready for requests:', msg);
    });

    consumer.on('client:metadata', (msg: any) => {
      this.logger.silly('Consumer broker metadata:', msg);
    });

    consumer.on('client:close', (msg: any) => {
      this.logger.warn('Consumer client closed:', msg);
    });

    consumer.on('consumer:group:join', (msg: any) => {
      this.logger.info('Consumer joining group:', msg);
    });

    consumer.on('consumer:group:leave', (msg: any) => {
      this.logger.info('Consumer leaving group:', msg);
    });

    consumer.on('consumer:group:rejoin', (msg: any) => {
      this.logger.warn('Consumer re-joining group:', msg);
    });

    consumer.on('consumer:group:rebalance', (msg: any) => {
      this.logger.warn('Consumer group rebalancing:', msg);
    });

    consumer.on('consumer:heartbeat:cancel', (err: any) => {
      this.logger.warn('Consumer heartbeat cancelled:', err);
    });

    consumer.on('consumer:heartbeat:error', (err: any) => {
      this.logger.error('Consumer heartbeat error:', err);
    });

    return consumer;
  }
}

/**
 * Name of the event provider.
 */
export const Name = 'kafka';

export interface SubscriptionOptions {
  startingOffset?: bigint;
  queue?: boolean;
  forceOffset?: boolean;
}
