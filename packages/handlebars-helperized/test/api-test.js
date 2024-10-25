'use strict';

/* eslint-env node, mocha */

// eslint-disable-next-line
import 'should';
import moment from 'moment-timezone';
import { Renderer } from '../lib/index.js';

// Renderer = Renderer.default;

/**
 * Documented API testing (stuff on README should work as expected)
 */
describe('The README examples', () => {
  it('should pass the basic example', async () => {
    const tpl = '<h1>Hello {{name}}</h1>';
    const renderer = new Renderer(tpl);
    await renderer.waitLoad();
    const result = renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hello John</h1>';
    result.should.equal(expectedResult);
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
    await renderer.waitLoad();
    const result = renderer.render({ name: 'John' }).replace(/\s/g, '');
    const expectedResult = '<p>Hello,<i>John</i></p>';
    result.should.equal(expectedResult);
  });

  it('should pass the localization example', async () => {
    const tpl = '<h1>{{t "greeting"}} {{name}}</h1>';
    const opts = { texts: { greeting: 'Hallo' } };
    const renderer = new Renderer(tpl, null, null, opts);
    await renderer.waitLoad();
    const result = renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hallo John</h1>';
    result.should.equal(expectedResult);
  });

  it('should pass the localization example with context', async () => {
    const tpl = '<h1>{{t "greeting" name=name}}</h1>';
    const opts = { texts: { greeting: 'Hallo {{name}}' } };
    const renderer = new Renderer(tpl, null, null, opts);
    await renderer.waitLoad();
    const result = renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hallo John</h1>';
    result.should.equal(expectedResult);
  });

  it('should pass the formatting example', async () => {
    const tpl = '<p>You paid {{nfc price cc="USD"}} on {{df date}}</p>';
    const renderer = new Renderer(tpl);
    await renderer.waitLoad();
    const ts = '03-19-2019 13:37:00';
    const format = 'MM-DD-YYYY HH:mm:ss';
    const tz = moment.tz.guess();
    const yesterday = moment.parseZone(ts, format, tz);
    const result = renderer.render({ price: 1.99, date: yesterday });
    const expectedResult = '<p>You paid $1.99 on 03/19/2019</p>';
    result.should.equal(expectedResult);
  });

  it('should pass the formatting example directly from the template', async () => {
    const tpl = '<p>You paid {{nfc price cc="USD"}} on {{dff date format=\'YYYY-DD-MM HH:mm:ss\'}}</p>';
    const renderer = new Renderer(tpl);
    await renderer.waitLoad();
    const ts = '2019-03-19 13:37:00';
    const result = renderer.render({ price: 1.99, date: ts });
    const expectedResult = '<p>You paid $1.99 on 2019-19-03 13:37:00</p>';
    result.should.equal(expectedResult);
  });

  it('should format with a custom timezone', async () => {
    const tpl = '<p>You paid {{nfc price cc="EUR"}} on {{dff date format=\'YYYY-DD-MM HH:mm:ss\' timezone="Europe/Moscow"}}</p>';
    const renderer = new Renderer(tpl);
    await renderer.waitLoad();
    const ts = '2019-03-19T10:46:43.246Z';
    const result = renderer.render({ price: 1.88, date: ts });
    // Moscow is 3 hours in advance of GMT
    const expectedResult = '<p>You paid €1.88 on 2019-19-03 13:46:43</p>';
    result.should.equal(expectedResult);
  });

  it('should pass the formatting example with german locale', async () => {
    const tpl = '<p>You paid {{nfc price cc="EUR"}} on {{df date}}</p>';
    const renderer = new Renderer(tpl, null, null, {locale: 'de_DE'});
    await renderer.waitLoad();
    const ts = '03-19-2019 13:37:00';
    const format = 'MM-DD-YYYY HH:mm:ss';
    const tz = moment.tz.guess();
    const yesterday = moment.parseZone(ts, format, tz);
    const result = renderer.render({price: 1.99, date: yesterday});
    const expectedResult = '<p>You paid 1,99 € on 19.03.2019</p>';
    result.should.equal(expectedResult);
  });
});
