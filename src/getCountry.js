import countryMap from './map/country-map';

const getCountry = (countryName) => {
    return countryMap[countryName];
};

export default getCountry;