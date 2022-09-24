//import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("Euro to Dollar", function () {

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Dollar to Yen", function () {
    // use the function like its suppoed to be used
    const yen = fromDollarToYen(4.2)

    const expected = 4.2 * 127.9;

    // this is the comparison for the unit test
    expect(fromDollarToYen(4.2)).toBeCloseTo(537.18);
})

test("Yen to Pound", function () {
    // use the function like its supposed to be used
    const pounds = fromYenToPound(537.18)

    const expected = 537.18 * 0.8;

    // this is the comparison for the unit test.
    expect(fromYenToPound(537.18)).toBeCloseTo(429.744);
})