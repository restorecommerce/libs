#!/usr/bin/env sh

set -ex

find ./src -type f -name "*.hbs" | cut -d'/' -f3- | xargs -I{} dirname {} | xargs -I{} mkdir -p ./dist/{}
find ./src -type f -name "*.hbs" | cut -d'/' -f3- | xargs -I{} cp -u ./src/{} ./dist/{}
