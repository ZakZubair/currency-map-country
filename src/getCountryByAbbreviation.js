import countryMap from './map/country-map';
import findKey from 'lodash.findkey';

const getCountryByAbbreviation = (countryAbbr) => {
    return findKey(countryMap, { 'abbr': countryAbbr });
};

export default getCountryByAbbreviation;