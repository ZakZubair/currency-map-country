import currencyMap from './map/currency-map';

const getCurrencyList = () => {
    let currencyArray = Object.keys(currencyMap).map(currencyAbbr => {
        return {
            abbr: currencyAbbr,
            name: currencyMap[currencyAbbr].name,
            symbolFormat: currencyMap[currencyAbbr].symbolFormat
        };
    });
    return currencyArray;
};

export default getCurrencyList;