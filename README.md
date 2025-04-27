# is-sepa

List of SEPA countries and the currencies they use

## Example usage

```javascript
import { isSepaCountry, getCurrencyOfSepaCountry } from "is-sepa";

isSepaCountry("AT"); // true
isSepaCountry("US"); // false

getCurrencyOfSepaCountry("AT"); // "EUR"
getCurrencyOfSepaCountry("GB"); // "GBP"
```

You can import the raw data like this:

```javascript
import { map } from "is-sepa";

const arrayOfSepaCountries = [...map.keys()];
```

## Maintenance

This module is different from all the others:

- We will maintain the freshness of the data for years.
- Last update was in Jan 2025. Meaning, Albania, Montenegro, North Macedonia and Moldova are also in the list.
