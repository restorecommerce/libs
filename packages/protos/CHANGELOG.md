# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/restorecommerce/libs/compare/@restorecommerce/protos@0.3.0...@restorecommerce/protos@0.3.1) (2021-02-24)

**Note:** Version bump only for package @restorecommerce/protos





# 0.3.0 (2021-02-24)


### Features

* introduce facade/grpc-client/rc-grpc-clients/gen-gql-schema + migrate logger/service-config ([99a5375](https://github.com/restorecommerce/libs/commit/99a53754c7a4b27c77f81c6560a3c2aa26a03b2e))





### 0.0.14 (November 4th, 2020)

- renamed vertex fields

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
