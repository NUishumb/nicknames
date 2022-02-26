import Validator from '../Validator';

describe.each([
    { received: 'test6578g', expected: false },
    { received: 'Us11er', expected: true },
    { received: 'Us11e22r', expected: true },
    { received: 'User', expected: true },
    { received: 'test55', expected: false },
    { received: '_test', expected: false },
    { received: 'te55st555s', expected: true },
    { received: 'U77s77e77r', expected: true },
    { received: 'user-', expected: false },
])('.add($#)', ({ received, expected }) => {
    test(`returns ${expected}`, () => {
        expect(new Validator().validateUsername(received)).toBe(expected);
    });
});
