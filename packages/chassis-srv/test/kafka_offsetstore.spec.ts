import * as should from 'should';
import { Events, Topic, registerProtoMeta } from '@restorecommerce/kafka-client';
import { createLogger } from '@restorecommerce/logger';
import { OffsetStore } from '../src/offsets/index.js';
import { createServiceConfig } from '@restorecommerce/service-config';
import {
  protoMetadata
} from '@restorecommerce/rc-grpc-clients/dist/generated/test/test.js';
import { it, describe, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

registerProtoMeta(protoMetadata);

/* global describe it before after */

describe('offsetStore', () => {
  let events: Events;
  const topicName = 'test';
  let topic: Topic;
  let offsetStore: OffsetStore;
  const eventName = 'testCreated';
  const testMessage = { value: 'testValue', count: 1 };

  const cfg = createServiceConfig(process.cwd() + '/test');
  const logger = createLogger(cfg.get('logger'));

  beforeEach(async function start() {
    events = new Events(cfg.get('events:kafka'), logger);
    await events.start();
  }, 10000);
  afterEach(async function stop() {
    await offsetStore.stop();
    await events.stop();
  }, 10000);

  it('should emit an event and verify the stored offset value from redis',
    async function testStoredOffsetValue() {
      offsetStore = new OffsetStore(events, cfg, logger);
      topic = await (events.topic(topicName));

      const listener = (message, context) => {
        testMessage.value.should.equal(message.value);
        testMessage.count.should.equal(message.count);
      };
      // get the current offsetValue for 'test' topic before emitting message
      const currentOffset = await topic.$offset(BigInt(-1));
      // emit message to kafka
      await topic.on(eventName, listener);
      await topic.emit(eventName, testMessage);
      const newOffset = await new Promise<bigint>((resolve, reject) => {
        setTimeout(async () => {
          const offsetValue = await offsetStore.getOffset(topicName);
          resolve(offsetValue);
        }, 8000);
      });
      should.exist(newOffset);
      BigInt(newOffset).should.equal(currentOffset + BigInt(1));
    }, 15000);
  it('should consume a previously emitted message from Kafka',
    async function testConsumeListener() {
      // emit testMessage to kafka
      topic = await events.topic(topicName);
      await topic.emit(eventName, testMessage);

      // start offsetTracker subscribing to previous offset value read
      // from redis and consume the above message
      offsetStore = new OffsetStore(events, cfg, logger);
      const listener = async (message, context) => {
        testMessage.value.should.equal(message.value);
        testMessage.count.should.equal(message.count);
      };

      // get the current offsetValue for 'test' topic before emitting message
      let startingOffset = await offsetStore.getOffset(topicName);
      await topic.on(eventName, listener, { startingOffset });

      // wait for 2sec so that message is consumed and
      // test is not ended immediately
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    }, 10000);
});
