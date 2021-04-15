import * as mocha from 'mocha';
import * as should from 'should';
import * as _ from 'lodash';
import * as sleep from 'sleep';
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
      connectTimeout: 1000,
      testEvent: {
        protos: ['test/test.proto'],
        protoRoot: 'protos/',
        messageObject: 'test.TestEvent'
      }
    },
    localTest: {
      provider: 'local',
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
  describe('without a provider', () => {
    const topicName = 'test';
    describe('awaiting subscribe', () => {
      it('should throw an error', async function checkGetTopic(): Promise<void> {
        try {
          const events: Events = new Events();
          await events.topic(topicName);
        }
        catch (err) {
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
      const testMessage = { value: 'testValue', count: 1 };

      before(async function start(): Promise<void> {
        this.timeout(10000);
        const kafkaConfigEvents = kafkaConfig.events[providerName];
        events = new Events(kafkaConfig.events[providerName], logger);
        await events.start();
      });
      after(async function stop(): Promise<void> {
        await events.stop();
        events = null;
      });
      describe('creating a topic', () => {
        it('should return a topic', async function checkGetTopic(): Promise<void> {
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
        it('should allow listening to events', async function listenToEvents(): Promise<void> {
          topic = await (events.topic(topicName));
          const listener = () => {
            // void listener
          };
          const count: number = await topic.listenerCount(eventName);
          should.exist(count);
          await topic.on(eventName, listener);
          sleep.sleep(2);
          const countAfter = await topic.listenerCount(eventName);
          countAfter.should.equal(count + 1);
        });
        it('should allow emitting and receiving a message',
          async function sendEvents(): Promise<void> {
            topic = await (events.topic(topicName));
            this.timeout(20000);
            let receivedMsg;
            const listener = (message, context, config, eventName) => {
              receivedMsg = message;
              testMessage.value.should.equal(message.value);
              testMessage.count.should.equal(message.count);
            };
            await topic.on(eventName, listener);
            sleep.sleep(2);
            await topic.emit(eventName, testMessage);
          });
      });
    });
  });
});
