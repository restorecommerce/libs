# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.5...@restorecommerce/facade@1.1.6) (2023-05-29)


### Bug Fixes

* **acs-client:** fixed acs-client typings for pluralized proto changes ([d20f14a](https://github.com/restorecommerce/libs/commit/d20f14af72e5f9ea7b3fce9b2b619b2c13fa2744))
* **facade:** up facade module for regenerated typings (Pluralized proto fields) ([3866585](https://github.com/restorecommerce/libs/commit/38665855742e7aea6baf574d12f723c99ec16cff))
* **rc-grpc-client:** updated typings for pluralized proto changes ([2929b11](https://github.com/restorecommerce/libs/commit/2929b11034fc18f247a3267108a28fb6e4500cfe))





## [1.1.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.4...@restorecommerce/facade@1.1.5) (2023-05-22)


### Bug Fixes

* **acs-client:** fix test imports ([3a092ef](https://github.com/restorecommerce/libs/commit/3a092ef3e34b45df0c121c3fef3f8a51d99acb96))
* **facade:** build error for null field ([aa7f405](https://github.com/restorecommerce/libs/commit/aa7f405aa3940be8d75abd3e10c6f29a19688d09))
* **facade:** downgrade nanoid, import koa-body, match test to object ([d05cee1](https://github.com/restorecommerce/libs/commit/d05cee10c7d631d54b5466e6122fee769505a6da))
* **facade:** fixed sub service name space ([f3266e7](https://github.com/restorecommerce/libs/commit/f3266e7461c7bb2db0a7be05fb79ff132f062ec5))
* **facade:** regenerated schema for changes in protos ([0da0851](https://github.com/restorecommerce/libs/commit/0da08515e4e1d05482d5881cbfe55523fc7fa368))
* **facade:** renamed service in protos and removed service names options from proto files, fixed typing issues. ([25a24f0](https://github.com/restorecommerce/libs/commit/25a24f063e2499c06c171f1265297500816879f2))
* **facade:** restore facade code-gen to previous working version ([294a55f](https://github.com/restorecommerce/libs/commit/294a55f7135aa4b072fdecefbd33baed9efeb4ca))
* **facade:** unit test ([748ab00](https://github.com/restorecommerce/libs/commit/748ab00483fa1893aa50006795c654834a7ffb57))
* failed unit tests ([0f06228](https://github.com/restorecommerce/libs/commit/0f062288ad929303a9544a3d30357b666dec555c))
* **protos:** restore nested attribute as its referenced in obligation masked properties in ACS ([d6536f9](https://github.com/restorecommerce/libs/commit/d6536f96dfc30eb1905c899af519d50778e2edee))
* **rc-grpc-clients, facade:** WIP optional fields ([98f0977](https://github.com/restorecommerce/libs/commit/98f097730503bd0fa021bc886ba55d477dafb89f))


### Reverts

* Revert "chore: upgrade Apollo Server 4" ([90464f2](https://github.com/restorecommerce/libs/commit/90464f2ba77261406718a76d4a854ff7cbcfedf2))





## [1.1.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.3...@restorecommerce/facade@1.1.4) (2022-11-16)


### Bug Fixes

* command import ([fcbb6c1](https://github.com/restorecommerce/libs/commit/fcbb6c15b708fc63bf38d0dfa65946731cef3e79))





## [1.1.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.2...@restorecommerce/facade@1.1.3) (2022-10-26)


### Bug Fixes

* **facade:** fix kafka events for commandInterfaceMeta, build error for lodash, migrated deprecated ApolloGateway serviceList with IntrospectAndCompose, replace deprecated buildFederatedSchema with buildSubgraphSchema ([6d8f4b3](https://github.com/restorecommerce/libs/commit/6d8f4b39a95a19db17075876bc766a6e65ce23d1))





## [1.1.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.1...@restorecommerce/facade@1.1.2) (2022-10-14)


### Bug Fixes

* **facade:** updated schema with missing fulfillment_product for registering typings ([5bbdbdf](https://github.com/restorecommerce/libs/commit/5bbdbdfdedf2b8fdf4a89526082bdec660ba9e36))





## [1.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.1.0...@restorecommerce/facade@1.1.1) (2022-10-12)


### Bug Fixes

* **facade:** regenerated schema typings for new proto files ([4e26e29](https://github.com/restorecommerce/libs/commit/4e26e2949d14dd0e2f7794b956a7d1107b8564ba))





# [1.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.0.1...@restorecommerce/facade@1.1.0) (2022-10-04)


### Bug Fixes

* **facade:** switch to apollo sandbox ([e2a1713](https://github.com/restorecommerce/libs/commit/e2a17133fe5f28ba65269232fd0ffbe230e6e416))


### Features

* **facade:** add subscriptions ([d9006e9](https://github.com/restorecommerce/libs/commit/d9006e9ebcd1522a67373f8ca8bfa751c551b36f))





## [1.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@1.0.0...@restorecommerce/facade@1.0.1) (2022-08-25)

**Note:** Version bump only for package @restorecommerce/facade





# [1.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.7...@restorecommerce/facade@1.0.0) (2022-08-25)


### Features

* move to fully typed grpc client and server ([ec9be2d](https://github.com/restorecommerce/libs/commit/ec9be2daff0823e9ba440a2845b7b1a7f2d74b50))
* move to fully typed grpc client and server ([aeee2f2](https://github.com/restorecommerce/libs/commit/aeee2f2b7ca470223d7bc42fd7cafd4bb8387796))


### Reverts

* Revert "BREAKING CHANGE: move to fully typed grpc client and server" ([2d584a7](https://github.com/restorecommerce/libs/commit/2d584a709632ae608f595a2c836deabd34f671d9))


### BREAKING CHANGES

* move to fully typed grpc client and server





## [0.5.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.6...@restorecommerce/facade@0.5.7) (2022-08-10)

**Note:** Version bump only for package @restorecommerce/facade





## [0.5.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.5...@restorecommerce/facade@0.5.6) (2022-07-07)

**Note:** Version bump only for package @restorecommerce/facade





## [0.5.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.4...@restorecommerce/facade@0.5.5) (2022-06-28)

**Note:** Version bump only for package @restorecommerce/facade





## [0.5.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.3...@restorecommerce/facade@0.5.4) (2022-06-24)

**Note:** Version bump only for package @restorecommerce/facade





## [0.5.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.2...@restorecommerce/facade@0.5.3) (2022-06-20)


### Bug Fixes

* move array.prototype.flat to dependencies ([c73d585](https://github.com/restorecommerce/libs/commit/c73d5852a5e1a225f9626ad8d79fd235373af48e))





## [0.5.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.1...@restorecommerce/facade@0.5.2) (2022-06-14)

**Note:** Version bump only for package @restorecommerce/facade





## [0.5.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.5.0...@restorecommerce/facade@0.5.1) (2022-06-14)

**Note:** Version bump only for package @restorecommerce/facade





# [0.5.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.4.1...@restorecommerce/facade@0.5.0) (2022-06-10)


### Bug Fixes

* **facade:** fix building tests ([82485bf](https://github.com/restorecommerce/libs/commit/82485bfb7c6e19e0bc56f665538bf65d427a1178))
* fix merge issues ([cc37d83](https://github.com/restorecommerce/libs/commit/cc37d8356df3b494af8c6af9e39304a49073301c))


### Features

* **facade:** support nested resolvers from proto options ([d319a5b](https://github.com/restorecommerce/libs/commit/d319a5bbf0066d9200d1c6bf38303461496bfa3a))





## [0.4.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.4.0...@restorecommerce/facade@0.4.1) (2022-05-16)


### Bug Fixes

* **facade:** force release ([9716dab](https://github.com/restorecommerce/libs/commit/9716dab905623b3204a7a9004887c0396234b7fd))





# [0.4.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.20...@restorecommerce/facade@0.4.0) (2022-05-16)


### Bug Fixes

* **facade:** fix build errors ([a0a4d62](https://github.com/restorecommerce/libs/commit/a0a4d6286f875419cff84555bd5f176e36661044))


### Features

* major version upgrades ([62461c1](https://github.com/restorecommerce/libs/commit/62461c1ef0eb5cd693dcca25b7f9c6f92e549818))





## [0.3.20](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.19...@restorecommerce/facade@0.3.20) (2022-05-09)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.19](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.18...@restorecommerce/facade@0.3.19) (2022-04-29)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.18](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.17...@restorecommerce/facade@0.3.18) (2022-04-25)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.17](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.16...@restorecommerce/facade@0.3.17) (2022-04-20)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.16](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.15...@restorecommerce/facade@0.3.16) (2022-04-07)


### Bug Fixes

* **facade:** blacklist and whitelist config for sub service name space level ([6d737d6](https://github.com/restorecommerce/libs/commit/6d737d62a5395890e506a3fb76aa31f9e127d38e))
* **facade:** mask register resolver schema for blacklisted config ([8478590](https://github.com/restorecommerce/libs/commit/8478590bd994eedd3023a8e0f7f347a33f2019f1))





## [0.3.15](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.14...@restorecommerce/facade@0.3.15) (2022-04-05)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.14](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.13...@restorecommerce/facade@0.3.14) (2022-04-01)


### Bug Fixes

* **facade:** fix to convert google.protobuf.timestamp to DateTime scalar type and convert it to JS Date object for create / update operation. ([ced5ecf](https://github.com/restorecommerce/libs/commit/ced5ecfae25eb928691a6a17eb32683ae9650a68))
* **facade:** renamed preprocess and postprocess GQL function name ([ef0f5f0](https://github.com/restorecommerce/libs/commit/ef0f5f02dcd605067b6399d4afa525248ce64417))





## [0.3.13](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.12...@restorecommerce/facade@0.3.13) (2022-03-29)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.11...@restorecommerce/facade@0.3.12) (2022-03-23)


### Bug Fixes

* **facade:** include scope for traversal operation as well ([cf57b73](https://github.com/restorecommerce/libs/commit/cf57b733f1788fd07d8a63ca0c9614c954b577d9))





## [0.3.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.10...@restorecommerce/facade@0.3.11) (2022-03-15)


### Bug Fixes

* decode only if data exists (prevent undefined error) ([3137108](https://github.com/restorecommerce/libs/commit/3137108e2524596628663ea2a81cdb24b46c1ee3))





## [0.3.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.9...@restorecommerce/facade@0.3.10) (2022-03-15)


### Bug Fixes

* **facade:** set target scope if it exists ([0597107](https://github.com/restorecommerce/libs/commit/0597107001e68fcbe19a51a8621e603e9a7610ad))





## [0.3.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.8...@restorecommerce/facade@0.3.9) (2022-03-14)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.7...@restorecommerce/facade@0.3.8) (2022-03-14)


### Bug Fixes

* **facade:** check if buffer field is actually a buffer ([d0930dc](https://github.com/restorecommerce/libs/commit/d0930dcd979d0a2acc101890517e43c7f7d6e2df))





## [0.3.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.6...@restorecommerce/facade@0.3.7) (2022-03-14)


### Bug Fixes

* **facade:** encode any type to buffered json ([9dbb5cb](https://github.com/restorecommerce/libs/commit/9dbb5cb9985f1bdcfd8ac4a9b1ab8bde050be8b2))





## [0.3.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.5...@restorecommerce/facade@0.3.6) (2022-03-09)


### Bug Fixes

* **facade:** merge query and mutation resolvers ([c2481b0](https://github.com/restorecommerce/libs/commit/c2481b05c46a5992d2a05017f9c4d279f3055613))
* **facade:** to add scope only to root mutation / query instead of all input types and updated suject scope to read from request scope ([9bbc8da](https://github.com/restorecommerce/libs/commit/9bbc8daba19d1ce5ef16b54f9353b9c2df39258e))





## [0.3.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.4...@restorecommerce/facade@0.3.5) (2022-03-04)


### Bug Fixes

* **facade:** added null check ([2ff25fe](https://github.com/restorecommerce/libs/commit/2ff25febd04ffa624d2ba4a7b50179726abfe8da))





## [0.3.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.3...@restorecommerce/facade@0.3.4) (2022-03-04)


### Bug Fixes

* **facade:** added scope for all mutations and queries ([3b4df19](https://github.com/restorecommerce/libs/commit/3b4df196fa8bbbdc169846c588d3d53c85a4c091))
* **facade:** fixed enum type mapping for nested object ([f452229](https://github.com/restorecommerce/libs/commit/f452229fc3ceec7205d079884a55076578e5a975))





## [0.3.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.2...@restorecommerce/facade@0.3.3) (2022-03-01)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.1...@restorecommerce/facade@0.3.2) (2022-02-23)

**Note:** Version bump only for package @restorecommerce/facade





## [0.3.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.3.0...@restorecommerce/facade@0.3.1) (2022-02-23)


### Bug Fixes

* **facade:** use token that was received from ids ([2508cfb](https://github.com/restorecommerce/libs/commit/2508cfb28c099000dad4c037a0eeb1883f152f05))





# [0.3.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.2.2...@restorecommerce/facade@0.3.0) (2022-02-22)


### Bug Fixes

* **facade:** do not internal error ([a98594d](https://github.com/restorecommerce/libs/commit/a98594d2a478965eb3b22fff530b86c290afbbb2))
* **facade:** use jwt token ([666a08f](https://github.com/restorecommerce/libs/commit/666a08f9b7727cda26a499c3ebaa5335ed38a27a))
* **protos:** add token to code exchange ([9c17cb6](https://github.com/restorecommerce/libs/commit/9c17cb6e3a16761a85a4b9379c3c6996cc5422e8))


### Features

* **facade:** support maps ([2c466fe](https://github.com/restorecommerce/libs/commit/2c466fe1e0ef883ab4b7eb19f637ef13f1f88e96))





## [0.2.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.2.1...@restorecommerce/facade@0.2.2) (2022-02-15)


### Bug Fixes

* store facade token in cookies ([5fe1b53](https://github.com/restorecommerce/libs/commit/5fe1b538955993f6d20626968699867f0120589c))





## [0.2.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.2.0...@restorecommerce/facade@0.2.1) (2022-02-14)


### Bug Fixes

* **facade:** regenerated schema ([a8fba43](https://github.com/restorecommerce/libs/commit/a8fba43233999191d2583139cefe9a8af647706b))
* bypass non-compliant koa modules ([8a92b83](https://github.com/restorecommerce/libs/commit/8a92b83ce717f52caa843b00d5db894ca07ab1a9))
* copy hbs on build ([efd8e78](https://github.com/restorecommerce/libs/commit/efd8e783a09badb84d76f2b72377de438f34d014))
* switch to sh ([5756072](https://github.com/restorecommerce/libs/commit/57560723184a300b2d315068f29339a5f2dc517e))





# [0.2.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.44...@restorecommerce/facade@0.2.0) (2022-02-09)


### Features

* add oauth ([3e7798e](https://github.com/restorecommerce/libs/commit/3e7798e3aa10ef092872928f5254cd5fbb125f3b))





## [0.1.44](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.43...@restorecommerce/facade@0.1.44) (2022-02-02)


### Bug Fixes

* **facade:** for recursive circular references (ex: attributes -> having nested attributes) ([59c2904](https://github.com/restorecommerce/libs/commit/59c29049c23ecb5f3265ea37a6757ca551023b38))





## [0.1.43](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.42...@restorecommerce/facade@0.1.43) (2022-02-02)


### Bug Fixes

* **facade:** enum convert string to integer ([47127ef](https://github.com/restorecommerce/libs/commit/47127ef323f5853a4c6573b01dd36c3725074d4e))
* **facade:** fix for mutation resolvers to convert enums string values to integer ([28d0fea](https://github.com/restorecommerce/libs/commit/28d0fea912778b3cf4f748bc68b1e0fafaea60af))
* **facade:** fixed read operations to convert enums to number ([81083c0](https://github.com/restorecommerce/libs/commit/81083c0162d605d6a3c8394e06ba093d1e29948e))
* **facade:** move conversion of enum to int to utils ([72c9a1f](https://github.com/restorecommerce/libs/commit/72c9a1f0be269b68bc9b2501a38789ce7409453f))
* **facade:** recursive enum path fix ([244f7fc](https://github.com/restorecommerce/libs/commit/244f7fc782d10ffb5f774f0245174446288cacb5))





## [0.1.42](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.41...@restorecommerce/facade@0.1.42) (2022-01-28)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.41](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.40...@restorecommerce/facade@0.1.41) (2021-12-22)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.40](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.39...@restorecommerce/facade@0.1.40) (2021-12-21)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.39](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.38...@restorecommerce/facade@0.1.39) (2021-12-20)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.38](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.37...@restorecommerce/facade@0.1.38) (2021-12-20)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.37](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.36...@restorecommerce/facade@0.1.37) (2021-12-09)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.36](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.35...@restorecommerce/facade@0.1.36) (2021-12-09)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.35](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.34...@restorecommerce/facade@0.1.35) (2021-12-09)


### Bug Fixes

* **facade:** updated generated schema for facade module due to changes in proto files. ([c57d5fa](https://github.com/restorecommerce/libs/commit/c57d5faaea1dbd287727f7c7678e6cfe34dba92d))





## [0.1.34](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.33...@restorecommerce/facade@0.1.34) (2021-12-06)


### Bug Fixes

* **facade:** Added streaming response handling for mutations and queries. ([199db2d](https://github.com/restorecommerce/libs/commit/199db2d51f5a1d08ec2af09579df9c742ae0bbb1))





## [0.1.33](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.32...@restorecommerce/facade@0.1.33) (2021-11-08)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.32](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.31...@restorecommerce/facade@0.1.32) (2021-11-05)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.31](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.30...@restorecommerce/facade@0.1.31) (2021-10-25)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.30](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.29...@restorecommerce/facade@0.1.30) (2021-10-19)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.29](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.28...@restorecommerce/facade@0.1.29) (2021-10-07)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.28](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.27...@restorecommerce/facade@0.1.28) (2021-09-21)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.27](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.26...@restorecommerce/facade@0.1.27) (2021-09-21)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.26](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.25...@restorecommerce/facade@0.1.26) (2021-09-15)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.25](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.24...@restorecommerce/facade@0.1.25) (2021-09-13)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.24](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.23...@restorecommerce/facade@0.1.24) (2021-09-09)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.23](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.22...@restorecommerce/facade@0.1.23) (2021-09-09)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.22](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.21...@restorecommerce/facade@0.1.22) (2021-08-23)


### Bug Fixes

* **facade:** update for changes in ostorage proto ([b6f53a1](https://github.com/restorecommerce/libs/commit/b6f53a17c2805496a76077e5f7edd06a6b41248e))
* **version:** up version to be in sync in package-lock ([b8f22c1](https://github.com/restorecommerce/libs/commit/b8f22c1268ee2af4beff7d88bda30f197896e3d2))





## [0.1.21](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.20...@restorecommerce/facade@0.1.21) (2021-08-10)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.20](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.18...@restorecommerce/facade@0.1.20) (2021-08-03)


### Bug Fixes

* up githead for acs-client, protos, facade ([6a50326](https://github.com/restorecommerce/libs/commit/6a503266498ef5d0e998e93b639dedd843fbfd5d))
* up version to detech changes ([b8c0517](https://github.com/restorecommerce/libs/commit/b8c05170241cfe0d3c84e08ce35ddb7dce2ba00a))





## [0.1.18](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.17...@restorecommerce/facade@0.1.18) (2021-08-03)


### Bug Fixes

* up pkg locks ([8ed92d6](https://github.com/restorecommerce/libs/commit/8ed92d613b9a095e4b5066056ac566e5dbcf1472))
* updated githead ([2904d30](https://github.com/restorecommerce/libs/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))





## [0.1.17](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.16...@restorecommerce/facade@0.1.17) (2021-08-03)


### Bug Fixes

* **koa-health-check:** added missing .eslintrc.js ([45af632](https://github.com/restorecommerce/libs/commit/45af632955d2dd448e7a27f4e8c4b971412cd004))





## [0.1.16](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.15...@restorecommerce/facade@0.1.16) (2021-07-29)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.15](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.14...@restorecommerce/facade@0.1.15) (2021-07-29)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.14](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.13...@restorecommerce/facade@0.1.14) (2021-07-25)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.13](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.12...@restorecommerce/facade@0.1.13) (2021-07-15)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.11...@restorecommerce/facade@0.1.12) (2021-07-01)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.10...@restorecommerce/facade@0.1.11) (2021-06-26)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.9...@restorecommerce/facade@0.1.10) (2021-06-02)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.8...@restorecommerce/facade@0.1.9) (2021-06-02)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.7...@restorecommerce/facade@0.1.8) (2021-05-31)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.6...@restorecommerce/facade@0.1.7) (2021-05-28)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.5...@restorecommerce/facade@0.1.6) (2021-05-26)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.4...@restorecommerce/facade@0.1.5) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.3...@restorecommerce/facade@0.1.4) (2021-05-24)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.2...@restorecommerce/facade@0.1.3) (2021-03-03)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.1...@restorecommerce/facade@0.1.2) (2021-03-01)

**Note:** Version bump only for package @restorecommerce/facade





## [0.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/facade@0.1.0...@restorecommerce/facade@0.1.1) (2021-02-24)

**Note:** Version bump only for package @restorecommerce/facade





# 0.1.0 (2021-02-24)


### Features

* **facade:** add oidc support ([f1a173b](https://github.com/restorecommerce/libs/commit/f1a173b61a2b67ded10c28207396897c388df933))
* introduce facade/grpc-client/rc-grpc-clients/gen-gql-schema + migrate logger/service-config ([99a5375](https://github.com/restorecommerce/libs/commit/99a53754c7a4b27c77f81c6560a3c2aa26a03b2e))
