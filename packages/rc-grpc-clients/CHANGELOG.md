# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@3.0.0...@restorecommerce/rc-grpc-clients@3.0.1) (2023-05-29)


### Bug Fixes

* fix package lock and unit tests for acs-client ([754b3e3](https://github.com/restorecommerce/libs/commit/754b3e39d321fe860358427ad6fdd12b75863142))
* **protos:** pluralize rendering proto ([f1f2afa](https://github.com/restorecommerce/libs/commit/f1f2afaa47755be6ba34fafda157ee797d2cb9fb))
* **rc-grpc-clients:** removed unit.ts as no proto referenced ([6cdb58a](https://github.com/restorecommerce/libs/commit/6cdb58a7b64df600d4dd57bf2201e90df2aa88f1))
* **rc-grpc-client:** updated typings for pluralized proto changes ([2929b11](https://github.com/restorecommerce/libs/commit/2929b11034fc18f247a3267108a28fb6e4500cfe))





# [3.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@2.0.2...@restorecommerce/rc-grpc-clients@3.0.0) (2023-05-22)


### Bug Fixes

* **address, fulfillment, product:** fix naming and complete fulfillment calls ([5c720e6](https://github.com/restorecommerce/libs/commit/5c720e67ddbbe21875029b9c3d0d5f6589746401))
* **facade:** regenerated schema for changes in protos ([0da0851](https://github.com/restorecommerce/libs/commit/0da08515e4e1d05482d5881cbfe55523fc7fa368))
* **facade:** renamed service in protos and removed service names options from proto files, fixed typing issues. ([25a24f0](https://github.com/restorecommerce/libs/commit/25a24f063e2499c06c171f1265297500816879f2))
* **generated src:** re-generate ts.prototypes after merge! ([46d9f26](https://github.com/restorecommerce/libs/commit/46d9f26a2457e2dc1d2b8eb1b59d76da60ca2643))
* **protos:** restore nested attribute as its referenced in obligation masked properties in ACS ([d6536f9](https://github.com/restorecommerce/libs/commit/d6536f96dfc30eb1905c899af519d50778e2edee))
* **rc-grpc-client:** regenerated typings for updated protos (optional fields for fullfilment, product protos etc) ([95fa6a4](https://github.com/restorecommerce/libs/commit/95fa6a46c7e7a745870c4ae295cd51f2ae62c7d3))
* **rc-grpc-client:** regenrated typings for changes in proto files ([42c3702](https://github.com/restorecommerce/libs/commit/42c370242071b1b210447503a7ef25f16629e6ab))
* **rc-grpc-clients, facade:** WIP optional fields ([98f0977](https://github.com/restorecommerce/libs/commit/98f097730503bd0fa021bc886ba55d477dafb89f))


* Integration (rebased) (#47) ([718fa5f](https://github.com/restorecommerce/libs/commit/718fa5f8edfc56e2968c0cb3704eda2855fdee0c)), closes [#47](https://github.com/restorecommerce/libs/issues/47)


### BREAKING CHANGES

* Significant changes of naming and structure in proto files

* regenerate rc-qrpc-client

* chore: upgrade Apollo Server 4

* changes for ApolloServer 4 migration

* koaMiddleware

* fixed: unknown type error

* removed: getTokenForRequest

* removed: unnused packages

* add new line

* fix: failed unit tests

* merge

* refinement order.proto and fulfillment.proto for integration tests

* integration

* feat(fulfillment-srv, ordering-srv): integration

Adjustments of protos for fulfillment, ordering and products according to system integration
* Significant changes of naming and structure in proto files

* fix rebase mistakes

* feat(virtual and physical products): virtual and Physical Products

Products are now differentiated as virtual or physical products by a oneof in product.nature
* Variants of the product are now in product.nature.physical.variants, for virual
likewise

* merge master into integration

* reverse ServiceImplementation to ServiceServiceImplementation, regenerate client and server source

* generate rc-grpc-client form local protos

* units!

* remove experimental units

* protos before merge

* feat(fulfillment, ordering and products): finalization of protos for fulfillment and ordering

Refactoreing of Product, Fulfillment, Ordering and Address Protos for a successful integration of
all services.
* - Products now differentiate to physical or virtual nature

* regenerate prototypes

* order CancelRequestList not required

* remove experimental index.ts for generated code

* remove experimental index.ts for generated code

* fix package.json typo





## [2.0.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@2.0.1...@restorecommerce/rc-grpc-clients@2.0.2) (2022-11-16)


### Bug Fixes

* command import ([fcbb6c1](https://github.com/restorecommerce/libs/commit/fcbb6c15b708fc63bf38d0dfa65946731cef3e79))





## [2.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@2.0.0...@restorecommerce/rc-grpc-clients@2.0.1) (2022-10-14)


### Bug Fixes

* **rc-grpc-clients:** regenerate typings from protos ([c8b0ebe](https://github.com/restorecommerce/libs/commit/c8b0ebe5c95fcd788c5a49d5968c0d57bd370220))





# [2.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@1.1.0...@restorecommerce/rc-grpc-clients@2.0.0) (2022-10-12)


### Code Refactoring

* **protos:** refactor protos for fulfillment-srv, ordering-srv, ready for migration tests ([bf8bfd3](https://github.com/restorecommerce/libs/commit/bf8bfd3a00e614857f6f4be35fb00224634ed066))


### BREAKING CHANGES

* **protos:** Address has new fields. Compatiblity must be checked.





# [1.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@1.0.1...@restorecommerce/rc-grpc-clients@1.1.0) (2022-10-04)


### Features

* **facade:** add subscriptions ([d9006e9](https://github.com/restorecommerce/libs/commit/d9006e9ebcd1522a67373f8ca8bfa751c551b36f))





## [1.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@1.0.0...@restorecommerce/rc-grpc-clients@1.0.1) (2022-08-25)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





# [1.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.7...@restorecommerce/rc-grpc-clients@1.0.0) (2022-08-25)


### Bug Fixes

* updated typings with stiringEnums as true ([edb912a](https://github.com/restorecommerce/libs/commit/edb912a924c7a72eeaba82d460cf2b39aaeefb80))


### Features

* move to fully typed grpc client and server ([ec9be2d](https://github.com/restorecommerce/libs/commit/ec9be2daff0823e9ba440a2845b7b1a7f2d74b50))
* move to fully typed grpc client and server ([aeee2f2](https://github.com/restorecommerce/libs/commit/aeee2f2b7ca470223d7bc42fd7cafd4bb8387796))


### Reverts

* Revert "BREAKING CHANGE: move to fully typed grpc client and server" ([2d584a7](https://github.com/restorecommerce/libs/commit/2d584a709632ae608f595a2c836deabd34f671d9))


### BREAKING CHANGES

* move to fully typed grpc client and server





## [0.5.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.6...@restorecommerce/rc-grpc-clients@0.5.7) (2022-08-10)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.5...@restorecommerce/rc-grpc-clients@0.5.6) (2022-07-07)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.4...@restorecommerce/rc-grpc-clients@0.5.5) (2022-06-28)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.3...@restorecommerce/rc-grpc-clients@0.5.4) (2022-06-24)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.2...@restorecommerce/rc-grpc-clients@0.5.3) (2022-06-20)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.1...@restorecommerce/rc-grpc-clients@0.5.2) (2022-06-14)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.5.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.5.0...@restorecommerce/rc-grpc-clients@0.5.1) (2022-06-14)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





# [0.5.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.9...@restorecommerce/rc-grpc-clients@0.5.0) (2022-06-10)


### Bug Fixes

* fix merge issues ([cc37d83](https://github.com/restorecommerce/libs/commit/cc37d8356df3b494af8c6af9e39304a49073301c))
* **protos:** include resolved fields in imports ([a2289e6](https://github.com/restorecommerce/libs/commit/a2289e64d3d383c0031c0a6006b20f494c69d0cb))


### Features

* **facade:** support nested resolvers from proto options ([d319a5b](https://github.com/restorecommerce/libs/commit/d319a5bbf0066d9200d1c6bf38303461496bfa3a))





## [0.4.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.8...@restorecommerce/rc-grpc-clients@0.4.9) (2022-05-16)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.7...@restorecommerce/rc-grpc-clients@0.4.8) (2022-05-09)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.6...@restorecommerce/rc-grpc-clients@0.4.7) (2022-04-25)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.5...@restorecommerce/rc-grpc-clients@0.4.6) (2022-04-20)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.4...@restorecommerce/rc-grpc-clients@0.4.5) (2022-04-05)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.3...@restorecommerce/rc-grpc-clients@0.4.4) (2022-03-29)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.2...@restorecommerce/rc-grpc-clients@0.4.3) (2022-03-01)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.4.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.1...@restorecommerce/rc-grpc-clients@0.4.2) (2022-02-22)


### Bug Fixes

* **protos:** add token to code exchange ([9c17cb6](https://github.com/restorecommerce/libs/commit/9c17cb6e3a16761a85a4b9379c3c6996cc5422e8))





## [0.4.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.4.0...@restorecommerce/rc-grpc-clients@0.4.1) (2022-02-14)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





# [0.4.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.3.0...@restorecommerce/rc-grpc-clients@0.4.0) (2022-02-09)


### Features

* add oauth ([3e7798e](https://github.com/restorecommerce/libs/commit/3e7798e3aa10ef092872928f5254cd5fbb125f3b))





# [0.3.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.17...@restorecommerce/rc-grpc-clients@0.3.0) (2022-01-28)


### Bug Fixes

* **fix generated interfaces: convert snake_case to camelcase:** snake_case to camelCase ([bf78c27](https://github.com/restorecommerce/libs/commit/bf78c27a1e776d716c711c0b633acd7609ca4561))


### Features

* **add protos for fulfillment-product solution proposals:** packsol ([ce6f78f](https://github.com/restorecommerce/libs/commit/ce6f78f34a39924aa30c50857ad751b9ac3be396))


### BREAKING CHANGES

* **add protos for fulfillment-product solution proposals:** fulfillment.proto, fulfillment-courier.proto and fulfillment-product.proto have
changed completely





## [0.2.17](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.16...@restorecommerce/rc-grpc-clients@0.2.17) (2021-12-22)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.16](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.15...@restorecommerce/rc-grpc-clients@0.2.16) (2021-12-21)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.15](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.14...@restorecommerce/rc-grpc-clients@0.2.15) (2021-12-09)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.14](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.13...@restorecommerce/rc-grpc-clients@0.2.14) (2021-12-09)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.13](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.12...@restorecommerce/rc-grpc-clients@0.2.13) (2021-12-06)


### Bug Fixes

* **rc-grpc-clients:** regenrated typings for updated protos ([09c5244](https://github.com/restorecommerce/libs/commit/09c52447f98d84a8d7c2f655e311cd577eb3b0a7))





## [0.2.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.11...@restorecommerce/rc-grpc-clients@0.2.12) (2021-11-08)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.10...@restorecommerce/rc-grpc-clients@0.2.11) (2021-11-05)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.9...@restorecommerce/rc-grpc-clients@0.2.10) (2021-10-25)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.8...@restorecommerce/rc-grpc-clients@0.2.9) (2021-10-19)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.7...@restorecommerce/rc-grpc-clients@0.2.8) (2021-10-07)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.6...@restorecommerce/rc-grpc-clients@0.2.7) (2021-09-21)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.5...@restorecommerce/rc-grpc-clients@0.2.6) (2021-09-21)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.4...@restorecommerce/rc-grpc-clients@0.2.5) (2021-09-13)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.3...@restorecommerce/rc-grpc-clients@0.2.4) (2021-08-23)


### Bug Fixes

* **rc-grpc-clients:** update for changes in ostorage proto ([94b6f8c](https://github.com/restorecommerce/libs/commit/94b6f8c5e0a7a8da5e8d1429772694b5c4c2d42b))
* **version:** up version to be in sync in package-lock ([b8f22c1](https://github.com/restorecommerce/libs/commit/b8f22c1268ee2af4beff7d88bda30f197896e3d2))





## [0.2.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.2...@restorecommerce/rc-grpc-clients@0.2.3) (2021-08-10)


### Bug Fixes

* **rc-grpc-clients, oidc-srv-integration:** added typeroots and skiplibcheck to fix building facade-srv ([b78abcd](https://github.com/restorecommerce/libs/commit/b78abcd08c8f429bda2baa3931c6acf62eeaef06))





## [0.2.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.1...@restorecommerce/rc-grpc-clients@0.2.2) (2021-08-03)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.2.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.2.0...@restorecommerce/rc-grpc-clients@0.2.1) (2021-08-03)


### Bug Fixes

* up pkg locks ([8ed92d6](https://github.com/restorecommerce/libs/commit/8ed92d613b9a095e4b5066056ac566e5dbcf1472))
* updated githead ([2904d30](https://github.com/restorecommerce/libs/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))





# [0.2.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.6...@restorecommerce/rc-grpc-clients@0.2.0) (2021-08-03)


### Bug Fixes

* **koa-health-check:** added missing .eslintrc.js ([45af632](https://github.com/restorecommerce/libs/commit/45af632955d2dd448e7a27f4e8c4b971412cd004))
* **rc-grpc-clients:** generated grpc-clients for updated protos ([0fdf4bb](https://github.com/restorecommerce/libs/commit/0fdf4bb627fe2ebaf53f19041ebf7ae522e6cc2a))


### Features

* **rc-grpc-clients:** updated client types generating from new proto files (includes status for each payload and overall status) ([7138339](https://github.com/restorecommerce/libs/commit/71383399c6d84a75bf07308005d526b35daa5bf4))





## [0.1.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.5...@restorecommerce/rc-grpc-clients@0.1.6) (2021-05-31)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.1.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.4...@restorecommerce/rc-grpc-clients@0.1.5) (2021-05-28)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.1.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.3...@restorecommerce/rc-grpc-clients@0.1.4) (2021-05-26)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.1.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.2...@restorecommerce/rc-grpc-clients@0.1.3) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.1.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.1...@restorecommerce/rc-grpc-clients@0.1.2) (2021-05-24)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





## [0.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/rc-grpc-clients@0.1.0...@restorecommerce/rc-grpc-clients@0.1.1) (2021-02-24)

**Note:** Version bump only for package @restorecommerce/rc-grpc-clients





# 0.1.0 (2021-02-24)


### Features

* introduce facade/grpc-client/rc-grpc-clients/gen-gql-schema + migrate logger/service-config ([99a5375](https://github.com/restorecommerce/libs/commit/99a53754c7a4b27c77f81c6560a3c2aa26a03b2e))
