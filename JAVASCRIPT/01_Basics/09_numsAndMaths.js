// +++++++++++++++++++++++++++++++++++++++++NUMBERS++++++++++++++++++++++++++++++++++++

const score = 400;
console.log(score);                  // 400

const balance = new Number(100);     // guarantee that the balance will be Number object but CREATING NUMBER OBJECTS IS USUALLY DISCOURAGED (use primitive)
console.log(typeof balance);         // object
console.log(balance);                // [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));     // 100.00 // returns a STRING representing this number using fixed-point notation with the specified number of decimal places (default is 0).


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  // 23.9     
const otherNum = 123.8966
console.log(otherNum.toPrecision(3));     // 124      // // returns a STRING rounded to the specified number of significant digits (default is number as it is).
const otherNum1 = 1123.8966
console.log(otherNum1.toPrecision(3));    // 1.12e+3 


const hundreds = 1000000;
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'));    // 10,00,000
console.log(hundreds.toLocaleString('en-US'));    // 1,000,000


console.log(Number.MIN_VALUE);             // ~5e-324                 // Smallest positive number greater than 0 (not the most negative number) // 0 < MIN_VALUE < 0.000000000000...
console.log(Number.MIN_SAFE_INTEGER);      // -9007199254740991       // Smallest integer that can be represented exactly without precision loss
console.log(Number.MAX_VALUE);             // ~1.79e+308              // Largest finite number
console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991        // Largest integer that can be represented exactly without precision loss

console.log(Number.MIN_VALUE > 0);         // true
console.log(Number.MIN_VALUE > 1);         // false

console.log(Number.MAX_VALUE * 2);         // Infinity
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 (both results are same precision lost)



// +++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4.4));   // 4.4
console.log(Math.abs(4));      // 4
console.log(Math.round(5.5));  // 6
console.log(Math.ceil(5.3));   // 6
console.log(Math.floor(5.7));  // 5
console.log(Math.min(5, 5, 7, 8, -1));    // -1 
console.log(Math.max(5, 5, 7, 8, -1));    // 8

console.log(Math.random());                             // returns a pseudo-random number in [0, 1)
console.log(Math.random() * 10);                        // returns a number in [0, 10)
console.log(Math.random() * 10 + 1);                    // returns a number in [1, 11)
console.log(Math.floor(Math.random() * 10) + 1);        // returns a integer in [1, 10] because we are using floor


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);    // returns an integer in [min, max]
