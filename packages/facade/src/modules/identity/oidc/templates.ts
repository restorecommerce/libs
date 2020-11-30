import path from 'path';
import fs from 'fs';
import { IdentityContext } from '../interfaces';
import hbs from 'handlebars';
import { OIDCHbsTemplates } from './interfaces';

export interface OIDCTemplateError {
  key: string;
  message?: string;
}

export interface OIDCTemplateContext {
  title: string;
  error?: OIDCTemplateError;
  dev: boolean,
  dbg: {
    session?: any;
    params?: any;
    prompt?: any;
  };
}

export interface OIDCTemplateConsentContext extends OIDCTemplateContext {
  uid: string;
  details?: any;
}

export interface OIDCTemplateLoginContext extends OIDCTemplateContext {
  uid: string;
  identifier?: string;
  remember?: boolean;
}

hbs.registerHelper('json', (object) => {
  return `<pre>${JSON.stringify(object, null, 2)}</pre>`;
})

export class OIDCTemplateEngine {

  private layoutHbs?: HandlebarsTemplateDelegate<any>;
  private loginHbs?: HandlebarsTemplateDelegate<OIDCTemplateLoginContext>;
  private consentHbs?: HandlebarsTemplateDelegate<OIDCTemplateConsentContext>;

  constructor(private templates: OIDCHbsTemplates | undefined) { }

  async layout(context: OIDCTemplateContext & { body: string }) {
    if (!this.layoutHbs) {
      const layoutTpl = this.templates?.login ?? await new Promise<string>((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, 'views/layout.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
      });
      this.layoutHbs = hbs.compile(layoutTpl);
    }
    return this.layoutHbs(context);
  }


  async login(context: OIDCTemplateLoginContext) {
    if (!this.loginHbs) {
      const loginTpl = this.templates?.login ?? await new Promise<string>((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, 'views/login.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
      });
      this.loginHbs = hbs.compile(loginTpl);
    }

    let html = this.loginHbs(context);
    return this.layout({
      ...context,
      body: html
    });
  }
  async consent(context: OIDCTemplateConsentContext) {
    if (!this.consentHbs) {
      const consentTpl = this.templates?.consent ?? await new Promise<string>((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, 'views/consent.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
      });
      this.consentHbs = hbs.compile(consentTpl);
    }

    let html = this.consentHbs(context);
    return this.layout({
      ...context,
      body: html
    });
  }

}
