import { getCurrencyAbbreviation } from '../src/index';

test('getCurrencyAbbreviation returns expected value', () => {
    let result = getCurrencyAbbreviation('UK');
    expect(result).toEqual('GBP');
});

test('getCurrencyAbbreviation returns undefined', () => {
    let result = getCurrencyAbbreviation('NONE');
    expect(result).toBe.undefined;
});