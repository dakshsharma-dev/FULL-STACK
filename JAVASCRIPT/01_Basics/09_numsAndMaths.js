const score = 400;
console.log(score);                  // 400

const balance = new Number(100);     // guarantee that the balance will be Number object
console.log(typeof balance);         // object
console.log(balance);                // [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));     // 100.00


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  // 23.9     
const otherNum = 123.8966
console.log(otherNum.toPrecision(3));     // 124      // i.e. toPrecision() returns a STRING with rounding off to 3 significant digits only.
const otherNum1 = 1123.8966
console.log(otherNum1.toPrecision(3));    // 1.12e+3 


const hundreds = 1000000;
console.log();

console.log(hundreds.toLocaleString());


