import path from 'node:path';
import fs from 'node:fs';
import hbs from 'handlebars';
import { type OIDCHbsTemplates } from './interfaces.js';
import { Logger } from '@restorecommerce/logger';

export interface OIDCTemplateError {
  key: string;
  message?: string;
}

export interface OIDCTemplateContext {
  title: string;
  error?: OIDCTemplateError;
  dev: boolean;
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
});

export class OIDCTemplateEngine {
  private layoutHbs?: HandlebarsTemplateDelegate<any>;
  private loginHbs?: HandlebarsTemplateDelegate<OIDCTemplateLoginContext>;
  private consentHbs?: HandlebarsTemplateDelegate<OIDCTemplateConsentContext>;

  constructor(
    private templates?: OIDCHbsTemplates,
    private logger?: Logger,
  ) { }

  async load(target: string) {
    const template = this.templates?.[target];
    if (template) {
      this.logger?.info(`OIDC: Loading template ${template}`);
      const layout = await new Promise<string>((resolve, reject) => {
        fs.readFile(
          path.resolve(template),
          (err, data) => err ? reject(err) : resolve(data.toString())
        );
      });
      return hbs.compile(layout);
    }
    else {
      const msg = `OIDC: 'odic.template.${target}' not configured!`;
      this.logger?.warn(msg);
      throw new Error(msg);
    }
  }

  async layout(context: OIDCTemplateContext & { body: string }) {
    this.layoutHbs ??= await this.load('layout');
    return this.layoutHbs(context);
  }

  async login(context: OIDCTemplateLoginContext) {
    this.loginHbs ??= await this.load('login');
    return this.loginHbs(context);
  }

  async consent(context: OIDCTemplateConsentContext) {
    this.consentHbs ??= await this.load('consent');
    return this.consentHbs(context);
  }

}
