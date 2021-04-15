/* eslint-env node, mocha */

const assert = require('assert');
const Mailer = require('../index');

const workingOpts = {
  tls: {
    rejectUnauthorized: false
  },
  host: 'mail.example.com',
  port: 25,
  auth: {
    user: 'xxx',
    pass: 'xxx'
  }
};

// None working opts
const nonWorkingOpts = {
  service: 'gmail'
};

const mail = {
  from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // subject line
  text: 'Hello world 🐴', // plaintext body
  html: '<b>Hello world 🐴</b>' // html body
};

describe('the mailer', () => {
  it('should not be able to be instantiated with faulty options', (done) => {
    const mailer = new Mailer(nonWorkingOpts);
    mailer.send(mail).catch((err) => {
      done();
    });
  });

  it('should be able to be instantiated with html to text options', (done) => {
    const htmlToTextOptions = {
      tables: ['.vclTable']
    };
    const mailer = new Mailer(workingOpts, htmlToTextOptions);
    mailer.send(mail).catch((err) => {
      done();
    });
  });

  it('should return plaintext when in testing mode', (done) => {
    process.env.NODE_ENV = 'test'; // manual switch
    const mailer = new Mailer(workingOpts);
    mailer.send(mail).then((result) => {
      assert(result.envelope.from === 'foo@blurdybloop.com');
      done();
    });
  });
});
