import { htmlToText } from 'nodemailer-html-to-text';
import nodemailer from 'nodemailer';
import stubTransport from 'nodemailer-stub-transport';
import { Logger } from '@restorecommerce/logger';

class Mailer {
  /**
  @param {Object} opts nodemailer transport options
  @param {Object} htmlToTextOptions for nodemailer html to text module
  */
  transport: any;

  constructor(opts: any, htmlToTextOptions?: any) {
    const defaultOpts = {
      logger: Logger,
      pool: true
    } as any;

    const htmlToTextOpts = htmlToTextOptions || {};

    if (process.env.NODE_ENV === 'test') {
      this.transport = nodemailer.createTransport(stubTransport());
    } else {
      this.transport = nodemailer.createTransport(opts, defaultOpts);
    }
    this.transport.use('compile', htmlToText(htmlToTextOpts));
  }

  /**
  @param {Object} mail nodemailer mail
  @returns Promise
  */
  async send(mail: any) {
    return this.transport.sendMail(mail);
  }
}

export { Mailer };
