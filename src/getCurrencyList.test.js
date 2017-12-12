import { getCurrencyList } from '../src/index';

test('getCurrencyList returns expected value', () => {
    let result = getCurrencyList();
    expect(result[0]).toEqual({ abbr: 'AFA',
        name: 'Afghanistan Afghani (AFA)',
        symbolFormat: 'AFA {#}' });
});
