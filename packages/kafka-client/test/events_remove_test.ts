import * as _ from 'lodash';
import { Events, Topic } from '../lib/index';
import { createLogger } from '@restorecommerce/logger';

const kafkaConfig = {
  events: {
    kafkaTest: {
      provider: 'kafka',
      groupId: 'restore-chassis-test-server',
      clientId: 'restore-chassis-test-server',
      kafkaHost: 'localhost:29092',
      autoConnect: true,
      timeout: 1000,
      testEvent: {
        protos: ['test/test.proto'],
        protoRoot: 'protos/',
        messageObject: 'test.TestEvent'
      }
    }
  },
};

const loggerConfig: any = {
  logger: {
    console: {
      handleExceptions: false,
      level: 'error',
      colorize: true,
      prettyPrint: true
    }
  }
};
const logger = createLogger(loggerConfig.logger);

/* global describe it before after */

describe('events', () => {
  const providers = ['kafkaTest'];
  _.forEach(providers, (providerName: string) => {
    describe(`testing config ${providerName}`, () => {
      let events: Events;
      const topicName = 'com.example.test';
      let topic: Topic;
      let listener: any;
      const eventName = 'testEvent';

      before(async function start(): Promise<void> {
        this.timeout(10000);
        const kafkaConfigEvents = kafkaConfig.events[providerName];
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();
        // Subscribe to topic
        topic = await (events.topic(topicName));
        listener = () => {
          // empty listener
        };
        await topic.on(eventName, listener);
      });
      after(async function stop(): Promise<void> {
        await events.stop();
      });
      describe('removing listener', () => {
        it('should allow removing the subscribed listener from topic',
          async function removeAllListeners(): Promise<void> {
            await topic.removeListener(eventName, listener);
            const count: number = await topic.listenerCount(eventName);
            logger.info('Count of listeners after removing :', count);
          });
        it('should allow removing all the subscribed listeners from topic',
          async function removeAllListeners(): Promise<void> {
            await topic.removeAllListeners(eventName);
            const count: number = await topic.listenerCount(eventName);
            logger.info('Count of listeners after removing :', count);
          });
      });
    });
  });
});
