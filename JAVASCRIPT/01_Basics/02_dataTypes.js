"use strict";  // treat all JS code as newer version of js

// alert(3 + 3);  // we are using nodejs, not browser

// EXAMPLES
let name = "Daksh";
let age = 20;
let isLogggedIn = true;


// PRIMITIVE DATATYPES     -> immutable
    //1. Numeric
        // number    // range: -(2^53 - 1) to (2^53 - 1)
        // bigint
    //2. Non-numeric
        // string    -> '' or ""
        // boolean
        // null      -> standalone value
        // undefined -> e.g. let state;
        // symbol    -> uniqueness        -> mostly used in react


// NON-PRIMITIVE DATATYPES
    // object
    // arrays
    // function
    // data object
    // regular expression

console.log(typeof(null));          // object
console.log(typeof(undefined));     // undefined
console.log(typeof(symbol));        // undefined

console.log(typeof(20));            // number
console.log(typeof("Daksh"));       // string 
console.log(typeof(true));          // boolean
console.log(typeof(9323n));         // bigint

