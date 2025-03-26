'use strict';

/* eslint-env node, mocha */

import fs from 'fs';
import moment from 'moment-timezone';
import { Renderer } from '../lib/index.js';
import { expect, it, describe } from 'vitest';

// Renderer = Renderer.default;

const load = function loadTemplateFile(name) {
  return fs.readFileSync(`./test/templates/${name}.hbs`, 'utf-8');
};

/**
 * Extension testing
 */
describe('the handlebars extensions', () => {
  describe('localization', () => {
    it('should translate placeholders', async () => {
      const tpl = load('payment-notification');
      const opts = {
        locale: 'en',
        texts: {
          'emails.common.adminGreeting': {
            en: 'Hello Admin',
          },
          'emails.paymentNotification.message': {
            en: 'Payment Received: {{orderIRI}}'
          }
        }
      };
      const renderer = new Renderer(tpl, null, null, opts);
      
      const context = { payment: { orderIRI: 'http://example.com/42'} };
      const result = await renderer.render(context);
      const expectedResult = `<h1 class="vclAlignCentered">Hello Admin</h1>\n\n` +
        `<p class="vclAlignCentered">\n  Payment Received: http://example.com/42\n</p>\n`;
      expect(result).to.equal(expectedResult);
    });
  });

  describe('numbers', () => {
    it('should resolve placeholders', async () => {
      const tpl = load('numbers');
      const renderer = new Renderer(tpl, null, null, {});
      
      const result = await renderer.render({});
      const expectedResult = 'number: 42\nprice: €42.00\nbytes: 42 byte\n';
      expect(result).to.equal(expectedResult);
    });
  });


  describe('datetimes', () => {
    it('should format timestamps', async () => {
      const tpl = load('times');
      const renderer = new Renderer(tpl, null, null, {});
      
      const ts = '03-19-2019 13:37:00';
      const format = 'MM-DD-YYYY HH:mm:ss';
      const tz = moment.tz.guess();
      const yesterday = moment.tz(ts, format, tz);
      const context = {yesterday};
      const result = await renderer.render(context);
      const ago = yesterday.fromNow();
      const expectedResult = 'ago: ' + ago + `\ndf: 03/19/2019\ndtf: March 19, 2019 1:37 PM\n`;
      expect(result).to.equal(expectedResult);
    });
  });

  describe('integration', () => {
    it('should all work on a real-world example simultanously', async () => {
      const opts = {
        texts: {
          'emails.invoice.title': 'Professor Oak',
          'emails.invoice.invoiceNumber': 'invoice number',
          'emails.orderConfirmation.orderNumber': 'order number',
          'emails.orderConfirmation.orderDate': 'order date',
          'emails.orderConfirmation.billingAddress': 'billing address street',
          'emails.orderConfirmation.position': 'position',
          'emails.orderConfirmation.name': 'name',
          'emails.orderConfirmation.quantity': 'quantity',
          'emails.orderConfirmation.singlePrice': 'single price',
          'emails.orderConfirmation.itemTotalPrice': 'item total price',
          'emails.orderConfirmation.shipping': 'shipping',
          'emails.orderConfirmation.voucher': 'voucher',
          'emails.orderConfirmation.discount': 'discount',
          'emails.orderConfirmation.total': 'total price',
          'emails.common.footer': 'brought to you by {{appName}}',
          'emails.common.footerText': 'sending to {{street}}',
          'emails.orderConfirmation.paymentMethod': 'cash',
          'components.cart.paymentFees': 'payment fees',
          'message.free_tax': 'free tax'
        }
      };
      const tpl = load('invoice');
      const renderer = new Renderer(tpl, null, null, opts);
      
      const ts = '03-19-2019 13:37:00';
      const format = 'MM-DD-YYYY HH:mm:ss';
      const tz = moment.tz.guess();
      const yesterday = moment.parseZone(ts, format, tz);
      const context = {
        app: {
          name: 'the store'
        },
        orderDate: yesterday,
        invoice: {
          number: 42,
          orderNumber: 24
        },
        billingAddress: {
          street: 'the silph road'
        },
        items: [{
          i: 42,
          name: 'raspberry',
          voucher: 'squ1rtle',
          quantity: 9001,
          fullPrice: 26918.97,
          cc: 'USD',
          total: 26912.99,
          hasShipping: false,
          hasPaymentFee: false,
        }],
        organization: {
          address: {
            street: 'the silph road'
          }
        },
        paymentMethodAdditionalType: {
          name: 'cash'
        },
        total: 888.88,
        cc: 'USD',
      };
      const result = await renderer.render(context);
      // eslint-disable-next-line
      const expectedResult = [
        `<h3>`,
        `  Professor Oak`,
        `</h3>`,
        ``,
        `<table id="invoicemeta" class="vclNoBorder vclFloatRight" style="min-width: 18em;">`,
        `  <tr>`,
        `    <td><b>invoice number</b></td>`,
        `    <td class="vclAlignRight">42</td>`,
        `  </tr>`,
        `  <tr>`,
        `    <td>order number</td>`,
        `    <td class="vclAlignRight">24</td>`,
        `  </tr>`,
        `  <tr>`,
        `    <td>order date</td>`,
        `    <td class="vclAlignRight">03/19/2019</td>`,
        `  </tr>`,
        `</table>`,
        ``,
        `<div class="vclClear"></div>`,
        `<br>`,
        `<br>`,
        ``,
        `<table id="address" class="vclTable">`,
        `  <tbody>`,
        `      <tr>`,
        `        <td class="vclSpan-10p">billing address street</td>`,
        `        <td>`,
        `          `,
        `           `,
        `        </td>`,
        `      </tr>`,
        `      <tr>`,
        `        <td> </td>`,
        `        <td>the silph road</td>`,
        `      </tr>`,
        `      <tr>`,
        `        <td> </td>`,
        `        <td> </td>`,
        `      </tr>`,
        `      <tr>`,
        `        <td> </td>`,
        `        <td></td>`,
        `      </tr>`,
        `  </tbody>`,
        `</table>`,
        ``,
        `<br>`,
        ``,
        `<table id="items" class="vclTable vclSumTable">`,
        `  <thead>`,
        `    <tr>`,
        `      <th>position</th>`,
        `      <th>name</th>`,
        `      <th>quantity</th>`,
        `      <th class="vclAlignRight">single price</th>`,
        `      <th class="vclAlignRight">item total price</th>`,
        `    </tr>`,
        `  </thead>`,
        `  <tbody>`,
        `      <tr>`,
        `        <td>42</td>`,
        `        <td>raspberry`,
        `          <br> squ1rtle`,
        `        </td>`,
        `        <td>9001</td>`,
        `        <td class="vclAlignRight">$26,918.97</td>`,
        `        <td class="vclAlignRight">`,
        `            $26,912.99`,
        `        </td>`,
        `      </tr>`,
        `    <tr class="vclNoBorder">`,
        `      <td colspan="5">&nbsp;</td>`,
        `    </tr>`,
        ``,
        ``,
        ``,
        `    <tr class="vclSumTableTotal">`,
        `      <td colspan="3">total price</td>`,
        `      <td colspan="2" class="vclAlignRight">$888.88</td>`,
        `    </tr>`,
        `  </tbody>`,
        `</table>`,
        ``,
        `<br>`,
        ``,
        ``,
        `<p class="vclAlignCentered">`,
        `  brought to you by ${context.app.name}`,
        `  <br>`,
        `  <br>`,
        `  <img src="cid:logo"/>`,
        `  <br>`,
        `  <br>`,
        `  sending to ${context.organization.address.street}`,
        `</p>`,
        ``,
        `<p class="vclAlignCentered">`,
        `  cash: cash`,
        `</p>`,
        ``,
      ].join('\n');
      expect(result).to.equal(expectedResult);
    });
  });
});
