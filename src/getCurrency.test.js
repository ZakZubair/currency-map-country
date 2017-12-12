import { getCurrency } from '../src/index';

test('getCurrency returns expected value', () => {
    let result = getCurrency('USD');
    expect(result.symbolFormat).toEqual('${#}');
    expect(result.name).toBe('U.S. Dollar (USD)');
});

test('getCurrency returns undefined', () => {
    let result = getCurrency('NONE');
    expect(result).toBe.undefined;
});
