// conversion to Number
let s = "54abc";
console.log(typeof s);
let valueInNumber = Number(s);
console.log(typeof valueInNumber);      // number
console.log(valueInNumber);             // NaN(Not a Number)


let s1 = null;
console.log(typeof s1);
let valueInNumber1 = Number(s1);
console.log(typeof valueInNumber1);      // number
console.log(valueInNumber1);             // 0


let s2 = undefined;
console.log(typeof s2);
let valueInNumber2 = Number(s2);
console.log(typeof valueInNumber2);      // number
console.log(valueInNumber2);             // NaN


let s3 = "Daksh";
console.log(typeof s3);
let valueInNumber3 = Number(s3);
console.log(typeof valueInNumber3);       // number
console.log(valueInNumber3);              // NaN


let s4 = true;
console.log(typeof s4);
let valueInNumber4 = Number(s4);
console.log(typeof valueInNumber4);       // number
console.log(valueInNumber4);              // 1


// conversion to Boolean
console.log("Conversion to Boolean");


let s5 = 1;
let s6 = Boolean(s5);
console.log(typeof s6);
console.log(s6);

let a = "Daksh";
let b = Boolean(a);
console.log(typeof b);
console.log(b);         // true

let c = "";
let d = Boolean(c);
console.log(typeof d);
console.log(d);         // false


// conversion to String

let num = 98;
let string = String(num);
console.log(typeof string);
console.log(string);
 
