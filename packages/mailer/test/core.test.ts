import { it, describe, expect } from 'vitest';

import {Mailer} from '../src';

console.log(Mailer);

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
  it('should not be able to be instantiated with faulty options', () => {
    return new Promise<void>((resolve, reject) => {
      const mailer = new Mailer(nonWorkingOpts);
      mailer.send(mail).then(resolve).catch(reject);
    });
  });

  it('should be able to be instantiated with html to text options', () => {
    return new Promise<void>((resolve, reject) => {
      const htmlToTextOptions = {
        tables: ['.vclTable']
      };
      const mailer = new Mailer(workingOpts, htmlToTextOptions);
      mailer.send(mail).then(resolve).catch(reject);
    });
  });

  it('should return plaintext when in testing mode', () => {
    return new Promise<void>((resolve, reject) => {
      process.env.NODE_ENV = 'test'; // manual switch
      const mailer = new Mailer(workingOpts);
      mailer.send(mail).then((result) => {
        expect(result.envelope.from).to.equal('foo@blurdybloop.com');
        resolve();
      }).catch(reject);
    });
  });
});
