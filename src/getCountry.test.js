import { getCountry } from './index';

test('getCountry returns expected value', () => {
    let result = getCountry('UK');
    expect(result.abbr).toBe('UK');
    expect(result.cur).toBe('GBP');
});

//Custom countries
const moreCountries = {
    'Zak': {
        'abbr': 'Zk',
        'cur': 'Zk'
    },
    'Zan': {
        'abbr': 'Zn',
        'cur': 'Zn'
    }
};

test('getCountry with custom country list', () => {
    let result = getCountry('Zak', moreCountries);
    expect(result.abbr).toBe('Zk');
    expect(result.cur).toBe('Zk');
});

test('getCountry with custom country list, use from the main list', () => {
    let result = getCountry('UK', moreCountries);
    expect(result.abbr).toBe('UK');
    expect(result.cur).toBe('GBP');
});

test('getCountry returns undefined', () => {
    let result = getCountry('Unknown Country');
    expect(result).toBe.undefined;
});