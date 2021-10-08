import { strict as assert } from 'assert';
import { data, Decimal, IItems } from '../src/model/primitives';
import { CustomerType } from '../src/model/ICustomer';
import { Cart } from '../src/model/impl/Cart';
import { Courier, Source, Offer } from '../src/model/impl/Courier';
import { MockSerializer } from '../src/model/impl/MockSerializer';
import { SelfPickUp } from '../src/model/impl/SelfPickUp';
import { IAddress } from '../src/model/IAddress';

describe('Courier method tests', () => {
  let courier = new Courier({
    source: JSON.stringify(data.premiumDHL),
    shipping: {originCountry: 'DE', destinationCountry: 'DE'}
  });

  it('should return correct shipping information', () => {
    let result = courier.getShipping();
    assert.deepStrictEqual(result, {originCountry: 'DE', destinationCountry: 'DE'});
  });

  it('should change shipping information correctly', () => {
    let address: IAddress = {originCountry: 'DE', destinationCountry: 'USA'};
    courier.setShipping(address);
    let result = courier.getShipping();
    assert.deepStrictEqual(result, address);
  });

  it('should change destination country correctly', () => {
    courier.setDestinationCountry('EE');
    let result = courier.getShipping().destinationCountry;
    assert.equal(result, 'EE');
  });

  it('should return correct source', () => {
    let result = courier.getSource();
    assert.deepStrictEqual(result, data.premiumDHL);
  });

  it('should change source correctly', () => {
    let source: Source = JSON.parse(JSON.stringify(data.publicDHL));
    courier.setSource(source);
    let result = courier.getSource();
    assert.deepStrictEqual(result, source);
  });

  it('should correctly determine if items can fit in offered shipment container', () => {
    let items: IItems = [
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 400,
        height: 35,
        width: 25,
        depth: 2,
        desc: null,
        imgSrc: null,
        sku: 'one'
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 400,
        height: 35,
        width: 25,
        depth: 2,
        desc: null,
        imgSrc: null,
        sku: 'two'
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 400,
        height: 2,
        width: 25,
        depth: 35,
        desc: null,
        imgSrc: null,
        sku: 'three'
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 400,
        height: 2,
        width: 25,
        depth: 35,
        desc: null,
        imgSrc: null,
        sku: 'four'
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 400,
        height: 35,
        width: 25,
        depth: 2,
        desc: null,
        imgSrc: null,
        sku: 'five'
      }];
    let offer: Offer = {
      price: 1.00,
      maxWeight: 2000,
      type: 'parcel',
      height: 35,
      width: 25,
      depth: 10,
      name: 'Parcel XS up to 2kg'
    };
    let result = courier.canFit([offer], items);
    assert.equal(result.length, 1);
  });

  it('should get correct shipping info from items', () => {
    let items: IItems = [{
      price: new Decimal('1.00'),
      taxType: 'vat_free',
      quantity: 1,
      weight: 1999,
      height: 35,
      width: 25,
      depth: 3,
      desc: null,
      imgSrc: null,
      sku: null
    }];
    let expectedResult = {
      zone: '1',
      offers: [{
        price: new Decimal(4.89),
        maxWeight: 2000,
        type: 'parcel',
        height: 35,
        width: 25,
        depth: 3,
        human: {
          offer: 'Parcel XS up to 2kg'
        }
      }],
      human: {
        zone: '1 (all EU countries)',
      }
    };
    let result = courier.get(items);
    assert.deepStrictEqual(result, expectedResult);
  });

  it('should get correct shipping info from items that fit into Parcel M', () => {
    let items: IItems = [
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 1000,
        height: 60,
        width: 10,
        depth: 3,
        desc: null,
        imgSrc: null,
        sku: null
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 1000,
        height: 30,
        width: 20,
        depth: 2,
        desc: null,
        imgSrc: null,
        sku: null
      }
    ];
    let expectedResult = {
      zone: '1',
      offers: [{
        price: new Decimal(8.89),
        maxWeight: 2000,
        type: 'parcel',
        height: 60,
        width: 20,
        depth: 10,
        human: {
          offer: 'Parcel M up to 2kg'
        }
      }],
      human: {
        zone: '1 (all EU countries)',
      }
    };
    let result = courier.get(items);
    assert.deepStrictEqual(result, expectedResult);
  });

  it('should get correct shipping info from items that fit into Package up to 2kg', () => {
    let items: IItems = [
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 1000,
        height: 60,
        width: 10,
        depth: 3,
        desc: null,
        imgSrc: null,
        sku: null
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 1000,
        height: 30,
        width: 21,
        depth: 2,
        desc: null,
        imgSrc: null,
        sku: null
      }
    ];
    let expectedResult = {
      zone: '1',
      offers: [{
        price: new Decimal(13.99),
        maxWeight: 2000,
        type: 'package',
        height: 60,
        width: 30,
        depth: 15,
        human: {
          offer: 'Package up to 2kg'
        }
      }],
      human: {
        zone: '1 (all EU countries)',
      }
    };
    let result = courier.get(items);
    assert.deepStrictEqual(result, expectedResult);
  });

  it('should get correct shipping info from items that fit into 5kg package', () => {
    let items: IItems = [
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 3000,
        height: 120,
        width: 45,
        depth: 15,
        desc: null,
        imgSrc: null,
        sku: null
      },
      {
        price: new Decimal('1.00'),
        taxType: 'vat_free',
        quantity: 1,
        weight: 2000,
        height: 60,
        width: 100,
        depth: 15,
        desc: null,
        imgSrc: null,
        sku: null
      }];
    let expectedResult = {
      zone: '1',
      offers: [{
        price: new Decimal(15.99),
        maxWeight: 5000,
        type: 'package',
        height: 120,
        width: 60,
        depth: 60,
        human: {
          offer: 'Package up to 5kg'
        }
      }],
      human: {
        zone: '1 (all EU countries)',
      }
    };
    let result = courier.get(items);
    assert.deepStrictEqual(result, expectedResult);
  });
});

