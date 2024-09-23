import { data, Decimal } from '../src/model/primitives';
import { Courier } from '../src/model/impl/Courier';
import { strict as assert } from 'assert';

const jestConsole = console;

beforeEach(() => {
  global.console = require('console');
});

afterEach(() => {
  global.console = jestConsole;
});

describe('benchmarks', () => {
  it('should calculate by volume', () => {
    const courier = new Courier({
      source: JSON.stringify(data.publicDHL),
      shipping: {originCountry: 'DE', destinationCountry: 'DE'}
    });

    console.time('Volume Calculation');
    const result = courier.get([
      {
        sku: 'sample-item-a',
        price: '1',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 9,
        height: 3,
        width: 5,
        depth: 1
      },
      {
        sku: 'sample-item-b',
        price: '2',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 15,
        height: 13,
        width: 6,
        depth: 3
      },
      {
        sku: 'sample-item-c',
        price: '3',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 15,
        height: 22,
        width: 20,
        depth: 15
      }
    ]);
    console.timeEnd('Volume Calculation');

    assert.deepStrictEqual(result, {
      human: {zone: 'National (Germany)'},
      offers: [{
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 10kg'},
        maxWeight: 10000,
        price: new Decimal(9.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 5kg'},
        maxWeight: 5000,
        price: new Decimal(6.49),
        type: 'package',
        width: 60
      }, {
        depth: 60,
        height: 120,
        human: {offer: 'Package up to 10kg'},
        maxWeight: 10000,
        price: new Decimal(9.49),
        type: 'package',
        width: 60
      }],
      zone: 'national'
    });
  });

  it('should calculate by weight', () => {
    const courier = new Courier({
      source: JSON.stringify(data.premiumDHL),
      shipping: {originCountry: 'DE', destinationCountry: 'DE'}
    });

    console.time('Weight Calculation');
    const result = courier.get([
      {
        sku: 'sample-item-a',
        price: '1',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 9,
        height: 3,
        width: 5,
        depth: 1
      },
      {
        sku: 'sample-item-b',
        price: '2',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 15,
        height: 13,
        width: 6,
        depth: 3
      },
      {
        sku: 'sample-item-c',
        price: '3',
        taxType: 'vat_standard',
        quantity: 500,
        weight: 15,
        height: 22,
        width: 20,
        depth: 15
      }
    ]);
    console.timeEnd('Weight Calculation');

    assert.deepStrictEqual(result,
      {
        human: {zone: 'national'},
        offers: [{
          depth: undefined,
          height: undefined,
          human: {offer: 'Package up to 20kg'},
          maxWeight: 20000,
          price: new Decimal(13.6),
          type: 'package',
          width: undefined
        }],
        zone: 'national'
      }
    );
  });
});
