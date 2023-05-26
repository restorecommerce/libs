import * as retry from 'retry';
import * as _ from 'lodash';
import { EventEmitter } from 'events';
import * as async from 'async';
import { Logger } from 'winston';
import { Admin, Consumer, Kafka as KafkaJS, KafkaConfig, KafkaMessage, logLevel, Message, Producer } from 'kafkajs';
import { decodeMessage, encodeMessage } from '../../../protos';

const makeProtoResolver = (protoFilePath: string, protoRoot: string): any => {
  return (origin: string, target: string): string => {
    // ignore the same file
    if (target == protoFilePath) {
      return protoFilePath;
    }
    // Resolved target path for the import files
    return protoRoot + target;
  };
};

interface MessageWithContext {
  message: KafkaMessage;
  topic: string;
  partition: number;
}

/**
 * A Kafka topic.
 */
export class Topic {

  name: string;
  emitter: EventEmitter;
  provider: Kafka;
  subscribed: string[];
  waitQueue: any[];
  currentOffset: number;
  consumer: Consumer;
  config: any;
  // message sync throttling attributes
  asyncQueue: async.AsyncQueue<any>;
  drainEvent: (context: MessageWithContext, done: (err) => void) => void;
  // default process one message at at time
  asyncLimit = 1;

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
  constructor(name: string, provider: Kafka, config: any) {
    this.name = name;
    this.emitter = new EventEmitter();
    this.provider = provider;
    this.subscribed = [];
    this.waitQueue = [];
    this.currentOffset = 0;
    this.config = config;
  }

