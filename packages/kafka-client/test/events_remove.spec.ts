import { forEach } from 'remeda';
import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
import { expect, it, describe, beforeAll, afterAll } from 'vitest';
import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/test/test';

registerProtoMeta(protoMetadata);

const kafkaConfig = {
  events: {
    kafkaTest: {
      provider: 'kafka',
      groupId: 'restore-chassis-test-server',
      kafka: {
        clientId: 'restore-chassis-test-server',
        brokers: [
          'localhost:29092'
        ],
      },
      testEvent: {
        messageObject: 'test.TestEvent'
      }
    }
  },
};

const loggerConfig: any = {
  logger: {
    console: {
      handleExceptions: false,
      level: 'debug',
      colorize: true,
      prettyPrint: true
    }
  }
};
const logger = createLogger(loggerConfig.logger);

/* global describe it before after */

describe('events', () => {
  const providers = ['kafkaTest'];
  forEach(providers, (providerName: string) => {
    describe(`testing config ${providerName}`, () => {
      let events: Events;
      const topicName = 'com.example.test';
      let topic: Topic;
      const eventName = 'testEvent';

      beforeAll(async function () {
        const kafkaConfigEvents = kafkaConfig.events[providerName];
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();
        // Subscribe to topic
        topic = await (events.topic(topicName));
      }, 10000);
      afterAll(async function () {
        await events.stop();
      }, 10000);
      describe('removing listener', () => {
        it('should allow removing the subscribed listener from topic',
          async () => {
            const listener = () => {
            };
            await topic.on(eventName, listener);
            await topic.on(eventName, () => {
            });
            await topic.removeListener(eventName, listener);
            const count: number = await topic.listenerCount(eventName);
            logger.info('Count of listeners after removing :', count);
            expect(count).to.equal(1);
          });
        it('should allow removing all the subscribed listeners from topic', async function() {
          await topic.removeAllListeners(eventName);
          const count: number = await topic.listenerCount(eventName);
          logger.info('Count of listeners after removing :', count);
          expect(count).to.equal(0);
        }, 20000);
      });
    });
  });
});
