# currency-map-country
Mapping of countries and their primary currency along with currency data.

## Installation

    npm install currency-map-country

## Usage

### Get country data from country name

```js
import { getCountry } from 'currency-map-country';
getCountry('USA'); //=> { abbreviation: 'US', currency: 'USD' }
getCountry('Canada'); //=> { abbreviation: 'CA', currency: 'CAD' }
```

### Get currency data from currency abbreviation

```js
import { getCurrency } from 'currency-map-country';
getCurrency('USD'); //=> { name: 'U.S. Dollar (USD)', symbolFormat: '${#}' }
getCurrency('CAD'); //=> { name: 'Canadian Dollar (CAD)', symbolFormat: 'C${#}' }
```

### Get currency abbreviation from a country name

```js
import { getCurrencyAbbreviation } from 'currency-map-country';
getCurrencyAbbreviation('UK'); //=> 'GBP'
getCurrencyAbbreviation('Canada'); //=> 'CAD'
```

### Format currency

```js
import { formatCurrency } from 'currency-map-country';
formatCurrency('100,000', 'GBP'); //=> '£100,000'
formatCurrency('100,000', 'EUR'); //=> '€100,000'
```

### Get Currency List
```js
import { getCurrencyList } from 'currency-map-country';
getCurrencyList(); //=> [ { abbr: "AFA", name: "Afghanistan Afghani (AFA)", symbolFormat: "AFA {#}" }, { abbr: "ALL", name: "Albanian Lek (ALL)", symbolFormat:, "ALL {#}" }, ... ]
```

### Get Currency Abbreviation From Name
```js
import { getCurrencyAbbreviationFromName } from 'currency-map-country';
getCurrencyAbbreviationFromName('U.S. Dollar (USD)'); //=> 'USD'
```