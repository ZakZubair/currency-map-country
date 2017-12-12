import { getCurrencyAbbreviationFromName } from '../src/index';

test('getCurrencyAbbreviationFromName returns expected value', () => {
    let result = getCurrencyAbbreviationFromName('British Pound (GBP)');
    expect(result).toEqual('GBP');
});

test('getCurrencyAbbreviation returns undefined', () => {
    let result = getCurrencyAbbreviationFromName('NONE');
    expect(result).toBe.undefined;
});