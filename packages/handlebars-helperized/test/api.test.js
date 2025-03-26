'use strict';

/* eslint-env node, mocha */

import moment from 'moment-timezone';
import { Renderer } from '../lib/index.js';
import { expect, it, describe } from 'vitest';

// Renderer = Renderer.default;

/**
 * Documented API testing (stuff on README should work as expected)
 */
describe('The README examples', () => {
  it('should pass the basic example', async () => {
    const tpl = '<h1>Hello {{name}}</h1>';
    const renderer = new Renderer(tpl);
    
    const result = await renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hello John</h1>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the layout example', async () => {
    const tpl = `
    {{#extend "layout"}}
      {{#content "main"}}
        Hello, <i>{{name}}</i>
      {{/content}}
    {{/extend}}`;
    const layout = `
    <p>
      {{#block "main"}}
        stuff
      {{/block}}
    </p>`;
    const renderer = new Renderer(tpl, layout);
    
    const result = (await renderer.render({ name: 'John' })).replace(/\s/g, '');
    const expectedResult = '<p>Hello,<i>John</i></p>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the localization example', async () => {
    const tpl = '<h1>{{t "greeting"}} {{name}}</h1>';
    const opts = { texts: { greeting: 'Hallo' } };
    const renderer = new Renderer(tpl, null, null, opts);
    
    const result = await renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hallo John</h1>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the localization example with context', async () => {
    const tpl = '<h1>{{t "greeting" name=name}}</h1>';
    const opts = { texts: { greeting: 'Hallo {{name}}' } };
    const renderer = new Renderer(tpl, null, null, opts);
    
    const result = await renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hallo John</h1>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the formatting example', async () => {
    const tpl = '<p>You paid {{nfc price cc="USD"}} on {{df date}}</p>';
    const renderer = new Renderer(tpl);
    
    const ts = '03-19-2019 13:37:00';
    const format = 'MM-DD-YYYY HH:mm:ss';
    const tz = moment.tz.guess();
    const yesterday = moment.parseZone(ts, format, tz);
    const result = await renderer.render({ price: 1.99, date: yesterday });
    const expectedResult = '<p>You paid $1.99 on 03/19/2019</p>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the formatting example directly from the template', async () => {
    const tpl = '<p>You paid {{nfc price cc="USD"}} on {{dff date format=\'YYYY-DD-MM HH:mm:ss\'}}</p>';
    const renderer = new Renderer(tpl);
    
    const ts = '2019-03-19 13:37:00';
    const result = await renderer.render({ price: 1.99, date: ts });
    const expectedResult = '<p>You paid $1.99 on 2019-19-03 13:37:00</p>';
    expect(result).to.equal(expectedResult);
  });

  it('should format with a custom timezone', async () => {
    const tpl = '<p>You paid {{nfc price cc="EUR"}} on {{dff date format=\'YYYY-DD-MM HH:mm:ss\' timezone="Europe/Moscow"}}</p>';
    const renderer = new Renderer(tpl);
    
    const ts = '2019-03-19T10:46:43.246Z';
    const result = await renderer.render({ price: 1.88, date: ts });
    // Moscow is 3 hours in advance of GMT
    const expectedResult = '<p>You paid €1.88 on 2019-19-03 13:46:43</p>';
    expect(result).to.equal(expectedResult);
  });

  it('should pass the formatting example with german locale', async () => {
    const tpl = '<p>You paid {{nfc price cc="EUR"}} on {{df date}}</p>';
    const renderer = new Renderer(tpl, null, null, {locale: 'de_DE'});
    
    const ts = '03-19-2019 13:37:00';
    const format = 'MM-DD-YYYY HH:mm:ss';
    const tz = moment.tz.guess();
    const yesterday = moment.parseZone(ts, format, tz);
    const result = await renderer.render({price: 1.99, date: yesterday});
    const expectedResult = '<p>You paid 1,99 € on 19.03.2019</p>';
    expect(result).to.equal(expectedResult);
  });

  it('should throw error when no template is provided', async () => {
    const renderer = new Renderer(null);
    expect(renderer.waitLoad()).rejects.toThrowError('Template not provided!');
    expect(renderer.render({ name: 'John' })).rejects.toThrowError('Template not provided!');
  });
});
