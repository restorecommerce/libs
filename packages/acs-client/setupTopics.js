
const { Events } = require('@restorecommerce/kafka-client');
const { createLogger } = require('@restorecommerce/logger');
const { createServiceConfig } = require('@restorecommerce/service-config');

const cfg = createServiceConfig(process.cwd());
const logger = createLogger(cfg.get('logger'));

/*
* This script is used to create kafka topics before running the tests.
*/
async function createTopics() {
  const events = new Events(cfg.get('events:kafka'), logger);
  await events.start();

  process.argv.forEach((value, index, array) => {
    if (index >= 2) {
      events.topic(value);
      logger.info('Created topic', value, ' successfully');
    }
  });

  // Give a delay of 3 seconds and exit the process
  // this delay is for the creation of topic via zookeeper
  setTimeout(() => {
    logger.info('Exiting after topic creation');
    process.exit();
  }, 3000);
}

createTopics().catch((err) => {
  logger.error(err);
});