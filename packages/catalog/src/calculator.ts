

export const filterTax = (
    tax: Tax,
    origin: Country,
    destination: Country,
    private_customer: boolean,
  ) => (
    private_customer &&
    tax.country_id === origin.id &&
    (
      !destination.economic_areas ||
      origin.economic_areas?.some(
        e => destination.economic_areas.includes(e)
      )
    )
  );
  
  export const calcAmount = (
    gross: number | BigNumber,
    taxes: RatioedTax[],
    origin: Country,
    destination: Country,
    currency?: Currency,
    private_customer = true,
  ): Amount => {
    taxes = taxes.filter(
      tax => filterTax(
        tax,
        origin,
        destination,
        private_customer,
      )
    );
    gross = new BigNumber(gross);
    const precision = currency?.precision ?? 2;
    const vats = taxes.map((tax): VAT => ({
      tax_id: tax.id,
      vat: gross.multipliedBy(
        tax.rate
      ).multipliedBy(
        tax.tax_ratio ?? 1.0
      ).decimalPlaces(
        precision
      ).toNumber(),
    }));
    const net = vats.reduce(
      (a, b) => a.plus(b.vat),
      gross
    );
    return {
      currency_id: currency?.id,
      gross: gross.decimalPlaces(precision).toNumber(),
      net: net.decimalPlaces(precision).toNumber(),
      vats,
    };
  };
  
  export const calcTotalAmounts = (
    amounts: Amount[],
    currency_map?: ResourceMap<Currency>, 
  ): Amount[] => {
    const amount_map = amounts?.reduce(
      (a, b) => {
        const c = a[b.currency_id];
        if (c) {
          c.push(b);
        }
        else {
          a[b.currency_id] = [b];
        }
        return a;
      },
      {} as Record<string, Amount[]>
    ) ?? {};
  
    const total_amounts = Object.entries(amount_map).map(
      ([currency_id, amounts]) => {
        const precision = currency_map.get(currency_id, null)?.precision ?? 2;
        return {
          currency_id,
          gross: amounts.reduce(
            (a, b) => a.plus(b.gross), new BigNumber(0)
          ).decimalPlaces(precision).toNumber(),
          net: amounts.reduce(
            (a, b) => a.plus(b.net), new BigNumber(0)
          ).decimalPlaces(precision).toNumber(),
          vats: Object.entries(amounts.flatMap(
            a => a.vats
          ).reduce(
            (a, b) => {
              const c = a[b.tax_id];
              if (c) {
                c.push(b);
              }
              else {
                a[b.tax_id] = [b];
              }
              return a;
            },
            {} as Record<string, VAT[]>
          )).map(([tax_id, v]) => ({
            tax_id,
            vat: v.reduce(
              (a, b) => a.plus(b.vat), new BigNumber(0)
            ).decimalPlaces(precision).toNumber()
          })),
        } as Amount
      }
    );
    return total_amounts;
  };