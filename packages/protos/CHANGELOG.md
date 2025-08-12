# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.11.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.7...@restorecommerce/protos@6.11.8) (2025-08-12)


### Bug Fixes

* **protos:** add customer-vat-id to invoice ([716b724](https://github.com/restorecommerce/libs/commit/716b724d54591c64cd16b7fcd540e3df6271a1bf))
* **protos:** fulfillment add render func, invoice needs shipping address ([87ea330](https://github.com/restorecommerce/libs/commit/87ea330a27c3486058a9c515f89a40f227261941))





## [6.11.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.6...@restorecommerce/protos@6.11.7) (2025-06-04)


### Bug Fixes

* **proto:** invoice position with valid time frame as timestamp ([e913f69](https://github.com/restorecommerce/libs/commit/e913f69e32d7aff550eae3cf7d5120092d883aa5))





## [6.11.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.5...@restorecommerce/protos@6.11.6) (2025-06-02)


### Bug Fixes

* **proto:** add currency code ([069d9cb](https://github.com/restorecommerce/libs/commit/069d9cb4c7c738d648d6f4aaf769db448ed7f904))





## [6.11.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.4...@restorecommerce/protos@6.11.5) (2025-05-23)


### Bug Fixes

* **protos:** fix typos ([1432953](https://github.com/restorecommerce/libs/commit/1432953e3fd80488f90b8b71c7c5dfe9cb3e24ee))





## [6.11.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.3...@restorecommerce/protos@6.11.4) (2025-05-23)


### Bug Fixes

* **protos:** bundle product should have valid time frame too ([8670be0](https://github.com/restorecommerce/libs/commit/8670be0354b8bb0bfe239c14db81a6eb494b60a8))
* **protos:** link data nodes: country, localization, timezones ([fc5f226](https://github.com/restorecommerce/libs/commit/fc5f22616dedc403c170f1fd531542e19b64a78f))





## [6.11.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.2...@restorecommerce/protos@6.11.3) (2025-05-19)


### Bug Fixes

* **protos:** add persistent export information ([680ff84](https://github.com/restorecommerce/libs/commit/680ff8499f927812dd906304137b6d7be493e058))





## [6.11.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.1...@restorecommerce/protos@6.11.2) (2025-05-14)


### Bug Fixes

* **protos:** add collection (name) to message Deleted for kafka DeletedAll event ([807ca4c](https://github.com/restorecommerce/libs/commit/807ca4cce3624720c6a2436afdee407ec181029c))
* **protos:** add costums declaration to fulfillment ([0797faa](https://github.com/restorecommerce/libs/commit/0797faa53388cbc81340203d58c92340f7443514))
* **protos:** fix typos in proto, load meta in acs decorater, refactor logger filePath detector ([8f02eee](https://github.com/restorecommerce/libs/commit/8f02eee6460b9c48f2f8416b08017f6ba11caf4e))





## [6.11.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.11.0...@restorecommerce/protos@6.11.1) (2025-03-31)


### Bug Fixes

* **proto:** add layout to rendering template array ([bcf636f](https://github.com/restorecommerce/libs/commit/bcf636f3ea19662a9f30b110137976eda60a0abb))
* **protos:** rename template use-cases ([0a578ac](https://github.com/restorecommerce/libs/commit/0a578ac076b5f5ba2fcb784d8b9db3ba76168943))
* **protos:** render response with repeated bodies ([a2f4df9](https://github.com/restorecommerce/libs/commit/a2f4df979155721ba50af264648c41e99e5a2224))
* **protos:** resolve enum error ([22b33a1](https://github.com/restorecommerce/libs/commit/22b33a18e5504ef5a0f00a653dadcbc69ad81277))





# [6.11.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.5...@restorecommerce/protos@6.11.0) (2025-03-28)


### Bug Fixes

* **proto:** add order history ([6bce016](https://github.com/restorecommerce/libs/commit/6bce0168697c92fbd8f152cb4d94103bf7525851))
* **proto:** add timestamps for order state changes ([07abde8](https://github.com/restorecommerce/libs/commit/07abde805f102f229adf0d5d17cc85d89e44b8a9))
* **proto:** generic string for template.use_case ([7163625](https://github.com/restorecommerce/libs/commit/71636251c1f40a447b2dde72a26b0abcbca56709))
* **protos:** add history to orders ([e1991c8](https://github.com/restorecommerce/libs/commit/e1991c8024d7248863676bff12b6f4eedbf5f666))


### Features

* **protos:** adjust rendering to comply with RC message pattern ([abf6d2c](https://github.com/restorecommerce/libs/commit/abf6d2c8ad1a5331a5793b5d25c74590b45c1210))





## [6.10.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.4...@restorecommerce/protos@6.10.5) (2025-01-21)


### Bug Fixes

* add mfa status endpoint for users ([5583877](https://github.com/restorecommerce/libs/commit/5583877eac9150b0768ca00f8978bf2a13c1b074))





## [6.10.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.3...@restorecommerce/protos@6.10.4) (2025-01-10)


### Bug Fixes

* **protos:** add backup and reset for totp ([5a680c9](https://github.com/restorecommerce/libs/commit/5a680c930140e4f06f57038848f512844f3e2603))
* **proto:** template more use-cases ([e17251f](https://github.com/restorecommerce/libs/commit/e17251fcbe21d04842e0638721683ee90c2ecfff))





## [6.10.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.2...@restorecommerce/protos@6.10.3) (2024-11-20)


### Bug Fixes

* **protos:** mark ordering EvaluateFulfillment and QueryFulfillmentSolution as Query ([4ab2e7e](https://github.com/restorecommerce/libs/commit/4ab2e7ed2eb3ecb520a669772a835b05482bcce0))





## [6.10.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.1...@restorecommerce/protos@6.10.2) (2024-11-19)


### Bug Fixes

* **proto:** add auto-resolver options to currency ([bb20527](https://github.com/restorecommerce/libs/commit/bb20527e30726f2be86f2c93ab9e166cb40c341d))





## [6.10.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.10.0...@restorecommerce/protos@6.10.1) (2024-11-13)


### Bug Fixes

* **proto:** add required imports ([b001756](https://github.com/restorecommerce/libs/commit/b001756afd7eeff05edf4579e180fc9f40d5f36b))
* **proto:** add valid time frame for products ([d9561d8](https://github.com/restorecommerce/libs/commit/d9561d8cd3b50d3117d1f28ccf3f27ef3044b984))
* **protos:** fix typo ([fc450a0](https://github.com/restorecommerce/libs/commit/fc450a07fe222c5b6d9b56f6b4b1c86ca1a2dbfe))
* **protos:** taxes add round_mode, some taxes may have special rules for rounding ([3f89136](https://github.com/restorecommerce/libs/commit/3f891361f5725bad95be88381b7eb4e5aa4a565e))





# [6.10.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.9.2...@restorecommerce/protos@6.10.0) (2024-11-12)


### Features

* **protos:** add password hash history to user ([f7443ab](https://github.com/restorecommerce/libs/commit/f7443abdda1b8616d22df53edb5197234d390cb6))





## [6.9.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.9.1...@restorecommerce/protos@6.9.2) (2024-11-08)


### Bug Fixes

* **protos:** functions besides CRUD are not allowed in standard resources ([da2c384](https://github.com/restorecommerce/libs/commit/da2c3844798c8f3f2cf1ed53bbb6f867b7e3f194))





## [6.9.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.9.0...@restorecommerce/protos@6.9.1) (2024-11-06)


### Bug Fixes

* **proto:** fulfillment_product, set correct field number ([70b6fb5](https://github.com/restorecommerce/libs/commit/70b6fb585439e54b28756d2eefe0a5bd0edd5131))
* **protos:** add customer_order_nr to invoicing ([19a14f9](https://github.com/restorecommerce/libs/commit/19a14f983ada1f5fd5146fc4814a7a437ac97237))
* **protos:** add setting resource, enrich templates ([63fe572](https://github.com/restorecommerce/libs/commit/63fe572c3a52581591aed5ff96faee23fb73e459))
* **protos:** selectable document_ids for send ([bcb2910](https://github.com/restorecommerce/libs/commit/bcb2910fe67bcd2142a86a4a41647bc4b8a28585))
* **protos:** shop settings intermediate ([1ddefcc](https://github.com/restorecommerce/libs/commit/1ddefcc5e7594cefbc9b97694715f76e85718704))





# [6.9.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.12...@restorecommerce/protos@6.9.0) (2024-11-05)


### Features

* **protos:** add totp to users ([ce20a36](https://github.com/restorecommerce/libs/commit/ce20a36775b0a82aaa14e5762c97fe3c19d09ab3))





## [6.8.12](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.11...@restorecommerce/protos@6.8.12) (2024-11-04)


### Bug Fixes

* **protos:** rename Packing --> Fulfillment ([9f87591](https://github.com/restorecommerce/libs/commit/9f87591bd8549028ab57cf3aaf5bc1c26bd12f9b))





## [6.8.11](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.10...@restorecommerce/protos@6.8.11) (2024-09-23)


### Bug Fixes

* **protos:** add Deleted message to resource-base for general usage ([9d1fbab](https://github.com/restorecommerce/libs/commit/9d1fbabb233caebc24b73f31ccf572403bac66c3))
* **protos:** health check should have query flag ([58117a3](https://github.com/restorecommerce/libs/commit/58117a3ae596e347a7de5e7f19101bd877fbce86))
* **ptotos:** add currency.precision i.e (-2) ==> 1.00 ([ca84487](https://github.com/restorecommerce/libs/commit/ca844877909249584f795163812cc5bbebc16d07))





## [6.8.10](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.9...@restorecommerce/protos@6.8.10) (2024-08-26)


### Bug Fixes

* **decorator:** add decorator subject resolver, add query flag to odering.evaluate ([3e1064d](https://github.com/restorecommerce/libs/commit/3e1064d0aaf61ec3e149511b756f7f037ab2bc70))
* **protos:** flag graph traversal as query ([2359c1a](https://github.com/restorecommerce/libs/commit/2359c1a2be5b9bcf832d635ea18fc89a9c880eeb))





## [6.8.9](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.8...@restorecommerce/protos@6.8.9) (2024-08-14)


### Bug Fixes

* **oauth:** flag oauth queries, make shop domain repeatable ([7d3eaac](https://github.com/restorecommerce/libs/commit/7d3eaac1037729adf2ba5dc1bbef2021ca56fac6))





## [6.8.8](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.7...@restorecommerce/protos@6.8.8) (2024-07-24)


### Bug Fixes

* **customer_type:** move CustomerType enum to customer.proto ([533a28f](https://github.com/restorecommerce/libs/commit/533a28f968cd3b7b8e3f57cca713c90d6092df1b))
* **order.proto:** add customer_type and customer_vat_id ([0885d85](https://github.com/restorecommerce/libs/commit/0885d8598b766e4088fc40b8075a860c647a5993))
* **order.proto:** add payment_method_id ([5517842](https://github.com/restorecommerce/libs/commit/5517842726f197d1f39ea6f93908db27f663a600))





## [6.8.7](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.6...@restorecommerce/protos@6.8.7) (2024-05-10)


### Bug Fixes

* **read:** set missing query flag for facade ([f82bbc9](https://github.com/restorecommerce/libs/commit/f82bbc986f5b8cf4e69f0e55ca83be7d7f45e2e9))





## [6.8.6](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.5...@restorecommerce/protos@6.8.6) (2024-05-07)


### Bug Fixes

* **fulfillment_courier:** add credential_id ([f9a4608](https://github.com/restorecommerce/libs/commit/f9a4608289d2ae6b7b76346e39c550a05b2b7eb4))
* **protos:** notification and notification_channel proto files ([a98ad17](https://github.com/restorecommerce/libs/commit/a98ad17181c1dd69779be37c1250f4ad336f9a43))





## [6.8.5](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.4...@restorecommerce/protos@6.8.5) (2024-04-26)


### Bug Fixes

* **facade:** add templates, fix rc-grpc-client generate command ([a029445](https://github.com/restorecommerce/libs/commit/a029445c2a91226bfc1453a41913f7a95c9264fa))





## [6.8.4](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.3...@restorecommerce/protos@6.8.4) (2024-04-25)


### Bug Fixes

* **template.proto:** add template resource ([fdc5dc2](https://github.com/restorecommerce/libs/commit/fdc5dc21e00f36b434b0fcb41276f674accb80fc))
* **template:** fix imports ([a981ad3](https://github.com/restorecommerce/libs/commit/a981ad343e5003f184edeff5863ea1d2631dd4c6))
* **templates:** fix templates, add settings to customer ([e726970](https://github.com/restorecommerce/libs/commit/e726970c27ec8b323e667fff37d90f76b0ed0365))





## [6.8.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.2...@restorecommerce/protos@6.8.3) (2024-04-23)


### Bug Fixes

* **acs-client:** add obligations and custom-query to decorators, add pdf-rendering.proto ([d84995d](https://github.com/restorecommerce/libs/commit/d84995d965136ffde44afe9f42b962f61bcd2173))





## [6.8.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.1...@restorecommerce/protos@6.8.2) (2024-04-19)


### Bug Fixes

* **ordering:** remove fulfillment state and payment state from order ([73ab259](https://github.com/restorecommerce/libs/commit/73ab25928fb7ce3cc9b19e7ac06cda31b2f0f78e))
* **protos:** rename State to FulfillmentState ([4debc8b](https://github.com/restorecommerce/libs/commit/4debc8bfcb7e870ca827826cb3d58c2f6aa20840))





## [6.8.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.8.0...@restorecommerce/protos@6.8.1) (2024-04-15)


### Bug Fixes

* **order_state:** remove FAILED and INVALID from order_state ([6a0c6bf](https://github.com/restorecommerce/libs/commit/6a0c6bfb54d00e5c169bd2d688f773baff8a88c8))
* **product:** add missing imports for resolver ([be68bdf](https://github.com/restorecommerce/libs/commit/be68bdfa5a281454a641808895bd227cdbc6e605))
* **timezone:** more information in timezone, fix invalid resolver on product.taxIds ([106ef81](https://github.com/restorecommerce/libs/commit/106ef81533ce279129c5d8be89f7070382a705da))





# [6.8.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.7.0...@restorecommerce/protos@6.8.0) (2024-03-05)


### Features

* **protos:** add tax_ids to Product.Variant, parenting in Order.Items ([2d66f4a](https://github.com/restorecommerce/libs/commit/2d66f4ac8831c84fd624d38c6a8e190f69a85703))





# [6.7.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.6.0...@restorecommerce/protos@6.7.0) (2024-01-24)


### Features

* unauthenticated tokens ([fe89507](https://github.com/restorecommerce/libs/commit/fe895071c137bf15c68c03f1c5545612f2614bdc))





# [6.6.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.4.1...@restorecommerce/protos@6.6.0) (2024-01-10)


### Features

* **user.proto:** add properties to UserRole ([82b408c](https://github.com/restorecommerce/libs/commit/82b408ca4ba2c673d58b32a99e0705b3d0ad87c1))





# [6.5.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.4.1...@restorecommerce/protos@6.5.0) (2023-12-22)


### Features

* **user.proto:** add properties to UserRole ([82b408c](https://github.com/restorecommerce/libs/commit/82b408ca4ba2c673d58b32a99e0705b3d0ad87c1))





## [6.4.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.4.0...@restorecommerce/protos@6.4.1) (2023-11-25)


### Bug Fixes

* **facade:** fix to send client_id in token find response(this will be persisted to DB from token payload on identity-srv) ([0ebf12f](https://github.com/restorecommerce/libs/commit/0ebf12f4b7bb82e00ef878dc76c26576ad95ea76))
* **fulfillment.proto:** references should be list ([d9af066](https://github.com/restorecommerce/libs/commit/d9af0667024cc9356bfa3e786a2a4bf610c7c4db))





# [6.4.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.3.0...@restorecommerce/protos@6.4.0) (2023-11-22)


### Features

* **proto:** add queue name to job protos ([0c09086](https://github.com/restorecommerce/libs/commit/0c09086c7e41a7759a62970ad182d9816c30e773))





# [6.3.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.2.3...@restorecommerce/protos@6.3.0) (2023-11-22)


### Bug Fixes

* added created_by field to meta of proto ([3896a40](https://github.com/restorecommerce/libs/commit/3896a407365e8ae7ca4f37fab1369b31861a9aa9))


### Features

* **proto:** ordering-srv submit response now includes fulfillments and invoices ([146dc70](https://github.com/restorecommerce/libs/commit/146dc70bef2c8a87fded0caff4816b0f428c878b))





## [6.2.3](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.2.2...@restorecommerce/protos@6.2.3) (2023-11-15)


### Bug Fixes

* **protos:** changed expries_in to timestamp and regenerated schema ([b519d8d](https://github.com/restorecommerce/libs/commit/b519d8d54cc39ecd9804401698fd452c219336a5))





## [6.2.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.2.1...@restorecommerce/protos@6.2.2) (2023-11-14)


### Bug Fixes

* **proto:** changed expires_in and last_access on token and user proto respectively to google.protobuf.Time and regenrated types and schema. ([c3c4701](https://github.com/restorecommerce/libs/commit/c3c4701c01d9243cc26c20f52298ef9ee56e511e))





## [6.2.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.2.0...@restorecommerce/protos@6.2.1) (2023-11-01)


### Bug Fixes

* **protos:** update order kafka topic ([d302554](https://github.com/restorecommerce/libs/commit/d30255408bfc4246478457fbd780fbcbb6d8aa5b))





# [6.2.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.1.2...@restorecommerce/protos@6.2.0) (2023-10-14)


### Bug Fixes

* **proto:** fix user proto ([edbcd77](https://github.com/restorecommerce/libs/commit/edbcd77af9db0de1f1fab90148740983b42a6b3a))
* **proto:** update user proto to provide google protobuf any data for register request ([3b2e871](https://github.com/restorecommerce/libs/commit/3b2e871f839dd1cffb6ff1cea037911d3ae0aa9c))


### Features

* **acs-decorators:** add decorators for simple access control ([713a464](https://github.com/restorecommerce/libs/commit/713a46409c79371d7b0940cb4aa448cbe8abaf5a))


### Reverts

* **access_control.proto:** revert enum order ([8aaa4e6](https://github.com/restorecommerce/libs/commit/8aaa4e63675ec2bd040602236ff82b0fe80e6d14))





## [6.1.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.1.1...@restorecommerce/protos@6.1.2) (2023-09-28)

**Note:** Version bump only for package @restorecommerce/protos





## [6.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.1.0...@restorecommerce/protos@6.1.1) (2023-09-18)

**Note:** Version bump only for package @restorecommerce/protos





# [6.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@6.0.0...@restorecommerce/protos@6.1.0) (2023-09-18)


### Bug Fixes

* **fulfillment_courier:** shop_ids should be repeated ([b9bfa2e](https://github.com/restorecommerce/libs/commit/b9bfa2ec37385fa29bfc4e061eb8faaa3ae97635))
* **fulfillment:** fix fulfillment protos ([8c2ed99](https://github.com/restorecommerce/libs/commit/8c2ed99168ff7bb14b61657cd1264a8a1d6760a4))
* **product.proto:** add missing optional modifiers in product.proto ([9b85ee5](https://github.com/restorecommerce/libs/commit/9b85ee5eb7efd98a5c1a7f9d540702f11908f8c1))


### Features

* **protos:** made all fields optional ([09e6f94](https://github.com/restorecommerce/libs/commit/09e6f9440a44160b6f5b3fd548d6a289b1ab7004))
* regenrate rc-grpc-clients with initializeFieldsAsUndefined as false and fixed facade typings ([685d9b5](https://github.com/restorecommerce/libs/commit/685d9b5be92833ba475f46c6b0d4234ac7125211))





# [6.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@5.0.1...@restorecommerce/protos@6.0.0) (2023-08-01)


### Bug Fixes

* **fulfillment, order, price, product, shop:** fix missing resolvers, enum style guide, naming ([103172c](https://github.com/restorecommerce/libs/commit/103172c9b2e1544a88257cededc1b39a2731fd8c))


### BREAKING CHANGES

* **fulfillment, order, price, product, shop:** changes in product require adjustments in example data





## [5.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@5.0.0...@restorecommerce/protos@5.0.1) (2023-07-25)


### Bug Fixes

* **fulfillment_product:** productQueryList uses reference_id:string instead of reference:Reference ([278afa8](https://github.com/restorecommerce/libs/commit/278afa89b5359765420744e1debca2387e366e15))





# [5.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@4.2.0...@restorecommerce/protos@5.0.0) (2023-07-21)


### Bug Fixes

* **invoice:** fix misstyped import, regenerate types ([88fe1fd](https://github.com/restorecommerce/libs/commit/88fe1fd55cec8f488d17bb8c60f9a34fa07455fe))
* **product, invoice:** add and use Properties in Product and Invoice ([ecd5a01](https://github.com/restorecommerce/libs/commit/ecd5a013f742761c2aa5944318c6f9e2450dce81))


### BREAKING CHANGES

* **product, invoice:** Code and data regarding to Attibutes in Product and Invoice must be fixed





# [4.2.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@4.1.1...@restorecommerce/protos@4.2.0) (2023-07-21)


### Features

* **protos:** add property type ([397aaaa](https://github.com/restorecommerce/libs/commit/397aaaae8b02459b816d71d6c4e161da8da0b3f1))
* **protos:** updated property proto for capital case and removed unused proto messages ([c185814](https://github.com/restorecommerce/libs/commit/c18581474ea98e45bf91e9029a701117aeb72a11))
* **rc-grpc-clients, facade:** regnerated typings due to changes in proto files ([df3f100](https://github.com/restorecommerce/libs/commit/df3f10038e10842b77e8fa6cd523d4870dfa2683))





## [4.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@4.1.0...@restorecommerce/protos@4.1.1) (2023-07-12)


### Bug Fixes

* **fulfillment, invoice, organization.proto:** fix typos in invoice, fulfillment and organization ([8d64222](https://github.com/restorecommerce/libs/commit/8d64222d3cbca44a0c9d4e265431d26aaac20223))





# [4.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@4.0.1...@restorecommerce/protos@4.1.0) (2023-07-11)


### Bug Fixes

* **timestamps:** fix invoice date type by timestamp, add payment_details to invoice trigger request ([139ab69](https://github.com/restorecommerce/libs/commit/139ab69ba1d4739386ac2844d1e1f98c2046b98e))


### Features

* **invoicing:** invoicing supports FulfillmentProducts ([d0684cf](https://github.com/restorecommerce/libs/commit/d0684cf4773ecc2aa0f807bb8c4be1a21a62caab))





## [4.0.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@4.0.0...@restorecommerce/protos@4.0.1) (2023-06-29)


### Bug Fixes

* **protos:** Make name, email and password mandatory for register request ([64165c1](https://github.com/restorecommerce/libs/commit/64165c1875fe1c9ccd319513671334b625dce20c))





# [4.0.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@3.1.2...@restorecommerce/protos@4.0.0) (2023-06-28)


### Bug Fixes

* correct protos, facade calls, apollo route ([ff52c38](https://github.com/restorecommerce/libs/commit/ff52c38ee4e6c6236747d6921361b5e4131384a2))
* **fix orga:** fix numbers in orga ([72c3885](https://github.com/restorecommerce/libs/commit/72c3885938fb5311222e3d75c64d45d25925e289))
* **fulfillment.proto:** use Price everywhere ([c2a2cb5](https://github.com/restorecommerce/libs/commit/c2a2cb57cb84eac9e046413fc5f41dec7efc1132))
* **fulfillment:** fix type errors ([615ab2c](https://github.com/restorecommerce/libs/commit/615ab2cf738708d8dffd20343ebf0953a0da7a78))


### Features

* **currency.proto:** add currency proto, update invoice.proto ([988d161](https://github.com/restorecommerce/libs/commit/988d161913d01fc88d383810a2bd963e9c75a2f8))
* **invoice.proto:** adjust invoice.proto to ordering-srv and fulfillment-srv ([71ee108](https://github.com/restorecommerce/libs/commit/71ee1088eec9fc54b61ab189e988504180687902))
* **invoice:** support multiple orders and fulfillments per invoice ([e2092a0](https://github.com/restorecommerce/libs/commit/e2092a081d886722fc7112a760b9a3a3fa434519))
* **shop.proto:** add shop.proto, remove double addresses and more ([a872677](https://github.com/restorecommerce/libs/commit/a8726777447cf443809f3d7eba7d808e7339bbba))


### BREAKING CHANGES

* **invoice:** invoice has repeated references
* **fulfillment.proto:** ordering, fulfillment, invoice
* **currency.proto:** Significant changes in Invoice
* **invoice.proto:** The invoicing-srv must be refactored!
* **shop.proto:** significant changes in product.proto, order, organization, invoice, tax_type,
fulfillment, customer, contact_point





## [3.1.2](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@3.1.1...@restorecommerce/protos@3.1.2) (2023-06-16)

**Note:** Version bump only for package @restorecommerce/protos





## [3.1.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@3.1.0...@restorecommerce/protos@3.1.1) (2023-06-14)

**Note:** Version bump only for package @restorecommerce/protos





# [3.1.0](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@3.0.1...@restorecommerce/protos@3.1.0) (2023-06-02)


### Features

* add unit codes ([95b4d36](https://github.com/restorecommerce/libs/commit/95b4d3635a4ef8670f3400271a9ccfb92b7fcf98))





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
