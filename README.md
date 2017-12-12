<h1 align="left">
  currency-map-country
  
  [![Build Status](https://travis-ci.org/ZakZubair/currency-map-country.svg?branch=master)](https://travis-ci.org/ZakZubair/currency-map-country)
  [![Known Vulnerabilities](https://snyk.io/test/github/zakzubair/currency-map-country/badge.svg)](https://snyk.io/test/github/zakzubair/currency-map-country)
  ![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</h1>

Mapping of countries and their primary currency along with currency data.

## Installation

    npm install currency-map-country
   
## Test

#### Simple test
    npm run test
    
#### Test with watch    
    npm run test:watch 
    
#### Test coverage    
    npm run test:coverage  

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


### Get country from abbreviation

```js
import { getCountryByAbbreviation } from 'currency-map-country';
getCountryByAbbreviation('UK'); //=> 'UK'
getCurrencyAbbreviation('US'); //=> 'USA'
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