# Development

## Commit messages

This repository use [commitizen](https://github.com/commitizen/cz-cli) to normalize the commit messages.
Commit messages are not linted.

## Installing Dependencies

Run `npm run bootstrap`.

## Testing all packages

Run `npm test` from the shell to run tests for all packages.

## Releasing one (or more) packages

Run `npm run publish` from the shell to:

- update version in changed packages
- create a release commit and tag
- publish the changed packages to npm