describe('Tax calculation', () => {
  let cart: Cart;

  beforeAll(() => {
    cart = new Cart({
      serializer: new MockSerializer(),
      shippingMethod: new Courier({
        source: JSON.stringify(data.publicDHL),
        shipping: {originCountry: 'DE'}
      }),
      taxOriginCountry: 'DE',
      taxRates: {
        vat_standard: {
          rate: new Decimal(1.19),
          desc: '+ VAT 19%'
        },
        vat_reduced: {
          rate: new Decimal(1.07),
          desc: '+ VAT 7%'
        }
      }
    });

    cart.addItems([
      {
        sku: 'cr2-blue',
        price: new Decimal('12.95'), // Euro
        taxType: 'vat_reduced',
        weight: 210, // grams
        height: 2.20, // cm
        width: 13.5, // cm
        depth: 8.22, // cm
        quantity: 7,
      },
      {
        sku: 'cr3-green',
        price: new Decimal('3.79'), // Euro
        taxType: 'vat_standard',
        weight: 2000, // grams
        height: 35, // cm
        width: 25, // cm
        depth: 10, // cm
        quantity: 1,
      },
      {
        sku: 'cr5-red',
        price: new Decimal('1.10'),
        taxType: 'vat_standard',
        weight: 210, // grams
        height: 2.20, // cm
        width: 13.5, // cm
        depth: 8.22, // cm
        quantity: 15,
      }
    ]);
    cart.modifyItem({sku: 'cr2-blue', quantity: 7});
  });

  it('should calculate taxes for LV based private customer with courier shipping', () => {
    const r: any = {};

    cart.setDestinationCountry('LV');

    cart.setCustomer({
      type: CustomerType.PRIVATE
    });

    r.taxes = cart.getTaxes(true);

    r.totalNet = (cart.round(cart.getTotalNet()));

    r.totalGross = (cart.round(cart.getTotalGross()));

    r.shipment = cart.getShipping();

    // assert compare result with netPrice.toString()
    assert.deepStrictEqual(JSON.parse(JSON.stringify(r)), {
      taxes: {
        vat_standard: {
          netPrice: '41.28',
          rate: '1.19',
          desc: '+ VAT 19%'
        },
        vat_reduced: {
          netPrice: '90.65',
          rate: '1.07',
          desc: '+ VAT 7%'
        }
      },
      totalNet: '131.93',
      totalGross: '146.12',
      shipment: {
        price: '20.99',
        taxType: 'vat_standard',
        result: {
          zone: '1',
          offers: [{
            price: '20.99',
            maxWeight: 10000,
            type: 'package',
            depth: 60,
            height: 120,
            width: 60,
            human: {
              offer: 'Package up to 10kg',
            }
          }],
          human: {
            zone: '1 (all EU countries)',
          }
        }
      }
    });
  });

  it('should calculate taxes for a LV based commercial customer with self pick up (VAT Free + no shipping cost)', () => {
    const r: any = {};

    cart.setCustomer({
      type: CustomerType.COMMERCIAL
    });

    cart.setShippingMethod(new SelfPickUp({originCountry: 'DE'}));
    cart.setDestinationCountry('LV');

    r.taxes = cart.getTaxes(true);

    r.totalNet = (cart.round(cart.getTotalNet()));

    r.totalGross = (cart.round(cart.getTotalGross()));

    // assert compare result with netPrice.toString()
    assert.deepStrictEqual(JSON.parse(JSON.stringify(r)), {
      taxes: {
        vat_standard:
          {
            netPrice: '20.29',
            rate: '1',
            desc: 'VAT Free'
          },
        vat_reduced:
          {
            netPrice: '90.65',
            rate: '1',
            desc: 'VAT Free'
          }
      },
      totalNet: '110.94', // 123,14 - 13,20 for shipping
      totalGross: '110.94', // VAT Free
    });
  });
});
