# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@2.0.0...@restorecommerce/grpc-client@2.0.1) (2023-05-29)


### Bug Fixes

* fix package lock and unit tests for acs-client ([754b3e3](https://github.com/restorecommerce/libs/commit/754b3e39d321fe860358427ad6fdd12b75863142))





# [2.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@1.0.3...@restorecommerce/grpc-client@2.0.0) (2023-05-22)


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





## [1.0.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@1.0.2...@restorecommerce/grpc-client@1.0.3) (2022-10-14)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [1.0.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@1.0.1...@restorecommerce/grpc-client@1.0.2) (2022-10-12)


### Bug Fixes

* **grpc-client:** removed field handling as this is now moved to logger ([53a6e62](https://github.com/restorecommerce/libs/commit/53a6e62abd37f07186dcbabf0e8c87752b4895d1))





## [1.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@1.0.0...@restorecommerce/grpc-client@1.0.1) (2022-10-04)

**Note:** Version bump only for package @restorecommerce/grpc-client





# [1.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.6...@restorecommerce/grpc-client@1.0.0) (2022-08-25)


### Features

* move to fully typed grpc client and server ([ec9be2d](https://github.com/restorecommerce/libs/commit/ec9be2daff0823e9ba440a2845b7b1a7f2d74b50))
* move to fully typed grpc client and server ([aeee2f2](https://github.com/restorecommerce/libs/commit/aeee2f2b7ca470223d7bc42fd7cafd4bb8387796))


### Reverts

* Revert "BREAKING CHANGE: move to fully typed grpc client and server" ([2d584a7](https://github.com/restorecommerce/libs/commit/2d584a709632ae608f595a2c836deabd34f671d9))


### BREAKING CHANGES

* move to fully typed grpc client and server





## [0.4.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.5...@restorecommerce/grpc-client@0.4.6) (2022-08-10)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.4.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.4...@restorecommerce/grpc-client@0.4.5) (2022-07-07)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.4.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.3...@restorecommerce/grpc-client@0.4.4) (2022-06-28)


### Bug Fixes

* **grpc-client:** to print error message and stack instead of entire error object ([0ed98ea](https://github.com/restorecommerce/libs/commit/0ed98ea2ebdeda8490679ff3cbe68fe408373423))





## [0.4.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.2...@restorecommerce/grpc-client@0.4.3) (2022-06-24)


### Bug Fixes

* **grpc-client:** interceptor logging ([32783b6](https://github.com/restorecommerce/libs/commit/32783b6c106fb8b50aad63ba8748768b447bd955))





## [0.4.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.1...@restorecommerce/grpc-client@0.4.2) (2022-06-14)


### Bug Fixes

* **grpc-client:** added logger instead of console log for grpc retry interceptor ([45ae050](https://github.com/restorecommerce/libs/commit/45ae0505521c4d2255139f6d4fc48f267068d38e))





## [0.4.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.4.0...@restorecommerce/grpc-client@0.4.1) (2022-06-10)


### Bug Fixes

* fix merge issues ([cc37d83](https://github.com/restorecommerce/libs/commit/cc37d8356df3b494af8c6af9e39304a49073301c))





# [0.4.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.3.2...@restorecommerce/grpc-client@0.4.0) (2022-05-16)


### Features

* major version upgrades ([62461c1](https://github.com/restorecommerce/libs/commit/62461c1ef0eb5cd693dcca25b7f9c6f92e549818))





## [0.3.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.3.1...@restorecommerce/grpc-client@0.3.2) (2022-05-09)


### Bug Fixes

* **grpc-client:** added interceptors for grpc-client ([cb1616b](https://github.com/restorecommerce/libs/commit/cb1616b8584835c3914115a8698ee810df0580b2))





## [0.3.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.3.0...@restorecommerce/grpc-client@0.3.1) (2022-02-14)

**Note:** Version bump only for package @restorecommerce/grpc-client





# [0.3.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.14...@restorecommerce/grpc-client@0.3.0) (2022-02-09)


### Features

* add oauth ([3e7798e](https://github.com/restorecommerce/libs/commit/3e7798e3aa10ef092872928f5254cd5fbb125f3b))





## [0.2.14](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.13...@restorecommerce/grpc-client@0.2.14) (2021-12-22)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.2.13](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.12...@restorecommerce/grpc-client@0.2.13) (2021-12-21)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.2.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.11...@restorecommerce/grpc-client@0.2.12) (2021-12-09)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.2.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.10...@restorecommerce/grpc-client@0.2.11) (2021-12-06)


### Bug Fixes

* **grpc-client:** make bufferFields in client config configurable ([7050e0b](https://github.com/restorecommerce/libs/commit/7050e0b2cc0ef9c6909c59b17da32349a6a4fea8))





## [0.2.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.9...@restorecommerce/grpc-client@0.2.10) (2021-09-21)


### Bug Fixes

* **grpc-client:** added else block for error handler ([03aa7fc](https://github.com/restorecommerce/libs/commit/03aa7fc66e973a02ed63e35e1d2f02da4bb9dc7c))





## [0.2.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.8...@restorecommerce/grpc-client@0.2.9) (2021-09-21)


### Bug Fixes

* **grpc-client:** added retry mechanism for 4 grpc client requests ([cbd8bdc](https://github.com/restorecommerce/libs/commit/cbd8bdc5ca16ca85c2964d4b4061ec1deb06a569))
* **grpc-client:** deps build ([c4fd5d8](https://github.com/restorecommerce/libs/commit/c4fd5d8f507298a0c8b0f84763d131b8a4b4e011))





## [0.2.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.7...@restorecommerce/grpc-client@0.2.8) (2021-09-13)


### Bug Fixes

* **grpc-client:** rename bufferfields configuration to omittedFields ([06ee809](https://github.com/restorecommerce/libs/commit/06ee809408d4af3bc85c7c0ddf2cc19fa8fb212a))





## [0.2.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.6...@restorecommerce/grpc-client@0.2.7) (2021-08-23)


### Bug Fixes

* **grpc-client:** added support for streaming requests and response along with making Observable configurable ([895e650](https://github.com/restorecommerce/libs/commit/895e650702ec31075bff7d71a8595241bf6aa439))





## [0.2.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.5...@restorecommerce/grpc-client@0.2.6) (2021-08-03)


### Bug Fixes

* up pkg locks ([8ed92d6](https://github.com/restorecommerce/libs/commit/8ed92d613b9a095e4b5066056ac566e5dbcf1472))
* updated githead ([2904d30](https://github.com/restorecommerce/libs/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))





## [0.2.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.4...@restorecommerce/grpc-client@0.2.5) (2021-08-03)


### Bug Fixes

* **koa-health-check:** added missing .eslintrc.js ([45af632](https://github.com/restorecommerce/libs/commit/45af632955d2dd448e7a27f4e8c4b971412cd004))





## [0.2.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.3...@restorecommerce/grpc-client@0.2.4) (2021-05-26)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.2.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.2...@restorecommerce/grpc-client@0.2.3) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/grpc-client





## [0.2.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.1...@restorecommerce/grpc-client@0.2.2) (2021-05-24)


### Bug Fixes

* **grpc-client:** end grpc call on observable completion ([4ee8f5f](https://github.com/restorecommerce/libs/commit/4ee8f5f1e36a6d5c29fdeb3719e8c3f6280e907b))





## [0.2.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/grpc-client@0.2.0...@restorecommerce/grpc-client@0.2.1) (2021-02-24)

**Note:** Version bump only for package @restorecommerce/grpc-client





# 0.2.0 (2021-02-24)


### Features

* **grpc-client:** add bidi stream support ([aac03ce](https://github.com/restorecommerce/libs/commit/aac03ce6eb0c650017f32e161cd89fe09361d7f3))
* introduce facade/grpc-client/rc-grpc-clients/gen-gql-schema + migrate logger/service-config ([99a5375](https://github.com/restorecommerce/libs/commit/99a53754c7a4b27c77f81c6560a3c2aa26a03b2e))