  async createIfNotExists(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.provider.admin.listTopics().then((topics) => {
        if (topics.indexOf(this.name) < 0) {
          this.provider.admin.createTopics({
            topics: [{
              topic: this.name
            }],
          }).then(() => {
            this.provider.logger.info(`Topic ${this.name} created successfully`);
            resolve();
          }).catch(err => {
            this.provider.logger.error(`Cannot create topic ${this.name}:`,  { code: err.code, message: err.message, stack: err.stack });
            reject(err);
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
    if (_.isNil(eventName)) {
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
  hasListeners(eventName: string): Boolean {
    if (_.isNil(eventName)) {
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
   * @param {number} time Use -1 for latest and 0 for earliest.
   * @return {number} offset number
   */
  async $offset(time = -1): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      if (time < 0) {
        return this.provider.admin.fetchTopicOffsets(this.name).then(data => {
          resolve(parseInt(data[0].offset, 10));
        }).catch(err => {
          this.provider.logger.error('Error occurred retrieving topic offset:',  { code: err.code, message: err.message, stack: err.stack });
          reject(err);
        });
      }

      return this.provider.admin.fetchTopicOffsetsByTimestamp(this.name, time).then(data => {
        resolve(parseInt(data[0].offset, 10));
      }).catch(err => {
        this.provider.logger.error('Error occurred retrieving topic offset:',  { code: err.code, message: err.message, stack: err.stack });
        reject(err);
      });
    });
  }

  /**
   * Suspend the calling function until the Kafka client received a message with the offset.
   * @param {number} offset Kafka message offset.
   * @return {Promise} Thunk will be resolved when a message is received
   * with the corresponding offset.
   */
  async $wait(offset: number): Promise<any> {
    return new Promise((() => {
      return (cb) => {
        if (this.currentOffset >= offset) {
          cb(null);
          return;
        }
        this.waitQueue.push({offset, cb});
      };
    })());
  }

  /**
   * Reset consumer, unsubscribes all the events on the topic and then
   * subcribes again for same set of events
   *
   * @param {string[]} eventNames list of event names
   * @param {number} offset The offset at which to restart from.
   */
  async $resetConsumer(eventNames: string[], offset: number): Promise<void> {
    this.provider.logger.info('Event Names for consumer reset', eventNames);
    if (eventNames && eventNames.length > 0) {
      // since the consumer is set to undefined only when there is no more subscription
      // need to unsubcribe all eventNames and then resubcribe at once
      const eventNamesList = _.clone(eventNames);
      // unsubscribe all events on consumer
      for (let eventName of eventNamesList) {
        await this.$unsubscribe(eventName);
        this.provider.logger.info(`Unsubscribed event ${eventName}`);
      }
      // subscribe all events on consumer
      for (let eventName of eventNamesList) {
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
   * @param {number} offset The offset at which to restart from.
   */
  async $reset(eventName: string, offset: number): Promise<void> {
    if (this.subscribed.indexOf(eventName) > -1) {
      await this.$unsubscribe(eventName);
    }
    await this.$subscribe(eventName, offset);
  }

  /**
   * Unsubscribe from Kafka topic. Does not remove any listeners.
   */
  private async $unsubscribe(eventName: string): Promise<void> {
    if (!_.includes(this.subscribed, eventName)) {
      return;
    }
    const index = this.subscribed.indexOf(eventName);
    this.subscribed.splice(index, 1);

    if (this.subscribed.length == 0) {
      this.provider.logger.info(`Closing consumer from topic ${this.name}`);
      await this.consumer.stop().then(() => this.consumer.disconnect()).then(() => {
        this.provider.logger.info(`Consumer disconnected from topic ${this.name}`);
        this.consumer = undefined;
      }).catch((err) => {
        this.provider.logger.error(`Error occurred unsubscribing ${eventName} on topic ${this.name}`,  { code: err.code, message: err.message, stack: err.stack });
      });
    }
  }

  /**
   * Filters subscribed messages among all received Kafka messages and then
   * invokes $receive(event, msg, context);
   * @return {function}
   */
  private makeDataHandler(context: MessageWithContext): void {
    const eventName = context.message.key.toString();
    if (_.includes(this.subscribed, eventName)) {
      const logger = this.provider.logger;
      try {
        this.$receive(eventName, context.message.value, context);
        // commit offset
        const offset = parseInt(context.message.offset, 10);
        this.filterWaitQueue(offset);
        this.currentOffset = offset;
        this.commit();
      } catch (error) {
        // do not commit offset
        logger.error(`topic ${context.topic} error`,  { code: error.code, message: error.message, stack: error.stack });
        throw error;
      }
    }
  }

  private filterWaitQueue(offset: number | { offset: number }): void {
    if (typeof offset === 'object') {
      offset = offset.offset;
    }
    this.waitQueue = _.filter(this.waitQueue, (w) => {
      if (w.offset <= offset) {
        w.cb();
        return false;
      }
      return true;
    });
  }

  /**
   * Subscribe to the kafka topic.
   *
   * @param eventName
   * @param offsetValue
   * @param queue
   **/
  private async $subscribe(eventName: string, offsetValue: number, queue?: boolean): Promise<void> {
    if (!this.consumer) {
      this.consumer = this.provider.client.consumer({
        groupId: this.provider.config.groupId + '_' + this.name
      });

      await this.consumer.connect().then(() => {
        this.provider.logger.info(`Consumer for topic '${this.name}' connected`);
      }).catch(err => {
        this.provider.logger.error(`Consumer for topic '${this.name}' connection error`,  { code: err.code, message: err.message, stack: err.stack });
      });

      await this.consumer.subscribe({
        topic: this.name
      }).then(() => {
        this.provider.logger.info(`Consumer for topic '${this.name}' subscribed`);
      }).catch(err => {
        this.provider.logger.error(`Consumer for topic '${this.name}' subscriber error`,  { code: err.code, message: err.message, stack: err.stack });
      });

      // On receiving the message on Kafka consumer put the message to async Queue.
      if (queue) {
        // start drain process
        this.drain();
      }

      await this.consumer.run({
        eachMessage: async (payload) => {
          if (queue) {
            this.onMessageForQueue(payload);
          } else {
            this.makeDataHandler(payload);
          }
        }
      }).catch(err => {
        this.provider.logger.error(`Consumer for topic '${this.name}' failed to run`,  { code: err.code, message: err.message, stack: err.stack });
      });

      this.consumer.seek({
        topic: this.name,
        partition: 0,
        offset: offsetValue.toString(10)
      });
    }

    this.subscribed.push(eventName);
  }

  private onMessageForQueue(context: MessageWithContext): void {
    if (_.includes(this.subscribed, context.message.key.toString())) {
      this.asyncQueue.push(context);
    }
  }

  /**
   * main reg. function, pass it a function to receive messages
   * under flow control
   */
  private drain(): void {
    this.drainEvent = (context: MessageWithContext, done: (err) => void) => {
      this.$receive(context.message.key.toString(), context.message.value, context);
    };
    this.startToReceiveMessages();
  }

  private startToReceiveMessages(): void {
    this.asyncQueue = async.queue(({topic, partition, message}: MessageWithContext, done) => {
      if (this.drainEvent) {
        setImmediate(() => {
          this.drainEvent({topic, partition, message}, (err) => {
            if (err) {
              done(err);
            }
          });
          this.filterWaitQueue(parseInt(message.offset, 10));
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

  async commitCurrentOffsets(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.consumer.commitOffsets([
        {
          topic: this.name,
          offset: this.currentOffset.toString(10),
          partition: 0 // ?
        }
      ]).then(resolve).catch(err => {
        this.provider.logger.error('Error committing offset',  { code: err.code, message: err.message, stack: err.stack });
        reject(err);
      });
    });
  }

  /**
   * Internal function for receiving event messages from Kafka and
   * forwarding them to local listeners.
   * @param {string} eventName
   * @param {Object} message
   * @param {Object} context
   */
  private $receive(eventName: string, message: any, context: any): void {
    // Decode message here and get the auto completion here
    if (this.hasListeners(eventName)) {
      let decodedMsg = this.provider.decodeObject(this.config,
        eventName, message);
      if (decodedMsg) {
        decodedMsg = _.pick(decodedMsg, _.keys(decodedMsg)); // hack around messy protobuf.js object
        this.provider.logger.debug(`kafka received event with topic ${context.topic} and event name ${eventName}`, { message });
        this.emitter.emit(eventName, decodedMsg, context,
          this.config, eventName);
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
    let {startingOffset, queue, forceOffset} = opts;
    if (!(this.subscribed.indexOf(eventName) > -1)) {
      if (_.isNil(startingOffset) || (this.config.latestOffset && !forceOffset)) {
        // override the startingOffset with the latestOffset from Kafka
        // if above config is set
        startingOffset = await this.$offset(-1);
      }
      await this.$subscribe(eventName, startingOffset, queue);
    }
    this.emitter.on(eventName, listener);
  }

  /**
   * Send event messages.
   *
   * @param  {string} eventName Event name
   * @param  {Object} message   Message
   */
  async emit(eventName: string, message: Object): Promise<void> {
    await this.provider.$send(this.name, eventName, message);
  }
}

export interface KafkaProviderConfig {
  kafka: KafkaConfig;
  timeout: number;
  groupId: string;
}

const toWinstonLogLevel = level => {
  switch (level) {
    case logLevel.ERROR:
    case logLevel.NOTHING:
      return 'error';
    case logLevel.WARN:
      return 'warn';
    case logLevel.INFO:
      return 'info';
    case logLevel.DEBUG:
      return 'debug';
  }
};

/**
 * Events provider.
 */
export class Kafka {

  config: KafkaProviderConfig;
  topics: { [key: string]: Topic };
  logger: Logger;
  client: KafkaJS;
  producer: Producer;
  admin: Admin;

  producerConnected: boolean;
  adminConnected: boolean;

  /**
   * Kafka is a provider for Events.
   *
   * @constructor
   * @see {@link Events}
   * @param {object} config
   * @param {object} logger
   */
  constructor(config: any, logger: Logger) {
    this.config = _.cloneDeep(config);
    this.topics = {};
    this.logger = logger;
  }

  /**
   * Start connects to kafka with a producer.
   * Suspends the calling function until the producer is connected.
   */
  async start(): Promise<void> {
    const operation = retry.operation({forever: true, maxTimeout: 2000});
    return new Promise<void>((resolveRetry) => {
      operation.attempt(async () => {
        this.client = new KafkaJS({
          ...this.config.kafka,
          logCreator: () => {
            return ({level, log}) => {
              const {message, ...extra} = log;
              this.logger.log(toWinstonLogLevel(level), '[kafka-client] ' + message, extra);
            };
          },
        });

        this.producer = this.client.producer();
        this.admin = this.client.admin();
        const timeout = this.config.timeout || 2000;

        this.producer.connect().catch(err => {
          this.logger.warn('Producer connection error: ' + err);
        });

        // waiting for producer to be ready
        await new Promise((resolveProducer, rejectProducer) => {
          const timer = setTimeout(() => {
            const err = 'Connection timeout: Kafka host is unreachable';
            this.logger.error(err, this.config.kafka.brokers);
            rejectProducer(err);
          }, timeout);

          this.producer.on('producer.connect', () => {
            this.producerConnected = true;
            this.logger.info('The Producer is ready.');
            clearTimeout(timer);
            resolveProducer(true);
          });

          this.producer.on('producer.disconnect', (err) => {
            this.producerConnected = false;
            this.logger.warn('The Producer has disconnected:', err);
            clearTimeout(timer);
            rejectProducer(err);
          });

          this.producer.on('producer.network.request_timeout', (err) => {
            this.logger.warn('The Producer timed out:', err);
            clearTimeout(timer);
            rejectProducer(err);
          });
        }).then(async () => {
          this.admin.on('admin.connect', () => this.adminConnected = true);
          this.admin.on('admin.disconnect', () => this.adminConnected = false);

          await this.admin.connect().catch(err => {
            this.logger.warn('Admin connection error: ' + err);
            throw err;
          });
        }).then(resolveRetry).catch(err => {
          const attemptNo = (operation.attempts as () => number)();
          this.producer.disconnect();
          this.logger.info(`Retry initialize the Producer, attempt no: ${attemptNo}`);
          operation.retry(err);
        });
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
  private static encodeObject(msg: Object, messageObject: string): Uint8Array {
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
    } catch (err) {
      this.logger.error(`error on decoding message with event ${eventName}`, { message: msg, errorCode: err.code, errorMessage: err.message, errorStack: err.stack });
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
  async $send(topicName: string, eventName: string, message: any): Promise<any> {
    let messages = message;
    const messageObject = this.config[eventName].messageObject;
    if (!_.isArray(message)) {
      messages = [message];
    }
    try {
      const values: Message[] = [];
      for (let i = 0; i < messages.length; i += 1) {
        //  get the binary representation of the message using serializeBinary()
        //  and build a Buffer from it.
        const msg = messages[i];
        const bufferObj = Kafka.encodeObject(msg, messageObject);

        values.push({
          key: eventName,
          value: Buffer.from(bufferObj),
          partition: 0
        });
      }
      for (let msg of messages) {
        if (this.config && this.config[eventName].omittedFields) {
          const keys = this.config[eventName].omittedFields;
          this.omitFields(keys, msg, this.config[eventName].enableLogging);
        }
      }
      this.logger.debug(`Sending event ${eventName} to topic ${topicName}`, {messages});
      return new Promise((resolve, reject) => {
        this.producer.send({
          topic: topicName,
          messages: values
        }).then((data) => {
          for (let msg of messages) {
            this.logger.debug(`Sent event ${eventName} to topic ${topicName}`, msg);
          }
          resolve(data);
        }).catch((err) => {
          this.logger.error(`error sending event ${eventName} to topic ${topicName}`,  { code: err.code, message: err.message, stack: err.stack });
          reject(err);
        });
      });
    } catch (err) {
      this.logger.error(`error on sending event ${eventName} to topic ${topicName}`,  { code: err.code, message: err.message, stack: err.stack });
      throw err;
    }
  }

  private omitFields(keys: string | string[], msg: any, enableLogging?: boolean): void {
    let msgs;
    if (!_.isArray(msg)) {
      msgs = [msg];
    } else {
      msgs = msg;
    }
    for (let key of keys) {
      for (let msg of msgs) {
        if (typeof key === 'string') {
          if (enableLogging && msg[key] && msg[key].value) {
            msg[key] = msg[key].value.toString();
          } else if (enableLogging && msg[key] && _.isArray(msg[key])) {
            for (let eachMsg of msg[key]) {
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

    const errors = [];
    if (this.producerConnected) {
      await this.producer.disconnect().catch(err => {
        this.logger.warn('Error occurred stopping Kafka producer:', err);
        errors.push(err);
      });
    }

    if (this.adminConnected) {
      await this.admin.disconnect().catch(err => {
        this.logger.warn('Error occurred stopping Kafka admin:', err);
        errors.push(err);
      });
    }

    const topicNames = _.keys(this.topics);
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
}

/**
 * Name of the event provider.
 */
export const Name = 'kafka';

export interface SubscriptionOptions {
  startingOffset?: number;
  queue?: boolean;
  forceOffset?: boolean;
}
