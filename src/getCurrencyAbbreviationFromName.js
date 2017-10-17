import currencyMap from './map/currency-map';
import findKey from 'lodash.findkey';

const getCurrencyAbbreviationFromName = currencyName => {
    return findKey(currencyMap, c => {
        return c.name === currencyName;
    });
};

export default getCurrencyAbbreviationFromName;