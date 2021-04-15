# mailer

<img src="http://img.shields.io/npm/v/%40restorecommerce%2Fmailer.svg?style=flat-square" alt="">[![Build Status][build]](https://travis-ci.org/restorecommerce/mailer?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/mailer)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/mailer?branch=master)

[version]: http://img.shields.io/npm/v/%40restorecommerce%2Fmailer.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/mailer/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/mailer.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/mailer/master.svg?style=flat-square

Multi transport mailer based on [nodemailer](https://github.com/nodemailer/nodemailer)
bundling the following additional transports:

- [wellknown](https://github.com/nodemailer/nodemailer-wellknown)
- [mandrill](https://github.com/RebelMail/nodemailer-mandrill-transport)

Theoretically all nodemailer transports are supported through
[dynamic transport plug-in loading](https://github.com/nodemailer/nodemailer#send-using-a-transport-plugin)
they just have to be added to the dependencies in `package.json`.

In addition the [HTML to text](https://github.com/andris9/nodemailer-html-to-text)
plug in is added which automatically generates a `text` part from a given `html`
part.

## Usage

see [test.js](test/test.js).
