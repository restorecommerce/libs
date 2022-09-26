import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
import * as should from 'should';
import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/test/test';

registerProtoMeta(protoMetadata);

const kafkaConfig = {
  events: {
    kafka: {
      provider: 'kafka',
      groupId: 'test-group-id',
      kafka: {
        clientId: 'test-client-id',
        brokers: [
          'localhost:29092'
        ],
      },
      exampleEvent: {
        messageObject: 'test.TestEvent'
      }
    }
  }
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

/*
 * Note: To run this test, a running kafka instance is required.
 */

describe('Kafka provider test', () => {
  const logger = createLogger(loggerConfig.logger);
  const client: Events = new Events(kafkaConfig.events.kafka, logger);
  const topicName = 'com.example.test';
  const eventName = 'exampleEvent';
  before(async () => {
    // start the client
    await client.start();
  });
  after(async function() {
    // stop the client
    this.timeout(10000);
    await client.stop();
  });
  describe('topic.wait', function testWait(): void {
    this.timeout(60000);
    it('should wait until the event message is processed',
      async () => {
        // create the proto buffer message
        const testMessage = { value: 'value', count: 1 };
        // create topic object
        const topic: Topic = await client.topic(topicName);

        let exitPromise: Promise<void>;

        // subscribe to topic for example-event with listener as call back.
        await topic.on(eventName, async (message, context) => {
          exitPromise = new Promise<void>(async (resolve) => {
            should.exist(message);
            testMessage.value.should.equal(message.value);
            testMessage.count.should.equal(message.count);
            logger.info('Received message :', message);

            await topic.removeAllListeners(eventName);

            resolve();
          });
        });
        // get the current offset
        const offset = await topic.$offset(-1);
        // emit the message to Kafka (message is encoded and sent to Kafka)
        await topic.emit(eventName, testMessage);
        // suspends the calling function until the offset is committed.
        await topic.$wait(offset);

        await exitPromise;
      });

    it('should process messages one after the other in same order',
      async () => {
        // create topic object
        const topic: Topic = await client.topic(topicName);
        // order of count should be preserved
        const expectedCountArr = [1, 2, 3, 4, 5];
        let countArr = [];
        // subscribe to topic for example-event with listener as call back.
        await topic.on(eventName, (message, context, config, eventName) => {
          should.exist(message);
          countArr.push(message.count);
        }, { queue: true });

        // get the current offset
        const offset = await topic.$offset(-1);
        // emit the message to Kafka (message is encoded and sent to Kafka)
        await topic.emit(eventName, { value: 'value1', count: 1 });
        await topic.emit(eventName, { value: 'value2', count: 2 });
        await topic.emit(eventName, { value: 'value3', count: 3 });
        await topic.emit(eventName, { value: 'value4', count: 4 });
        await topic.emit(eventName, { value: 'value5', count: 5 });
        // suspends the calling function until the offset is committed.
        await topic.$wait(offset + 4);
        should.exist(countArr);
        countArr.should.deepEqual(expectedCountArr);
      });
  });
});
