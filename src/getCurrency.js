import currencyMap from './map/currency-map';

const getCurrency = (currencyAbbr) => {
    return currencyMap[currencyAbbr];
};

export default getCurrency;

