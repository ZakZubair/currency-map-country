import { getCurrencyAbbreviation } from '../src/index';

test('getCurrencyAbbreviation returns expected value', () => {
    let result = getCurrencyAbbreviation('UK');
    expect(result).toEqual('GBP');
});

const otherCountries = {
    'Europe': {
        'abbr': 'europe',
        'cur': 'EUR'
    },
    'Asia': {
        'abbr': 'asia',
        'cur': 'RS'
    }
};

test('getCurrencyAbbreviation returns expected value for additional countries', () => {
    let result = getCurrencyAbbreviation('Europe', otherCountries);
    expect(result).toEqual('EUR');
});

test('getCurrencyAbbreviation returns undefined', () => {
    let result = getCurrencyAbbreviation('NONE');
    expect(result).toBe.undefined;
});
