import countryMap from './map/country-map';

const getCountryByAbbreviation = (countryAbbr) => {
    let findKey = require('lodash.findkey');
    let country = findKey(countryMap, { 'abbreviation': countryAbbr });
    return country;
};

export default getCountryByAbbreviation;