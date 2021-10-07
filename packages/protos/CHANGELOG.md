# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

Initial share.
