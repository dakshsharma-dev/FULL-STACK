// conversion to Number
console.log("Conversion to Number");

// string -> number
let s = "54abc";
console.log(typeof s);                  // string
let valueInNumber = Number(s);          
console.log(typeof valueInNumber);      // number
console.log(valueInNumber);             // NaN(Not a Number)


// ************NOTE**********:   
// let x = Number("a") / String(5) / Boolean(5) / BigInt(5) / Symbol(..)  -->> These are function calls as Number(), String(), Boolean(), BigInt(), Symbol() are CONSTRUCTORS not CAST-OPERATORS.
// No such constructors for null or undefined.  
// While number, bigint, string, boolean, symbol, null, undefined are actual primitive datatypes.

// null -> number
let s1 = null;
console.log(typeof s1);                  // object*****
let valueInNumber1 = Number(s1);         
console.log(typeof valueInNumber1);      // number
console.log(valueInNumber1);             // 0*****

// undefined -> number
let s2 = undefined;
console.log(typeof s2);                  // undefined
let valueInNumber2 = Number(s2);         
console.log(typeof valueInNumber2);      // number
console.log(valueInNumber2);             // NaN

// string -> number
let s3 = "Daksh";
console.log(typeof s3);
let valueInNumber3 = Number(s3);
console.log(typeof valueInNumber3);       // number
console.log(valueInNumber3);              // NaN

// boolean -> number
let s4 = true;
console.log(typeof s4);
let valueInNumber4 = Number(s4);
console.log(typeof valueInNumber4);       // number
console.log(valueInNumber4);              // 1




// conversion to Boolean
console.log("Conversion to Boolean");

// number -> boolean
let s5 = 5;
let s6 = Boolean(s5);
console.log(typeof s6);
console.log(s6);

// string -> boolean
let a = "Daksh";
let b = Boolean(a);
console.log(typeof b);
console.log(b);         // true(string is not empty)

let c = "";
let d = Boolean(c);
console.log(typeof d);
console.log(d);         // false(string is empty)




// conversion to String 
console.log("Conversion to String");

let num = 98;
let string = String(num);
console.log(typeof string);
console.log(string);
 
