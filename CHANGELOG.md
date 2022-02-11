### 0.2.6 (February 11th, 2022)

- updated dependencies

### 0.2.5 (February 7th, 2022)

- fix for strategy for fields for updated redis

### 0.2.4 (January 28th, 2022)

- remove bluebird and updated redis

### 0.2.3 (January 28th, 2022)

- fix traversal for changes in proto structure and updated tests
- updated dependencies

### 0.2.2 (December 22nd, 2021)

- updated RC dependencies

### 0.2.1 (December 9th, 2021)

- updated dependencies

### 0.2.0 (August 4th, 2021)

- updated create (to remove edgeDef creation) and delete method to match new proto structure response
- generate status array for create and update operations and up tests
- generate status array for upsert and improve error handling
- added status array for delete response
- filter structure changes
- updated grpc-client for tests, fix for filter handling (enum mapping), added error array to all tests

### 0.1.1 (May 18th, 2021)

- improved logging

### 0.1.0 (April 27th, 2021)

#### Contains breaking changes!

- switch to kafkajs
- change config format for events
- updated dependencies

### 0.0.9 (March 19th, 2021)

- fix create and update to support inbound edges
- updated depencies

### 0.0.8 (March 12th, 2021)

- changes to the graph traversal streaming API

### 0.0.7 (February 11th, 2021)

- updated dependencies

### 0.0.6 (November 18th, 2020)

- renamed fields _id, _rev, _key in graph proto
- updated dependencies

### 0.0.5 (August 19th, 2020)

- updated RC dependencies

### 0.0.4 (July 8th, 2020)

- updated grpc-client, kafka-client and other dependencies

### 0.0.3 (June 23rd, 2020)

- fix for read operation when filter is array

### 0.0.2 (June 10th, 2020)

- Updated dependencies
- fix for null check when decoding the strcut value (in case of $Or operator its possible that not all values are present)

### 0.0.1 (January 29th, 2020)

Initial share.
