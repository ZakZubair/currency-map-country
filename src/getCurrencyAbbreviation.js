import getCountry from './getCountry';

const getCurrencyAbbreviation = (countryName, moreCountries = undefined) => {
    const country = getCountry(countryName, moreCountries = undefined);
    if(country) {
        return country.cur;
    }
    return undefined;
};

export default getCurrencyAbbreviation;