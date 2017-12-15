import getCountry from './getCountry';

const getCurrencyAbbreviation = (countryName, moreCountries = {}) => {
    const country = getCountry(countryName, moreCountries);
    if(country) {
        return country.cur;
    }
    return undefined;
};

export default getCurrencyAbbreviation;
