import * as should from 'should';
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
          should.exist(err);
          err.should.be.Error();
          err.message.should.equal('missing argument config');
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

      before(async function () {
        this.timeout(10000);
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();

        await new Promise(resolve => setTimeout(resolve, 5000));
      });

      after(async function () {
        this.timeout(10000);
        await events.stop();
      });

      describe('creating a topic', () => {
        it('should return a topic', async () => {
          topic = await (events.topic(topicName));
          should.exist(topic);
          should.exist(topic.on);
          should.exist(topic.emit);
          should.exist(topic.listenerCount);
          should.exist(topic.hasListeners);
          should.exist(topic.removeListener);
          should.exist(topic.removeAllListeners);
        });
      });

      describe('subscribing', function startKafka(): void {
        this.timeout(5000);
        it('should allow listening to events', async () => {
          topic = await (events.topic(topicName));

          const listener = () => {
            // void listener
          };
          const count: number = await topic.listenerCount(eventName);
          should.exist(count);
          await topic.on(eventName, listener);

          const countAfter = await topic.listenerCount(eventName);
          countAfter.should.equal(count + 1);
        });
        it('should allow emitting and receiving a message', async function () {
          this.timeout(20000);
          topic = await (events.topic(topicName));

          let returnedMessage;
          const listener = (message, context, config, eventName) => returnedMessage = message;
          await topic.on(eventName, listener);

          await topic.emit(eventName, testMessage);

          while (returnedMessage == undefined) {
            await new Promise((r) => setTimeout(r, 10));
          }

          returnedMessage.value.should.equal(testMessage.value);
          returnedMessage.count.should.equal(testMessage.count);
        });
      });
    });
  });
});
