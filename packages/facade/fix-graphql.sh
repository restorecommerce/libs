#!/bin/bash

rm -rf node_modules/@restorecommerce/gen-gql-schema/node_modules/graphql
ln -s "$(pwd)/node_modules/graphql" node_modules/@restorecommerce/gen-gql-schema/node_modules/
