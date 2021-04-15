import * as _ from 'lodash';
import * as protobuf from 'protobufjs';
import { Logger } from 'winston';

/**
 * Topic handles listening and sending events to a specific topic.
 */
export class Topic {

  event: any;
  name: string;
  logger: Logger;
  config: any;

  /**
   * @param {string} topicName
   * @param {Logger} logger
   */
  constructor(topicName: string, logger: Logger, config: any) {
    this.event = {};
    this.name = topicName;
    this.logger = logger;
    this.config = config;
  }

  /**
   * Listen to eventName events with listener.
   *
   * @param {string} eventName Identification name of the event.
   * @param {function} listener Event listener.
   */
  async on(eventName: string, listener: any): Promise<any> {
    if (_.isNil(this.event[eventName])) {
      this.event[eventName] = {
        listeners: [],
        messages: [],
      };
    }
    this.event[eventName].listeners.push(listener);
  }

  /**
   * Encode the given message object using protobufjs (pbjs).
   *
   * @param  {string} eventName
   * @param  {Object} msg
   * @param  {string} protoFilePath
   * @param  {string} messageObject
   * @return {Object} buffer
   */
  async encodeObject(eventName: string, msg: Object, protoFilePath: string,
    messageObject: string, protoRoot: string): Promise<any> {
    let root: any = new protobuf.Root();

    root.resolvePath = (origin, target) => {
      // ignore the same file
      if (target == protoFilePath) {
        return protoFilePath;
      }
      // Resolved target path for the import files
      return protoRoot + target;
    };
    const logger = this.logger;
    root = await this.resolveRoot(root, protoFilePath);
    const MessageClass = root.lookup(messageObject);
    const convertedMessage = MessageClass.create(msg);
    const buffer = MessageClass.encode(convertedMessage).finish();
    return msg;
  }

  /**
* Resolve the protobuf root object using the proto file path.
* @param root
* @param protoFilePath
* @return protobuf.Root object
*/
  async resolveRoot(root: protobuf.Root, protoFilePath: string): Promise<protobuf.Root> {
    const that = this;
    return new Promise<protobuf.Root>((resolve, reject) => {
      root.load(protoFilePath, { keepCase: true }, (err, root) => {
        if (err) {
          that.logger.error('Error loading protobuf definition', err);
          reject(err);
        }
        resolve(root);
      });
    });
  }

  /**
   * Send message to listeners listening to eventName events.
   *
   * @param {string} eventName Identification name of the event.
   * @param {object} message Event message which is send to all listeners.
   */
  async emit(eventName: string, message: any): Promise<any> {
    let e = this.event[eventName];
    if (_.isNil(e)) {
      e = this.event[eventName] = {
        listeners: [],
        messages: [],
      };
    }
    const currentOffset = e.messages.length;
    let messages = message;
    let bufferObj;
    if (!_.isArray(message)) {
      messages = [message];
    }
    e.message = _.concat(e.message, message);
    const listeners = e.listeners;
    const logger = this.logger;
    const protoFilePath = this.config[eventName].protoRoot + this.config[eventName].protos;
    const messageObject = this.config[eventName].messageObject;
    for (let i = 0; i < listeners.length; i += 1) {
      const listener = listeners[i];
      for (let j = 0; j < messages.length; j += 1) {
        const context = {
          offset: currentOffset + j,
          topic: this.name,
          logger,
        };

        const msg = messages[j];
        bufferObj = await this.encodeObject(eventName, msg,
          protoFilePath, messageObject, this.config[eventName].protoRoot);

        await listener(bufferObj, context, this.config, eventName);
      }
    }
  }

  /**
   * Number of listener which are listening to eventName event.
   * @param {string} eventName Identification name of the event.
   * @return {number} Number of listeners.
   */
  listenerCount(eventName: string): number {
    const e = this.event[eventName];
    if (_.isNil(e)) {
      return 0;
    }
    return e.listeners.length;
  }

  /**
   * Is a listener listening to eventName event.
   * @param {string} eventName Identification name of the event.
   * @return {boolean} True if any listener is listening, otherwise false.
   */
  hasListeners(eventName: string): boolean {
    const e = this.event[eventName];
    if (_.isNil(e)) {
      return false;
    }
    return e.listeners > 0;
  }

  /**
   * Remove listener from eventName event.
   * @param {string} eventName Identification name of the event.
   * @param {function} listener Listener function.
   */
  async removeListener(eventName: string, listener: any): Promise<any> {
    const e = this.event[eventName];
    if (_.isNil(e)) {
      return;
    }
    const index = e.listeners.indexOf(listener);
    if (!index) {
      e.listeners.splice(index, 1);
    }
  }

  /**
   * Remove all listener listening to eventName event.
   * @param {string} eventName Identification name of the event.
   */
  async removeAllListeners(eventName: string): Promise<any> {
    _.unset(this.event, eventName);
  }
}

/**
 * Local is a events provider.
 * It uses in-process communication
 * and does not support sending events to other processes or hosts.
 */
export class Local {

  config: any;
  logger: Logger;
  topics: any;

  constructor(config: any, logger: Logger) {
    this.topics = {};
    this.logger = logger;
    this.config = config;
  }

  /**
   * Return topicName topic.
   * @param {string} topicName The identification name of the topic.
   * @return {Topic}
   */
  async topic(topicName: string, config: any): Promise<any> {
    if (this.topics[topicName]) {
      return this.topics[topicName];
    }
    this.topics[topicName] = new Topic(topicName, this.logger, config);
    return this.topics[topicName];
  }

  /**
   * Initialize the event provider.
   */
  async start(): Promise<any> {
    if (_.isNil(this.topics)) {
      this.topics = {};
    }
  }

  /**
   * Stop the event provider and all event communication.
   */
  async stop(): Promise<any> {
    _.forIn(this.topics, async (topic: any, key: any):
    Promise<any> => {
      await topic.removeAllListeners();
    });
  }
}

/**
 * Name of the event provider.
 */
export const Name = 'local';
