import getCountry from './getCountry';

const getCurrencyAbbreviation = (countryName) => {
    let country = getCountry(countryName);
    if(country) {
        return country.currency;
    }
    return undefined;
};

export default getCurrencyAbbreviation;