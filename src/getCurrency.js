import currencyMap from './map/currency-map';

const getCurrency = (currencyAbbr) => currencyMap[currencyAbbr];

export default getCurrency;

