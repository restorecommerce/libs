import * as kafka from 'kafka-node';
import * as retry from 'retry';
import * as _ from 'lodash';
import { EventEmitter } from 'events';
import * as protobuf from 'protobufjs';
import * as async from 'async';
import { Logger } from 'winston';


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

/**
 * A Kafka topic.
 */
export class Topic {

  name: string;
  emitter: any;
  provider: any;
  subscribed: string[];
  waitQueue: any[];
  currentOffset: number;
  consumer: kafka.Consumer;
  config: any;
  // message sync throttling attributes
  asyncQueue: async.AsyncQueue<any>;
  drainEvent: any;
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
   */
  constructor(name: string, provider: any, config: any) {
    this.name = name;
    this.emitter = new EventEmitter();
    this.provider = provider;
    this.subscribed = [];
    this.waitQueue = [];
    this.currentOffset = 0;
    this.config = config;
    this.provider.producer.createTopics([this.name], true,
      (err, data) => {
        if (err) {
          this.provider.logger.error(`Cannot create topic ${this.name}:`, err);
          throw err;
        }
        this.provider.logger.info(` Topic ${this.name} created successfully`);
      }
    );
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
    if (listeners.length > 0)
      return true;
    else
      return false;
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
   * @param {number} time Use -1 for latest and -2 for earliest.
   * @return {number} offset number
   */
  async $offset(time: number): Promise<number> {
    const topic = this.name;
    const partition = 0;
    const tt = time || -1; // the latest (next) offset by default
    return new Promise<number>((resolve, reject) => {
      this.provider.offset.fetch([
        { topic, partition, time: tt, maxNum: 1 }
      ], (err, data) => {
        if (err) {
          this.provider.logger.error('Error occured retreiving topic offset:', err);
          reject(err);
        } else {
          resolve(data[topic][partition][0]);
        }
      });
    });
  }

  /**
   * Suspend the calling function until the Kafka client received a message with the offset.
   * @param {number} offset Kafka message offset.
   * @return {thunk} Thunk will be resolved when a message is received
   * with the corresponding offset.
   */
  async $wait(offset: number): Promise<any> {
    const that = this;
    return new Promise((() => {
      return (cb) => {
        if (that.currentOffset >= offset) {
          cb();
          return;
        }
        that.waitQueue = [{ offset, cb }];
      };
    })());
  }

  /**
   * Force a comitted offset reset.
   *
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

    const that = this;
    if (this.subscribed.length == 0) {
      this.provider.logger.info(`Closing consumer from topic ${this.name}`);
      await new Promise((resolve, reject) => {
        that.consumer.removeTopics([that.name], (err, removed) => {
          if (err) {
            that.provider.logger.error('Error removing topic:', err);
            reject(err);
          }
          // workaround for typings bug on `consumer.close()`
          const consumer = that.consumer as any;
          consumer.close((err) => {
            if (err) {
              reject(err);
            }
            that.consumer = null;
            resolve();
          });
        });
      }).catch((err) => {
        this.provider.logger.error(`Error occured unsubscribing ${eventName} on topic ${this.name}`, err);
      });
    }
  }

  /**
   * Filters subscribed messages among all received Kafka messages and then
   * invokes $receive(event, msg, context);
   * @return {function}
   */
  private makeDataHandler(message: kafka.Message): void {
    const msg = message.value;
    const eventName = message.key.toString();
    const context = {
      offset: message.offset,
      topic: message.topic,
      partition: message.partition,
    };
    if (_.includes(this.subscribed, eventName)) {
      const logger = this.provider.logger;
      try {
        this.$receive(eventName, msg, context);
        // commit offset
        this.filterWaitQueue(message.offset);
        this.currentOffset = message.offset;
        this.commit();
      } catch (error) {
        // do not commit offset
        logger.error(`topic ${message.topic} error`, error);
        throw error;
      }
    }
  }

  private filterWaitQueue(offset: any): void {
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
   * @param  {number} startingOffset =             Kafka.LATEST_OFFSET Offset index
   **/
  private async $subscribe(eventName: string, offsetValue: number, queue?: boolean): Promise<void> {
    if (!this.consumer) {
      const consumerClient = new kafka.KafkaClient(this.config);
      this.consumer = new kafka.Consumer(
        consumerClient,
        [
          { topic: this.name, offset: offsetValue }
        ],
        {
          autoCommit: true,
          encoding: 'buffer',
          fromOffset: true
        }
      );
      // On receiving the message on Kafka consumer put the message to asyn Queue.
      if (queue) {
        // start drain process
        this.drain();
        this.consumer.on('message', (message) => {
          this.onMessageForQueue(message);
        });
      } else {
        this.consumer.on('message', (message: kafka.Message) => {
          this.makeDataHandler(message);
        });
      }
    }
    this.subscribed.push(eventName);
  }

  private onMessageForQueue(message: any): void {
    const eventName = message.key.toString();
    if (_.includes(this.subscribed, eventName)) {
      this.asyncQueue.push(message);
    }
  }

  /**
   * main reg. function, pass it a function to receive messages
   * under flow control
   * @param drainEvent
   */
  private drain(): void {
    this.drainEvent = (message, done) => {
      const msg = message.value;
      const eventName = message.key.toString();
      const context = _.pick(message, ['offset', 'partition', 'topic']);
      this.$receive(eventName, msg, context);
    };
    this.startToReceiveMessages();
  }

  private startToReceiveMessages(): void {
    this.asyncQueue = async.queue((msg, done) => {
      if (this.drainEvent) {
        setImmediate(() => {
          this.drainEvent(msg, (err) => {
            if (err) {
              done(err);
            }
          });
          this.filterWaitQueue(msg);
          done();
        });
      } else {
        this.provider.logger.error('No draining event was provided; discarding messages');
        done();
      }
    }, this.asyncLimit);

    this.asyncQueue.drain = () => {
      // commit state first, before resuming
      this.provider.logger.verbose('Committing offsets upon async queue drain');
      this.commit();
    };
    this.provider.logger.info('Async queue draining started.');
  }

  private commit(): any {
    this.commitCurrentOffsets().then(() => {
      this.provider.logger.verbose('Offsets committed successfully');
    }).catch(error => {
      this.provider.logger.error('Failed to commit offsets, resuming anyway after:', error);
    });
  }

  async commitCurrentOffsets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.consumer.commit((err, data) => {
        if (err) {
          this.provider.logger.error('Error commiting offset:', err);
          return reject(err);
        } else {
          resolve(data);
        }
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
        this.provider.logger.info(`kafka received event with
        topic ${context.topic} and event name ${eventName}`);
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
   */
  async on(eventName: string, listener: any, opts: SubscriptionOptions = {}): Promise<void> {
    let { startingOffset, queue, forceOffset } = opts;
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

/**
 * Events provider.
 */
export class Kafka {

  config: any;
  topics: any;
  logger: Logger;
  ready: boolean;
  client: kafka.KafkaClient;
  producer: kafka.Producer;
  offset: kafka.Offset;

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
    this.ready = false;
  }

  /**
   * Start connects to kafka with a producer.
   * Suspends the calling function until the producer is connected.
   */
  async start(): Promise<any> {
    const operation = retry.operation({ forever: true, maxTimeout: 2000 });
    return new Promise((resolveRetry, reject) => {
      operation.attempt(async () => {
        this.client = new kafka.KafkaClient(this.config);
        this.producer = new kafka.Producer(this.client);
        this.offset = new kafka.Offset(this.client);
        const timeout = this.config.timeout || 2000;

        const that = this;
        // waiting for producer to be ready
        await new Promise((resolveProducer, rejectProducer) => {
          const timer = setTimeout(() => {
            const err = 'Connection timeout: Kafka host is unreachable';
            that.logger.error(err, that.config.connectionString);
            rejectProducer(err);
          }, timeout);

          this.producer.on('ready', () => {
            this.logger.info('The Producer is ready.');
            clearTimeout(timer);
            resolveProducer(true);
          });
          this.producer.on('error', (err) => {
            this.logger.error('The Producer has an error:', err);
            clearTimeout(timer);
            rejectProducer(err);
          });
        }).then((resp) => {
          resolveRetry(resp);
        }).catch(err => {
          const attemptNo = operation.attempts();
          this.client.close();
          this.producer.close();
          this.logger.info(`Retry initialize the Producer, attempt no: ${attemptNo}`);
          operation.retry(err);
        });
      });
    });
  }

  /**
   * Encode the given message object using protobuf.js.
   *
   * @param  {string} eventName
   * @param  {Object} msg
   * @param  {string} protoFilePath
   * @param  {string} messageObject
   * @return {Object} buffer
   */
  private encodeObject(eventName: string, msg: Object, protoFilePath: string,
    messageObject: string, protoRoot: string): Uint8Array {
    let root = new protobuf.Root();
    root.resolvePath = makeProtoResolver(protoFilePath, protoRoot);
    root = root.loadSync(protoFilePath, { keepCase: true });
    const MessageClass: protobuf.Type = root.lookupType(messageObject);
    const convertedMessage: protobuf.Message<Object> = MessageClass.create(msg);
    const buffer: Uint8Array = MessageClass.encode(convertedMessage).finish();

    return buffer;
  }

  /**
   * Decode the given message using protobuf.js.
   * @param config
   * @param eventName
   * @param msg
   */
  decodeObject(config: any, eventName: string, msg: any): protobuf.Message<Object> {

    const protoFilePath = config[eventName].protoRoot + config[eventName].protos;
    const protoRoot = config[eventName].protoRoot;
    const messageObject = config[eventName].messageObject;

    let root = new protobuf.Root();
    root.resolvePath = makeProtoResolver(protoFilePath, protoRoot);
    root = root.loadSync(protoFilePath, { keepCase: true });

    const MessageClass = root.lookupType(messageObject);
    let decodedMsg;
    try {
      decodedMsg = MessageClass.decode(msg);
    } catch (err) {
      this.logger.error(`error on decoding message with event ${eventName}:`, { message: msg, error: err });
    }
    return decodedMsg;
  }

  /**
   * Send a message event to a Kafka topic.
   * A protobuf message is an instance of the google's protobuf generated class
   *
   * @param  {string} topicName
   * @param  {string} eventName
   * @param  {Object} message
   * @param  {array.Object} message
   * @param {string} messageType
   */
  async $send(topicName: string, eventName: string, message: any): Promise<any> {
    let messages = message;
    const protoFilePath = this.config[eventName].protoRoot + this.config[eventName].protos;
    const messageObject = this.config[eventName].messageObject;
    if (!_.isArray(message)) {
      messages = [message];
    }
    try {
      const values = [];
      for (let i = 0; i < messages.length; i += 1) {
        //  get the binary representation of the message using serializeBinary()
        //  and build a Buffer from it.
        const msg = messages[i];
        const bufferObj: any = this.encodeObject(eventName, msg,
          protoFilePath, messageObject, this.config[eventName].protoRoot);
        values.push(new kafka.KeyedMessage(eventName, bufferObj));
      }
      for (let msg of messages) {
        if (this.config && this.config[eventName].bufferFields) {
          const keys = this.config[eventName].bufferFields;
          this.deleteBufferFields(keys, msg, this.config[eventName].enableLogging);
        }
      }
      this.logger.debug(`Sending event ${eventName} to topic ${topicName}`, { messages });
      return new Promise((resolve, reject) => {
        this.producer.send([{ topic: topicName, messages: values }], (err, data) => {
          if (err) {
            this.logger.error(
              `error sending event ${eventName} to topic ${topicName}`, err);
            reject(err);
          } else {
            for (let msg of messages) {
              this.logger.debug(`Sent event ${eventName} to topic ${topicName}`, msg);
            }
            resolve(data);
          }
        });
      });
    } catch (err) {
      this.logger.error(`error on sending event ${eventName} to topic ${topicName}`, err);
      throw err;
    }
  }

  private deleteBufferFields(keys: string | string[], msg: any, enableLogging?: boolean): void {
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
          }
          else {
            delete msg[key];
          }
        } else if (typeof key === 'object') {
          const prefixKey = Object.keys(key)[0];
          this.deleteBufferFields(key[prefixKey], msg[prefixKey], enableLogging);
        }
      }
    }
  }

  /**
   * Returns a Kafka topic.
   *
   * @param  {string} topicName Topic name
   * @return {Topic} Kafka topic
   */
  topic(topicName: string, config: any): any {
    if (this.topics[topicName]) {
      return this.topics[topicName];
    }
    this.topics[topicName] = new Topic(topicName, this, config);
    return this.topics[topicName];
  }

  /**
   * stops the connection to kafka.
   * The calling function is suspended until the producer and
   * all consumers from topics are disconnected.
   */
  async stop(): Promise<any> {
    const errors = [];
    await new Promise((resolve, reject) => {
      try {
        this.client.close(() => {
          resolve();
        });
      } catch (err) {
        this.logger.error('Error occured stopping Kafka client:', err);
        errors.push(err);
        reject(err);
      }
    });
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
