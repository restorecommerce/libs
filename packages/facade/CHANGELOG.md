# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
