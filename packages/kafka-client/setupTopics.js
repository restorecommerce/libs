const { Events } = require('./lib/index');
const { createLogger } = require('@restorecommerce/logger');
const kafkaConfig = {
  "events": {
    "kafka": {
      "provider": "kafka",
      "groupId": "test-group-id",
      "kafka": {
        "clientId": "test-client-id",
        "brokers": [
          "localhost:29092"
        ]
      },
      "example-event": {
        "protos": ["test/test.proto"],
        "protoRoot": "protos/",
        "messageObject": "test.TestEvent"
      }
    }
  }
}

const loggerConfig = {
  "logger": {
    "console": {
      "handleExceptions": false,
      "level": "error",
      "colorize": true,
      "prettyPrint": true
    }
  }
}

/*
* This script is used to create kafka topics before running the tests.
*/
async function createTopics() {
  const logger = createLogger(loggerConfig.logger);
  const events = new Events(kafkaConfig.events.kafka, logger);
  await events.start();

  process.argv.forEach((value, index, array) => {
    if (index >= 2) {
      events.topic(value);
    }
  });

  // Give a delay of 3 seconds and exit the process
  // this delay is for the creation of topic via zookeeper
  setTimeout(() => {
    console.log('Exiting after topic creation');
    process.exit();
  }, 3000);
}

createTopics().catch((err) => {
  console.log('error creating topics: ', err);
});
