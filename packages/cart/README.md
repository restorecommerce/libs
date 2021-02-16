# Cart

<img src="http://img.shields.io/npm/v/@restorecommerce/cart.svg?style=flat-square" alt="">[![Build Status][build]](https://travis-ci.org/restorecommerce/cart?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/cart)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/cart?branch=master)

[version]: http://img.shields.io/npm/v/@restorecommerce/cart.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/cart/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/cart.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/cart/master.svg?style=flat-square

An backend agnostic purely data-driven shopping cart that can be used on client- and server side.

## Features

- Item handling (add, remove etc.)
- VAT calculation with extensible tax model
  - EU tax calculation built-in (for sub-threshold based taxation)
- Shipping cost calculation based on selected courier and plan
- Extensibility for adding couriers
- Totals calculation based on items, taxes and shipping
- Can run completely offline
- Local storage on browsers via pluggable serializers
- Back-end agnostic
- Fully typed

## Usage

### Basic Example

Cart Instantiation:

```ts
const cart = new Cart({
  serializer: new MockSerializer(),
  shippingMethod: new Courier({
    source: JSON.stringify(data.publicDHL),
    shipping: {originCountry: 'DE'}
  }),
  taxOriginCountry: 'DE',
  taxes: {
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
```

Setting `serializer` and `shippingMethod` is optional.

**`setDestinationCountry(country: string)`**

```ts
cart.setDestinationCountry('LV');
```

**`getShippingMethod()`**

```ts
cart.getShippingMethod();
```

Output:

```ts
Courier {
  _source: {
    assumptions: {
      currency: 'eur',
      dimensions: [Object],
      length: 'mm',
      ranges: [Object],
      weight: 'gram'
    },
    zones: {
      '1': [Object],
      '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      '7': [Object],
      '8': [Object],
      national: [Object]
    }
  },
  _shipping: {
    destinationCountry: 'LV',
    originCountry: 'DE' }
}
```

**`getShipping()`**

There is no `setShipping` setter, since info about shipping is taken from `ShippingMethod`'s `source` property.

```ts
cart.getShipping(); // calculates shipping cost
```

Output:

```ts
{
  price: '15.99',
  taxType: 'vat_standard',
  maxWeight: 5000,
  type: 'package',
  zone: '1',
  human: {
    zone: '1 (all EU countries)',
    offer: 'Package up to 5kg',
  }
}
```

**`getSerializer()`**

```ts
cart.getSerializer();
```

**`getTaxRates()`**

```ts
cart.getTaxRates();
```

Output:

```ts
{
  taxes: {
    vat_standard: {
      rate: '1.19',
      desc: '+ VAT 19%'
    },
    vat_reduced: {
      rate: '1.07',
      desc: '+ VAT 7%'
    }
  }
}
```

**`addItems(items: IItem[])`**

```ts
cart.addItems([{
  sku: 'cr2-blue',
  price: new Decimal('12.95'), // Price
  taxType: 'vat_reduced',
  weight: 210, // grams
  height: 2.20, // cm
  width: 13.5, // cm
  depth: 8.22, // cm
  quantity: 7,
}, {
  sku: 'cr5-red',
  price: new Decimal('1.10'),
  taxType: 'vat_standard',
  weight: 210, // grams
  height: 2.20, // cm
  width: 13.5, // cm
  depth: 8.22, // cm
  quantity: 15,
}, {
  sku: 'cr3-yellow',
  price: new Decimal('2.48'),
  taxType: 'vat_standard',
  weight: 210, // grams
  height: 2.20, // cm
  width: 13.5, // cm
  depth: 8.22, // cm
  quantity: 3,
}]);
```

**`remItem(sku: string)`**

```ts
cart.remItem('cr3-yellow');
```

**`getItems()`**

```ts
cart.getItems();
````

Output:

```ts
[
  {
    sku: 'cr2-blue',
    price: 12.95,
    taxType: 'vat_reduced',
    weight: 210,
    height: 2.2,
    width: 13.5,
    depth: 8.22,
    quantity: 7
  },
  {
    sku: 'cr5-red',
    price: 1.10,
    taxType: 'vat_standard',
    weight: 210,
    height: 2.2,
    width: 13.5,
    depth: 8.22,
    quantity: 15
   }
]
```

**`setCustomer(customer: ICustomer)`**

```ts
cart.setCustomer({
  type: CustomerType.COMMERCIAL,
});
```

**`setCustomerType(type: CustomerType)`**

This modifies the `customer.`.

```ts
cart.setCustomerType(CustomerType.PRIVATE);
```

**`getCustomer()`**

```ts
cart.getCustomer();
```

Output:

```ts
{
  type: 1 // 0 - COMMERCIAL / 1 - PRIVATE
}
```

**`modifyItem(item: any)`**

```ts
cart.modifyItem({
  sku: 'cr5-red',
  // no update for other Cart properties as no change
  quantity: 10, // change only quantity
});
```

**`modifyItemQuantity(sku: string, quantity: number)`**

```ts
cart.modifyItemQuantity('cr5-red', 5); // adds 5 to initial quantity
```

**`getItemQuantity(sku: string)`**

```ts
`Amount of cr2-blue = ${cart.getItemQuantity('cr5-red')}`;
```

Output:

```text
Amount of cr5-red = 15 // 10 + 5
```

**`getItemCount()`**

```ts
`Amount of unique products = ${cart.getItemCount()}`;
```

Output:

```text
Amount of unique products = 2
```

**`getGrandQuantity()`**

```ts
`Amount of all products = ${cart.getGrandQuantity()}`;
````

Output:

```text
Amount of all products = 22 // 15 + 7
```

**`getTaxes(keepOriginalTaxType?: boolean )`**

```ts
cart.getTaxes();
```

Output:

`netPrice` and `rate` are instances of `Decimal`.

```ts
{
  vat_standard: {
    netPrice: '32.49',
    rate: '1.19',
    desc: '+ VAT 19%'
  },
  vat_reduced: {
    netPrice: '90.65',
    rate: '1.07',
    desc: '+ VAT 7%'
  }
}
```

**static `round(money: Money)`**

Parameter could be `number`|`string`|`Decimal`. Returns string.

```ts
Cart.round(1.120); // '1.12'
Cart.round('1.123'); // '1.13'
Cart.round(new Decimal(1.125)); // '1.13'
Cart.round(new Decimal('1.127')); // '1.13'
```

**`getTotalNet()`**

Total net (without taxes).

```ts
Cart.round(cart.getTotalNet()); // '123.14'
```

Calculation:

```text
1) customer.billing.countryCode === 'LV' => VAT + 19% / 7%
2) cr2_blue: Price * quantity => 12.95 * 7  = 90.65
3) cr5_red:  Price * quantity => 1.10 * 15  = 16.5
4) Max Weight of all items = 22 items * 210 grams  = 4620 grams =>
shipping = 15.99 euro for package less than 5000 grams to EU
5) sum = 90.65 + 16.5 + 15.99 = 123.14
```

**`getTotalGross()`**

Total gross (with taxes).

```ts
Cart.round(cart.getTotalGross()); // '135.66'
```

Calculation:

```text
1) cr2_blue => cr2_blue + VAT 7% = 90.65 * 1.07 = 96.9955
2) cr5_red => cr5_red + VAT 19% = 16.5 * 1.19 = 19.635
3) shipping => shipping + VAT 19% = 15.99 * 1.19 = 19.0281
4) sum  =>  96.9955 + 19.635 + 19.0281 = 135.6586
5) round(135.6586) = 135.66
```

### Tests

More examples of using the `Cart`
can be found in [`test/index.ts`](test/index.ts).

### Reference

|Method   | Description  |
|---|---|
|`getItems(): IItems / undefined` | Get Items |
|<u>private</u> `setItems(items: IItem[]): void`| Set items |
|`getCustomer(): ICustomer / undefined`| Get customer |
|`setCustomer(customer: ICustomer): void`| Set customer |
|`getShippingMethod(): IShippingMethod/ undefined`| Get shipping method |
|`setShippingMethod(shippingMethod: IShippingMethod): void`| Set shipping method |
|`getSerializer(): ISerializer / undefined`| Get serializer |
|`setSerializer(serializer: ISerializer): void`| Set serializer |
|`getTaxRates(): TaxRates`| Get tax rates |
|<u>private</u> `setTaxRates(taxRates: TaxRates)`| Set tax rates |
|`setCustomerType(type: CustomerType): void` | Set customer's type (`PRIVATE`/`COMMERCIAL`) |
|`setDestinationCountry(country: string): void`| Set destination country |
|`addItems(items: IItem[]): void` | Add item/items to the cart |
|`remItem(sku: string): void`| Remove item from the cart by SKU (Stock Keeping Unit) |
|`modifyItem(item: any)`| Update item |
|`modifyItemQuantity(sku: string, quantity: number): void` | Modify item's quantity |
|`getItemCount(): number` | Get item count |
|`getItemQuantity(sku: string): number` | Get quantity of particular item |
|`getGrandQuantity(): number` | Item count x quantity of each item |
|`getTaxes(keepOriginalTaxType?: boolean ): { [taxType: string]: { netPrice: Decimal, rate: Decimal, desc: string, price: Decimal } } ` | Get tax list, with ratios and additive costs |
|`getTotalNet(): number` | Get sum of item and shipping costs (taxes excluded) |
|`getTotalGross(): number`| Get sum of item and shipping costs (taxes included) |
|`getShipping(): { price: Money, [prop: string]: any }` | Get item's shipping info |
|<u>static</u> `round(money: Money): string` | Convert money type (`number`/`string`/`Decimal`) to `string` with rounding |

## Development

To lint, transpile and test, run:

```sh
npm test
```

## Couriers

`IShippingMethod` interface implementations:

- [`Courier`](src/model/impl/Courier.ts)
- [`SelfPickUp`](src/model/impl/SelfPickUp.ts)

Courier Plans:

- [DHL premium business](/src/resources/dhl-premium-business.ts) based on contract based pricing not publicly available.
- [DHL private customers](/src/resources/dhl-private.ts) based on private customer pricing info [pdf](https://www.dhl.de/content/dam/images/pdf/dhl-paket-pk-preisuebersicht-012020.pdf) | [de](https://www.dhl.de/de/privatkunden/pakete-versenden/deutschlandweit-versenden/paket.html) | [intl](https://www.dhl.de/en/privatkunden/preise/preise-international.html) | [web](https://www.dhl.de/popweb/gw2/nepal/ProductOrder.action)
- [DHL express](/src/resources/dhl-express.ts) based on contract based pricing not publicly available.

## Calculation Logic

### Taxes

For VAT calculation, the cart applies the EU ruleset for taxation which is
exemplified in the following with a shop that is located in Germany and customer
location location/ type being:

- Germany private: VAT applies
- Germany commercial: VAT applies
- Other EU countries private: VAT applies
- Other EU countries commercial: VAT free
- Non-EU countries private: VAT free
- Non-EU countries commercial: VAT free

This also works for other countries as it's just a simplification of this for
most countries. Sales taxes and other country specific taxes can be added.

Legal background:

- [EU shipments, private](https://www.stuttgart.ihk24.de/Fuer-Unternehmen/recht_und_steuern/steuerrecht/Umsatzsteuer_Verbrauchssteuer/Umsatzsteuer_international/Warenlieferungen/Lieferungen_an_Privatpersonen_EU_Binnenmarkt/684812)
- [EU shipments, commercial](https://www.stuttgart.ihk24.de/Fuer-Unternehmen/recht_und_steuern/steuerrecht/Umsatzsteuer_Verbrauchssteuer/Umsatzsteuer_international/Umsatzsteuerfreie_Lieferungen_Unternehmen/3011330)
- [Non-EU shipments](https://www.stuttgart.ihk24.de/Fuer-Unternehmen/recht_und_steuern/steuerrecht/Umsatzsteuer_Verbrauchssteuer/Umsatzsteuer_international/Belegnachweise_steuerfreie_Ausfuhren/3011320)
