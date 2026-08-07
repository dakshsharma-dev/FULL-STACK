// Primitive DataType(call by value, never referenced, so changes are made in copy only not at actual memory location of data)

    // 7 types: String, Number, BigInt, Boolean, Null, Undefined, Symbol

const outsideTemp = null;
let userEmail;            // undefined
let userName = undefined; // undefined

const id = Symbol("123");           // creates a brand new unique symbol
const anotherId = Symbol("123");    // creates another brand new unique symbol
console.log(id);                    // symbol


console.log(id === anotherId);      // false // it is similar to creating two objects


// Non-Primitive DataType(call by reference is possible)

    // Array, Objects, Functions

// *******NOTE: In JavaScript, everything that is not a primitive is an "object', and functions are a special subtype of object with the special 'typeof' result "function".

const heros = ["IronMan", "SpiderMan", "Captain", "Loki"];  // array

let myObj = {                                               // object
    name: "Daksh",
    age: 20,
}

const myFunction = function(){                              // function
    console.log("Hello World!");
}

console.log(typeof heros);                  // object
console.log(typeof myFunction);             // function although it is called ****object function****




