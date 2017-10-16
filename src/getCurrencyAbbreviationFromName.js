import currencyMap from './map/currency-map';

const getCurrencyAbbreviationFromName = (currencyName) => {
    let findKey = require('lodash.findkey');
    let abbr =  findKey(currencyMap, function(c) {
        return c.name === currencyName;
    });
    return abbr;
};

export default getCurrencyAbbreviationFromName;