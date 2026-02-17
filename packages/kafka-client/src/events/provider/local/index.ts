import { isNullish, isArray } from 'remeda';
import { Logger } from '@restorecommerce/logger';
import { EventProvider, Topic } from '../../interface.js';

interface EventData {
  listeners: ((bufferObj: any, context: any, config: any, eventName: string) => Promise<void>)[];
  messages: any[];
}

/**
 * Topic handles listening and sending events to a specific topic.
 */
export class LocalTopic implements Topic {
  event: Record<string, EventData>;
  name: string;
  logger: Logger;
  config: any;
  subscribed: any;
  emitter: any;
  provider: any;

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
  $reset(eventName: string, offset: bigint): Promise<void> {
    throw new Error('Method not implemented.');
  }
  $resetConsumer(eventNames: string[], offset: bigint): Promise<void> {
    throw new Error('Method not implemented.');
  }
  commitCurrentOffsets(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  $wait(arg0: bigint): Promise<void> {
    throw new Error('Method not implemented.');
  }
  $offset(arg0: bigint): Promise<bigint> {
    throw new Error('Method not implemented.');
  }

  /**
   * Listen to eventName events with listener.
   *
   * @param {string} eventName Identification name of the event.
   * @param {function} listener Event listener.
   */
  async on(eventName: string, listener: any): Promise<any> {
    if (isNullish(this.event[eventName])) {
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
   * @param  {Object} msg
   * @param  {string} messageObject
   * @return {Object} buffer
   */
  async encodeObject(msg: object, messageObject: string): Promise<any> {
    return msg;
  }

  /**
   * Send message to listeners listening to eventName events.
   *
   * @param {string} eventName Identification name of the event.
   * @param {object} message Event message which is send to all listeners.
   */
  async emit(eventName: string, message: any | any[]): Promise<void> {
    const e = this.event[eventName];
    if (isNullish(e)) {
      return;
    }
    e.messages ??= [];
    const currentOffset = e.messages.length;
    const messages = isArray(message) ? message : [message];
    e.messages.push(...messages);
    const listeners = e.listeners ?? [];
    const logger = this.logger;
    const messageObject = this.config[eventName].messageObject;
    for (const listener of listeners) {
      for (let j = 0; j < messages.length; j += 1) {
        const context = {
          offset: currentOffset + j,
          topic: this.name,
          logger,
        };

        const msg = messages[j];
        const bufferObj = await this.encodeObject(msg, messageObject);

        await listener(bufferObj, context, this.config, eventName);
      }
    }
  }

  /**
   * Number of listener which are listening to eventName event.
   * @param {string} eventName Identification name of the event.
   * @return {number} Number of listeners.
   */
  async listenerCount(eventName: string): Promise<number> {
    const e = this.event[eventName];
    if (isNullish(e)) {
      return 0;
    }
    return e.listeners.length;
  }

  /**
   * Is a listener listening to eventName event.
   * @param {string} eventName Identification name of the event.
   * @return {boolean} True if any listener is listening, otherwise false.
   */
  async hasListeners(eventName: string): Promise<boolean> {
    const e = this.event[eventName];
    if (isNullish(e)) {
      return false;
    }
    return e.listeners.length > 0;
  }

  /**
   * Remove listener from eventName event.
   * @param {string} eventName Identification name of the event.
   * @param {function} listener Listener function.
   */
  async removeListener(eventName: string, listener: any): Promise<any> {
    const e = this.event[eventName];
    if (isNullish(e)) {
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
  async removeAllListeners(eventName: string) {
    delete this.event[eventName];
  }

  /**
   * Stop everything
   */
  async stop() {
    this.event = {};
  }
}

/**
 * Local is a events provider.
 * It uses in-process communication
 * and does not support sending events to other processes or hosts.
 */
export class Local implements EventProvider {
  config: any;
  logger: Logger;
  topics: Record<string, Topic>;
  admin: any;

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
    this.topics[topicName] = new LocalTopic(topicName, this.logger, config);
    return this.topics[topicName];
  }

  /**
   * Initialize the event provider.
   */
  async start(): Promise<void> {
    if (isNullish(this.topics)) {
      this.topics = {};
    }
  }

  /**
   * Stop the event provider and all event communication.
   */
  async stop(): Promise<void> {
    await Promise.allSettled(
      Object.values(this.topics).map((topic) => {
        topic.stop();
      })
    )
  };

  async delete(topics: string[]): Promise<void> {
    for (const topic of topics) {
      delete this.topics[topic];
    }
  }

  async deleteAll(): Promise<void> {
    this.topics = {};
  }
}

/**
 * Name of the event provider.
 */
export const Name = 'local';
