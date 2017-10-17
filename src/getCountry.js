import countryMap from './map/country-map';

const getCountry = (countryName) => countryMap[countryName];

export default getCountry;