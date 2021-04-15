const htmlToText = require('nodemailer-html-to-text').htmlToText;
const nodemailer = require('nodemailer');
const stubTransport = require('nodemailer-stub-transport');

const winston = require('winston');

class Mailer {
  /**
  @param {Object} opts nodemailer transport options
  @param {Object} htmlToTextOptions for nodemailer html to text module
  */
  constructor(opts, htmlToTextOptions) {
    const defaultOpts = {
      logger: winston,
      pool: true
    };

    const htmlToTextOpts = htmlToTextOptions || {};

    let transport;
    if (process.env.NODE_ENV === 'test') {
      transport = nodemailer.createTransport(stubTransport());
    } else {
      transport = nodemailer.createTransport(opts, defaultOpts);
    }
    transport.use('compile', htmlToText(htmlToTextOpts));
    this.transport = transport;
  }

  /**
  @param {Object} mail nodemailer mail
  @returns Promise
  */
  async send(mail) {
    return this.transport.sendMail(mail);
  }
}

module.exports = Mailer;
