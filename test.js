import chai from 'chai';
import { getCountry, getCurrency, getCurrencyAbbreviation, getCountryByAbbreviation } from './index';

describe('country-currency-map', () => {
    it('getCountry returns expected value', () => {
        let result = getCountry('USA');
        chai.expect(result.abbreviation).to.equal('US');
        chai.expect(result.currency).to.equal('USD');
    });

    it('getCountry returns undefined', () => {
        let result = getCountry('Unknown Country');
        chai.expect(result).to.be.undefined;
    });

    it('getCurrency returns expected value', () => {
        let result = getCurrency('USD');
        chai.expect(result.symbolFormat).to.contain('$');
        chai.expect(result.name).to.equal('U.S. Dollar (USD)');
    });

    it('getCurrency returns undefined', () => {
        let result = getCurrency('NONE');
        chai.expect(result).to.be.undefined;
    });

    it('getCurrencyAbbreviation returns expected value', () => {
        let result = getCurrencyAbbreviation('Spain');
        chai.expect(result).to.equal('EUR');
    });

    it('getCurrencyAbbreviation returns undefined', () => {
        let result = getCurrencyAbbreviation('Unknown Country');
        chai.expect(result).to.be.undefined;
    });

    it('getCountryByAbbreviation returns expected value', () => {
        let result = getCountryByAbbreviation('US');
        chai.expect(result).to.equal('USA');
    });

    it('getCountryByAbbreviation returns undefined', () => {
        let result = getCountryByAbbreviation('USA');
        chai.expect(result).to.be.undefined;
    });
});
