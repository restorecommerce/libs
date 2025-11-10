import { Events, Topic } from '@restorecommerce/kafka-client';
import { createClient, RedisClientType } from 'redis';
import {
  type ServiceConfig
} from '@restorecommerce/service-config';
import {
  type Logger
} from '@restorecommerce/logger';

/**
 * Stores the offsets of the provided topics to redis periodically
 */
export class OffsetStore {
  // protected readonly topics: Record<string, Topic> = {};
  protected readonly timerID: NodeJS.Timeout[] = [];
  protected readonly prefix: string;

  constructor(
    protected readonly kafkaEvents: Events,
    protected readonly config: ServiceConfig,
    protected readonly logger?: Logger,
    protected readonly redisClient?: RedisClientType,
  ) {
    if (!kafkaEvents) {
      logger?.error('No Kafka client was provided, offsets will not be stored to redis');
      return;
    }

    if (!this.config.get('events:kafka:topics')) {
      throw new Error('Kafka events configuration was not provided.');
    }

    this.prefix = this.config.get('events:kafka:kafka:clientId');
    const redisConfig = this.config.get('redis');
    if (!redisClient && redisConfig) {
      redisConfig.database = this.config.get('redis:db-indexes:db-offsetStore') ?? 0;
      this.redisClient = createClient(redisConfig);
      this.redisClient.on(
        'error',
        (err: Error) => logger?.error('Redis Client error in offsetstore', err)
      );
      this.redisClient.connect().then(
        () => logger?.info('Redis client connection successful for offsetstore')
      );
    }
    setTimeout(this.updateTopicOffsets.bind(this), 5000);
  }

  /**
  * updates the topic offset in redis periodically
  *
  */
  async updateTopicOffsets(): Promise<void> {
    // Iterate through the topics and updateOffsets periodically for each topic
    // events.topic(TopicName) - gives the topic object
    const kafkaCfg = this.config.get('events:kafka');
    const topicTypes = Object.keys(kafkaCfg.topics ?? {});
    for (let i = 0; i < topicTypes.length; i += 1) {
      const topicType = topicTypes[i];
      const topicName = kafkaCfg.topics[topicType].topic;

      this.kafkaEvents.topic(topicName).then(topic => {
        // this.topics[topicType] = topic;
        this.timerID[i] = setInterval(
          this.storeOffset.bind(this),
          this.config.get('redis:offsetStoreInterval') ?? 1000,
          topic,
          topicName
        ) as any;
      });
    }
  }

  /**
   * stores the offset to redis
   * @param  {object} topic Topic object
   * @param  {object} redisClient
   * @return {object}
   */
  async storeOffset(topic: Topic, topicName: string): Promise<void> {
    // get the latest offset here each time and store it.
    const offsetValue = await topic.$offset(BigInt(-1));
    const redisKey = `${this.prefix}:${topicName}`;
    this.redisClient.set(redisKey, offsetValue.toString(10));
  }

  /**
   * get the offset value for the topic from redis
   * @param  {string} topic Topic name
   * @return {object}
   */
  async getOffset(topicName: string): Promise<bigint> {
    const redisKey = `${this.prefix}:${topicName}`;
    const offsetValue = await this.redisClient.get(redisKey);
    this.logger?.info(
      'The offset value retreived from redis for topic is:',
      { topicName, offsetValue: Number(offsetValue) }
    );
    return BigInt(offsetValue || 0);
  }

  /**
   * stops the redis client
   * @param  {object} topic Topic object
   * @param  {object} redisClient
   * @return {object}
   */
  async stop(): Promise<void> {
    for (let i = 0; i < this.timerID.length; i += 1) {
      clearInterval(this.timerID[i]);
    }
    if (this.redisClient) {
      await this.redisClient.quit();
    }
  }
}
