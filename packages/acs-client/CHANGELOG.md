# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.3.2 (2021-05-24)


### Bug Fixes

* **acs-client:** return AuthZ instance if already instantiated ([0a6cd98](https://github.com/restorecommerce/acs-client/commit/0a6cd98e2fb4ba4e95b57e1c44a6da0cfc410099))





### 0.3.1 (May 7th, 2021)

- return AuthZ instance if already instantiated
- update kafka-client

### 0.3.0 (April 27th, 2021)

#### Contains breaking changes!

- switch to kafkajs
- change config format for events
- updated dependencies

### 0.2.24 (March 23rd, 2021)

- up grpc-client and other dependencies

### 0.2.23 (December 4th, 2020)

- fix for validating boolean condition

### 0.2.22 (December 4th, 2020)

- fix for anauthenticated sub

### 0.2.21 (December 4th, 2020)

- fix to set unauthenticated to true on subject, when subject is null

### 0.2.20 (December 1st, 2020)

- fix to use prebuilt filter returned from validating condition

### 0.2.19 (November 22nd, 2020)

- removed the subjectID resolver from findByToken api
- readded HR scopes and role associations to Subject as optional fields

### 0.2.18 (November 19th, 2020)

- changest to pass only token and remove subject ID from Subject
- fix to resolve subject ID from token using findByToken of identity-srv

### 0.2.17 (October 29th, 2020)

- fix for unauthenticated user property check

### 0.2.16 (October 23rd, 2020)

- fix subject for acs-client

### 0.2.15 (October 20th, 2020)

- fix acs-client to resolve promise when data cached

### 0.2.14 (October 19th, 2020)

- fix for validating evaluation_cacheable for read operations

### 0.2.13 (October 14th, 2020)

- added evaluation_cacheable (if set to true then data from cache is served)
- up dependencies

### 0.2.12 (October 12th, 2020)

- fix not to reset filter

### 0.2.11 (October 8th, 2020)

- fix to validate subject ID and token

### 0.2.10 (October 4th, 2020)

- fix typo for redis key

### 0.2.9 (October 1st, 2020)

- fix for changes in redis key for HR scope

### 0.2.8 (September 22nd, 2020)

- fix to apply filter from rule condition

### 0.2.7 (September 14th, 2020)

- fix for flushCache to delete all keys

### 0.2.6 (September 9th, 2020)

- fix for empty check for HR / subject role associations

### 0.2.5 (September 9th, 2020)

- fix to pass only token_name in context subject

### 0.2.4 (September 6th, 2020)

- fix to pass only subject id and scope to access-control-srv (HR scope is constructed on acs-srv)

### 0.2.3 (August 19th, 2020)

- up logger, grpc-client and kafka-client

### 0.2.2 (August 11th, 2020)

- fix not to store value in cache if useCache is set to false 

### 0.2.1 (August 10th, 2020)

- option to use cache or ignore for ACS requests (by default cache is used)

### 0.2.0 (July 28th, 2020)

- changed accessrequest to use subject / apiKey instead of ctx
- fix for drop to use the resource entity name instead of mutation name.
- fix when input filter is not an array and when custom query is not applied
- fix to pass filter param key in config

### 0.1.10 (June 3rd, 2020)

- fixed drop action to use correct attribute identifier

### 0.1.9 (June 3rd, 2020)

- added DROP action

### 0.1.8 (May 27th, 2020)

- fixed typings and insert temporary IDs into resources

### 0.1.7 (May 25th, 2020)

- fix to remove meta data creation or updating in resource object

### 0.1.6 (May 11th, 2020)

- fix to support building filter permissions when HR scoping is enabled or disabled

### 0.1.5 (April 29th, 2020)

- fix not to apply filter if scoping instance is not defined in rule
- updated ACS response message to include target scope

### 0.1.4 (March 5th, 2020)

- flush ACS cache when rules / policies / policy sets are updated

### 0.1.3 (March 3rd, 2020)

- fixed bug in filtering
- improved response message

### 0.1.2 (February 27th, 2020)

- removed console log messages

### 0.1.1 (February 27th, 2020)

- fix for filter permissions

### 0.1.0 (February 24th, 2020)

- js files was not published for 0.0.9 

### 0.0.9 (February 24th, 2020)

- made TTL for ACS caching optional configuration

### 0.0.8 (February 13th, 2020)

- made the cache initialization to be explicit from application

### 0.0.7 (February 13th, 2020)

- removed redis client connectivity check as this should be independent from building docker images

### 0.0.6 (February 12th, 2020)

- modified caching for isAllowed requests not to include resource values for cache key

### 0.0.5 (February 12th, 2020)

- pushed the missing cache file

### 0.0.4 (February 10th, 2020)

- added caching for access control requests
- up logging and null checks

### 0.0.3 (February 5th, 2020)

- fix for api key mode for read operation

### 0.0.2 (February 5th, 2020)

- modified initAuthZ for providing config
- added execute action

### 0.0.1 (January 29th, 2020)

Initial share.
