import * as _ from 'lodash';
import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
import 'should';
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
  _.forEach(providers, (providerName: string) => {
    describe(`testing config ${providerName}`, () => {
      let events: Events;
      const topicName = 'com.example.test';
      let topic: Topic;
      const eventName = 'testEvent';

      before(async function () {
        this.timeout(10000);
        const kafkaConfigEvents = kafkaConfig.events[providerName];
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();
        // Subscribe to topic
        topic = await (events.topic(topicName));
      });
      after(async function () {
        this.timeout(10000);
        await events.stop();
      });
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
            count.should.equal(1);
          });
        it('should allow removing all the subscribed listeners from topic', async function() {
          this.timeout(20000);
          await topic.removeAllListeners(eventName);
          const count: number = await topic.listenerCount(eventName);
          logger.info('Count of listeners after removing :', count);
          count.should.equal(0);
        });
      });
    });
  });
});
