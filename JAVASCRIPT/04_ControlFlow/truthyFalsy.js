const userEmail = [];

if (userEmail) {                       // we haven't compared it with anything still since the string isn't empty, it is considered to be true 
    console.log("Got user email");
}
else{
    console.log("don't have user email");
}


// falsy values: which values are considered to be false
// false, 0, -0, BigInt's 0n, "", null, undefined, NaN        

// truthy values: which values are considered to be true
// "0", 'false', " ", [], {}, function(){}                    -> LEARN THESE                // NOTE: Only an empty string is considered to be false. Any OTHER string which is not empty is true;            


// then how to check an empty array
if(userEmail.length === 0){                  
    console.log("array is empty");
}

// empty object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("empty object");
}


// important:
console.log(false == 0);   // true;
console.log(false == '');  // true
console.log(0 == '');      // true



// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;      // 5
val1 = null ?? 10;      // 10
val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20 // 10

console.log(val1);


// Ternary operator 

// condition ? true statement : false statement;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

