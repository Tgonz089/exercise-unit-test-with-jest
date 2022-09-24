//this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // convert the given valueInDollars to Yen
    let valueInYen = valueInDollar * 127.9;
    //return the Yen value
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.8;
    //return the pounds value
    return valueInPound;
}

// export the functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}