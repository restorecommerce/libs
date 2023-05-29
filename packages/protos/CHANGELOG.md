# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@3.0.0...@restorecommerce/protos@3.0.1) (2023-05-29)


### Bug Fixes

* **protos:** pluralize rendering proto ([f1f2afa](https://github.com/restorecommerce/libs/commit/f1f2afaa47755be6ba34fafda157ee797d2cb9fb))





# [3.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@2.0.2...@restorecommerce/protos@3.0.0) (2023-05-22)


### Bug Fixes

* **address, fulfillment, product:** fix naming and complete fulfillment calls ([5c720e6](https://github.com/restorecommerce/libs/commit/5c720e67ddbbe21875029b9c3d0d5f6589746401))
* **facade:** renamed service in protos and removed service names options from proto files, fixed typing issues. ([25a24f0](https://github.com/restorecommerce/libs/commit/25a24f063e2499c06c171f1265297500816879f2))
* **generated src:** re-generate ts.prototypes after merge! ([46d9f26](https://github.com/restorecommerce/libs/commit/46d9f26a2457e2dc1d2b8eb1b59d76da60ca2643))
* **protos:** Added optional fields for request object ([e1374fd](https://github.com/restorecommerce/libs/commit/e1374fd90dddb16c109f4353efdfec995b526b69))
* **protos:** Added optional fields for request object ([ba0f6bb](https://github.com/restorecommerce/libs/commit/ba0f6bb4d031b1838d44f480ea242efa352c4923))
* **protos:** removed self reference Attribute from proto file ([4346cc5](https://github.com/restorecommerce/libs/commit/4346cc5997bafc429a7229ed0471a6e84bd169c4))
* **protos:** restore nested attribute as its referenced in obligation masked properties in ACS ([d6536f9](https://github.com/restorecommerce/libs/commit/d6536f96dfc30eb1905c899af519d50778e2edee))
* **rc-grpc-clients, facade:** WIP optional fields ([98f0977](https://github.com/restorecommerce/libs/commit/98f097730503bd0fa021bc886ba55d477dafb89f))


* Feature/product appendix (#48) ([cb00636](https://github.com/restorecommerce/libs/commit/cb00636d6c98286e2fd923b229ab950f6201c760)), closes [#48](https://github.com/restorecommerce/libs/issues/48)
* Integration (rebased) (#47) ([718fa5f](https://github.com/restorecommerce/libs/commit/718fa5f8edfc56e2968c0cb3704eda2855fdee0c)), closes [#47](https://github.com/restorecommerce/libs/issues/47)


### BREAKING CHANGES

* Fixing service names, remove Identifier, add autoresolvers

commit 29d59c01a8114e2525101432649dcf2130e4c285
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 14:11:26 2023 +0200

    fix package.json typo

commit 1b6cf98744114f7597e1e251860c5c6665225693
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 14:04:48 2023 +0200

    remove experimental index.ts for generated code

commit f3ef433341cbf757945f2380620e21463a345f9b
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 14:04:06 2023 +0200

    remove experimental index.ts for generated code

commit 0d9949dab1c6f577100ab0a18f32174ecfa76580
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:55:50 2023 +0200

    order CancelRequestList not required

commit 0379566af99f2e4eed1c843b7d622a20adc1777b
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    regenerate prototypes

commit efe2c06a323b99471c69f04d2e05cfc4e85bb3ff
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    feat(fulfillment, ordering and products): finalization of protos for fulfillment and ordering

    Refactoreing of Product, Fulfillment, Ordering and Address Protos for a successful integration of
    all services.
* - Products now differentiate to physical or virtual nature

commit 426e85a5782e7138b8d8c9ab61e9184be3c0f309
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    protos before merge

commit 504707f08a6f18bf4d081e4880c6cd2d7556d018
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    remove experimental units

commit 4880826237c0c14bf63feee427d0e066c21176b0
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    units!

commit fef2fc9542d465d9c92cfa1ffedcd4b374f052b0
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    generate rc-grpc-client form local protos

commit 70e72a1631662485d1a32bf9fc8da1b6c9d0039b
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:03:08 2023 +0200

    reverse ServiceImplementation to ServiceServiceImplementation, regenerate client and server source

commit ff3def942963747dcf82a24422a98a9833744573
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 13:02:03 2023 +0200

    merge master into integration

commit b520dba15d31b958edc30b7c912edcaa5e644e8c
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:59:26 2023 +0200

    feat(virtual and physical products): virtual and Physical Products

    Products are now differentiated as virtual or physical products by a oneof in product.nature
* Variants of the product are now in product.nature.physical.variants, for virual
    likewise

commit 736427b382d30434b7e7c5729817c8ecd6905e8c
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:57:44 2023 +0200

    fix rebase mistakes

commit 700cba9f3cedcecdf74572c738d636974e705bc4
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:57:44 2023 +0200

    feat(fulfillment-srv, ordering-srv): integration

    Adjustments of protos for fulfillment, ordering and products according to system integration
* Significant changes of naming and structure in proto files

commit 72c6103cef3eac64bfb7df9dfbe7ea673f7b5ec5
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:57:44 2023 +0200

    integration

commit 2a9f2411e299248d83ce59b599a79c4780c78dbf
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:52:32 2023 +0200

    refinement order.proto and fulfillment.proto for integration tests

commit 79d7f5d249b41fce93083cea36220efa8a82a43b
Author: Thomas Hoppe <thomas.hoppe@n-fuse.co>
Date:   Thu May 4 12:52:32 2023 +0200

    merge

commit fdc1cceaf347b6cccf9ce6ad3f53ac94662957a8
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    fix: failed unit tests

commit 35baca9dd7860cc7f3695a7b875ae082293644c3
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    add new line

commit b6a2e5cacd72c76b40fe04402db39e678d945d8d
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    removed: unnused packages

commit f38eab382fc437199ba738e5a4e49d6ccc775a14
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    removed: getTokenForRequest

commit c78bc1bdc05373196be540c1d39c287b3614c7b7
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    fixed: unknown type error

commit 1a35d3f9512e04c6a046f8fdcc819badf8f20abc
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    koaMiddleware

commit 6dfa4c597d2c0ed8e2155952f7f7e423ec03d001
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    changes for ApolloServer 4 migration

commit d3a828f5529f77901ba30ca1379a742b5b95aed0
Author: Martin <martin.yankov@n-fuse.co>
Date:   Thu May 4 12:42:45 2023 +0200

    chore: upgrade Apollo Server 4

commit b78164619c185b695fdf95104799f294d76939a4
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:37:51 2023 +0200

    regenerate rc-qrpc-client

commit 98933a41c1844de517baea5099afe95794445652
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:34:56 2023 +0200

    feat(fulfillment-srv, ordering-srv): integration

    Adjustments of protos for fulfillment, ordering and products according to system integration
* Significant changes of naming and structure in proto files

commit 9d52ddcc030c67f620649d823748dbf2c846d798
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:33:51 2023 +0200

    integration

commit 033e6dd6f9e4f3809100bd50843393b8d4bce8f2
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:30:13 2023 +0200

    fulfillment protos final

commit 324e81a5bf20176801a679a19a8f120c581bd23e
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:30:13 2023 +0200

    fulfillment protos final?

commit 3352058e9a62c3fbd1104b69bfb9fbdd5e2670ec
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:25:57 2023 +0200

    persistent address

commit 14dab0e4bfd6a17af2b45f0be6a8e1719f0370b8
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:24:21 2023 +0200

    oneof resolver

commit 22eca03374745b73f1a26b94d1d5dd09e87e27cb
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:22:53 2023 +0200

    add submit fulfillment

commit 1a626529635f6167f8519e07208ec1ccdae34e33
Author: Gerald Baulig <gerald.baulig@n-fuse.co>
Date:   Thu May 4 12:17:55 2023 +0200

    refinement order.proto and fulfillment.proto for integration tests

* refactor(rename productappendix to file): rename productApenndix to file

ProductAppendix -> File

* fix(product.proto): import file.proto

import file.proto
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





## [2.0.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@2.0.1...@restorecommerce/protos@2.0.2) (2022-11-16)


### Bug Fixes

* command import ([fcbb6c1](https://github.com/restorecommerce/libs/commit/fcbb6c15b708fc63bf38d0dfa65946731cef3e79))





## [2.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@2.0.0...@restorecommerce/protos@2.0.1) (2022-10-14)


### Bug Fixes

* **protos:** fix fullfillment product for missing import and commented address (does not exist) ([5780cb2](https://github.com/restorecommerce/libs/commit/5780cb245ad3f0955ba27d1b6b60659cc7e4b8d0))





# [2.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@1.1.0...@restorecommerce/protos@2.0.0) (2022-10-12)


### Code Refactoring

* **protos:** refactor protos for fulfillment-srv, ordering-srv, ready for migration tests ([bf8bfd3](https://github.com/restorecommerce/libs/commit/bf8bfd3a00e614857f6f4be35fb00224634ed066))


### BREAKING CHANGES

* **protos:** Address has new fields. Compatiblity must be checked.





# [1.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@1.0.0...@restorecommerce/protos@1.1.0) (2022-10-04)


### Bug Fixes

* **protos:** added timezone on Job cron repeat options. ([d25a5c0](https://github.com/restorecommerce/libs/commit/d25a5c0740d8f04102691a5eb3b4c5745fbb75ad))
* **protos:** restore subject id for auth subject ([150e663](https://github.com/restorecommerce/libs/commit/150e663c0c090721da9b7ce028714d5df7994972))


### Features

* **facade:** add subscriptions ([d9006e9](https://github.com/restorecommerce/libs/commit/d9006e9ebcd1522a67373f8ca8bfa751c551b36f))





# [1.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.7.2...@restorecommerce/protos@1.0.0) (2022-08-25)


### Features

* move to fully typed grpc client and server ([aeee2f2](https://github.com/restorecommerce/libs/commit/aeee2f2b7ca470223d7bc42fd7cafd4bb8387796))





## [0.7.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.7.1...@restorecommerce/protos@0.7.2) (2022-06-14)


### Bug Fixes

* remove optional from protos ([dee7264](https://github.com/restorecommerce/libs/commit/dee7264ec862bbe7fa5ada55dcb3fd9227e06ef8))





## [0.7.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.7.0...@restorecommerce/protos@0.7.1) (2022-06-14)


### Bug Fixes

* change semicolon to comma in options ([9e4b9e1](https://github.com/restorecommerce/libs/commit/9e4b9e190c31edadc414dba6b5311fe931e2f372))





# [0.7.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.9...@restorecommerce/protos@0.7.0) (2022-06-10)


### Bug Fixes

* fix merge issues ([cc37d83](https://github.com/restorecommerce/libs/commit/cc37d8356df3b494af8c6af9e39304a49073301c))
* **protos:** include resolved fields in imports ([a2289e6](https://github.com/restorecommerce/libs/commit/a2289e64d3d383c0031c0a6006b20f494c69d0cb))


### Features

* **facade:** support nested resolvers from proto options ([d319a5b](https://github.com/restorecommerce/libs/commit/d319a5bbf0066d9200d1c6bf38303461496bfa3a))





## [0.6.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.8...@restorecommerce/protos@0.6.9) (2022-05-09)


### Bug Fixes

* **protos:** add get token grpc endpoint to oauth ([965701b](https://github.com/restorecommerce/libs/commit/965701b5192c73060bf0377bc2f81d33a2ea4bd8))





## [0.6.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.7...@restorecommerce/protos@0.6.8) (2022-04-25)


### Bug Fixes

* **protos:** updated user proto read rpc to return the Roles associated with the user ([ce87ee1](https://github.com/restorecommerce/libs/commit/ce87ee1998061d0addaa9f191174a18138fc2a05))





## [0.6.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.6...@restorecommerce/protos@0.6.7) (2022-04-20)

**Note:** Version bump only for package @restorecommerce/protos





## [0.6.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.5...@restorecommerce/protos@0.6.6) (2022-04-05)

**Note:** Version bump only for package @restorecommerce/protos





## [0.6.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.4...@restorecommerce/protos@0.6.5) (2022-03-29)


### Bug Fixes

* **protos:** updated invoice proto ([c927dae](https://github.com/restorecommerce/libs/commit/c927dae3ee9a4b8f47b0844feaa615a15a7f1afd))





## [0.6.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.3...@restorecommerce/protos@0.6.4) (2022-02-22)


### Bug Fixes

* **protos:** add token to code exchange ([9c17cb6](https://github.com/restorecommerce/libs/commit/9c17cb6e3a16761a85a4b9379c3c6996cc5422e8))





## [0.6.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.6.0...@restorecommerce/protos@0.6.3) (2022-02-14)


### Bug Fixes

* **protos:** added data field for user and created time stamp for role associations ([cf14968](https://github.com/restorecommerce/libs/commit/cf14968aa1575ef83fde4b73780ba80fd3bf0188))
* **protos:** fix auth proto ([b5e7f41](https://github.com/restorecommerce/libs/commit/b5e7f410bad2c1786e69186555584f591cd0c48b))





# [0.6.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.5.0...@restorecommerce/protos@0.6.0) (2022-02-09)


### Bug Fixes

* **protos:** added type for location ([d332fdd](https://github.com/restorecommerce/libs/commit/d332fdd687b361381259b77beddc4d646ad6d718))
* **protos:** removed children_ids for location proto ([4908e7c](https://github.com/restorecommerce/libs/commit/4908e7c36312bb2a45e9402c357be8f0e0a5ffd0))
* **protos:** up organization proto to remove children_ids ([b0b8741](https://github.com/restorecommerce/libs/commit/b0b8741e2ad3b0cbec605ebbfdca75e50e7c0f61))


### Features

* add oauth ([3e7798e](https://github.com/restorecommerce/libs/commit/3e7798e3aa10ef092872928f5254cd5fbb125f3b))





# [0.5.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.11...@restorecommerce/protos@0.5.0) (2022-01-28)


### Bug Fixes

* **fix generated interfaces: convert snake_case to camelcase:** snake_case to camelCase ([bf78c27](https://github.com/restorecommerce/libs/commit/bf78c27a1e776d716c711c0b633acd7609ca4561))


### Features

* **add protos for fulfillment-product solution proposals:** packsol ([ce6f78f](https://github.com/restorecommerce/libs/commit/ce6f78f34a39924aa30c50857ad751b9ac3be396))


### BREAKING CHANGES

* **add protos for fulfillment-product solution proposals:** fulfillment.proto, fulfillment-courier.proto and fulfillment-product.proto have
changed completely





## [0.4.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.10...@restorecommerce/protos@0.4.11) (2021-12-09)


### Bug Fixes

* **protos:** updated access_control proto to include `obligation` in isAllowed and whatIsAllowed response. ([c2af601](https://github.com/restorecommerce/libs/commit/c2af60104bf8cbcde9296ee99a374b6bdddb132a))





## [0.4.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.9...@restorecommerce/protos@0.4.10) (2021-12-06)


### Bug Fixes

* **protos:** fixed import and reference errors ([6efb6b1](https://github.com/restorecommerce/libs/commit/6efb6b1954bf6449f8c58e267f959b22c45e8066))
* **protos:** updated graph proto to include operation status ([dcf0a39](https://github.com/restorecommerce/libs/commit/dcf0a3920bcfd098efdd42d6186864359025b1fd))





## [0.4.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.8...@restorecommerce/protos@0.4.9) (2021-11-08)


### Bug Fixes

* **protos:** rename sourcePath to sourceObject for Move api ([11c5049](https://github.com/restorecommerce/libs/commit/11c504939fc22005c22dc28b3b6886684a1224c3))





## [0.4.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.7...@restorecommerce/protos@0.4.8) (2021-11-05)


### Bug Fixes

* **protos:** fix move response ([c6c16c1](https://github.com/restorecommerce/libs/commit/c6c16c1b0f86656fc29a240876fde9207debd335))
* **protos:** updated ostorage protos listRequest adding max_keys and prefix, added move api ([9854365](https://github.com/restorecommerce/libs/commit/9854365e7ba486edce922704af7539a5ba9a1095))





## [0.4.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.6...@restorecommerce/protos@0.4.7) (2021-10-25)


### Bug Fixes

* **protos:** restructured payment proto ([b5a8703](https://github.com/restorecommerce/libs/commit/b5a8703a7818cc233e579fa9bb0e5f0bba8b0492))





## [0.4.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.5...@restorecommerce/protos@0.4.6) (2021-10-19)


### Bug Fixes

* **protos:** updated context query filters ([0ae3bd8](https://github.com/restorecommerce/libs/commit/0ae3bd8e385c1f3dedb2be1587c678ada7151ec5))





## [0.4.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.4...@restorecommerce/protos@0.4.5) (2021-10-07)


### Bug Fixes

* **protos:** Added ACL property for meta object and subject for OStorage Message ([d97b2f3](https://github.com/restorecommerce/libs/commit/d97b2f37f741d70bb808b93571e5088cf8ebddd7))





## [0.4.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.3...@restorecommerce/protos@0.4.4) (2021-08-23)


### Bug Fixes

* **protos:** updated ostorage protos with status and operation_status ([cc48214](https://github.com/restorecommerce/libs/commit/cc48214f21b83d42fb9cd1f1e9713c8fa6005ac2))





## [0.4.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.2...@restorecommerce/protos@0.4.3) (2021-08-03)


### Bug Fixes

* comment test proto ([9ee91c4](https://github.com/restorecommerce/libs/commit/9ee91c4a3302e8b5b9eae1e63734625a1fc8f4a0))
* up githead for acs-client, protos, facade ([6a50326](https://github.com/restorecommerce/libs/commit/6a503266498ef5d0e998e93b639dedd843fbfd5d))
* up version to detech changes ([b8c0517](https://github.com/restorecommerce/libs/commit/b8c05170241cfe0d3c84e08ce35ddb7dce2ba00a))
* updated githead ([2904d30](https://github.com/restorecommerce/libs/commit/2904d30e5773dc8a87c01a08ff6481f99d692354))






## [0.4.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.1...@restorecommerce/protos@0.4.2) (2021-08-03)


### Bug Fixes

* **acs-client:** return operation_status for read operations ([32b96fb](https://github.com/restorecommerce/libs/commit/32b96fb4a809a14eca8020553baec4ba348841c8))
* **protos:** fix find and findByRole for user proto ([e0cebb3](https://github.com/restorecommerce/libs/commit/e0cebb321e3660c3a0c6211350f174d0ecf1503c))
* **protos:** fix Register, login and findByToken response message ([472d878](https://github.com/restorecommerce/libs/commit/472d878ac0152b8a42201951401300a82f4f5fc4))
* **protos:** removed unused protos ([c3b54c0](https://github.com/restorecommerce/libs/commit/c3b54c0c0208da448cc11b728fcfb7307cccfd3f))
* **protos:** up IDS RPC's to include status response and added statusObj ([5b525ab](https://github.com/restorecommerce/libs/commit/5b525ab4b5c04913f153ae3fc666936b593e520a))
* **rc-grpc-clients:** generated grpc-clients for updated protos ([0fdf4bb](https://github.com/restorecommerce/libs/commit/0fdf4bb627fe2ebaf53f19041ebf7ae522e6cc2a))





## [0.4.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.4.0...@restorecommerce/protos@0.4.1) (2021-05-31)

**Note:** Version bump only for package @restorecommerce/protos





# [0.4.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.3.3...@restorecommerce/protos@0.4.0) (2021-05-28)


### chore

* updated protos ([bb8674a](https://github.com/restorecommerce/libs/commit/bb8674aa5b561441790276081469e66d52e8d5c7))


### BREAKING CHANGES

* Filter migration





## [0.3.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.3.2...@restorecommerce/protos@0.3.3) (2021-05-25)

**Note:** Version bump only for package @restorecommerce/protos





## [0.3.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.3.1...@restorecommerce/protos@0.3.2) (2021-05-24)

**Note:** Version bump only for package @restorecommerce/protos





## [0.3.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.3.0...@restorecommerce/protos@0.3.1) (2021-02-24)

**Note:** Version bump only for package @restorecommerce/protos





# 0.3.0 (2021-02-24)


### Features

* introduce facade/grpc-client/rc-grpc-clients/gen-gql-schema + migrate logger/service-config ([99a5375](https://github.com/restorecommerce/libs/commit/99a53754c7a4b27c77f81c6560a3c2aa26a03b2e))




### 0.0.22 (March 4th, 2021)

- updated job proto to introduce job identifier for Job options and repeat options

### 0.0.21 (February 24th, 2021)

- add `OstorageMessage` to `ostorage.proto`

### 0.0.20 (January 21st, 2021)

- rename `notification.proto` to `notification_req.proto` as this is being 
required for the notification resource.
- add `notification_channel.proto` and `notification.proto`

### 0.0.19 (January 19th, 2021)

- added `sendActivationEmail` to resend registration emails

### 0.0.18 (January 19th, 2021)

- changed the input field to `identifier` to support both user-name and email for all operations from `id`.

### 0.0.17 (December 4th, 2020)

- moved last_login from user proto to token proto

### 0.0.16 (November 22nd, 2020)

- added role_associations and HR scopes to subject

### 0.0.15 (November 18th, 2020)

- removed duplicate field from graph proto

### 0.0.14 (November 18th, 2020)

- updated graph proto to rename vertex fields
- updated user proto to remove populateRoleAssocCache rpc, updated token proto to remove findByUid and findByuserCode, added token_type to Tokens and moved HRScopeReq and Response from user proto to auth proto
- added interactive flag for tokens
- up token type and expires in fields to match oidc keys

### 0.0.13 (October 30th, 2020)

- removed ApiKey from oneof authorization for requests and restructured subject

### 0.0.12 (October 14th, 2020)

- updated ostorage proto to include data (google.protobuf.any) in options
- update rule and policy proto with field evaluation_cacheable

### 0.0.11 (October 3rd, 2020)

- restructuring of user proto

### 0.0.10 (October 2nd, 2020)

- restructuring of protos (auth, tokens, attributes)
- added token and authenticaion_log proto
- updated user proto to include last_login and last_access

### 0.0.9 (September 9th, 2020)

- updated all protos to include subject in request
- updated user proto to include subject, tokens and HR scope request

### 0.0.8 (June 18th, 2020)

- added copy operation for ostorage-srv

### 0.0.7 (June 16th, 2020)

- added subject_id for job protos

### 0.0.6 (June 10th, 2020)

- added sendInvitation rpc for user proto
- updates for fulfillment proto

### 0.0.5 (April 16th, 2020)

- added tags option to ostorage proto

### 0.0.4 (April 1st, 2020)

- added download option to ostorage proto

### 0.0.3 (March 24th, 2020)

- updated ostorage protos to include encoding and content options
- updates for payment proto

### 0.0.2 (February 10th, 2020)

Updated user proto to include auth_context and roles proto to include `assignable_by_roles` field

### 0.0.1 (January 29th, 2020)

Initial share
