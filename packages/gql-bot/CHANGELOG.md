# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.2.0...@restorecommerce/gql-bot@0.2.1) (2022-06-20)


### Bug Fixes

* **gql-bot:** add option to ignore ssl errors ([b82d302](https://github.com/restorecommerce/libs/commit/b82d3020318ec5495ad1c6143cd5c80cb1657f80))





# [0.2.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.18...@restorecommerce/gql-bot@0.2.0) (2022-06-20)


### Features

* **gql-bot:** correctly handle errors, more readable output ([b773d2b](https://github.com/restorecommerce/libs/commit/b773d2b94d41233f9660a96de5cac4e85f305e66))





## [0.1.18](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.17...@restorecommerce/gql-bot@0.1.18) (2022-06-10)


### Bug Fixes

* fix merge issues ([cc37d83](https://github.com/restorecommerce/libs/commit/cc37d8356df3b494af8c6af9e39304a49073301c))





## [0.1.17](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.16...@restorecommerce/gql-bot@0.1.17) (2022-05-16)

**Note:** Version bump only for package @restorecommerce/gql-bot





## [0.1.16](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.15...@restorecommerce/gql-bot@0.1.16) (2022-02-14)

**Note:** Version bump only for package @restorecommerce/gql-bot





## [0.1.15](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.14...@restorecommerce/gql-bot@0.1.15) (2021-08-23)


### Bug Fixes

* **version:** up version to be in sync in package-lock ([b8f22c1](https://github.com/restorecommerce/libs/commit/b8f22c1268ee2af4beff7d88bda30f197896e3d2))





## [0.1.14](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.13...@restorecommerce/gql-bot@0.1.14) (2021-08-10)


### Bug Fixes

* **acs-client, gql-bot, kafka-client, koa-health-check:** eslintrc added root to uniquely identify eslint plugin package to avoid error building facade-srv ([c2e446b](https://github.com/restorecommerce/libs/commit/c2e446bf0f09d7fa4f000da3bb09fd612cb9526c))





## [0.1.13](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.12...@restorecommerce/gql-bot@0.1.13) (2021-08-03)


### Bug Fixes

* up pkg locks ([8ed92d6](https://github.com/restorecommerce/libs/commit/8ed92d613b9a095e4b5066056ac566e5dbcf1472))
* updated githead ([2904d30](https://github.com/restorecommerce/libs/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))





## [0.1.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.11...@restorecommerce/gql-bot@0.1.12) (2021-08-03)


### Bug Fixes

* **koa-health-check:** added missing .eslintrc.js ([45af632](https://github.com/restorecommerce/libs/commit/45af632955d2dd448e7a27f4e8c4b971412cd004))





## [0.1.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/gql-bot@0.1.10...@restorecommerce/gql-bot@0.1.11) (2021-06-26)

**Note:** Version bump only for package @restorecommerce/gql-bot





## [0.1.10](https://github.com/restorecommerce/gql-bot/compare/@restorecommerce/gql-bot@0.1.9...@restorecommerce/gql-bot@0.1.10) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/gql-bot





## 0.1.9 (2021-05-24)

**Note:** Version bump only for package @restorecommerce/gql-bot





### 0.1.8 (April 26th, 2021)

- Add error handling for case when no data is imported because of wrong file format.

### 0.1.7 (April 23rd, 2021)

- Add implementation for optional batching of resources which enables
importing of large amount of data stored in single file (.yaml format only).
- Remove support for storing resources (and mutation) in single .json file  

### 0.1.6 (January 14th, 2021)

- Support query variables at root level

### 0.1.5 (January 13th, 2021)

- Support mutation outside of data

### 0.1.4 (April 14th, 2020)

- Upgrade deps and migrate to ESLint
- Migrate from tslint to eslint

### 0.1.3 (July 23rd, 2019)

- prevent .git folder being published to npm
