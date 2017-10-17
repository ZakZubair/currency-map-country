import getCountry from './getCountry';

const getCurrencyAbbreviation = (countryName) => {
    const country = getCountry(countryName);
    if(country) {
        return country.cur;
    }
    return undefined;
};

export default getCurrencyAbbreviation;