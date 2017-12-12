import { getCountryByAbbreviation } from '../src/index';

test('getCountryByAbbreviation returns expected value', () => {
    let result = getCountryByAbbreviation('UK');
    expect(result).toEqual('UK');
});

test('getCountryByAbbreviation returns expected value', () => {
    let result = getCountryByAbbreviation('US');
    expect(result).toEqual('USA');
});

test('getCountryByAbbreviation returns undefined', () => {
    let result = getCountryByAbbreviation('NONE');
    expect(result).toBe.undefined;
});
