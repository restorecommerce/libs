'use strict';

/* eslint-env node, mocha */

// eslint-disable-next-line
const should = require('should');
const fs = require('fs');
const moment = require('moment-timezone');
const Renderer = require('../index');

const load = function loadTemplateFile(name) {
  return fs.readFileSync(`./test/templates/${name}.hbs`, 'utf-8');
};

/**
 * Extension testing
 */
describe('the handlebars extensions', () => {
  describe('localization', () => {
    it('should translate placeholders', () => {
      const tpl = load('payment-notification');
      const opts = {
        texts: {
          'emails.common.adminGreeting': 'Hello Admin',
          'emails.paymentNotification.message': 'Payment Received: {{orderIRI}}'
        }
      };
      const renderer = new Renderer(tpl, null, null, opts);
      const context = { orderIRI: 'http://example.com/42' };
      const result = renderer.render(context);
      const expectedResult = `<h1 class="vclAlignCentered">Hello Admin</h1>\n\n` +
        `<p class="vclAlignCentered">\n  Payment Received: http://example.com/42\n</p>\n`;
      result.should.equal(expectedResult);
    });
  });

  describe('numbers', () => {
    it('should resolve placeholders', () => {
      const tpl = load('numbers');
      const renderer = new Renderer(tpl, null, null, {});
      const result = renderer.render({});
      const expectedResult = 'number: 42\nprice: 42.00\nbytes: 42B\n';
      result.should.equal(expectedResult);
    });
  });


  describe('datetimes', () => {
    it('should format timestamps', () => {
      const tpl = load('times');
      const renderer = new Renderer(tpl, null, null, {});
      const ts = '03-19-2019 13:37:00';
      const format = 'MM-DD-YYYY HH:mm:ss';
      const tz = moment.tz.guess();
      const yesterday = moment.tz(ts, format, tz);
      const context = { yesterday };
      const result = renderer.render(context);
      const ago = yesterday.fromNow();
      const expectedResult = 'ago: ' + ago + `\ndf: 03/19/2019\ndtf: March 19, 2019 1:37 PM\n`;
      result.should.equal(expectedResult);
    });
  });

  describe('integration', () => {
    it('should all work on a real-world example simultanously', () => {
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
          cs: '$',
          csPos: 'postfix',
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
        cs: '$',
        csPos: 'postfix'
      };
      const result = renderer.render(context);
      // eslint-disable-next-line
      const expectedResult = `<h3>\n  Professor Oak\n</h3>\n\n<table id="invoicemeta" class="vclNoBorder vclFloatRight" style="min-width: 18em;">\n  <tr>\n    <td><b>invoice number</b></td>\n    <td class="vclAlignRight">42</td>\n  </tr>\n  <tr>\n    <td>order number</td>\n    <td class="vclAlignRight">24</td>\n  </tr>\n  <tr>\n    <td>order date</td>\n    <td class="vclAlignRight">03/19/2019</td>\n  </tr>\n</table>\n\n<div class="vclClear"></div>\n<br>\n<br>\n\n<table id="address" class="vclTable">\n  <tbody>\n      <tr>\n        <td class="vclSpan-10p">billing address street</td>\n        <td>\n          \n           \n        </td>\n      </tr>\n      <tr>\n        <td> </td>\n        <td>the silph road</td>\n      </tr>\n      <tr>\n        <td> </td>\n        <td> </td>\n      </tr>\n      <tr>\n        <td> </td>\n        <td></td>\n      </tr>\n  </tbody>\n</table>\n\n<br>\n\n<table id="items" class="vclTable vclSumTable">\n  <thead>\n    <tr>\n      <th>position</th>\n      <th>name</th>\n      <th>quantity</th>\n      <th class="vclAlignRight">single price</th>\n      <th class="vclAlignRight">item total price</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr>\n        <td>42</td>\n        <td>raspberry\n          <br> squ1rtle\n        </td>\n        <td>9001</td>\n        <td class="vclAlignRight">26,918.97$</td>\n        <td class="vclAlignRight">\n            26,912.99$\n        </td>\n      </tr>\n    <tr class="vclNoBorder">\n      <td colspan="5">&nbsp;</td>\n    </tr>\n\n\n\n    <tr class="vclSumTableTotal">\n      <td colspan="3">total price</td>\n      <td colspan="2" class="vclAlignRight">888.88$</td>\n    </tr>\n  </tbody>\n</table>\n\n<br>\n\n\n<p class="vclAlignCentered">\n  brought to you by {{appName}}\n  <br>\n  <br>\n  <img src="cid:logo"/>\n  <br>\n  <br>\n  sending to {{street}}\n</p>\n\n<p class="vclAlignCentered">\n  cash: cash\n</p>\n`;
      result.should.equal(expectedResult);
    });
  });
});
