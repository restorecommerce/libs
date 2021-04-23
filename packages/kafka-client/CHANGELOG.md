### 0.2.0 (April 23rd, 2021)

#### Contains breaking changes!

* rewrite to use kafkajs library
* changed config format
* `topic()` function now returns a promise
* updated dependencies

### 0.1.13 (November 18th, 2020)

- updated dependencies

### 0.1.12 (August 19th, 2020)

- updated logger

### 0.1.11 (August 17th, 2020)

- fix to close opened kafka connections on retry

### 0.1.10 (July 8th, 2020)

- updated dependencies

### 0.1.9 (April 26th, 2020)

- fix to handle error when decoding protobuf message

### 0.1.8 (January 29th, 2020)

- migration from tslint to eslint and restructured src files 

### 0.1.7 (November 18th, 2019)

- logging enhancements

### 0.1.6 (November 18th, 2019)

- updated dependencies and enhanced logging

### 0.1.5 (October 2st, 2019)

- updated "@restorecommerce/logger": "^0.1.11"

### 0.1.4 (October 1st, 2019)

- added buffer fields decoding and option for logging those fields

### 0.1.3 (September 26th, 2019)

- added retry mechanism for start up if `kafka` is down

### 0.1.2 (July 23rd, 2019)

- prevent lib folder being published to npm

### 0.1.1 (July 23rd, 2019)

- prevent .git folder being published to npm
- updated dependencies
