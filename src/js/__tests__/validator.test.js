import Validator from '../Validator';

test('username test case 0', () => {
    const received = new Validator().validateUsername('test');

    expect(received).toEqual(true);
});

test('username test case 1', () => {
    const received = new Validator().validateUsername('Abc123d');

    expect(received).toEqual(true);
});

test('username test case 2', () => {
    const received = new Validator().validateUsername('testertestingtests6n');

    expect(received).toEqual(true);
});

test('username test case 3', () => {
    const received = new Validator().validateUsername('_test');

    expect(received).toEqual(false);
});

test('username test case 4', () => {
    const received = new Validator().validateUsername('test5');

    expect(received).toEqual(false);
});

test('username test case 5', () => {
    const received = new Validator().validateUsername('test6578g');

    expect(received).toEqual(false);
});
