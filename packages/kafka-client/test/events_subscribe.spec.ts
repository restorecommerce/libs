import { expect, it, describe, beforeAll, afterAll } from 'vitest';
import * as _ from 'lodash';
import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
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

describe('events', () => {
  describe('without a provider', () => {
    const topicName = 'test';
    describe('awaiting subscribe', () => {
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
  });
  const providers = ['kafkaTest', 'localTest'];
  _.forEach(providers, (providerName: string) => {
    describe(`testing config ${providerName}`, () => {
      let events: Events;
      const topicName = 'com.example.test';
      let topic: Topic;
      const eventName = 'testEvent';
      const testMessage = {value: 'testValue', count: 1};

      beforeAll(async function () {
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();

        await new Promise(resolve => setTimeout(resolve, 5000));
      }, 10000);

      afterAll(async function () {
        await events.stop();
      }, 10000);

      describe('creating a topic', () => {
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
      });

      describe('subscribing', function startKafka(): void {
        it('should allow listening to events', async () => {
          topic = await (events.topic(topicName));

          const listener = () => {
            // void listener
          };
          const count: number = await topic.listenerCount(eventName);
          expect(count).not.toBe(undefined);
          await topic.on(eventName, listener);

          const countAfter = await topic.listenerCount(eventName);
          expect(countAfter).to.equal(count + 1);
        });
        it('should allow emitting and receiving a message', async function () {
          topic = await (events.topic(topicName));

          let returnedMessage;
          const listener = (message, context, config, eventName) => returnedMessage = message;
          await topic.on(eventName, listener);

          await topic.emit(eventName, testMessage);

          while (returnedMessage == undefined) {
            await new Promise((r) => setTimeout(r, 10));
          }

          expect(returnedMessage.value).to.equal(testMessage.value);
          expect(returnedMessage.count).to.equal(testMessage.count);
        }, 20000);
      }, 5000);
    });
  });
});
