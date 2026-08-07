let value = 3;
let negValue = -value;
console.log(negValue);


console.log(2*2);
console.log(2**2);            // pow(2, 2);
console.log(2**3);            // pow(2, 3);
console.log(2/3);             // JS treats this as 2.0/3.0 as JS has either number OR bigint -> both stored as IEEE 754 double-precision floating-point numbers.
console.log(Math.floor(2/3)); // 0
console.log(Math.trunc(2/3)); // 0 (both functions do the same work)
console.log(2%3);             // 2


let str1 = "Hello";
let str2 = ", Daksh"
console.log(str1 + str2);


console.log("1" + 2);              // 12
console.log(1 + "2");              // 12
console.log("1" + 2 + 2);          // 122
console.log("1" + "2" + 2);        // 122
console.log(1 + 2 + "2");          // 32
console.log(1 + "2" + "2");        // 122
console.log(1 + 3 + "2" + "2");    // 422
// ****DISCLAIMER: WRITING SUCH CONFUSING CODE IS DISCOURAGED, USE OF PARENTHESIS IS PREFFERED.

// conclusion -> if first element are numbers then add them and then concatinate the sum to next strings one by one.
//            -> if first element is string then all elements will be treated as string.

// MORE GENERALISED STATEMENT:
// JavaScript evaluates + from left to right.
// If either operand of the current + is a string, JavaScript converts the other operand to a string and performs concatenation.


// The unary + tries to convert its operand into a number.
console.log(+true);      // 1            // DON'T DO SUCH NON-SENSES IN YOUR CODE 
console.log(+"");        // 0
console.log(+false);     // 0
console.log(+"123");     // 123
console.log(+"12.5");    // 12.5
console.log(+"abc");     // NaN
console.log(+null);      // 0
console.log(+undefined); // NaN


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;         // DISCOURAGED
console.table([num1, num2, num3]);

let gameCounter = 100;
gameCounter++;                      // postfix
console.log(gameCounter); 
++gameCounter;                      // prefix
console.log(gameCounter);





