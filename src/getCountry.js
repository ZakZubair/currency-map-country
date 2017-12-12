import countryMap from './map/country-map';

const getCountry = (countryName, moreCountries = {}) => {

    const countries = Object.assign({}, countryMap, moreCountries);
    return countries[countryName];

};

export default getCountry;