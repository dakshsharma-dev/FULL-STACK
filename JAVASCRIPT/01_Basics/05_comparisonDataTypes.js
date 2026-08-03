console.log("String comparisons with numbers");
console.log("2" > 1);       // true // "2" is converted to 2 // although make sure while comparison datatypes are same 
console.log("02" > 1);      // true




console.log("String comparison with String");
console.log("Daksh" == "Daksh");
console.log("Daksh" > "Aadi");     // true
console.log("Aadi" > "Daksh");     // false // checked lexicographically
console.log("Adi" > "Aadi");       // true
console.log("Aadi" > "Adi");       // false



/* Never  use such kind of conversion and comparison 

console.log("Null comparisons");
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

// comparisons (>, <, >=, <=) all work differently, convert the null to number, i.e. 0. Therefore, null > 0 is false and null >= 0 is true
// equality(==) doesn't convert null to 0



console.log("Undefined comparisons");
console.log(undefined > 0);  // false(always)
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false  

*/


console.log("Strict check");
// ===  -> strict check -> even checks the datatype
console.log("2" === 2);


