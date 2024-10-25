# handlebars-helperized

Opinionated handlebars based templating engine for rendering HTML and other text
based formats. It's especially suited for e-mail content as it supports style
inlining.

The following helpers are injected by default:

- [Handlebars layouts](https://github.com/shannonmoeller/handlebars-layouts)
- [numbro](https://www.npmjs.com/package/numbro) for number formatting
- [moment-timezone](https://www.npmjs.com/package/moment-timezone) for proper date/time handling

Additionally, a lightweight localization plug-in is provided through a handlebars
extension `t`.

Additional custom helpers can be provided from the service which makes use of
this module by passing an array which contains the file's path relative to the
root folder on class initialization.

 ```js
// example
const filePathList = ['./test/handlebars/helper-loud.js'];
const renderer = new Renderer(tpl, '', '', {}, filePathList );
```

## Usage

This renderer can be used *standalone* in any node.js project on the server side.
Due to the heavy weight, this pre-charged template renderer is mainly intended
for *server side usage*.

The simplest use case looks like this:

```js
// require the library
const Renderer = require('handlebars-helperized');

// initialize a renderer instance with a template string
const tpl = `<h1>Hello {{name}}</h1>`;
const renderer = new Renderer(tpl);

// use the renderer with arbitrary contextual data
const result = renderer.render({ name: 'John' });
// result === '<h1>Hello John</h1>';
```

If you want to use an additional layout template to enclose your main template,
just pass the renderer an additional parameter, like this:

```js
// require the library
const Renderer = require('handlebars-helperized');

// initialize a renderer instance with a template string
const tpl = `
{{#extend "layout"}}
  {{#content "main"}}
    Hello, <i>{{name}}</i>
  {{/content}}
{{/extend}}`;
const layout = `
<p>
  {{#block main}}
    stuff
  {{/block}}
</p>`;
const renderer = new Renderer(tpl, layout);

// use the renderer with arbitrary contextual data
const result = renderer.render({ name: 'John' });
// result === '<p>Hello, <i>John</i></h1>';
```

It is also possible to provide CSS content to be inlined in the produced HTML. Such is done by using the Renderer's *third* parameter. Style inling is performed using [juice](https://github.com/Automattic/juice).

```js
...
const style = 'div { color: red, text-align: center }';
const renderer = new Renderer(tpl, layout, style);
const result = renderer.render({ name: 'John' });
// result === '<div style="color: red; text-align: center;">Hello, <i>John</i></div>'
```

For localized content, the `t` helper can be used like shown below.
Translation texts can be provided as *third* parameter of the renderer.

```js
// require the library
const Renderer = require('handlebars-helperized');

// template string with translation placeholder
const tpl = `<h1>{{t 'greeting'}} {{name}}</h1>`;

// options object with translation texts included
const opts = {
  texts: {
    'greeting': 'Hallo'
  }
}

// renderer instance without a layout but with translation options
const renderer = new Renderer(tpl, null, null, opts);

// use the renderer with arbitrary contextual data
const result = renderer.render({ name: 'John' });
// result === '<h1>Hallo John</h1>';
```

It is also possible to have data placeholders *within* the translation texts
as well, like this:

```js
// require the library
const Renderer = require('handlebars-helperized');

// template string with translation placeholder
const tpl = `<h1>{{t 'greeting' name=name}}</h1>`;

// options object with translation texts included
const opts = {
  texts: {
    'greeting': 'Hallo {{name}}'
  }
}

// renderer instance without a layout but with translation options
const renderer = new Renderer(tpl, null, null, opts);

// use the renderer with arbitrary contextual data
const result = renderer.render({ name: 'John' });
// result === '<h1>Hallo John</h1>';
```

Additionally, the injected extensions for formatting date, time and numbers
may be used. Have a look at the extensions itself for an overview of the
provided helpers, or see a summary below. An example for these formatting
capabilities looks like this:

```js
// require the libraries
const Renderer = require('handlebars-helperized');
const moment = require('moment-timezone');

// initialize a renderer instance with a template string
const tpl = '<p>You paid {{nfc price}} on {{df date}}</p>';
const renderer = new Renderer(tpl);

// create a timestamp & use the renderer with arbitrary contextual data
const ts = '07-22-2018 13:37:00';
const format = 'MM-DD-YYYY HH:mm:ss';
const tz = moment.tz.guess();
const yesterday = moment.parseZone(ts, format, tz);
const result = renderer.render({ price: 1.99, date: yesterday });
// result: '<p>You paid $1.99 on 07/22/2018</p>';
```

If you want to display these helperized information with localized formatting,
just set the `locale` setting (default: `en_US`) to the desired cultural area
like this:

```js
// require the libraries
const Renderer = require('handlebars-helperized');
const moment = require('moment-timezone');

// initialize a renderer instance with a template string
const tpl = '<p>You paid {{nfc price cc="USD"}} on {{df date}}</p>';
const renderer = new Renderer(tpl, null, null, { locale: 'de_DE' });

// create a timestamp & use the renderer with arbitrary contextual data
const ts = '07-22-2018 13:37:00';
const format = 'MM-DD-YYYY HH:mm:ss';
const tz = moment.tz.guess();
const yesterday = moment.parseZone(ts, format, tz);
const result = renderer.render({ price: 1.99, date: yesterday });
// result: '<p>You paid 1,99 € on 22.07.2018</p>';
```

## Injected Extensions Overview

<table>
  <tr>
    <th>Name</th>
    <th>Argument(s)</th>
    <th>Result</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>nfn</code></td>
    <td>int or float</td>
    <td>absolute number</td>
    <td>For numeric values without decimals</td>
  </tr>
  <tr>
    <td><code>nfc</code></td>
    <td>int or float</td>
    <td>currency-style formatted number</td>
    <td>For currency based numeric values</td>
  </tr>
  <tr>
    <td><code>nfb</code></td>
    <td>int or float</td>
    <td>byte-style formatted number</td>
    <td>For byte based numeric values</td>
  </tr>
  <tr>
    <td><code>increment</code></td>
    <td>int or float</td>
    <td>the given number increased by 1</td>
    <td>For byte based numeric values</td>
  </tr>
  <tr>
    <td><code>ago</code></td>
    <td>Date</td>
    <td>relative time string, human readable</td>
    <td>point in time relative to current point in time</td>
  </tr>
  <tr>
    <td><code>df</code></td>
    <td>Date</td>
    <td>string</td>
    <td>Formatted Date string, short notation</td>
  </tr>
  <tr>
    <td><code>dfl</code></td>
    <td>Date</td>
    <td>string</td>
    <td>Formatted Date string, long notation</td>
  </tr>
  <tr>
    <td><code>tf</code></td>
    <td>Date</td>
    <td>string</td>
    <td>Formatted Time string</td>
  </tr>
  <tr>
    <td><code>dtf</code></td>
    <td>Date</td>
    <td>string</td>
    <td>Formatted Datetime string</td>
  </tr>
  <tr>
    <td><code>dff</code></td>
    <td>Date, format-string</td>
    <td>string</td>
    <td>Formatted Datetime string with given format</td>
  </tr>
  <tr>
    <td><code>t</code></td>
    <td>lookup-string</td>
    <td>translation-string</td>
    <td>inserts the given translation text in-place. Looks for a translation text with they key <code>lookup-string</code> within a given <code>opts.texts</code> object in the renderer instance.</td>
  </tr>
</table>
