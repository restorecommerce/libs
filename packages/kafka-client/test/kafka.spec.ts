import { Events, registerProtoMeta, Topic } from '../src';
import { createLogger } from '@restorecommerce/logger';
import { protoMetadata } from '@restorecommerce/rc-grpc-clients/dist/generated/test/test';
import { expect, it, describe, beforeAll, afterAll } from 'vitest';

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
  let initialOffset: number;
  beforeAll(async () => {
    // start the client
    await client.start();
    initialOffset = await (await client.topic(topicName)).$offset(-1);
  });
  afterAll(async function() {
    // stop the client
    await client.stop();
  }, 10000);
  describe('topic.wait', function testWait(): void {
    it('should wait until the event message is processed',
      async () => {
        // create the proto buffer message
        const testMessage = { value: 'value', count: 1 };
        // create topic object
        const topic: Topic = await client.topic(topicName);

        await new Promise<void>((resolve) => {
          // subscribe to topic for example-event with listener as call back.
          topic.on(eventName, (message, context) => {
            expect(message).not.toBe(undefined);
            expect(testMessage.value).to.equal(message.value);
            expect(testMessage.count).to.equal(message.count);
            logger.info('Received message :', message);
            topic.removeAllListeners(eventName).then(resolve);
          }).then(
            // emit the message to Kafka (message is encoded and sent to Kafka)
            () => topic.emit(eventName, testMessage)
          );
        });
      }
    );

    it('should process messages one after the other in same order',
      async () => {
        // create topic object
        const topic: Topic = await client.topic(topicName);
        // order of count should be preserved
        const expectedCountArr = [1, 2, 3, 4, 5];
        const countArr = new Array<number>;
        // subscribe to topic for example-event with listener as call back.
        await topic.on(eventName, (message: any, context, config, eventName) => {
          console.log('received message:', message)
          expect(message).not.toBe(undefined);
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
        expect(countArr).not.toBe(undefined);
        expect(countArr.length).toBe(5);
        expect(countArr[4]).toBe(5);
      });
  }, 240000);

  describe('Manual Commit', () => {
    it('should manually commit offset after processing message', async () => {
      // Create topic object
      const topic: Topic = await client.topic(topicName);
      let offset: number;

      // Subscribe to topic for example-event with listener as callback.
      await topic.on(eventName, async (message, context) => {
        // Ensure that message is processed
        expect(message).not.toBe(undefined);
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Manually commit offset after processing the message
        await topic.commitCurrentOffsets();
      });

      // Get the current offset
      await topic.$offset(-1);

      // Emit the message to Kafka
      await topic.emit(eventName, { value: 'value', count: 1 });

      // Wait for processing to complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Get the latest offset after processing
      const finalOffset = await topic.$offset(-1);

      // Verify that offset has been manually committed and updated accordingly
      expect(finalOffset).be.above(initialOffset);
    }, 120000);
  });
});
