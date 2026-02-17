import { expect, it, describe, beforeAll, afterAll } from 'vitest';
import {forEach} from 'remeda';
import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/test/test';

registerProtoMeta(protoMetadata);

const providerConfig = {
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
    },
    localTest: {
      provider: 'local',
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

describe('EventProviders:', () => {
  describe('without provider config:', () => {
    const topicName = 'test';
    it('should throw an error', async () => {
      try {
        const events: Events = new Events();
        await events.topic(topicName);
      } catch (err) {
        expect(err).not.toBe(undefined);
        expect(err.message).to.equal('missing argument config');
      }
    });
  });

  const providers = ['localTest', 'kafkaTest'];
  forEach(providers, (providerName: string) => {
    describe(`with provider config ${providerName}:`, () => {
      let events: Events;
      const topicName = 'com.example.test';
      let topic: Topic;
      const eventName = 'testEvent';
      const testMessage = {value: 'testValue', count: 1};

      beforeAll(async function () {
        events = new Events(providerConfig.events[providerName], logger);
        await events.start();
      }, 10000);

      afterAll(async function () {
        await events.stop();
      }, 10000);

      describe('creating topics', () => {
        it('should return a topic', async () => {
          topic = await (events.topic(topicName));
          expect(topic).not.toBe(undefined);
          expect(topic.on).not.toBe(undefined);
          expect(topic.emit).not.toBe(undefined);
          expect(topic.listenerCount).not.toBe(undefined);
          expect(topic.hasListeners).not.toBe(undefined);
          expect(topic.removeListener).not.toBe(undefined);
          expect(topic.removeAllListeners).not.toBe(undefined);
        });

        const burst = 20;
        it(`should manage a burst of ${burst} subscribed topics at a time`, async () => {
          for (let i = 0; i < burst; ++i) {
            await events.topic(topicName+i).then(
              topic => topic.on(eventName, () => {})
            );
          }
        });
      });

      describe('subscribing', function startKafka(): void {
        it('should allow listening to events', async () => {
          topic = await events.topic(topicName);

          const listener = async (...args: any[]) => {};
          const count: number = await topic.listenerCount(eventName);
          expect(count).not.toBe(undefined);
          await topic.on(eventName, listener);

          const countAfter = await topic.listenerCount(eventName);
          expect(countAfter).to.equal(count + 1);
        });

        it('should allow emitting and receiving a message', async function () {
          topic = await (events.topic(topicName));

          let returnedMessage: any;
          const listener = async (message: any, ...args: any[]) => returnedMessage = message;
          await topic.on(eventName, listener);

          await topic.emit(eventName, testMessage);

          while (returnedMessage === undefined) {
            await new Promise((r) => setTimeout(r, 10));
          }

          expect(returnedMessage.value).to.equal(testMessage.value);
          expect(returnedMessage.count).to.equal(testMessage.count);
        }, 20000);
      }, 20000);

      describe('removing listener', () => {
        it('should allow removing all the subscribed listeners from topic', async function() {
          await topic.removeAllListeners(eventName);
          const count: number = await topic.listenerCount(eventName);
          logger.info('Count of listeners after removing :', count);
          expect(count).to.equal(0);
        }, 20000);

        it(
          'should allow removing the subscribed listener from topic',
          async () => {
            const listener = async () => {};
            await topic.on(eventName, listener);
            await topic.on(eventName, async () => {});
            await topic.removeListener(eventName, listener);
            const count: number = await topic.listenerCount(eventName);
            logger.info('Count of listeners after removing :', count);
            expect(count).to.equal(1);
            await topic.removeAllListeners(eventName);
          }
        );

        it('should delete all topics', async function() {
          await events.deleteAll();
        });
      });
    });
  });
});
