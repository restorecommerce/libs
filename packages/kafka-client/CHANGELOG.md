# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.18](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.17...@restorecommerce/kafka-client@0.2.18) (2021-08-10)


### Bug Fixes

* **acs-client, gql-bot, kafka-client, koa-health-check:** eslintrc added root to uniquely identify eslint plugin package to avoid error building facade-srv ([c2e446b](https://github.com/restorecommerce/kafka-client/commit/c2e446bf0f09d7fa4f000da3bb09fd612cb9526c))





## [0.2.17](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.16...@restorecommerce/kafka-client@0.2.17) (2021-08-03)


### Bug Fixes

* up pkg locks ([8ed92d6](https://github.com/restorecommerce/kafka-client/commit/8ed92d613b9a095e4b5066056ac566e5dbcf1472))
* updated githead ([2904d30](https://github.com/restorecommerce/kafka-client/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))





## [0.2.16](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.15...@restorecommerce/kafka-client@0.2.16) (2021-08-03)


### Bug Fixes

* **koa-health-check:** added missing .eslintrc.js ([45af632](https://github.com/restorecommerce/kafka-client/commit/45af632955d2dd448e7a27f4e8c4b971412cd004))





## [0.2.15](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.14...@restorecommerce/kafka-client@0.2.15) (2021-07-29)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.14](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.13...@restorecommerce/kafka-client@0.2.14) (2021-07-29)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.13](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.12...@restorecommerce/kafka-client@0.2.13) (2021-07-25)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.12](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.11...@restorecommerce/kafka-client@0.2.12) (2021-07-15)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.11](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.10...@restorecommerce/kafka-client@0.2.11) (2021-07-01)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.10](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.9...@restorecommerce/kafka-client@0.2.10) (2021-06-26)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.9](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.8...@restorecommerce/kafka-client@0.2.9) (2021-06-02)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.8](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.7...@restorecommerce/kafka-client@0.2.8) (2021-06-02)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.7](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.6...@restorecommerce/kafka-client@0.2.7) (2021-05-26)

**Note:** Version bump only for package @restorecommerce/kafka-client





## [0.2.6](https://github.com/restorecommerce/kafka-client/compare/@restorecommerce/kafka-client@0.2.5...@restorecommerce/kafka-client@0.2.6) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/kafka-client





## 0.2.5 (2021-05-24)


### Bug Fixes

* **kafka-client:** add winston as a dependency ([9a82cb7](https://github.com/restorecommerce/kafka-client/commit/9a82cb76b19274e39579db824546b839e539eee5))
* **kafka-client:** cast typing for function ([a9b3ddd](https://github.com/restorecommerce/kafka-client/commit/a9b3dddb2cb23e8a61fe800b2469ad16483288be))





### 0.2.4 (May 20th, 2021)

* removed debug logger for kafkajs

### 0.2.3 (May 20th, 2021)

* fix issue for topic subscribers kicked out (since we were using same groupID), renamed consumer groupID to `groupID_topic` so that its unique for each topic

### 0.2.2 (May 18th, 2021)

* removed log level

### 0.2.1 (May 5th, 2021)

* connect consumer before running
* seek to provided offset after consumer is ran
* add prefix to logged messages

### 0.2.0 (April 23rd, 2021)

#### Contains breaking changes!

* rewrite to use kafkajs library
* changed config format
* `topic()` function now returns a promise
* updated dependencies

### 0.1.13 (November 18th, 2020)

- updated dependencies

### 0.1.12 (August 19th, 2020)

- updated logger

### 0.1.11 (August 17th, 2020)

- fix to close opened kafka connections on retry

### 0.1.10 (July 8th, 2020)

- updated dependencies

### 0.1.9 (April 26th, 2020)

- fix to handle error when decoding protobuf message

### 0.1.8 (January 29th, 2020)

- migration from tslint to eslint and restructured src files 

### 0.1.7 (November 18th, 2019)

- logging enhancements

### 0.1.6 (November 18th, 2019)

- updated dependencies and enhanced logging

### 0.1.5 (October 2st, 2019)

- updated "@restorecommerce/logger": "^0.1.11"

### 0.1.4 (October 1st, 2019)

- added buffer fields decoding and option for logging those fields

### 0.1.3 (September 26th, 2019)

- added retry mechanism for start up if `kafka` is down

### 0.1.2 (July 23rd, 2019)

- prevent lib folder being published to npm

### 0.1.1 (July 23rd, 2019)

- prevent .git folder being published to npm
- updated dependencies
